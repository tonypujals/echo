module.exports = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click #btnsendmessage': 'sendMessage',
    'input #message': 'toggleEnableButton'
  },

  template: Handlebars.compile($('#message-send-template').html()),

  render: function() {
    var args = {
    };

    this.$el.html(this.template(args));

    return this;
  },

  messageText: function() {
    if (arguments.length == 0) {
      return $('#message').val();
    } else {
      $('#message').val(arguments[0]);
    }
  },

  toggleEnableButton: function() {
    if (this.messageText()) {
      console.log('value');
      $('#btnsendmessage').removeClass('disabled');
    } else {
      console.log('empty');
      $('#btnsendmessage').addClass('disabled');
    }
  },

  sendMessage: function() {
    var message = this.messageText();
    if (message) this.model.send(message);
    this.messageText('');
  }
});