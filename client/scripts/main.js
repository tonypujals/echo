module.exports = {
  start: function (host) {
    // models
    var App = require('./models/App')
      ;

    // views
    var ServerControlView = require('./views/ServerControlView')
      , MessagePanelView = require('./views/MessagePanelView')
      ;


    var app = new App({ host: host });

    // wire up views
    // just creating them works since they wire
    // up the page and render upon initializion

    new ServerControlView({
      model: app,
      el: '#server-control'
    });

    new MessagePanelView({
      model: app,
      el: '#message-panel'
    });

    // all wired up to the page and ready for user input
  }
};


