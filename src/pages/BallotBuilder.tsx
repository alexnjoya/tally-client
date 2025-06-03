
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, X, Image, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const BallotBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    name: "",
    shortDescription: "",
    description: "",
    image: null as File | null
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const csvFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPortfolioData({...portfolioData, image: file});
    }
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("CSV file uploaded:", file.name);
      // Process CSV file here
      setIsImportModalOpen(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCSVUploadClick = () => {
    csvFileRef.current?.click();
  };

  const handleSave = () => {
    console.log("Saving portfolio data:", portfolioData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/app/overview" className="mr-4">
          <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ballot</h1>
          <span className="text-sm text-blue-600 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">In progress</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Build Your Ballot</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">Get started by adding your first question.</p>

        <div className="flex items-center justify-center gap-6">
          <Dialog open={isImportModalOpen} onOpenChange={setIsImportModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-dashed border-gray-300 dark:border-gray-600 px-8 py-4 text-gray-600 dark:text-gray-300">
                <FileText className="h-4 w-4 mr-2" />
                Import
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">Import Ballot Data</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">CSV Format Guide</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-sm">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Your CSV should have these columns:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li><strong>title</strong> - Portfolio title</li>
                      <li><strong>name</strong> - Candidate name</li>
                      <li><strong>short_description</strong> - Brief description</li>
                      <li><strong>description</strong> - Full description</li>
                    </ul>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Example:</p>
                      <code className="text-xs bg-white dark:bg-gray-900 p-2 rounded block">
                        title,name,short_description,description<br/>
                        "President","John Doe","Experienced leader","Full bio here"<br/>
                        "Vice President","Jane Smith","Innovation focused","Full bio here"
                      </code>
                    </div>
                  </div>
                </div>

                <div 
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                  onClick={handleCSVUploadClick}
                >
                  <input
                    ref={csvFileRef}
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                    className="hidden"
                  />
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-300">Upload CSV file here</p>
                  <p className="text-xs text-gray-400 mt-1">Click to browse files</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                Add ballot
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="space-y-6 py-4">
                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">Portfolio</Label>
                  <Input 
                    placeholder="Portfolio"
                    value={portfolioData.title}
                    onChange={(e) => setPortfolioData({...portfolioData, title: e.target.value})}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">name</Label>
                  <Input 
                    placeholder="Name"
                    value={portfolioData.name}
                    onChange={(e) => setPortfolioData({...portfolioData, name: e.target.value})}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <Textarea 
                    placeholder="Short description"
                    value={portfolioData.shortDescription}
                    onChange={(e) => setPortfolioData({...portfolioData, shortDescription: e.target.value})}
                    className="min-h-[80px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <Textarea 
                    placeholder="Description"
                    value={portfolioData.description}
                    onChange={(e) => setPortfolioData({...portfolioData, description: e.target.value})}
                    className="min-h-[120px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div 
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                  onClick={handleUploadClick}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {portfolioData.image ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Image className="h-6 w-6 text-green-600" />
                      <span className="text-green-600 font-medium">{portfolioData.image.name}</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-300">upload image here</p>
                      <p className="text-xs text-gray-400 mt-1">Click to browse files</p>
                    </>
                  )}
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                    onClick={handleSave}
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
