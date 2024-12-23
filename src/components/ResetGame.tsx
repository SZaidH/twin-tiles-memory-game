import { SortCards } from "../utils/SortCards";

interface ResetGameProps {
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
  setFlipped: React.Dispatch<React.SetStateAction<boolean[]>>;
  setFlippedIndices: React.Dispatch<React.SetStateAction<number[]>>;
  setTurns: React.Dispatch<React.SetStateAction<number>>;
}

const ResetGame: React.FC<ResetGameProps> = ({
  cards,
  setCards,
  setFlipped,
  setFlippedIndices,
  setTurns,
}) => {
  //Function to shuffle the cards
  const handleReset = () => {
    const resetCards: string[] = [...cards];
    setFlipped(new Array(cards.length).fill(false));
    setCards(SortCards(resetCards));
    setFlippedIndices([]);
    setTurns(0);
  };

  return (
    <button
      className="p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl font-secondary bg-primary text-white rounded-md mb-6 sm:mb-8 md:mb-10"
      onClick={handleReset}
    >
      Reset Game
    </button>
  );
};

export default ResetGame;
