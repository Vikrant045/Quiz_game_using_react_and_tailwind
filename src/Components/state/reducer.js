import data from "./data"

export const initialState = {
     index:0,
     ans_arr:[],
     data:{data},
     isChecked: false,
     checkError:false,
     checked_ans:"",
     result:0,
     result_msg : false
     
}

export const reducer =(state,action)=>{

    switch(action.type){

        case "handle_next":{                       // next btn case
         
        

           if(state.isChecked){
           
            let existingIndex = state.ans_arr.findIndex((item)=> item.idx== state.index);
            console.log("ex index "+existingIndex)
            if(existingIndex!== -1){
             
                let new_Updt_Arr = state.ans_arr.map((item,id)=> 
                      id==existingIndex? {...item, selected_answer:state.checked_ans}  :item            
            );
               return{
                ...state,    
                index: state.index+1,
                isChecked:false,
               ans_arr: new_Updt_Arr,
               checked_ans:""
               }
            }

            else{
                let new_obj= {
                    idx: state.index,
                    selected_answer: state.checked_ans
                };
                console.log("new obj ", new_obj)
                return{
                    ...state,
                    ans_arr:[...state.ans_arr,new_obj],
                    index: state.index + 1,
                    checkError: false,
                    isChecked: false
                }
            }
           
           }
           else{
            return{
                ...state,
                checkError:true,
            }
           }


        };
        case "handle_back":{                                       // back btn case
            console.log("state.index = ",state.index-1)
             return{
                ...state,
                index: state.index-1,
                checkError:false,
             }

        };
        case "handle_submit":{                    //handle submit
            
           let correct_answers_Count=0;
      console.log("state.data.data.length", state.data.data.length)
        
      for(let ans of state.ans_arr){
         
        const question = data.find(item => item.id == ans.idx);
        if(question){

            if(question.answer == ans.selected_answer){
                correct_answers_Count++;
            }
        }

      }
    

     console.log("Count: ", correct_answers_Count)
         
            return {
                
                ...state,
                
                result:state.result=correct_answers_Count,
                result_msg:state.result_msg=true,
                 
            }
          
        };
        case "handle_check":{               // handle onchange

            console.log("Reducer ans",state.checked_ans)
          
            return{
                ...state,
                checked_ans: action.payload,
                isChecked: state.isChecked=true,
                checkError :false,
            }
        };

        case "set_initial_answer":
            return {
                ...state,
                checked_ans: action.payload,
            };
        default: return state;
    }

}
