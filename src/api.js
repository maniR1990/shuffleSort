import { shuffle_sort } from "./constants";

export const shuffle_sort_api = function () {
  var cardsArr;
  function _generateCards() {
    let initialVal = 1;
    return [...new Array(shuffle_sort.num_of_cards)].map(
      (_, idx) => initialVal + idx
    );
  }
  function shuffleCards() {
    let arr = !cardsArr.length ? _generateCards() : cardsArr;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function sortCardsAsc() {
    let arr = !cardsArr.length ? _generateCards() : cardsArr;
    return arr.sort((a, b) => a - b);
  }

  return {
    init: function () {
      cardsArr = [];
      cardsArr = _generateCards();
      return cardsArr;
    },
    shuffle: shuffleCards,
    sortAsc :sortCardsAsc
  };
};
