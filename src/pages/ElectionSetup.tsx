
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const ElectionSetup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startTime, setStartTime] = useState("09:41");
  const [endTime, setEndTime] = useState("09:41");
  const [weightedVoting, setWeightedVoting] = useState(false);
  const [ballotReceipt, setBallotReceipt] = useState(false);
  const [submitConfirmation, setSubmitConfirmation] = useState(false);
  const [loginInstructions, setLoginInstructions] = useState("");
  const [voteConfirmation, setVoteConfirmation] = useState("");
  const [afterElection, setAfterElection] = useState("");

  const steps = [
    { number: 1, title: "General", status: completedSteps.includes(1) ? "completed" : currentStep === 1 ? "current" : "pending" },
    { number: 2, title: "Dates", status: completedSteps.includes(2) ? "completed" : currentStep === 2 ? "current" : "pending" },
    { number: 3, title: "Message", status: completedSteps.includes(4) ? "completed" : currentStep === 4 ? "current" : "pending" },
    { number: 4, title: "Results", status: completedSteps.includes(5) ? "completed" : currentStep === 5 ? "current" : "pending" },
    { number: 5, title: "Delete", status: completedSteps.includes(6) ? "completed" : currentStep === 6 ? "current" : "pending" }
  ];

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">General</h2>
            <div>
              <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Organization Election 1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter election description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px] w-full"
              />
              <p className="text-sm text-gray-500 mt-2">Max Length: 5,000 characters. (5000 remaining)</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Election Date</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Jun 10, 2024</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="mt-2">
                  <Input 
                    type="time" 
                    value={startTime} 
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Jun 10, 2024</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <div className="mt-2">
                  <Input 
                    type="time" 
                    value={endTime} 
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Voters Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Login Instructions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">This is the text that will appear on the election login page.</p>
                <Textarea
                  placeholder="Login instructions"
                  value={loginInstructions}
                  onChange={(e) => setLoginInstructions(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Vote Confirmation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">This is the text that your voters will see after successfully submitting their ballot.</p>
                <Textarea
                  placeholder="Vote Confirmation"
                  value={voteConfirmation}
                  onChange={(e) => setVoteConfirmation(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">After Election</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
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
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Results</h2>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">Results settings will be configured here. This section will contain options for how election results are displayed and shared.</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Election</h2>
            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-gray-900 dark:text-white mb-4">
                Are you sure you want to delete this election? This action is not reversible.
                Please contact support if you need to make a change to an election that 
                has already launched.
              </p>
              <Button variant="destructive" className="w-full">
                Delete Election
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/app/dashboard')}
          className="mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Election</h1>
          <span className="text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">In progress</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Steps */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleStepClick(step.number)}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step.status === 'completed' ? 'bg-green-500 text-white' :
                  step.status === 'current' ? 'bg-blue-600 text-white' :
                  'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  {step.status === 'completed' ? <Check className="h-4 w-4" /> : step.number}
                </div>
                <span className={`font-medium transition-colors ${
                  step.status === 'current' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-[#2a2a2a] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 5 ? (
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Save →
                </Button>
              ) : (
                <Button 
                  onClick={() => navigate('/app/dashboard')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Complete Setup
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionSetup;
