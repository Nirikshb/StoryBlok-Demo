// // stores/actions.js
// import { useNuxtApp } from '#app'  // Adjust the import path as needed

// /**
//  * Fetches drop items from the "dropbox" endpoint.
//  * Calls the mutation setDropItems to update state.
//  */
// export async function fetchDropItems() {
//   try {
//     const { $storyblok } = useNuxtApp()
//     const response = await $storyblok.get('cdn/stories', {
//       version: 'draft', // Change to 'published' in production
//       starts_with: 'dropbox',
//     })
//     // Assume the API returns an array inside the first story's content.
//     const items = response?.data?.stories[0]?.content.Dropitems || []
//     this.setDropItems(items)
//   } catch (error) {
//     console.error('Error fetching drop items:', error)
//   }
// }

// /**
//  * Fetches educational items from the "educationalpage" endpoint.
//  * Calls the mutation setEducationalItems to update state.
//  */
// export async function fetchEducationalItems() {
//   try {
//     const { $storyblok } = useNuxtApp()
//     const response = await $storyblok.get('cdn/stories', {
//       version: 'draft', // Change to 'published' in production
//       starts_with: 'educationalpage',
//     })
//     this.setEducationalItems(response.data.stories || [])
//   } catch (error) {
//     console.error('Error fetching educational items:', error)
//   }
// }

// /**
//  * Fetches content for a given slug.
//  * This is useful for pages that need to load detailed content.
//  */
// export async function fetchContentBySlug(slug) {
//   try {
//     const { $storyblok } = useNuxtApp()
//     const response = await $storyblok.get(`cdn/stories/${slug}`, {
//       version: 'draft',
//     })
//     // Flatten the entries if required (as in your original code).
//     const fetchedEntries = response.data.story.content.entries?.flat() || []
//     this.setEntries(fetchedEntries)
//   } catch (error) {
//     console.error('Error fetching content for slug:', error)
//   }
// }
// stores/actions.js
import { useNuxtApp } from '#app';

export default {
	/**
	 * Fetches the dropdown items from the "dropbox" endpoint.
	 */
	async fetchDropItems() {
		try {
			const { $storyblok } = useNuxtApp();
			const response = await $storyblok.get('cdn/stories', {
				version: 'draft', // Change to 'published' in production
				starts_with: 'dropbox'
			});
			// Expecting drop items to be inside the first story’s content.
			const dropItems = response?.data?.stories[0]?.content?.Dropitems || [];
			this.commitMutation('setDropItems', dropItems);
			return dropItems;
		} catch (error) {
			console.error('Error fetching drop items:', error);
			throw error;
		}
	},

	/**
	 * Fetches the educational items from the "educationalpage" endpoint.
	 */
	async fetchEducationalItems() {
		try {
			const { $storyblok } = useNuxtApp();
			const response = await $storyblok.get('cdn/stories', {
				version: 'draft', // Change to 'published' in production
				starts_with: 'educationalpage'
			});
			const educationalItems = response?.data?.stories || [];
			this.commitMutation('setEducationalItems', educationalItems);
			return educationalItems;
		} catch (error) {
			console.error('Error fetching educational items:', error);
			throw error;
		}
	},

	/**
	 * Fetches detailed content by slug.
	 * @param {String} slug - The slug for the content.
	 */
	async fetchContentBySlug(slug) {
		try {
			const { $storyblok } = useNuxtApp();
			const response = await $storyblok.get(`cdn/stories/${slug}`, {
				version: 'draft'
			});
			// Flatten entries if necessary (adjust based on your API structure)
			const entries = response?.data?.story?.content?.entries?.flat() || [];
			this.commitMutation('setEntries', entries);
			return entries;
		} catch (error) {
			console.error('Error fetching content for slug:', error);
			throw error;
		}
	}
};
