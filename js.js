
function divit (x){
    console.log(valuex("kilo"))
    document.querySelector(".sonuc").innerHTML = "<strong>"+ x + "</strong>" + " bedensiniz."
}

document.querySelector("#hesapla").addEventListener("click", function(){
    var kilo = valuex("kilo");
    var boy = valuex("boy");

    if(boy<165){

        if(kilo<53||kilo>46){divit("S ")}
        if (kilo<58||kilo>52){divit("M ")}
        if (kilo<64||kilo>57){divit("L ")}
        if (kilo<69||kilo>63){divit("XL ")}
        if (kilo<74||kilo>68){divit("2XL ")}
        if (kilo<80||kilo>73){divit("3XL ")}



    }


})

function valuex(x){
   return document.getElementById(x).value;
}
console.log(valuex("kilo"))