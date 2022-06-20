import React from 'react';

import { Table } from 'react-bootstrap';

export default function LevelSelect() {
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
        console.log(i);
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
}
