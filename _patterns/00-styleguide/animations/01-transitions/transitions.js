const transition = {
  opacity: {
    time: {
      value: '0.3s',
    },
    function: {
      value: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    all: {
      value:
        '{transition.opacity.time.value} {transition.opacity.function.value}',
    },
  },
  move: {
    time: {
      value: '0.3s',
    },
    function: {
      value: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    all: {
      value: '{transition.move.time.value} {transition.move.function.value}',
    },
  },
};

module.exports = {
  transition,
};
