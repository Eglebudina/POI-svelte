<script>
  import {getContext, onMount} from 'svelte'

  const poiService = getContext("PoiService");
  let placeListAll = [];
  
  onMount(async () => {
    placeListAll = await poiService.getPlaces();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Name</th>
    <th>Description</th>
    <th>Latitude</th>
    <th>Longitude</th>
   
  </thead>
  <tbody>
    {#each placeListAll as places}
      <tr>
        <td>
          {places.name}
        </td>
        <td>
          {places.description}
         </td>
        <td>
          {places.lat}
        </td>
        <td>
          {places.lng}
        </td>
        
      </tr>
    {/each}
  </tbody>
</table>