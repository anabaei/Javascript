// input  [2,1,4,7,2]
// output [2,1.5,2,3,2]

class MedianFinder {
    constructor(arr) {
      this.sortedArray = arr;
    }
findMedian() {
    const len = this.sortedArray.length;
    if (len % 2 === 0) {
      const mid1 = len / 2;
      const mid2 = mid1 - 1;
      return (this.sortedArray[mid1] + this.sortedArray[mid2]) / 2;
    } else {
      const mid = Math.floor(len / 2);
      return this.sortedArray[mid];
    }
  }
}


const arr = [2,1,4,7,2]
