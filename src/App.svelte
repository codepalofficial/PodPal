<script lang="ts">
  import type podcastCardData from './lib/types/PodCastCardData';
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  // import Counter from './lib/Counter.svelte'
  // import Hoverable from './lib/Hoverable.svelte';

  import ProfileCard from './lib/ProfileCard.svelte'
  import InputField from './lib/InputField.svelte';
  import PodcastArchive from './lib/PodcastArchive.svelte';

  var field: InputField;
  var selectedPodcast: undefined | podcastCardData = undefined;
 
  const podcastSelectedEventHandler = (data: podcastCardData) => {
    console.log(data);
    selectedPodcast = data;
  }

  const resetSelectedPodcast = () => {
    selectedPodcast = undefined;
  }

  let podcasts: podcastCardData[] = [
  {
    podcastName: "Bloomberg Technology",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/bloombergTechnology.png"
  } as podcastCardData,
  {
    podcastName: "Joe Rogan Experience",
	  podcastSummary: "The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some fo the best moments from the episodes. ",
	  podcastHashtags: ["Society", "Culture"],
	  podcastThumbnailUrl: "images/joeroganExperience.jpg"
  } as podcastCardData,
  {
    podcastName: "Breaking Bread",
	  podcastSummary: "Girls with No Job and Jacke O. are here to highlight their favorite moments of the week and discuss the stories they missed - Listeners and fellow Toasters will also have the opportunity to ask them anything and even give their own hot takes on the latest topics.",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/breakingBread.webp"
  } as podcastCardData,
  {
    podcastName: "Conspiracy Theories",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/conspiracyTheories.webp"
  } as podcastCardData,
  {
    podcastName: "Are You Garbage",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/areyouGarbage.webp"
  } as podcastCardData,  {
    podcastName: "Ologies",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/ologies.webp"
  } as podcastCardData,
  {
    podcastName: "Stuff You Should Know",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/stuffyoushouldKnow.jpeg"
  } as podcastCardData,
  {
    podcastName: "Planet Money",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/planetMoney.png"
  } as podcastCardData,

  {
    podcastName: "How to Save Planet",
	  podcastSummary: "Bloomberg Technology is the only daily news program focused exclusively on technology, innovation and hte future of business",
	  podcastHashtags: ["Finance", "Business" , "Technology"],
	  podcastThumbnailUrl: "images/howtosaveaPlanet.webp"
  } as podcastCardData,
]


</script>


<main>

  <div>
      <span class="websiteLogo"><img src="images/podcastsummarylogo.png" alt="background" height="300px" width="300px "  /></span>
  </div>
  <h1>PodPal: Podcast Summary Platform: Powered by ChatGPT</h1>
  <h2> Welcome to the PodPal community! Subscribe below and find yourself with a curated summary of your favorite Podcast in your inbox daily.</h2>

  <InputField bind:this={field}/>

  <button on:click={() => field.focus()}>Subscribe</button>

  <div class="content">
    {#if selectedPodcast === undefined}
      <div class="podcast-card-list">
        {#each podcasts as podcast}
        <button on:click={() => podcastSelectedEventHandler(podcast)}>
          <ProfileCard {...podcast}></ProfileCard>
        </button>
        {/each}
      </div>
    {:else}
      <PodcastArchive data={selectedPodcast} resetPage={resetSelectedPodcast}></PodcastArchive>
    {/if}
  </div>
  

</main>

<style>
:global(body) {
      margin: 0%;
      padding:0% ;
      background: rgb(25, 25, 25)}

  .podcast-card-list {
    display: flex;
	  justify-content: space-between;
  }
h1 {color:#00ff6e} 
H2{color:#d600ff}





</style>

