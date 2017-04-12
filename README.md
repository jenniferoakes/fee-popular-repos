
# GitHub Repos Assignment Summary

This assignment is designed to gain practice with custom directives. By utilizing these two pieces of Angular will help in learning about how to create intricate user interactions and will help in separating concerns into different functionalities.

This app takes in a GitHub personal access token and a username, and retrieves a list of repositories.

The second part of the assignment is designed to gain practice building custom filters for the data. Filters come into play over large applications to transform data from one format to another. This assignment will help with practicing how to create and use custom filters both for simple data and for arrays.

## Getting Started

Clone this repo, then run an http server in the `src/` directory. Be sure to type in GitHub [personal access token](https://github.com/settings/tokens) to authenticate with GitHub.

## New Terminal Command:

```
git diff `full file name`

```
- This tells you exactly what changed in your files so you can create better commit messages.

## Filter Notes:

```
function sizeFilter() {
  return function doSizeFilter(size) {
    return (size/1000) +'MB';
  };
}

```
- We put a function inside of a filter function because the first function is executed one time when the page loads. The function inside of the function executes as many times as it needs to. Also note, the first argument into a filter function is **ALWAYS** the thing on the left of the pipe, in the HTML.

## Notes:
- ng-repeat only works with arrays

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

April 2017
