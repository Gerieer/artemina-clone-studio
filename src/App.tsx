import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a query client instance once and reuse it for the lifetime of the app.
const queryClient = new QueryClient();

/**
 * The main application component wraps the app in providers (React Query,
 * TooltipProvider, Toasters) and configures React Router.  When deploying
 * to GitHub Pages under a sub-path (for example `/artemina-clone-studio/`),
 * the `basename` prop must be set on the `BrowserRouter` so that routes
 * resolve correctly.  Vite populates `import.meta.env.BASE_URL` with the
 * configured `base` from `vite.config.ts`, so we can use it here.  Without
 * this, navigating to the project’s home page would render the 404 route on
 * GitHub Pages because the router would think the base path is `/`.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
