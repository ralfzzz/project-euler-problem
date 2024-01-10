

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function nthPrime(n) {
    if (n <= 0) return "Masukkan angka yang lebih besar dari 0.";

    let count = 0;
    let candidate = 2;

    while (true) {
        if (isPrime(candidate)) {
            count++;
            if (count === n) {
                return candidate;
            }
        }
        candidate++;
    }
}

console.log(nthPrime(6));