import Highway from '@dogstudio/highway';

import { CustomSlider } from './Slider';

class CustomRenderer extends Highway.Renderer {
  // Hooks/methods
  onEnter() {
    const sliderContainer = document.querySelector( '.js-header-slider' );

    const headerSlider = {
        container: sliderContainer,
        carousel: sliderContainer.querySelector( '.js-slider-carousel' ),
        slide: sliderContainer.querySelectorAll( '.js-slide' ),
        prev: sliderContainer.querySelector( '.js-prev-button' ),
        next: sliderContainer.querySelector( '.js-next-button' )
    }
    
    const test = new CustomSlider( headerSlider );
  }
  onLeave() { 
    // setSlider().test;
   }
  onEnterCompleted() { 

  }
  onLeaveCompleted() { [] }
}

// Don`t forget to export your renderer
export default CustomRenderer;