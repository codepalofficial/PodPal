<script lang="ts">
    import type PodcastCardData from "./types/PodcastCardData";
    import ProfileCard from "./ProfileCard.svelte";
    import { podcastStore, selectedPodcastStore } from "../stores/podcastStore";

    let podcasts: PodcastCardData[] = [];
    podcastStore.subscribe(data => {
        podcasts = data;
    }); 
</script>



<div class="podcast-card-list">
  {#each podcasts as podcast}
    <button class="p-20" on:click={ () => {selectedPodcastStore.set(podcast)}}>
      <ProfileCard {podcast} />
    </button>
  {/each}
</div>

<style lang="postcss">
  .podcast-card-list {
    padding-top: 100px;
  }
</style>
