import React from 'react';

function Livro(props) {
  return (
    <div className="livro-card">
      <p>
        <strong>{props.livro.titulo}</strong> — {props.livro.autor} — {props.livro.ano} — <em>{props.livro.genero}</em>
      </p>
    </div>
  );
}

export default Livro;