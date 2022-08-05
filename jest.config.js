module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': "<rootDir>/src/tests/__mocks__/styleMock.js",
    },
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
      ],
      "setupFiles": [
        "<rootDir>/src/tests/setupTests.js"
      ]

  };