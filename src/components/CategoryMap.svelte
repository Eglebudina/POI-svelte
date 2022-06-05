<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    import { get } from 'svelte/store';
    import {user} from "../stores";
  
    const poiService = getContext("PoiService");
   

    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    
    let map =null;

    async function MapsByCategory(){
        const storedUser =get(user);
        const allCategorys = await poiService.getCategorys();
        const categoryList = allCategorys.filter(category => category.id === storedUser.userid);
        const allPlaces = await poiService.getPlaces();
        const map = new LeafletMap("category-map", mapConfig);
        categoryList.forEach(category => {
            const categoryPlaces = allPlaces.filter(place => place.categoryid === category._id);
            map.addLayerGroup(category.name); 
            categoryPlaces.forEach(place => {
            map.addMarker({lat: place.lat, lng: place.lng}, place.name, category.name);
            });
        });
        map.showZoomControl();
        map.showLayerControl();
    }
    onMount(async () => {
    MapsByCategory()               
    });
</script>
<div class="box" id="category-map" style="height:600px"></div>