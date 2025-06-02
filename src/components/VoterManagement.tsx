
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Upload, X, Zap, HelpCircle } from "lucide-react";

const VoterManagement = () => {
  const [isAddVoterOpen, setIsAddVoterOpen] = useState(false);
  const [voterData, setVoterData] = useState({
    name: "",
    voterId: "",
    voterKey: "",
    email: "",
    voteWeight: ""
  });

  const handleAddVoter = () => {
    console.log("Adding voter:", voterData);
    setIsAddVoterOpen(false);
    setVoterData({
      name: "",
      voterId: "",
      voterKey: "",
      email: "",
      voteWeight: ""
    });
  };

  const generateVoterId = () => {
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setVoterData({ ...voterData, voterId: randomId });
  };

  const generateVoterKey = () => {
    const randomKey = Math.random().toString(36).substring(2, 12).toUpperCase();
    setVoterData({ ...voterData, voterKey: randomKey });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Voter Management</span>
          <Dialog open={isAddVoterOpen} onOpenChange={setIsAddVoterOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Voter
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg font-semibold text-white bg-blue-500 px-4 py-2 rounded-t-lg -mx-6 -mt-6 mb-4">
                    Add Voter
                  </DialogTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsAddVoterOpen(false)}
                    className="absolute right-4 top-4 text-white hover:bg-blue-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Name</Label>
                  <Input 
                    placeholder="Voter's Name"
                    value={voterData.name}
                    onChange={(e) => setVoterData({...voterData, name: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Voter ID 
                      <HelpCircle className="h-3 w-3 ml-1 text-gray-400" />
                    </Label>
                    <div className="flex">
                      <Input 
                        placeholder="Voter ID"
                        value={voterData.voterId}
                        onChange={(e) => setVoterData({...voterData, voterId: e.target.value})}
                        className="border-blue-200 focus:border-blue-400 rounded-r-none"
                      />
                      <Button 
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateVoterId}
                        className="rounded-l-none border-l-0 px-2"
                      >
                        <Zap className="h-4 w-4 text-blue-500" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Voter Key 
                      <HelpCircle className="h-3 w-3 ml-1 text-gray-400" />
                    </Label>
                    <div className="flex">
                      <Input 
                        placeholder="Voter Key"
                        value={voterData.voterKey}
                        onChange={(e) => setVoterData({...voterData, voterKey: e.target.value})}
                        className="border-blue-200 focus:border-blue-400 rounded-r-none"
                      />
                      <Button 
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateVoterKey}
                        className="rounded-l-none border-l-0 px-2"
                      >
                        <Zap className="h-4 w-4 text-blue-500" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    Email Address 
                    <HelpCircle className="h-3 w-3 ml-1 text-gray-400" />
                  </Label>
                  <Input 
                    type="email"
                    placeholder="Voter's Email Address"
                    value={voterData.email}
                    onChange={(e) => setVoterData({...voterData, email: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    Vote Weight 
                    <HelpCircle className="h-3 w-3 ml-1 text-gray-400" />
                  </Label>
                  <p className="text-sm text-blue-600 mb-2">
                    Weighted voting is disabled in the <span className="underline cursor-pointer">election settings</span>
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline"
                    onClick={() => setIsAddVoterOpen(false)}
                  >
                    Close
                  </Button>
                  <Button 
                    className="bg-green-500 hover:bg-green-600"
                    onClick={handleAddVoter}
                  >
                    Add Voter
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">No voters added yet</p>
          <p className="text-sm text-gray-500">Add voters individually or import from a file</p>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Import Voters</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoterManagement;
