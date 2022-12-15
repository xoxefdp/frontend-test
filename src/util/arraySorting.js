const _sortCriteriaDesc = (item1, item2) => {
  return item2 - item1;
}

const sortByPriceDesc = (item1, item2) => {
  if (item1?.price && item2?.price) {
    return _sortCriteriaDesc(item1.price, item2.price);
  }
}

const _sortCriteriaAsc = (item1, item2) => {
  return item1 - item2;
}

const sortByPriceAsc = (item1, item2) => {
  if (item1?.price && item2?.price) {
    return _sortCriteriaAsc(item1.price, item2.price);
  }
}

export {
  sortByPriceDesc,
  sortByPriceAsc,
}
