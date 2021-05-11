# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* Then it triggers the onClick function that calls the dispatch function.
* Then the useReducer hook gives access to initalState, and then updates that state based on the case.
* After that state is returned to the JSX component TotalDisplay.
* Lastly TotalDisplay shows the total plus 1.
