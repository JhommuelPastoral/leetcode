function reverseByType(s: string): string {
    const arr: string[] = s.split('');

    let left = 0;
    let right = arr.length - 1;

    // Reverse lowercase letters
    while (left < right) {
        const isLeftLetter =
            arr[left].charCodeAt(0) >= 97 &&
            arr[left].charCodeAt(0) <= 122;

        const isRightLetter =
            arr[right].charCodeAt(0) >= 97 &&
            arr[right].charCodeAt(0) <= 122;

        if (!isLeftLetter) {
            left++;
        } else if (!isRightLetter) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    // Reverse special characters
    left = 0;
    right = arr.length - 1;

    while (left < right) {
        const isLeftSpecial =
            arr[left].charCodeAt(0) < 97 ||
            arr[left].charCodeAt(0) > 122;

        const isRightSpecial =
            arr[right].charCodeAt(0) < 97 ||
            arr[right].charCodeAt(0) > 122;

        if (!isLeftSpecial) {
            left++;
        } else if (!isRightSpecial) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}

console.log(reverseByType("a-bC-dEf-ghIj"));
console.log(reverseByType("Test1ng-Leet=code-Q!"));