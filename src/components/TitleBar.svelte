<script>
  import icon from "/src/assets/svelte.png"
  import {user} from "../stores.js"
  import Gallery from "../pages/Gallery.svelte"
  export let title = "";
  export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{icon}" width="60" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> {title} </div>
    <div class="subtitle is-5"> {subTitle} </div>
  </div>
  <div class="column">
    <i class="fas fa-hiking fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
    {#if $user.email}
      <div class="is-size-7">{$user.email} </div>
    {:else}
      <div class="is-size-7">POI-Svelte 0.2</div>
    {/if}
  </div>
  <div class="column">
    <a href="/#/gallery" class="column is-2 mx-2">
      <i class="fas fa-camera fa-3x" style="color:rgb(149, 93, 176)"></i>
    </a>
  </div>
</div>
