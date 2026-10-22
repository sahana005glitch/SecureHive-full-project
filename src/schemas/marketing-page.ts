import { z } from 'astro/zod';

type MarketingValue = string | MarketingValue[] | { [key: string]: MarketingValue };

const marketingValueSchema: z.ZodType<MarketingValue> = z.lazy(() =>
  z.union([z.string(), z.array(marketingValueSchema), z.record(z.string(), marketingValueSchema)])
);

export const marketingPageSchema = z.record(z.string(), marketingValueSchema);
