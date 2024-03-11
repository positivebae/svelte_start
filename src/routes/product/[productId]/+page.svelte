<script>
        import { page } from "$app/stores";
        let productId = $page.params.productId;
</script>


<h1>TEST {productId}</h1>

<a href="/">Home</a>

<ul>
        <a href="/product/1"><li>제품 1</li></a>
        <a href="/product/2"><li>제품 2</li></a>
        <a href="/product/3"><li>제품 3</li></a>
</ul>