module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.js',
        '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/tests/mocks/fileMock.js'
    }
}; 