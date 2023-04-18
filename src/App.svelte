<script lang="ts">
  import type PodcastCardData from './lib/types/PodcastCardData';
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  // import Counter from './lib/Counter.svelte'
  // import Hoverable from './lib/Hoverable.svelte';

  import PodcastArchive from './lib/PodcastArchive.svelte';
    import ProfileCardGrid from './lib/ProfileCardGrid.svelte';
    import Navbar from './lib/Navbar.svelte';

  var selectedPodcast: undefined | PodcastCardData = undefined;
 
  const podcastSelectedEventHandler = (data: PodcastCardData) => {
    console.log(data);
    selectedPodcast = data;
  }

  const resetSelectedPodcast = () => {
    selectedPodcast = undefined;
  }

  let podcasts: PodcastCardData[] = [
  {
    podcastName: "Bloomberg Technology",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/bloombergTechnology.png"
  } as PodcastCardData,
  {
    podcastName: "Joe Rogan Experience",
	  podcastSummary: "The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some fo the best moments from the episodes. ",
	  podcastHashtags: ["Society", "Culture"],
	  podcastThumbnailUrl: "images/joeroganExperience.jpg"
  } as PodcastCardData,
  {
    podcastName: "Breaking Bread",
	  podcastSummary: "Girls with No Job and Jacke O. are here to highlight their favorite moments of the week and discuss the stories they missed - Listeners and fellow Toasters will also have the opportunity to ask them anything and even give their own hot takes on the latest topics.",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/breakingBread.webp"
  } as PodcastCardData,
  {
    podcastName: "Conspiracy Theories",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/conspiracyTheories.webp"
  } as PodcastCardData,
  {
    podcastName: "Are You Garbage",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/areyouGarbage.webp"
  } as PodcastCardData,  {
    podcastName: "Ologies",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/ologies.webp"
  } as PodcastCardData,
  {
    podcastName: "Stuff You Should Know",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/stuffyoushouldKnow.jpeg"
  } as PodcastCardData,
  {
    podcastName: "Planet Money",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/planetMoney.png"
  } as PodcastCardData,

  {
    podcastName: "How to Save Planet",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/howtosaveaPlanet.webp"
  } as PodcastCardData,
]


</script>


<main>
  <Navbar resetPage={resetSelectedPodcast} ></Navbar>
  <h2> Welcome to the PodPal community! Subscribe and find yourself with a curated summary of your favorite Podcast in your inbox daily.</h2>
 

  <div class="content">
    {#if selectedPodcast === undefined}
      <ProfileCardGrid podcasts={podcasts} podcastSelectedEventHandler={podcastSelectedEventHandler}></ProfileCardGrid>
    {:else}
      <PodcastArchive data={selectedPodcast}></PodcastArchive>
    {/if}
  </div>
  

</main>

<style>
:global(body) {
      background: rgb(25, 25, 25)}


  .podcast-card-list {
    display: flex;
	  justify-content: space-between;
  }
H2{color:#d600ff}
</style>

