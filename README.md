# vuejs-books

## Description

vuejs-books is my personal project to learn Vue and other modern web development tools. The objective is to load books through and API and display them in a meaningful way. I'll be adding requirements and updating them as I learn. The goal is to use as many tools/libraries/best code practices etc as possible.

There is a live demo hosted on github pages: https://faysvas.github.io/vuejs-books/#/

### Requirements

#### Book List

Display all available books returned from the API. - **DONE**

-   Synopsis should be truncated at 200 characters. - **DONE**
-   Book's title and cover should link to the book's individual page. - **DONE**
-   Though the upvote functionality is not required, the upvote state should be represented. - **DONE**
-   Implement text search on the books list (for title and synopsis) - Add filter on top - **DONE only for title**
-   Improve UI on mobile
-   Add pagination on the books list - Have a button where user picks how many books he wants to see
-   Use a real book API instead of the small Firebase one currently used

#### Single Book page

-   Display a single book information, highlighting the cover and displaying the full synopsis. - **DONE**
-   The upvote functionality is **not** required, the UI should only reflect if a book has been upvoted yet or not. - **DONE**
-   Upvote funcionality should be implemented. The user should be able to click on the upvote button and the upvote number should be updated in the database.
-   Improve UI on mobile
-   Add a comments section on the book page - Allow user to add comment but not save them anywhere when app closes
    **Important notes:**
-   Add test coverage as you see fit; - **DONE**
-   Add more tests
-   You may use TypeScript instead of plain JS; - **JUST USED JS**
-   Use a CSS pre-processor; - **DONE**
-   Your app must be responsible for all of it's dependencies and they should be installed via `yarn` or `npm install`. The app must run by using either `yarn start` or `npm start`. - **DONE**

## Project installation

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Run your e2e tests

```
npm run e2e-tests
```

### Lint and fix files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
