<template>
	<section id="main-page" class="container">
        <breadcrumb-vue/>
        <left-side-vue/>
        <aside class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
            <div class="row content-item">
                <produk-list v-for="item in produk" :key="item.id" :model="item.attributes"></produk-list>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Index-User-Page',
        components: {
            'breadcrumb-vue': function (resolve) {
                require(['./breadcrumb-vue'], resolve)
            },
            'left-side-vue': function (resolve) {
                require(['./left-side-vue'], resolve)
            },
            'loading': function(resolve){
                require(['./loading'], resolve)
            },
            'produk-list': function(resolve){
                showLoading: true
                setTimeout(function() {
                    showLoading: false
                    require(['./produk-list'], resolve)
                }, 500);
            }
        },
        data(){
            return {
                showLoading: false,
                produk: []
            }
        },
        methods: {
            getData(){
                let self = this
                self.$http.get('produk')
                    .then(res => {
                        Vue.set(self.$data, 'produk', res.data.data)
                    })
                
            }
        },
        created(){
            this.getData()
        }
	}
</script>

<style scoped>
    aside{
        position: relative;
    }
</style>