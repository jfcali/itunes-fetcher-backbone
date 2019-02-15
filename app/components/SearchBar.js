import Backbone from 'backbone';

const SearchBar = Backbone.Model.extend({
  defaults: {
    query: ''
  }
});

const SearchBarView = Backbone.View.extend({
  events: {
    'change #field': 'onKeyDown'
  },
  initialize() {
    console.log(this.$el.find('#field'));
    this.field = this.$el.find('#field');
    this.submit = this.$el.find('#submit');
    this.clear = this.$el.find('#clear');
  },
  onKeyDown(e) {
    console.log(this.field.val());
  },
  render() {
    console.log(this);
    this.$el.html(`
      <input id="field" class="search-bar__field" type="text" 
        placeholder="Search for artists, albums, songs..."
      >
      <button class="search-bar__button search-bar__button--clear">x</button>
      <button id="submit" disabled class="search-bar__button search-bar__button--submit">SEARCH</button>
    `);
  }
});

export const searchBarView = new SearchBarView({
  model: SearchBar,
  el: '#search'
});

export default searchBarView;
