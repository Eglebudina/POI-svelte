<script>
  import trail from "/src/assets/trail.jpeg";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const poiService = getContext("PoiService");
  poiService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Poi Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img width="300" src="{trail}" alt="trail">
  </div>
  <div class="column">
    <h1 class="title">Something here</h1>
    <p>something here!</p>
  </div>
</div>