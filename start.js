chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "p5.min.js"}, function(){
      chrome.tabs.executeScript(null, {file: "p5.dom.js"}, function(){
        chrome.tabs.executeScript(null, {file: "sketch.js"});
      });
  });
});
