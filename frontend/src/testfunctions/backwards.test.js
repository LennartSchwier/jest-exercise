import backwards from "./backwards.js"

describe("unit test :: backwards", () => {
    it("returns a reversed string", () => {
        // GIVEN
        const text = "neuefische GmbH";
        // WHEN
        const actual = backwards("neuefische GmbH");
        // THEN
        expect(actual).toBe("HbmG ehcsifeuen");
    })
})