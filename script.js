$( document ).ready(function() {
$(function() {
  var tableSelected="";
  $(".table").click(function() {
    $(this).toggleClass('available reserved');
    tableSelected = $(this).attr("class")[0];
    $(".tableNumberDisplay").text("Table Number: " + tableSelected);
    $(".reservation").show(1500);
  });
  $(".xOut").click(function() {
    $('.'+tableSelected).toggleClass('available reserved');
    $(".reservation").hide(1500);
  });
  $("button").click(function() {
    $(".reservation").hide(1500);
    $('.'+tableSelected).attr('title', "Name: "+ $(".nameInput").val()+ " " + "Size of party: "+ $(".numberInput").val());
  });
  $("table").on("mouseenter", function () {
    var tableMoused = $(this).attr("class")[0];
    console.log("mouse enter");
    $('.'+tableMoused).attr('title');
  });
});
});
