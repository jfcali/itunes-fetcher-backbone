import Backbone from 'backbone';

const SearchBar = Backbone.Model.extend({
  defaults: {
    query: ''
  }
});

const SearchBarView = Backbone.View.extend({
  className: 'search-bar',
  render() {
    this.$el.html(`
      <input id="field" class="search-bar__field" type="text" 
        placeholder="Search for artists, albums, songs..."
      >
      <button id="clear" disabled class="search-bar__button search-bar__button--clear">x</button>
      <button id="submit" disabled class="search-bar__button search-bar__button--submit">SEARCH</button>
    `);
    return this;
  }
});

const searchBar = new SearchBar();

export const searchBarView = new SearchBarView({
  model: searchBar,
  class: 'search-bar'
});

export default searchBarView;
