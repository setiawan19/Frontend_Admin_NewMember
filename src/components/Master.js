import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { Rating } from "primereact/rating";
import { ColorPicker } from "primereact/colorpicker";
import { Editor } from "primereact/editor";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Link, Redirect } from "react-router-dom";

export class Master extends Component {
  constructor() {
    super();
    this.state = {
      dataPenghasilan: [],
      dataNikah: [],
      dataAnak: [],
      dataRumah: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/penghasilan").then(getdata => {
      this.setState({
        dataPenghasilan: getdata.data
      });
    });
    axios.get("http://localhost:8000/anak").then(getdata => {
      this.setState({
        dataAnak: getdata.data
      });
    });
    axios.get("http://localhost:8000/nikah").then(getdata => {
      this.setState({
        dataNikah: getdata.data
      });
    });
    axios.get("http://localhost:8000/rumah").then(getdata => {
      this.setState({
        dataRumah: getdata.data
      });
    });
  }
  btnEdit_P = data => {
    var url1 = `/EditMaster_Penghasilan/${data.id}`;
    return (
      <div>
        {/* <a> */}
        <Link to={url1}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-secondary"
          />
        </Link>
        {/* </a> */}
      </div>
    );
  };
  btnEdit_N = data => {
    var url2 = `/EditMaster_Nikah/${data.id}`;
    return (
      <div>
        <Link to={url2}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-secondary"
          />
        </Link>
      </div>
    );
  };
  btnEdit_A = data => {
    var url3 = `/EditMaster_Anak/${data.id}`;
    return (
      <div>
        <Link to={url3}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-secondary"
          />
        </Link>
      </div>
    );
  };
  btnEdit_R = data => {
    var url4 = `/EditMaster_Rumah/${data.id}`;
    return (
      <div>
        <Link to={url4}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-secondary"
          />
        </Link>
      </div>
    );
  };

  //#region Button Delete
  del_P = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/penghasilan/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  del_N = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/nikah/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  del_A = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/anak/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  del_R = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/rumah/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  btnDel_P = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => this.del_P(data)}
        />
      </div>
    );
  };
  btnDel_N = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => this.del_N(data)}
        />
      </div>
    );
  };
  btnDel_A = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => this.del_A(data)}
        />
      </div>
    );
  };
  btnDel_R = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => this.del_R(data)}
        />
      </div>
    );
  };
  //#endregion

  render() {
    let Add_P = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        {/* <a style={{ float: "left", fontSize: 15 }} className="add-btn"> */}
        <Link to="/AddMaster_Penghasilan">
          <Button label="Add" icon="pi pi-plus" />
        </Link>
        {/* </a> */}
      </div>
    );
    let Add_N = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        {/* <a style={{ float: "left", fontSize: 15 }} className="add-btn"> */}
        <Link to="/AddMaster_Nikah">
          <Button label="Add" icon="pi pi-plus" />
        </Link>
        {/* </a> */}
      </div>
    );
    let Add_A = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        {/* <a style={{ float: "left", fontSize: 15 }} className="add-btn"> */}
        <Link to="/AddMaster_Anak">
          <Button label="Add" icon="pi pi-plus" />
        </Link>
        {/* </a> */}
      </div>
    );
    let Add_R = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        {/* <a style={{ float: "left", fontSize: 15 }} className="add-btn"> */}
        <Link to="/AddMaster_Rumah">
          <Button label="Add" icon="pi pi-plus" />
        </Link>
        {/* </a> */}
      </div>
    );
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>List Data Master Point</h1>
          <div className="p-col-12 p-md-10 ">
            <DataTable
              value={this.state.dataPenghasilan}
              header="List Penghasilan"
              rows={10}
              footer={Add_P}
              responsive={true}
              //selection={this.state.dataTableSelection}
              // onSelectionChange={event =>
              //   this.setState({ dataTableSelection: event.value })
              // }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              <Column header="Edit" body={this.btnEdit_P} />
              <Column header="Delete" body={this.btnDel_P} />
            </DataTable>
          </div>
          <div className="p-col-12 p-md-10">
            <DataTable
              value={this.state.dataRumah}
              header="List Rumah"
              rows={10}
              footer={Add_R}
              responsive={true}
              // selection={this.state.dataTableSelection}
              // onSelectionChange={event =>
              //   this.setState({ dataTableSelection: event.value })
              // }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              {/* <Column field="id_fk" header="id_fk" sortable={true} /> */}
              <Column header="Edit" body={this.btnEdit_R} />
              <Column header="Delete" body={this.btnDel_R} />
            </DataTable>
          </div>
          <div className="p-col-12 p-md-10">
            <DataTable
              value={this.state.dataNikah}
              header="List Nikah"
              rows={10}
              footer={Add_N}
              responsive={true}
              // selection={this.state.dataTableSelection}
              // onSelectionChange={event =>
              //   this.setState({ dataTableSelection: event.value })
              // }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              {/* <Column field="id_fk" header="id_fk" sortable={true} /> */}
              <Column header="Edit" body={this.btnEdit_N} />
              <Column header="Delete" body={this.btnDel_N} />
            </DataTable>
          </div>
          <div className="p-col-12 p-md-10">
            <DataTable
              value={this.state.dataAnak}
              header="List Anak"
              rows={10}
              footer={Add_A}
              responsive={true}
              // selection={this.state.dataTableSelection}
              // onSelectionChange={event =>
              //   this.setState({ dataTableSelection: event.value })
              // }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              {/* <Column field="id_fk" header="id_fk" sortable={true} /> */}
              <Column header="Edit" body={this.btnEdit_A} />
              <Column header="Delete" body={this.btnDel_A} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
