import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='question-answer' >
            <div className='single-answers'  >
                <h3><span>Question-1:</span> How does react work?</h3>
                <p> <span>Answer:</span>React is a JavaScript Library.  All React does is generate a tree of elements. Because React elements are just ordinary JavaScript objects, this happens really quick. When we use the render() method, this happens. Starting at the top and working down, React creates this tree of elements. The virtual dom is how React stores this tree of elements in memory. The virtual DOM must now be synchronized with the real DOM. Making those kinds of DOM modifications is expensive, but React must insert the entire tree into the DOM on the first render.If tree elements change, React generates a new tree of elements relatively rapidly, giving us two trees. There's the old one and there's the new one. It must now synchronize the virtual DOM containing the new tree with the real DOM once more. It would be inefficient to re-render the entire tree because changing the DOM is time-consuming. As a result, react takes the old tree and converts it to the new tree with the fewest operations possible. To accomplish so, it employs a algorithm known as the diffing algorithm.And that is how react actually works.</p>
            </div>
            <div className='single-answers'  >
                <h3><span>Question-2:</span> What are the differences between props vs state?</h3>
                <p> <span>Answer:</span>  Differences between props vs state:
                <li>Data can be passed from one component to another via props. However, the data is only transferred within the component based on the state.</li>
                <li>State and functional components can both use props. State, on the other hand, may only be used with state/class components.</li>
                <li>Props are immutable, meaning it can't be changed. However, state is mutable, which implies it may be changed.</li>
                <li>Props are read-only. State, on the other hand, is both read and write.</li>
                </p>
            </div>
            <div className='single-answers'  >
                <h3><span>Question-3:</span> How does useState work?</h3>
                <p> <span>Answer:</span> React useState() is a hook. We can track state in a function component using the React useState Hook. Data or properties that need to be tracked in an application are referred to as states. We must first import the useState Hook into our component before we can use it. In our function component, we call useState to initialize our state. This function takes the starting state and returns a variable with the current state value as well as another function to update it.</p>
            </div>
        </div>
    );
};

export default Answer;