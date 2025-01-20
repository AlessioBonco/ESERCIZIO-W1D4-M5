import React, { useEffect, useState } from 'react';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per errori
  useEffect(() => {
    fetch('/books.json')  // Percorso relativo alla cartella pubblica
      .then((response) => {
        console.log(response);  // Aggiungi questo per vedere cosa ricevi dal server
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false); // Fine del caricamento
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Fine del caricamento anche in caso di errore
      });
  }, []);

  // Mostra il messaggio di caricamento mentre i dati vengono recuperati
  if (loading) {
    return <div>Caricamento dei libri...</div>;
  }

  // Mostra il messaggio di errore se il caricamento fallisce
  if (error) {
    return <div>Errore nel caricamento dei libri: {error.message}</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {books.map((book) => (
        <div className="col" key={book.asin}>
          <div className="card h-100">
            <img src={book.img} alt={book.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">${book.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTheBooks;

