import PogObject from "PogData";
/**
 * Represents an object containing information about a player named Diana.
 * @typedef {Object} playerData
 * @property {Object} diana - Information related to Diana event.
 * @property {Object} diana.mobs - Counts of different types of mobs Diana.
 * @property {number} diana.mobs.featherCount - Count of feathers.
 * @property {number} diana.mobs.inquisitorCount - Count of inquisitor mobs.
 * @property {number} diana.mobs.championCount - Count of champion mobs.
 * @property {number} diana.mobs.minotaurCount - Count of minotaur mobs.
 * @property {number} diana.mobs.hunterCount - Count of hunter mobs.
 * @property {number} diana.mobs.lynxesCount - Count of lynxes mobs.
 * @property {number} diana.mobs.gaiaCount - Count of gaia mobs.
 * @property {number} diana.lastInqs - The timestamp of the last encounter with inquisitors.
 * @property {number} diana.borrowSince - Representing the amount of mobs since last encountered with a inquisitors.
 * @property {number} diana.coins - Amount of coins dog op under Diana event.
 * @property {number} diana.longestDryStreak - Length of the longest dry streak of inquisitors.
 * @property {number} diana.totalBorrows - total borrows dug.
 * @property {Object} fishing - Information related to fishing.
 * @property {boolean} fishing.cat - Flag indicating whether Diana has a cat for fishing.
 * @property {Function} save
 */

/**
 * @type {playerData}
 */
export const data = new PogObject("LukBlock", {
    diana: {
        mobs: {
            featherCount: 0,
            inquisitorCount: 0,
            championCount: 0,
            minotaurCount: 0,
            hunterCount: 0,
            lynxesCount: 0,
            gaiaCount: 0,
        },
        totalBorrows: 0,
        lastInqs: 0,
        borrowSince: 0,
        coins: 0,
        longestDryStreak: 0,
    },
    fishing: {
        cat: true
    }
})
