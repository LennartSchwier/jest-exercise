import shoutThem from "./shoutThem"

describe ("unit test :: shoutThem", () => {
    it ("returns array items with upper case and exclamation marks", () => {
        // GIVEN
        const array = ["foo","bar","baz"];
        // WHEN
        const actual = shoutThem(array);
        // THEN
        expect(actual).toEqual(["FOO!!","BAR!!","BAZ!!"])
    })
})