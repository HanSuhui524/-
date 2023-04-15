var products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 50000, title: "Springfield Shirt" },
    { id: 2, price: 60000, title: "Black Monastery" },
  ];
  
  var 변수 = 0;

  products.forEach((a, i)=>{
    var 템플릿 =
        `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
      <button class="buy">구매</button>
      </br>
    </div>`;
    $('.row').append(템플릿)
  })



  var arr = [1,2,3];
  var newArr = JSON.stringify(arr);
  
  localStorage.setItem('num', newArr);
  
  //꺼내서 쓸 땐
  var 꺼낸거 = localStorage.getItem('num');
  꺼낸거 = JSON.parse(꺼낸거);
  console.log(꺼낸거);
