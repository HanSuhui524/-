//Select 2 : 자바스크립트로 html 생성하는 법
var c = document.createElement("p"); //★★js로 p태그 넣기.
c.innerHTML = "p태그안에넣기"; //★★p태그 안에 내용.
document.querySelector("#test").appendChild(c);

//Select 3 : forEach, for in 반복문
var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];
$(".form-select")
  .eq(0)
  .on("input", function () {
    var 상품선택 = this.value;
    if (상품선택 == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      shirts.forEach(function(b) {
        $(".form-select").eq(1).append(`<option>${b}</option>`);
      })
    } else if (상품선택 == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      pants.forEach(function(a , i){ 
        //  a라는 아무 파라미터 넣으면 pants안에 있던 파라미터 됨.a는 1회 복붙시 28,2회때 30, 3회때 32, 4회때 32가 된다
        console.log(a); // 28, 30, 32, 34 각각 나옴.
        $(".form-select").eq(1).append(`<option>${i}</option>`); //백팁 작은따옴표!!
      });
    }
  });

//Select 3 : forEach, for in 반복문_object자료 갯수만큼 반복문 돌릴려면?  for in 문법
  var obj = {name : 'han', age: 34}
  for(var key in obj) {
    console.log(obj[key]);
  }

//Select 2 : 자바스크립트로 html 생성하는 법
var 템플릿1 = "<p>안녕</p>";
document.querySelector("#test").innerHTML = 템플릿1;
$("#test").html(템플릿1);
document.querySelector("#test").insertAdjacentHTML("beforeend", 템플릿1);

$("#test").append(템플릿1);


