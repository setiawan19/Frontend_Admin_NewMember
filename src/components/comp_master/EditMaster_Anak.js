import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";

export class EditMaster_Anak extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      nama: '',
      point: '',
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/anak/${this.state.id}`).then(getData => {
      this.setState({
        nama: getData.data
      });
    });
  }

  saveData() {
    axios
      .post(`http://localhost:8000/anak/${this.state.id}`)
      .then(postdata => {
        this.setState({
          dataTableValue: postdata.data
        });
      });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Edit Data Anak</h1>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Anak</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Nama" type="text" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Point" type="number" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Update"
              icon="pi pi-pencil"
              onClick={this.saveData()}
            />
          </div>
        </div>
      </div>
    );
  }
}