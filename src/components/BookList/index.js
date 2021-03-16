import React from "react";

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const BookTitle = () => {
  return <h1> I Love You to the Moon and Back</h1>;
};

const Author = () => {
  return <h4>Moinul Islam</h4>;
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <BookTitle />
      <Author />
    </article>
  );
};

const BookList = () => {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
