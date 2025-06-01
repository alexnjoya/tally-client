
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ElectionSetup = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">New Election</h1>
        <p className="text-gray-600">Set up your election details</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
              Title
            </Label>
            <Input
              id="title"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
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
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <div className="mt-2">
                <Input type="time" defaultValue="09:41" />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
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
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <div className="mt-2">
                <Input type="time" defaultValue="09:41" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
              <span className="mr-2">New Election</span>
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionSetup;
