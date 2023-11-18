$(".product-button").click(function () {
  $(".product-button").removeClass("button-active");

  $(this).addClass("button-active");
});

$(".submit-btn").click(function () {
  alert("Thank you for buying 🙏");
  alert("Your order is being processed. Please wait a moment");
});
