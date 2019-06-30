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
      dropdownPenghasilan: null,
      dropdownNikah: null,
      dropdownAnak: null,
      dropdownRumah: null,
      ratingValue: null,
      id: null,
      nama: null,
      id_kawin: null,
      id_penghasilan: null,
      id_rumah: null,
      id_anak: null,
      tempat_lahir: null,
      tanggal_lahir: null,
      alamat: null,
      status_member: null
    };
  }

  kirimData = e => {
    e.preventDefault();
    let formproduk = new FormData();
    formproduk.append("id", this.state.id);
    formproduk.append("nama", this.state.nama);
    formproduk.append("id_kawin", this.state.id_kawin);
    formproduk.append("id_penghasilan", this.state.id_penghasilan);
    formproduk.append("id_rumah", this.state.id_rumah);
    formproduk.append("id_anak", this.state.id_anak);
    formproduk.append("tanggal_lahir", this.state.tanggal_lahir);
    formproduk.append("tanggal_lahir", this.state.tanggal_lahir);
    formproduk.append("alamat", this.state.alamat);
    formproduk.append("status_member", this.state.status_member);
    axios.post("http://localhost:8000/add", formproduk);
    window.location.href = "/ListRegistrasi";
  };

  test() {
    console.log(this.state.nim);
    console.log(this.state.radioValue);
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Add Data Member</h1>
        </div>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Personal</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.target.value })}
                />
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
              {/* <div className="p-col-12 p-md-6">
                <label>Jenis Kelamin </label>
                <div className="p-col-12 p-md-6 form-group">
                  <RadioButton
                    className="form-control"
                    value="Laki-Laki"
                    inputId="rb1"
                    onChange={event =>
                      this.setState({ jenis_kelamin: event.value })
                    }
                    checked={this.state.radioValue === "Laki-Laki"}
                  />
                  <label htmlFor="rb1" className="p-radiobutton-label">
                    Laki-Laki
                  </label>{" "}
                  &nbsp; &nbsp;
                  <RadioButton
                    className="form-control"
                    value="Perempuan"
                    inputId="rb2"
                    onChange={event =>
                      this.setState({ jenis_kelamin: event.value })
                    }
                    checked={this.state.radioValue === "Perempuan"}
                  />
                  <label htmlFor="rb2" className="p-radiobutton-label">
                    Perempuan
                  </label>
                </div> */}
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Asal Sekolah"
                  ref={in_sklh => (this.asal_sekolah = in_sklh)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Jurusan SMA"
                  ref={in_jrsn => (this.jurusan_sekolah = in_jrsn)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Nilai UN"
                  type="number"
                  ref={in_nilai => (this.nilai_UN = in_nilai)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Tahun Lulus SMA"
                  type="number"
                  ref={in_smalulus => (this.tahun_lulus = in_smalulus)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Tahun Masuk Kuliah"
                  type="number"
                  ref={in_msk => (this.tahun_masuk_kuliah = in_msk)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <Dropdown
                  className="form-control"
                  placeholder="Prodi"
                  value="2"
                  ref={in_msk => (this.id_prodi = in_msk)}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <Dropdown className="form-control" placeholder="Fakultas" />
              </div>
            </div>
            <div className="p-col-3">
              <Button
                label="Save"
                icon="pi pi-plus"
                onClick={() => this.test()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
