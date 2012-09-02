$(document).ready(function(){

    function fillContent(data){
        var topics = "";
        for(index in data){
          topics = topics.concat(one = Handlebars.templates.topic(data[index]));
        }
        $(topics).appendTo("#topics");
        jQuery("abbr.timeago").timeago();
    }

    $.ajax({
          url: "http://ruby-china.org/api/topics.json",
          type: "GET",
          dataType: "json",
          success: function(data) {
            fillContent(data);
            $("#loading").hide();
          }
        });

    $("#notify").click(function(){
        chrome.browserAction.setBadgeText({'text' : ""});
        chrome.tabs.create({'url' : 'http://ruby-china.org/notifications'});
    });

});
