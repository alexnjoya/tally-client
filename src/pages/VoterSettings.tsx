
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VoterSettings = () => {
  const [loginInstructions, setLoginInstructions] = useState("");
  const [voteConfirmation, setVoteConfirmation] = useState("");
  const [afterElection, setAfterElection] = useState("");5

  const steps = [
    { number: "✓", title: "Business structure", status: "completed" },
    { number: "✓", title: "Dates", status: "completed" },
    { number: "✓", title: "Voters", status: "completed" },
    { number: "4", title: "Message", status: "current" },
    { number: "5", title: "Delete", status: "pending" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/app/account-verification" className="mr-4">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Account verification</h1>
          <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">In progress</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.status === 'completed' ? 'bg-green-500 text-white' :
                step.status === 'current' ? 'bg-blue-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step.number}
              </div>
              <span className="font-medium text-gray-900">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">Voters Settings</h2>
          
          <div className="space-y-8">
            {/* Login Instructions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Login Instructions</h3>
              <p className="text-gray-600 mb-4">This is the text that will appear on the election login page.</p>
              <Textarea
                placeholder="Login instructions"
                value={loginInstructions}
                onChange={(e) => setLoginInstructions(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            {/* Vote Confirmation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vote Confirmation</h3>
              <p className="text-gray-600 mb-4">This is the text that your voters will see after successfully submitting their ballot.</p>
              <Textarea
                placeholder="Vote Confirmation"
                value={voteConfirmation}
                onChange={(e) => setVoteConfirmation(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            {/* After Election */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">After Election</h3>
              <p className="text-gray-600 mb-4">
                This is the text that your voters will see when they visit your election after it has 
                ended. You can use this field to post the winners of the election.
              </p>
              <Textarea
                placeholder="After Election"
                value={afterElection}
                onChange={(e) => setAfterElection(e.target.value)}
                className="min-h-[120px]"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-center pt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                Save →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterSettings;
