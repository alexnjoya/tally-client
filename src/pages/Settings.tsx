
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Bell, Shield, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="h-8 w-8 rounded-lg hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your account preferences</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-sm font-medium">First Name</Label>
                  <Input 
                    id="first-name" 
                    defaultValue="John" 
                    className="bg-background border-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-sm font-medium">Last Name</Label>
                  <Input 
                    id="last-name" 
                    defaultValue="Doe" 
                    className="bg-background border-input"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="john@university.edu" 
                  className="bg-background border-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution" className="text-sm font-medium">Institution</Label>
                <Input 
                  id="institution" 
                  defaultValue="University of Ghana" 
                  className="bg-background border-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="bg-background border-input"
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              
              <Separator className="bg-border" />
              
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified about important updates</p>
                </div>
                <Switch 
                  checked={pushNotifications} 
                  onCheckedChange={setPushNotifications}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
              
              <Separator className="bg-border" />
              
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Election Reminders</p>
                  <p className="text-sm text-muted-foreground">Reminders about upcoming elections</p>
                </div>
                <Switch 
                  defaultChecked 
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-primary" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={twoFactor ? "default" : "secondary"} className="text-xs">
                    {twoFactor ? "Enabled" : "Disabled"}
                  </Badge>
                  <Switch 
                    checked={twoFactor} 
                    onCheckedChange={setTwoFactor}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
              
              <Separator className="bg-border" />
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-primary" />
                  <Label className="text-sm font-medium">Change Password</Label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-xs text-muted-foreground">Current Password</Label>
                    <Input 
                      id="current-password" 
                      type="password" 
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-xs text-muted-foreground">New Password</Label>
                    <Input 
                      id="new-password" 
                      type="password" 
                      className="bg-background border-input"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences Section */}
          <Card className="border-border bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">General Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Language</p>
                  <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                </div>
                <select className="px-3 py-2 bg-background border border-input rounded-md text-sm min-w-[120px]">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              
              <Separator className="bg-border" />
              
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Time Zone</p>
                  <p className="text-sm text-muted-foreground">Set your local time zone</p>
                </div>
                <select className="px-3 py-2 bg-background border border-input rounded-md text-sm min-w-[160px]">
                  <option>GMT (UTC+0)</option>
                  <option>EST (UTC-5)</option>
                  <option>PST (UTC-8)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 pb-8">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-border hover:bg-muted"
              size="lg"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
