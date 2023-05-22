const { getAvatarColor, getDisplayName, formatName } = require('../../utils/profileHelper')

describe('profile helpers', () => {
    it('getAvatarColor returns a random color string', () => {
        const results = []
        for (let i = 0; i < 1000; i++) {
            results.push(getAvatarColor())
        }
        expect(results).toContain('red')
    })
    it('getDisplayName returns the correct avatar initials', () => {
        const first = 'Test'
        const last = 'Dude'
        expect(getDisplayName(first, last)).toBe('TD')
    })
    it('formatName returns the correct capitalized Name', () => {
        const first = 'test'
        expect(formatName(first)).toBe('Test')
    })
})

