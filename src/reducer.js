export const reducer = (state, action) => {
    switch (action.type) {
        case "add_arc":
            return {
                ...state,
                arcs: [...state.arcs, action.payload]
            };
        case "add_distance":
            return {
                ...state,
                seriesDistances: [...state.seriesDistances, action.payload],
                totalKilometers: state.totalKilometers + action.payload
            };
        case "add_label":
            return {
                ...state,
                labels: [...state.labels, action.payload]
            };
        case "add_point":
            return {
                ...state,
                points: [...state.points, action.payload]
            };
        case "add_ring":
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
        case "update_series_index":
            return {
                ...state,
                seriesIndex: action.payload
            }
  
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
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 41.8902,
				longitude: 12.4922,
				name: 'Colosseum',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 20.6843,
				longitude: -88.5678,
				name: 'Chichen Itza',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 55.7520,
				longitude: 37.6175,
				name: 'Kremlin',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: -3.0674,
				longitude: 37.3556,
				name: 'Mount Kilimanjaro',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: -18.2871,
				longitude: 147.6992,
				name: 'Great Barrier Reef',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: -22.9519,
				longitude: -43.2105,
				name: 'Christ the Redeemer',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 36.0566,
				longitude: -112.1251,
				name: 'Grand Canyon',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 21.3891,
				longitude: 39.8579,
				name: 'Mecca',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: -55.9833,
				longitude: -67.2667,
				name: 'Cape Horn',
				color: 'black',
                the_bool: false,
            },
        ],
	],
	metricSystemBool: true,
	nightModeBool: false,
	points: [],
	rings: [],
    seriesDistances: [],
    seriesIndex: -1,
	totalKilometers: 0,
}