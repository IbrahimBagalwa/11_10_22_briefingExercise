/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function cntRbt(ls) {
  /**
   *  returns the count of occurrences of the letter "R" in the string ls.
   * It uses the match function with the regular expression /R/g
   * to find all matches and then retrieves the length of the resulting array to get the count
   */
  return ls.match(/R/g).length;
}
