var myHeading = "";
var myDetail = "";
var myLink = "";

//var searchTerm = document.querySelector('.searchForm');
// wait until the html page has loaded
$(document).ready(function () {
    console.log("first");
    $("#searchTerm").keypress(function(event){
        if(event.keyCode == 13){
            console.log("Enter");
            click();
        }
     });   
    
    console.log("Second");

    // on click event handler for Search button
    $("#btnSearch").on("click", function () { 
        console.log("Inside click handler");
        click();        
     });
    
    
        
        function click() {
            // get the value of the user's input and assign it to searchTerm (. for class or # for ID, either will work)
        var searchTerm = $("#searchTerm").val();

        // the api call, note how the variable is constructed
        $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?", function (wikiSearch) {

            // in case we get less than ten results
            results = wikiSearch[1].length;

            // an array of div names to hold up to ten results
            var arr = ["divOne", "divTwo", "divThree", "divFour", "divFive", "divSix", "divSeven", "divEight", "divNine", "divTen"];

            // iterate over the results and build the string to return to the HTML
            $.each(arr, function (i, val) {

                myHeading = wikiSearch[1][i];
                myDetail = wikiSearch[2][i];
                myLink = wikiSearch[3][i];

                //$("#" + val).html("<b>" + myHeading + "</b>" + " - " + myDetail + " - " + "<a href=" + myLink +">More About This</a>");
                $("#" + val).html("<b>" + myHeading + "</b>" + " - " + myDetail + " - " + '<a href="' + myLink +'" target="blank">More About This</a>');

                // stop if we get less than ten results
                results--;
                if (results == 0) {
                    return false;
                }

            });

        });
        }
  });      
   

//$("#btnClear").on('click', clearText());
// clear the input box and results block
function clearText() {
    // either one works, second uses JQuery
    //document.getElementById('searchTerm').value = "";

    // clear the search box
      document.getElementById("searchTerm").value="";
    //$("#searchTerm").val('');
    //$("#response-area").empty('');
    console.log("this is cleartext");
    // clear the results block
    var arr = ["divOne", "divTwo", "divThree", "divFour", "divFive", "divSix", "divSeven", "divEight", "divNine", "divTen"];

   for (var i = 0; i < arr.length; i++) {
       document.getElementById(arr[i]).innerHTML = '';
       //document.getElementById(arr[i]).value="";
    }

}
