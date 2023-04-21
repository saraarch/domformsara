//create function for label,input type and br
function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
//line breaker
function linebreaker(tagname){
var ele=document.createElement(tagname);
return ele;
}
//input elements
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1,){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1)
    return ele;
}

// function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode("Submit");
//     x.appendChild(t);
//     document.body.appendChild(x);
//   }
//   document.body.appendChild(x);
var firstname=labelcreate("label","for","firstname","First name");
var br1=linebreaker("br");
var firstnameinput=inputele("input","type","text","id","firstname");
var br11=linebreaker("br")


var middlename=labelcreate("label","for","middlename","Middle name");
var br2=linebreaker("br");
var middlenameinput=inputele("input","type","text","id","middlename");
var br22=linebreaker("br")

var lastname=labelcreate("label","for","lastname","Last name");
var br3=linebreaker("br");
var lastnameinput=inputele("input","type","text","id","lastname");
var br33=linebreaker("br")



var email=labelcreate("label","for","email","Email");
var br4=linebreaker("br");
var emailinput=inputele("input","type","email","id","email");
var br44=linebreaker("br")


var Password=labelcreate("label","for","password","Password");
var br5=linebreaker("br");
var passwordinput=inputele("input","type","password","id","password");
var br55=linebreaker("br")

document.body.append(firstname,br1,firstnameinput,br11,middlename,br2,middlenameinput,br22,lastname,br3,lastnameinput,br33,email,br4,emailinput,br44,Password,br5,passwordinput,br55)

