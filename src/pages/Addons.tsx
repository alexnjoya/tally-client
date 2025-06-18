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
      price: "GHS9.99/month",
      installed: false,
      popular: false,
      features: ["20+ languages", "RTL support", "Auto-translation", "Custom translations"]
    },
    {
      id: 3,
      name: "SMS Notifications",
      description: "Send voting reminders and updates via SMS",
      icon: Smartphone,
      price: "GHS19.99/month",
      installed: true,
      popular: false,
      features: ["SMS reminders", "Vote confirmations", "Result notifications", "Bulk messaging"]
    },
    {
      id: 4,
      name: "Email Campaigns",
      description: "Automated email campaigns for voter engagement",
      icon: Mail,
      price: "GHS14.99/month",
      installed: false,
      popular: true,
      features: ["Email templates", "Automated campaigns", "Delivery tracking", "Custom branding"]
    },
    {
      id: 5,
      name: "Enhanced Security",
      description: "Additional security features including biometric verification",
      icon: Shield,
      price: "GHS29.99/month",
      installed: false,
      popular: true,
      features: ["Biometric auth", "IP restrictions", "Audit logs", "Advanced encryption"]
    },
    {
      id: 6,
      name: "Voter Registration",
      description: "Streamlined voter registration and eligibility verification",
      icon: Users,
      price: "GHS12.99/month",
      installed: true,
      popular: false,
      features: ["Online registration", "ID verification", "Eligibility checks", "Bulk import"]
    },
    {
      id: 7,
      name: "Compliance Reports",
      description: "Generate compliance and audit reports for institutional requirements",
      icon: FileText,
      price: "GHS24.99/month",
      installed: false,
      popular: false,
      features: ["Audit trails", "Compliance reports", "Data export", "Legal templates"]
    },
    {
      id: 8,
      name: "Scheduled Elections",
      description: "Schedule and automate recurring elections",
      icon: Clock,
      price: "GHS8.99/month",
      installed: false,
      popular: false,
      features: ["Auto-scheduling", "Recurring elections", "Calendar integration", "Automated reminders"]
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Add-ons</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Enhance your voting platform with powerful add-ons</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {addons.map((addon) => {
          const IconComponent = addon.icon;
          return (
            <Card key={addon.id} className="relative hover:shadow-lg transition-shadow">
              {addon.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1">
                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">{addon.name}</CardTitle>
                      <p className="text-xs sm:text-sm font-medium text-green-600">{addon.price}</p>
                    </div>
                  </div>
                  <Switch checked={addon.installed} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm text-gray-600">{addon.description}</p>
                
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-medium">Features:</p>
                  <ul className="space-y-1">
                    {addon.features.map((feature, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  {addon.installed ? (
                    <>
                      <Button variant="outline" className="flex-1 text-xs sm:text-sm">
                        Configure
                      </Button>
                      <Button variant="destructive" size="sm" className="text-xs sm:text-sm">
                        Remove
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Install
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
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
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Need a Custom Add-on?</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Contact our development team to create custom functionality for your institution</p>
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Addons;
