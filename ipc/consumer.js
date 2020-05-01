const { BrowserWindow, shell } = require("electron");

const { createWindow } = require("../window");

function sendToWebContent(event) {
  const win = BrowserWindow.getFocusedWindow();
  const webContent = win && win.webContents;
  if (webContent) {
    webContent.send(event);
  }
}

module.exports = function (commandId, args = {}) {
  switch (commandId) {
    case "createWindow":
      createWindow(args);
      break;
    case "refreshWindow":
      sendToWebContent("web:refresh");
      break;
    case "learnMore":
      shell.openExternal("https://github.com/yungshenglu/Vue-TodoList");
      break;
    case "openFromUrl":
      sendToWebContent("open-from-url");
      break;
    case "toggleSearch":
      sendToWebContent("toggle-search");
      break;
    default:
      break;
  }
};
