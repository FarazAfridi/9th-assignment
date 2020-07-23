var a, b, c;

//LEGAL
var $ = "abc";
var _a = "abc";
var abc = "abc";
var _123 = "abc";
var abc123 = "abc";

//ILLEGAL
var 123 = "123";
var function = "123";
var a b c = "123";
var alert = "123";
var .asdf = "123";

document.write("Rules for naming JS variables");
document.write("variable names can only contain letters, numbers, $, and _ .For example $my_1stVariable");
document.write("Variables must begin with a $, _ or letters . For example $name, _name or name ");
document.write("Variable names are case sensitive")
document.write(" Variable names should not be JS Keyword");
