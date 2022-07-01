const landmarkData = require("./data/landmarks.json");
for (let i = 0; i < 5; i++) {
    for (var k = 9; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = landmarkData[i][k];
        landmarkData[i][k] = landmarkData[i][j];
        landmarkData[i][j] = temp;
    }
}

const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
var isSmall = false;
if (width <= 600) {
    isSmall = true;
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "add_arc":
            return {
                ...state,
                arcs: [...state.arcs, action.payload]
            };
        case "add_distance":
            if (state.landmarkIndex === 9) {
                try {
                    let guesses_so_far = localStorage.getItem("num_landmarks_guessed");
                    let total_distance_so_far = localStorage.getItem("total_distance_guessed");
                    if (guesses_so_far == null) {
                        guesses_so_far = 0;
                    } else if (typeof(guesses_so_far) == "string") {
                        guesses_so_far = parseInt(guesses_so_far);
                    }
                    if (total_distance_so_far == null) {
                        total_distance_so_far = 0;
                    } else if (typeof(total_distance_so_far) == "string") {
                        total_distance_so_far = parseInt(total_distance_so_far);
                    }
                    guesses_so_far = guesses_so_far + 10;
                    total_distance_so_far = total_distance_so_far + state.totalKilometers + action.payload;
                    localStorage.setItem("num_landmarks_guessed", guesses_so_far);
                    localStorage.setItem("total_distance_guessed", total_distance_so_far);
                    // update level best score if necessary
                    let best_level_score_so_far = localStorage.getItem(state.seriesIndex);
                    if (best_level_score_so_far == null || best_level_score_so_far === -1) {
                        localStorage.setItem(state.seriesIndex, state.totalKilometers + action.payload);
                    } else if (best_level_score_so_far > state.totalKilometers + action.payload) {
                        localStorage.setItem(state.seriesIndex, state.totalKilometers + action.payload);
                    }
                } catch (e) {
                    console.log(e);
                    console.log("local storage needs to be enabled in order for statistics to be tracked");
                }
            }
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
        case "close_levels_modal":
            return {
                ...state,
                levelsModalBool: false
            };
        case "close_stats_game_modal":
            return {
                ...state,
                statsModalGameBool: false
            };
        case "close_stats_nav_modal":
            return {
                ...state,
                statsModalNavBool: false
            };
        case "increment_landmark_index":
            return {
                ...state,
                landmarkIndex: state.landmarkIndex + 1
            };
        case "open_levels_modal":
            return {
                ...state,
                levelsModalBool: true
            };
        case "open_stats_game_modal":
            return {
                ...state,
                statsModalGameBool: true,
                statsModalNavBool: false
            };
        case "open_stats_nav_modal":
            return {
                ...state,
                statsModalGameBool: false,
                statsModalNavBool: true
            };
        case "remove_rings":
            return {
                ...state,
                rings: []
            };
        case "reset_series":
            return {
                ...state,
                arcs: [],
                labels: [],
                landmarkIndex: 0,
                points: [],
	            rings: [],
                seriesDistances: [],
                totalKilometers: 0
            };
        case "update_borders":
            return {
                ...state,
                bordersBool: !state.bordersBool
            };
        case "update_language":
            return {
                ...state,
                language: action.payload
            };
        case "update_series_index":
            return {
                ...state,
                seriesIndex: action.payload
            };
        case "update_theme":
            return {
                ...state,
                darkModeBool: !state.darkModeBool
            };
        case "update_units":
            return {
                ...state,
                metricSystemBool: !state.metricSystemBool
            };
        
        default:
            return state;
    }
};
  
export const initialState = {
    arcs: [],
    bordersBool: false,
    darkModeBool: false,
    isSmall: isSmall,
	labels: [],
	landmarkIndex: 0,
	landmarks: landmarkData,
    language: 'English',
    levelsModalBool: true,
	metricSystemBool: false,
	nightModeBool: false,
	points: [],
	rings: [],
    seriesDistances: [],
    seriesIndex: -1,
    statsModalGameBool: false,
    statsModalNavBool: false,
	totalKilometers: 0,
};