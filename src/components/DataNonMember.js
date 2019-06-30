import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { OrganizationChart } from "primereact/organizationchart";
import { Tree } from "primereact/tree";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { PickList } from "primereact/picklist";
import { OrderList } from "primereact/orderlist";
import { FullCalendar } from "primereact/fullcalendar";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

export class DataNonMember extends Component {
  constructor() {
    super();
    this.state = {
      dataTableValue: []
    };
    this.deleteData = this.deleteData.bind(this);
    this.onDataSelect = this.onDataSelect.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:8000/non_member").then(getdata => {
      this.setState({
        dataTableValue: getdata.data
      });
    });
  }

  deleteData() {
    let index = this.findSelectedDataIndex();
    this.setState({
      dataTableValue: this.state.dataTableValue.filter((val, i) => i !== index),
      selectedData: null,
      dataTableValue: null,
      displayDialog: false
    });
  }
  findSelectedDataIndex() {
    return this.state.dataTableValue.indexOf(this.state.selectedData);
  }
  onDataSelect(e) {
    this.setState({
      displayDialog: true,
      dataTableValue: Object.assign({}, e.data)
    });
  }

  buttonApp() {
    return (
      <div>
        <button onClick={() => window.alert("test")}>Test</button>
      </div>
    );
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
            <h1>List Data Member</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              footer={footer}
              header="List Member"
              paginator={true}
              rows={10}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="lahir" header="Lahir" sortable={true} />
              <Column field="birth" header="Tgl Lahir" sortable={true} />
              <Column field="alamat" header="Alamat" sortable={true} />
              <Column field="member" header="Member" sortable={true} />
              <Column
                field="penghasilan"
                header="Penghasilan"
                sortable={true}
              />
              <Column field="rumah" header="Rumah" sortable={true} />
              <Column field="nikah" header="Menikah" sortable={true} />
              <Column field="anak" header="Anak" sortable={true} />
              <Column header="Edit" body={this.buttonApp.bind(this)} />
              <Column header="Delete" />
            </DataTable>
            {/* <table>
                            <thead>
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Prodi</th>
                                    <th>Fakultas</th>
                                    <th>Total SKS</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list_mhs}
                            </tbody>
                        </table> */}
          </div>
        </div>
      </div>
    );
  }
}
