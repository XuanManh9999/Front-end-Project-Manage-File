import { useRoutes } from "react-router-dom";
import publicRoutes from "./PublicRoute";
import { useEffect } from "react";

const PublicRoute = ({ element }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   document.querySelector("body").style.overflowY = "auto";
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // });
  // if (isLoading) {
  //   // Có thể thêm một loading spinner ở đây nếu cần
  //   return <SpinLoading />;
  // }
  return element;
};

const AppRoutes = () => {
  const routes = [
    ...publicRoutes.map((route) => ({
      ...route,
      element: <PublicRoute element={route.element} />,
    })),
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [routes]);

  return useRoutes(routes);
};

export default AppRoutes;
