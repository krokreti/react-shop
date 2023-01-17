const CapitalizeFirstLetter = (word: string) => {
    const lowerCase = word;
    const firstLetter = lowerCase.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;

    return capitalizedWord;
}

export default CapitalizeFirstLetter;