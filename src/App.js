import { RouterProvider } from "react-router-dom";
import router from "./MainLayout/MainLayout";


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
