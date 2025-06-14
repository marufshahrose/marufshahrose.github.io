/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'top',
						top: '10%',
						bottom: '10%',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});
				
				
				
				// Skill bar animation on scroll
				document.addEventListener("DOMContentLoaded", function () {
				  const skillsSection = document.getElementById("skills");
				  const skillFills = document.querySelectorAll(".skill-fill");
				
				  function animateSkills() {
				    const rect = skillsSection.getBoundingClientRect();
				    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
				
				    if (rect.top < windowHeight && rect.bottom > 0) {
				      // Skills section is visible, animate bars
				      skillFills.forEach(fill => {
				        const width = fill.getAttribute('data-width');
				        fill.style.width = width;
				      });
				    } else {
				      // Skills section out of view, reset bars
				      skillFills.forEach(fill => {
				        fill.style.width = '0';
				      });
				    }
				  }
				
				  // Initial check on load in case section is already visible
				  animateSkills();
				
				  // Animate on scroll and resize events
				  window.addEventListener("scroll", animateSkills);
				  window.addEventListener("resize", animateSkills);
				});
				var scrollTimeout;
				$window.on('scroll', function() {
				  // Clear any previous timeout
				  clearTimeout(scrollTimeout);
				
				  // Remove all active-locked after user scrolls and stops for 100ms
				  scrollTimeout = setTimeout(function() {
				    $nav_a.removeClass('active-locked');
				  }, 100);
				});



})(jQuery);
