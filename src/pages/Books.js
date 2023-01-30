import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BooksList from "../components/BookList";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { getBooks } from "../helpers/axiosHelpers.js";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    const response = await getBooks();

    setBooks(response.books);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BooksList books={books} fetchBooks={fetchAllBooks} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
