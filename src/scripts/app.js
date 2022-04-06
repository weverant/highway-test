import Highway from '@dogstudio/highway';

import CustomRenderer from './components/customRenderer';
import CustomTransition from './components/customTransitions';
import Fade from './components/Fade';

import { CustomSlider } from './components/Slider';



const H = new Highway.Core({
  renderers: {
    index: CustomRenderer
  },
  transitions: {
    default: Fade
  }
});

let test;

H.on('NAVIGATE_IN', ({ to, trigger, location }) => {
  const sliderContainer = to.view.querySelector( '.js-header-slider' );

    const headerSlider = {
      container: sliderContainer,
      carousel: sliderContainer.querySelector( '.js-slider-carousel' ),
      slide: sliderContainer.querySelectorAll( '.js-slide' ),
      prev: sliderContainer.querySelector( '.js-prev-button' ),
      next: sliderContainer.querySelector( '.js-next-button' )
    }
    
    test = new CustomSlider( headerSlider );
});

H.on('NAVIGATE_END', ({ to, trigger, location }) => {

  // test.slider = null;
});
