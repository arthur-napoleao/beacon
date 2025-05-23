import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatMessage {
  type: 'system' | 'user';
  content: string;
}

interface QuickPromptProps {
  text: string;
  onClick: (text: string) => void;
}

function QuickPrompt({ text, onClick }: QuickPromptProps) {
  return (
    <button
      onClick={() => onClick(text)}
      className="px-4 py-2 bg-black/5 rounded-full text-sm hover:bg-black/10 transition-colors"
    >
      {text}
    </button>
  );
}

export function FutureChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'system', content: "Hi Ana! I'm you in 2033, working as a Public Defender. Ask me anything about the job!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Can you share a memorable case?",
    "How do you prepare for court?",
    "What's one thing you'd change about your path?",
    "Where do you see yourself in 5 years?"
  ];

  const predefinedResponses: { [key: string]: string } = {
    "What's a typical day like?": "I start at 7 AM reviewing case files, then head to court by 9 AM. Afternoons are for client meetings and prepping tomorrow's arguments.",
    "How did you become a defender?": "I began as a data intern in college, analyzing public records, then realized I wanted to fight for others—so I went to law school and joined the Public Defender Service.",
    "What was the hardest part of that journey?": "The toughest stretch was juggling part-time work with heavy coursework in law school. Late nights spent drafting briefs and early mornings in clinics taught me resilience.",
    "What skills did you have to build from scratch?": "Trial advocacy was new. I practiced mock trials weekly and shadowed experienced attorneys to master courtroom presence and persuasive argumentation.",
    "Do you still find it challenging today?": "Absolutely—managing high caseloads under tight deadlines never gets easy. But I've learned to set routines and lean on my team for support.",
    "What do you love most about this career?": "Seeing a client's relief when we win a case is indescribable. Making a tangible difference in someone's life keeps me motivated every day.",
    "Any advice for keeping balance and avoiding burnout?": "Set firm boundaries: I block weekends for myself, practice mindfulness, and debrief tough cases with mentors to keep perspective.",
    "Can you share a memorable case?": "One case involved a young student wrongly accused of theft. Through careful investigation, we found security footage proving his innocence. That moment in court when charges were dismissed—his mother crying tears of joy—I'll never forget it.",
    "How do you prepare for court?": "I review case files thoroughly, practice arguments out loud, and visualize different scenarios. I also keep a 'trial notebook' with key points and potential counterarguments.",
    "What's one thing you'd change about your path?": "I wish I'd started networking with practicing attorneys earlier. Their insights would've helped me better prepare for the realities of public defense work.",
    "Where do you see yourself in 5 years?": "I'm working toward becoming a senior public defender, focusing on complex felony cases. I also want to establish a mentorship program for new attorneys."
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { type: 'user', content: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate response
    setTimeout(() => {
      const response = predefinedResponses[inputValue] || "That's an interesting question. Let me think about that and get back to you.";
      setMessages([...newMessages, { type: 'system', content: response }]);
    }, 1000);
  };

  const handlePromptClick = (text: string) => {
    setInputValue(text);
    handleSend();
  };

  return (
    <motion.div 
      className="flex flex-col h-full bg-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation className="border-b" />

      <div className="flex-1 overflow-auto p-4">
        <div className="max-w-screen-sm mx-auto">
          <div className="space-y-4 pb-20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.type === 'user'
                      ? 'bg-[#E0F7FA] text-black'
                      : 'bg-black/5 text-black'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="max-w-screen-sm mx-auto">
          <div className="mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {quickPrompts.map((prompt, index) => (
              <QuickPrompt
                key={index}
                text={prompt}
                onClick={handlePromptClick}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-black/5 rounded-full px-4 py-2 focus:outline-none"
            />
            <Button
              onClick={handleSend}
              className="rounded-full aspect-square"
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}