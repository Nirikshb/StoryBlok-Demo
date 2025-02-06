// // stores/mutations.js

// /**
//  * Updates the dropItems state.
//  * @param {Array} items - The new array of drop items.
//  */
// export function setDropItems(items) {
//     this.dropItems = items
//   }
  
//   /**
//    * Updates the educationalItems state.
//    * @param {Array} items - The new array of educational items.
//    */
//   export function setEducationalItems(items) {
//     this.educationalItems = items
//   }
  
//   /**
//    * Updates the entries state.
//    * @param {Array} items - The new array of content entries.
//    */
//   export function setEntries(items) {
//     this.entries = items
//   }
  // stores/mutations.js
export default {
  /**
   * Updates the dropdown items.
   * @param {Object} state - The current state of the store.
   * @param {Array} dropItems - The new dropdown items array.
   */
  setDropItems(state, dropItems) {
    state.dropItems = dropItems
  },

  /**
   * Updates the educational items.
   * @param {Object} state - The current state of the store.
   * @param {Array} educationalItems - The new educational items array.
   */
  setEducationalItems(state, educationalItems) {
    state.educationalItems = educationalItems
  },

  /**
   * Updates the detailed content entries.
   * @param {Object} state - The current state of the store.
   * @param {Array} entries - The new entries array.
   */
  setEntries(state, entries) {
    state.entries = entries
  },
}
