function Card(face) {
  this.face = face;
  this.back = 'memory';
}

function Deck(faces) {
  var deck = [];
  faces.forEach(function(face) {
    var newCard = new card(face);
    deck.push(newCard);
    deck.push(newCard);
  });
  return deck;
}

Deck.prototype.shuffleDeck(deck) {
  var shuffledDeck = [];
  deck.forEach(function(card) {

  });
}
