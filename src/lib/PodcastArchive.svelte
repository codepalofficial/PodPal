<script lang="ts"> 
    import { Card } from "flowbite-svelte";
    import type PodcastCardData from './types/PodcastCardData';
    import type EpisodeData from "./types/EpisodeDate";

    import { selectedPodcastStore } from "../stores/podcastStore";
    import { episodeStore } from "../stores/episodeStore";
    import { getEpisodesById } from "../server/FireStoreCalls";
    import PodcastEpisode from "./PodcastEpisode.svelte";
  import EpisodeCardGrid from "./EpisodeCardGrid.svelte";

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

<div>
     <div class="flex justify-center w-full"> 
        <Card class="text-left" size="lg" padding="xl" img={podcast.image_640_url}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{podcast.name}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{podcast.description}</p>
        </Card>
    </div> 

    <!-- {#each episodesData as episode}
        <div class="flex justify-center p-5">
            <PodcastEpisode {episode}/>
        </div>
    {/each} -->

    <EpisodeCardGrid/>

</div>
