<script lang="ts">
  import "./app.css"
  import type PodcastCardData from "./lib/types/PodcastCardData";
  import PodcastArchive from "./lib/PodcastArchive.svelte";
  import ProfileCardGrid from "./lib/ProfileCardGrid.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import { getPodcasts } from "./server/FireStoreCalls";
  import { onMount } from "svelte";
  import { podcastStore, selectedPodcastStore } from "./stores/podcastStore";



  let selectedPodcast: PodcastCardData | undefined;
  
  selectedPodcastStore.subscribe(data => {
    selectedPodcast = data;
  })

  onMount(() => {
    let isLoading = true;
    getPodcasts().then(values =>  {
      podcastStore.set(values)
      isLoading = false;
      selectedPodcastStore.set(undefined);
    })
  })

</script>


<div class="">
  <Navbar/>
</div>
<main class="bg-slate-600">
  <div class="content">
    {#if selectedPodcast === undefined}
      <h1 class="text-center text-5xl font-bold text-white">
        Welcome to the PodPal. <br>
        Find your next favorite podcast.</h1>
      <ProfileCardGrid/>
    {:else}
      <PodcastArchive/>
    {/if}
  </div>
  <Footer/> 
</main>

<style lang="postcss">
  .content{
    padding-top: 150px;
  }
</style>
