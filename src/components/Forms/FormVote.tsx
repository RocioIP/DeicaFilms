import React from 'react';

export default function FormVote(titulo?: any) {
  console.log(titulo);

  return (
    <form className='formVote' action='http://localhost:4000/add' method='POST'>
      <label>Opina sobre la película</label>
      <input type='text' name='titulo' value={titulo} />
      <input name='voto' placeholder='Del 1 al 10' type='number' />
      <label className='select-none'>¿Qué te pareció?</label>
      <textarea name='opinion' cols={25} rows={8} />
      <input type='submit' value='Votar' />
    </form>
  );
}
