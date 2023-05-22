/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (typeof password !== "string") password = String(password);
  if (password.length < 10) return 0;
  /*
  This regular expression is used to find consecutive occurrences of the same alphanumeric character. 
  It captures the character and then checks if it occurs two or more times consecutively, or if it occurs just once.
  */
  const regex = /([a-zA-Z0-9])(\1{2,}|\1)/g;
  const matches = password.match(regex);
  let points = 0;
  matches?.forEach((match) => {
    if (match.length > 2) points += 2;
    else points += 1;
  });
  return points;
}
