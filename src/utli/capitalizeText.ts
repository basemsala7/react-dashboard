export default function capitalizeText(inputText: string) {
  let words = inputText.split(" ");
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let capitalizedText = capitalizedWords.join(" ");
  return capitalizedText;
}
