import ResetGame from "./ResetGame";
import bgPolygon from "../assets/bg-polygon.png";

const Game = () => {
  return (
    <main>
      <ResetGame />
      <div className="card-container flex flex-row">
        <div className="card w-56 h-64 m-5">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 m-5">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 m-5">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;
