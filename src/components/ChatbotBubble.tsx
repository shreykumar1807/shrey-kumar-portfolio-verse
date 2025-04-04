
import { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatbotBubble = () => {
  useEffect(() => {
    // Initialize the chatbot script
    (function() {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target: any, prop: string) {
            if (prop === "q") {
              return target.q;
            }
            return (...args: any[]) => target(prop, ...args);
          }
        });
      }
      
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "l3rHMhCZ82jB239XtdhcX";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    })();
  }, []);

  return null; // The chatbot will be injected by the script, so no JSX is needed
};

export default ChatbotBubble;
