import { Terminal } from "xterm";

import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from 'xterm-addon-web-links';

export const term = new Terminal({
    cursorBlink: true,
    fontFamily: "Ubuntu Mono, monospace",
    letterSpacing: 1,
    fontSize: 20,
    // theme: {background: "white", foreground: "black", cursor: "black"},
    // theme: {background: "black", foreground: "white", cursor: "white"}
});


term.open(document.getElementById("app"));
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.loadAddon(new WebLinksAddon());

fitAddon.fit();
