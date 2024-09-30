import { useState } from "react"

export const TestingState = () => {
    const [count, setCount] = useState(0)

    const HandleCount = () => {
        setCount(() => count + 1)
    }
    return (
      <>
        Count Update: {count}
        <h1 className="state">
          <button onClick={HandleCount}> Click Me</button>
        </h1>
        <ChildComponent count={count}></ChildComponent>
      </>
    ); 
}

function ChildComponent(count){
    console.log('Called', count)

}
export default TestingState