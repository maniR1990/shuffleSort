import { shuffle_sort_api } from "./api";
const api = shuffle_sort_api();

export const component = function () {
  var $listView;
  var $shuffleButton;
  var $sortButton;
  var $listElem;
  var $listItem;
  return {
    init: function () {
      $listView = document.getElementById("listView");
      $shuffleButton = document.getElementById("shuffle");
      $sortButton = document.getElementById("sort");
      this.initListener();
      this.render(api.init());
    },
    initListener: function () {
      var that = this;
      $shuffleButton.addEventListener("click", function () {
        that.render(api.shuffle());
      });
      $sortButton.addEventListener("click", function () {
        that.render(api.sortAsc());
      });
    },
    render: function (arr) {
      var that = this;
      if (arr) {
        $listView.innerHTML = "";
        arr.forEach(function (item) {
          that.generateListItem(item);
        });
      }
    },
    generateListItem: function (item) {
      $listElem = document.createElement("div");
      $listElem.setAttribute("class", "list");
      // CONTENT
      $listItem = document.createElement("span");
      $listItem.innerHTML = item;
      $listElem.appendChild($listItem);
      $listView.appendChild($listElem);
    },
  };
};
