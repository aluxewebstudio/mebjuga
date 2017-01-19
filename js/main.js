$(document).ready(function() {
	// data-wow-duration - время проигрывания анимации
	// data-wow-delay - задержка перед проигрыванием анимации
	// data-wow-offset - включение анимации, когда элемент проходит определнное количество пикселей от низа экрана
	// data-wow-iteration - количество повторов анимации // infinite - бесконечно
	new WOW().init({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0, // включение анимации, когда элемент проходит определнное количество пикселей от низа экрана
		mobile: true,
		live: true // проверка появления новых елементов
	});



	/*
	//Выбор даты. Используется для input type text
    $('#datepicker').datepicker({
    	dateFormat: 'dd.mm.yy',
    	changeMonth: true,
    	changeYear: true,
    	defaultDate: '17.11.2016',
    	showAnim: "slideDown", //fadeIn
    	yearRange: "2016:2025",
    	onClose: function () {
    	},
    	onSelect: function() {
    	}	
    });
   	$('#datepicker').datepicker( "getDate" ); // получить выбраную дату
	*/



	/*
	//Обратный отсчет
	var clock = $('.clock').FlipClock(3600, {
		language: 'ru',
		countdown: true,
		clockFace: 'DailyCounter', //other value: MinuteCounter, HourlyCounter, DailyCounter, Counter, TwelveHourClock, TwentyFourHourClock
		showSeconds: true,
		autoStart: true,
        minimumDigits: 6,
		callbacks: {
        	stop: function() {
        	},
        	start: function() {
        	},
        	interval: function() { // Периодическая функция
        	}
        },

	});
	*/



	/*
	// Обычное модальное окно. <a href="#id_modal" class="popup-open"></a>
	$('.popup-open').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
		callbacks: {
			beforeOpen: function() {
			},
			open: function() {
			},
			afterOpen: function() {
			},
			beforeClose: function() {
			},
			close: function() {
			},
			afterClose: function() {
			},
			change: function() {
			},
			resize: function() {
			},	
			imageLoadComplete: function() {
			}
		}
	});
	*/
	/*
	//Модальное окно галерии фото. popup-gallery класс контейнера картинок. В а должен быть тайт
	$('.popup-gallery').magnificPopup({
		delegate: 'a', //Идентификатор клика
		type: 'image',
		tLoading: 'Loading image #%curr%...', 
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	*/
	/*
	//Модальное окно карты или видео ютуб
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	//Open modal
	$.magnificPopup.open({
		items: {
			src: '#id_modal'
		},
		type: 'image'
	}, 0);
	//Close modal
	$.magnificPopup.close(); 
	*/



	/*
	//Маска
	$(".phone_mask").mask("(999) 999-9999", {placeholder:"sdfsdf"});
	*/



	/*
	//Один слайд 
	$("#owl-demo").owlCarousel({
		navigation : false, // Show next and prev buttons
		pagination : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true, 
		responsive : true
	});
	//Несколько елементов на слайде
	var owl = $("#owl-demo");
	owl.owlCarousel({
		navigation : false, // Show next and prev buttons
		pagination : false,
		items : 10, //10 items above 1000px browser width
		itemsDesktop : [1200,5], //5 items between 1000px and 901px
		itemsDesktopSmall : [992,3], // betweem 900px and 601px
		itemsTablet: [768,2], //2 items between 600 and 0
		itemsMobile : [480, 1] // itemsMobile disabled - inherit from itemsTablet option
	});
	$(".next").click(function(){
		owl.trigger('owl.next');
	});
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	});
	*/


	/*
	$('a.scrollto').click(function(){
		var el = $(this).attr('href');
		$('body, html').animate({
		scrollTop: $(el).offset().top + 0}, 2000); // скорость анимации
		return false;
	});
	*/
});



function myEqual(element) {
	$(element).css({'height':'auto'});
	var blocks = $(element);
	if (blocks.length > 0) {
		var max_height = 0;
		blocks.each(function () {
			var height = $(this).innerHeight();
			if (max_height < height) max_height = height;
		});
		max_height = max_height+'px';
		$(element).css({'height':max_height});
	}
}

function verticalAlignImg(element) {
	$(element).css({'height':"auto", 'line-height':"auto"});
	var wrap_blocks = $(element);
	var blocks = $(element + ' img');
	if (blocks.length > 0) {
		var max_height = 0;
		var max_img_height = 0;

		wrap_blocks.each(function () {
			var height = $(this).outerHeight();
			console.log(height);
			if (max_height < height) max_height = height;
		});
		max_height = max_height+'px';

		blocks.each(function () {
			var height = $(this).innerHeight();
			if (max_img_height < height) max_img_height = height;
		});
		max_img_height = max_img_height+'px';

		$(element).css({'height':max_height, 'line-height':max_img_height});
	}
}
