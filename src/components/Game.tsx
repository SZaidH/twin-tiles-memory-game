import cardBack from "../assets/card-back.png";
import cardSword from "../assets/card-sword.png";
import cardHammer from "../assets/card-hammer.png";
import cardCoin from "../assets/card-coin.png";
import cardDiamond from "../assets/card-diamond.png";
import ResetGame from "./ResetGame";
import { SortCards } from "../utils/SortCards";
import { useState } from "react";

const Game = () => {
  //Duplicating the cards and shuffling them using the SortCards utility function
  const initialCards: string[] = SortCards([
    ...Array(2).fill([cardSword, cardHammer, cardCoin, cardDiamond]).flat(),
  ]);
  const [cards, setCards] = useState<string[]>(initialCards);
  // State for tracking flip status of cards
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(initialCards.length).fill(false)
  );
  // State for counting the flipped card using their index
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (flipped[index]) return;

    const flippedCards: boolean[] = [...flipped];
    flippedCards[index] = true;

    setFlippedIndices((prev) => [...prev, index]);
    setFlipped(flippedCards);

    if (flippedIndices.length >= 2) {
      const resetFlipped: boolean[] = flippedCards.map((_, index) =>
        index === index || index === flippedIndices[0]
          ? false
          : flippedCards[index]
      );
      setFlipped(resetFlipped);
      setFlippedIndices([]);
    }
  };

  return (
    <main>
      <ResetGame
        cards={cards}
        setCards={setCards}
        setFlipped={setFlipped}
        setFlippedIndices={setFlippedIndices}
      />
      <div className="card-container grid grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="card w-56 h-64 drop-shadow-2xl"
          >
            {!flipped[index] ? (
              <div className="card-back">
                <img src={cardBack} alt="Card Back" />
              </div>
            ) : (
              <div className="card-front">
                <img src={card} alt={`Card ${index}`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Game;
