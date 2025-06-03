
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Upload, X, Image, FileText, Plus, MoreVertical, Trash2, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface BallotQuestion {
  id: string;
  title: string;
  type: 'multiple-choice' | 'single-choice';
  options: string[];
  description?: string;
}

const BallotBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [questions, setQuestions] = useState<BallotQuestion[]>([]);
  const [questionData, setQuestionData] = useState<{
    title: string;
    type: 'multiple-choice' | 'single-choice';
    options: string[];
    description: string;
    image: File | null;
  }>({
    title: "",
    type: "multiple-choice",
    options: [""],
    description: "",
    image: null
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const csvFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setQuestionData({...questionData, image: file});
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

  const addOption = () => {
    setQuestionData({
      ...questionData,
      options: [...questionData.options, ""]
    });
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData({...questionData, options: newOptions});
  };

  const removeOption = (index: number) => {
    const newOptions = questionData.options.filter((_, i) => i !== index);
    setQuestionData({...questionData, options: newOptions});
  };

  const handleSave = () => {
    const newQuestion: BallotQuestion = {
      id: Date.now().toString(),
      title: questionData.title,
      type: questionData.type,
      options: questionData.options.filter(opt => opt.trim() !== ""),
      description: questionData.description
    };
    
    setQuestions([...questions, newQuestion]);
    setIsModalOpen(false);
    setQuestionData({
      title: "",
      type: "multiple-choice",
      options: [""],
      description: "",
      image: null
    });
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black dark:bg-white rounded"></div>
          <h2 className="text-2xl font-bold text-black dark:text-white">Ballot</h2>
        </div>
        <div className="flex items-center space-x-3">
          <Dialog open={isImportModalOpen} onOpenChange={setIsImportModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-black dark:text-white">Import Ballot Questions</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-black dark:text-white mb-3">CSV Format Requirements</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <p>Your CSV file should contain the following columns:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>title</strong> - Question title (required)</li>
                      <li><strong>type</strong> - "multiple-choice" or "single-choice"</li>
                      <li><strong>description</strong> - Question description (optional)</li>
                      <li><strong>option1, option2, option3...</strong> - Answer options</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border">
                      <p className="font-medium text-black dark:text-white mb-2">Example CSV content:</p>
                      <code className="text-xs block whitespace-pre-line text-gray-600 dark:text-gray-400">
title,type,description,option1,option2,option3{'\n'}
"Who should be President?","single-choice","Select one candidate","John Doe","Jane Smith","Bob Johnson"{'\n'}
"Which initiatives do you support?","multiple-choice","Select all that apply","Better Healthcare","Education Reform","Environmental Policy"
                      </code>
                    </div>
                  </div>
                </div>

                <div 
                  className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-colors bg-blue-50/50 dark:bg-blue-900/10"
                  onClick={() => csvFileRef.current?.click()}
                >
                  <input
                    ref={csvFileRef}
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                    className="hidden"
                  />
                  <Upload className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-black dark:text-white font-medium">Click to upload CSV file</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Supports CSV files up to 10MB</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Question
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-black dark:text-white">New Question</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div>
                  <Label className="text-sm font-medium text-black dark:text-white mb-2 block">Question Title</Label>
                  <Input 
                    placeholder="Enter your question..."
                    value={questionData.title}
                    onChange={(e) => setQuestionData({...questionData, title: e.target.value})}
                    className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-black dark:text-white mb-2 block">Question Type</Label>
                  <select 
                    value={questionData.type}
                    onChange={(e) => setQuestionData({...questionData, type: e.target.value as 'multiple-choice' | 'single-choice'})}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                  >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="single-choice">Single Choice</option>
                  </select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-black dark:text-white mb-2 block">Description (Optional)</Label>
                  <Textarea 
                    placeholder="Add additional context or instructions..."
                    value={questionData.description}
                    onChange={(e) => setQuestionData({...questionData, description: e.target.value})}
                    className="min-h-[80px] bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-black dark:text-white mb-2 block">Answer Options</Label>
                  <div className="space-y-3">
                    {questionData.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="flex-1">
                          <Input
                            placeholder={`Option ${index + 1}`}
                            value={option}
                            onChange={(e) => updateOption(index, e.target.value)}
                            className="bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                          />
                        </div>
                        {questionData.options.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeOption(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addOption}
                      className="w-full border-dashed border-gray-300 dark:border-gray-600 text-black dark:text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Option
                    </Button>
                  </div>
                </div>

                <div 
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {questionData.image ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Image className="h-6 w-6 text-green-600" />
                      <span className="text-green-600 font-medium">{questionData.image.name}</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-black dark:text-white">Add attachment (optional)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Click to browse files</p>
                    </>
                  )}
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsModalOpen(false)}
                    className="text-black dark:text-white"
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleSave}
                    disabled={!questionData.title.trim() || questionData.options.filter(opt => opt.trim()).length < 2}
                  >
                    Save Question
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" size="sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Questions List */}
      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((question) => (
            <Card key={question.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-black dark:text-white mb-2">
                      {question.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {question.type === 'multiple-choice' ? 'Multiple Choice' : 'Single Choice'}
                    </Badge>
                    {question.description && (
                      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{question.description}</p>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteQuestion(question.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="options" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="options">Options</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="attachments">Attachments</TabsTrigger>
                  </TabsList>
                  <TabsContent value="options" className="mt-4">
                    <div className="space-y-3">
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                          <span className="text-black dark:text-white">{option}</span>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Option
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Click the "Add Option" button below to add an option to this question
                    </p>
                  </TabsContent>
                  <TabsContent value="attachments" className="mt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No attachments added</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Build Your Ballot</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">Get started by adding your first question.</p>
        </div>
      )}
    </div>
  );
};

export default BallotBuilder;
