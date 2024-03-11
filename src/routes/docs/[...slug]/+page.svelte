<script>
	import { page } from '$app/stores';
	// let {productId, reviewId}  = $page.params;
	console.log($page.params.slug);

	const slugArr = $page.params.slug.split('/');
	console.log(slugArr);
</script>

<h1>Docs Page</h1>

{#if slugArr.length === 1}
	<h1>Docs Page {slugArr[0]}</h1>
{:else if slugArr.length === 2}
	<h1>Docs Page {slugArr[1]}</h1>
{:else}
	<h1>Docs Page {slugArr[2]}</h1>
{/if}
