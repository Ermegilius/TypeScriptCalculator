/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transform: {
		"^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
	},
};
