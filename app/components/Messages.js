import Backbone from 'backbone';

const Message = Backbone.Model.extend({
  defaults: {
    message: 'Search for some albums!'
  }
});

export const messageModel = new Message();

export const MessageView = Backbone.View.extend({
  className: 'messages',
  initialize() {
    this.model.on('change', this.render, this);
  },
  render() {
    const message = this.model.get('message');
    this.$el.html(`
      <div class="messages__area">
        <p class="messages__text">${message}</p>
      </div>
    `);
    return this;
  }
});

export const messageView = new MessageView({
  model: messageModel
});
