
import React from "react"
import Header from "./Header"
import Input from "./Input"
import About from "./about"
import $ from "jquery"
import ReactDOM from "react-dom";
import ABOUT, {move} from "./about"
import Contact from "./contact"
  function Script(){
var x=""







const HomeText="<div><Header/></div>"

$(document).keypress(function(event){

    if(event.keyCode === 8){
        $('.typing').html($('.typing').html().substring(0,$('.typing').html().length - 1))
     x=x.substring(0, x.length - 1);
    }

    // else if (event.shiftKey && ){
    //     $( ".typing" ).html($(".typing").html()+(String.fromCharCode(event.which).toLowerCase()))
    // }
    else if(event.keyCode=== 13){
        if (x==="about"){
        const textAbout= $( ".typing" ).html($(".typing").html()+"<br>"+"<p>[Portfolio@Home ~]$ </p>" + ReactDOM.render(<div><Header/><About/><Input/></div> ,
          document.getElementById("root"))) 
x=""

var data = [
  {Prog: 100, Lang: 'html'},
  {Prog: 90, Lang: 'css'},
  {Prog: 70, Lang: 'javascript'},
  {Prog: 90, Lang: 'bootstrap'},
  {Prog: 75, Lang: 'javascript'},
  {Prog: 75, Lang: 'jquery'},
  {Prog: 95, Lang: 'ejs'},
  {Prog: 30, Lang: 'reactjs'},
  {Prog: 70, Lang: 'nodejs'},
  {Prog: 70, Lang: 'express'},
  {Prog: 90, Lang: 'sql'},
  {Prog: 95, Lang: 'mongo'},
  {Prog: 95, Lang: 'mongoose'},
];
data.forEach(function(entry) {
  move(entry.Prog, entry.Lang);
});

return <div>{textAbout}</div>
 
        }
        else if(x.toLowerCase()==="projects"){
            alert("hello")
            x=""
}
else if(x==="contact"){
  const textAbout= $( ".typing" ).html($(".typing").html()+"<br>"+"<p>[Portfolio@Home ~]$ </p>" + ReactDOM.render(<div><Header/><Contact/><Input/></div> ,
    document.getElementById("root"))) 
x=""
}
else if(x==="home"){
  $( ".typing" ).html($(".typing").html()+"<br>"+HomeText+"<br>"+"<p>[Portfolio@Home ~]$ </p>")
  x=""}
  
else{
$( ".typing" ).html($(".typing").html()+"<br>"+"Command not found"+"<br>"+"<p>[Portfolio@Home ~]$ </p>")

x=""

}

    }

    else{
    $( ".typing" ).html($(".typing").html()+(String.fromCharCode(event.which)));
    x=x+String.fromCharCode(event.which).toLowerCase()
}
  });

  $(document).keydown(function(event){
      if(event.keyCode === 8){
        $('.typing').html($('.typing').html().substring(0,$('.typing').html().length - 1))
     x=x.substring(0, x.length - 1);
    }

})}


export default Script;


