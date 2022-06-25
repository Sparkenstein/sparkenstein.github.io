//@ts-check
import "xterm/css/xterm.css";
import "./style.css";
import { Terminal } from "xterm";
import { Chalk } from "chalk";
import * as XtermWebfont from "xterm-webfont";
import { FitAddon } from "xterm-addon-fit";

const term = new Terminal({
  cursorBlink: true,
  fontFamily: "Ubuntu Mono",
  letterSpacing: 1,
  fontSize: 18,
});

let curr = "";

const chalk = new Chalk({ level: 3 });

const PROMPT = `${chalk.green.bold("portfolio@prabhanjan.dev")}:~$ `;

term.open(document.getElementById("app"));
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.loadAddon(new XtermWebfont());

fitAddon.fit();

// Start
term.writeln(chalk.gray(`# ${chalk.blue("help")} for available sections`));

term.prompt = () => {
  if (curr) {
    term.write(curr);
    term.write(`\r\n\n${PROMPT}`); // output
    curr = "";
  } else {
    term.write(PROMPT);
  }
};

term.prompt();

term.onKey(function (a, b) {
  // enter
  if (a.key === "\r") {
    if (curr) {
      console.log("Enter pressed", curr);

      // entries.push(curr);
      term.write("\r\n");
      term.prompt();
    }
  } else if (a.key === "\u007f") {
    //
    if (curr) {
      curr = curr.slice(0, curr.length - 1);
      term.write("\b \b");
    }
  } else {
    curr += a.key;
    term.write(a.key);
  }
});

// ws.onmessage = (msg) => {
//   console.log("Received message", msg);
//   term.write("\r\n" + JSON.parse(msg.data).data);
//   curr = "";
// };
