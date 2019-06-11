import React from 'react';
import '../css/form.css';

export class Form extends React.Component{
  render()
  {
    return(
      <div className = "container">
        <form>
          {/* <label for = "number" >Enter</label> */}
           <input id = "number" type="number" class="form-control form-control-sm" placeholder = "NUMBER"/>
          <select id = "select" class="form-control form-control-sm">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
          {/* <label for = "secondnumber" >Enter</label> */}
          <input id = "secondnumber" type="number" class="form-control form-control-sm" placeholder = "NUMBER"/>
          <div style = {{textAlign : "center"}} ><button id = "button"  type="submit" class="btn btn-default">Submit</button></div>
        </form>
      </div>
    );
  }
}
