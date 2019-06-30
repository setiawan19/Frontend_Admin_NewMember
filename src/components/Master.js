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

export class Master extends Component {
  constructor() {
    super();
    this.state = {
      date1: null,
      radioValue: null,
      dropdownPenghasilan: null,
      dropdownAnak: null,
      dropdownNikah: null,
      dropdownRumah: null,
      ratingValue: null,
      v1: null,
      v2: null,
      v3: null,
      v4: null,
      v5: null,
      v6: null,
      v7: null,
      v8: null,
      v9: null,
      v10: null,
      v11: null,
      v12: null,
      v13: null
    };
  }

  test() {
    console.log(this.state.nim);
    console.log(this.state.radioValue);
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <div className="p-grid">
              <div className="p-col-12 p-md-12">
                <label>Status Perkawinan</label>
                <div className="p-col-12 p-md-12 form-group">
                  <RadioButton
                    className="form-control"
                    value="1"
                    inputId="rb1"
                    onChange={event => this.setState({ v1: event.value })}
                    checked={this.state.v1 === "2"}
                  />
                  <label htmlFor="rb1" className="p-radiobutton-label">
                    Belum Menikah
                  </label>{" "}
                  &nbsp; &nbsp;
                  <RadioButton
                    className="form-control"
                    value="2"
                    inputId="rb2"
                    onChange={event => this.setState({ v1: event.value })}
                    checked={this.state.v1 === "2"}
                  />
                  <label htmlFor="rb2" className="p-radiobutton-label">
                    Menikah
                  </label>
                </div>
              </div>

              <div className="p-col-12">
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
        </div>
      </div>
    );
  }
}
