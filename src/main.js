function capitalize(string) {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    if (!string) return string;
    return Array.from(string).reverse().join('');
}

const calculator = {
    add: (a, b) => {
        return a + b;
    }
    ,
    subtract: (a, b) => {
        return a - b;
    }
    ,
    multiply: (a, b) => {
        return a * b
    }
    ,
    divide: (a, b) => {
        if (b === 0) return new Error('cannot divide by zero');
        return a / b;
    }
}


function analyzeArray(array) {
    const average = array.reduce((prev, current) => prev + current, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return { average, min, max, length: array.length }
}


function ceaserCipher(string, shiftFactor = 3) {
    const lowerAlphabets = Array.from('abcdefghijklmnopqrstuvwxyz');
    const upperAlphabets = Array.from('abcdefghijklmnopqrstuvwxyz'.toUpperCase());

    function getIndex(currentIndex, shift, alphabetsLength = 26) {
        return (currentIndex + shift + alphabetsLength) % alphabetsLength;
    }

    const encryptedString = string.split('').map((element) => {
        if (lowerAlphabets.includes(element)) {
            let arrIndex = getIndex(lowerAlphabets.indexOf(element), shiftFactor)

            return lowerAlphabets[arrIndex]
        }

        else if (upperAlphabets.includes(element)) {
            let arrIndex = getIndex(upperAlphabets.indexOf(element), shiftFactor)
            return upperAlphabets[arrIndex]
        }
        return element
    });

    return encryptedString.join('')
}


export { capitalize, reverseString, ceaserCipher, analyzeArray, calculator };