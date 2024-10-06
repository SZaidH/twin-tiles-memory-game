import ResetGame from "./ResetGame";
import cardBack from "../assets/card-back.png";
import cardSword from "../assets/card-sword.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cardHammer from "../assets/card-hammer.png";
import cardCoin from "../assets/card-coin.png";
import cardDiamond from "../assets/card-diamond.png";

const Game = () => {
  return (
    <main>
      <ResetGame />
      <div className="card-container grid grid-cols-4 gap-6">
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-back">
            <img src={cardBack} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={cardCoin} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-back">
            <img src={cardBack} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={cardSword} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={cardCoin} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-back">
            <img src={cardBack} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={cardBack} alt="Card Front" />
          </div>
        </div>
        <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-front">
            <img src={cardSword} alt="Card Front" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Game;
