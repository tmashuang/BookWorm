$(document).ready(function() {
  onCreatedChrome()
});

function onCreatedChrome() {
  chrome.tabs.onCreated.addListener(function(tab) {
    alert("hello");
  });
}