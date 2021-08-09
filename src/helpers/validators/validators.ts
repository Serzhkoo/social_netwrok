export const requiredField = (value: string) => {
  if (value) return undefined;
  return 'Field is required!';
};

export const maxLengthCreator = (maxLength: number) => {
  return (value: string) => {
    if (value && value.trim().length <= maxLength) return undefined;
    return `Max length is ${maxLength} symbols!`;
  };
};
