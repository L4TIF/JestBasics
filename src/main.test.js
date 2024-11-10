import { calculator, capitalize, reverseString, ceaserCipher, analyzeArray } from "./main"


describe('capitalize', () => {
    test('should capitalize the first word of the string', () => {
        expect(capitalize('test')).toBe('Test')
    })

})
describe('string reverse', () => {
    test('should reverse the string ', () => {
        expect(reverseString('test')).toBe('tset')
    })
})

describe('calculator', () => {
    test('should add', () => {
        expect(calculator.add(2, 5)).toBe(7);
    })
    test('should subtract', () => {
        expect(calculator.subtract(2, 5)).toBe(-3);
    })
    test('should suttract', () => {
        expect(calculator.subtract(8, 5)).toBe(3);
    })
    test('should multiply', () => {
        expect(calculator.multiply(5, 5)).toBe(25);
    })

    test('should divide', () => {
        expect(calculator.divide(2, 0)).toBeInstanceOf(Error);
    })
    test('should divide', () => {
        expect(calculator.divide(10, 5)).toBe(2);
    })

})

describe('ceaserCipher', () => {
    test('should return `abc`', () => {
        expect(ceaserCipher('xyz', 3)).toBe('abc');
    })

    test('should return `KhOOr`', () => {
        expect(ceaserCipher('HeLLo', 3)).toBe('KhOOr');
    })

    test('should return `Khoor, Zruog!`', () => {
        expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })

})

describe('analize array', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    test('avg to 4', () => {
        expect(object.average).toBe(4)

    })

    test('min to 1', () => {
        expect(object.min).toBe(1)

    })
    test('avg to 8', () => {
        expect(object.max).toBe(8)

    })
    test('avg to 6', () => {
        expect(object.length).toBe(6)

    })


})