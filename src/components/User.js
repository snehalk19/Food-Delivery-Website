import { useEffect, useState } from "react";

const User = (props) => {
    
    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(() => {
        //API Call
        const timer = setInterval(()=>{
            console.log('In settimer')
        }, 1000);

        console.log('Use Effect');

        return() => {
            clearInterval(timer);
            console.log('useEffect Return');
        };
    }, []);

    console.log("useEffect Render");

    return (

        <div className="user-card">

            <p>Count: {count}</p>
            <p>Count1: {count1}</p>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact : snehal@123</h4>
        </div>
    );
};

export default User;