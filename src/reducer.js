export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_metricSystemBool":
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
	totalKilometers: 0,
}