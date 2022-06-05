<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    
    const poiService = getContext("PoiService");
  
  
    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map = null;

    export function addPlaceMarker(place) {
      const placeStr = `€${place.name.toString()}`;
      map.addMarker({lat: place.lat, lng: place.lng}, placeStr, "Places");
      map.moveTo(8, {lat: place.lat, lng: place.lng});
    }
  
    onMount(async () => {
    map = new LeafletMap("place-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Places');
    map.showLayerControl();

    const places = await poiService.getPlaces();
    places.forEach(place => {
        addPlaceMarker(place);
    });

   
  })
  </script>
  
  <div class="box" id="place-map" style="height:800px">
  </div>