import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import adapter from '@sveltejs/adapter-auto';

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// }

const config = {
  // kit: {
  //   adapter: adapter()
  // },
  preprocess: vitePreprocess()
};

export default config;