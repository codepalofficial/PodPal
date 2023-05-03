<script lang="ts">

    import type EpisodeData from "./types/EpisodeDate";
    export let episode: EpisodeData;
</script>


<div class="p-5">
    <h2>{episode.name}</h2>
    <p>{episode.description}</p>
</div>
