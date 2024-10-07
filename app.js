


$(function() {
   $("#Form").on("submit", function(e){
    e.preventDefault();

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    console.log(fname, lname, email);


    if(fname == ""){
        $("#span1").text("This field is required")
    }
    else{
        $("#span1").text("")
    }if(lname == ""){
        $("#span2").text("This field is required")
    }
    else{
        $("#span2").text("")
    }if(email == ""){
        $("#span3").text("This field is required")
    }
    else{
        $("#span3").text("")
    }

    if(fname !== "" && lname !== "" && email !== ""){
        window.location.href = "thankyou.html"
    }

   })
});
