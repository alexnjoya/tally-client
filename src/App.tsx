
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ElectionSetup from "./pages/ElectionSetup";
import BallotBuilder from "./pages/BallotBuilder";
import AccountVerification from "./pages/AccountVerification";
import VoterSettings from "./pages/VoterSettings";
import Settings from "./pages/Settings";
import Preview from "./pages/Preview";
import Addons from "./pages/Addons";
import Launch from "./pages/Launch";
import Index from "./pages/Index";
import ElectionDetail from "./pages/ElectionDetail";
import BallotPreview from "./pages/BallotPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/app" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="election-setup" element={<ElectionSetup />} />
              <Route path="ballot" element={<BallotBuilder />} />
              <Route path="account-verification" element={<AccountVerification />} />
              <Route path="voter-settings" element={<VoterSettings />} />
              <Route path="settings" element={<Settings />} />
              <Route path="preview" element={<Preview />} />
              <Route path="addons" element={<Addons />} />
              <Route path="launch" element={<Launch />} />
              <Route path="election/:id" element={<ElectionDetail />} />
              <Route path="ballot-preview/:id" element={<BallotPreview />} />
              <Route path="analytics/:id" element={<Dashboard />} />
              <Route path="test-vote/:id" element={<BallotPreview />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
