Package.describe({
  name: 'example-movies',
});

Package.onUse(function (api) {

  api.use([

    'promise',

    // vulcan core
    'vulcan:core@1.10.0',

    // vulcan packages
    'vulcan:forms@1.10.0',
    'vulcan:accounts@1.10.0',
    
  ]);

  api.addFiles('lib/stylesheets/bootstrap.min.css');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
