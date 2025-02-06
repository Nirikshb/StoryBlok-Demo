// // stores/getters.js

// // Returns the dropItems array.
// export const dropItems = (state) => state.dropItems

// // Returns the educationalItems array.
// export const educationalItems = (state) => state.educationalItems

// // Returns the content entries.
// export const entries = (state) => state.entries
// stores/getters.js
export default {
    /**
     * Returns the dropdown items.
     */
    getDropItems: (state) => state.dropItems,
  
    /**
     * Returns the educational items.
     */
    getEducationalItems: (state) => state.educationalItems,
  
    /**
     * Returns the detailed content entries.
     */
    getEntries: (state) => state.entries,
  }
  