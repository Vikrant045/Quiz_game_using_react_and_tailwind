import React, { useState ,useReducer} from 'react';
import Question from '../Question/Question';
import Stepper from '../Stepper/Stepper';
import Container from '../Container/Container';
import { initialState } from '../state/reducer';
import { reducer } from '../state/reducer';
function Quiz() {
    const[state,dispatch] = useReducer(reducer,initialState)
    
    
    return (
        <div className='bg-slate-400 w-full h-full'>
            <Container>
                {state.result_msg? <>
                 <p className='text-4xl mt-32 font-semibold'> Your Correct Answers are : {state.result} out  of 5 Questions</p>
                </>:
                
                <>
                <Stepper   state={state}  dispatch={dispatch}/>
                  
                  {/* <p>{console.log(state.data)}</p> */}
                
                 {  state.data.data.map((ques) => (
                    ques.id== state.index? <Question key={ques.id} question={ques} state={state}  dispatch={dispatch}/> : ""
                 ))}
                </>}
               
               
            </Container>
        </div>
    );
}

export default Quiz;
