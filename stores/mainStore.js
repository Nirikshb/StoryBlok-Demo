// // stores/mainStore.js
// import { defineStore } from 'pinia'
// import actions from './actions.js';
// import mutations from './mutations.js';
// import getters from './getters.js';


// export const useMainStore = defineStore('main', {
//   state: () => ({
//     // Array for drop-down items fetched from the "dropbox" API endpoint.
//     dropItems: [],
//     // Array for content entries fetched based on a specific slug.
//     entries: [],
//     // Array for educational items (e.g. from "educationalpage").
//     educationalItems: [],
//   }),
//   // Spread in all actions (including custom actions like fetchAllData).
//   actions: {
//     // Here, we attach our actions.
//     ...actions,
//     // Example of a composite action that fetches multiple endpoints.
//     async fetchAllData() {
//       // You can add more API calls here if needed.
//       await Promise.all([
//         this.fetchDropItems(),
//         this.fetchEducationalItems(),
//         // If you want to call additional endpoints, add them here.
//       ])
//     }
//   },
//   // Spread in our getters.
//   getters: {
//     ...getters,
//   },
//   mutations: {
//     ...mutations,
//   },
// })
// stores/mainStore.js
import { defineStore } from 'pinia'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

export const useMainStore = defineStore('main', {
  state: () => ({
    // Dropdown items (from "dropbox" endpoint)
    dropItems: [],
    // Educational items (from "educationalpage" endpoint)
    educationalItems: [],
    // Content entries (fetched by slug)
    entries: [],
  }),
  getters: {
    ...getters,
  },
  actions: {
    // Spread in all actions from actions.js.
    ...actions,
    /**
     * A helper function that calls a mutation function.
     * @param {String} mutationName - The name of the mutation to call.
     * @param {any} payload - The data to pass to the mutation.
     */
    commitMutation(mutationName, payload) {
      try {
        // Call the corresponding mutation with the store instance (`this`) and payload.
        mutations[mutationName](this, payload)
      } catch (error) {
        console.error('MAIN STORE MUTATION ERROR - ', mutationName, payload, error)
        throw error
      }
    },
  },
})
