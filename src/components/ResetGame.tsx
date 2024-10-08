import { SortCards } from "../utils/SortCards";

interface ResetGameProps {
  cards: string[];
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
}

const ResetGame: React.FC<ResetGameProps> = ({ cards, setCards }) => {
  //Function to shuffle the cards
  const handleReset = () => {
    const resetCards = [...cards];
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
