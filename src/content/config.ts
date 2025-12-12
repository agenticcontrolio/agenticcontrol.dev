// src/content/config.ts
// Content collections schema for type-safe tutorials
import { defineCollection, z } from 'astro:content';

const tutorialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    subtitle: z.string(),
    description: z.string().max(155, 'SEO description must be ≤155 characters for optimal display in search results'),
    publishDate: z.coerce.date(),
    author: z.string(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    estimatedTime: z.number().positive().int(),
    estimatedCost: z.number().nonnegative(),
    tags: z.array(z.string()).min(3, 'At least 3 tags required').max(7, 'Maximum 7 tags allowed'),
    category: z.enum(['Foundation', 'Multi-Agent', 'RAG', 'Production', 'Advanced']),
    draft: z.boolean().default(false),

    // Optional fields
    lastModified: z.coerce.date().optional(),
    prerequisites: z.array(z.string()).optional(),
    series: z.string().optional(),
    seriesOrder: z.number().positive().int().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = {
  'tutorials': tutorialCollection,
};
