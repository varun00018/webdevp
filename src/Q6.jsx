import { useState } from 'react' 
 
function Q6() {  
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"]; 
const today = new Date().getDay(); 
return <h2>Today is {days[today]}</h2>; 
} 
export default Q6 
