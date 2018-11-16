const Adagrams = {
  drawLetters() {
    // List letters with frequency
    const letterPool = {
      A:9,B:2,C:2,D:4,E:12,F:2, G:3,H:2,I:9,J:1,K:1,L:4,M:2,N:6,O:8,P:2,Q:1,R:6,S:4,T:6,U:4,V:2,W:2,X:1,Y:2,Z:1
    };

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

    shuffle(letterArray);

    // Create hand of 10 random letters
    return letterArray.slice(0, 10);
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
      if (letterFreq[letter] == undefined) {
        return false;
      }
      else if (letterFreq[letter] > 0) {
        letterFreq[letter] -= 1;
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    const wordArray = [...word.toUpperCase()];

    if ( wordArray.length > 6 ) {
      score += 8;
    }

    wordArray.forEach(letter => {
      if(['A','E','I','O','U','L','N','R','S','T'].includes(letter)) {
        score += 1;
      } else if (['D','G'].includes(letter)){
        score += 2;
      } else if (['B','C','M','P'].includes(letter)) {
        score += 3;
      } else if (['F','H','V','W','Y'].includes(letter)) {
        score += 4;
      } else if (['K'].includes(letter)) {
        score += 5;
      } else if (['J','X'].includes(letter)) {
        score += 8;
      } else if (['Q','Z'].includes(letter)) {
        score += 10;
      }
    });
    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
