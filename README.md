# Javascript Revision- 08

## Stack and Heap Memory in JavaScript

- **Description**: Understanding the differences between stack (for primitive types and call stack) and heap (for object storage) memory.
- **Snippet**:

```javascript
let x = 10; // stored in stack memory
let person = { name: "Alice" }; // stored in heap memory
```

## JS Hashing

- **Description**: Concept of converting data (like objects) into a unique value.

## String Padding

- **Description**: Adding padding to the start or end of a string.
- **Snippet**:

```javascript
let str = "5";
console.log(str.padStart(3, "0")); // Output: '005'
```

## Local Storage vs Session Storage

- **Description**: Web storage solutions. Local Storage persists until cleared, Session Storage lasts for a session.
- **Snippet**:

```javascript
localStorage.setItem("name", "Alice");
sessionStorage.setItem("tempData", "12345");
```

## Optional Chaining

- **Description**: A safer way to access nested properties of an object without checking if each reference in the chain is valid.
- **Snippet**:

```javascript
let user = {};
console.log(user?.address?.street); // Output: undefined (without errors)
```

## Working with Dates and Times

- **Description**: JavaScript's `Date` object and its methods.
- **Snippet**:

```javascript
let now = new Date();
console.log(now.getFullYear());
```

## Pattern Matching and Searching

- **Description**: Find patterns within strings or replace substrings.
- **Snippet**:

```javascript
let phrase = "I love JavaScript!";
let regex = /love/;
console.log(phrase.search(regex)); // Output: 2
```

## String Manipulation with Regex

- **Description**: Advanced string operations using regular expressions.
- **Snippet**:

```javascript
let newText = "Hello, world!".replace(/world/, "JavaScript");
console.log(newText); // Output: "Hello, JavaScript!"
```

## Lazy Loading of Assets

- **Description**: Deferring the loading of non-critical resources to increase performance.

## Browser Caching

- **Description**: Storing web page resource files (CSS, JS) locally to reduce server requests.

---
