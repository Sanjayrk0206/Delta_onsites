function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function generate(){
    var t2 = document.getElementById('title2');
    var i = Math.floor(Math.random() * 255);
    var j = Math.floor(Math.random() * 255);
    var k = Math.floor(Math.random() * 255);
    document.getElementById("color").style.backgroundColor="rgb("+i+","+j+","+k+")";
    document.getElementById("red").innerHTML=i;
    document.getElementById("green").innerHTML=j;
    document.getElementById("blue").innerHTML=k;
    if(i>200 || j>200 || k>200){
        t2.style.color="black";
    }
    else{
        t2.style.color="white";
    }
    document.getElementById('title1').innerHTML=rgbToHex(i,j,k).toUpperCase();
}