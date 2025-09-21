// higher order function: takes functions as parameters
// return a function

import { posts } from "./posts.js";

// forEach – Runs a function on each item in the array
posts.forEach((post) => {
  console.log(post);
});

// filter – Keeps items that match a condition, returns array
const filteredPosts = posts.filter((post) => {
  return post.userId === 10;
});
console.log(filteredPosts);

// map – Changes each item in the array, returns array
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

// reduce – Combines all items into one value
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
