let controlsHidden = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleControls") {
    controlsHidden = !controlsHidden;
    if (controlsHidden) {
      document.querySelectorAll('.ytp-chrome-bottom, .ytp-chrome-top').forEach(function (control) {
        control.style.display = 'none';
      });
    } else {
      document.querySelectorAll('.ytp-chrome-bottom, .ytp-chrome-top').forEach(function (control) {
        control.style.display = '';
      });
    }
  }
});
