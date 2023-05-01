module.exports = {
  files: '**/*.php',
  proxy: 'localhost:80',
  open: false,
  files: ['**/*.php', 'assets/css/*.css'],
  watchOptions: {
    usePolling: true,
  },
};
