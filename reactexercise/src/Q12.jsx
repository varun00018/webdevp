import React, { Component } from "react"; 
 
class Q12 extends Component { 
 render() { 
   const { firstName, lastName } = this.props; 
   return <h2>Hello, {firstName} {lastName}!</h2>; 
 } 
} 
 
export default Q12;
