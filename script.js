
// MEMORY GAME

// Memory game is a simple grid based game in which you as a player have to flip over two cards.
// If the two cards match, that's one point for you and also the cards get taken off the board,
// leaving with you the remainder of the cards that, which you again have to start flipping over.
// You have to do this untill you have flipped over all the cards.
// Then the game is over. You can reload the webpage if you wish to play again!

//  PRE REQUISITE

// It will be helpful to know the following before proceeding

// (1) The push() method - The push() method adds new items to the end of an array, and returns the new length.

// (2) The querySelector() method - The querySelector() allows you to find the first element,
//                                which is a descendant of the parent element on which it is invoked,
//                                that matches a CSS selector or a group of CSS selectors.
//                                If no element matches the CSS selectors, the querySelector() returns null .

// (3) The setAttribute() method - The setAttribute() method adds the specified attribute to an element, and gives it the specified
// value.
//                                If the specified attribute already exists, only the value is set/changed.

// (4) The getAttribute() method - The getAttribute() method of the Element interface returns the value of a specified attribute on
// the element.
//                               If the given attribute does not exist, the value returned will either be null

// (5) createElement() method - the document.createElement() method creates the HTML element specified by tagName,
//                              or an HTMLUnknownElement if tagName isn't recognized.

// (6) appendChild() method -  appendChild() method adds a node to the end of the list of children of a specified parent node

// (7) The Math. random() function - The Math. random() function returns a floating-point, pseudo-random number in the range 0 to
// less than 1
//                                       (inclusive of 0, but not 1) with approximately uniform distribution over that range

// (8) The sort() method - The sort() method sorts the items of an array. The sort order can be either alphabetic or numeric,
//                             and either ascending (up) or descending (down). By default, the sort() method sorts the values as
// strings in
//                             alphabetical and ascending order.

// (9) The for statement - The for statement creates a loop that is executed as long as a condition is true.
//                           The loop will continue to run as long as the condition is true.
//                           It will only stop when the condition becomes false.

// (10) The Array object -  The Array object lets you store multiple values in a single variable.
//                             It stores a fixed-size sequential collection of elements of the same type.
//                             An array is used to store a collection of data, but it is often more useful to think of an array as
//
//                           a  collection of variables of the same type.

// Let's start off by creating a new project folder. In my case, the name of my project folder is "DOM_GAME_PROJECT",
//                                                                           as you can see on the left hand inside

// Inside this project folder, first create the HTML file, In my case, the name of the HTML file is "js_dom_game_project.html"
// Next, create a CSS file for styling, In my case, the name of my CSS file is "js_dom_game_project.css"
// Finally create the javascript file for logic and functionality, In my case, the name of my javascript file is "js_dom_game_project.js"
// Also one of the most important step is to add an images folder containing the images we'll be using in this project.
// You can see all of this on the left hand side

// Now, connect your html file with the javascript file and the css file.

// The pictures present inside the images folder must be of equal size as we'll palce all of them inside a grid.

// In my case, I have 6 technologies with their logos along with a blank image and a white image( to show the board is empty)

// Please go to html page to continue discussion

// Welcome back from html and css files overview

// All our code will be done in the DOM EventListener from now on.
document.addEventListener('DOMContentLoaded', () => {
// (1) Let's start off by creating an array of cards and giving them names that we will use later.

// In my case, I have chosen the logos of technologies used in web development as my images and name them accordingly
// Like html, css, bootstrap, javascript, jQuery, php and a blank card (image) to cover up the images and a white card (image)
// We're gonna make two of each cards as we need 2 of each card in an array to play the game,
//                                                                             because only then can we find two similar or matching images


  //card options
  const cardArray = [
    {
// We can see here that we are simply naming the card and for the image, we are giving relative path to each image.
      name: 'html',
      img: 'images/html.png'
    },
    {
      name: 'css',
      img: 'images/css.png'
    },
    {
      name: 'bootstrap',
      img: 'images/bootstrap.png'
    },
    {
      name: 'javascript',
      img: 'images/javascript.png'
    },
    {
      name: 'jQuery',
      img: 'images/jQuery.png'
    },
    {
      name: 'php',
      img: 'images/php.png'
    },
    {
      name: 'html',
      img: 'images/html.png'
    },
    {
      name: 'css',
      img: 'images/css.png'
    },
    {
      name: 'bootstrap',
      img: 'images/bootstrap.png'
    },
    {
      name: 'javascript',
      img: 'images/javascript.png'
    },
    {
      name: 'jQuery',
      img: 'images/jQuery.png'
    },
    {
      name: 'php',
      img: 'images/php.png'
    },

  ]

// (27) Now, the final thing that will allow us to refresh the game with new card positions is to randomize all the
// cards using sort and math random
// (28) After successfully compeleting all these steps, you will have your very own memory game.!!!
  cardArray.sort(() => 0.5 - Math.random())
  // (2) Okay, now we're gonna create our game board.

  // First, using querySelector, we're gonna pick out the element with the class name of grid from html and define it as '.grid' for
  // our javascript.
  const grid = document.querySelector('.grid')
// (24) By picking out the span element with the id 'resultDisplay' from html,
// (25) we can do this by using text content. We can pass through exactly how many times we can store something in our cardsWon array
// and add 1 point for every match.

  const resultDisplay = document.querySelector('#result')
  // (6) We will now make an empty array of cards cardsChosen.
  var cardsChosen = []
  // (8) We're gonaa do the same for the cardsChosenId in a seperate empty array.
  var cardsChosenId = []
  // (20) We also want to make an empty array called cardsWon and push the two chosen cards into the array to be stored
  const cardsWon = []


  //create your board
  function createBoard() {


// (3) Now, using a for loop, we're gonna loop over our card array and for each card, wew're gonna create an image element
    for (let i = 0; i < cardArray.length; i++) {
// and we're gonna call this image element, Let's call this element 'card'
      var card = document.createElement('img')
// For each card element, We're gonna set it as attribute, linking it with the image with relative path
      card.setAttribute('src', 'images/blank.png')
// We're also gonna give each one, a data id, loop over each one an id that goes from 0 to 11 (total -12 (4x3=12)),
// as we have 12 cards present in our cards array
      card.setAttribute('data-id', i)
// Then we add an event listener to listen out, to if the cards are being clicked on, and invoke a flipCard function
      card.addEventListener('click', flipCard)
// Finally, all these cards, with technically different ids we created, we're gonna put into the grid using appendChild
      grid.appendChild(card)
    }
  }

// (13) Okay so now let's write the checkForMatch function.

  //check for matches
  function checkForMatch() {
// (14) Let's pick up all the images we have created in our 1st function using querySelectorAll and call them cards
    var cards = document.querySelectorAll('img')
// (15) Now we have 2 vaules in our cardsChosen array and as well as our cardsChosenId array at this point.
// (16) Let's use both values here like this and set them as const (as shown below)
// (17) // By writing cardsChosenId and '0' in square brackets, we are saying that we want the first value in our array ascending
// we want to assign it to const optionOneId.
    const optionOneId = cardsChosenId[0]
// (18) Do the same for the second value.
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same item! Please click on a differnet item.')
    }
// (19) Using the same logic but for for cardsChosen names rather than id's, we're gonna check that
// if the first item in our array deeply equals in our cardsChosen array,
//   if the answer is true, we want an alert to pop up and we wanna assign both of them a white png image for styling.
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Congratulations! You  found a pair of matching items')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
// (21) If the cards won't match, we want to flip the card back over to be played again
// So, visually giving them a blank png and also send an alert
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry,You have selected different items, Please try again to find a match! ')
    }
// (22) Either way, if either of these things happen, clear the cardsChosen array and cardsChosenId array,
// ready to start flipping again
    cardsChosen = []

    cardsChosenId = []
// (23) So, now we are collecting cardsWon, it will be awesome to convert this to score and dispaly this to the user by the browser.
    resultDisplay.textContent = cardsWon.length
// (26) If the cardsWon deeply equals to the length of cardArray divided by two, we know that we have collected all possible
// cards in our cardArray and alert the player about this in the browser
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found  all the items! and the game is over. Please reload the page, to start a new game.'
    }
  }
// (5) Let's start by writing flipCard function
//
  //flip your card
  function flipCard() {
// Let's set a variable of card id. In this, We're simply getting the data-id attribute, we created in the function in line number:157
    var cardId = this.getAttribute('data-id')
// (7) Using push method, we will push the cards from the cardArray based on the cardId
// So, if the cardId is 4, this will match the 5th card in our cardArray because indexing starts from 0 in JavaScript.
// Once we have located this card, we will get it's name
    cardsChosen.push(cardArray[cardId].name)
// (9) For this one, we just want the cardId
    cardsChosenId.push(cardId)
// (10) Now, flipCard is already a function, we already have a card picked.
// this setAttribute will let us add an image to that square based on the cardId it holds.
    this.setAttribute('src', cardArray[cardId].img)
// (11) We only want to put 2 cards in our card's cardsChosen array.
// So, with this if statement, we are saying that if the cardsChosen array is equal to 2, we want to invoke the function for
// checkForMatch

    if (cardsChosen.length ===2) {
// (12) This setTimeout will give us some buffer time so that the whole thing doesn't happen too quickly
// In our case, we arechecking for match after exactly 500 milliseconds
      setTimeout(checkForMatch, 500)
    }
  }
// (4) Now, Let's invoke the function and flip over to the browser
// Now to make our game work, we need to do two more things. They are
//                                                                   (i) Check for match and
//                                                                   (ii) Flip your card
  createBoard()
})
