<script>
    import {getContext, onMount} from "svelte";
    import {push} from "svelte-spa-router";
  
    let name = "";
    let message = "Enter Name of Category";
    let errorMessage = "";
    
    const poiService = getContext("PoiService");
    
    async function addCategory() {
      let success = await poiService.addCategory(name)
          if (success) {
             await push("/pois");            
          } else {
              errorMessage = "error adding Category";
          }
      }
  </script>

  <form on:submit|preventDefault={addCategory}>
    <div class="field">
      <label class="label" for="name">Enter Category Name</label> 
      <input bind:value={name} class="input" id="name" name="name" placeholder="Category Name" type="text">
    </div>
      <div class="field is-grouped">
        <button class="button is-link is-light">Add Category</button>
    <div class="section"></div>
      {message}
    </div>
  </form>