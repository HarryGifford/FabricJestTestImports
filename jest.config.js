//@ts-check

/** @type { import("@jest/types").Config.GlobalConfig } */
module.exports = {
    clearMocks: true,
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
        "^.*\\.tsx?$": "ts-jest"
    },
    testPathIgnorePatterns: ["dist", "/build/", "/node_modules/"],
    globals: {
        "ts-jest": {
            packageJson: "package.json"
        }
    }
};
