const getFormState = (submitted: boolean, loading: boolean) => {
  switch (true) {
    case submitted:
      return 'submitted';
    case loading:
      return 'loading';
    default:
      return 'default';
  }
};

export default getFormState;
