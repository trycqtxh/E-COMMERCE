<template>
	<div>
		<header-vue/>

		<router-view></router-view>
		
		<footer-vue/>
	</div>
</template>

<script>
	export default{
		name: "App-Vue",
		components: {
			'header-vue': function (resolve) {
				require(['./user-page/header-vue'], resolve)
			},
			'footer-vue': function (resolve) {
				require(['./user-page/footer-vue'], resolve)
			}
		}
	}
</script>