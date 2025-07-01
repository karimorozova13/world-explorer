interface AlphabetProps {
  selectedLetter: string;
  handleLetterClick: (letter: string) => void;
  handleClear: () => void;
}

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const Alphabet = ({
  selectedLetter,
  handleLetterClick,
  handleClear,
}: AlphabetProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => handleLetterClick(letter)}>
          {letter}
        </button>
      ))}

      {selectedLetter && <button onClick={handleClear}>Clear</button>}
    </div>
  );
};

export default Alphabet;
