import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { UserContext } from "../index.js";

export default function LanguageDropdown() {
    const [ state, dispatch ] = useContext(UserContext);

    const handleClick = num =>  {
        switch(num) {
            case 1:
                dispatch({ type: "update_language", payload: "English" });
                return;
            case 2:
                dispatch({ type: "update_language", payload: "Spanish" });
                return;
            case 3:
                dispatch({ type: "update_language", payload: "Italian" });
                return;
            case 4:
                dispatch({ type: "update_language", payload: "Russian" });
                return;
            default:
                return;
        }
    }

    return (
        <Dropdown>
            <Dropdown.Toggle>{state.language}</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleClick(1)}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(2)}>Spanish</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(3)}>Italian</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(4)}>Russian</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}