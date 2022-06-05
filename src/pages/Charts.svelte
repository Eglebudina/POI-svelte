<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  
  import ChartPlace from "../components/ChartPlacePerCategory.svelte";
</script>  
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Poi Analytics"} title={"Poi Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <div class="columns">
    <div class="column box has-text-centered">
      <ChartPlace/>
    </div>
   
    </div>