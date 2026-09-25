export type TierType = 'starter' | 'premium' | 'complete';

export interface PricingTier {
  id: TierType;
  name: string;
  price: number;
  originalPrice: number;
  target: string;
  popular?: boolean;
  highlight?: string;
  features: string[];
  cta: string;
}

export interface WorkbookDay {
  day: number;
  week: number;
  title: string;
  mission: string;
  whyItMatters: string;
  proTip: string;
}

export interface SwipeTemplate {
  id: string;
  number: string;
  title: string;
  useCase: string;
  subject?: string;
  content: string;
  proTip: string;
  niche: 'writing' | 'video' | 'design' | 'general' | 'negotiation';
}

export interface HrpaExample {
  profession: string;
  hook: string;
  relevance: string;
  proof: string;
  ask: string;
}
