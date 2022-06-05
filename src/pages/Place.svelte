<script>
    
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlaceView from "../components/PlaceView.svelte";
    import Gallery from "../components/Gallery.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Place Info "} title={"Poi Web App"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <br>
  <div class="columns">
    <div class="column has-text-centered">
      
      <Gallery/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Place Details</h1>
      
      <PlaceView/>
    </div>
  </div>