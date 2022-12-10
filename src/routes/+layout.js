import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "dFod7hbgBRwSsvG8vSANogtt",
    use: [apiPlugin],
    apiOptions: { region: 'us' }, //? is this required here
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
  });
  let storyblokApi = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}