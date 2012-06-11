// chrome.browserAction.onClicked.addListener(function(tab) {
//
// });
var fetching = false;
var unread_count = 0;
function fetchNotify(){
    if(!fetching) {
        fetching = true;
        $.get("http://ruby-china.org/", function(r) {
            unread_count = $(r).find("#userbar li a span").text();
            if (unread_count == "0") {
                chrome.browserAction.setBadgeText({'text' : ""});
            } else {
                chrome.browserAction.setBadgeText({'text' : unread_count});
            }

        });
    }
    fetching = false;
}
fetchNotify();
setInterval(fetchNotify, 1000 * 60 * 15); // TODO every 15 minutes update, should be configed.