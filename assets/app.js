  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHIFd4tM5nkC08SVQRpAknh0ost61mMWk",
    authDomain: "demo2019-703f7.firebaseapp.com",
    databaseURL: "https://demo2019-703f7.firebaseio.com",
    projectId: "demo2019-703f7",
    storageBucket: "",
    messagingSenderId: "270068027373",
    appId: "1:270068027373:web:177f379ff36cd594"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

    database.ref().on("value", function(snapshot) {
    latestWord = snapshot.val().word;
    $("#latest-word").text(latestWord);
})

// variables
let fails = ["Falls", "Walls", "Spills", "Drops", "Trips", "slide", "crash", "jumps", "throws", "infomercial"];
let apiKey = "4SHnrjgqAMzgL3bxI8ggs9uxSkOuCsUX";
// use variables to concatenate the request api in a click handler
$("#buttons").on("click", "#load", function() {
    var fail = $(this).attr("data-fail");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="
    + fail
    + "&api_key=4SHnrjgqAMzgL3bxI8ggs9uxSkOuCsUX&limit=10";

    $.ajax({
        url: queryURL,
    }).then(function(response) {

        var results = response.data;
        for ( j = 0; j < results.length; j++ ) {
            var failDiv = $("<div>");
            var r = $("<p>").text("Rating: " + results[j].rating);
            var still = results[j].images.fixed_height_still.url;
            var animate = results[j].images.fixed_height.url;
            var failImage = $('<img src="'+ results[j].images.fixed_height_still.url + '" data-still="' + still + '" data-animate="' + animate + '" />');         
            failImage.attr("data-state", "still").addClass("gif");
            failDiv.append(r, failImage).addClass("block");
            $('#gifDisplay').prepend(failDiv);
        }
    })
});


// create new buttons on user input 
$("#button-addon2").on("click", function(event) {
    event.preventDefault();
    var newFail = $("#input").val().trim();
    fails.push(newFail);
    makeButtons();
    database.ref().set({
    word: newFail
    })
})

// firebase 'value' function that creates snapshot, used to populate 'latest-word' span
database.ref().on("value", function(snapshot) {
console.log(snapshot);
console.log(snapshot.val().word);
latestWord = snapshot.val().word;
$("#latest-word").text(latestWord);
})

// function with for loop creates buttons - can call after new button is pushed to the array
function makeButtons() {
    $("#buttons").empty();
    for ( i = 0; i < fails.length; i++ ) {
        var g = $("<button type='button' id='load' class='btn btn-outline-info'>" + fails[i] + "</button>");
        // Adds a data-attribute "fail"
        g.attr("data-fail", fails[i]);
        $("#buttons").append(g);
    }
}
makeButtons();

// click handler for each button with if statement to handle animation
$("#gifDisplay").on("click", ".gif", function() {
var state = $(this).attr("data-state");
var still = $(this).attr("data-still");
var animate = $(this).attr("data-animate");
// if statement handles changing source url and 'data-state' attribute
if (state === "still") {
$(this).attr("src", animate );
$(this).attr("data-state", "animate");
} else {
$(this).attr("src", still );
$(this).attr("data-state", "still");
}
});