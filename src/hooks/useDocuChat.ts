import { useState, useCallback } from 'react';
import { docuChatService, Source, QueryMetadata } from '../services/docuchat';

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  sources?: Source[];
  metadata?: QueryMetadata;
  isError?: boolean;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  content: 'Hej! Jag är DocuChat, din AI-assistent. Jag kan svara på frågor baserat på era egna dokument och data. Hur kan jag hjälpa dig idag?',
  isUser: false,
  timestamp: new Date(),
};

export function useDocuChat() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const checkConnection = useCallback(async () => {
    const health = await docuChatService.checkHealth();
    setIsConnected(health.isHealthy);
    return health.isHealthy;
  }, []);

  const sendMessage = useCallback(async (query: string) => {
    if (!query.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: query,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await docuChatService.query({
        query,
        topK: 5,
        temperature: 0.3,
        maxTokens: 500,
      });

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.answer,
        isUser: false,
        sources: response.sources,
        metadata: response.metadata,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: error instanceof Error ? error.message : 'Ett fel uppstod. Försök igen.',
        isUser: false,
        isError: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([WELCOME_MESSAGE]);
  }, []);

  return {
    messages,
    isLoading,
    isConnected,
    sendMessage,
    checkConnection,
    clearMessages,
  };
}
