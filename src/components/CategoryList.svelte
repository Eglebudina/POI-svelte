<script>
    import {getContext, onMount} from 'svelte';
    import placeholder from "../assets/placeholder.png"
    
    const poiService = getContext("PoiService");
    
    let categoryList =[];

    onMount(async () => {
      categoryList = await poiService.getCategorys();
    });
 
  </script>
  
  <div class="container">
    <div class="columns is-multiline">
        {#each categoryList as category}
            <div class="column is-one-quarter">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {category.name}
                        </p>
                    </header>
                    <div class="card-image">
                        
                        <figure class="image is-4by3">
                          <img alt="placeholder" src={placeholder}>
                          
                            <!-- {#if category.img[0]}
                                <img alt="Cover image" src={category.img[0].url}>
                            {:else}
                                <img alt="Default image" src={placeholder}>
                            {/if} -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="/#/category/{category._id}" class="card-footer-item">
                            <i class="fas fa-image"></i>
                        </a>
                        <a href="/#/category/{category._id}" class="card-footer-item">
                            <i class="fas fa-folder"></i>
                        </a>
                    </footer>
                </div>
            </div>
        {/each}
    </div>
  </div>   