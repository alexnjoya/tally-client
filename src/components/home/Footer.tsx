import React from 'react';
import { motion } from 'framer-motion';
import { Vote, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "Security", href: "#security" },
        { name: "Pricing", href: "#pricing" },
        { name: "API", href: "#api" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Status", href: "#status" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@tally.com", href: "mailto:hello@tally.com" },
    { icon: Phone, text: "+233 24 123 4567", href: "tel:+233241234567" },
    { icon: MapPin, text: "University of Ghana, Legon", href: "#" }
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Vote className="h-6 w-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
              </motion.div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Tally
              </h4>
            </div>
            
            <p className="text-gray-500 leading-relaxed max-w-md">
              Pioneering the future of democratic voting through blockchain technology. 
              Secure, transparent, and trustworthy elections for the digital age.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-500 hover:text-blue-600 transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="h-4 w-4 text-blue-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-blue-500 group-hover:text-blue-700 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h5 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors text-sm relative group"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© 2024 Tally. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Developed by{" "}
              <span className="text-blue-500 font-medium">Caleb Shalley</span> & {" "}
              <span className="text-blue-500 font-medium">Alex Njoya</span>
              <span className="mx-2">•</span>
              <span className="text-gray-400">University of Ghana</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;