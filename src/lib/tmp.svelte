<div class="podcast-card">
	<card >
		<button class = "primary">
		<div class="podcast-thumbnail-img">
			<img src={podcastCardData.image_640_url} alt="thumbnail">
		</div>
		<!-- </button> -->
		<div class="podcast-card-info">
			<h2><span class="podCast-name">{podcastCardData.name}</span></h2>
			<!-- <div class="Podcast-hashtags"> -->
				<!-- <p>{podcastHashtagsString}</p> -->
			<!-- </div> -->
			<div class="Podcast-content">
				<div class="Podcast-summary">
					{#if showFullText}
  						<p1 on:mouseleave={toggleFullText}>{podcastCardData.description}</p1>
					{:else}
 						<p1 on:mouseenter={toggleFullText}>{shortenText(podcastCardData.description, maxLength)}</p1>
					{/if}
				</div>
			</div>
		</div>
	</card>
</div>