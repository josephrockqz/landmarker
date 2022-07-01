import React from "react";
import { Table } from 'react-bootstrap';
import { UserContext } from "../index.js";

export default function SeriesStats() {
    const [ state, ] = React.useContext(UserContext);

    const toggleUnits = () => {
		switch (state.language) {
            case "English":
                return !state.metricSystemBool ? ' miles' : ' km';
            case "Spanish":
                return !state.metricSystemBool ? ' millas' : ' km';
            case "Italian":
                return !state.metricSystemBool ? ' miglia' : ' km';
            case "Russian":
                return !state.metricSystemBool ? ' мили' : ' км';
            default:
                return !state.metricSystemBool ? ' miles' : ' km';
        }
	};

    const createRows = () => {
        let rows = []
        for (let i = 0; i < state.landmarkIndex; i++) {
            rows.push(<tr key={i} className="row">
                <td key={i} className="stats-cell">
                    <div className="stats-div">
                        <span>{state.landmarks[state.seriesIndex][i].name}: </span>
                        <span>{!state.metricSystemBool ? Math.round(state.seriesDistances[i] * 0.6213711922) : state.seriesDistances[i]} {toggleUnits()}</span>
                    </div>
                </td>
            </tr>);
        }
        return rows
    }

    return (
        <div className="stats-block">
            <Table hover bordered variant="dark">
                <tbody>
                    {createRows()}
                </tbody>
            </Table>
        </div>
    );
};