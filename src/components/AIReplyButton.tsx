import React from 'react';
import { useState } from 'react';

const AIReplyButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = async () => {
    setIsLoading(true);
    try {
      // Get active tab to communicate with content script
      const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
      
      // Send message to content script to generate AI reply
      const response = await chrome.tabs.sendMessage(tab.id!, {
        action: "generateAIReply"
      });

      if (!response?.success) {
        throw new Error('Failed to generate AI reply');
      }
    } catch (error) {
      console.error('AI Reply error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
      disabled={isLoading}
    >
      {isLoading ? 'Generating...' : 'AI Reply'}
    </button>
  );
};

export default AIReplyButton;
