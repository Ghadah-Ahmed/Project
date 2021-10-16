let focusedItem;
let subtotal = 0;
let orderNum = Math.floor(Math.random() * 100000) + 1;

// Items OBJs
class Item {
    constructor(name, price, quantity, total, img) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.total = total;
      this.img = img;
    }
  }

  cafelate = new Item("CAFE LATE", 2, '1', 2, 'images/9 (1).png');
  blackcoffee = new Item("BLACK COFFEE", 1.5, '1', 1.5, 'images/7 (1).png');
  mocha = new Item("MOCHA", 1.5, '1', 1.5, 'images/8 (1).png');
  americano = new Item("AMERICANO", 1, '1', 1, 'images/6 (1).png');
  cappuccino = new Item("Cappuccino", 2.5, '1', 2.5, 'images/10 (1).png');
  espresso = new Item("Espresso", 1, '1', 1, 'images/11 (1).png');

var items = [cafelate, blackcoffee, mocha, americano, cappuccino, espresso]

// show Model
var x = document.getElementsByClassName('second-section-div')

for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(e) {
        document.getElementById('id01').style.display='block'
        focusedItem = e.target.parentNode.querySelector("h4").innerHTML;
      });
  }

// POST
function addItem(focusedItem){    
    let obj = items.find((i)=>{
        return i.name == focusedItem;
    });
    localStorage.setItem(`${focusedItem}`, JSON.stringify(obj));
    window.location.href = "http://127.0.0.1:5500/shoppingCart.html";
}

// GET
// function fetchItem(){
//     for (var key in localStorage) {
//         if (JSON.parse(localStorage.getItem(`${key}`))  !== null  ){
//             var item = JSON.parse(localStorage.getItem(`${key}`))
//             var tr = document.createElement("TR")
//             tr.innerHTML = `
//             <tr>
//             <td><img src="${item.img}" alt=""> <span id="quantity">${item.quantity}</span> <span id="name">${item.name}</span>  </td>
//             <td>${item.total} </td>
//             </tr>
//             `
//             table = document.querySelector('table')
//             table.insertBefore(tr, table.firstElementChild);
//         }
//     }
// }
// fetchItem()

// UPDATE
function update(key, value){
    var old = JSON.parse(localStorage.getItem(`${key}`)) 
    let total = value * old.price
    localStorage.setItem(`${key}`, JSON.stringify({name: `${old.name}`, price: `${old.price}`, quantity: value, total: total, img: `${old.img}`}));
    location.reload();
}

// DELETE
function deleteItem(x, key) {
    localStorage.removeItem(`${key}`)
    x.parentNode.parentNode.remove();
    location.reload();
}

function order(){
    document.getElementsByClassName("checkout")[0].innerHTML = `
    <h1>Starbucks</h1>
    <div class="thanks">
        <i class="fa fa-check-circle" style="font-size: 58px; color:#eb174f; align-self: center; font-weight: normal;"></i>
        <div style="margin-left: 20px;">
            <p>Order #<span>${orderNum}</span></p>
            <h2>Thank you Ghadah!</h2>
        </div>
    </div>

    <div class="radio">
        <h3 style="margin: 10px 0;">Order updates</h3>
        <label>You'll get shipping and delivery updates by email.</label>
        <div class="radio icon">
            <i class="fa fa-mobile-phone" style='font-size: 28px; font-weight: normal;'></i> <span style="font-size: 15px;"> Get shipping updates by text</span>
        </div>
    </div>
    
    <br>

    <div class="radio" style="display: flex; justify-content: space-between;">

        <div>
            <h3 style="margin: 10px 0;">Customer information</h3>

            <h4>Contact information</h4>
            <span>nn.gh.nn.gh@gmail.com</span>

            <h4>Shipping adress</h4>
            <span>Ghadah Ahmed</span><br>
            <span>Al-nafel</span><br>
            <span>Riyadh</span><br>
            <span>Saudi Arabia</span><br>
            <span>055 738 3404</span>
        </div>

        <div style="align-self: center;">
            <h4>Shipping method</h4>
            <span>Quick shipping</span>

            <h4>Payment method</h4>
            <span>Cash On Delivery (COD) - 765.5$</span>
        </div>

    </div>

    <a class="button" style="width: 300px; margin-top: 30px;" value="">CONTINUE SHOPPING</a>`;
    document.getElementsByTagName("body")[0].style.height = 'auto'
}

function myMenu() {
    var menuState = document.querySelector(".mobile-nav");
    var topPart = document.querySelector(".up-part");
    var mobileNav = document.querySelector(".mobile-view-only");

    if (menuState.style.height !== "0px" ) {
      menuState.style.height = "0px";
      topPart.style.height = '50vh'
      mobileNav.style.height = '106vh'
    } else {
      menuState.style.height = "195px";
      topPart.style.height = '80vh'
      mobileNav.style.height = '136vh'
    }
  }

  function myMenu2() {
    var menuState = document.querySelector(".mobile-nav");


    if (menuState.style.height !== "0px" ) {
      menuState.style.height = "0px";

    } else {
      menuState.style.height = "195px";

    }
  }