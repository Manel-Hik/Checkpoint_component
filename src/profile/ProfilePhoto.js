import React, { Component } from 'react';
import my_image from "./manel.jpeg"
import "./style.css"
export default class ProfilePhoto extends Component {
    render() {
        return(
        <>
        <div className="contt">
          <img className="me" src={my_image}/>
          </div>
        </>
        );
      }

}