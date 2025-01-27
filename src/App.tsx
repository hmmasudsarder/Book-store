import Navbar from "./components/Header/Navbar";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default App;
