var sid=1,bid=1,mid=1,cid=1,price=10.00;
function more(x){
    var thing = document.getElementById(x+"-position");
    var Price = document.getElementById('price');
    var node = document.createElement('div');
    if(x=='salad'){
        node.id="s"+sid++;
        price+=5.00;
    }
    else if(x=='bacon'){
        node.id="b"+bid++;
        price+=10.00;
    }
    else if(x=='cheese'){
        node.id="c"+cid++;
        price+=15.00;
    }
    else{
        node.id="m"+mid++;
        price+=20.00;
    }
    node.className=x;
    thing.appendChild(node);
    Price.innerText=parseFloat(price).toFixed(2);
}
function less(x){
    var Price = document.getElementById('price');
    if(x=='salad' && sid>1){
        var element = document.getElementById("s"+--sid);
        element.parentNode.removeChild(element);
        price-=5.00;
    }
    else if(x=='bacon' && bid>1){
        var element = document.getElementById("b"+--bid);
        element.parentNode.removeChild(element);
        price-=10.00;
    }
    else if(x=='cheese' && cid>1){
        var element = document.getElementById("c"+--cid);
        element.parentNode.removeChild(element);
        price-=15.00;
    }
    else if(x=='meat' && mid>1){
        var element = document.getElementById("m"+--mid);
        element.parentNode.removeChild(element);
        price-=20.00;
    }
    Price.innerText=parseFloat(price).toFixed(2);
}