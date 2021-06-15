import { Terminal } from 'xterm';

var term = new Terminal();
term.open(document.getElementById('terminal'))

function runTerminal(t) {
    t.write("Welcome to the X Terminal!\n\n")
    t.write("callie@host:~$ ")
}
runTerminal(term);