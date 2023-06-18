import "./App.css";
import Head from "./Components/Head"
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import MainContainer from "./Components/MainContainer"
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo"
import Demo2 from "./Components/Demo2";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/demo",
      element:<><Demo/><Demo2/></>
    },
  ]
}]);

function App() {
  return (
    <Provider store={store}>
    <div>
      <RouterProvider router={appRouter} />
      {/* <Body/> */}
    </div>
    </Provider>
  );
}

export default App;
