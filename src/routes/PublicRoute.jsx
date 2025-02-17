import URL from "../utils/url-route";

import Main from "../components/share/Main";
import Login from "../components/Authentication/Login";
import Current from "../components/Authentication/Current";
import Register from "../components/Authentication/Register";

const publicRoutes = [
  {
    path: URL.PUBLIC.HOME,
    element: <Main />,
    children: [
      {
        index: true,
        element: <Current />,
      },
      {
        path: URL.AUTH.LOGIN,
        element: <Login />,
      },
      {
        path: URL.AUTH.REGISTER,
        element: <Register />,
      },
    ],
  },
];

export default publicRoutes;
