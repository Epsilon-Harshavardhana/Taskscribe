import SignUp from "../signup/SignUp";
import LoginForm from "../loginForm/LoginForm";
import Home from "../Home";
const StackedScreen = [
    {
        path: "login",
        component: <LoginForm />
    },
    {
        path: "signup",
        component: <SignUp />,
    },
    {
        path: "home",
        component: <Home />
    }
]

export default StackedScreen