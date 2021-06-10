// Code your solutions in this file
function writeCards(array, name) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
      thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
  
    return thankYouCards;
  }

  function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i -= 1
    }
    return i
  }
