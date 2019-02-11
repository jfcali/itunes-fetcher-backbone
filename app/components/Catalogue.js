import Backbone from 'backbone';

import { Album, AlbumView } from './Album';

const Catalogue = Backbone.Collection.extend({
  model: Album
});

const CatalogueView = Backbone.View.extend({
  tagName: 'div',
  className: 'catalogue',

  render() {
    console.log('render');
    this.model.each(album => {
      console.log(album);
      const albumView = new AlbumView({ model: album });
      this.$el.append(albumView.render().$el);
    });
  }
});

export const catalogue = new Catalogue([
  new Album({ artist: '1', name: 'a' }),
  new Album({ artist: '2', name: 'b' }),
  new Album({ artist: '3', name: 'c' })
]);

export const catalogueView = new CatalogueView({
  el: '#catalogue',
  model: catalogue,
  className: 'catalogue'
});

export default catalogueView;
