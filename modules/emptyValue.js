const emptyValue = (bookDetials) => {
  if (bookDetials.title === '' || bookDetials.author === '') return true;
  return false;
};

export default emptyValue;