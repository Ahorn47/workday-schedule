// dom elements
var currentDay = moment();
$("#currentDay").text(today.format('LLLL'));
var blockEl = document.querySelector(".container")


// add event listener to save button
$saveBtn.on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
});

// save to local storage
localStorage.setItem(time, text);






