import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Formulaire from "./components/Formulaire";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [selection, setSelection] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar setSelection={setSelection} />
      <Formulaire selection={selection} />
    </QueryClientProvider>
  );
}

export default App;
