const sum = require('./sum')

it('should add 1 + 2 to equal 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
})