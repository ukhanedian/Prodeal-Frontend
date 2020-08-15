/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
class Details extends Component {
  state = {  }
  render() { 
    return (
      <div class="row py-5">
        <div 
          class="col-3 py-3" 
          style={{fontSize: "14px"}}
        >
          Name
        </div>
        <div class="col-7 py-3 border-bottom font-weight-bold">
          Usman Ahmed Khan
        </div>
        <div class="col-2 py-3">
          <a 
            type="button" 
            data-toggle="modal" 
            data-target="#editModal"
          >
            <i class="fa fa-pen"></i>
          </a>
        </div>
        <div class="col-3 py-3" style={{fontSize: "14px"}}>
          Email
        </div>
        <div class="col-7 py-3 border-bottom font-weight-bold">
          Email@gmail.com
        </div>
        <div class="col-2 py-3">
          <a 
            type="button" 
            data-toggle="modal" 
            data-target="#editModal"
          >
            <i class="fas fa-pen"></i>
          </a>
        </div>
        <div 
          class="col-3 py-3" 
          style={{fontSize: "14px"}}
        >
          Contact
        </div>
        <div class="col-7 py-3 border-bottom font-weight-bold">
          03001234567
        </div>
        <div class="col-2 py-3">
          <a 
            type="button" 
            data-toggle="modal" 
            data-target="#editModal"
          >
            <i class="fas fa-pen"></i>
          </a>
        </div>
        <div 
          class="col-3 py-3" 
          style={{fontSize: "14px"}}
        >
          City
        </div>
        <div class="col-7 py-3 border-bottom font-weight-bold">
          Karachi
        </div>
        <div class="col-2 py-3">
          <a type="button" data-toggle="modal" data-target="#editModal">
            <i class="fas fa-pen"></i>
          </a>
        </div>
      </div>
    );
  }
}
 
export default Details;