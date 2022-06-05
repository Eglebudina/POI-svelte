<script>
    import kerry from "/src/assets/kerry-category.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import {getContext} from "svelte";
  
    const poiService = getContext("PoiService");
    poiService.logout();
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Sign up or Log in"} title={"Poi Services Inc."}/>
    </div>
    <div class="column">
      <WelcomeNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered content">
    <div class="column has-text-centered">
      <img alt="homer" src="{kerry}" width="300">
    </div>
    <div class="column">
      <h1 class="title">Help Me add hiking places</h1>
      <p>Location Ireland!</p>
    </div>
  </div>
  
  