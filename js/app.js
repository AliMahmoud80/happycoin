$(document).ready(() => {
    let scorllables = ['whyhappycoin', 'tokenomics', 'roadmap','donate', 'faq']

    // Smooth scroll to elements.
    scorllables.forEach(s => {
        $(`a[href="#${s}"]`).click(() => {
            $('html, body').animate({
                scrollTop: $(`#${s}`).offset().top - 200
            }, 1000);
        })
    })

    $(window).scroll(() => {
        let pos = $(window).scrollTop()
        
        // fix header to top after scroll.
        if (pos >= parseInt($('.social-header').css('height'))) {
            $('.header').addClass('header-top')
            $('.navigation-drawer .navigation').css('padding-top', '100px')
            $('.header').css('max-width', 'none')
        } else {
            $('.header').removeClass('header-top')
            $('.navigation-drawer .navigation').css('padding-top', '120px')
            $('.header').css('max-width', '1305px')
        }

        // add .active class to each scrollable link.
        scorllables.forEach(s => {
            let el = $(`#${s}`)
            let elOffset = el.offset().top - 280
            let elHight = parseInt(el.css('height'))

            if (pos >= elOffset && pos <= (elOffset + elHight)) {
                $(`.header .navigation a[href="#${s}"]`).addClass('active')
                $(`.navigation-drawer .navigation a[href="#${s}"]`).addClass('active')
            } else {
                $(`.header .navigation a[href="#${s}"]`).removeClass('active')
                $(`.navigation-drawer .navigation a[href="#${s}"]`).removeClass('active')
            }
        })
    })

    // Show/Hide navigation drawer.
    $('.menu-btn').click(() => {
        $('.navigation-drawer').animate({'width': 'toggle'}, 300);
    })
    
    // Close navigation drawer when click on link
    $('.navigation-drawer .navigation ul li a').click(() => {
        $('.navigation-drawer').animate({'width': 'toggle'}, 300);
    })

    $('.faq-card .faq-card-header button').click(function () {
        $(this).closest('.faq-card').toggleClass('card-active')
    })

    // Bootstrap Carousel
    $('.carousel').carousel()
})