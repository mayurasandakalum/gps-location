import useGeoLocation from "./hooks/useGeoLocation";

function App() {
  const location = useGeoLocation();

  return (
    <div>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."}
    </div>
  );
}

export default App;
