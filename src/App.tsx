import { BrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
