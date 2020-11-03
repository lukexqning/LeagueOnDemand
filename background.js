chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "https://na.op.gg/";
    chrome.tabs.create({ url: newURL });
});