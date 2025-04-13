import { useState } from 'react' 
 
 
 
function Q2() { 
 const fruits = ["Apple","Orange","Guava"]; 
 
 return ( 
   <ul> 
     {fruits.map((fruit,index)=>( 
       <li key={index}>{fruit}</li> 
     ))} 
   </ul> 
 ) 
} 
 
export default Q2
