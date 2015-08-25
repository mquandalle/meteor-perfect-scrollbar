Package.describe({
  name: 'mquandalle:perfect-scrollbar',
  version: '0.6.5_2',
  summary: 'A thin wrapper around perfect-scrollbar',
  git: 'meteor-perfect-scrollbar',
  documentation: null
});

Package.onUse(function(api) {
  api.addFiles('perfect-scrollbar.js', 'client');
  api.addFiles('perfect-scrollbar.css', 'client');
});
