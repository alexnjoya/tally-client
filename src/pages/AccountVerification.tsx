
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AccountVerification = () => {
  const [weightedVoting, setWeightedVoting] = useState(true);
  const [ballotReceipt, setBallotReceipt] = useState(true);
  const [submitConfirmation, setSubmitConfirmation] = useState(true);

  const steps = [
    {
      number: "✓",
      title: "Business structure",
      status: "completed",
      substeps: [
        { title: "Business representative", completed: true },
        { title: "Business details", completed: true }
      ]
    },
    {
      number: "✓", 
      title: "Dates",
      status: "completed"
    },
    {
      number: "3",
      title: "Voters", 
      status: "current"
    },
    {
      number: "4",
      title: "Message",
      status: "pending"
    },
    {
      number: "6",
      title: "Delete",
      status: "pending"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/app/dashboard" className="mr-4">
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
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.status === 'completed' ? 'bg-green-500 text-white' :
                step.status === 'current' ? 'bg-blue-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                {step.substeps && (
                  <div className="mt-2 space-y-1">
                    {step.substeps.map((substep, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">{substep.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weighted Voting */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weighted Voting</h3>
                <p className="text-gray-600">Enabling this option will allow you to assign weights to each voter's vote.</p>
              </div>
              <Switch checked={weightedVoting} onCheckedChange={setWeightedVoting} />
            </div>
          </div>

          {/* Ballot Receipt */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ballot Receipt</h3>
                <p className="text-gray-600">Enabling this option will allow voters to download a receipt that confirms their ballot has been received.</p>
              </div>
              <Switch checked={ballotReceipt} onCheckedChange={setBallotReceipt} />
            </div>
          </div>

          {/* Submit Ballot Confirmation */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Ballot Confirmation</h3>
                <p className="text-gray-600">When this option is enabled, voters will receive an alert when they submit their ballot that allows them to continue or cancel and make additional changes. This can be used as a way to prevent accidental submissions or to require voters to double check their ballot.</p>
              </div>
              <Switch checked={submitConfirmation} onCheckedChange={setSubmitConfirmation} />
            </div>
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
  );
};

export default AccountVerification;
