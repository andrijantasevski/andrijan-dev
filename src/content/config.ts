import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    technologiesUsed: z.string(),
    description: z.string(),
    link: z.string(),
    github: z.string(),
    image: z.string(),
    highlighted: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
