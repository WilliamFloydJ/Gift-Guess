var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

const guessGifts = (WList, Pres) => {
  let possiblePres = [];
  Pres.forEach((PresElement) => {
    const { size, clatters, weight } = PresElement;
    WList.forEach((WLElement) => {
      if (
        size === WLElement.size &&
        clatters === WLElement.clatters &&
        weight === WLElement.weight
      ) {
        possiblePres.push(WLElement.name);
      }
    });
  });
  return possiblePres;
};

console.log(guessGifts(wishlist, presents));
