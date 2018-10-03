// Botão Saiba mais
$(".btn-branco").click(function () {
    $(this).text(function(i, text){
        return text === "Saiba mais" ? "Ocultar" : "Saiba mais";
    })
});//

// Cote aqui
$(".cote-aqui").click(function () {
    $(this).attr('title' , function () {
        let btnModal = $("#botaoModal");
        switch(this.title){
            case 'Bike':
            btnModal.attr("href", "http://www.argo-protector.com.br/v2/Products/Bikes/corretor/voogcorretoradeseg/bikes1");
            break;
            case 'Seguro de Equipamentos Portáteis':
            btnModal.attr("href", "https://wwws.portoseguro.com.br/vendaonline/equipamentosportateis/home.ns?cod=7e7c6b366afb42498acf1ea03045e0f6&utm_source=F0454J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_OR07YJ&utm_content=VOOG_CORRETORA_DE_SEGUROS_LTDA");
            break;
            case 'RC Médicos':
            btnModal.attr("href", "http://www.argo-protector.com.br/v2/Products/Medicos/corretor/voogcorretoradeseg/medicos1");
            break;
            case 'RC Advogados':
            btnModal.attr("href", "http://www.argo-protector.com.br/v2/Products/Advogados/corretor/voogcorretoradeseg/advogados1");
            break;
            case 'Viagem':
                btnModal.attr("href", "https://wwws.portoseguro.com.br/vendaonline/viagem/home.ns?cod=f26ef4032d04413a90980d127bd7da1a&utm_source=F0454J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_OR07YJ&utm_content=VOOG_CORRETORA_DE_SEGUROS_LTDA");
                break;
            case 'Vida Individual':
                btnModal.attr("href", "https://wwws.portoseguro.com.br/vendaonline/vidamaissimples/home.ns?cod=15b9d00d7e31465f940ed50d0e069d1c&utm_source=F0454J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_OR07YJ&utm_content=VOOG_CORRETORA_DE_SEGUROS_LTDA");
                break;
            case 'RC Arquitetos e Engenheiros':
                btnModal.attr("href", "http://www.argo-protector.com.br/v2/Products/EngenheirosEArquitetos/corretor/voogcorretoradeseg/engenheirosearq1");
                break;
            case 'RC Dentistas':
                btnModal.attr("href", "http://www.argo-protector.com.br/v2/Products/Dentistas/corretor/voogcorretoradeseg/dentistas1");
                break;
            case 'Health for Pets':
                btnModal.attr("href", "https://wwws.portoseguro.com.br/vendaonline/healthforpet/home.ns?cod=483e79a6ab1e4beab35d8a34d9c60285&utm_source=F0454J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_OR07YJ&utm_content=VOOG_CORRETORA_DE_SEGUROS_LTDA");
                break;
        }
    });
});


// Botão Solicite sua cotação
$(".btn-amarelo").click(function () {
    $(".assunto-form").val('Solicite sua cotação');
});
$(".nav-link").click(function () {
    $(".assunto-form").val('Assunto');
});


// SLIDE PARCEIROS
var slideParceiros = new Swiper('#slideParceiros', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.paginacao-parceiros',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

/** SUBMENU **/

if (window.matchMedia("(min-width: 991px)").matches) {
    $('nav li.dropdown').hover(function() {
        $('.navbar').addClass("active");
        $(this).find('.dropdown-menu').stop(true, true).delay(300).fadeIn(500);

    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(100);+
            $('.navbar').removeClass("active");
    });
} else{
    /*! smooth-scroll v14.2.1 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
    !(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){return"querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype},o=function(){for(var e={},t=0;t<arguments.length;t++)!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(arguments[t]);return e},r=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},c=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===i?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}var c;try{c=decodeURIComponent("#"+a)}catch(e){c="#"+a}return c},u=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(t,n,o,r){var a=0;if(t.offsetParent)do{a+=t.offsetTop,t=t.offsetParent}while(t);return a=Math.max(a-n-o,0),r&&(a=Math.min(a,s()-e.innerHeight)),a},d=function(e){return e?a(e)+e.offsetTop:0},f=function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)},m=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},h=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(a,p){var g,v,y,S,E,b,O,I={};I.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||h("scrollCancel",g)},I.animateScroll=function(n,r,a){var i=o(g||t,a||{}),c="[object Number]"===Object.prototype.toString.call(n),p=c||!n.tagName?null:n;if(c||p){var v=e.pageYOffset;i.header&&!S&&(S=document.querySelector(i.header)),E||(E=d(S));var y,b,C,w=c?n:l(p,E,parseInt("function"==typeof i.offset?i.offset(n,r):i.offset,10),i.clip),L=w-v,A=s(),H=0,q=function(t,o){var a=e.pageYOffset;if(t==o||a==o||(v<o&&e.innerHeight+a)>=A)return I.cancelScroll(!0),m(n,o,c),h("scrollStop",i,n,r),y=null,O=null,!0},Q=function(t){y||(y=t),H+=t-y,b=H/parseInt(i.speed,10),b=b>1?1:b,C=v+L*u(i,b),e.scrollTo(0,Math.floor(C)),q(C,w)||(O=e.requestAnimationFrame(Q),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),f(n,c,i),h("scrollStart",i,n,r),I.cancelScroll(!0),e.requestAnimationFrame(Q)}};var C=function(t){if(!r()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(y=t.target.closest(a))&&"a"===y.tagName.toLowerCase()&&!t.target.closest(g.ignore)&&y.hostname===e.location.hostname&&y.pathname===e.location.pathname&&/#/.test(y.href)){var n=c(i(y.hash)),o=g.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);o=o||"#top"!==n?o:document.documentElement,o&&(t.preventDefault(),I.animateScroll(o,y))}},w=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(g)&&history.state.anchor){var t=document.querySelector(c(i(history.state.anchor)));t&&I.animateScroll(t,null,{updateURL:!1})}},L=function(e){b||(b=setTimeout((function(){b=null,E=d(S)}),66))};return I.destroy=function(){g&&(document.removeEventListener("click",C,!1),e.removeEventListener("resize",L,!1),e.removeEventListener("popstate",w,!1),I.cancelScroll(),g=null,v=null,y=null,S=null,E=null,b=null,O=null)},I.init=function(r){if(!n())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";I.destroy(),g=o(t,r||{}),S=g.header?document.querySelector(g.header):null,E=d(S),document.addEventListener("click",C,!1),S&&e.addEventListener("resize",L,!1),g.updateURL&&g.popstate&&e.addEventListener("popstate",w,!1)},I.init(p),I}}));
    var scroll = new SmoothScroll('a[href*="#"].nav-link , .s-cotacao' ,  {   ignore: '[data-toggle]'  });
    $('.menu-inicio').attr("href", "#home");
    $('.menu-sobre').attr("href", "#Voog");
    $('.menu-pf').attr("href", "#pFisica");
    $('.menu-bc').attr("href", "#bCorporativo");
    $('.menu-re').attr("href", "#gRisco");
    $('.menu-contato').attr("href", "#contat");
    $('.s-cotacao').attr("href", "#contat");
}

// Mapa

let map;
function initMap() {
    var myLatLng = {lat: -26.901758, lng: -49.043547};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng ,
        disableDefaultUI: true,
        zoom: 18
    });
    var image = new google.maps.MarkerImage('assets/img/pin.png',
        new google.maps.Size(73, 100),
        new google.maps.Point(0, 0),
        new google.maps.Point(37, 50));

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: 'VOOG'
    });
}


// Formulário

$('#assunto').change(function(){
    if($('#assunto').val() == 'Trabalhe conosco') {
        $('.curriculo').show();
        $('#curriculo').prop('required',true);

    } else {
        $('.curriculo').hide();
        $('#curriculo').prop('required',false);
    }
});

let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',  function (event) {
    event.preventDefault();
    let formData = new FormData();

    let metodo = document.querySelector('#metodo');
    let nome = document.querySelector('#nome');
    let email = document.querySelector('#email');
    let cidade = document.querySelector('#cidade');
    let telefone = document.querySelector('#telefone');
    let assunto =  document.querySelector('#assunto');
    let mensagem = document.querySelector('#mensagem');
    let enviar = document.querySelectorAll('.enviar');
    let resposta = document.querySelector('#resposta');
    let curriculo = $('input[type=file]')[0].files[0];

    console.log(mensagem.value);
    if (enviar.value === 'Enviando...'){
        return false;
    }
    enviar.value = 'Enviando...';

    formData.append("metodo", metodo.value);
    formData.append("nome", nome.value);
    formData.append("email", email.value);
    formData.append("cidade", cidade.value);
    formData.append("telefone", telefone.value);
    formData.append("assunto", assunto.value);
    formData.append("mensagem", mensagem.value);
    formData.append('curriculo', curriculo);
    /** Requisição Ajax **/

    let xhr = new XMLHttpRequest();
    xhr.open('POST' , 'assets/php/contato.php');
    xhr.onreadystatechange =  function() {
        if(xhr.readyState == 4 && xhr.status == 200){
        }
    };
    console.log(formData);
    xhr.send(formData);

    nome.value = "";
    telefone.value = "";
    email.value = "";
    cidade.value = "";
    mensagem.value = "";
    enviar.value = "Enviar";
    resposta.className += " animated fadeInLeft d-block";
});
