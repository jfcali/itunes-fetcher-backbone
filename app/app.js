import './main.scss';
import Backbone from 'backbone';
import { catalogue, catalogueView } from './components/Catalogue';
import { searchBarView } from './components/SearchBar';
import { messageView } from './components/Messages';

const App = Backbone.Model.extend({});

const AppView = Backbone.View.extend({
  el: '#app',
  model: App,
  className: 'album-fetcher',
  events: {
    'keyup #field': 'onChangeField',
    'click #submit': 'onSubmit',
    'click #clear': 'onClear'
  },
  onChangeField(e) {
    const value = this.$el.find('#field').val();

    if (value !== '') {
      this.$el.find('#submit').attr('disabled', false);
      this.$el.find('#clear').attr('disabled', false);
    } else {
      this.$el.find('#submit').attr('disabled', true);
      this.$el.find('#clear').attr('disabled', true);
    }

    if (e.key === 'Enter' && value !== '') {
      this.onSubmit();
    }
  },
  onSubmit() {
    const field = this.$el.find('#field');
    const term = field.val();

    const submit = this.$el.find('#submit');
    submit.attr('disabled', true);

    const clear = this.$el.find('#clear');
    clear.attr('disabled', true);
    field.val('');
    messageView.model.set('message', 'Searching!!');

    catalogue.fetch({
      data: {
        term,
        entity: 'album',
        limit: 200
      },
      reset: true,
      success(res) {
        if (res.models.length === 0) {
          messageView.model.set('message', 'No results! try again.');
        }
      },
      error() {
        messageView.model.set(
          'message',
          'Oops, something went wrong. Please try again later!'
        );
      }
    });
  },
  onClear() {
    this.$el.find('#field').val('');
  },
  initialize() {
    this.listenTo(catalogueView.collection, 'reset', this.render);
  },
  render() {
    this.$el.empty();
    this.$el.append(searchBarView.render().$el);
    if (catalogueView.collection.models.length) {
      this.$el.append(catalogueView.render().$el);
    } else {
      this.$el.append(messageView.render().$el);
    }
  }
});

const appView = new AppView();
document.addEventListener('DOMContentLoaded', () => {
  appView.render();
});
