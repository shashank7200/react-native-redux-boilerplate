// Local imports
import * as types from './../actionTypes';

//Import the sample data
import Data from './../../instructions.json';
 
export function getData(){
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: types.DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
}