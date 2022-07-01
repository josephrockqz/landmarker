const landmarkData = require("./data/landmarks.json");
for (let i = 0; i < 5; i++) {
    for (var k = 9; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = landmarkData[i][k];
        landmarkData[i][k] = landmarkData[i][j];
        landmarkData[i][j] = temp;
    }
}

var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
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
    isMobile: isMobile,
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