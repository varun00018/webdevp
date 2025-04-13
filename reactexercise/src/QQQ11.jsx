function Child(props){ 

return( 

<> 

<h2>{props.msg}</h2> 

</> 

) 

} 

 

export default function QQQ11(){ 

const msg = "Hello, This is parent component with prop types"; 

return ( 

<> 

<Child msg = {msg}/> 

</> 

) 
}