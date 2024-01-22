import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "react-bootstrap";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
