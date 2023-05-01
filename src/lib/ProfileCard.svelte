
<script lang="ts">
	import { Card } from "flowbite-svelte";
    import type PodcastCardData from "./types/PodcastCardData";
	export let podcastCardData: PodcastCardData;
	console.log(podcastCardData.name);

	let maxLength = 95;
	let showFullText = false;

	function toggleFullText() {
    showFullText = !showFullText;
  }

  function shortenText(str, maxLen) {
    return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
  }

</script>
<div class="p-20">
	<Card size="sm" img={podcastCardData.image_300_url}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">{podcastCardData.name}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-950 leading-tight">{podcastCardData.description}</p>
	</Card>
</div>

<style lang="postcss">
</style>
<!-- <div class="p-20">
	<Card img="/images/image-1.webp" href="/">
	  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
	  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
	  </p>
	</Card>
</div> -->
