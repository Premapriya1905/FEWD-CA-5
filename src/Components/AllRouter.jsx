import React from "react";
import {Route, Routes} from "react-router-dom"
import Forms from "../Components/Form";


function AllRouter(){
    return (
        <>
         <Routes>
         <Route path="/" element={<App/>}></Route>

            <Route path="/forms" element={<Forms/>}></Route>
        </Routes>
        </>
       
    )

}

export default AllRouter;