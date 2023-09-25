/* eslint-disable  @typescript-eslint/no-explicit-any */
export function groupArrayElements(arr: any): any[][] {
  const groupSize = 3
  const groupedArray: any[][] = [];
  for (let i = 0; i < arr.articles.length; i += groupSize) {
    groupedArray.push(arr.articles.slice(i, i + groupSize));
  }
  return groupedArray;
}
