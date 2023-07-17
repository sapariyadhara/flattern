import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UsersRoutes from "./routes/UsersRoutes";
// import { configureStore } from "./users/redux/store";
import { Provider } from "react-redux";
import { configureStore } from "./users/redux/store";

function App() {
  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UsersRoutes />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
