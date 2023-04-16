<script lang="ts">
    import type podcastCardData from "./types/PodcastCardData";
    import ProfileCard from "./ProfileCard.svelte";

    export let podcasts: podcastCardData[]; 
    export let podcastSelectedEventHandler: (data: podcastCardData) => void
    
</script>

<div class="podcast-card-list">
    {#each podcasts as podcast}
    <button on:click={() => podcastSelectedEventHandler(podcast)}>
      <ProfileCard {...podcast}></ProfileCard>
    </button>
    {/each}
</div>

