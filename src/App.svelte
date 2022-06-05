<script>
  import {setContext} from "svelte";
  import {poiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Place from "./pages/Place.svelte";
  import Category from "./pages/Category.svelte"
  import Map from "./pages/Map.svelte";
  import Gallery from "./pages/Gallery.svelte"
  import Router from "svelte-spa-router";
  import Charts from "./pages/Charts.svelte";


  setContext("PoiService", new poiService("https://powerful-cove-53286.herokuapp.com/"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/pois": Dashboard,
    "/place": Place,
    "/place/*": Place,
    "/category": Category,
    "/category/*": Category,
    "/map": Map,
    "/gallery": Gallery,
    "/charts": Charts,
    "/report": Report,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
