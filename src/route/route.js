import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";

const routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/signup",
    exact: true,
    component: SignUp,
  },
];
export default routes;
