export const reducer = (state, action) => {
    switch (action.type) {
        case "add_arc":
            return {
                ...state,
                arcs: [...state.arcs, action.payload]
            };
        case "add_distance":
            console.log("add distance");
            return {
                ...state,
                totalKilometers: state.totalKilometers + action.payload
            };
        case "add_label":
            console.log("add label");
            return {
                ...state,
                labels: [...state.labels, action.payload]
            };
        case "add_point":
            console.log("add point");
            return {
                ...state,
                points: [...state.points, action.payload]
            };
        case "add_ring":
            console.log("add ring");
            return {
                ...state,
                rings: [...state.rings, action.payload]
            };
        case "increment_landmark_index":
            return {
                ...state,
                landmarkIndex: state.landmarkIndex + 1
            };
        case "remove_rings":
            return {
                ...state,
                rings: []
            };
        case "toggle_metric_system_bool":
            return {
                ...state,
                metricSystemBool: !state.metricSystemBool
            };
  
        default:
            return state;
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