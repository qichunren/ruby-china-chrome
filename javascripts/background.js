// chrome.browserAction.onClicked.addListener(function(tab) {
//
// });


function updateIcon() {
  chrome.browserAction.setIcon({path:"icon" + current + ".png"});
}