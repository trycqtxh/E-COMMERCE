<template>
	<transition>
		<div v-if="showing" class="white-overlay">
			
		</div>
	</transition>
</template>

<script>
export default{
	name: 'Loading',
	props: {
		label: {
			default: 'Loading...'
		},
		show: {
			default: false
		},
		overlay: {
			default: true
		}
	},
	data(){
		return {
			showing: false
		}
	},
	watch: {
		show(val){
			this.showing = val
		}
	},
	methods: {
		showMe(){
			this.showing = true
		},
		hideMe(){
			this.showing = false
		}
	}
}
</script>

<style scoped>
	.white-overlay {
		background-color: rgba(255, 255, 255, 0.75);
        z-index: 1000;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        margin: 0;
	}
</style>