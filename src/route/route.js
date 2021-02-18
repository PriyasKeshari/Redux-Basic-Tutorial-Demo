import Login from "../component/login";
import SignUp from "../component/signUp";

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
