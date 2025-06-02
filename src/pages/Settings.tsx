
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Wallet, Shield, Bell, User, Key, Link, Trash2, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [connectedWallet, setConnectedWallet] = useState("");
  const [walletAddress, setWalletAddress] = useState("0x742d35Cc6634C0532925a3b8D84F23AE");
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [apiKey, setApiKey] = useState("tally_sk_test_51234567890abcdef");
  const [showApiKey, setShowApiKey] = useState(false);
  const { toast } = useToast();

  const handleConnectWallet = async (walletType: string) => {
    try {
      // Simulate wallet connection
      setConnectedWallet(walletType);
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${walletType}`,
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDisconnectWallet = () => {
    setConnectedWallet("");
    setWalletAddress("");
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected successfully.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Copied to clipboard",
    });
  };

  const generateNewApiKey = () => {
    const newKey = `tally_sk_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setApiKey(newKey);
    toast({
      title: "New API Key Generated",
      description: "Your new API key has been generated successfully.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and blockchain connections</p>
      </div>

      {/* Blockchain Wallet Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Blockchain Wallet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {connectedWallet ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">{connectedWallet} Connected</p>
                    <p className="text-sm text-green-700">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(walletAddress)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDisconnectWallet}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Network</p>
                  <p className="text-lg">Ethereum Mainnet</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Balance</p>
                  <p className="text-lg">2.45 ETH</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">Connect your blockchain wallet to participate in elections</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  onClick={() => handleConnectWallet("MetaMask")}
                  className="flex items-center gap-2 h-12"
                  variant="outline"
                >
                  <Wallet className="h-5 w-5" />
                  MetaMask
                </Button>
                <Button
                  onClick={() => handleConnectWallet("WalletConnect")}
                  className="flex items-center gap-2 h-12"
                  variant="outline"
                >
                  <Link className="h-5 w-5" />
                  WalletConnect
                </Button>
                <Button
                  onClick={() => handleConnectWallet("Coinbase Wallet")}
                  className="flex items-center gap-2 h-12"
                  variant="outline"
                >
                  <Wallet className="h-5 w-5" />
                  Coinbase
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="api-key" className="text-base font-medium">API Key</Label>
              <Badge variant="secondary">Development</Badge>
            </div>
            <div className="flex gap-2">
              <Input
                id="api-key"
                value={showApiKey ? apiKey : apiKey.replace(/./g, "•")}
                readOnly
                className="font-mono"
              />
              <Button
                variant="outline"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? "Hide" : "Show"}
              </Button>
              <Button
                variant="outline"
                onClick={() => copyToClipboard(apiKey)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="destructive" onClick={generateNewApiKey}>
              <Key className="h-4 w-4 mr-2" />
              Regenerate API Key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Election Notifications</p>
              <p className="text-sm text-gray-600">Get notified about election updates</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Blockchain Confirmations</p>
              <p className="text-sm text-gray-600">Receive transaction confirmation alerts</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Security Alerts</p>
              <p className="text-sm text-gray-600">Get notified of security-related events</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" defaultValue="John" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" defaultValue="Doe" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@university.edu" />
          </div>
          <div>
            <Label htmlFor="institution">Institution</Label>
            <Input id="institution" defaultValue="University of Ghana" />
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
