
var str1= "Uwielbiam JavaScript" ;
var str2= "Jestem świetnym programistą";

var par = document.getElementById("opis");
var btn = document.querySelector("button");
function longer(s1, s2) {
  
    if (s2.length<s1.length)
        {
              str = s1;
        } else {
            str = s2;
        }
    return str;
}

console.log(longer(str1, str2));
 