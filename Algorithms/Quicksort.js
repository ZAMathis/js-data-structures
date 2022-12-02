import swap from "./swap";

export default function quickSort(array, leftBound = 0, rightBound = array.length - 1) {
    if (leftBound < rightBound) {
        const pivotIndex = partition(array, leftBound, rightBound);
        quickSort(array, leftBound, pivotIndex - 1);
        quickSort(array, pivotIndex, rightBound);
    }

    return array;
}

export function partition(array, leftIndex, rightIndex) {
    // pivot upon where to start sorting
    const pivot = array[Math.floor(array.length / 2)]

    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
          leftIndex++;
        }

        while (array[rightIndex] > pivot) {
          rightIndex--;
        }
        
        if (leftIndex <= rightIndex) {
          swap(array, leftIndex, rightIndex);
          leftIndex++;
          rightIndex--;
        }
    }

    return leftIndex;
}