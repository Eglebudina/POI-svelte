<script>
    import {getContext, onMount} from 'svelte'
    import AddImage from "../components/AddImage.svelte";
    import {place} from "../stores";
    const poiService = getContext("PoiService");


</script>

<AddImage/>

