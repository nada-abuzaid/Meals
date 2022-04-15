import React from 'react';

export default function Button({ word, onClickFunction }) {
  return (
    <>
      <button onClick={onClickFunction} className='btn'>{word}</button>
    </>
  );
}
