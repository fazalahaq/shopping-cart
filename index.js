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
    head += "<button onclick=mytable("+i+")>Add to cart </button>";
    head +="</div>";
}
head += "</div>";
head +="<div id='cart'> </div>";
document.write(head);
var html = "";
var arr = [];
    var count=0;
function mytable(i){
    if (count==0){
    count=1;
    html = "<table border='1'> <tr>  <th>Name</th>  <th>Image</th> <th>price</th> <th>Quantity</th></tr>";
    document.getElementById("cart").innerHTML=html;
    //console.log("fazal");
}
     if(arr.includes(i))
     {
        product[i].Quantity+=1;
        console.log("inc"+i);
        document.getElementById("inc"+i).innerHTML=product[i].Quantity;
}
     else{
        arr.push(i);
        myfun(i);
        for(i in arr){
        document.getElementById("inc"+i).innerHTML=product[i].Quantity;
        }
    }
}
function myfun(i){
        html += "<tr><td>"+product[i]["name"]+"</td> <td><img src="+product[i]['image']+"></td><td>"+product[i]['price']+"</td><td id='inc"+i+"'>"+product[i]['Quantity']+"</td></tr><br>";
        document.getElementById("cart").innerHTML=html;          
        //document.write(html);
    }
    //html += "</table>";