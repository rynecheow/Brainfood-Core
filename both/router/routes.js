Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});


Router.route('/leaderboard', {
  name: 'leaderboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
