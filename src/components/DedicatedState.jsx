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

    const countUser = users.length
    const AverageUser = users.reduce((acc, user) => acc + user.age, 0) / users.length
    return (
      <>
        {users.map((user) => (
          <div key={user.name}>
            {user.name}: {user.age}
          </div>
        ))}
        {countUser}--
        {AverageUser}
      </>
    ); 
}

export default DedicatedState;