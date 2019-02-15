import './main.scss';
import Backbone from 'backbone';
import { catalogue, catalogueView } from './components/Catalogue';
import { searchBarView } from './components/SearchBar';

const App = Backbone.Model.extend({});

const AppView = Backbone.View.extend({
  el: '#app',
  model: App,
  className: 'album-fetcher',
  events: {
    'change #field': 'onChangeField',
    'click #submit': 'onSubmit'
  },
  onSubmit() {
    const term = this.$el.find('input').val();
    this.$el.find('input').val('');
    catalogue.fetch({
      data: {
        term
      },
      reset: true,
      success(res) {},
      error(e) {}
    });
  },
  initialize() {},
  render() {
    this.$el.append(searchBarView.render());
    this.$el.append(catalogueView.render());
  }
});

const appView = new AppView();
document.addEventListener('DOMContentLoaded', () => {
  appView.render();
});
