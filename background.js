// Background script for extension functionality
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "generateAIReply") {
    // TODO: Implement more sophisticated AI reply generation
    const replies = [
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    sendResponse({ reply });
  }
  return true; // Required for async response
});
