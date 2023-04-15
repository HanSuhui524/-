var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

//-----------sort, map, filter 상품정렬기능 숙제
//--------숙제2) 6만원 이하 상품만 보기.
$('#filter').click(function(){
  var new필터 = products.filter(function(a) {
    return a.price <= 60000
  })
  console.log(new필터);
  
  $('.row').html('');
  new필터.forEach((a,i)=>{
    var 템플릿 =
        `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${new필터[i].title}</h5>
      <p>가격 : ${new필터[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
  })
    })



//-----------sort, map, filter 상품정렬기능 숙제
//--------숙제1) 상품명 다나가순 정렬 버튼과 기능
var 어레이4 = ['가', '다', '나'];
어레이4.sort(function(a, b){
  if (a < b) {
    return 1 
  } else {
    return -1
  }
});

console.log(어레이4)

$('#we').click(function() {
  products.sort(function(a,b) {
    if(a.title < b.title) {
      return 1
    } else {
      return -1
    }
  });
  $('.row').html('');
  products.forEach((a,i)=>{
    var 템플릿 =
        `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
  })
  console.log(products)
    })

//-----------array에 자주 쓰는 sort, map, filter 함수
var 어레이 = [7,3,5,2,40];
var 어레이2 = ['다', '가', '나'];
어레이2.sort().reverse()
어레이.sort(function(a,b){
  return a - b
});
console.log(어레이);
console.log(어레이2);
//-----------array에 자주 쓰는 sort, map, filter 함수
//---------버튼누르면 products를 가격순 정렬
$('#price').click(function(){
  products.sort(function(a, b){
    return a.price - b.price
  });
  $('.row').html('');

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
  })
}); 
//-----------array에 자주 쓰는 sort, map, filter 함수
//---------array 자료 원하는 것만 필터하려면 .filter()
var 어레이3 = [7,3,5,2,40];
var new어레이 = 어레이3.filter( function(a) {
  return a < 4
});
console.log(new어레이); //3,2 출력

//-----------array에 자주 쓰는 sort, map, filter 함수
//--------array 자료 전부 변형하려면 .map()
var 어레이 = [7,3,5,2,40];
var new어레이1 = 어레이.map(function(a){
  return a * 4
}); 
console.log(new어레이1);


//------------------Ajax 2 : 상품 더보기 버튼 만들기----
//---------숙제----자바스크립트를 이용해서 카드레이아웃을 3개 생성
products.forEach((a, i)=> {
  var 템플릿 =
  `
  <div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
  </div>
  `;
  $('.row').append(템플릿);
})
//------------------Ajax 2 : 상품 더보기 버튼 만들기----
//---------더보기 버튼---상품 더보기 버튼누르면 상품3개 가져오기
$('#more').click(function(){
  $.get('https://codingapple1.github.io/js/more1.json')
  .done(function(data) {
    console.log(data);

    data.forEach((a, i)=>{
      var 템플릿 =
      `
      <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data[i].title}</h5>
      <p>가격 : ${data[i].price}</p>
      </div>
      `;
      $('.row').append(템플릿);
    })
  })
})
//------------------Ajax 2 : 상품 더보기 버튼 만들기----
//---더보기버튼을 2번째 누르면 7,8,9번째 상품을 더 가져와
var count = 0;
$('#more').click(function(){
  count++;
  if(count==1) {
    $.get('https://codingapple1.github.io/js/more1.json')
    .done(function(data) {
      console.log(data);
  
      data.forEach((a, i)=>{
        var 템플릿 =
        `
        <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        </div>
        `;
        $('.row').append(템플릿);
      })
    })
  } else if(count ==2) {
    $.get('https://codingapple1.github.io/js/more2.json')
    .done(function(data) {
      console.log(data);
  
      data.forEach((a, i)=>{
        var 템플릿 =
        `
        <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        </div>
        `;
        $('.row').append(템플릿);
        $('#more').remove();
      })
    })
  }
  })

  //----------Ajax 1 : 개념정리
  $.get('https://codingapple1.github.io/hello.txt')
  .done(function(data) {
    console.log(data)
  })
  .fail(function(){
    console.log('에러404')
  })

$.get('https://codingapple1.github.io/price.json')
.done(function(luv){
  console.log(luv.price); // 가격만 쏙 출력하고 싶을때
  return
})
.fail(function(){
  console.log('실패');
})

//----------Ajax 1 : 개념정리
//----------쌩 자바스크립트 get요청
  fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json()) // 받아온 json을 object로 바꿔주는 기능
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });