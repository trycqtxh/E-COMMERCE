<template>
    <div class="col-sm-6 col-md-4 col-xs-12">
        <div class="item-">
            <div class="item--product">
                <router-link :to="{name: 'detail-product', params: {id: '1'}}">
                    <div class="item--product-image">
                        <img :src="model.gambar" class="img img-circle img-responsive">    
                    </div>
                    <div class="item--product-brand">
                        <img :src="model.brand">
                    </div>
                    <h2 class="item--product-title">{{ model.harga }}</h2>
                    <h4 class="item--product-subtitle">{{ model.produk }}</h4>
                </router-link>
                <div class="item--product-btn hidden-lg hidden-md">
                    <div class="item--product-btn-pesan">
                        <a href="sms:+19725551212?body=hello%20there" class="btn btn-default btn-block">
                            <i class="fa fa-comments"></i>
                        </a>    
                    </div>
                    <div class="item--product-btn-whatsapp">
                        <a href="intent://send/+085223604451#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end" class="btn btn-default btn-block"><i class="fa fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		name: 'Produk-List',
		props: ['model']
	}
</script>