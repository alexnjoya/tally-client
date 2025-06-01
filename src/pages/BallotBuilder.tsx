
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, X } from "lucide-react";
import { Link } from "react-router-dom";

const BallotBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    name: "",
    shortDescription: "",
    description: ""
  });

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/app/dashboard" className="mr-4">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ballot</h1>
          <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">In progress</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Your Ballot</h2>
        <p className="text-lg text-gray-600 mb-12">Get started by adding your first question.</p>

        <div className="flex items-center justify-center gap-6">
          <Button variant="outline" className="border-2 border-dashed border-gray-300 px-8 py-4 text-gray-600">
            import
          </Button>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                Add ballot
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg font-semibold">Portfolio</DialogTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">Portfolio</Label>
                  <Input 
                    placeholder="Portfolio"
                    value={portfolioData.title}
                    onChange={(e) => setPortfolioData({...portfolioData, title: e.target.value})}
                  />
                </div>

                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">name</Label>
                  <Input 
                    placeholder="Name"
                    value={portfolioData.name}
                    onChange={(e) => setPortfolioData({...portfolioData, name: e.target.value})}
                  />
                </div>

                <div>
                  <Textarea 
                    placeholder="Short description"
                    value={portfolioData.shortDescription}
                    onChange={(e) => setPortfolioData({...portfolioData, shortDescription: e.target.value})}
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <Textarea 
                    placeholder="Description"
                    value={portfolioData.description}
                    onChange={(e) => setPortfolioData({...portfolioData, description: e.target.value})}
                    className="min-h-[120px]"
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">upload image here</p>
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Save →
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default BallotBuilder;
