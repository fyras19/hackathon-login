import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
