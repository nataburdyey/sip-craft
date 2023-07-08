import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Error,
  Cocktail,
  Landing,
  Newsletter,
  SinglePageError
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
        element: <Landing />,
      },
      {
        path: "cocktail/:id",
        error: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />
      },
      {
        path: "newsletter",
        action: newsletterAction,
        element: <Newsletter />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  },
  {
    path: "/about",
    element: <About />
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
