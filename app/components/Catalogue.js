import Backbone from 'backbone';

import { Album, AlbumView } from './Album';

const Catalogue = Backbone.Collection.extend({
  model: Album,
  parse({ results }) {
    const newModels = results.map(x => {
      const { artistName, artworkUrl100, collectionName } = x;
      return {
        artist: artistName,
        image: artworkUrl100,
        name: collectionName
      };
    });
    return newModels;
  },
  url: 'https://itunes.apple.com/search'
});

const CatalogueView = Backbone.View.extend({
  tagName: 'div',
  className: 'catalogue',
  initialize() {
    this.collection.on('reset', this.render, this);
  },
  update(e) {
    console.log(e);
  },
  render() {
    console.log('rendering', this.collection);
    this.$el.empty();
    this.collection.models.map(album => {
      const albumView = new AlbumView({ model: album });
      this.$el.append(albumView.render().$el);
    });
  }
});

export const catalogue = new Catalogue();

export const catalogueView = new CatalogueView({
  el: '#catalogue',
  collection: catalogue,
  className: 'catalogue'
});

export default catalogueView;
