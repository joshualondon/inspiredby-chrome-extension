// background.js

// Called when the user clicks on the browser action.
// chrome.runtime.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });


function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'save-image.html?image=' + info.srcUrl;

    // Create a new window to the info page.
    chrome.windows.create({ url: url, width: 520, height: 660 });
  };
};

chrome.contextMenus.create({
    "title": "Save to InspiredBy",
    "type": "normal",
    "contexts": ["image"],
    "onclick": getClickHandler()
});
