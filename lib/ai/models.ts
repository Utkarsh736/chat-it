export const DEFAULT_CHAT_MODEL = "openai/gpt-oss-120b";

export const titleModel = {
  description: "Fast model for title generation",
  id: "openai/gpt-oss-20b",
  name: "GPT OSS 20B",
  provider: "openai",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  reasoningEffort?: "none" | "minimal" | "low" | "medium" | "high";
};

export const chatModels: ChatModel[] = [
  {
    description: "OpenAI's open-source 120B model — best all-rounder",
    id: "openai/gpt-oss-120b",
    name: "GPT OSS 120B",
    provider: "openai",
  },
  {
    description: "Fast, lower latency for simple chats",
    id: "openai/gpt-oss-20b",
    name: "GPT OSS 20B",
    provider: "openai",
  },
  {
    description: "Qwen 3.6 with reasoning and vision",
    id: "qwen/qwen3.6-27b",
    name: "Qwen 3.6 27B",
    provider: "qwen",
  },
];

export function getCapabilities(): Promise<Record<string, ModelCapabilities>> {
  return Promise.resolve({});
}

export const isDemo = process.env.IS_DEMO === "1";

export type GatewayModelWithCapabilities = ChatModel & {
  capabilities: ModelCapabilities;
};

export function getAllGatewayModels(): Promise<GatewayModelWithCapabilities[]> {
  return Promise.resolve(
    chatModels.map((m) => ({
      ...m,
      capabilities: { reasoning: false, tools: false, vision: false },
    }))
  );
}

export function getActiveModels(): ChatModel[] {
  return chatModels;
}

export const allowedModelIds = new Set(chatModels.map((m) => m.id));

export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);

export type ModelAvailability = "healthy" | "impacted" | "unknown";

export function getModelAvailability(
  _modelId: string
): Promise<ModelAvailability> {
  return Promise.resolve("healthy");
}
