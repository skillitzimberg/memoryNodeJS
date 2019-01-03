import { card } from './card.js';
import { deck } from './card.js';
import './styles.css';

$(document).ready(function() {
  $('#newGame').click(function() {
    var newDeck = new deck(['monkey', 'banana', 'football', 'fig', 'tire']);
  });
});
