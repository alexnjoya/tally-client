
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Upload, X, Zap, HelpCircle, Users } from "lucide-react";
import VoterList from "./VoterList";

interface Voter {
  id: string;
  name: string;
  email: string;
  voterId: string;
  voterKey: string;
  status: 'active' | 'pending' | 'disabled';
  voteWeight: number;
}

const VoterManagement = () => {
  const [isAddVoterOpen, setIsAddVoterOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [voters, setVoters] = useState<Voter[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      voterId: "VID001",
      voterKey: "VK001ABC",
      status: "active",
      voteWeight: 1
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      voterId: "VID002",
      voterKey: "VK002DEF",
      status: "pending",
      voteWeight: 1
    }
  ]);
  
  const [voterData, setVoterData] = useState({
    name: "",
    voterId: "",
    voterKey: "",
    email: "",
    voteWeight: "1"
  });

  const handleAddVoter = () => {
    if (!voterData.name || !voterData.email || !voterData.voterId || !voterData.voterKey) {
      alert("Please fill in all required fields");
      return;
    }

    const newVoter: Voter = {
      id: Date.now().toString(),
      name: voterData.name,
      email: voterData.email,
      voterId: voterData.voterId,
      voterKey: voterData.voterKey,
      status: "active",
      voteWeight: parseInt(voterData.voteWeight) || 1
    };

    setVoters([...voters, newVoter]);
    setIsAddVoterOpen(false);
    setVoterData({
      name: "",
      voterId: "",
      voterKey: "",
      email: "",
      voteWeight: "1"
    });
  };

  const generateVoterId = () => {
    const randomId = "VID" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setVoterData({ ...voterData, voterId: randomId });
  };

  const generateVoterKey = () => {
    const randomKey = "VK" + Math.random().toString(36).substring(2, 10).toUpperCase();
    setVoterData({ ...voterData, voterKey: randomKey });
  };

  const handleImportVoters = () => {
    console.log("Import voters functionality");
    setIsImportOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Voter Management</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage voters for your election</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={isImportOpen} onOpenChange={setIsImportOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Import Voters</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">Import Voters</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Drop your CSV file here or click to browse
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Maximum file size: 10MB
                  </p>
                  <Button>Choose File</Button>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">CSV Format Requirements:</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    Your CSV file should include the following columns:
                  </p>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 list-disc list-inside space-y-1">
                    <li><strong>name</strong> - Voter's full name</li>
                    <li><strong>email</strong> - Voter's email address</li>
                    <li><strong>voter_id</strong> - Unique voter ID (optional, will be generated if empty)</li>
                    <li><strong>voter_key</strong> - Unique voter key (optional, will be generated if empty)</li>
                  </ul>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsImportOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleImportVoters}>
                    Import Voters
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddVoterOpen} onOpenChange={setIsAddVoterOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Voter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-center justify-between mb-4">
                  <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add Voter
                  </DialogTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsAddVoterOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900 dark:text-white">
                    Name *
                  </Label>
                  <Input 
                    placeholder="Voter's Name"
                    value={voterData.name}
                    onChange={(e) => setVoterData({...voterData, name: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                      Voter ID *
                      <HelpCircle className="h-3 w-3 text-gray-400" />
                    </Label>
                    <div className="flex">
                      <Input 
                        placeholder="Voter ID"
                        value={voterData.voterId}
                        onChange={(e) => setVoterData({...voterData, voterId: e.target.value})}
                        className="rounded-r-none"
                      />
                      <Button 
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateVoterId}
                        className="rounded-l-none border-l-0 px-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
                      >
                        <Zap className="h-4 w-4 text-blue-600" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                      Voter Key *
                      <HelpCircle className="h-3 w-3 text-gray-400" />
                    </Label>
                    <div className="flex">
                      <Input 
                        placeholder="Voter Key"
                        value={voterData.voterKey}
                        onChange={(e) => setVoterData({...voterData, voterKey: e.target.value})}
                        className="rounded-r-none"
                      />
                      <Button 
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateVoterKey}
                        className="rounded-l-none border-l-0 px-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
                      >
                        <Zap className="h-4 w-4 text-blue-600" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                    Email Address *
                    <HelpCircle className="h-3 w-3 text-gray-400" />
                  </Label>
                  <Input 
                    type="email"
                    placeholder="voter@example.com"
                    value={voterData.email}
                    onChange={(e) => setVoterData({...voterData, email: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1">
                    Vote Weight
                    <HelpCircle className="h-3 w-3 text-gray-400" />
                  </Label>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    Weighted voting is disabled in the <span className="underline cursor-pointer">election settings</span>
                  </p>
                  <Input 
                    type="number"
                    placeholder="1"
                    value={voterData.voteWeight}
                    onChange={(e) => setVoterData({...voterData, voteWeight: e.target.value})}
                    disabled
                    className="w-20"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setIsAddVoterOpen(false)}
                  >
                    Close
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleAddVoter}
                  >
                    Add Voter
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {voters.length === 0 ? (
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="py-16">
            <div className="text-center">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No voters added yet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Add voters individually or import them from a CSV file to get started.
              </p>
              <div className="flex justify-center gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsImportOpen(true)}
                  className="flex items-center space-x-2"
                >
                  <Upload className="h-4 w-4" />
                  <span>Import Voters</span>
                </Button>
                <Button 
                  onClick={() => setIsAddVoterOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Voter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <VoterList voters={voters} />
      )}
    </div>
  );
};

export default VoterManagement;
