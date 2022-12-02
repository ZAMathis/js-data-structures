export default function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const indexToCheck = Math.floor((left + right) / 2);
        const currentlyChecking = arr[indexToCheck];
        
        if (currentlyChecking === target) {
            return indexToCheck;
        } else if (currentlyChecking < target) {
            left = indexToCheck + 1
        } else {
            right = indexToCheck;
        }
    }

    return null;
}