import { useState } from "react";

function HookCounterOne() {
    const [count, setCount] = useState(0);

    return (<div>
        <button onClick={() => setCount(count + 1)}>Submit</button>
        <ChildComponent count={count} />
        <ChildComponent2   count={count}/>
    </div>

    );
}

const ChildComponent = ({ count }) => {
    return (
        <div>
            {count}
        </div>

    )
}

const ChildComponent2 = ({ count }) => {
    return (
        <div>
            {count}
        </div>

    )
} 
export default HookCounterOne;
