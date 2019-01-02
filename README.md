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

##### Spec 1: Create a card:
- [ ] **Expect:**  
Input - card face name/picture: monkey;  
Output: monkey;

##### Spec 2: Toggle between card face down and card face up:
- [ ] **Expect:**  
Input - card face name/picture: monkey;  
Action - click on monkey picture;  
Result: card back is shown;

##### Spec 3: Create a card pair:
- [ ] **Expect:**  
Input - card face name/picture: monkey;  
Output: two monkey cards;

##### Spec 4: Create a card grid:
- [ ] **Expect:**  
Input - array of cards: monkey, banana, football, fig, tire;  
Output - randomized order: monkey, monkey, banana, banana, football, football, fig, fig, tire, tire;

##### Spec 5: Set all cards to face down:
- [ ] **Expect:**  
Input - set of cards: monkey, banana, football, fig, tire;  
Output - randomized order & faces down: monkey, monkey, banana, banana, football, football, fig, fig, tire, tire;

##### Spec 6: Set all cards to face down:
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
