var product = [{"name":"jeans","image":"pics/jeans3.jpg","price":500,"Quantity":1},
    {"name":"hoodie","image":"pics/hoodie.jpg","price":700,"Quantity":1},
    {"name":"shirt","image":"pics/shirt.jpg","price":450,"Quantity":1},
    {"name":"sweter","image":"pics/sweter.jpg","price":1100,"Quantity":1},
    {"name":"trouser","image":"pics/trouser.jpg","price":600,"Quantity":1},
    {"name":"tshirt","image":"pics/tshirt.jpg","price":250,"Quantity":1}];

var head ="<div id='main'>";
for(var i in product){
    head +="<div class='pro'>";
    head += "<h1>"+product[i].name+"</h1>";
    head += "<img src="+product[i].image+">";  
    head += "<p>"+product[i].price+"</p>";
    // head +="<input type ='number'>";
    head += "<button onclick=mytable("+i+")>Add to cart </button>";
    head +="</div>";
}
head += "</div>";
head +="<div id='cart'> </div>"
document.write(head);

var html = "";
html+= "<table border='1'> <tr><th>Product name</th>  <th>Quantity</th>  <th>image</th> <th>price</th></tr>";
function mytable(i){
     html +="<tr><td>"+product[i].name+"</td><td><input type='number' value="+product[i].Quantity+"></td><td>"+"<img src="+product[i].image+"></td><td>"+product[i].price+"</td><td><button>Remove Items</button></td></tr>";
     document.getElementById('cart').innerHTML = html; 
     var arr = [];
        arr.push(i);
        document.getElementById('cart').innerHTML = arr;
    }
    //document.getElementById("cart").innerHTML = product[i].Quantity.;
// var count = "<td><input type='number' value="+product[i].Quantity+"></td>";
// function addElement(){
//     html += document.getElementById("cart").innerHTML = mytable(i).count++;
// }
// // var count = 1;
// // function addElement(){
// //   document.getElementById("cart").innerHTML = count++;
// // }
// addElement();


