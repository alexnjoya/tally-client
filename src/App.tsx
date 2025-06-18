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
import Overview from "./pages/Overview";
import VoterManagement from "./components/VoterManagement";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VoterLogin from "./pages/VoterLogin";
import VoterDashboard from "./pages/VoterDashboard";
import BallotDisplay from "./pages/BallotDisplay";
import VotingAnalytics from "./pages/VotingAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <BrowserRouter>
          <SidebarProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/voter-login" element={<VoterLogin />} />
              <Route path="/voter/dashboard" element={<VoterDashboard />} />
              <Route path="/ballot/:id" element={<BallotDisplay />} />
              <Route path="/analytics/:id" element={<VotingAnalytics />} />

              <Route path="/app" element={<Layout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="overview" element={<Overview />} />
                <Route path="election-setup" element={<ElectionSetup />} />
                <Route path="ballot" element={<BallotBuilder />} />
                <Route path="account-verification" element={<AccountVerification />} />
                <Route path="voter-settings" element={<VoterSettings />} />
                <Route path="voter" element={<VoterManagement />} />
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
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
