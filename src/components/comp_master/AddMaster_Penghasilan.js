import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, Redirect } from "react-router-dom";

export class AddMaster_Penghasilan extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      nama: "",
      point: "",
      st: false
    };
  }
  componentWillUpdate() {
    if (this.state.st) {
      //window.location.href("/Master");
      return <Redirect to="/Master" />;
    }
  }
  savePenghasilan() {
    // e.preventDefault();
    console.log("id ", this.state.id);
    console.log("nama ", this.state.nama);
    console.log("point ", this.state.point);

    var url = "http://localhost:8000/penghasilan";
    axios
      .post(url, {
        id: this.state.id,
        nama: this.state.nama,
        point: this.state.point
      })
      .then(function(response) {
        console.log(response);
        if (alert("anda Berhasil menambahkan data")) {
          //window.location.href("/Master");
          // return <Redirect to="/Master" />;
          this.setState({
            st: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
        if (alert("anda gagal menambahkan data")) {
          window.location.reload();
        }
      });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Tambah Penghasilan</h1>
        </div>

        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Penghasilan</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText
                  required
                  placeholder="Penghasilan"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.target.value })}
                />
                <InputText
                  required
                  placeholder="Point"
                  type="number"
                  value={this.state.point}
                  onChange={e => this.setState({ point: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Save"
              icon="pi pi-plus"
              onClick={() => this.savePenghasilan()}
            />
          </div>
        </div>
      </div>
    );
  }
}
