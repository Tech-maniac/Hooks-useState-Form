import { useState } from "react";

const FormWithFormElement =()=>{

    const [fullName,setFullName] = useState({
        fName : "",
        lName : ""
    });


    const inputElement=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue)=>{
            console.log(preValue);

            if(name == "fName"){
                return{
                    fName : value,
                    lName : preValue.lName
                }
            }
            else if(name == "lName")
            {
                return{
                    fName : preValue.fName,
                    lName : value
                }
            }




        })


        
    }

    const onSubmiting =(event)=>{

        event.preventDefault();

    }

    return(
        <>
            <form onSubmit={onSubmiting}>
                <h2> Hi : {fullName.fName} {fullName.lName} </h2>
                <input type="text" name="fName" placeholder="Enter your first name : " onChange={inputElement} />
                <input type="text" name="lName" placeholder="Enter your last name : " onChange={inputElement} />
                <button type="submit"> Click here </button>
            </form>
        </>
    )
}

export default FormWithFormElement;