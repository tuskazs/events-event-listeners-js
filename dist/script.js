$("#b1st").click(() => {
  console.log('Yeah, you clicked me');
})
$("#b2nd").click(
  () => {
  $("#b1st").text("Felülírom, he!");
})

$("#b3rd").click(
  () => {
    var inputVal = document.getElementById("inpName").value;
    $("button").css("background-color", inputVal);
    $("#b3rd").off("click");
})

