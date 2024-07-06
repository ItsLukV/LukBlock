import { data } from "../data";
import { showEveryDianaMobWithColor, timeAgoWithColor, numberFormat } from "./utils";
import Settings from "./config";

/**
 * @param {string} prefix
 * @param {string} mob
 */
export function dugOutWithPrefix(prefix, mob) {
    if (prefix.includes("Party")) return;
    let msgTxt = `§2Borrows since a Inquisitor: §6${data.diana.borrowSince + 1} | Avg: ${avgMobs()}`;
    if (mob !== "a Minos Inquisitor!" && Settings.setting_test) {
        ChatLib.chat(msgTxt)
    }
    console.log(mob);

    switch (mob) {
        case "a Minos Champion!":
            data.diana.mobs.championCount += 1;
            break;
        case "a Minotaur!":
            data.diana.mobs.minotaurCount += 1;
            break;
        case "a Minos Hunter!":
            data.diana.mobs.hunterCount += 1;
            break;
        case "Siamese Lynxes!":
            data.diana.mobs.lynxesCount += 1;
            break;
        case "a Gaia Construct!":
            data.diana.mobs.gaiaCount += 1;
            break;
        case "a Griffin Feather!":
            data.diana.mobs.featherCount += 1;
            break;
        case "10,000 coins!":
        case "15,000 coins!":
        case "25,000 coins!":
        case "40,000 coins!":
        case "50,000 coins!":
        case "100,000 coins!":
        case "250,000 coins!":
        case "500,000 coins!":
            data.diana.coins += parseInt(mob.replace(/[^0-9]/, ''));
            ChatLib.chat(`§2Total coins colleted: §6${numberFormat(data.diana.coins)}§2 coins`);
            break;
        case "a Minos Inquisitor!":
            if (data.diana.borrowSince > data.diana.longestDryStreak) {
                data.diana.longestDryStreak = data.diana.borrowSince;
            }
            ChatLib.chat("§2The Inquisitor spawned after: §6" + data.diana.borrowSince + " §2borrows");
            data.diana.lastInqs = new Date().getTime();
            data.diana.borrowSince = 0;
            data.diana.mobs.inquisitorCount += 1;
            ChatLib.chat("Pog a inqs");
            break;
    }
    data.save();
}


export function dugOut() {
    // if (prefix.includes("Party")) return;
    data.diana.borrowSince += 1;
    data.diana.totalBorrows += 1;
    let msgTxt = `§2Borrows since a Inquisitor: §6${data.diana.borrowSince} | Avg: ${avgMobs()}`;
    ChatLib.chat(msgTxt)
    data.save();
}

export function inqsCommand() {
    if(data.diana.mobSince > data.diana.longestDryStreak) {
        data.diana.longestDryStreak = data.diana.mobSince;
    }
    data.save();
    if (data.diana.lastInqs === 0) {
        if(data.diana.mobSince > 100) {
            ChatLib.chat(`§2Last Inquisitor was at: §4NEVER §2or §4${data.diana.mobSince} §2mobs since.`);
        } else {
            ChatLib.chat(`§2Last Inquisitor was at: §4NEVER §2or §6${data.diana.mobSince} §2mobs since.`);
        }
    } else {
        let time = timeAgoWithColor(data.diana.lastInqs);
        // let time = new Date(data.lastInqs).toLocaleString()
        if(data.diana.mobSince > 100) {
            ChatLib.chat(`§2Last Inquisitor was at: ${timeAgoWithColor(data.diana.lastInqs)} §2or §4${data.diana.mobSince} §2mobs since.`);
        } else {
            ChatLib.chat(`§2Last Inquisitor was at: ${timeAgoWithColor(data.diana.lastInqs)} §2or §6${data.diana.mobSince} §2mobs since.`);
        }
    }
    ChatLib.chat("§2Longest dry streak: §6" + data.diana.longestDryStreak)
    showEveryDianaMobWithColor();
}


export function avgMobs() {
    let rawAvg = (data.diana.totalBorrows - data.diana.borrowSince) / data.diana.mobs.inquisitorCount;
    let formatedAvg = Math.round((rawAvg + Number.EPSILON) * 100) / 100
    return formatedAvg;
}
