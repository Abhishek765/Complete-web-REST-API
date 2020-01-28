"use strict"

$(document).ready(function() {
    var resultsList = $("#resultList");
    resultsList.text("Result will get injected here using Jquery");

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function() {
        console.log("Toggle button clicked")
        resultsList.toggle(500);
        if (toggleButton.text() === "Hide")
            toggleButton.text("Show");
        else
            toggleButton.text("Hide");
    });
    var results = [];

    function displayResults(results) {
        resultsList.empty();
        $.each(results, function(i, item) {
            var newResult = $("<div class='result'>" +
                "<div class='title'>" + item.title + "</div>" +
                "<div>" + "Level: " + item.level + "</div>" +
                "<div>" + "Total Videos: " + item.total_videos + "</div>" +
                "<div>" + "Instructor: " + item.instructor + "</div>" +
                "</div>");
            resultsList.append(newResult);

            newResult.hover(function() {
                $(this).css("background-color", "green");
                $(this).css("color", "white");
                $(this).css("border", "3px solid black");

            }, function() {
                $(this).css("background-color", "transparent");
                $(this).css("color", "black");
                $(this).css("border", "1px solid rgb(194, 193, 193)");
            })
        })
    }

    $("#loginForm").on("submit", function() {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username && password) {

            $.post("/api/login", {}, function(data) {
                    console.log("Success: " + data)
                    displayResults(data);

                    $("#loginForm").hide();
                    $("#logoutSection").show();
                    $("#errorMsg").empty();
                })
                .fail(function(data) {
                    $("#errorMsg").text("Server Error!!");
                })
                .done(function() {

                })
        } else {
            $("#errorMsg").text("* Username and password are mandatory!");
        }

        return false;
    })
    $("#logoutButton").on("click", function() {
        $("#loginForm").show();
        $("#logoutSection").hide();
        resultsList.empty();
        resultsList.text("Please Login");
    })
});


// var msg = "Hello";
// console.log(msg);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p> JS is injected </p>";

// function showMessage(msg) {
//     console.log(msg);
// }

// function showMessageCallback(msg, callbac--k) {
//     console.log(msg);

//     callback();
// }

// showMessageCallback("hello", function() {
//     console.log("I am in callback again");
// });