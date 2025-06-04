
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Vote, Shield, Clock, Users, CheckCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BallotDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  // Mock election data
  const election = {
    id: 1,
    title: "Student Union Presidential Election 2024",
    description: "Choose the next president of the student union who will represent students and lead initiatives for the upcoming academic year.",
    endDate: "2024-03-15",
    totalVotes: 1247,
    totalVoters: 2500,
    blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
    network: "Ethereum Sepolia"
  };

  const candidates = [
    {
      id: "1",
      name: "Sarah Johnson",
      portfolio: "President",
      shortDescription: "Experienced student leader with innovative ideas",
      description: "Sarah has been actively involved in student government for 3 years, serving as class representative and organizing multiple successful campus events. Her platform focuses on improving campus facilities, expanding mental health resources, and creating more opportunities for student engagement.",
      image: "/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png"
    },
    {
      id: "2", 
      name: "Michael Chen",
      portfolio: "President",
      shortDescription: "Tech-savvy advocate for digital innovation",
      description: "Michael brings a fresh perspective with his background in computer science and passion for leveraging technology to improve student life. He advocates for digitizing campus services, creating a student app, and establishing more study spaces with modern technology.",
      image: "/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png"
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      portfolio: "President", 
      shortDescription: "Sustainability champion and community builder",
      description: "Emma has led several environmental initiatives on campus and is committed to making our university more sustainable. Her platform includes implementing green energy solutions, reducing campus waste, and creating more inclusive spaces for all students.",
      image: "/lovable-uploads/267f4da1-9805-49c0-a603-45b49ba1034b.png"
    }
  ];

  const handleSubmitVote = async () => {
    if (!selectedCandidate) return;
    
    setIsSubmitting(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setHasVoted(true);
    }, 3000);
  };

  const handleBack = () => {
    navigate("/voter/dashboard");
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vote Successfully Recorded!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Your vote has been securely recorded on the blockchain and cannot be changed.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Transaction Hash: {election.blockchainHash.slice(0, 20)}...</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleBack} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Blockchain
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button variant="ghost" onClick={handleBack} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Blockchain Secured</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Election Info */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white mb-2">{election.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{election.description}</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium">● Live</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Ends: {election.endDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 text-green-500" />
                <span>{election.totalVotes.toLocaleString()}/{election.totalVoters.toLocaleString()} voted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="h-4 w-4 text-purple-500" />
                <span>{election.network}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voting Form */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
              <Vote className="h-5 w-5" />
              Cast Your Vote
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Select your preferred candidate below. Your vote will be recorded securely on the blockchain.</p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate} className="space-y-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-start space-x-4 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md">
                  <RadioGroupItem value={candidate.id} id={candidate.id} className="mt-2" />
                  <div className="flex-1">
                    <Label htmlFor={candidate.id} className="cursor-pointer">
                      <div className="flex items-start gap-4">
                        <img 
                          src={candidate.image} 
                          alt={candidate.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{candidate.name}</h3>
                            <Badge variant="outline" className="text-xs">{candidate.portfolio}</Badge>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{candidate.shortDescription}</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{candidate.description}</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button 
                onClick={handleSubmitVote}
                disabled={!selectedCandidate || isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Recording Vote on Blockchain...
                  </>
                ) : (
                  <>
                    <Vote className="h-5 w-5 mr-2" />
                    Submit Vote
                  </>
                )}
              </Button>
              {selectedCandidate && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  You are voting for: <span className="font-semibold">{candidates.find(c => c.id === selectedCandidate)?.name}</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BallotDisplay;
