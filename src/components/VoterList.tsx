
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Edit, Trash2, Mail, Key } from "lucide-react";

interface Voter {
  id: string;
  name: string;
  email: string;
  voterId: string;
  voterKey: string;
  status: 'active' | 'pending' | 'disabled';
  voteWeight: number;
}

interface VoterListProps {
  voters: Voter[];
}

const VoterList = ({ voters }: VoterListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVoters = voters.filter(voter => 
    voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.voterId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'disabled': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Voter List ({voters.length})</CardTitle>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search voters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredVoters.map((voter) => (
            <div
              key={voter.id}
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">{voter.name}</h3>
                    <Badge className={getStatusColor(voter.status)}>
                      {voter.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>{voter.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-mono">ID: {voter.voterId}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Key className="h-3 w-3" />
                      <span className="font-mono">{voter.voterKey}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-gray-700 dark:text-gray-300">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredVoters.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No voters found matching your search.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoterList;
