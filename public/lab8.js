function fun()
{
    let adult=parseInt(document.getElementById("id1").value);
    let child=parseInt(document.getElementById("id2").value);
    let total=(adult*10)+(child*5);
    let c = String.fromCharCode(8377);
    document.getElementById("id3").value=c+" "+total;
}
