

<script lang="ts">
    import type podcastCardData from './types/PodCastCardData';
    export let data: podcastCardData;
    export let resetPage: () => void;
</script>


<button on:click={resetPage}>Back</button>
<h1>{data.podcastName}</h1>
<h2>{data.podcastSummary}</h2>

<!-- <div> This is a test writing to see what gets printed</div> -->