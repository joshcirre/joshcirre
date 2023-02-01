// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Josh Cirre - Helping people help people.';
export const SITE_DESCRIPTION =
	'This is just a little bit about me, what I do, and what I love to do.';
export const TWITTER_HANDLE = '@joshcirre';
export const MY_NAME = 'Josh Cirre';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
