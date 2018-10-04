console.log("app running")

$(document).ready(function () {
  var searchTerm;
  var queryURL = "https://api.giphy.com";
  var search = "/v1/gifs/search?q=";
  var apiKey = "&api_key=AZOtrITsPW99JHgDEBR1iPOzXQiZihTm";

  $("#searchText").keyup(function (e) {
    
    
    if(e.keyCode === 13){
      
      searchTerm = $("#searchText").val();
      console.log("search term: " + searchTerm)
      $("#searchText").empty();

      var gifButton = $("<button>")
      gifButton.addClass("gif-button")
      gifButton.attr("id", "gif-btn");
      gifButton.attr("data-gif-name", searchTerm)
      gifButton.text(searchTerm)
      $("#btnDisp").append(gifButton)
      $(this).val("")
    }



    // searchTerm = $("#searchText").val();
    // console.log("search term: " + searchTerm)
    // $("#searchText").empty();

    // create button
    // var gifButton = $("<button>")
    // gifButton.addClass("gif-button")
    // gifButton.attr("id", "gif-btn");
    // gifButton.attr("data-gif-name", searchTerm)
    // gifButton.text(searchTerm)
    // $("#btnDisp").append(gifButton)

  })


  $(document).on("click", ".gif-button", function () {
    $("#gifDisplay").empty();
    console.log("button clicked!")
    
    var userClicked = ($(this).attr("data-gif-name"))
    console.log(userClicked)

    $.ajax({
      url: queryURL + search + userClicked + apiKey,
      method: "GET"
    }).then(function (response) {
      console.log("CALL SUCCESS")
      var data = response
      console.log(response)

      for (var i = 0; i < 10; i++) {
        var img = $("<img>");
        img.addClass("giffer");
        img.attr("data-state", "still");
        img.attr("src", response.data[i].images.fixed_height_still.url);
        img.attr("data-still", response.data[i].images.fixed_height_still.url);
        img.attr("data-animate", response.data[i].images.fixed_height.url);
        $("#gifDisplay").prepend(img);
      }


   



    })




  })

  $(document).on("click", ".giffer", function () {
    var state = $(this).attr("data-state")
    if (state === "still") {
      $(this).attr("data-state", "animate");
      $(this).attr("src", $(this).data("animate"));
      console.log($(this).attr("data-state"))
  

    } else {
      $(this).attr("data-state", "still")
      $(this).attr("src", $(this).data("still"));
      console.log($(this).attr("data-state"))


    }
  })




});

