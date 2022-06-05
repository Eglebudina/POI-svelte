<script>
 
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";

    import Gallery from "../components/Gallery.svelte";

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Places so far..."} title={"Poi Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  

  <div class="column box has-text-centered">
    <h1 class="title is-4">Gallery</h1>
    <Gallery/>
  </div>

  