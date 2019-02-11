import Backbone from 'backbone';

export const Album = Backbone.Model.extend({
  defaults: {
    artist: '',
    name: '',
    image: ''
  }
});

export const AlbumView = Backbone.View.extend({
  tagName: 'div',
  className: 'album',
  initialize(options) {
    if (!(options && options.model)) {
      throw new Error('model is not specified');
    }
  },
  render() {
    const name = this.model.get('name');
    const artist = this.model.get('artist');
    console.log(name, artist);
    this.$el.html(`
      <img src=${this.model.get('image')} class="album__cover">
      <div>
        <h1 class="album__name" title="${name}">${name}</h1>
        <p class="album__artist" title="${artist}">${artist}</p>
      </div>
    `);
    return this;
  }
});
