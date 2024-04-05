---
title: 'ValidPalindrome'
date: '2024-03-12'
parent: programming
author: Brian C
category: leetcode-125
tags: ["LC-125", "validpalindrome"]
---

# Valid Palindrome 

```javascript
const str ='abc';
str.split(""); // [ 'a', 'b', 'c' ]
str.split('').reverse(); // [ 'c', 'b', 'a' ]
str.split('').reverse().join('') // [ 'cba' ]
```
- Instead of thinking of palindromes as words Read the same backwards , think of them as words `where each of half mirrors each other`

- This mirror concept works for words with both even and odd letters.

 - L O L
 - LO LO
 - LO VE -- `not mirror each part`


### PseudoCode Steps:

- Sanitize input string by **removing** non alphanumeric characters( letters and numbers.)
- Create a left(strart index) and right pointer(end index) . Initially at start and end of the input string.
- While left is less than right
- Now if the character at left and right pointer are not equal, return false.

example: 
- `left[0] `,  right[0]means = `right[string.length-1]` 
- **LO LO** , left[0]=L === right[0]=L return `true`
- **LO VE** , left[0]=L === right[0]=E return `false`

[Full Code:](https://github.com/bappasahabapi/Level-1-ProblemSet-div-3-/blob/main/LeetCode_JS_Classic/exercises/LC125_isPalindrome/index.js)


--- 





