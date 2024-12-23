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
  // State for counting player turns
  const [turns, setTurns] = useState<number>(0);
  // State for storing correct guesses
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);

  const handleCardClick = (index: number) => {
    if (flipped[index]) return;

    // Flips the selected card
    const flippedCards: boolean[] = [...flipped];
    flippedCards[index] = true;
    setFlipped(flippedCards);

    // Adds the card index to the flippedIndices array
    const cardIndices: number[] = [...flippedIndices, index];
    setFlippedIndices(cardIndices);

    if (cardIndices.length === 2) {
      const [firstIndex, secondIndex] = cardIndices;

      // Check if the two flipped cards match
      if (cards[firstIndex] === cards[secondIndex]) {
        setFlippedIndices([]);
        setCorrectGuesses((prev) => prev + 1);

        if (correctGuesses + 1 === cards.length / 2) {
          setTimeout(() => {
            setFlipped(new Array(cards.length).fill(false));
            setCards(SortCards(initialCards));
            setFlippedIndices([]);
            setTurns(0);
            setCorrectGuesses(0);
          }, 2000);
        }
      } else {
        setTimeout(() => {
          setTurns((prev) => prev + 1);
          const resetFlipped: boolean[] = [...flippedCards];
          resetFlipped[firstIndex] = false;
          resetFlipped[secondIndex] = false;
          setFlipped(resetFlipped);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <main className="p-4">
      <section className="flex flex-wrap justify-between items-center mb-4">
        <h3 className="font-secondary text-primary text-lg sm:text-xl md:text-2xl p-2">
          Turns: <span className="text-white">{turns}</span>
        </h3>

        <ResetGame
          cards={cards}
          setCards={setCards}
          setFlipped={setFlipped}
          setFlippedIndices={setFlippedIndices}
          setTurns={setTurns}
        />
      </section>
      <div className="card-container grid grid-cols-3 gap-4 md:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="card w-32 h-40 sm:w-48 sm:h-56 md:w-56 md:h-64 drop-shadow-2xl cursor-pointer"
          >
            {!flipped[index] ? (
              <div className="card-back">
                <img
                  className="rounded-md object-cover w-full h-full"
                  src={cardBack}
                  alt="Card Back"
                />
              </div>
            ) : (
              <div className="card-front">
                <img
                  className="rounded-md object-cover w-full h-full"
                  src={card}
                  alt={`Card ${index}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Game;
