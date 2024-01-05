import { Terminal } from "xterm";

import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from 'xterm-addon-web-links';
import XtermWebfont from "xterm-webfont"

export const term = new Terminal({
    cursorBlink: true,
    fontFamily: "JetBrains Mono, monospace",
    letterSpacing: 1,
    fontSize: 18,
    allowProposedApi: true,
    fontWeightBold: 500,
    // theme: {background: "white", foreground: "black", cursor: "black"},
    // theme: {background: "black", foreground: "white", cursor: "white"}
});


term.open(document.getElementById("app"));
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.loadAddon(new XtermWebfont())
term.loadAddon(new WebLinksAddon());

term.focus();

fitAddon.fit();
