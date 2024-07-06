/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

let chatType = "Party"


import { dugOut, dugOutWithPrefix, inqsCommand, avgMobs } from "./src/diana";
import { data } from "./data";
import Settings from "./src/config";
// import ExampleGui from "./src/gui"

register("command", ()=> {
    Settings.openGUI();
}).setName("lb");


register("chat", (player, command) => {
    if(command.includes("li")) {
        ChatLib.say(`/pc LukVs last inquisitor was ${data.diana.borrowSince} borrows ago! | ${avgMobs()}`)
    }
}).setCriteria(chatType + " > ${player}: "+ Settings.prefix +"${command}")

register("command", () => {
    inqsCommand();
}).setName("inqs");

register("chat", (prefix, mob)=> {
    if(typeof prefix !== 'string' || typeof mob !== 'string') {
        return;
    }
    dugOutWithPrefix(prefix, mob);
}).setCriteria("${prefix}You dug out ${mob}");

register("chat", ()=> {
    dugOut();
}).setCriteria("You dug out a Griffin Burrow!${meow}");

register("chat", ()=> {
    dugOut();
}).setCriteria("You finished the Griffin burrow chain!${meow}");

register("chat", (prefix, mob)=> {
    ChatLib.say(`/pc hello`)
}).setCriteria(chatType + " > [MVP+] Flyingshepfan_69 ⚒: Hello LukV");

// register("chat", (player, mf) => {
//     ChatLib.say(`/pc The for drop chance Chimera is ${(0.0175*(1+(parseFloat(mf)/100)))*100}% with ${mf} magic find and looting 5`)
// }).setCriteria(chatType + " > ${player}: "+ Settings.prefix +"chimera ${mf}")

// register("chat", (player) => {
//     ChatLib.say("#1 RNG carried guy")
// }).setCriteria(chatType + " > ${player}: "+ Settings.prefix +"Valdey")

// register("chat", (player) => {
//     ChatLib.say("#2 RNG carried guy")
// }).setCriteria(chatType + " > ${player}: "+ Settings.prefix +"JannickLB")

register("chat", (player, command, args) => {
    switch(command.toLowerCase()) {
        case "chimera":
            ChatLib.say(`/pc The for drop chance Chimera is ${(0.0175*(1+(parseFloat(args)/100)))*100}% with ${args} magic find and looting 5`)
        break;
    }
}).setCriteria(chatType + " > ${player}: "+ Settings.prefix + "${command} ${args}")

register("chat", (player, command, args) => {
    switch(command.toLowerCase()) {
        case "valdey":
            ChatLib.say(" ☠ Valdey was killed by Frozen Adventurer and became a ghost.")
            break;
            case "jannicklb":
            ChatLib.say("#1 Minos Relic Lover")
            break;
            case "flyingshepfan_69":
                ChatLib.say("#2 RNG carried guy")
            break;
            case "stepjeppe":
                ChatLib.say("#1 RNG carried guy")
            break;
            case "cookie":
                ChatLib.say("")
            break;
    }
}).setCriteria(chatType + " > ${player}: "+ Settings.prefix + "${command}")


register("chat", (player, rare_drop) => {
    if(Settings.toxicMode)
    if(!player.includes("LukV")) {
        // ChatLib.say("RARE DROP! Your mom (+6969% ✯ Magic Find)")
        ChatLib.say(Settings.rareDrop)
    } else {
        ChatLib.chat("Lets GO")
    }
}).setCriteria(chatType + " > ${player}: RARE DROP! ${rare_drop}")
