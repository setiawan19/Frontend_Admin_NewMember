import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppInlineProfile } from "./AppInlineProfile";
import { Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
// import { FormsDemo } from "./components/FormsDemo";
// import { SampleDemo } from "./components/SampleDemo";
// import { DataDemo } from "./components/DataDemo";
// import { PanelsDemo } from "./components/PanelsDemo";
// import { OverlaysDemo } from "./components/OverlaysDemo";
// import { MenusDemo } from "./components/MenusDemo";
// import { MessagesDemo } from "./components/MessagesDemo";
// import { ChartsDemo } from "./components/ChartsDemo";
// import { MiscDemo } from "./components/MiscDemo";
// import { EmptyPage } from "./components/EmptyPage";
// import { Documentation } from "./components/Documentation";
import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "fullcalendar/dist/fullcalendar.css";
import "./layout/layout.css";
import "./App.css";
import { DataMember } from "./components/DataMember";
import { DataNonMember } from "./components/DataNonMember";
import { AddMember } from "./components/AddMember";
import { EditMember } from "./components/EditMember";
// import { ListFK_PR } from "./components/ListFK_PR";
import { Registrasi } from "./components/Registrasi";
import { DataTraining } from "./components/DataTraining";
import { Master } from "./components/Master";
import { AddMaster_Penghasilan } from "./components/comp_master/AddMaster_Penghasilan";
import { AddMaster_Nikah } from "./components/comp_master/AddMaster_Nikah";
import { AddMaster_Anak } from "./components/comp_master/AddMaster_Anak";
import { AddMaster_Rumah } from "./components/comp_master/AddMaster_Rumah";
import { EditMaster_Penghasilan } from "./components/comp_master/EditMaster_Penghasilan";
import { EditMaster_Nikah } from "./components/comp_master/EditMaster_Nikah";
import { EditMaster_Anak } from "./components/comp_master/EditMaster_Anak";
import { EditMaster_Rumah } from "./components/comp_master/EditMaster_Rumah";
import { AdminLogout } from "./components/AdminLogout";
import { AdminLogin } from "./components/AdminLogin";
import { About } from "./components/about";

class App extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        command: () => {
          window.location = "/Dashboard";
        }
      },
      {
        label: "Master",
        icon: "pi pi-fw pi-chart-bar",
        to: "/Master"
      },
      {
        label: "Registrasi",
        icon: "pi pi-fw pi-chart-bar",
        to: "/ListRegistrasi"
      },
      {
        label: "Data Training",
        icon: "pi pi-fw pi-chart-bar",
        to: "/DataTraining"
      },
      {
        label: "Status",
        icon: "pi pi-fw pi-bookmark",
        items: [
          // {label: 'Admin User', icon: 'pi pi-fw pi-user' },
          { label: "Diterima", icon: "pi pi-fw pi-users", to: "/data_member" },
          {
            label: "Ditolak",
            icon: "pi pi-fw pi-file",
            to: "/data_nonmember"
          }
        ]
      },
      {
        label: "About Aplication",
        icon: "pi pi-fw pi-question",
        to: "/About"
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    let logo =
      this.state.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";

    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <ScrollPanel
            ref={el => (this.layoutMenuScroller = el)}
            style={{ height: "100%" }}
          >
            <div className="layout-sidebar-scroll-content">
              <div className="layout-logo">
                {/* <img alt="Logo" src={logo} /> */}
                <h3 style={{ color: "white" }}>Prediksi Keanggotaan Golf</h3>
                <br />
              </div>
              {/* <AppInlineProfile /> */}
              <AppMenu
                model={this.menu}
                onMenuItemClick={this.onMenuItemClick}
              />
            </div>
          </ScrollPanel>
        </div>

        <div className="layout-main">
          <Route exact path="/" component={AdminLogin} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/data_member" component={DataMember} />
          <Route path="/data_nonmember" component={DataNonMember} />
          <Route path="/AddMember" component={AddMember} />
          <Route path="/EditMember" component={EditMember} />
          {/* <Route path="/Jurusan" component={ListFK_PR} /> */}
          <Route path="/ListRegistrasi" component={Registrasi} />
          <Route path="/DataTraining" component={DataTraining} />
          <Route path="/Master" component={Master} />
          <Route
            path="/AddMaster_Penghasilan"
            component={AddMaster_Penghasilan}
          />
          <Route path="/AddMaster_Nikah" component={AddMaster_Nikah} />
          <Route path="/AddMaster_Anak" component={AddMaster_Anak} />
          <Route path="/AddMaster_Rumah" component={AddMaster_Rumah} />
          <Route
            path="/EditMaster_Penghasilan"
            component={EditMaster_Penghasilan}
          />
          <Route path="/EditMaster_Nikah" component={EditMaster_Nikah} />
          <Route path="/EditMaster_Anak" component={EditMaster_Anak} />
          <Route path="/EditMaster_Rumah" component={EditMaster_Rumah} />
          <Route path="/AdminLogout" component={AdminLogout} />
          <Route path="/About" component={About} />
        </div>

        {/* <AppFooter /> */}

        <div className="layout-mask" />
      </div>
    );
  }
}

export default App;
