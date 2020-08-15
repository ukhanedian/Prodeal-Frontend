/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Details from './details';
import Edit from './edit';
class Profile extends Component {
    state = {  }
    render() { 
        return (
            <main>
                <header 
                    class="bg-primary text-center" 
                    style={{height: "40px"}}
                >
                    Prodeal
                </header>
                <div 
                    class="row mx-auto mt-5"
                    style={{width: "80%", height: "100%"}}
                >
                    <div class="col-12 border">
                        <div class="pt-4 text-center">
                            <div class="row">
                                <div class="col-2">
                                    <a href="#">
                                        <i class="fas fa-arrow-left" style={{fontSize: "25px", color: "#000"}}></i>
                                    </a>
                                </div>
                                <div class="col-8 text-center">
                                    <i 
                                        class="fas fa-user-circle" 
                                        style={{fontSize: "54px", color: "#000"}}
                                    ></i>
                                    <h3>Customer Name</h3>
                                    <p class="lead">Email@gmail.com</p>
                                </div>
                                <div class="col-2">
                                    <a 
                                        type="button" 
                                        data-toggle="modal" 
                                        data-target="#editModal"
                                    >
                                        <i class="fas fa-pen"></i>
                                    </a>
                                </div>
                            </div>                            
                        </div>    
                    </div>
                    <hr></hr>
                    <Details />
                    Prodeal
                    <Edit />
                </div>
            </main>
        );
    }
}
 
export default Profile;