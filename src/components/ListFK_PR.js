import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export class ListFK_PR extends Component {
  constructor() {
    super();
    this.state = {
      dataFK: [],
      dataPR: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/fakultas").then(getFK => {
      this.setState({
        dataFK: getFK.data
      });
    });
    axios.get("http://localhost:3210/prodi").then(getPR => {
      this.setState({
        dataPR: getPR.data
      });
    });
  }
  render() {
    let footer = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <button
          style={{ float: "left" }}
          className="pi pi-plus btn btn-primary"
        >
          <Link to="/AddMahasiswa">Add</Link>
        </button>
      </div>
    );
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>List Data Non Member</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              footer={footer}
              header="List Non Member"
              paginator={true}
              rows={10}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="nim" header="NIM" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column
                field="jenis_kelamin"
                header="Jenis Kelamin"
                sortable={true}
              />
              <Column field="nama_prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              {/* <Column header="Edit" body={this.buttonApp.bind(this)} /> */}
              <Column header="Edit" />
              <Column header="Delete" />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
