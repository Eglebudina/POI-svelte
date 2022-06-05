<script>
    import {createEventDispatcher, getContext} from "svelte";
    const poiService = getContext("PoiService");
    const dispatch = createEventDispatcher();
    export let placeId;
    let files, input;
    async function uploadImage(){
        let fd = new FormData;
        for (let i = 0; i < files.length; i++) {
            let blob = files[i];
            fd.append(`image_buffer_${i}`, blob);
        }
        await poiService.addImage(placeId, fd);
        dispatch("update");
        input.value = ''
    }
</script>
<div class="columns is-centered">
    <form class="box" on:submit|preventDefault={uploadImage}>
        <label class="label" for="img">Upload images</label>
        <div class="field is-horizontal">
            <div class="control">
                <input type="file" multiple bind:files={files} bind:this={input} accept="image/png, image/jpeg">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary">Submit</button>
            </div>
        </div>
    </form>
</div>