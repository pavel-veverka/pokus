$("#loginForm").submit(function (event) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    alert("U: " + username + " P: " + password);
    /*
       // Send the data using post
       var posting = $.post( test.php, { username, password } );
    
       // Put the results in a div
       posting.done(function( data ) {
         var content = $( data ).find( "#content" );
         $( "#result" ).empty().append( content );
       });*/
});