import React from 'react';
import Button from 'react-bootstrap/Button';

function Welcome() {
  const showAlert = () => {
    alert("Benvenuto nella mia app React-Bootstrap!");
  };

  return (
    <div className="text-center mt-4">
      <h1>Benvenuto nella mia App!</h1>
      
      <Button variant="primary" onClick={showAlert} className="mt-3">
        Mostra Messaggio di Benvenuto
      </Button>  
    </div>
  );
}

export default Welcome;