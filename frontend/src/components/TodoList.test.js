import {Route, Router, Switch} from "react-router-dom";
import TodoList from "./TodoList";
import React from "react";
import {render} from "@testing-library/react";
import { createMemoryHistory } from "history";


describe("componentTest :: Todo", () => {
    test("that only todos with the correct status are displayed", () => {
        // GIVEN
        const history = createMemoryHistory();
        const {queryByText} = render(
            <Router history={history}>
                <Route path={"/board/:status"}>
                    {history.push("/board/open")}
                    <TodoList todos={
                        [
                            {
                                id: "1",
                                description: "note 1",
                                status: "OPEN"
                            },
                            {
                                id: "2",
                                description: "note 2",
                                status: "IN_PROGRESS"
                            }
                        ]
                    }/>
                </Route>
            </Router>)

        // WHEN
        const actual = queryByText(/note 1/i);

        // THEN
        expect(actual).toBeInTheDocument();

    })
})