//@ts-check
import "xterm/css/xterm.css";
import "./style.css";
import { Chalk } from "chalk";
import { blogcontent, educontent, expcontent, helpcontent, infocontent, projcontent, skillsconetent, socialcontent, toolscontent } from "./data";
import { term } from "./term";

const chalk = new Chalk({ level: 3 });

const PROMPT = `${chalk.green.bold("portfolio@prabhanjan.dev")}:~$ `;

let theme = "dark"

const darktheme = {
  background: "#1d1f21", foreground: "#c5c8c6", cursor: "#d8dee9", cursorAccent: "#1d1f21",
  black: '#1d1f21',
  red: '#cc342b',
  green: '#198844',
  yellow: '#fba922',
  blue: '#3971ed',
  magenta: '#a36ac7',
  cyan: '#3971ed',
  white: '#c5c8c6',

  // BRIGHT:
  brightBlack: '#969896',
  brightRed: '#cc342b',
  brightGreen: '#198844',
  brightYellow: '#fba922',
  brightBlue: '#3971ed',
  brightMagenta: '#a36ac7',
  brightCyan: '#3971ed',
  brightWhite: '#ffffff',

};

// Light theme:
const lighttheme = {
  background: "#ffffff", foreground: "#373b41", cursor: "#373b41", cursorAccent: "#ffffff",

  black: '#1d1f21',
  red: '#cc342b',
  green: '#198844',
  yellow: '#fba922',
  blue: '#3971ed',
  magenta: '#a36ac7',
  cyan: '#3971ed',
  white: '#c5c8c6',

  brightBlack: '#969896',
  brightRed: '#cc342b',
  brightGreen: '#198844',
  brightYellow: '#fba922',
  brightBlue: '#3971ed',
  brightMagenta: '#a36ac7',
  brightCyan: '#3971ed',
  brightWhite: '#ffffff',
}


term.options.theme = { ...darktheme }

// Start
let curr = "";

term.writeln(chalk.gray(`# ${chalk.blue("help/h")} for available sections. this is not a full fledged term. expect some 🐛.`));

const prompt = () => {
  if (curr) {
    term.write(curr);
    term.write(`\r\n\n${PROMPT}`); // output
    curr = "";
  } else {
    term.write(PROMPT);
  }
};

prompt();

function writeCommand(content) {
  content.split('\n').forEach((line) => {
    term.writeln(line)
  })
  term.write(`\r\n${PROMPT}`)
  curr = "";
}

// writeCommand(infocontent)

const history = [];

term.onKey(function (a, b) {
  curr = curr.trim()
  // Control + C
  if (a.key === "\u0003") {
    curr = "";
    term.write("\r\n")
    term.write(PROMPT)
    return
  }

  // TODO: Up arrow. probably handle history here
  if (a.key === "\u001b[A") {
    // term.write()
    return
  }
  // TODO: down arrow
  if (a.key === "\u001b[B") {
    return
  }
  if (a.key === "\r") {
    if (curr) {
      history.push(curr);
      switch (curr.trim()) {
        case "help":
        case "h":
          writeCommand(helpcontent);
          break;

        case "info":
          writeCommand(infocontent);
          break;

        case "edu":
          writeCommand(educontent);
          break;

        case "skills":
          writeCommand(skillsconetent)
          break;

        case "tools":
          writeCommand(toolscontent);
          break;

        case "exp":
          writeCommand(expcontent);
          break;

        case "proj":
          writeCommand(projcontent);
          break;
        case "social":
          writeCommand(socialcontent);
          break;

        case "blog":
          writeCommand(blogcontent);
          break;

        case "theme":
          term.options.theme = theme === "dark" ? { ...lighttheme } : { ...darktheme }
          theme = theme === "dark" ? "light" : "dark";
          curr = "";
          term.write("\r\n");
          prompt()
          break;


        case "cls":
        case "clear":
        case "reset":
          curr = "";
          term.reset()
          term.write("\r\n");
          prompt();
          break;

        default:
          if (curr.startsWith("font")) {
            const size = curr.split("font")[1];
            term.options.fontSize = parseInt(size);
            curr = "";
            term.write("\r\n");
            prompt();
            return
          }
          term.writeln(`\r\nUnknown command ${curr}. type ${chalk.blue("help")} for help\n`);
          curr = "";
          prompt();
      }

    }
  } else if (a.key === "\u007f") {
    // Backspace
    if (curr) {
      curr = curr.slice(0, curr.length - 1);
      term.write("\b \b");
    }
    // }
  } else {
    curr += a.key;
    term.write(a.key);
  }
});


// clear screen on ctrl k
term.onData((data, e) => {
  if (data === "\x0b") {
    curr = "";
    term.reset()
    prompt();
  }
});
