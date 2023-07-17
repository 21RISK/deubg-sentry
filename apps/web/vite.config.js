import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sentrySvelteKit({
    sourceMapsUploadOptions: {
      cleanArtifacts: true,
      setCommits: {
          auto: true,
      },
    }
  }) ,sveltekit()]
};

export default config;
