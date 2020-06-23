# vuejs-books

## Description

Display all available books returned from the API. - **DONE**

-   Synopsis should be truncated at 200 characters. - **DONE**
-   Book's title and cover should link to the book's individual page. - **DONE**
-   Though the upvote functionality is not required, the upvote state should be represented. - **DONE**

![Books list](./images/books-list.png 'Books list')

## Book page

Display a single book information, highlighting the cover and displaying the full synopsis. - **DONE**

![Book page](./images/book.png 'Book page')

The upvote functionality is **not** required, the UI should only reflect if a book has been upvoted yet or not. - **DONE**
For this question, you **don't** have to replicate the example screens above, feel free to implement any design that you'd like.

**Important notes:**

-   Add test coverage as you see fit; - **DONE**
-   You may use TypeScript instead of plain JS; - **JUST USED JS**
-   Use a CSS pre-processor; - **DONE**
-   Your app must be responsible for all of it's dependencies and they should be installed via `yarn` or `npm install`. The app must run by using either `yarn start` or `npm start`. - **DONE**

#### Bonus

-   Implement text search on the books list (for title and synopsis) - Add filter on top - **DONE only for title**
-   Add pagination on the books list - Have a button where user picks how many books he wants to see
-   Add a comments section on the book page - Allow user to add comment but not save them anywhere when app closes

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
