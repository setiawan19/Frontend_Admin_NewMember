import React, { Component } from "react";
import { CarService } from "../service/CarService";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FullCalendar } from "primereact/fullcalendar";

export class Dashboard extends Component {
  render() {
    return (
      <div className="p-grid p-fluid dashboard">
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title"> Admin Users</span>
            <span className="detail">Number of visitors</span>
            <span className="count visitors">5</span>
          </div>
        </div>
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">List Data Member</span>
            <span className="detail">anggota yang menjadi member</span>
            <span className="count purchases">534</span>
          </div>
        </div>
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">List Data Non Member</span>
            <span className="detail">anggota yang belum menjadi member</span>
            <span className="count revenue">30</span>
          </div>
        </div>
      </div>
    );
  }
}
