<script>
    import kerry2 from "/src/assets/kerry2-category.jpg";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const poiService = getContext("PoiService");
  
    
    let placesPerCategory = {
    labels:[],
    datasets:[
      {
        values:[]
      }
    ]
  }
  
  function populateByCategory(placeList, categorys){
    placesPerCategory.labels =[];
    categorys.forEach(category => {
      placesPerCategory.labels.push(`${category.name}`)
      placesPerCategory.datasets[0].values.push(0);
    })
    categorys.forEach((category, i) => {
      placeList.forEach(place => {
        if (place.categoryid == category._id) {
          placesPerCategory.datasets[0].values[i] ++;
        }
      });
    });
  };
  export async function refreshChart(){
    let placeList = await poiService.getPlaces();
    let categoryList = await poiService.getCategorys();
    populateByCategory(placeList, categoryList);
  }
  onMount(async () => {
      let categoryList = await poiService.getCategorys();
      let placeList = await poiService.getPlaces();
      populateByCategory(placeList, categoryList)
})
</script>  

<h1 class="title is-4">Number of places per Category</h1>
<Chart data={placesPerCategory} type="bar"/>