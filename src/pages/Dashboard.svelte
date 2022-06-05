<script>
   
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CategoryMap from "../components/CategoryMap.svelte";
    import CategoryList from "../components/CategoryList.svelte";
    import CategoryForm from "../components/CategoryForm.svelte";

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Please add a hiking place"} title={"POI Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <div>
    <h1 class="title is-4">Select Category</h1>
        <CategoryList/>
  </div>
    <br>

  <div class="columns">
      <div class="column has-text-centered">
        <CategoryMap/>
      </div>
      <div class="column box has-text-centered">
        <h1 class="title is-4">Add New Category</h1>
        <CategoryForm/>
      </div>
  </div>
  