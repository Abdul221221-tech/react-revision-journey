import {useState} from "react";


const user=[
    { name: "Abdul", age: 20 },
    { name: "Ali", age: 30 },
    { name: "Ahmed", age: 40 },

    
]

export function Challenge() {
    const [userData, setUserData] = useState(user);
    return (
        <div>
            <h1>React State Challenge</h1>
            {userData.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <button onClick={() => {
                    setUserData([...userData, { name: "Sara", age: 25 }]);
                    }}
                    >
                        New User
                    </button>
                </div>

            ))}

        </div>
    )

}

/// derrived state....
export function Challenge1() {
    const [userData, setUserData] = useState(user);
    const userCount = userData.length;  // derived state is a state that is calculated based on other state values. 
    // In this case, userCount is derived from the length of the userData array. Whenever userData changes (e.g., when a new user is added),
    //  userCount will automatically update to reflect the new number of users.
    function calculateAverageAge(data) {
        if (data.length === 0) return 0;
        const totalAge = data.reduce((sum, user) => sum + user.age, 0);
        return totalAge / data.length;
    }
    const averageAge = calculateAverageAge(userData); // derived state for average age  isne function call kiya hai calculateAverageAge ko 
    // jisme userData pass kiya hai aur ye average age calculate krega  ye props wala case hai
    return (
        <div>
            <h1>React State Challenge</h1>
            <p>Total Users: {userCount}</p> // inidtail 3 to calculate arhega jsie hm new user add krenge to ye count bhi update hoga
            <p>Average Age: {averageAge}</p>

            {userData.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>

                    <button onClick={() => {  // add new user
                    setUserData([...userData, { name: "Sara", age: 25 }]);
                    }}
                    >
                        New User
                    </button>
                </div>

            ))}

        </div>
    )

}