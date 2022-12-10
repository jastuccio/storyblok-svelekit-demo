<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<h1>SvelteKit & Storyblok FTW!!!</h1>

<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>

<style>
	h1 {
		font-size: 2rem;
		color: red;
	}
</style>
