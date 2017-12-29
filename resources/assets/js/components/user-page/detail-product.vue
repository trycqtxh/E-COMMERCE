<template>
	<section id="main-page" class="container">
        <breadcrumb-vue/>
        <aside class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row content-item">
                <div class="col-md-4">
                	<div id="gallery-product" class="gallery-product carousel slide" data-ride="carousel">
                		<div class="carousel-inner gallery-viewport" role="listbox">
                			<div class="item detail-gallery active">
                				<a href="">
                					<img src="img/1.jpg" alt="">
                				</a>
                			</div>
                			<div class="item detail-gallery">
                				<a href="">
                					<img src="img/2.jpg" alt="">
                				</a>
                			</div>
                		</div>
                		<div class="gallery-pager">
                			<div class="gallery-pager-direction">
                				<a class="pager-prev" href="#gallery-product" role="button" data-slide="prev">
                					<i class="fa fa-chevron-left"></i>
                				</a>
                				<a class="pager-next" href="#gallery-product" role="button" data-slide="next">
                					<i class="fa fa-chevron-right"></i>
                				</a>
                			</div>

                			<div class="gallery-pager-item-list">
                				<div class="pager-item">
                					<a class="pager-link active" data-target="#gallery-product" data-slide-to="0">
	                					<img src="img/1.jpg" alt="">
	                				</a>
                				</div>
                				<div class="pager-item">
                					<a class="pager-link" data-target="#gallery-product" data-slide-to="1">
	                					<img src="img/1.jpg" alt="">
	                				</a>
                				</div>
                			</div>
                		</div>
                	</div>
                </div>
                <div class="col-md-8">
                	<div class="detail-product panel">
                		<div class="panel-heading">
                			<h4 class="title-heading">Product 1</h4>
                		</div>
                		<div class="panel-body">
                			<dl>
                				<dt>Kode Produk</dt>
                				<dd>Produk 1Produk 1Produk 1Produk 1Produk 1Produk 1Produk 1</dd>

                				<dt>Berat</dt>
                				<dd>Produk 1</dd>
                				
                				<dt>Warna</dt>
                				<dd>Produk 1</dd>

                				<dt>Garansi</dt>
                				<dd>Produk 1</dd>
                			</dl>
                		</div>
                		<div class="panel-footer">
                			<p>Keterangan claim garansi: Harus diserahkan beserta kotak produk dan semua kelengkapan isi di dalamnya. Setiap pembelian Xiaomi Yi akan dibuka Segel untuk penempelan Garansi Jakartanotebook</p>
                		</div>
                	</div>
                </div>
            </div>
            <loading :show="showLoading"/>
        </aside>  
    </section>
</template>

<script>
	export default{
		name: 'Detail-Product',
        components: {
            'breadcrumb-vue': function (resolve) {
                require(['./breadcrumb-vue'], resolve)
            },
            'loading': function(resolve){
                require(['./loading'], resolve)
            },
        },
        data(){
        	return {
        		showLoading: false
        	}
        }
	}
</script>

<style lang="scss">
	$border-color: lighten(#000000, 80%);
	.content-item{
		.gallery-product{
			min-height: 200px;
			border: 1px solid $border-color;
			position: relative;
			text-align: center;
			margin-bottom: 20px;
			.gallery{
				&-viewport{
					width: 100%;
					height: 250px;
					position: relative;
					padding: 20px;
					border-bottom: 1px solid $border-color;
					.detail-gallery{
						text-align: center;
						img{
							display: contents;
						}
					}
				}
				&-pager{
					width: 100%;
					&-direction{
						a{
							position: absolute;
							font-size: 20px;
						}
						.pager-prev{
							top: 100px;
							left: 0px;
						}
						.pager-next{
							top: 100px;
							right: 0px;
						}
					}
					&-item-list{
						padding: 20px 0px;
						display: inline-block;
						.pager-item{
							display: inline-block;
							border: 1px solid $border-color;
						}
						.pager-link{
							img{
								width: 50px;
							}
						}
					}
				}
			}
		}
		.detail-product{
			min-height: 200px;
			border: 1px solid $border-color;
			.panel-heading{
				border-bottom: 1px solid $border-color;
			}
			.panel-body{
				dl{
					font-size: 14px;
					line-height: 2;
					width: 100%;
					dt{
						display: inline-block;
						padding-left: 4px;
						&:after{
							content: ': ';
						}
					}
					dd{
						display: inline-block;
						padding-left: 4px;
					}
					@media (max-width: 768px) {
						dt{
							width: 45%;
						}
						dd{
							width: 50%;
						}
					}
					@media (min-width: 768px) {
						dt{
							width: calc(20% - 4px - 4px);
						}
						dd{
							width: calc(80% - 4px - 4px);
						}
					}
				}
			}
		}
	}
</style>