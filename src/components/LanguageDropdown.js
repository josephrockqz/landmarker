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

    const toggleEnglish = () => {
        switch (state.language) {
            case "English":
                return "English";
            case "Spanish":
                return "Inglés";
            case "Italian":
                return "Inglese";
            case "Russian":
                return "Английский";
        }
    };

    const toggleSpanish = () => {
        switch (state.language) {
            case "English":
                return "Spanish";
            case "Spanish":
                return "Español";
            case "Italian":
                return "Spagnolo";
            case "Russian":
                return "испанский";
        }
    };

    const toggleItalian = () => {
        switch (state.language) {
            case "English":
                return "Italian";
            case "Spanish":
                return "Italiano";
            case "Italian":
                return "Italiano";
            case "Russian":
                return "итальянский";
        }
    };

    const toggleRussian = () => {
        switch (state.language) {
            case "English":
                return "Russian";
            case "Spanish":
                return "Ruso";
            case "Italian":
                return "Russo";
            case "Russian":
                return "Русский";
        }
    };

    return (
        <Dropdown>
            <Dropdown.Toggle>{state.language}</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleClick(1)}>{toggleEnglish()}</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(2)}>{toggleSpanish()}</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(3)}>{toggleItalian()}</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(4)}>{toggleRussian()}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}