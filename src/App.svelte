<script lang="ts">
  import type PodcastCardData from "./lib/types/PodcastCardData";
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  // import Counter from './lib/Counter.svelte'
  // import Hoverable from './lib/Hoverable.svelte';

  import PodcastArchive from "./lib/PodcastArchive.svelte";
  import ProfileCardGrid from "./lib/ProfileCardGrid.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import getPodcasts from "./data/TestData";

  var selectedPodcast: undefined | PodcastCardData = undefined;
  const podcasts = getPodcasts();
  const podcastSelectedEventHandler = (data: PodcastCardData) => {
    console.log(data);
    selectedPodcast = data;
  };

  const resetSelectedPodcast = () => {
    selectedPodcast = undefined;
  };
</script>

<main>
  <Navbar resetPage={resetSelectedPodcast} />
  <div class="content">
    {#if selectedPodcast === undefined}
      <h2>
        Welcome to the PodPal community! Subscribe and find yourself with a
        curated summary of your favorite Podcast in your inbox daily.
      </h2>
      <ProfileCardGrid {podcasts} {podcastSelectedEventHandler} />
    {:else}
      <PodcastArchive data={selectedPodcast} />
    {/if}
  </div>
</main>

<style>
  :global(body) {
    background: rgb(25, 25, 25);
  }
  .content {
    padding-top: 100px;
  }
  H2 {
    color: #d600ff;
  }
</style>
