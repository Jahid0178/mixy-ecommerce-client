const letterCapitalized = (word) => {
  return word.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export default letterCapitalized;
