var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((a, i) => {
  var 템플릿 = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button class="buy">구매</button>
    </div>`;
  $(".row").append(템플릿);
});

$(".buy").click(function (e) {
  var title = $(e.target).siblings("h5").text();

  if (localStorage.getItem("cart") != null) {
    var 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem("cart", JSON.stringify(꺼낸거));
  } else {
    localStorage.setItem("cart", JSON.stringify([title]));
  }
});

// 만약에 이미 cart라는 항목이 있으면
// 수정하기 =?
// 근데 그게 아니면 걍 추가하기.

// 1. 구매버튼 누르면
// 2. 지금 누른 버튼 윗윗 글자를 가져와서
// 3. 로컬스토리지에 저장

// var arr = [1, 2, 3];
// var newArr = JSON.stringify(arr);

// localStorage.setItem("num", newArr);

// //꺼내서 쓸 땐
// var 꺼낸거 = localStorage.getItem("num");
// 꺼낸거 = JSON.parse(꺼낸거);
// console.log(꺼낸거);

//   ♣장바구니 기능과 localStorage 숙제
// 1. 카드하단 구매버튼추가하고
// 그거 누르면 누른 상품의 이름을 localStorage에 저장하기
// 저장하는 형태는 자유지만 이렇게 array 안에 전부 저장해보는게 어떨까요.
// 팁1) 내가 누른 요소의 형제요소(sibling)를 찾는 법을 알아야됨.
// 팁2) localStorage가 비어있을 때는 array를 추가하면 되겠지만
// localStorage에 이미 뭐가 있을 때는 array를 수정해야합니다.
