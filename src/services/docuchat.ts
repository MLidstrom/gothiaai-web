// DocuChat API Service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5298';

export interface Source {
  fileName: string;
  pageNumber: number | null;
  score: number;
  snippet: string;
}

export interface QueryMetadata {
  model: string;
  latencyMs: number;
  guardrailsApplied: boolean;
}

export interface QueryResponse {
  answer: string;
  sources: Source[];
  metadata: QueryMetadata;
}

export interface QueryRequest {
  query: string;
  topK?: number;
  temperature?: number;
  maxTokens?: number;
}

export interface HealthResponse {
  isHealthy: boolean;
  status: string;
}

class DocuChatService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async query(request: QueryRequest): Promise<QueryResponse> {
    const response = await fetch(`${API_BASE_URL}/api/docuchat/query`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(request),
    });

    if (response.status === 401) {
      throw new Error('Unauthorized - please login');
    }
    if (response.status === 403) {
      throw new Error('DocuChat plugin not enabled for your account');
    }
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    return response.json();
  }

  async checkHealth(): Promise<HealthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/docuchat/health`, {
        headers: this.getHeaders(),
      });
      if (!response.ok) {
        return { isHealthy: false, status: 'Unhealthy' };
      }
      return response.json();
    } catch {
      return { isHealthy: false, status: 'Disconnected' };
    }
  }
}

export const docuChatService = new DocuChatService();
