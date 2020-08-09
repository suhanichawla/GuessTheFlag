import React from 'react'
import { Component } from 'react';


const Answer = ({correct, answer,onNext}) => (
    <div className='flag-answer' style={{marginTop:"20vh",marginLeft:"20px"}}>
      {correct ?
        `Correct!: ${answer}` :
        `Incorrect! Correct Answer: ${answer}`}
      <button onClick={onNext}>NEXT</button>
    </div>
  );

export default Answer;