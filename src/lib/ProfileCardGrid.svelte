<script lang="ts">
    import type PodcastCardData from "./types/PodcastCardData";
    import ProfileCard from "./ProfileCard.svelte";

    export let podcasts: PodcastCardData[]; 
    export let podcastSelectedEventHandler: (data: PodcastCardData) => void
    
</script>

<div class="podcast-card-list">
    {#each podcasts as podcast}
    <button on:click={() => podcastSelectedEventHandler(podcast)}>
      <ProfileCard podcastCardData={podcast}></ProfileCard>
    </button>
    {/each}
</div>

