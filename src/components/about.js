import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Redirect } from "react-router-dom";
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
// import "./datatraining.css";

export class About extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h3>About</h3>

            <p>Aplikasi ini dibuat untuk pendaftaran member baru</p>
          </div>
        </div>
      </div>
    );
  }
}
