var count = 0;

//function openMe(inside)
//{
//    var i, content;
//    content = document.getElementsByClassName("content");
//    for(i = 0; i < content.length; i++)
//        {
//            content[i].style.display="none";
//        }
//    document.getElementById(inside).style.display="block";
//}



function OpenNewTab() 
{

    if (count>8)
    {
     return false;
    }

//make tab button
    var b = document.createElement('button');
    b.setAttribute('content', 'test content');
    b.setAttribute('class', 'btn');
    b.setAttribute('id', 'btn_' + count);
    b.innerHTML = 'Tab Id ' + count;
    b.setAttribute('onclick', 'HideAllExceptMe(div_' + count + ')');
    //alert(b.id);
    var NewTab = document.getElementById("NewTab");
    var getRef = document.getElementById("tabButttons");
    getRef.insertBefore(b, NewTab);
  


    //make div First
    var makediv = document.createElement("div");
    makediv.setAttribute("height", "564px");
    makediv.setAttribute("width", "564px");
    makediv.setAttribute("position", "relative");
    makediv.setAttribute("overflow", "hidden");
    makediv.setAttribute('id', 'div_' + count);

    //add freame to div
    var site = "Google.htm?pageNo=" + count;
    makediv.innerHTML = '<iframe src="' + site + '" style="border: 0pt none ;   height:475px;  margin-bottom:auto; " scrolling="yes"></iframe>';

    var getRef = document.getElementById("first");
    getRef.appendChild(makediv);   

    
   
    //alert("end="+count);
    var fndTab = document.getElementById("btn_" + count);
    HideAllExceptMe(fndTab);
   

    //change url
    var divurl = document.getElementById("divurl");
    divurl.innerHTML = "Google.htm?pageNo=" + count;

     //inreament count foe next button Id
      count = count + 1;
}
function HideAllExceptMe(  Myid) 
{

   // alert("enter inside " + Myid.id);
    //alert("count= " + count);
    for (i = 0; i < count; i++) 
    {
        //alert("loop start");
         var AllDive = document.getElementById('div_' + i);
        //alert("find div= " + AllDive.id);
        var currectid = AllDive.id;
        var Mydiv = Myid.id;

        //alert("Mydiv= " + Mydiv);

        if (currectid != Mydiv) 
        {
           // alert("current div id  =" + currectid);
           // alert( "hide other dive "  );
            AllDive.style.display = "none";

        }
        else 
        {

            //alert("show me dive= " + Myid.id);
            AllDive.style.display = "block";
            var divurl = document.getElementById("divurl");
            divurl.innerHTML = "Google.htm?pageNo=" + i;
        }
        //alert(" loop end");
    }
    
}