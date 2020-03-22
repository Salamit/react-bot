Package.describe({
    name: 'reactbot',
  });
  
  Package.onUse(function (api) {
  
    api.use([
      'vulcan:core@1.14.1',
      'vulcan:forms@1.14.1',
      'vulcan:accounts@1.14.1',
      'vulcan:ui-bootstrap@1.14.0',
    ]);
  
    api.addFiles('lib/stylesheets/chatbot.css');
  
    api.mainModule('lib/server/main.js', 'server');
    api.mainModule('lib/client/main.js', 'client');
  
  });