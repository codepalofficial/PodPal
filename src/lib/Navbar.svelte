<script lang="ts">
    export let resetPage: () => void;
    var subscriber: string = "";
    const subscribeHandler = () => {
        console.log(subscriber);
    }
</script>

<nav class="navbar">
    <div class="content">
        <div class="navLogo">
            <button class="navLogoBtn"  on:click={resetPage}>
                <img
                    class="navLogoImg"
                    src="/images/podcastsummarylogo.png"
                    alt="logo"
                />
            </button>
        </div>
        <div class="title">
            <h2>PodPal: Podcast Platform: Powered by ChatGPT</h2>
        </div>
        <div class="subscribe">
            <input type=string bind:value={subscriber}/>
            <button on:click={subscribeHandler}>Subscribe</button>
        </div>
    </div>
</nav>

<style>
    .navLogoBtn {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        float: left;
    }
    .navLogoImg {
        border: 3px solid yellow;
        border-radius: 2rem;
        width: 100px;
        height: 100px;
    }
    .navLogoImg:hover {
        border: 3px solid pink;
    }
    .title {
        color: #00ff6e;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-shadow: #00ff6e;
        text-align: center;
        
    }
    .subscribe{
        float: right;
        /* text-align: right; */
    }
    .content {
        width: 100%;
        height: 150px;
        display: flex;
        position :relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .navbar {
        top: 0;
        position: fixed;
    }
</style>


