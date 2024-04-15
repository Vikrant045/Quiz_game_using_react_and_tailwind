import React, {useEffect, useState} from 'react';


function Question({ question,state,dispatch }) {
    
  //   useEffect(() => {
  //     const initialAnswer = state.ans_arr[state.index] || "";
  //    // dispatch({
  //         type: "handle_check",
  //         payload: initialAnswer
  //     });
  // }, [state.index, question, dispatch, state.ans_arr]);


    const handleChange = (e) => {                       // handle change
      
      let newAns =e.target.value;
        console.log(newAns);
       
          dispatch({
            type: "handle_check",
            payload: newAns
        });
       
       
    };

    const handleNextBtn = () => {                        // handle next btn
     
      console.log("Question id",question.id)
     // console.log("Q arr length",question.length)
      console.log("Array of answers",state.ans_arr)
      console.log("ischecke = ",state.isChecked)
     
      
        dispatch({
          type: "handle_next"
      });
      console.log("Array of answers",state.ans_arr)

      
       
    };

    const handleBackBtn = () => {                   //handle back
        dispatch({
            type: "handle_back"
        });
    };

    const handleSubmitBtn = () => {                 // handle submit btn 
         console.log("STATE INDEX  = ",state.index)
         console.log("state.data.data.lengt ",state.data.data.length)
          if(state.index ==state.data.data.length-1){
            dispatch({
                type:"handle_next"
            })
          }
        dispatch({
            type: "handle_submit",
           
        });
        console.log("RESULT",state.result)
        
    };
   
    return (
        <div>
       
        
          {(state.index === question.id) && (
                <div className='mt-16'>
                    <p className='text-3xl font-semibold'>Q {question.id+1}: {question.question}</p>
                    <div>
                        {question.choices.map((option, index) => (
                            <div key={index} className='mt-2 ml-10'>
                                <input
                                    type='radio'
                                    className='w-6 h-6'
                                    name="selected_ans"
                                    value={option}
                                    id={`option-${index}`}  
                                    onChange={handleChange}
                                />
                                <label htmlFor={`option-${index}`} className='text-2xl ml-2'>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className='w-auto px-5 py-10 h-auto mt-24'>
                <div className='py-10 shadow-md shadow-slate-900 px-7 rounded-xl flex justify-between bg-violet-600'>
                    {state.index > 0 ? (
                        <button
                            onClick={handleBackBtn}
                            className='font-semibold border-2 rounded-xl hover:bg-gray-700 hover:text-white transition ease-out duration-500 bg-slate-300 py-2 px-3 text-2xl'
                        >
                            Back
                        </button>
                    ):<button></button>}
                    {state.index == state.data.data.length-1? 
                       <button
                       onClick={handleSubmitBtn}
                       className='font-semibold border-2 rounded-xl hover:bg-gray-700 hover:text-white bg-slate-300 py-2 px-3 text-2xl'
                   >
                       Submit
                   </button>:
                    <button
                    onClick={handleNextBtn}
                    className='font-semibold border-2 rounded-xl hover:bg-gray-700 hover:text-white bg-slate-300 py-2 px-3 text-2xl'
                >
                    Next
                </button>
                   

                    }
                   
                </div>
            </div>

            {!state.isChecked && (<div className='text-2xl font-semibold text-red-600 '> Please Check any answer to proceed next</div>)}
        </div>
    );
}

export default Question;
