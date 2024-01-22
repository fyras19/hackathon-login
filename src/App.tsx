import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomNavbar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
