<template>
	        <header class="navbar navbar-fixed-top">
                <div class="header-nav">
                    <div class="container">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="#">Ecommerce</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                          <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div><!--/.nav-collapse -->
                    </div>
                </div>
                <div class="header-search">
                    <div class="container">
                        <div class="col-md-12 col-lg-12 col-xs-12 search-panel">
                            <form action="" class="form-search">
                                <div class="form-search-group">
                                    <i class="fa fa-search"></i>
                                    <div class="form-search-input">
                                        <input type="text" class="input-search" placeholder="cari ">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
</template>

<script>
	export default{
		name: 'Header-Vue'
	}
</script>