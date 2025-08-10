import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stream from "./pages/Stream";
import Network from "./pages/Network";
import Donate from "./pages/Donate";
import ArtistProfile from "./pages/ArtistProfile";
import WorkDetail from "./pages/WorkDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1 container py-8">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/stream" element={<Stream />} />
                <Route path="/network" element={<Network />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/artist/:slug" element={<ArtistProfile />} />
                <Route path="/work/:id" element={<WorkDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
