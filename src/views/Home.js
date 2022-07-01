import React, { useContext } from 'react';
import GlobeStart from '../components/GlobeStart.js';
import LevelSelect from '../components/LevelSelect.js';
import NavBar from '../components/NavBar.js';
import { DiGithubBadge } from "react-icons/di";
import { BiCopyright } from "react-icons/bi";
import { UserContext } from "../index.js";

export default function Home() {
    const [ state, ] = useContext(UserContext);

    const linkGithub = () => {
        window.open('https://github.com/josephrockqz/landmarker', '_blank');
    };

    const toggleCreator = () => {
        switch (state.language) {
            case "English":
                return "Creator";
            case "Spanish":
                return "Creador";
            case "Italian":
                return "Creatore";
            case "Russian":
                return "Создатель";
            default:
                return "Creator";
        }
    };

    const toggleInstructions = () => {
        switch (state.language) {
            case "English":
                return "Instructions";
            case "Spanish":
                return "Instrucciones";
            case "Italian":
                return "Istruzioni";
            case "Russian":
                return "инструкции";
            default:
                return "Instructions";
        }
    };

    const toggleP1 = () => {
        switch (state.language) {
            case "English":
                return "Click on the globe where you think each prompted landmark is located. The closer you are, the better your score. Each level has 10 landmarks. Choose one of the 5 levels.";
            case "Spanish":
                return "Haga clic en el globo donde cree que se encuentra cada punto de referencia solicitado. Cuanto más cerca estés, mejor será tu puntuación. Cada nivel tiene 10 puntos de referencia. Elige uno de los 5 niveles.";
            case "Italian":
                return "Fai clic sul globo in cui pensi si trovi ogni punto di riferimento richiesto. Più sei vicino, migliore sarà il tuo punteggio. Ogni livello ha 10 punti di riferimento. Scegli uno dei 5 livelli.";
            case "Russian":
                return "Нажмите на глобус, где, по вашему мнению, находится каждый предложенный ориентир. Чем ближе вы находитесь, тем лучше ваш счет. На каждом уровне есть 10 ориентиров. Выберите один из 5 уровней.";
            default:
                return "Click on the globe where you think each prompted landmark is located. The closer you are, the better your score. Each level has 10 landmarks. Choose one of the 5 levels.";
        }
    };

    const toggleP2 = () => {
        switch (state.language) {
            case "English":
                return "Zoom in and out on globe by scrolling on it. Pan around the globe by pressing on the globe and dragging the mouse.";
            case "Spanish":
                return "Acerque y aleje el globo desplazándose sobre él. Desplácese por el globo presionando sobre el globo y arrastrando el mouse.";
            case "Italian":
                return "Ingrandisci e rimpicciolisci il globo scorrendoci sopra. Fai una panoramica del globo premendo sul globo e trascinando il mouse.";
            case "Russian":
                return "Увеличивайте и уменьшайте глобус, прокручивая его. Перемещайтесь по земному шару, нажимая на глобус и перетаскивая мышь.";
            default:
                return "Zoom in and out on globe by scrolling on it. Pan around the globe by pressing on the globe and dragging the mouse.";
        }
    };

    const toggleP3 = () => {
        switch (state.language) {
            case "English":
                return "Note: personal stats will not be saved if local storage is disabled. Landmarker uses the Haversine formula to calculate the spherical distance between points on the globe.";
            case "Spanish":
                return "Nota: las estadísticas personales no se guardarán si el almacenamiento local está desactivado. Landmarker utiliza la fórmula de Haversine para calcular la distancia esférica entre puntos del globo.";
            case "Italian":
                return "Nota: le statistiche personali non verranno salvate se l'archiviazione locale è disabilitata. Landmarker utilizza la formula di Haversine per calcolare la distanza sferica tra i punti del globo.";
            case "Russian":
                return "Примечание: личная статистика не будет сохранена, если локальное хранилище отключено. Landmarker использует формулу Хаверсина для расчета сферического расстояния между точками на земном шаре.";
            default:
                return "Note: personal stats will not be saved if local storage is disabled. Landmarker uses the Haversine formula to calculate the spherical distance between points on the globe.";
        }
    };

    return (
        <div>
            <NavBar />
                
            <div className="top-of-page">
                <p className="home-text">
                    {toggleP1()}
                </p>
            </div>

            <LevelSelect />

            <h3 className="header-homepage">
                {toggleInstructions()}
            </h3>
            <div className="header-homepage">
                <p className="home-text">
                    {toggleP2()}
                </p>
            </div>

            <GlobeStart />

            <div className="top-of-page">
                <p className="home-text">
                    {toggleP3()}
                </p>
            </div>

            <div className="footer-div">
                <span className="footer-span">
                    {toggleCreator()}: Joseph Rock
                    <DiGithubBadge
                        color="black" 
                        size="20px" 
                        style={{cursor: 'pointer'}} 
                        onClick={() => linkGithub()}
                    />
                </span>
                <span className="footer-span">
                    <BiCopyright />
                    2022
                </span>
            </div>
        </div>
    );
};
