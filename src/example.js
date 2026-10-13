/**
 * Calculates the player's final score.
 *
 * @param {number} collectedItems - Number of items collected by the player.
 * @param {number} bonusMultiplier - Bonus multiplier applied to the score.
 * @returns {number} The final calculated score.
 */
function calculateScore(collectedItems, bonusMultiplier) {
    return collectedItems * bonusMultiplier;
}


/**
 * Checks whether the player has completed the level.
 *
 * @param {number} collectedItems - Number of items the player has collected.
 * @param {number} requiredItems - Number of items required to finish the level.
 * @returns {boolean} True if the player has collected enough items.
 */
function levelComplete(collectedItems, requiredItems) {
    return collectedItems >= requiredItems;
}