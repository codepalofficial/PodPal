
<script lang="ts">
	export let podcastName: string;
	export let podcastSummary: string;
	export let podcastHashtags: string[];
	export let podcastThumbnailUrl: string;

  

	let podcastHashtagsString = podcastHashtags.join(" * ");
	console.log(podcastName);
	console.log(podcastHashtags)

	let maxLength = 95;
	let showFullText = false;

	function toggleFullText() {
    showFullText = !showFullText;
  }

  function shortenText(str, maxLen) {
    return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
  }




</script>
<!-- <button> -->
<div class="podcast-card">
	<card >
		<!-- <button class = "primary"> -->
		<div class="podcast-thumbnail-img">
			<img src={podcastThumbnailUrl} alt="thumbnail">
		</div>
		<!-- </button> -->
		<div class="podcast-card-info">
			<h2><span class="podCast-name">{podcastName}</span></h2>
			<div class="Podcast-hashtags">
				<p>{podcastHashtagsString}</p>
			</div>
			<div class="Podcast-content">
				<div class="Podcast-summary">
					{#if showFullText}
  						<p1 on:mouseleave={toggleFullText}>{podcastSummary}</p1>
					{:else}
 						<p1 on:mouseenter={toggleFullText}>{shortenText(podcastSummary, maxLength)}</p1>
					{/if}
				</div>
			</div>
		</div>
	</card>
</div>
<!-- </button> -->
<style>
	
	.podcast-thumbnail-img img{
		width: 150px;
		height: 175px;
		border-radius: 50%;
		margin-top: 30px;
		
	}
	.podCast-name {
		text-align: center;
		color: #ffff00;
	}
	.Podcast-summary{
		text-align: left;
		font-size: small;
			
	}

	.Podcast-hashtags{
		font-size: small ;
	}
	card {
    border: 3px solid #ff6ec7;
	background-color: black;
	border-radius: 2rem;
	border-color: #ffff00;

	display: flex;
	justify-content: space-between;
	justify-content: center;
	width: 300px;
	height: 300px;
	padding: 5px;
	height: 300px;
	margin: 5px;
}


</style>

