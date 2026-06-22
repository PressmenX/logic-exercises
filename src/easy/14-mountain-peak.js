function isValidMountain(arr) {
    let n = arr.length;
    let i = 0;

    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n - 1) {
        return false;
    }

    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
}

console.log(isValidMountain([1, 10, 20, 5, 0]));
console.log(isValidMountain([1, 2, 3]));
console.log(isValidMountain([1, 2, 1]));
console.log(isValidMountain([1, 5, 5, 1]));