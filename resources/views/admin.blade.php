<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>{{ config('app.name') }}</title>
    	<meta name="csrf-token" content="{{ csrf_token() }}">
    	<meta name="base-url" content="{{ config('app.url') }}">
    	<meta name="app_name" content="{{ config('app.name') }}">
		<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="" />
		<meta name="author" content="{{ config('app.author') }}" />
		{{-- <link rel="stylesheet" type="text/css" href="assets/lib/bootstrap/css/bootstrap.css" /> --}}
		{{-- <link href="//unpkg.com/bootstrap@3.3.5/dist/css/bootstrap.min.css" rel="stylesheet"> --}}
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="{{ url('assets/css/theme.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ url('assets/css/badger.min.css') }}" />

		{{-- <link rel="stylesheet" href="assets/lib/font-awesome/css/font-awesome.css" /> --}}
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		{{-- <link rel="stylesheet" href="assets/lib/datepicker/css/datepicker.css" /> --}}

		{{-- <script src="assets/lib/jquery-latest.min.js" type="text/javascript"></script>	   --}}

		<!-- Demo page code -->
		<style type="text/css">
		 .brand { font-family: georgia, serif; }
		 .brand .first {
		 color: #ccc;
			font-style: italic;
		 }
		 .brand .second {
			color: #fff;
			font-weight: bold;
		 }
		</style>

		<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<!-- Le fav and touch icons -->

		<link rel="shortcut icon" href="assets/ico/favicon.ico" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


	</head>
	<body class="">
		<div id="root">
			<div class="navbar">
				<div class="navbar-inner">
					<a class="brand" href="#"><span class="first">Ecommerce</span> <span class="second">Anto</span></a>
				</div>
			</div>
			<div class="sidebar-nav" style="padding-top: 5px">

				<a href="" class="nav-header"><i class="icon-th-list"></i>Beranda</a>
				<a class="nav-header" ><i class="icon-book"></i>Data </a>
				<ul id="content-menu" class="nav nav-list collapse in">                        
					<li><a href="web/dosen"><i class="icon-user"></i>Dosen</a></li>   
					<li><a href="web/matakuliah"><i class="icon-book"></i>Matakuliah</a></li>
					<li><a href="web/pengampu"><i class="icon-th-list"></i>Pengampu</a></li>
					<li><a href="web/ruang"><i class="icon-home"></i>Ruang</a></li>
					<li><a href="web/jam"><i class="icon-time"></i>Jam</a></li>
					<li><a href="web/hari"><i class="icon-calendar"></i>Hari</a></li>
					<li><a href="web/waktu_tidak_bersedia"><i class="icon-ban-circle"></i>Waktu Tidak Bersedia</a></li>
				</ul>

				<a class="nav-header" ><i class="icon-book"></i>Proses </a>
				<ul id="content-menu" class="nav nav-list collapse in">                        
					<li><a href="web/penjadwalan"><i class="icon-th-list"></i>Penjadwalan</a></li>
				</ul>	
			</div>

			<div class="content">
				<div class="header">
					<h1 class="page-title">Page Titi</h1>
				</div>
				<ul class="breadcrumb">
					<li><a href="">Beranda</a> <span class="divider">/</span></li>
					<li class="active">Page Titi</li>
				</ul>

				<div class="container-fluid">

					<div class="row-fluid">
						<a href=""> <button class="btn btn-primary pull-right"><i class="icon-plus"></i> Konten Baru</button></a>     
					
						<form class="form-inline" method="POST" action="">
							<input type="text" placeholder="Nama" name="search_query" value="">
							<button type="submit" class="btn">Cari</button>
							<a href=""><button type="button" class="btn">Clear</button> </a>
						</form>


						<div class="widget-content">            
							<table class="table table-striped table-bordered">
							<thead>
								<tr>                       
									<th>#</th>
									<th>Range Jam</th>                       
									<th style="width: 65px;"></th>
								</tr>
							</thead>
							<tbody>
								<tr>                                        
									<td></td>                    
									<td></td>
									<td>
										<a href="" class="btn btn-small"><i class="icon-pencil"></i></a>
										<a href="" class="btn btn-small" onClick="return confirm('Anda yakin ingin menghapus data ini?')" ><i class="icon-trash"></i></a>
									</td>
								</tr>
							</tbody>
							</table>
						</div>
						<footer>
							<hr />
							<p class="pull-right">Design by <a href="http://www.portnine.com" target="_blank">Portnine</a></p>
							<p>&copy; 2012 <a href="http://www.portnine.com" target="_blank">Portnine</a></p>
						</footer>
					</div>
				</div>
			</div>
		</div>
		<script src="//unpkg.com/jquery@2.1.4/dist/jquery.min.js"></script>
		<script src="//unpkg.com/bootstrap@3.3.5/dist/js/bootstrap.min.js"></script>
		{{-- <script type="text/javascript" src="assets/lib/jquery.slugit.js"></script>   --}}
		{{-- <script type="text/javascript" src="assets/lib/datepicker/js/bootstrap-datepicker.js"></script> --}}
		{{-- <script type="text/javascript" src="assets/lib/bootstrap/js/bootstrap.js"></script> --}}
		{{-- <script type="text/javascript" src="assets/lib/bootstrap/js/bootstrap-filestyle.min.js"> </script> --}}
		<script type="text/javascript" src="{{ url('js/admin.js') }}"></script>
	</body>
</html>