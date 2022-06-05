<script>
    
    import PlaceListAll from "../components/PlaceListAll.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlaceMap from "../components/PlaceMap.svelte";
    import CategoryList from "../components/CategoryList.svelte";
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
  
  <div class="columns">
    <div class="column has-text-centered">
      <PlaceMap/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Hiking places to date</h1>
      <PlaceListAll/>
    </div>
  </div>

  <div class="column box has-text-centered">
    <h1 class="title is-4">Gallery</h1>
    <Gallery/>
  </div>

  