import { useInitStore } from "../../store/initStore";

const VehicleDataPage = () => {

  const vehicle = useInitStore(state => state.vehicle);

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 120}}>
      <pre>
        {
          JSON.stringify(vehicle, null, 2)
        }
      </pre>
    </div>
  )
}

export default VehicleDataPage;
