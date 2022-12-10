import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), mkcert()],
  server: {
    https: true,
    apiOptions: { region: 'us' },
    /************** 
     * `proxy: {}` is suggested as a bug fix
     *  https://stackoverflow.com/questions/73205096/run-sveltekit-dev-with-https
     * */
    // proxy: {},
  },
};

export default config;

/*************************************************** */

// import { sveltekit } from '@sveltejs/kit/vite';

// /** @type {import('vite').UserConfig} */
// const config = {
//   plugins: [sveltekit()]
// };

// export default config;
