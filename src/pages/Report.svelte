<script>
  import trail from "/src/assets/trail.jpeg";
  import PoiList from "../components/PoiList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pois so far..."} title={"Places of Interest Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="trail" src={trail} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Pois to date</h1>
    <PoiList/>
  </div>
</div>