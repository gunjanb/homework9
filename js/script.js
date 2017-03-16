var products = [
  {
      "name": "Reversible Plaid",
      "price": 26.99,
      "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
      "imageTitle": "reversible-plaid.jpg",
      "imageSrcSet": "images/reversible-plaid-200px.jpg  200w, images/reversible-plaid-300px.jpg  300w, images/reversible-plaid-492px.jpg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/reversible-plaid-200px.jpg"
  },
  {
      "name": "Wool Cable Knit",
      "price": 49.99,
      "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
      "imageTitle": "wool-cable.jpeg",
      "imageSrcSet": "images/wool-cable-200px.jpeg  200w, images/wool-cable-300px.jpeg  300w, images/wool-cable-492px.jpeg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/wool-cable-200px.jpeg"
  },
  {
      "name": "Northern Lights",
      "price": 29.99,
      "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
      "imageTitle": "northern-lights.jpg",
      "imageSrcSet": "images/northern-lights-200px.jpg  200w, images/northern-lights-300px.jpg 300w, images/northern-lights-492px.jpg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/northern-lights-200px.jpg"

  },
  {
      "name": "Ombre Infinity",
      "price": 11.99,
      "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
      "imageTitle": "ombre-infinity.jpg",
      "imageSrcSet": "images/ombre-infinity-200px.jpg  200w, images/ombre-infinity-300px.jpg  300w, images/ombre-infinity-492px.jpg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/ombre-infinity-200px.jpg"
  },
  {
      "name": "Fringed Plaid",
      "price": 18.99,
      "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
      "imageTitle": "fringed-plaid.jpeg",
      "imageSrcSet": "images/fringed-plaid-200px.jpeg  200w, images/fringed-plaid-300px.jpeg  300w, images/fringed-plaid-492px.jpeg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/fringed-plaid.jpeg"
  },
  {
      "name": "Multi Color",
      "price": 22.99,
      "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
      "imageTitle": "multi-color.jpeg",
      "imageSrcSet": "images/multi-color-200px.jpeg  200w, images/multi-color-300px.jpeg  300w, images/multi-color-492px.jpeg  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/multi-color.jpeg"
  },
  {
      "name": "Etro Paisley-Print Silk",
      "price": 249.99,
      "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
      "imageTitle": "etro.jpg",
      "imageSrcSet": "images/etro-200px.png  200w, images/etro-300px.png  300w, images/etro-492px.png  492w",
      "imageSizes": "(max-width: 800px) 200px, (max-width: 1600px) 300px ,(min-width: 1601px) 492px",
      "imageSrc": "images/etro.png"
  },
  {
      "name": "Ashby Twill",
      "price": 70.99,
      "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
      "imageTitle": "twill.jpg",
      "imageSrcSet": "",
      "imageSizes": "",
      "imageSrc": ""
  }
];

var item;
var cart = [];

function populateProducts(products) {
    var container = document.getElementById("item-container");
    for (i = 0; i < products.length; i++) {
        var item = document.createElement("div");
        item.className = "item";
        item.innerHTML = "<h5>" + products[i].name + "</h5>";
        item.innerHTML += "<img srcset='" + products[i].imageSrcSet + "' " +
                                "sizes='" + products[i].imageSizes + "' " +
                                "src='" + products[i].imageSrc + "' alt='" + products[i].name + " image'>";
        item.innerHTML += "<p>" + products[i].description + "</p>";
        item.innerHTML += "<p>$" + products[i].price + "</p>";
        //  item.innerHTML +="<button type='button' onclick='AddtoCart(" + prod+ ")'>" + "Add to Cart </button>" ;
        var Addbutton = document.createElement('button');
        Addbutton.textContent = "Add to cart";
        Addbutton.addEventListener('click', clickEvent(products[i].name, products[i].price));
        var Removebutton = document.createElement("button");
        Removebutton.textContent = "Remove";
        Removebutton.addEventListener('click', clickEvent1(products[i].name));
        item.appendChild(Addbutton);
        item.appendChild(Removebutton);
        container.appendChild(item);
    }
}

populateProducts(products);

function clickEvent(name, price) {
    return function () { AddtoCart(name, price); };
}

function clickEvent1(name) {
    return function () { remove(name); };
}

//document.getElementById("cart-info").onclick = function(){
//      
// var cartblock = document.getElementById("showcart");
//  CheckVisibility(cartblock);
//};
//
//function CheckVisibility(element){
//  if(element.style.visibility =='hidden')
//  element.style.visibility='visible';
//  else
//  element.style.visibility='hidden';
//    
//}

for (item = 0; item < products.length; item++) {
    console.log("Product Name:" + products[item].name + " Product Price $" + products[item].price);
}

//array of objects for products selected by user
//var cart = []; 

function sumPrices(cartArray) {  // for loop through array, sum value of price attribute for each object   
    var total = 0;
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].price) {
            console.log(cartArray[i].price);
            total = total + cartArray[i].price;
        }
    }
    console.log(total);
}

function captureInfo() {
    console.log(document.custInfo.filter.value);
    event.preventDefault();
}

//sorting function 
function sorting() {
    console.log("insort funt");
    var val = document.custInfo.filter.value;
    if (val == "price") {
        //        console.log("Pricesort");
        products.sort(function (a, b) { return a.price - b.price; });
        document.getElementById("item-container").innerHTML = "";
        console.log(products);
        populateProducts(products);
    }
    else {
        //        console.log("Namesort");
        products.sort(function (a, b) {
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
        })
        document.getElementById("item-container").innerHTML = "";
        console.log(products);
        populateProducts(products);
    }
}

//to check whether product is present in the cart if yes return index
function checkItem(nameofprod) {
    for (i = 0; i < cart.length; i++) {
        if (cart[i].Name == nameofprod)
            return i;
    }
}

//function to add items in the cart
function AddtoCart(NameofProduct, PriceofProduct) {
    //    var index = checkItem(NameofProduct);
    //    if (index >= 0) {
    //        cart.splice(index, 1);
    ////        for (i = 0; i < cart.length ; i++) {
    ////            console.log(cart[i].Name);
    ////            console.log(cart[i].Price);
    ////        }
    //    } else {
    //  console.log(" INside add to cart");
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = NameofProduct;
    singleProduct.Price = PriceofProduct;
    //Add newly created product to our shopping cart 
    cart.push(singleProduct);
    console.log(cart.length);
    //    }

    //show the no of items added to the cart near the cart icon 
    document.getElementById("NoOfItems").innerHTML = cart.length;

    if (cart.length)
        document.getElementById("NoOfItems").style.display = "inline";

    //testing the cart 
    for (i = 0; i < cart.length ; i++) {
        console.log(cart[i].Name);
        console.log(cart[i].Price);
    }


    window.localStorage.setItem("cart", JSON.stringify(cart)); // Saving
    //generate_table( cart);
    //    event.preventDefault();
}


function remove(NameofProduct) {
    /*if the item is in the cart, then we should return an index that is not -1*/
    var index = checkItem(NameofProduct)
    /*if item is in cart, remove it from cart*/
    if (index != -1) {
        cart.splice(index, 1);
    }
    //show the no of items added to the cart near the cart icon 
    document.getElementById("NoOfItems").innerHTML = cart.length;

    if (cart.length)
        document.getElementById("NoOfItems").style.display = "inline";
    console.log(cart);
}



//Not able to find how to delete a row by clicking a delete button in table 
//Uncaught TypeError: Cannot set property 'onclick' of null  at script.js:131
function deleteRow(r) {
    //  var i = r.parentNode.parentNode.rowIndex;
    //  console.log("in delete funt");
    //  console.log(i);
    //  document.getElementById("myTbale").deleteRow(i);

    var p = r.parentNode.parentNode;
    p.parentNode.removeChild(p);

}

//this function creates a table showing items added in the cart 
//not able to find how to delete all previously added rows from table ???
function generate_table(cart) {
    //    var elem = document.getElementById("myTable");
    //    
    //    if (typeof elem != 'undefined')
    //    {
    //      while(tblBody.rows.length>0) {
    //               tblBody.deleteRow(0);
    //            }
    //      
    //    } 

    // not able to find how to pass data between 2 html pages
    var cart = JSON.parse(window.localStorage.getItem("cart"));
    console.log(cart.length);

    var prevtable = document.getElementById("myTable");

    var body = document.getElementsByTagName("body")[0];
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //1.setting the top row 
    //createRow( "Products in Cart", "Price",tblBody);
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    var cell0Text = document.createTextNode("Products in Cart");
    var cell1 = document.createElement("td");
    var cell1Text = document.createTextNode("Price");
    cell0.appendChild(cell0Text);
    cell1.appendChild(cell1Text);
    row.appendChild(cell0);
    row.appendChild(cell1);
    // add the row to the end of the table body
    tblBody.appendChild(row);

    var cart_total_price = 0;

    //2 creating all row of a table 
    for (var i = 0; i < cart.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        var cell0 = document.createElement("td");
        var cell0Text = document.createTextNode(cart[i].Name);
        //console.log(cell0Text);

        var cell1 = document.createElement("td");
        var cell1Text = document.createTextNode(cart[i].Price);

        var cell2 = document.createElement("input");
        cell2.type = "Button";
        cell2.className = "btn"
        cell2.value = "Delete";
        cell2.onclick = "deleteRow(this)";

        cell0.appendChild(cell0Text);
        cell1.appendChild(cell1Text);

        row.appendChild(cell0);
        row.appendChild(cell1);
        row.appendChild(cell2);

        cart_total_price = parseFloat(cart_total_price) + parseFloat(cart[i].Price);
        //console.log(cart_total_price);
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    //console.log(cart_total_price);

    //3 adding total cost to the table 
    // createRow("Total Cost", cart_total_price);
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    var cell0Text = document.createTextNode("Total Cost");
    var cell1 = document.createElement("td");
    var cell1Text = document.createTextNode(cart_total_price);
    cell0.appendChild(cell0Text);
    cell1.appendChild(cell1Text);
    row.appendChild(cell0);
    row.appendChild(cell1);
    // add the row to the end of the table body
    tblBody.appendChild(row);

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    prevtable.appendChild(tbl);
    //  body.appendChild(tbl);
    body.appendChild(prevtable);

}


//function createRow( cellcontent0 , cellcontent1,tblBody){
//    var row = document.createElement("tr");
//    var cell0 = document.createElement("td");
//    var cell0Text = document.createTextNode(cellcontent0);
//    var cell1 = document.createElement("td");
//    var cell1Text = document.createTextNode(cellcontent1);
//    cell0.appendChild(cell0Text);
//    cell1.appendChild(cell1Text);
//    row.appendChild(cell0);
//    row.appendChild(cell1);
//    // add the row to the end of the table body
//    tblBody.appendChild(row);
//}
//getting error for this 
window.onload = function () {
    console.log("in onlaod ");
    document.getElementById("view").onclick = generate_table();
};


