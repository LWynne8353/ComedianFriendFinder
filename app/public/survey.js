$('.chosen.select').text();
//$('.dropdown-menu : .chosen-select').text();
$('#submit').on("click", function (event) {
    event.preventDefault();
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#dropdownMenu1").val(),
            $("#dropdownMenu2").val(),
            $("#dropdownMenu3").val(),
            $("#dropdownMenu4").val(),
            $("#dropdownMenu5").val(),
            $("#dropdownMenu6").val(),
            $("#dropdownMenu7").val(),
            $("#dropdownMenu8").val(),
            $("#dropdownMenu9").val(),
            $("#dropdownMenu10").val()
        ]
    }
    console.log(userData)
    $.post("/api/friends", userData, function(data){
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);
        $("#results-modal").modal("toggle");
    })
});

    // Add on submit button click jquery code

    // Then calculate how close the new friend is to the other friends in the json file
    // Two For loops
    // 1. for looping through all 10 friends
    // 2. loop through all the individual question scores

    // Then post to /api/survey

    // Finally, show the modal