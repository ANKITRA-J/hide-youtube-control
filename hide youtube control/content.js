let controlsHidden = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleControls") {
    controlsHidden = !controlsHidden;
    if (controlsHidden) {
      document.body.classList.add('hidden-controls');
    } else {
      document.body.classList.remove('hidden-controls');
    }
  }
});
