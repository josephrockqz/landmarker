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
        // series 2
        [
            {
                latitude: 29.9792,
				longitude: 31.1342,
				name: 'Great Pyramid of Giza',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 43.0896,
				longitude: -79.0849,
				name: 'Niagara Falls',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: -13.1631,
				longitude: -72.5450,
				name: 'Machu Picchu',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 13.4125,
				longitude: 103.8670,
				name: 'Angkor Wat',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 40.8224,
				longitude: 14.4289,
				name: 'Mount Vesuvius',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 11.3493,
				longitude: 142.1996,
				name: 'Mariana Trench',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: -17.9257,
				longitude: 25.8625,
				name: 'Victoria Falls',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 51.1789,
				longitude: -1.8262,
				name: 'Stonehenge',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 41.0086,
				longitude: 28.9802,
				name: 'Hagia Sophia',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 39.9055,
				longitude: 116.3976,
				name: 'Tiananmen Square',
				color: 'black',
                the_bool: false,
            },
        ],
        // series 3
        [
            {
                latitude: 40.6892,
				longitude: -74.0445,
				name: 'Statue of Liberty',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 25.1972,
				longitude: 55.2744,
				name: 'Burj Khalifa',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 46.1914,
				longitude: -122.1956,
				name: 'Mount Saint Helens',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: -33.8568,
				longitude: 151.2153,
				name: 'Sydney Opera House',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 22.1604,
				longitude: -81.1684,
				name: 'Bay of Pigs',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 27.9881,
				longitude: 86.9250,
				name: 'Mount Everest',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 52.5163,
				longitude: 13.3777,
				name: 'Brandenburg Gate',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 31.7054,
				longitude: 35.2024,
				name: 'Bethlehem',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 90.0000,
				longitude: -135.0000,
				name: 'North Pole',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 35.3606,
				longitude: 138.7274,
				name: 'Mount Fuji',
				color: 'black',
                the_bool: false,
            },
        ],
        // series 4
        [
            {
                latitude: 37.9715,
				longitude: 23.7267,
				name: 'Parthenon',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 38.6251,
				longitude: -90.1868,
				name: 'The Gateway Arch',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 63.0692,
				longitude: -151.0070,
				name: 'Mount Denali',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 21.3487,
				longitude: -157.9440,
				name: 'Pearl Harbor',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 25.7402,
				longitude: 32.6014,
				name: 'The Valley of the Kings',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 24.6959,
				longitude: 84.9912,
				name: 'Bodhi tree',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 48.8606,
				longitude: 2.3376,
				name: 'Louvre Museum',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 28.7366,
				longitude: -88.3660,
				name: 'Deepwater Horizon oil spill',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: -90.0000,
				longitude: 45.0000,
				name: 'South Pole',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 45.5149,
				longitude: 25.3672,
				name: 'Bran Castle',
				color: 'black',
                the_bool: false,
            },
        ],
        // series 5
        [
            {
                latitude: 48.8584,
				longitude: 2.2945,
				name: 'Eiffel Tower',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 36.1441,
				longitude: -5.3417,
				name: 'Rock of Gibraltar',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 50.0274,
				longitude: 19.2020,
				name: 'Auschwitz-Birkenau',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 35.6997,
				longitude: 51.3381,
				name: 'Azadi Tower',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: -34.3568,
				longitude: 18.4740,
				name: 'Cape of Good Hope',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 1.264,
				longitude: 103.840,
				name: 'Port of Singapore',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: 32.7523,
				longitude: -79.8747,
				name: 'Fort Sumter',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 38.7985,
				longitude: 22.5456,
				name: 'Thermopylae',
				color: 'black',
                the_bool: false,
            },
            {
                latitude: 38.8895,
				longitude: -77.0353,
				name: 'Washington Monument',
				color: 'black',
                the_bool: true,
            },
            {
                latitude: -24.6273,
				longitude: -70.4044,
				name: 'Paranal Observatory',
				color: 'black',
                the_bool: true,
            },
        ],
	],
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