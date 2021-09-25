let start=1;
//create container
var container=document.createElement("div");
container.setAttribute("class","container");
 

//create row
var row=document.createElement("div");
row.setAttribute("class","row");

//create column
var col1=document.createElement("div")
col1.setAttribute("class","col-12");

//create table
var table=document.createElement('table');
table.setAttribute('class','table');
table.setAttribute("cellspacing","15");
table.setAttribute("cellpadding","7");

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.setAttribute("cellspacing","7");
th1.setAttribute("align","center");
th1.innerHTML="Id";
var th2=document.createElement('th');
th2.innerHTML="Name";
var th3=document.createElement('th');
th3.innerHTML="Email";
tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr1=document.createElement('tr');
var tr2=document.createElement('tr');
var tr3=document.createElement('tr');
var tr4=document.createElement('tr');
var tr5=document.createElement('tr');
//create a td tag

var td11=document.createElement('td');
var td12=document.createElement('td');
var td13=document.createElement('td');
tr1.append(td11,td12,td13);

var td21=document.createElement('td');
var td22=document.createElement('td');
var td23=document.createElement('td');
tr2.append(td21,td22,td23);

var td31=document.createElement('td');
var td32=document.createElement('td');
var td33=document.createElement('td');
tr3.append(td31,td32,td33);

var td41=document.createElement('td');
var td42=document.createElement('td');
var td43=document.createElement('td');
tr4.append(td41,td42,td43);

var td51=document.createElement('td');
var td52=document.createElement('td');
var td53=document.createElement('td');
tr5.append(td51,td52,td53);

tbody.append(tr1,tr2,tr3,tr4,tr5);
table.append(thead,tbody);

var pagenum=document.createElement("div");
pagenum.setAttribute("id","page");





//create pagination
var col2=document.createElement("div")
col2.setAttribute("class","col-12");
col2.setAttribute("id","numbercol");

var unlist=document.createElement("ul");
unlist.setAttribute("class","pagination");
unlist.setAttribute("id","numbers");



var l1=document.createElement("li");
l1.setAttribute("id","l1");
var anchor1=document.createElement("a");
anchor1.setAttribute("id","anchor1");
anchor1.innerHTML="1";

var l2=document.createElement("li");
l2.setAttribute("id","l2");
var anchor2=document.createElement("a");
anchor2.setAttribute("id","anchor2");
anchor2.innerHTML="2";

var l3=document.createElement("li");
l3.setAttribute("id","l3");
var anchor3=document.createElement("a");
anchor3.setAttribute("id","anchor3");
anchor3.innerHTML="3";

var l4=document.createElement("li");
l4.setAttribute("id","l4");
var anchor4=document.createElement("a");
anchor4.setAttribute("id","anchor4");
anchor4.innerHTML="4";

var l5=document.createElement("li");
l5.setAttribute("id","l5");
var anchor5=document.createElement("a");
anchor5.setAttribute("id","anchor5");
anchor5.innerHTML="5";

var l6=document.createElement("li");
l6.setAttribute("id","l6");
var anchor6=document.createElement("a");
anchor6.setAttribute("id","anchor6");
anchor6.innerHTML="6";

var l7=document.createElement("li");
l7.setAttribute("id","l7");
var anchor7=document.createElement("a");
anchor7.setAttribute("id","anchor7");
anchor7.innerHTML="7";

var l8=document.createElement("li");
l8.setAttribute("id","l8");
var anchor8=document.createElement("a");
anchor8.setAttribute("id","anchor8");
anchor8.innerHTML="8";

var l9=document.createElement("li");
l9.setAttribute("id","l9");
var anchor9=document.createElement("a");
anchor9.setAttribute("id","anchor9");
anchor9.innerHTML="9";

var l10=document.createElement("li");
l10.setAttribute("id","l10");
var anchor10=document.createElement("a");
anchor10.setAttribute("id","anchor10");
anchor10.innerHTML="10";

var l11=document.createElement("li");
l11.setAttribute("id","l11");
var anchor11=document.createElement("a");
anchor11.setAttribute("id","anchor11");
anchor11.innerHTML="11";

var l12=document.createElement("li");
l12.setAttribute("id","l12");
var anchor12=document.createElement("a");
anchor12.setAttribute("id","anchor12");
anchor12.innerHTML="12";

var l13=document.createElement("li");
l13.setAttribute("id","l13");
var anchor13=document.createElement("a");
anchor13.setAttribute("id","anchor13");
anchor13.innerHTML="13";

var l14=document.createElement("li");
l14.setAttribute("id","l14");
var anchor14=document.createElement("a");
anchor14.setAttribute("id","anchor14");
anchor14.innerHTML="14";

var l15=document.createElement("li");
l15.setAttribute("id","l5");
var anchor15=document.createElement("a");
anchor15.setAttribute("id","anchor15");
anchor15.innerHTML="15";

var l16=document.createElement("li");
l16.setAttribute("id","l16");
var anchor16=document.createElement("a");
anchor16.setAttribute("id","anchor16");
anchor16.innerHTML="16";

var l17=document.createElement("li");
l17.setAttribute("id","l17");
var anchor17=document.createElement("a");
anchor17.setAttribute("id","anchor17");
anchor17.innerHTML="17";

var l18=document.createElement("li");
l18.setAttribute("id","l18");
var anchor18=document.createElement("a");
anchor18.setAttribute("id","anchor18");
anchor18.innerHTML="18";

var l19=document.createElement("li");
l19.setAttribute("id","l9");
var anchor19=document.createElement("a");
anchor19.setAttribute("id","anchor19");
anchor19.innerHTML="19";

var l20=document.createElement("li");
l20.setAttribute("id","l20");
var anchor20=document.createElement("a");
anchor20.setAttribute("id","anchor20");
anchor20.innerHTML="20";

var first=document.createElement("li");
first.setAttribute("id","l23");
var prev=document.createElement("a");
prev.setAttribute("id","prev");
prev.innerHTML="&laquo; Previous";

var l21=document.createElement("li");
l21.setAttribute("id","l21");
var spread1=document.createElement("a");
spread1.setAttribute("id","spread1");
spread1.setAttribute("style","pointer-events: none");
spread1.innerHTML="...";

var l22=document.createElement("li");
l22.setAttribute("id","l22");
var spread2=document.createElement("a");
spread2.setAttribute("id","spread2");
spread2.setAttribute("style","pointer-events: none");
spread2.innerHTML="...";


var last=document.createElement("li");
last.setAttribute("id","l24");
var next=document.createElement("a");
next.setAttribute("id","next");
next.innerHTML="Next &raquo;";

first.append(prev);
l1.append(anchor1);
l2.append(anchor2);
l3.append(anchor3);
l4.append(anchor4);
l5.append(anchor5);
l6.append(anchor6);
l7.append(anchor7);
l8.append(anchor8);
l9.append(anchor9);
l10.append(anchor10);
l11.append(anchor11);
l12.append(anchor12);
l13.append(anchor13);
l14.append(anchor14);
l15.append(anchor15);
l16.append(anchor16);
l17.append(anchor17);
l18.append(anchor18);
l19.append(anchor19);
l20.append(anchor20);
l21.append(spread1);
l22.append(spread2);
last.append(next);

unlist.append(first,l1,l21,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l22,l20,last);

col1.append(table,pagenum);
col2.append(unlist);
row.append(col1,col2);
container.append(row);
document.body.append(container);
buttonDisplayInitial()

//function to display button at page onloading;
function buttonDisplayInitial()
{
    first.style.display="inline";
    l1.style.display="inline";
    l21.style.display="none";
     l2.style.display="inline";
     l3.style.display="inline";
     l4.style.display="inline";
     l5.style.display="inline";
     l6.style.display="none";
     l7.style.display="none";
     l8.style.display="none";
     l9.style.display="none";
     l10.style.display="none";
     l11.style.display="none";
     l12.style.display="none";
     l13.style.display="none";
     l14.style.display="none";
     l15.style.display="none";
     l16.style.display="none";
     l17.style.display="none";
     l18.style.display="none";
     l19.style.display="none";
     l20.style.display="inline";
     l22.style.display="inline";
     last.style.display="inline";
     first.style.pointerEvents="none";
}
    

//condition to display 1,2,3...button
function displaybutton(start)
{
    let a=[];

    
    if(start<=3)
    {
        start=3;
        l21.style.display="none";
        l22.style.display="inline";
        

    }
    else if(start>3&&start<16)
    {
        l21.style.display="inline";
        l22.style.display="inline";
        
    }
    
    else if(start>=16)
    {
        start=16;
        l21.style.display="inline";
        l22.style.display="none";
    }
    
    startpoint=parseInt(start)-2;
    endpoint=parseInt(start)+2;
   for(let i=1;i<19;i++)
   {
       if(i>=startpoint&&i<=endpoint)
       {
           a[i]="inline";
       }
       else
       {
           a[i]="none";
       }
   }
  
     l2.style.display=a[1];
     l3.style.display=a[2];
     l4.style.display=a[3];
     l5.style.display=a[4];
     l6.style.display=a[5];
     l7.style.display=a[6];
     l8.style.display=a[7];
     l9.style.display=a[8];
     l10.style.display=a[9];
     l11.style.display=a[10];
     l12.style.display=a[11];
     l13.style.display=a[12];
     l14.style.display=a[13];
     l15.style.display=a[14];
     l16.style.display=a[15];
     l17.style.display=a[16];
     l18.style.display=a[17];
     l19.style.display=a[18];

}

 // condition to enable and disable prev and next button
function enablebutton(start)
{
    if(start==1)
    {
        first.style.pointerEvents="none";
        last.style.pointerEvents="auto";
    }
    else if(start==20)
    {
        first.style.pointerEvents="auto";
        last.style.pointerEvents="none";
    }
    else{
        first.style.pointerEvents="auto";
        last.style.pointerEvents="auto";

    }

}

//Add  event on display respective page for respective button 
document.querySelector("#prev").addEventListener("click",function(event)
{
     start=parseInt(start)-1;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#next").addEventListener("click",function(event)
{
     start=parseInt(start)+1;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor1").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor1");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor2").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor2");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);

     showSelectOne(start);
})
document.querySelector("#anchor3").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor3");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})

document.querySelector("#anchor4").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor4");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
     
})
document.querySelector("#anchor5").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor5");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor6").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor6");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor7").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor7");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor8").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor8");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor9").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor9");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor10").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor10");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})

document.querySelector("#anchor11").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor11");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor12").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor12");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor13").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor13");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})

document.querySelector("#anchor14").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor14");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor15").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor15");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor16").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor16");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor17").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor17");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor18").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor18");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor19").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor19");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})
document.querySelector("#anchor20").addEventListener("click",function(event)
{
    var x=document.getElementById("anchor20");
     start=x.innerHTML;
     console.log(start);
     rendering(start);
     displaybutton(start);
     enablebutton(start);
     showSelectOne(start);
})


// funtion to fetch the respective data using api 
function rendering(range)
{
const url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
const xhr=new XMLHttpRequest()

xhr.onreadystatechange=function()
{
    if(xhr.readyState===4);
    {
        if(xhr.status===200)
        {
            var data=JSON.parse(xhr.response);
            
            //console.log(data);
            appendData(data,range);
            function appendData(data,range)
            {

                var i=(range-1)*5;
                td11.innerHTML=data[i].id;
                td12.innerHTML=data[i].name;
                td13.innerHTML=data[i].email;

                td21.innerHTML=data[i+1].id;
                td22.innerHTML=data[i+1].name;
                td23.innerHTML=data[i+1].email;

                td31.innerHTML=data[i+2].id;
                td32.innerHTML=data[i+2].name;
                td33.innerHTML=data[i+2].email;

                td41.innerHTML=data[i+3].id;
                td42.innerHTML=data[i+3].name;
                td43.innerHTML=data[i+3].email;

                td51.innerHTML=data[i+4].id;
                td52.innerHTML=data[i+4].name;
                td53.innerHTML=data[i+4].email;
                var pagenumber=`Page Number: ${start}`;
                pagenum.innerHTML=pagenumber;
                
            }
        }
        else
        {
            console.log("ERROR")
        }
    }
};
xhr.open("GET",url)
xhr.send();
}

//function for showing selected page
function showSelectOne(start)
{
    if(start==1)
    {
        anchor1.style.backgroundColor="rgb(38, 173, 97)";
        anchor1.style.color="white";
    }
    else
    {
        anchor1.style.backgroundColor="white";
        anchor1.style.color="seagreen";
    }
    if(start==2)
    {
        anchor2.style.backgroundColor="rgb(38, 173, 97)";
        anchor2.style.color="white";
    }
    else{
        anchor2.style.backgroundColor="white";
        anchor2.style.color="seagreen";

    }
    if(start==3)
    {
        anchor3.style.backgroundColor="rgb(38, 173, 97)";
        anchor3.style.color="white";
    }
    else{
        anchor3.style.backgroundColor="white";
        anchor3.style.color="seagreen";

    }
    if(start==4)
    {
        anchor4.style.backgroundColor="rgb(38, 173, 97)";
        anchor4.style.color="white";
    }
    else{
        anchor4.style.backgroundColor="white";
        anchor4.style.color="seagreen";

    }
    if(start==5)
    {
        anchor5.style.backgroundColor="rgb(38, 173, 97)";
        anchor5.style.color="white";
    }
    else{
        anchor5.style.backgroundColor="white";
        anchor5.style.color="seagreen";

    }
    if(start==6)
    {
        anchor6.style.backgroundColor="rgb(38, 173, 97)";
        anchor6.style.color="white";
    }
    else{
        anchor6.style.backgroundColor="white";
        anchor6.style.color="seagreen";

    }
    if(start==7)
    {
        anchor7.style.backgroundColor="rgb(38, 173, 97)";
        anchor7.style.color="white";
    }
    else{
        anchor7.style.backgroundColor="white";
        anchor7.style.color="seagreen";

    }
    if(start==8)
    {
        anchor8.style.backgroundColor="rgb(38, 173, 97)";
        anchor8.style.color="white";
    }
    else{
        anchor8.style.backgroundColor="white";
        anchor8.style.color="seagreen";

    }
    if(start==9)
    {
        anchor9.style.backgroundColor="rgb(38, 173, 97)";
        anchor9.style.color="white";
    }
    else{
        anchor9.style.backgroundColor="white";
        anchor9.style.color="seagreen";

    }
    if(start==10)
    {
        anchor10.style.backgroundColor="rgb(38, 173, 97)";
        anchor10.style.color="white";
    }
    else{
        anchor10.style.backgroundColor="white";
        anchor10.style.color="seagreen";

    }
    if(start==11)
    {
        anchor11.style.backgroundColor="rgb(38, 173, 97)";
        anchor11.style.color="white";
    }
    else
    {
        anchor11.style.backgroundColor="white";
        anchor11.style.color="seagreen";
    }
    if(start==12)
    {
        anchor12.style.backgroundColor="rgb(38, 173, 97)";
        anchor12.style.color="white";
    }
    else{
        anchor12.style.backgroundColor="white";
        anchor12.style.color="seagreen";

    }
    if(start==13)
    {
        anchor13.style.backgroundColor="rgb(38, 173, 97)";
        anchor13.style.color="white";
    }
    else{
        anchor13.style.backgroundColor="white";
        anchor13.style.color="seagreen";

    }
    if(start==14)
    {
        anchor14.style.backgroundColor="rgb(38, 173, 97)";
        anchor14.style.color="white";
    }
    else{
        anchor14.style.backgroundColor="white";
        anchor14.style.color="seagreen";

    }
    if(start==15)
    {
        anchor15.style.backgroundColor="rgb(38, 173, 97)";
        anchor15.style.color="white";
    }
    else{
        anchor15.style.backgroundColor="white";
        anchor15.style.color="seagreen";

    }
    if(start==16)
    {
        anchor16.style.backgroundColor="rgb(38, 173, 97)";
        anchor16.style.color="white";
    }
    else{
        anchor16.style.backgroundColor="white";
        anchor16.style.color="seagreen";

    }
    if(start==17)
    {
        anchor17.style.backgroundColor="rgb(38, 173, 97)";
        anchor17.style.color="white";
    }
    else{
        anchor17.style.backgroundColor="white";
        anchor17.style.color="seagreen";

    }
    if(start==18)
    {
        anchor18.style.backgroundColor="rgb(38, 173, 97)";
        anchor18.style.color="white";
    }
    else{
        anchor18.style.backgroundColor="white";
        anchor18.style.color="seagreen";

    }
    if(start==19)
    {
        anchor19.style.backgroundColor="rgb(38, 173, 97)";
        anchor19.style.color="white";
    }
    else{
        anchor19.style.backgroundColor="white";
        anchor19.style.color="seagreen";

    }
    if(start==20)
    {
        anchor20.style.backgroundColor="rgb(38, 173, 97)";
        anchor20.style.color="white";
    }
    else{
        anchor20.style.backgroundColor="white";
        anchor20.style.color="seagreen";

    }

}


