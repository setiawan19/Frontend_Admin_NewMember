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

export class AddMember extends Component {
  constructor() {
    super();
    this.state = {
      date1: null,
      radioValue: null,
      dropdownPenghasilan: [],
      dropdownPerpanjang: [],
      dropdownNikah: [],
      dropdownAnak: [],
      dropdownRumah: [],
      id: 0,
      nama: "",
      id_kawin: 1,
      id_penghasilan: 1,
      id_rumah: 1,
      id_anak: 1,
      id_perpanjang: 1,
      tempat_lahir: "",
      tanggal_lahir: "",
      alamat: "",
      status_member: ""
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/penghasilan").then(getdata => {
      this.setState({
        dropdownPenghasilan: getdata.data
      });
    });
    axios.get("http://localhost:8000/perpanjang").then(getdata => {
      this.setState({
        dropdownPerpanjang: getdata.data
      });
    });
    axios.get("http://localhost:8000/nikah").then(getdata => {
      this.setState({
        dropdownNikah: getdata.data
      });
    });
    axios.get("http://localhost:8000/anak").then(getdata => {
      this.setState({
        dropdownAnak: getdata.data
      });
    });
    axios.get("http://localhost:8000/rumah").then(getdata => {
      this.setState({
        dropdownRumah: getdata.data
      });
    });
  }
  // componentWillUpdate() {}

  // hitung = hasilPoint => {
  //   console.log("ini hitung ", hasilPoint);
  //   const nextStatus = hasilPoint >= 8 ? "iya" : "tidak";
  //   this.setState({ status_member: nextStatus });

  //   console.log("ID = ", this.state.id);
  //   console.log("status = ", this.state.status_member);
  // };
  saveData = () => {
    //    e.preventDefault();

    //get point penghasilan
    var x1 = this.state.dropdownPenghasilan.length;
    var point_P;
    for (var i = 0; i < x1; i++) {
      if (this.state.id_penghasilan == this.state.dropdownPenghasilan[i].id) {
        point_P = this.state.dropdownPenghasilan[i].point;
      }
    }
    //get point perpanjang
    var x7 = this.state.dropdownPerpanjang.length;
    var point_X;
    for (var i = 0; i < x7; i++) {
      if (this.state.id_perpanjang == this.state.dropdownPerpanjang[i].id) {
        point_X = this.state.dropdownPerpanjang[i].point;
      }
    }
    //get point anak
    var x2 = this.state.dropdownAnak.length;
    var point_A;
    for (var i = 0; i < x2; i++) {
      if (this.state.id_anak == this.state.dropdownAnak[i].id) {
        point_A = this.state.dropdownAnak[i].point;
      }
    }
    //get point Nikah
    var x3 = this.state.dropdownNikah.length;
    var point_N;
    for (var i = 0; i < x3; i++) {
      if (this.state.id_kawin == this.state.dropdownNikah[i].id) {
        point_N = this.state.dropdownNikah[i].point;
      }
    }
    //get point Rumah
    var x4 = this.state.dropdownRumah.length;
    var point_R;
    for (var i = 0; i < x4; i++) {
      if (this.state.id_rumah == this.state.dropdownRumah[i].id) {
        point_R = this.state.dropdownRumah[i].point;
      }
    }
    var hasilPoint = point_A + point_N + point_P + point_R + point_X;

    console.log("point penghasilan ", point_P);
    console.log("point anak ", point_A);
    console.log("point Nikah ", point_N);
    console.log("point Rumah ", point_R);
    console.log("point Hasil ", hasilPoint);
    const nextStatus = hasilPoint >= 8 ? "iya" : "tidak";
    this.setState({ status_member: nextStatus });

    if (this.state.status_member != "") {
      var url = "http://localhost:8000/add";
      axios
        .post(url, {
          id: this.state.id,
          nama: this.state.nama,
          id_kawin: this.state.id_kawin,
          id_penghasilan: this.state.id_penghasilan,
          id_perpanjang: this.state.id_perpanjang,
          id_rumah: this.state.id_rumah,
          id_anak: this.state.id_anak,
          tempat_lahir: this.state.tempat_lahir,
          tanggal_lahir: this.state.tanggal_lahir,
          alamat: this.state.alamat,
          status_member: this.state.status_member
        })
        .then(function(response) {
          console.log(response);
          if (alert("anda Berhasil menambahkan data")) {
            window.location.replace("/ListRegistrasi");
          }
        })
        .catch(function(error) {
          console.log(error);
          if (alert("anda gagal menambahkan data")) {
            window.location.reload();
          }
        });
    }
    // window.alert("anda berhasil menambahkan data");
    //  window.location.href = "/ListRegistrasi";
  };

  render() {
    // function hitung(hasilPoint) {
    //   console.log("ini hitung ", hasilPoint);
    //   const nextStatus = hasilPoint >= 8 ? "iya" : "tidak";
    //   this.setState({ status_member: nextStatus });

    //   console.log("ID = ", this.state.id);
    //   console.log("status = ", this.state.status_member);
    //   if (this.state.status_member != "") {
    //     var url = "http://localhost:8000/add";

    //     axios
    //       .post(url, {
    //         id: this.state.id,
    //         nama: this.state.nama,
    //         id_kawin: this.state.id_kawin,
    //         id_penghasilan: this.state.id_penghasilan,
    //         id_rumah: this.state.id_rumah,
    //         id_anak: this.state.id_anak,
    //         tempat_lahir: this.state.tempat_lahir,
    //         tanggal_lahir: this.state.tanggal_lahir,
    //         alamat: this.state.alamat,
    //         status_member: this.state.status_member
    //       })
    //       .then(function(response) {
    //         console.log(response);
    //         if (alert("anda Berhasil menambahkan data")) {
    //           window.location.href("/ListRegistrasi");
    //         }
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //         if (alert("anda gagal menambahkan data")) {
    //           window.location.reload();
    //         }
    //       });
    //   }
    // }
    // console.log("status2 = ", this.state.status_member);
    // if (
    //   this.state.status_member != "" &&
    //   this.state.nama != "" &&
    //   this.state.tempat_lahir != "" &&
    //   this.state.tanggal_lahir != "" &&
    //   this.state.id_anak != 0 &&
    //   this.state.id_kawin != 0 &&
    //   this.state.id_penghasilan != 0 &&
    //   this.state.id_rumah != 0
    // ) {
    //   var url = "http://localhost:8000/add";
    //   axios
    //     .post(url, {
    //       id: this.state.id,
    //       nama: this.state.nama,
    //       id_kawin: this.state.id_kawin,
    //       id_penghasilan: this.state.id_penghasilan,
    //       id_rumah: this.state.id_rumah,
    //       id_anak: this.state.id_anak,
    //       tempat_lahir: this.state.tempat_lahir,
    //       tanggal_lahir: this.state.tanggal_lahir,
    //       alamat: this.state.alamat,
    //       status_member: this.state.status_member
    //     })
    //     .then(function(response) {
    //       console.log(response);
    //       if (alert("anda Berhasil menambahkan data")) {
    //         window.location.href("/ListRegistrasi");
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //       if (alert("anda gagal menambahkan data")) {
    //         window.location.reload();
    //       }
    //     });
    // }

    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Add Data Member</h1>
        </div>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Personal</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-4 form-group">
                <label>Id</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Id"
                  name="id"
                  type="int"
                  value={this.state.id}
                  onChange={e => this.setState({ id: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Nama</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Alamat</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Alamat"
                  type="text"
                  value={this.state.alamat}
                  onChange={e => this.setState({ alamat: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Tempat Lahir</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Tempat Lahir"
                  type="text"
                  value={this.state.tempat_lahir}
                  onChange={e =>
                    this.setState({ tempat_lahir: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Tanggal Lahir</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <Calendar
                  className="form-control"
                  placeholder="Tanggal Lahir"
                  dateFormat="yy/mm/dd"
                  value={this.state.tanggal_lahir}
                  onChange={e =>
                    this.setState({ tanggal_lahir: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Penghasilan</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <select
                  value={this.state.id_penghasilan}
                  onChange={e =>
                    this.setState({
                      id_penghasilan: e.target.value,
                      validationError:
                        e.target.value == "" ? "pilih penghasilan" : ""
                    })
                  }
                  placeholder="pilih penghasilan"
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.dropdownPenghasilan.map((item, ind) => (
                    <option key={ind} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Status Rumah</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <select
                  value={this.state.id_rumah}
                  onChange={e =>
                    this.setState({
                      id_rumah: e.target.value,
                      validationError:
                        e.target.value == "" ? "pilih status rumah" : ""
                    })
                  }
                  placeholder="pilih status rumah"
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.dropdownRumah.map((item, ind) => (
                    <option key={ind} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Status Nikah</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <select
                  value={this.state.id_kawin}
                  onChange={e =>
                    this.setState({
                      id_kawin: e.target.value,
                      validationError:
                        e.target.value == "" ? "pilih Status Nikah" : ""
                    })
                  }
                  placeholder="pilih Status Nikah"
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.dropdownNikah.map((item, ind) => (
                    <option
                      key={ind}
                      value={item.id}
                      onChange={e =>
                        this.setState({
                          id_kawin: e.target.value,
                          validationError:
                            e.target.value == "" ? "pilih Status Nikah" : ""
                        })
                      }
                    >
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Status Anak</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <select
                  value={this.state.id_anak}
                  onChange={e =>
                    this.setState({
                      id_anak: e.target.value,
                      validationError:
                        e.target.value == "" ? "pilih Status Anak" : ""
                    })
                  }
                  placeholder="pilih Status Anak"
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.dropdownAnak.map((item, ind) => (
                    <option key={ind} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Perpanjang</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <select
                  value={this.state.id_perpanjang}
                  onChange={e =>
                    this.setState({
                      id_perpanjang: e.target.value,
                      validationError:
                        e.target.value == "" ? "pilih penghasilan" : ""
                    })
                  }
                  placeholder="pilih penghasilan"
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.dropdownPerpanjang.map((item, ind) => (
                    <option key={ind} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ================ */}
            <div className="p-col-3">
              <Button
                label="Save"
                icon="pi pi-plus"
                onClick={() => this.saveData()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
