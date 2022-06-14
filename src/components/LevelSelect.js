import React from 'react';

import { Table } from 'react-bootstrap';

class LevelSelect extends React.Component {
    createLevels() {
        let rows = []
        for (let i = 1; i < 6; i++) {
            rows.push(<tr key={i} className="row">
                <td key={i} className="cell">
                    <div className="level" onClick={() => this.handleClick(i)}>
                        {i}
                    </div>
                </td>
            </tr>);
        }
        return rows
    }

    handleClick(i) {
        console.log(i);
    }

    render() {
        return (
            <div className="levels-block">
                <Table hover bordered variant="dark">
                    <tbody>
                        {this.createLevels()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default LevelSelect;