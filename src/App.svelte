<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Report from "./pages/Report.svelte";
  import Pois from "./pages/Pois.svelte";
  import Router from "svelte-spa-router";
  
  setContext ("PoiService",new PoiService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/pois": Pois,
    "/report": Report,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>