<template>
  <div>
    <b-card no-body class="overflow-hidden book">
      <b-row no-gutters>
        <b-col order="3" order-md="1" md="3" cols="5">
          <router-link :to="{ name: 'book', params: { book_slug: book.slug } }">
            <b-card-img
              fluid
              v-bind:alt="book.title | coverAlt"
              thumbnail
              rounded
              :src="book.cover"
              class="d-none d-md-block book-cover"
            ></b-card-img>
          </router-link>
        </b-col>
        <b-col order="1" order-md="2" md="8" cols="10">
          <b-card-body>
            <h2>
              <router-link
                :to="{ name: 'book', params: { book_slug: book.slug }}"
              >{{ index + 1 }}. {{ book.title }}</router-link>
            </h2>
            <div>
              <span class="author">{{ book.author }}</span>
            </div>
            <b-card-text>
              {{
              book.synopsis | truncate
              }}
            </b-card-text>

            <Upvotes :upvoted="book.upvoted" :upvotes="book.upvotes" />
          </b-card-body>
        </b-col>
        <b-col order="2" order-md="3" md="1" cols="2">
          <Rating :rating="book.rating" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Upvotes from "./Upvotes.vue";
import Rating from "./Rating.vue";

export default {
  name: "Book",
  props: {
    book: Object,
    index: Number
  },
  components: {
    Upvotes,
    Rating
  },
  filters: {
    truncate: value =>
      value.length > 200 ? value.substring(0, 197) + "..." : value,
    coverAlt: title => `${title} Cover`
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";
.book-cover {
  width: 120px;
  @include center;
  @include box-shadow;
}

.card {
  margin: 10px;
  border: none;
  background-color: $secondary-color;
  @include box-shadow;
  color: $gray;

  .card-text {
    font-size: 0.85rem;
  }
  h2 {
    margin-bottom: 0;
    font-size: 1.5rem;
  }
  .author {
    font-size: 0.9rem;
    @include highlight;
  }

  a {
    color: $gray;
  }

  p {
    margin-top: 15px;
  }
}
</style>
