import React from 'react';
import {Form} from './form'
import logo from '../images/logo.png';

export class FormLogoWidget extends React.Component{
  render()
  {
    return(
      <div class="container">
    <div class="row">
      <div class="col">
        <Form/>
      </div>
      <div class="col">
        <img src ={logo}  />
      </div>
      <div  class="col">
        <h1>WIDGET</h1>
      </div>
    </div>
  </div>
    );
  }
}
