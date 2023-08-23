import StackedScreen from "./StackedScreen";
import { Routes,Route } from "react-router-dom";

export default function Index (){
    return(
        <Routes>
            {
                StackedScreen.map((screen,index) => <Route element={screen.component} path={`/${screen.path}`} key={index}/>)
            }
        </Routes>
    )
}