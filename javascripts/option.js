$(document).ready(function(){

    if(localStorage["update_duration"]==undefined){
        localStorage["update_duration"] = 5;
    }
    $("#fetch_duration").val(localStorage["update_duration"]);

    $("#fetch_duration").change(function(){
        localStorage["update_duration"] = parseInt($(this).val());
    });




});

