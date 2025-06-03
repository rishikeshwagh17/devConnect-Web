import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profiles from "./Components/Profiles";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profiles />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
