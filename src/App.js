import {
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <main className="wrapper dark">
      <Outlet />
    </main>
  );
}

export default App;
