import React, { useState } from "react"; 

import QQQ5_1 from "./QQQ5_1"; 

const QQQ5 = () => { 

const [showComponent, setShowComponent] = useState(true); 

const toggleComponent = () => { 

setShowComponent((prev) => !prev); 

}; 

return ( 

<div className="p-6"> 

<button 

onClick={toggleComponent} 

className="bg-red-500 text-white px-4 py-2 rounded mb-4 

hover:bg-red-600" 

> 

{showComponent ? "Unmount Component" : "Mount Component"} 

</button> 

{showComponent && <QQQ5_1 />} 

</div> 

); 

}; 

export default QQQ5; 