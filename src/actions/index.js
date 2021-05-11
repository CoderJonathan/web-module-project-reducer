export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_SET = "MEM_SET";
export const MEM_APPLY = "MEM_APPLY";
export const MEM_CLEAR = "MEM_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memorySet = () => {
    return({type:MEM_SET});
}

export const memoryApply = () => {
    return({type:MEM_APPLY});
}

export const memoryClear = () => {
    return({type:MEM_CLEAR});
}