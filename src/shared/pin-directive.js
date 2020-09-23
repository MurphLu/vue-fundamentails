/* eslint-disable no-param-reassign */
function applyBinding(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  // detail see https://vuejs.org/v2/guide/custom-directive.html
  bind: (element, binding) => { // only once when create
    // if (binding.arg !== 'position') return;
    applyBinding(element, binding);
  },
  update: (element, binding) => {
    applyBinding(element, binding);
  },
};
