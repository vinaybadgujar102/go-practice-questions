export const findAnagrams = (target, candidates) => {
  const normalizedTarget = target.toLowerCase();
  const sortedTarget = normalizedTarget.split("").sort().join("");

  const result = [];

  for (const word of candidates) {
    const normalizedWord = word.toLowerCase();

    // A word is not its own anagram
    if (normalizedWord === normalizedTarget) {
      continue;
    }

    const sortedWord = normalizedWord.split("").sort().join("");

    if (sortedWord === sortedTarget) {
      result.push(word);
    }
  }

  return result;
};