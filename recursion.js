/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, len=[], i=0) {
  if (i === words.length) {
    return len[0].length
  }
  if (len.length === 0) {
    len.push(words[0])
  }
  if (words[i].length > len[0].length) {
    len[0] = words[i];
  }
  return longest(words, len, i + 1)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, short=[], i=0) {
  if (str.length === i) return short.join("");

  if (i % 2 === 0) short.push(str[i]);

  return everyOther(str, short, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr.length === i) {
    return -1
  }
  if (arr[i] === val) {
    return i
  }
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverse=[], i=str.length - 1) {
  if (i < 0) {
    return reverse.join("");
  }
  reverse.push(str[i]);
  return revString(str, reverse, i - 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
