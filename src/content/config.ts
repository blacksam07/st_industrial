import { defineCollection, z } from "astro:content";

const clientsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    url: z.string(),
    featured: z.number(),
  }),
});

export const collections = {
  clients: clientsCollection,
};
