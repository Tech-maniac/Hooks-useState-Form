import { useState } from "react";

const Hooks =()=>{

    // const state = useState();
    // console.log(state);

    const [count,setCounting] = useState(0);
    //console.log(state);


    //Array Destructing : 
    //const names = ["john","jenny","xyz"];

    //const [name1,name2,name3] = names;

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);

    // let name1 = names[0];
    // let name2 = names[1];
    // let name3 = names[2];

    //console.log(name2);


// let count = 5;

    const IncreaseNumber = () =>{
        //count++;
        setCounting(count + 1);

        console.log("Count is : "+count);
    }

    return(
        <>
            <h1> The count is : {count} </h1>
            <button onClick={IncreaseNumber}>Click me</button>
        </>
    )
}

export default Hooks;
