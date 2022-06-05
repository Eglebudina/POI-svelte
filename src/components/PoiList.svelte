<script>
  import {getContext, onMount} from 'svelte';
  import placeholder from "../assets/placeholder.png";
 

  const poiService = getContext("PoiService");
  let placeList = [];
  let url = ``;
  let errorMessage ="";
  
  // onMount(async (request) => {
  //     url = window.location.href
  //     console.log(url)
  //     let parsedURL = url.substring(35)
  //     placeList = await poiService.getPlacesByCategoryId();
  //     console.log(placeList)
  // });
  
  onMount(async () => {
    placeList = await poiService.getPlaces();
  });


  async function deleteHandler(id) {
        const success = await poiService.deletePlace(id)
        if (success) {
            placeList = await poiService.getPlaces();   
        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
        }
  }

</script>


<div class="container">
  <div class="columns is-multiline">
      {#each placeList as place}
          <div class="column is-one-quarter">
              <div class="card">
                  <header class="card-header">
                      <p class="card-header-title">
                          {place.name}
                      </p>
                  </header>
                  <div class="card-image">
                      <figure class="image is-4by3">
                        <img alt="placeholder" src={placeholder}>
                        
                          <!-- {#if place.img[0]}
                              <img alt="Cover image" src={place.img[0].url}>
                          {:else}
                              <img alt="Default image" src={placeholder}>
                          {/if} -->
                      </figure>
                  </div>
                  <div class="card-content">
                      <div class="content">
                          {place.description}
                      </div>
                      <div class="content">
                          {place.lat} , {place.lng}
                      </div>
                  </div>
                  <footer class="card-footer">
                      <a href="/#/place/{place._id}" class="card-footer-item">
                          <i class="fas fa-image"></i>
                      </a>
                      <a href="/#/place/{place._id}" class="card-footer-item">
                          <i class="fas fa-folder"></i>
                      </a>
                  </footer>
              </div>
          </div>
      {/each}
  </div>
</div>

