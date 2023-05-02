<script lang="ts"> 
    import { Card } from "flowbite-svelte";
    import type PodcastCardData from './types/PodcastCardData';
    import type EpisodeData from "./types/EpisodeDate";

    import { selectedPodcastStore } from "../stores/podcastStore";
    import { episodeStore } from "../stores/episodeStore";
    import { getEpisodesById } from "../server/FireStoreCalls";
    import PodcastEpisode from "./PodcastEpisode.svelte";

    let podcast;
    let episodesData: EpisodeData[] = [];

    selectedPodcastStore.subscribe(data => {
        podcast = data;
    });

    episodeStore.subscribe(data => {
        episodesData = data;
    })

    getEpisodesById(podcast.id).then(values => {
        episodeStore.set(values);
    })


</script>

<div class="episode-card">
	<Card img= {podcast.image_640_url}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{podcast.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{podcast.description}</p>
	</Card>

    {#each episodesData as episode}
        <PodcastEpisode {episode}/>
    {/each}

</div>
