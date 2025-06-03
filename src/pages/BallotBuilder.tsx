
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, X, Image, Plus, MoreVertical, Trash2, Vote } from "lucide-react";
import { Link } from "react-router-dom";

interface Candidate {
  id: string;
  name: string;
  portfolio: string;
  shortDescription: string;
  description: string;
  image: File | null;
}

interface Ballot {
  id: string;
  title: string;
  description: string;
  candidates: Candidate[];
  type: 'single-choice' | 'multiple-choice';
}

const BallotBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [ballots, setBallots] = useState<Ballot[]>([]);
  const [ballotData, setBallotData] = useState({
    title: "",
    description: "",
    type: "single-choice" as 'single-choice' | 'multiple-choice',
    candidates: [] as Candidate[]
  });
  const [candidateData, setCandidateData] = useState({
    name: "",
    portfolio: "",
    shortDescription: "",
    description: "",
    image: null as File | null
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const csvFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCandidateData({...candidateData, image: file});
    }
  };

  const addCandidate = () => {
    if (candidateData.name.trim() && candidateData.portfolio.trim()) {
      const newCandidate: Candidate = {
        id: Date.now().toString(),
        ...candidateData
      };
      setBallotData({
        ...ballotData,
        candidates: [...ballotData.candidates, newCandidate]
      });
      setCandidateData({
        name: "",
        portfolio: "",
        shortDescription: "",
        description: "",
        image: null
      });
    }
  };

  const removeCandidate = (id: string) => {
    setBallotData({
      ...ballotData,
      candidates: ballotData.candidates.filter(c => c.id !== id)
    });
  };

  const handleSaveBallot = () => {
    if (ballotData.title.trim() && ballotData.candidates.length >= 2) {
      const newBallot: Ballot = {
        id: Date.now().toString(),
        ...ballotData
      };
      setBallots([...ballots, newBallot]);
      setIsModalOpen(false);
      setBallotData({
        title: "",
        description: "",
        type: "single-choice",
        candidates: []
      });
    }
  };

  const deleteBallot = (id: string) => {
    setBallots(ballots.filter(b => b.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/app/overview" className="mr-4">
          <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black dark:text-white">CSS DEPARTMENT</h1>
          <Badge className="bg-blue-100 text-blue-700 mt-2">Building</Badge>
        </div>
      </div>

      {/* Ballot Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Vote className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white">Ballot Builder</h2>
        </div>
        <div className="flex items-center space-x-3">
          <Dialog open={isImportModalOpen} onOpenChange={setIsImportModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">Import Ballot Data</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="font-semibold text-black dark:text-white mb-3">CSV Format Requirements</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <p>Your CSV file should contain these columns:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>name</strong> - Candidate name (required)</li>
                      <li><strong>portfolio</strong> - Position running for (required)</li>
                      <li><strong>shortDescription</strong> - Brief description</li>
                      <li><strong>description</strong> - Detailed description</li>
                    </ul>
                  </div>
                </div>
                <div 
                  className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 transition-colors bg-blue-50/50 dark:bg-blue-900/10"
                  onClick={() => csvFileRef.current?.click()}
                >
                  <input ref={csvFileRef} type="file" accept=".csv" className="hidden" />
                  <Upload className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-black dark:text-white font-medium">Upload CSV File</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Supports CSV files up to 10MB</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Ballot
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">Create New Ballot</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                {/* Ballot Info */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Ballot Title</Label>
                    <Input 
                      placeholder="e.g., Student Council Elections 2024"
                      value={ballotData.title}
                      onChange={(e) => setBallotData({...ballotData, title: e.target.value})}
                      className="bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Description</Label>
                    <Textarea 
                      placeholder="Brief description of this ballot..."
                      value={ballotData.description}
                      onChange={(e) => setBallotData({...ballotData, description: e.target.value})}
                      className="bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Voting Type</Label>
                    <select 
                      value={ballotData.type}
                      onChange={(e) => setBallotData({...ballotData, type: e.target.value as 'single-choice' | 'multiple-choice'})}
                      className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
                    >
                      <option value="single-choice">Single Choice</option>
                      <option value="multiple-choice">Multiple Choice</option>
                    </select>
                  </div>
                </div>

                {/* Add Candidate Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Add Candidates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Candidate Name</Label>
                      <Input 
                        placeholder="Full name"
                        value={candidateData.name}
                        onChange={(e) => setCandidateData({...candidateData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Portfolio</Label>
                      <Input 
                        placeholder="e.g., President, Vice President"
                        value={candidateData.portfolio}
                        onChange={(e) => setCandidateData({...candidateData, portfolio: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-medium mb-2 block">Short Description</Label>
                      <Input 
                        placeholder="Brief tagline or motto"
                        value={candidateData.shortDescription}
                        onChange={(e) => setCandidateData({...candidateData, shortDescription: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-medium mb-2 block">Description</Label>
                      <Textarea 
                        placeholder="Detailed candidate information..."
                        value={candidateData.description}
                        onChange={(e) => setCandidateData({...candidateData, description: e.target.value})}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-medium mb-2 block">Candidate Photo</Label>
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        {candidateData.image ? (
                          <div className="flex items-center justify-center space-x-2">
                            <Image className="h-5 w-5 text-green-600" />
                            <span className="text-green-600 font-medium">{candidateData.image.name}</span>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p>Upload candidate photo</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={addCandidate}
                    disabled={!candidateData.name.trim() || !candidateData.portfolio.trim()}
                    className="mt-4 bg-blue-500 hover:bg-blue-600"
                  >
                    Add Candidate
                  </Button>
                </div>

                {/* Current Candidates */}
                {ballotData.candidates.length > 0 && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Candidates ({ballotData.candidates.length})</h3>
                    <div className="space-y-3">
                      {ballotData.candidates.map((candidate) => (
                        <div key={candidate.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <div className="font-medium">{candidate.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{candidate.portfolio}</div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeCandidate(candidate.id)}
                            className="text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button 
                    onClick={handleSaveBallot}
                    disabled={!ballotData.title.trim() || ballotData.candidates.length < 2}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Create Ballot
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Ballots Display */}
      {ballots.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ballots.map((ballot) => (
            <Card key={ballot.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-black dark:text-white mb-2">
                      {ballot.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      {ballot.type === 'single-choice' ? 'Single Choice' : 'Multiple Choice'}
                    </Badge>
                    {ballot.description && (
                      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{ballot.description}</p>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteBallot(ballot.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Candidates ({ballot.candidates.length})
                  </div>
                  {ballot.candidates.map((candidate) => (
                    <div key={candidate.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {candidate.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-black dark:text-white">{candidate.name}</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{candidate.portfolio}</div>
                        {candidate.shortDescription && (
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{candidate.shortDescription}</div>
                        )}
                      </div>
                      <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Vote className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Create Your First Ballot</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Start building professional voting ballots with candidates and portfolios.</p>
        </div>
      )}
    </div>
  );
};

export default BallotBuilder;
