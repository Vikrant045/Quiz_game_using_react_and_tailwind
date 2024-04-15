import React, { useState ,useReducer} from 'react';
import Question from '../Question/Question';
import Stepper from '../Stepper/Stepper';
import Container from '../Container/Container';
import { initialState } from '../state/reducer';
import { reducer } from '../state/reducer';
import { Chart } from "react-google-charts";

function Quiz() {
    const[state,dispatch] = useReducer(reducer,initialState)
    let total_Questions = state.data.data.length;
    let correct_Answers = state.result;
    let wrong_Answers = total_Questions-correct_Answers;
     const data = [
        ["Task", "Your Quiz ScoreCard"],
        ["Wrong Answers", wrong_Answers],
        ["Your Correct Answers", correct_Answers],
        
      ];
      
         const options = {
             title: "Your Result Is Here",
             is3D: true,
             colors: ["#FF0000", "#00FF00"], // Specify red and green colors

                        // Customize the chart title text style
             titleTextStyle: {
               fontSize: 34, // Set title font size
             },
             // Customize the legend text style
             legend: {
               textStyle: {
                 fontSize: 20, // Set legend font size
               },
             },
             // Customize the data label text style
             pieSliceTextStyle: {
               fontSize: 24, // Set data labels font size
             },
           
           };
    
    return (
        <div className='bg-slate-400 w-full h-full'>
            <Container>
                {state.result_msg? <>

                    <Chart
                       chartType="PieChart"
                       data={data}
                       options={options}
                       width={"100%"}
                       height={"400px"}
                     /> 
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
