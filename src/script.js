$("#b1st").click(() => {
  console.log('Yeah, you clicked me');
})
$("#b2nd").click(
  () => {
  $("#b1st").text("Felülírom, he!");
})
$("#b3rd").click(
  () => {
  $("button").css("background-color", "#FFFFCC");
}) 