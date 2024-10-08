import cardBack from "../assets/card-back.png";
import cardSword from "../assets/card-sword.png";
import cardHammer from "../assets/card-hammer.png";
import cardCoin from "../assets/card-coin.png";
import cardDiamond from "../assets/card-diamond.png";
import ResetGame from "./ResetGame";
import { SortCards } from "../utils/SortCards";
import { useEffect, useState } from "react";

const Game = () => {
  const [cards, setCards] = useState<string[]>([
    cardSword,
    cardHammer,
    cardCoin,
    cardDiamond,
  ]);

  useEffect(() => {
    const initialCards: string[] = [...cards, ...cards];
    const sortedCards: string[] = SortCards(initialCards);
    setCards(sortedCards);
  }, []);

  return (
    <main>
      <ResetGame cards={cards} setCards={setCards} />
      <div className="card-container grid grid-cols-4 gap-6">
        {/* <div className="card w-56 h-64 drop-shadow-2xl">
          <div className="card-back">
            <img src={cardBack} alt="Card Back" />
          </div>
        </div> */}
        {cards.map((card, index) => (
          <div key={index} className="card w-56 h-64 drop-shadow-2xl">
            <div className="card-front">
              <img src={card} alt={`Card ${index}`} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Game;
