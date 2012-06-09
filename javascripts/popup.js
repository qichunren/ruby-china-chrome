$(document).ready(function(){

    function fillContent(data){
        $("#topicItem").tmpl(data).appendTo("#topics");
        jQuery("abbr.timeago").timeago();
    }

    $.ajax({
          url: "http://ruby-china.org/api/topics.json",
          type: "GET",
          dataType: "json",
          success: function(data) {
            console.log(data);
            fillContent(data);
          }
        });

});