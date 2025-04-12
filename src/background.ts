// Background service worker for AI reply extension
import { generateAIReply } from './services/aiService';

interface MessageResponse {
  success: boolean;
  reply?: string;
}

chrome.runtime.onMessage.addListener(
  (request: {action: string, prompt?: string}, _sender: chrome.runtime.MessageSender, sendResponse: (response?: MessageResponse) => void) => {
    if (request.action === "generateAIReply") {
      generateAIReply(request.prompt || '')
        .then((reply: string) => {
          sendResponse({ success: true, reply });
        })
        .catch((error: Error) => {
          console.error('AI generation error:', error);
          sendResponse({ success: false });
        });
      return true; // Keep message channel open for async response
    }
  }
);
