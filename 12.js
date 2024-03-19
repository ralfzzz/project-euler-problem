function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            count += 2; // Count both i and num/i
        }
    }
    return count;
}

function divisibleTriangleNumber(n) {
    let triangleNumber = 1;
    let num = 2;
    while (true) {
        if (countDivisors(triangleNumber) > n) {
            return triangleNumber;
        }
        triangleNumber += num;
        num++;
    }
}

divisibleTriangleNumber(5);
