function search() 
{
   // alert('hi');
    var qrStr = window.location.search;
    //alert(qrStr);
    qrStr = qrStr.split("?")[1].split("=")[1];

    var getRef = document.getElementById("PageNo");
    getRef.innerHTML = qrStr;
}