var storeInList = function (items) {
  var newList = [];
  for (var i = 0; i < items.length; i++) {
  newList.push(items[i]);
  }
  return newList;
}

function sortedList(newList) {
  newList.sort(function(a, b) {
  return a - b;
  });
}

module.exports = {
  storeInList: storeInList,
  sortedList: sortedList,
}

