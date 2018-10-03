<!DOCTYPE html>
<html lang="PT-BR">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $titulo ?></title>
	<meta name="description" content="<?php echo $descricao ?>">
    <meta name="keywords"  content="seguradora,corretora de seguros,seguro de casa,voog,seguro pessoa física,seguro de carro" />
	<meta name="author" content="Wtek Digital">
    <!--[if IE]><link rel="shortcut icon" href="assets/img/favicon/favicon.ico"><![endif]-->
    <link rel="icon" href="assets/img/favicon/favicon.ico">
	<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
	<link rel="manifest" href="assets/img/favicon/site.webmanifest">
	<link rel="mask-icon" href="assets/img/favicon/safari-pinned-tab.svg" color="#08175a">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#f5c700">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="628">
	<meta property="og:title" content="<?php echo $titulo ?>">
	<meta property="og:description" content="<?php echo $descricao ?>">
	<meta property="og:url" content="http://voogseguros.com.br/">
	<meta property="og:image" content="http://voogseguros.com.br/assets/img/og-image.jpg">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/jquery.fullpage.min.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css" />
    <link rel="stylesheet" href="assets/css/swiper.min.css" />
	<link href="assets/css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800" rel="stylesheet">
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.fullpage.min.js"></script>
<script>
    /* Animações e Fullpage */
    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };
                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });
            return this;
        },
    });
    if (window.matchMedia("(max-width: 991px)").matches) {
        console.log('menor');
    } else {
        $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: false,
                anchors: ['inicio', 'sobre', 'pessoa-fisica', 'beneficios-corporativos' , 'riscos-empresariais' , 'contato'],
                paddingTop: '100px',
                paddingBottom: '50px',
                responsiveHeight: 600,
                css3: true,
                scrollingSpeed: 600,

                onLeave: function(index, nextIndex, direction) {
                    console.log('next: ' + nextIndex);
                    console.log(index);
                    //$('.navbar').css({"background-color": "transparent"});
                    if(nextIndex == 1 ||  index == 1){
                        //  $('.navbar').css({"background-color": "transparent"});
                        //$('.inicio h3').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '1s'});
                    }
                    if(nextIndex == 2 ||  index == 2){
                        $('.video-bg').get(0).play();
                        //$('.inicio h3').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '1s'});
                    }
                    if( nextIndex == 3 ||  index == 3){
                        // $('.navbar').css({"background-color": "transparent"});
                        $('.pessoa-fisica h3').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.pessoa-fisica h2').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.pessoa-fisica svg').animateCss('pulse').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.pessoa-fisica .descricao').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.9s'});
                        $('.pessoa-fisica .botao-branco-container').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.pessoa-fisica li').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '1.3s'});
                        $('.pessoa-fisica .botao-amarelo-container').animateCss('bounceIn').css({'animation-delay': '1s', 'animation-duration' : '1s'});
                        $('.pessoa-fisica .frase-efeito').animateCss('fadeInUpBig').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                    }
                    if(nextIndex == 4 ||  index == 4){
                        // $('.navbar').css({"background-color": "transparent"});
                        $('.beneficios-corporativos h3').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.beneficios-corporativos h2').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.beneficios-corporativos svg').animateCss('pulse').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.beneficios-corporativos .descricao').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.9s'});
                        $('.beneficios-corporativos .botao-branco-container').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.beneficios-corporativos li').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '1.3s'});
                        $('.beneficios-corporativos .botao-amarelo-container').animateCss('bounceIn').css({'animation-delay': '1s', 'animation-duration' : '1s'});
                        $('.beneficios-corporativos .frase-efeito').animateCss('fadeInUpBig').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});

                    }
                    if(nextIndex == 5 ||  index == 5){
                        //$('.navbar').css({"background-color": "transparent"});
                        $('.gestao-risco h3').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.gestao-risco h2').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.gestao-risco svg').animateCss('pulse').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.gestao-risco .descricao').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.9s'});
                        $('.gestao-risco .botao-branco-container').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('.gestao-risco li').animateCss('bounceIn').css({'animation-delay': '.2s', 'animation-duration' : '1.3s'});
                        $('.gestao-risco .botao-amarelo-container').animateCss('bounceIn').css({'animation-delay': '1s', 'animation-duration' : '1s'});
                        $('.gestao-risco .frase-efeito').animateCss('fadeInUpBig').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                    }
                    if(nextIndex == 6 && index == 5){

                        $('#contato h2').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('#contato .form-control').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('#contato .container-submit').animateCss('fadeInLeft').css({'animation-delay': '.2s', 'animation-duration' : '0.7s'});
                        $('#map').animateCss('fadeInRight').css({'animation-delay': '.2s', 'animation-duration' : '0.9s'});
                        $('#contato address').animateCss('fadeInRight').css({'animation-delay': '.2s', 'animation-duration' : '0.9s'});
                    }
                    if(nextIndex == 5 && index == 6){
                        $(".assunto-form").val('Assunto');
                    }
                    if(nextIndex == 7 ||  index == 7){
                        $('.navbar').css({"background-color": "#494948"});

                    } if(nextIndex == 1 || nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5){
                        // $('.navbar').css({"background-color": "transparent"});
                    }
                }
            });
            $('.navbar-toggler').on('click' , function () {
                console.log('cloc');
            })
        });
    }
</script>
</head>
<body>
<div class="loader-bodya" id="loader">
           <div class="painel-left"></div>
    <div class="painel-right"></div>
</div>

<?php $home = "http://voogseguros.com.br/"?>