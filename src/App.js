
import Header from "./Components/Navbar/Header";
import ContactsContextProvider from "./Context/ContactsContext";
import MainRoutes from "./Routes/MainRoutes";


function App() {
  return (
    <>
    <ContactsContextProvider>
      <Header />
      <MainRoutes />
    </ContactsContextProvider>
        
    </>
  );
}

export default App;
