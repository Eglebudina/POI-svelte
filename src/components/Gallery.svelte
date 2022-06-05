<Gallery gap="10" maxColumnWidth="200">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648375330/pttcen5y1lcr2zlfyyso.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648377258/wicklow-category_x31nw1.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648377369/donegal-category_tikrik.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648490779/hng454i1y3cszcltslbx.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1648492763/i6rpuyh02zwehqhz8uqd.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1654445295/forest_bqshwn.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1654445332/cliffs_tl83ye.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1654445334/hiker_mr5f39.jpg" alt="">
	<img src="https://res.cloudinary.com/dxrvgvnzb/image/upload/v1654445334/michael_xtnpnz.jpg" alt="">


	
</Gallery>

<style>
	:global(img) { opacity: .9; transition: all .2s }
	:global(img):hover { opacity: 1; transform: scale(1.04) }
</style>

<script>
	import Gallery from 'svelte-image-gallery'

	function handleClick(e) {
		console.log(e.detail.url)
	}
</script>