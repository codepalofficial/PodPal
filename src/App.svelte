<script lang="ts">
  import "./app.css"
  import type PodcastCardData from "./lib/types/PodcastCardData";
  import PodcastArchive from "./lib/PodcastArchive.svelte";
  import ProfileCardGrid from "./lib/ProfileCardGrid.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import { getPodcasts } from "./server/FireStoreCalls";

  var selectedPodcast: undefined | PodcastCardData = undefined;
  let podcasts = []
  let isLoading = true;

  function setPodcasts(input: PodcastCardData[]) {
    podcasts = input;
    isLoading = false;
  }

  getPodcasts().then((values) => setPodcasts(values))

  const podcastSelectedEventHandler = (data: PodcastCardData) => {
    console.log(data);
    selectedPodcast = data;
  };

  const resetSelectedPodcast = () => {
    selectedPodcast = undefined;
  };
</script>

<main class="bg-slate-600">
  <Navbar/>
  <div class="pt-150">
    {#if selectedPodcast === undefined}
      <h2>
        Welcome to the PodPal community! Subscribe and find yourself with a
        curated summary of your favorite Podcast in your inbox daily.
      </h2>
      <ProfileCardGrid podcasts={podcasts} podcastSelectedEventHandler={podcastSelectedEventHandler} />
    {:else}
      <PodcastArchive data={selectedPodcast} />
    {/if}
  </div>
  <Footer/> 
</main>

<style lang="postcss">

</style>
