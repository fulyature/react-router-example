import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      {/*app i boşaltmak için; Router yapısını ayrı bir component haline getirdik, burda çağırdık   */}
      <AppRouter />
    </>
  );
}

export default App;
