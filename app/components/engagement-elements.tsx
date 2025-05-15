'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedCounter } from '@/components/animated-counter';

export function LiveChatButton({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hi there! 👋 How can I help you today?', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');

    // Simulate typing
    setIsTyping(true);

    // Simulate response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I typically respond within 2 hours during business hours. If you'd like to schedule a call, please use the contact form above.",
          isUser: false,
        },
      ]);
    }, 2000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center ${className}`}
        aria-label="Open chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-card border border-border shadow-xl rounded-md overflow-hidden flex flex-col"
          >
            <div className="bg-accent/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-sm font-light">IM</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                </div>
                <div>
                  <h3 className="text-foreground font-light">Chat with Ionut</h3>
                  <p className="text-xs text-muted-foreground">Usually replies in 2 hours</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 p-4 max-h-80 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${message.isUser ? 'ml-auto bg-accent/10 border-accent/20' : 'mr-auto bg-card/80 border-border'} 
                    max-w-[80%] p-3 rounded border`}
                >
                  <p className="text-foreground/90 text-sm font-light">{message.text}</p>
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {message.isUser ? 'Just now' : 'Ionut • Just now'}
                  </p>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mr-auto bg-card/80 border-border max-w-[80%] p-3 rounded border"
                >
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-accent/50 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-accent/50 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-accent/50 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="form-input flex-1"
              />
              <Button
                type="submit"
                className="btn-primary rounded-sm px-3 py-2 h-auto"
                disabled={!inputValue.trim()}
              >
                Send
              </Button>
            </form>
            <div className="px-4 py-2 bg-card/50 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                This is a demo chat. In a real implementation, messages would be saved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ProjectCalculator() {
  const [projectType, setProjectType] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);

  // Project type specific features
  const projectFeatures = {
    landing: [
      {
        id: 'custom-design',
        label: 'Custom Design',
        tooltip: 'Unique design tailored to your brand',
      },
      {
        id: 'responsive',
        label: 'Responsive Design',
        tooltip: 'Optimized for all devices and screen sizes',
      },
      {
        id: 'animations',
        label: 'Animations & Effects',
        tooltip: 'Subtle animations to enhance user experience',
      },
      { id: 'seo', label: 'SEO Optimization', tooltip: 'Basic search engine optimization' },
    ],
    business: [
      {
        id: 'custom-design',
        label: 'Custom Design',
        tooltip: 'Unique design tailored to your brand',
      },
      {
        id: 'cms',
        label: 'Content Management',
        tooltip: 'Easily update your content without coding',
      },
      { id: 'blog', label: 'Blog Section', tooltip: 'Integrated blog for content marketing' },
      {
        id: 'contact-form',
        label: 'Contact Form',
        tooltip: 'Custom form with validation and email notifications',
      },
      { id: 'seo', label: 'SEO Optimization', tooltip: 'Comprehensive search engine optimization' },
      {
        id: 'analytics',
        label: 'Analytics Setup',
        tooltip: 'Track visitor behavior and conversions',
      },
    ],
    mobile: [
      { id: 'ios', label: 'iOS App', tooltip: 'Native app for iPhone and iPad' },
      { id: 'android', label: 'Android App', tooltip: 'Native app for Android devices' },
      {
        id: 'cross-platform',
        label: 'Cross-platform',
        tooltip: 'Single codebase for iOS and Android',
      },
      { id: 'push', label: 'Push Notifications', tooltip: "Send notifications to users' devices" },
      { id: 'offline', label: 'Offline Mode', tooltip: 'App functionality when offline' },
      { id: 'analytics', label: 'Analytics', tooltip: 'Track user behavior and app performance' },
    ],
    webapp: [
      {
        id: 'user-auth',
        label: 'User Authentication',
        tooltip: 'Secure login and user management',
      },
      { id: 'database', label: 'Database Integration', tooltip: 'Store and manage user data' },
      { id: 'api', label: 'API Integration', tooltip: 'Connect with third-party services' },
      { id: 'admin', label: 'Admin Dashboard', tooltip: 'Manage content and users' },
      { id: 'payment', label: 'Payment Processing', tooltip: 'Accept online payments' },
      { id: 'realtime', label: 'Real-time Features', tooltip: 'Live updates and notifications' },
    ],
  };

  const handleCalculate = () => {
    setCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      let basePrice = 0;

      // Base price by project type
      if (projectType === 'landing') basePrice = 2000;
      if (projectType === 'business') basePrice = 5000;
      if (projectType === 'mobile') basePrice = 8000;
      if (projectType === 'webapp') basePrice = 10000;

      // Add feature costs
      let featuresCost = 0;

      // Landing page features
      if (projectType === 'landing') {
        if (features.includes('custom-design')) featuresCost += 1000;
        if (features.includes('responsive')) featuresCost += 500;
        if (features.includes('animations')) featuresCost += 800;
        if (features.includes('seo')) featuresCost += 500;
      }

      // Business website features
      if (projectType === 'business') {
        if (features.includes('custom-design')) featuresCost += 1500;
        if (features.includes('cms')) featuresCost += 1200;
        if (features.includes('blog')) featuresCost += 800;
        if (features.includes('contact-form')) featuresCost += 500;
        if (features.includes('seo')) featuresCost += 1000;
        if (features.includes('analytics')) featuresCost += 500;
      }

      // Mobile app features
      if (projectType === 'mobile') {
        if (features.includes('ios')) featuresCost += 3000;
        if (features.includes('android')) featuresCost += 3000;
        if (features.includes('cross-platform')) featuresCost += 2000;
        if (features.includes('push')) featuresCost += 1000;
        if (features.includes('offline')) featuresCost += 1500;
        if (features.includes('analytics')) featuresCost += 800;
      }

      // Web app features
      if (projectType === 'webapp') {
        if (features.includes('user-auth')) featuresCost += 1500;
        if (features.includes('database')) featuresCost += 2000;
        if (features.includes('api')) featuresCost += 1800;
        if (features.includes('admin')) featuresCost += 2500;
        if (features.includes('payment')) featuresCost += 2000;
        if (features.includes('realtime')) featuresCost += 3000;
      }

      // Timeline multiplier
      let timelineMultiplier = 1;
      if (timeline === 'standard') timelineMultiplier = 1;
      if (timeline === 'rush') timelineMultiplier = 1.25;

      const total = (basePrice + featuresCost) * timelineMultiplier;
      setEstimate(Math.round(total));
      setCalculating(false);
    }, 1000);
  };

  const handleFeatureToggle = (feature: string) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((f) => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  // Reset features when project type changes
  useEffect(() => {
    setFeatures([]);
    setEstimate(null);
  }, [projectType]);

  const buttonClass = (isActive: boolean) =>
    `p-3 text-center text-sm font-light border ${
      isActive ? 'border-accent bg-accent/10' : 'border-border bg-card/50'
    } hover:border-accent/50 transition-colors relative overflow-hidden`;

  return (
    <TooltipProvider>
      <GlassCard className="p-8">
        <h3 className="heading-3 mb-6 text-left">Project Cost Estimator</h3>

        <div className="space-y-8">
          <div>
            <label className="form-label flex items-center gap-2">
              Project Type
              <span className="text-xs text-muted-foreground font-light">(Required)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  id: 'landing',
                  label: 'Landing Page',
                  tooltip: 'A single page website focused on conversion',
                },
                {
                  id: 'business',
                  label: 'Business Website',
                  tooltip: 'Multi-page website for established businesses',
                },
                {
                  id: 'mobile',
                  label: 'Mobile App',
                  tooltip: 'Native or cross-platform mobile application',
                },
                {
                  id: 'webapp',
                  label: 'Web Application',
                  tooltip: 'Complex web app with user accounts and features',
                },
              ].map((type) => (
                <Tooltip key={type.id} content={type.tooltip}>
                  <motion.button
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={buttonClass(projectType === type.id)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type.label}
                    {projectType === type.id && (
                      <motion.div
                        layoutId="selectedProjectType"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                </Tooltip>
              ))}
            </div>
            {projectType && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-xs text-muted-foreground mt-2"
              >
                {projectType === 'landing' && 'Great for lead generation and focused campaigns.'}
                {projectType === 'business' &&
                  'Perfect for showcasing your services and building credibility.'}
                {projectType === 'mobile' && 'Ideal for engaging users on their mobile devices.'}
                {projectType === 'webapp' &&
                  'Perfect for complex functionality and user interactions.'}
              </motion.p>
            )}
          </div>

          {projectType && (
            <div>
              <label className="form-label flex items-center gap-2">
                Features
                <span className="text-xs text-muted-foreground font-light">
                  (Select at least one)
                </span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projectType &&
                  projectFeatures[projectType as keyof typeof projectFeatures].map((feature) => (
                    <Tooltip key={feature.id} content={feature.tooltip}>
                      <motion.button
                        type="button"
                        onClick={() => handleFeatureToggle(feature.id)}
                        className={buttonClass(features.includes(feature.id))}
                        whileTap={{ scale: 0.98 }}
                      >
                        {feature.label}
                        <AnimatePresence>
                          {features.includes(feature.id) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"
                            />
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </Tooltip>
                  ))}
              </div>
              {features.length > 0 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs text-muted-foreground mt-2"
                >
                  {features.length === 1 &&
                    'Good start! Consider adding more features for a complete solution.'}
                  {features.length === 2 && 'Great choices! These features work well together.'}
                  {features.length > 2 &&
                    "Excellent selection! You're building a comprehensive solution."}
                </motion.p>
              )}
            </div>
          )}

          {projectType && (
            <div>
              <label className="form-label flex items-center gap-2">
                Timeline
                <span className="text-xs text-muted-foreground font-light">(Required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: 'standard',
                    label: 'Standard (4-8 weeks)',
                    tooltip: 'Balanced timeline with regular updates',
                  },
                  {
                    id: 'rush',
                    label: 'Rush (2-4 weeks)',
                    tooltip: 'Expedited timeline with priority attention',
                  },
                ].map((option) => (
                  <Tooltip key={option.id} content={option.tooltip}>
                    <motion.button
                      type="button"
                      onClick={() => setTimeline(option.id)}
                      className={buttonClass(timeline === option.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.label}
                      {timeline === option.id && (
                        <motion.div
                          layoutId="selectedTimeline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.button>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}

          {projectType && (
            <div className="pt-4">
              <Button
                onClick={handleCalculate}
                disabled={!projectType || features.length === 0 || !timeline || calculating}
                className="btn-primary rounded-none font-light tracking-wider px-8 py-4 h-auto w-full disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <AnimatePresence mode="wait">
                  {calculating ? (
                    <motion.div
                      key="calculating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-4 w-4 border-2 border-t-transparent rounded-full animate-spin" />
                      <span>Calculating...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="calculate"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Calculate Estimate
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              {!projectType || features.length === 0 || !timeline ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-muted-foreground mt-2 text-left"
                >
                  Please complete all required fields to calculate your estimate
                </motion.p>
              ) : null}
            </div>
          )}

          <AnimatePresence>
            {estimate !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6 p-6 border border-accent/30 bg-accent/10 text-left"
              >
                <p className="text-muted-foreground font-light mb-2">Estimated Project Cost:</p>
                <p className="text-3xl font-light text-foreground">
                  $<AnimatedCounter value={estimate} duration={1} />
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  This is a rough estimate. Contact me for a detailed quote tailored to your
                  specific requirements.
                </p>
                <Button
                  className="btn-primary rounded-none font-light tracking-wider px-6 py-2 h-auto mt-4 group relative overflow-hidden"
                  asChild
                >
                  <a href="#contact">
                    <span className="relative z-10">Get Detailed Quote</span>
                    <span className="absolute inset-0 bg-accent/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                </Button>
                <p className="text-xs text-accent mt-4">
                  ✨ Save this estimate for future reference
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassCard>
    </TooltipProvider>
  );
}
