<script lang="ts"> 
    import { Card } from "flowbite-svelte";
    import type PodcastCardData from './types/PodcastCardData';
    import type EpisodeData from "./types/EpisodeDate";
    import { getEpisodesById } from "../server/FireStoreCalls";


    export let data: PodcastCardData;
    let isEpLoaded: Boolean = false;
    let episodesData = [];
    getEpisodesById(data.id).then((values) => {
        episodesData = values;
        console.log(values);
        isEpLoaded = true
    })
</script>

<!-- <img src={data.image_64_url} alt="podcastBanner" />
<h1>{data.name}</h1>
<h3>{data.description}</h3> -->

<div class="episode-card">
	<Card img= {data.image_640_url}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{data.description}</p>
	</Card>
	<!-- <div class="w-12 h-12 bg-white"></div> -->

    {#if isEpLoaded}
        {#each episodesData as episodeData}
        <h2>{episodeData.name}</h2>
        {/each}
    {/if}
</div>
<!-- <h3>{data.podcastHashtags}</h3> -->


<!-- <div> This is a test writing to see what gets printed</div> -->
