const os = require("os");

const Menu = require("electron").Menu || require("electron").remote.Menu;
const app = require("electron").app || require("electron").remote.app;

const exec = require("./ipc/exec");

const template = [
  {
    label: "Edit",
    submenu: [
      {
        role: "undo",
      },
      {
        role: "redo",
      },
      {
        type: "separator",
      },
      {
        role: "cut",
      },
      {
        role: "copy",
      },
      {
        type: "separator",
      },
      {
        label: "Search",
        accelerator: "CmdOrCtrl+F",
        click() {
          exec("toggleSearch");
        },
      },
      {
        type: "separator",
      },
      {
        role: "paste",
      },
      {
        role: "pasteandmatchstyle",
      },
      {
        role: "delete",
      },
      {
        role: "selectall",
      },
      {
        type: "separator",
      },
    ],
  },
  {
    role: "window",
    submenu: [
      {
        role: "minimize",
      },
      {
        role: "close",
      },
      {
        type: "separator",
      },
      {
        label: "Refresh",
        accelerator: "CmdOrCtrl+R",
        click() {
          exec("refreshWindow");
        },
      },
      {
        type: "separator",
      },
      {
        role: "togglefullscreen",
      },
      {
        role: "toggledevtools",
      },
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click() {
          exec("learnMore");
        },
      },
    ],
  },
];

if (os.platform() === "darwin") {
  template.unshift({
    label: app.name,
    submenu: [
      {
        role: "about",
      },
      {
        type: "separator",
      },
      {
        role: "services",
        submenu: [],
      },
      {
        type: "separator",
      },
      {
        role: "hide",
      },
      {
        role: "hideothers",
      },
      {
        role: "unhide",
      },
      {
        type: "separator",
      },
      {
        role: "quit",
      },
    ],
  });
  // Edit menu.
  template[2].submenu.push(
    {
      type: "separator",
    },
    {
      label: "Speech",
      submenu: [
        {
          role: "startspeaking",
        },
        {
          role: "stopspeaking",
        },
      ],
    }
  );
}

module.exports = Menu.buildFromTemplate(template);
