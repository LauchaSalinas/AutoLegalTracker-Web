// Function that transform To Upper Case the first letter of word
const capitalizeFirstLetter = (wordToCapitalize) => {
    return wordToCapitalize[0].toUpperCase() + wordToCapitalize.slice(1);
}

export default capitalizeFirstLetter;