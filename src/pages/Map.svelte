<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlaceMap from "../components/PlaceMap.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of Hiking Locations"} title={"Poi Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="box">
    <PlaceMap/>
  </div>