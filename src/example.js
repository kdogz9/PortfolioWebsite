/**
 * Calculates the player's remaining health after taking damage.
 *
 * @param {number} currentHealth - The player's current health.
 * @param {number} damage - The amount of damage taken.
 * @returns {number} The player's remaining health.
 */
function takeDamage(currentHealth, damage) {
    return Math.max(0, currentHealth - damage);
}


/**
 * Checks whether the player has completed a level.
 *
 * @param {number} collectedItems - Number of items collected.
 * @param {number} requiredItems - Number of items required to complete the level.
 * @returns {boolean} True if the player has collected enough items.
 */
function levelComplete(collectedItems, requiredItems) {
    return collectedItems >= requiredItems;
}