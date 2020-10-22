import React from "react"
import {render} from "@testing-library/react";
import Todo from "./Todo.js";
import userEvent from "@testing-library/user-event";

test ("description is in document", () => {
    // GIVEN
    const {getByText} = render(<Todo description={"some description"}/>);

    // WHEN
    const actual = getByText(/some description/);

    // THEN
    expect(actual).toBeInTheDocument()
})

test ("status is in document", () => {
    // GIVEN
    const {getByText} = render(<Todo status={"some status"}/> )

    // WHEN
    const actual = getByText(/some status/i);

    // THEN
    expect(actual).toBeInTheDocument();
})

test ("advance is shown for status OPEN", () => {
    // GIVEN
    const {getByText} = render(<Todo status={"OPEN"}/>);

    // WHEN
    const actual = getByText(/advance/i)

    // THEN
    expect(actual).toBeInTheDocument()
})

test ("advance is shown for status IN_PROGRESS", () => {
    // GIVEN
    const {getByText} = render(<Todo status={"IN_PROGRESS"}/>);

    // WHEN
    const actual = getByText(/advance/i);

    // THEN
    expect(actual).toBeInTheDocument();
})

test ("status DONE renders only one button", () => {
    // GIVEN
    const {queryAllByRole} = render(<Todo status={"DONE"}/>);

    // WHEN
    const actual = queryAllByRole("button")

    // THEN
    expect(actual).toHaveLength(1);
})

test ("no buttons are shown when showButtons is false", () => {
    // GIVEN
    const {queryAllByRole} = render(<Todo showButtons={false}/>);

    // WHEN
    const actual = queryAllByRole("button")

    // THEN
    expect(actual).toHaveLength(0);
})

it ("onAdvance is called with the todo’s data on click of advance button", () => {
    // GIVEN
    const handler = jest.fn();
    const {getByTitle} = render(<Todo
        id={"some id"}
        description={"some description"}
        status={"OPEN"} onAdvance={handler}/>);

    // WHEN
    const result = getByTitle("advanceButton")
    userEvent.click(result)

    // THEN
    expect(handler).toHaveBeenCalledWith({"description": "some description", "id": "some id", "status": "OPEN"})
})



