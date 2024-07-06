import { data } from "../data";

/**
 * @param {number} timestampInMilliseconds
 */
export function timeAgoWithColor(timestampInMilliseconds) {
    const now = Date.now(); // Current time in milliseconds
    const diff = now - timestampInMilliseconds; // Difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return `§2${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `§e${minutes} minutes ago`;
    } else if (hours < 24) {
        return `§c${hours} hours ago`;
    } else if (days < 30) {
        return `§4${days} days ago`;
    } else if (months < 12) {
        return `§4${months} months ago`;
    } else {
        return `§4${years} years ago`;
    }
}
export function showEveryDianaMobWithColor() {
    ChatLib.chat("§2Minos Inquisitors: §6" + data.diana.mobs.inquisitorCount);
    ChatLib.chat("§2Minos Champion: §6" + data.diana.mobs.championCount);
    ChatLib.chat("§2Minotaur: §6" + data.diana.mobs.minotaurCount);
    ChatLib.chat("§2Minos Hunter: §6" + data.diana.mobs.hunterCount);
    ChatLib.chat("§2Siamese Lynxes: §6" + data.diana.mobs.lynxesCount);
    ChatLib.chat("§2Gaia Construct: §6" + data.diana.mobs.gaiaCount);
}

export const numberFormat = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
