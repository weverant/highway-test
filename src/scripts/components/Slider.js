import { gsap } from 'gsap'
// import Swiper, { Navigation, EffectCreative } from 'swiper';

// Swiper.use( [ Navigation, EffectCreative ] );

class Slider {
    constructor( slider, params ) {
        this.slider = slider;
        this.params = params;

        this.init();
    }

    setSwiper() {
        const swiper = new Swiper( this.slider, {
            slidesPerView: 1,
            spaceBetween: 10,

            slideActiveClass: 'active',

            navigation: {
                nextEl: '.js-next-button',
                prevEl: '.js-prev-button',

                disabledClass: 'arrow--disabled',
            },

          
            wrapperClass: 'js-slider-carousel',
            slideClass: 'js-slide',
            
            ...this.params
        } )
    }

    init() {
        this.setSwiper();
    }
}

class CustomSlider {
    constructor( slider ) {
        this.slider = slider.container;
        this.carousel = slider.carousel;
        this.slide = slider.slide;
        this.controls = {
            prev: slider.prev,
            next: slider.next
        }
        this.currentIndex = 0;

        this.defaultStyle = {
            opacity: 0.4,
            scale: 1
        }
        this.prevStyle = {
            opacity: 0,
            scale: 1.15
        }
        this.nextStyle = {
            opacity: 1,
            scale: 1.05
        }

        this.init();
    }

    setControls() {
        this.controls.prev.classList.toggle( 'arrow--disabled', this.currentIndex == 0 );

        this.controls.next.classList.toggle( 'arrow--disabled', this.currentIndex == this.slide.length - 1 );
    }

    prevSlide() {
        gsap.to( this.slide[this.currentIndex], this.prevStyle );
        gsap.to( this.slide[this.currentIndex - 1], this.nextStyle );

        this.currentIndex--;
        this.setControls();

        gsap.to( this.slide[this.currentIndex + 1], this.defaultStyle );
    }

    nextSlide() {
        gsap.to( this.slide[this.currentIndex], this.prevStyle );
        gsap.to( this.slide[this.currentIndex + 1], this.nextStyle );

        this.currentIndex++;
        this.setControls();
    }

    onClick( e ) {
        console.log('click event');
        if (this.slider) {
            console.log('clik');
            if ( e.target == this.controls.prev ) this.prevSlide();
            if ( e.target == this.controls.next ) this.nextSlide();
        } 
    }

    events() {
        this.slider.addEventListener( 'click', this.onClick.bind(this), false);
    }

    init() {
        this.setControls();
        this.events();
    }
}

export { Slider, CustomSlider };