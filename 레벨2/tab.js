// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});

// console.log(document.querySelector(".tab-button").dataset.id);

function 탭열기(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}
