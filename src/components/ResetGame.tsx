import { SortCards } from "../utils/SortCards";

interface ResetGameProps {
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
  setFlipped: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ResetGame: React.FC<ResetGameProps> = ({
  cards,
  setCards,
  setFlipped,
}) => {
  //Function to shuffle the cards
  const handleReset = () => {
    const resetCards: string[] = [...cards];
    setFlipped(new Array(cards.length).fill(false));
    setCards(SortCards(resetCards));
    console.log("hello");
  };

  return (
    <button
      className="p-2 font-secondary bg-primary text-white text-2xl rounded-md mb-6"
      onClick={handleReset}
    >
      Reset Game
    </button>
  );
};

export default ResetGame;
