

<script lang="ts"> 
    import type podcastCardData from './types/PodcastCardData';
    export let data: podcastCardData;
</script>

<h1>{data.podcastName}</h1>
<h2>{data.podcastSummary}</h2>

<!-- <div> This is a test writing to see what gets printed</div> -->
