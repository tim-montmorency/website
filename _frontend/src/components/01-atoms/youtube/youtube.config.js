module.exports = {
  title: 'Youtube',
  status: 'wip',
  meta: {
    col: 'col-12 col-md-6 col-lg-4 col-xl-3',
  },
  variants: [
    {
      name: 'Basic',
      context: {
        src: 'https://www.youtube.com/watch?time_continue=1&v=NpEaa2P7qZI',
        poster: 'https://placehold.co/600x400?text=Youtube',
      },
    },
    {
      name: 'No poster (fallback youtube image)',
      context: {
        src: 'https://www.youtube.com/watch?time_continue=1&v=NpEaa2P7qZI',
      },
    },
  ],
};
