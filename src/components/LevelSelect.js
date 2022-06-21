import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { UserContext } from "../index.js";

export default function LevelSelect() {
    let navigate = useNavigate();
    const [ state, dispatch ] = React.useContext(UserContext)

    const createLevels = () => {
        let rows = []
        for (let i = 1; i < 6; i++) {
            rows.push(<tr key={i} className="row">
                <td key={i} className="cell">
                    <div className="level" onClick={() => handleClick(i)}>
                        {i}
                    </div>
                </td>
            </tr>);
        }
        return rows
    }

    const handleClick = (i) => {
        dispatch({ type: "update_series_index", payload: i - 1 });
        navigate("/game");
    }

    return (
        <div className="levels-block">
            <Table hover bordered variant="dark">
                <tbody>
                    {createLevels()}
                </tbody>
            </Table>
        </div>
    );
};
