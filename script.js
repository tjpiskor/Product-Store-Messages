var wrapperEle = document.body;

var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

var fruit = [];

function store(whack) {
  
  var that = this;
  
  this.id = whack.id;
  this.image = whack.image;
  this.name = whack.name;
  this.price = whack.price;
  this.color = whack.color;
  
  this.ele = document.createElement("div");
  this.idEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.nameEle = document.createElement("h3");
  this.priceEle = document.createElement("h4");
  this.colorEle = document.createElement("div");
  this.popUp = document.createElement("div");
  this.ele.classList.add("product");
  this.popUp.classList.add("popUp");
  
  this.imageEle.src = this.image;
  this.nameEle.innerHTML = "Name: "+whack.name;
  this.priceEle.innerHTML = "Price: $"+whack.price;
  this.colorEle.innerHTML = whack.color;

  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);

  document.body.appendChild(this.popUp);
  this.popUp.style.display = "none";

  //popup part
  this.ele.addEventListener("click", function(){
    if(whack.id === 0)
    {
      that.popUp.appendChild(that.imageEle);
      that.popUp.appendChild(that.nameEle);
      that.popUp.appendChild(that.priceEle);
      that.popUp.style.display = "flex";
    }
    else if(whack.id === 1)
    {
      that.popUp.appendChild(that.imageEle);
      that.popUp.appendChild(that.nameEle);
      that.popUp.appendChild(that.priceEle);
      that.popUp.style.display = "flex";
    }
    else if(whack.id === 2)
    {
      that.popUp.appendChild(that.imageEle);
      that.popUp.appendChild(that.nameEle);
      that.popUp.appendChild(that.priceEle);
      that.popUp.style.display = "flex";
    }
  });

  this.popUp.addEventListener("click", function(){
    if(whack.id === 0)
    {
      that.ele.appendChild(that.imageEle);
      that.ele.appendChild(that.nameEle);
      that.ele.appendChild(that.priceEle);
      that.popUp.style.display = "none";
    }
    else if(whack.id === 1)
    {
      that.ele.appendChild(that.imageEle);
      that.ele.appendChild(that.nameEle);
      that.ele.appendChild(that.priceEle);
      that.popUp.style.display = "none";
    }
    else if(whack.id === 2)
    {
      that.ele.appendChild(that.imageEle);
      that.ele.appendChild(that.nameEle);
      that.ele.appendChild(that.priceEle);
      that.popUp.style.display = "none";
    }
  });

  //hover part
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = whack.color
  });

  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = ""
  });

  document.body.appendChild(this.ele);
}

for (var i=0; i<products.length; i++) {
  fruit.push(new store(products[i]));
}