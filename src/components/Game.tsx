import ResetGame from "./ResetGame";
import bgPolygon from "../assets/bg-polygon.png";

const Game = () => {
  return (
    <main>
      <ResetGame />
      <div className="card-container grid grid-cols-4 gap-6">
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-back h-full bg-primary flex justify-center align-middle"></div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={bgPolygon} alt="Card Front" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;
