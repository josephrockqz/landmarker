export const reducer = (state, action) => {
    switch (action.type) {
        case "add_arc":
            return {
                ...state,
                arcs: action.payload
            }
        case "add_label":
            return {
                ...state,
                labels: action.payload
            }
        case "add_point":
            return {
                ...state,
                points: action.payload
            }
        case "add_ring":
            return {
                ...state,
                rings: action.payload
            }
        case "remove_rings":
            return {
                ...state,
                rings: action.payload
            }
        case "toggle_metric_system_bool":
            return {
                ...state,
                metricSystemBool: !state.metricSystemBool
            }
  
        default:
            return state
    }
}
  
export const initialState = {
    arcs: [],
	labels: [],
	landmarkIndex: 0,
	landmarks: [
        // series 1
        [
            {
                latitude: 27.1751,
				longitude: 78.0421,
				name: 'Taj Mahal',
				color: 'black'
            },
        ],
	],
	metricSystemBool: true,
	nightModeBool: false,
	points: [],
	rings: [],
    seriesIndex: 0,
	totalKilometers: 0,
}