<script>
    import PoiList from "../components/PoiList.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PoiForm from "../components/PoiForm.svelte";
    import CategoryMap from "../components/CategoryMap.svelte";
    let categoryMap = null;
    function categoryAdded(event) {
      categoryMap.addCategoryMarker(event.detail.category);
    }
  </script>
  
  <section>
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"User Categories so far..."} title={"The Poi Application"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <div><PoiList/>
  </div>
  <br>
  <div class="columns">
    <div class="column has-text-centered">
      <CategoryMap bind:this={categoryMap}/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Add a New Place</h1>
      <PoiForm on:message={categoryAdded}/>
    </div>
  
     
  </section>