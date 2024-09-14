import { useInitStore } from "../../store/initStore";

const VehicleCoveragePage = () => {

  const vehicle = useInitStore(state => state.vehicle);

  return (
    <div>
      <div>
        {
          JSON.stringify(vehicle, null, 2)
        }
      </div>
    </div>
  )
}

export default VehicleCoveragePage;
