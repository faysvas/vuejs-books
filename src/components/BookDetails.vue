<template>
  <div class="book-details text-center">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">Book Not Found!</div>
    <div v-if="book">
      <Header :book="book" />
      <main>
        <hr />
        <div>
          <img v-bind:alt="book.title | coverAlt" class="book-cover rounded" :src="book.cover" />
        </div>
        <Synopsis :synopsis="book.synopsis" />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Synopsis from "./Synopsis.vue";

import axios from "axios";

export default {
  name: "BookDetails",
  components: {
    Header,
    Synopsis
  },
  data() {
    return {
      loading: false,
      book: null,
      error: null
    };
  },
  watch: {
    // call again the method if the route changes
    $route: () => {
      location.reload();
    }
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        `${this.$apiURI}?orderBy="slug"&equalTo="${this.$route.params.book_slug}"`
      )
      .then(response => {
        for (const book in response.data) {
          this.book = response.data[book];
        }
        this.error = !this.book;
        //this.book = response.data && response.data[0]
      })
      .catch(error => (this.error = error))
      .finally(() => (this.loading = false));
  },
  filters: {
    coverAlt: title => `${title} Cover`
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";

.book-details {
  @include box-shadow;
  margin: 10px;
  border: none;
  background-color: $secondary-color;
  color: $gray;
  padding: 0.5rem 2rem 2rem 2rem;
  .book-cover {
    @include box-shadow;
    margin: 2rem;
  }

  .card-text {
    font-size: 0.85rem;
  }

  hr {
    border-top: 1px solid $divider-color;
  }
}
</style>
