import React from "react"



function About(){
  var i = 0;


  

  return(
      
<div><table style= {{width:"100%" }}><tr><td><h1>HTML</h1>

<div id="myProgress, HTML">
  <div id="html" class="myBar">100%</div>
</div></td><td>
<h1>CSS</h1>

<div id="myProgress">
  <div id="css" class="myBar">90%</div>
</div></td>
<td>
<h1>Bootstrap</h1>

<div id="myProgress">
  <div id="bootstrap" class="myBar">90%</div>
</div>
</td>
</tr>
<tr><td>

<h1>Javascript</h1>

<div id="myProgress">
  <div id="javascript" class="myBar">70%</div>
</div>
</td>
<td>

<h1>Jquery</h1>

<div id="myProgress">
  <div id="jquery" class="myBar">75%</div>
</div>
</td>
<td>
<h1>EJS</h1>

<div id="myProgress">
  <div id="ejs" class="myBar">95%</div>
</div>
</td>
</tr><tr><td>
<h1>React.js</h1>

<div id="myProgress">
  <div id="reactjs" class="myBar">30%</div>
</div>
</td>
<td>
<h1>Node.js</h1>

<div id="myProgress">
  <div id="nodejs" class="myBar">70%</div>
</div>
</td>
<td>
<h1>Express</h1>

<div id="myProgress">
  <div id="express" class="myBar">70%</div>
</div></td>
</tr>
<tr><td>
<h1>SQL</h1>

<div id="myProgress">
  <div id="sql" class="myBar">90%</div>
</div></td><td>

<h1>MongoDB</h1>

<div id="myProgress">
  <div id="mongo" class="myBar">95%</div>
</div></td>
<td>

<h1>Mongoose</h1>

<div id="myProgress">
  <div id="mongoose" class="myBar">95%</div>
</div></td>


</tr>
<tr><td>
<h1>C#</h1>

<div id="myProgress">
  <div id="csharp" class="myBar">35%</div>
</div></td>


</tr>

</table>


</div>)
 
 

 
};


var i = 0;
function move(Prog, Lang) {
  i=0
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(Lang);
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= Prog) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


export default About;
export { move }
