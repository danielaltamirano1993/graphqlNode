import { authors } from "../data/authors";
import { books } from "../data/books";
import { reviews } from "../data/reviews";

export const resolvers = {
  Query: {
    authors(_, { query }) {
      if (!query) {
        return authors;
      }
      return authors.filter(author => {
        return author.name.toLowerCase().includes(query.toLowerCase());
      });
    },
    books() {
      return books;
    },
    reviews() {
      return reviews;
    }
  },
  Book: {
    author(parent) {
      return authors.find(author => {
        return author.id === parent.author;
      });
    },
    reviews(parent) {
      return reviews.filter(review => {
        return review.book === parent.id;
      });
    }
  },
  Author: {
    books(parent) {
      return books.filter(book => {
        return book.author === parent.id;
      });
    }
  },
  Review: {
    book(parent) {
      return books.find(book => {
        return book.id === parent.book;
      });
    }
  }
};
