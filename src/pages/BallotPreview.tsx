
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, ExternalLink } from "lucide-react";

const BallotPreview = () => {
  const { id } = useParams();
  
  const ballot = {
    electionTitle: "Student Government Elections 2024",
    positions: [
      {
        title: "President",
        description: "Student Government President - 1 year term",
        maxSelections: 1,
        candidates: [
          { id: 1, name: "Alice Johnson", party: "Progressive Student Union", bio: "3rd year Computer Science student with 2 years SRC experience" },
          { id: 2, name: "Bob Smith", party: "Student First Alliance", bio: "2nd year Business student, former class representative" },
          { id: 3, name: "Carol Davis", party: "Independent", bio: "4th year Engineering student, debate team captain" }
        ]
      },
      {
        title: "Vice President",
        description: "Student Government Vice President - 1 year term",
        maxSelections: 1,
        candidates: [
          { id: 4, name: "David Wilson", party: "Progressive Student Union", bio: "2nd year Arts student, student newspaper editor" },
          { id: 5, name: "Emma Brown", party: "Student First Alliance", bio: "3rd year Science student, environmental club leader" }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/app/preview">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Preview
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ballot Preview</h1>
          <p className="text-gray-600 mt-1">{ballot.electionTitle}</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm font-medium">
          🔍 Preview Mode - This is how the ballot will appear to voters
        </p>
      </div>

      <div className="space-y-8">
        {ballot.positions.map((position, positionIndex) => (
          <Card key={positionIndex} className="border-2">
            <CardHeader className="bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                {position.title}
                <Badge variant="outline">Select {position.maxSelections}</Badge>
              </CardTitle>
              <p className="text-gray-600 text-sm">{position.description}</p>
            </CardHeader>
            <CardContent className="p-6">
              <RadioGroup>
                {position.candidates.map((candidate) => (
                  <div key={candidate.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value={candidate.id.toString()} id={candidate.id.toString()} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={candidate.id.toString()} className="cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{candidate.name}</h4>
                              <p className="text-blue-600 text-sm font-medium">{candidate.party}</p>
                              <p className="text-gray-600 text-sm mt-1">{candidate.bio}</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-3 pt-6 border-t">
        <Button variant="outline" asChild>
          <Link to={`/app/test-vote/${id}`}>
            <ExternalLink className="h-4 w-4 mr-2" />
            Test Vote Experience
          </Link>
        </Button>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Approve Ballot Design
        </Button>
      </div>
    </div>
  );
};

export default BallotPreview;
