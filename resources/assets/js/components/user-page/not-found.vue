<template>
	<section id="main-page" class="container">
        <breadcrumb-vue/>
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-not-found">
            <h1>404</h1>
            <h3>Page Not Found</h3>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Page-Not-found',
	}
</script>

<style lang="scss" scoped>
    .page-not-found{
        text-align: center;
        h1{
            font-size: 150px;
            font-weight: 900;
        }
        h3{
            font-size: 80px;
        }
    }
</style>