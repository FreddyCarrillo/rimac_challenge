import { createBrowserRouter } from "react-router-dom";
import VehicleQuotePage from "../features/VehicleQuote/VehicleQuotePage";
import CheckPrivateRoute from "../components/CheckPrivateRoute";
import VehicleCoveragePage from "../features/VehicleCoverage/VehicleCoveragePage";
import VehicleDataPage from "../features/VehicleData/VehicleDataPage";
import Error from "../components/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <VehicleQuotePage />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <CheckPrivateRoute />,
    children: [
      {
        path: "vehicle-data",
        element: <VehicleDataPage />,
        errorElement: <Error />,
      },
      {
        path: "vehicle-coverage",
        element: <VehicleCoveragePage />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default Router;
