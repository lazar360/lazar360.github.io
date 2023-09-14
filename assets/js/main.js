// 1 - Jquerry
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

// 2- Javascript
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputSubject = document.querySelector('#subject');
const inputMessage = document.querySelector('#message');
const btnSendMessage = document.querySelector('#btn_send_message');

btnSendMessage.addEventListener('click', function(e){
	e.preventDefault();
	const message = `
	Message de ${inputName.value}, mail : ${inputEmail.value},
	${inputMessage.value}
	`;
	console.log(`inputName : ${inputName.value}, 
				inputEmail : ${inputEmail.value},
				inputSubject : ${inputSubject.value},
				inputMessage : ${inputMessage.value},
				message : ${message}
	`);

	window.open(`mailto:nicolas.gautier35135@gmail.com?subject=${inputSubject.value}&body=${message}`)
})


