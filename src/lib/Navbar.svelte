<script lang="ts">
    import InputField from "./InputField.svelte";
    export let resetPage: () => void;
    var field: InputField;
</script>

<div class="navbar">
    <img
        class="navLogo"
        src="public/images/podcastsummarylogo.png"
        alt="logo"
        on:click={resetPage}
    />
    <div class="title">
        PodPal: Podcast Platform: Powered by ChatGPT
    </div>
    <div class="subscribe">
        <InputField bind:this={field} />
        <button on:click={() => field.focus()}>Subscribe</button>
    </div>
</div>

<style>
    .navLogo {
        border: 3px solid yellow;
        border-radius: 2rem;
        width: 100px;
        height: 100px;
        float: left;
    }
    .navLogo:hover {
        border: 3px solid pink;
    }
    .title {
        color: #00ff6e;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-shadow: #00ff6e;
        text-align: center;
        
    }
    .subscribe{
        /* float: right; */
        text-align: right;
    }
    .navbar {
        height: 150px;
    }
</style>



