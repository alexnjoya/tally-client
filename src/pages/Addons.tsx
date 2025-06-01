
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  BarChart3, 
  Mail, 
  Smartphone, 
  Globe, 
  Users, 
  FileText, 
  Clock,
  Star,
  Download
} from "lucide-react";

const Addons = () => {
  const addons = [
    {
      id: 1,
      name: "Advanced Analytics",
      description: "Detailed voting analytics, real-time charts, and voter behavior insights",
      icon: BarChart3,
      price: "Free",
      installed: true,
      popular: true,
      features: ["Real-time voting charts", "Voter demographics", "Turnout analytics", "Export reports"]
    },
    {
      id: 2,
      name: "Multi-Language Support",
      description: "Support for multiple languages to increase accessibility",
      icon: Globe,
      price: "$9.99/month",
      installed: false,
      popular: false,
      features: ["20+ languages", "RTL support", "Auto-translation", "Custom translations"]
    },
    {
      id: 3,
      name: "SMS Notifications",
      description: "Send voting reminders and updates via SMS",
      icon: Smartphone,
      price: "$19.99/month",
      installed: true,
      popular: false,
      features: ["SMS reminders", "Vote confirmations", "Result notifications", "Bulk messaging"]
    },
    {
      id: 4,
      name: "Email Campaigns",
      description: "Automated email campaigns for voter engagement",
      icon: Mail,
      price: "$14.99/month",
      installed: false,
      popular: true,
      features: ["Email templates", "Automated campaigns", "Delivery tracking", "Custom branding"]
    },
    {
      id: 5,
      name: "Enhanced Security",
      description: "Additional security features including biometric verification",
      icon: Shield,
      price: "$29.99/month",
      installed: false,
      popular: true,
      features: ["Biometric auth", "IP restrictions", "Audit logs", "Advanced encryption"]
    },
    {
      id: 6,
      name: "Voter Registration",
      description: "Streamlined voter registration and eligibility verification",
      icon: Users,
      price: "$12.99/month",
      installed: true,
      popular: false,
      features: ["Online registration", "ID verification", "Eligibility checks", "Bulk import"]
    },
    {
      id: 7,
      name: "Compliance Reports",
      description: "Generate compliance and audit reports for institutional requirements",
      icon: FileText,
      price: "$24.99/month",
      installed: false,
      popular: false,
      features: ["Audit trails", "Compliance reports", "Data export", "Legal templates"]
    },
    {
      id: 8,
      name: "Scheduled Elections",
      description: "Schedule and automate recurring elections",
      icon: Clock,
      price: "$8.99/month",
      installed: false,
      popular: false,
      features: ["Auto-scheduling", "Recurring elections", "Calendar integration", "Automated reminders"]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Add-ons</h1>
        <p className="text-gray-600 mt-2">Enhance your voting platform with powerful add-ons</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((addon) => {
          const IconComponent = addon.icon;
          return (
            <Card key={addon.id} className="relative hover:shadow-lg transition-shadow">
              {addon.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{addon.name}</CardTitle>
                      <p className="text-sm font-medium text-green-600">{addon.price}</p>
                    </div>
                  </div>
                  <Switch checked={addon.installed} />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Features:</p>
                  <ul className="space-y-1">
                    {addon.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  {addon.installed ? (
                    <>
                      <Button variant="outline" className="flex-1">
                        Configure
                      </Button>
                      <Button variant="destructive" size="sm">
                        Remove
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Download className="h-4 w-4 mr-2" />
                        Install
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Need a Custom Add-on?</h3>
              <p className="text-gray-600">Contact our development team to create custom functionality for your institution</p>
            </div>
            <Button variant="outline">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Addons;
