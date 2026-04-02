import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['pending', 'decided']),
    petitioner: z.string(),
    respondent: z.string(),
    description: z.string(),
    bench: z.array(z.string()),
    tags: z.array(z.string()),
    nextHearing: z.string().optional(),
    filedDate: z.string(),
    decidedDate: z.string().optional(),
  }),
});

const judges = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    status: z.enum(['sitting', 'retired']),
    designation: z.string(),
    appointedDate: z.string(),
    retirementDate: z.string().optional(),
    pendingCases: z.number(),
    judgments: z.number(),
    bio: z.string(),
    initials: z.string().max(2),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.string(),
    excerpt: z.string(),
    featured: z.boolean(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    etymology: z.string().optional(),
    example: z.string().optional(),
    relatedTerms: z.array(z.string()),
  }),
});

export const collections = { cases, judges, articles, glossary };
