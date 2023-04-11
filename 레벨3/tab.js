$(".form-select")
  .eq(0)
  .on("input", function (e) {
    var 상품선택 = e.currentTarget.value;

    if (상품선택 == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    }
  });

//모자 선택하면 둘째 select 사라지게 하기.
// 코드를 줄일 수 있는 부분?
