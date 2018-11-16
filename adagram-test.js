const Adagrams = {
  drawLetters() {
    // List letters with frequency
    const letterPool = {
      A:9,B:2,C:2,D:4,E:12,F:2, G:3,H:2,I:9,J:1,K:1,L:4,M:2,N:6,O:8,P:2,Q:1,R:6,S:4,T:6,U:4,V:2,W:2,X:1,Y:2,Z:1
    }
    // Create array of all letters
    const letterArray = [];

    for(const letter in letterPool) {
      for(let i = 0; i < letterPool[letter]; i += 1) {
        letterArray.push(letter);
      }
    }

    // Shuffle array
    function shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    shuffle(letterArray)

    // Create hand of 10 random letters
    const hand = letterArray.slice(0, 10);
    return hand;

    // Implement this method for wave 1
  },

  usesAvailableLetters(input, lettersInHand) {
    const word = [...input.toUpperCase()];
    const letterFreq = {};

    lettersInHand.forEach((letter) => {
      if (letterFreq[letter]) {
        letterFreq[letter] += 1;
      } else {
        letterFreq[letter] = 1;
      }
    });

    for (let letter of word) {
      console.log(letter);
      if (letterFreq[letter] == undefined) {
        console.log("undefined");
        return false;
      } else if (letterFreq[letter] > 0) {
        console.log(`Before: ${letterFreq[letter]}`);
        letterFreq[letter] -= 1;
        console.log(`After: ${letterFreq[letter]}`);
        continue
      } else {
        console.log(`Count is: ${letterFreq[letter]}`);
        return false;
      }
    }
    return true;
  }
}


let hand = Adagrams.drawLetters();
console.log(`This is the hand: ${hand}`);
let word = 'easy'
console.log(word);
let result = Adagrams.usesAvailableLetters(word, hand);
console.log(`This is the result: ${result}`);
