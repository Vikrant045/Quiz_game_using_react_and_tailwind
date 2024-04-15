import React, {  } from 'react';

function Stepper({ state,dispatch }) {


  return (
    <div className='flex justify-between mt-8'>
      {state.data.data?.map((ques) => (
        <div key={ques.id} className='flex items-center w-full'>
          <div className='relative flex flex-col items-center'>
            {/*state.isChecked == true &&*/ state.index==ques.id ? <div className="h-16 w-16 border-2 rounded-full flex items-center justify-center font-extrabold text-3xl bg-violet-600 text-white">
              {ques.id + 1}
            </div>: <div className="h-16 w-16 border-2 rounded-full flex items-center justify-center font-extrabold text-3xl bg-gray-300 text-black ">
              {ques.id + 1}
            </div>}
            
            <div className='absolute font-medium uppercase top-0 mt-16 ml-3 text-center w-32 text-xl'>
              Question {ques.id + 1}
            </div>
          </div>
          <div className={`border-2 border-violet-600 w-full ${ques.id == state.data.data.length-1? 'hidden':''}`}>

         </div>
        </div>
      ))}
      
    </div>
  );
}

export default Stepper;
