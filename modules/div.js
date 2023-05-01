const div = (tag, text) => {
  const titleDiv = document.createElement(tag);
  if (text) {
    const titleText = document.createTextNode(text);
    titleDiv.appendChild(titleText);
  }
  return titleDiv;
};

export default div;