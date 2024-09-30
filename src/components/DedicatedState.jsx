import { useState } from "react"

// const users = 
export const DedicatedState = () => {
    const [users, setUsers] = useState([
      { name: "John", age: 20 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Alice", age: 35 },
      { name: "Eve", age: 40 },
    ]);

    const HandleCount = () => {
        setCount(() => count + 1)
    }
    return (
      <>
        {users.map((user) => (
          <div key={user.name}>
            {user.name}: {user.age}
          </div>
        ))}
      </>
    ); 
}

export default DedicatedState;