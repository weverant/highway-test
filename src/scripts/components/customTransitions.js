// File: custom-transition.js
// Import Highway
import Highway from '@dogstudio/highway';

class CustomTransition extends Highway.Transition {
  in({ from, to, trigger, done }) {
    // [...]
  }

  out({ from, trigger, done }) {
    // [...]
  }
}

// Don`t forget to export your transition
export default CustomTransition;