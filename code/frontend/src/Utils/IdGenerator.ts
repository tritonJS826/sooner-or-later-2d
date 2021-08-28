let currentId = 0;

const generateId = () => {
  currentId += 1;
  return currentId;
};
export default generateId;
