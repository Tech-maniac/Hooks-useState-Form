// Creating an App Component

//Alias/Nickname : Exp (It can be anything)
//./expressions => File name
import Exp from "./expressions";

import './styles.css'

import {firstName,lastName} from "./expressions";

import CheckSignIn from "./conditionals";

import UncontrolledExample from "./carousel";

import Hooks from "./hooks";
import Form from "./forms";
import FormWithFormElement from "./formsWithformElement"

const heading2 = {
    color : "red",
    textAlign : "center",
    backgroundColor : "pink"
}

function App()
{
    return(
        <>

            {/* <Hooks/> */}

            {/* <Form/> */}

            <FormWithFormElement/>

            
            

           

        </>
    )
}

export default App;

