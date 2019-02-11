import './main.scss';
import Backbone from 'backbone';
import { catalogue, catalogueView } from './components/Catalogue';
import { searchBarView } from './components/SearchBar';

const App = Backbone.Model.extend({});

const AppView = Backbone.View.extend({
  el: '#app',
  model: App,
  className: 'album-fetcher',
  urlRoot: 'https://itunes.apple.com/search',
  events: {
    'change #field': 'onChangeField',
    'click #submit': 'onSubmit'
  },
  onChangeAdd: e => {
    console.log('changng', e);
  },
  onSubmit() {
    const term = this.$el.find('input').val();
    this.$el.find('input').val('');

    console.log(term);
  },
  initialize() {},
  test(e) {
    console.log(e);
  },
  render() {
    this.$el.append(searchBarView.render());
    this.$el.append(catalogueView.render());
  }
});

const appView = new AppView();
document.addEventListener('DOMContentLoaded', () => {
  appView.render();
  appView.on('onSubmit', () => {
    console.log('dhsf');
  });
});
