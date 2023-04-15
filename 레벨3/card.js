
//--------------약간 복잡한 Array & Object 데이터바인딩
var car = ["소나타", 50000, "white"];

var car2 = { name: "소나타", price: 50000 };
document.querySelector(".car-title").innerHTML = car2["name"];
document.querySelector(".car-price").innerHTML = car2.price;


//--------------------------데이터바인딩 숙제 & 문자중간에 변수넣는 법
var products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
  ];
  
  document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
  document.querySelectorAll('.card-body p')[0].innerHTML = '가격 : ' + products[0].price
  
  document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
  document.querySelectorAll('.card-body p')[1].innerHTML = '가격 : ' + products[1].price;
  
  document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
  document.querySelectorAll('.card-body p')[2].innerHTML = '가격 : ' + products[2].price;

  //----------<문자 중간에 변수 쉽게 넣기>
  var a = '안녕';
  console.log(`문자${a}문자`); 
  //-----------Ajax 1 : 개념정리
  