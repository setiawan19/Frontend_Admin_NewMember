import React, { Component } from 'react';
import axios from 'axios';

export class AddMahasiswa extends Component{
    constructor(){
        super();
        this.state = {
            dataTable: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3210/mahasiswa')
        .then((getdata)=>{
            this.setState({
                dataTableValue: getdata.data
            })
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}