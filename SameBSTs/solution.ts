export function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne[0] !== arrayTwo[0]) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  if (arrayOne.length !== arrayTwo.length) return false;

  const arrayOneLeftSubTree = [];
  const arrayOneRightSubTree = [];

  const arrayTwoLeftSubTree = [];
  const arrayTwoRightSubTree = [];

  for (let i = 1; i < arrayOne.length; i++) {
    if (arrayOne[i] < arrayOne[0]) {
      arrayOneLeftSubTree.push(arrayOne[i]);
    } else {
      arrayOneRightSubTree.push(arrayOne[i]);
    }
  }

  for (let i = 1; i < arrayTwo.length; i++) {
    if (arrayTwo[i] < arrayTwo[0]) {
      arrayTwoLeftSubTree.push(arrayTwo[i]);
    } else {
      arrayTwoRightSubTree.push(arrayTwo[i]);
    }
  }

  const leftIsSame = sameBsts(arrayOneLeftSubTree, arrayTwoLeftSubTree);
  const rightIsSame = sameBsts(arrayOneRightSubTree, arrayTwoRightSubTree);

  return leftIsSame && rightIsSame;
}
