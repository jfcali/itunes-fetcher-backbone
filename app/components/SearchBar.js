import Backbone from 'backbone';

const SearchBar = Backbone.Model.extend({
  defaults: {
    query: ''
  }
});

const SearchBarView = Backbone.View.extend({
  render() {
    this.$el.html(`
      <input class="search-bar__field" type="text" 
        placeholder="Search for artists, albums, songs..."
      >
      <button class="search-bar__clear">x</button>
      <button id="submit" class="search-bar__submit">SEARCH</button>
    `);
  }
});

export const searchBarView = new SearchBarView({
  model: SearchBar,
  el: '#search'
});

export default searchBarView;
