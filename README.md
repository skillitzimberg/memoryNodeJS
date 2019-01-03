# Memory

#### By Scott Bergler

## Description
Create a game based on the card game Memory.

### Specifications:
You'll need to generate a grid of cards.  
Each card should have a picture on it, and there should be 2 of each picture. So, if you have a deck of 10 cards there should be 5 different pictures.  

All cards should start face down.  
Each time the user takes a turn they click on 2 cards.  
When a card is clicked it should reveal its picture.  
If the user gets a pair of cards with the same picture, the cards remain face-up.  
If the user's selected cards are different they should return to face down.  
When all the cards are face up, the user has won.  
The object of the game is to find all the pairs in as few turns as possible.  

##### Spec 1: Card constructor:
- [ ] **Expect:** Create a card  
Properties: face, back;  
Input - card face name/picture: monkey;  
Output: card: monkey; back;

##### Spec 2: Board constructor:
- [ ] **Expect:** Create a card  
Properties: rows, columns;  
Input - card face name/picture: monkey;  
Output: card: monkey; back;

##### Spec 3: toggleCard():
- [ ] **Expect:** Toggle between card face down and card face up  
Action - click on monkey picture;  
Result: card back is shown;

##### Spec 4: cardPair():
- [ ] **Expect:**  Create a card pair  
Input - fig card;  
Output: two fig cards;

##### Spec 5: setInitialState():
- [ ] **Expect:** Set all cards to face down  
Input - set of cards: monkey, banana, football, fig, tire;  
Output - randomized order & faces down: monkey, monkey, banana, banana, football, football, fig, fig, tire, tire;

##### Spec 6: dealCards():
- [ ] **Expect:** Lay out cards on the board  
Input - array of cards: monkey, banana, football, fig, tire;  
Output - randomized order: monkey, monkey, banana, banana, football, football, fig, fig, tire, tire;

##### Spec 7: Set all cards to face down:
- [ ] **Expect:**  
Input - set of cards: monkey, banana, football, fig, tire;  
Output - randomized order & faces down: monkey, monkey, banana, banana, football, football, fig, fig, tire, tire;

## Setup/Installation Requirements

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, Json, C#.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
