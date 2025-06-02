
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VoterSettings = () => {
  const navigate = useNavigate();
  const [loginInstructions, setLoginInstructions] = useState("");
  const [voteConfirmation, setVoteConfirmation] = useState("");
  const [afterElection, setAfterElection] = useState("");

  const steps = [
    { number: "✓", title: "Business structure", status: "completed" },
    { number: "✓", title: "Dates", status: "completed" },
    { number: "✓", title: "Voters", status: "completed" },
    { number: "4", title: "Message", status: "current" },
    { number: "5", title: "Delete", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="h-8 w-8 rounded-lg hover:bg-muted flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Account verification</h1>
            <span className="text-xs sm:text-sm text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
              In progress
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Sidebar - Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step.status === 'completed' ? 'bg-green-500 text-white' :
                  step.status === 'current' ? 'bg-primary text-primary-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {step.number}
                </div>
                <span className={`font-medium ${
                  step.status === 'current' ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8">Voters Settings</h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Login Instructions */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Login Instructions</h3>
                <p className="text-sm text-muted-foreground">This is the text that will appear on the election login page.</p>
                <Textarea
                  placeholder="Login instructions"
                  value={loginInstructions}
                  onChange={(e) => setLoginInstructions(e.target.value)}
                  className="min-h-[100px] bg-card border-border resize-none"
                />
              </div>

              {/* Vote Confirmation */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Vote Confirmation</h3>
                <p className="text-sm text-muted-foreground">This is the text that your voters will see after successfully submitting their ballot.</p>
                <Textarea
                  placeholder="Vote Confirmation"
                  value={voteConfirmation}
                  onChange={(e) => setVoteConfirmation(e.target.value)}
                  className="min-h-[100px] bg-card border-border resize-none"
                />
              </div>

              {/* After Election */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">After Election</h3>
                <p className="text-sm text-muted-foreground">
                  This is the text that your voters will see when they visit your election after it has 
                  ended. You can use this field to post the winners of the election.
                </p>
                <Textarea
                  placeholder="After Election"
                  value={afterElection}
                  onChange={(e) => setAfterElection(e.target.value)}
                  className="min-h-[120px] bg-card border-border resize-none"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-center pt-6">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8" size="lg">
                  Save →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterSettings;
