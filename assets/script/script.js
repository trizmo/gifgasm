console.log("app running")

$(document).ready(function () {

  var searchTerm;
  var queryURL = "https://api.giphy.com";
  var search = "/v1/gifs/search?q=";
  var apiKey = "&api_key=AZOtrITsPW99JHgDEBR1iPOzXQiZihTm";

  $("#submit").on("click", function () {
    searchTerm = $("#searchText").val();
    console.log("search term: " + searchTerm)

    $.ajax({
      url: queryURL + search + searchTerm + apiKey,
      method: "GET"
    }).then(function (response) {
      console.log(response)

      for(i = 0; i < 10; i++){
        var img = $("<img>");
        img.attr("src", response.data[i].images.fixed_height.url);
        $("#gifDisplay").prepend(img);
      }
      
    })

  })






});

