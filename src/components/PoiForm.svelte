<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  
  import Coordinates from "./Coordinates.svelte";
 
  const dispatch = createEventDispatcher();
  const poiService = getContext("PoiService");

  let name = "";
  let description = "";
  let lat = 0;
  let lng = 0;
 
  let categoryList = [];
  let message = "Please add a place";
  let url = ``;
  
  url = window.location.href
    console.log(url)
    let parsedURL = url.substring(35)

  onMount(async () => {
    categoryList = await poiService.getCategorys()
  });

  
  async function addPlace() {
    if (name && description && lat && lng) {
      const category = categoryList.find(category => category.name);
      const place = {
        name: name,
        description: description,
        lat: lat,
        lng: lng,
        category: category._id,
      };
    const success = await poiService.addPlace(place, parsedURL)
        if (success) {
          message = `You added ${name} to the ${category.name} Category`
          dispatch("message");
          return;
      
          } else {
            message = "error adding place";
        }
      }
  }

</script>

<form on:submit|preventDefault={addPlace}>
  <div class="field">
    <label class="label" for="name">Name</label> <input bind:value={name} class="input" id="name" name="name" placeholder="name">
  </div>
  <div class="field">
    <label class="label" for="description">Description</label> <input bind:value={description} class="input" id="description" name="description" placeholder="description">
  </div>
 
  <Coordinates bind:lat={lat} bind:lng={lng}/>

  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Add</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

