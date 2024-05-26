import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    layout: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z
        .object({
            url: z.string().url(),
            alt: z.string(),
        })
        .optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean(),
});

const blogCollection = defineCollection({
    type: "content",
    schema: blogSchema,
});

export type BlogType = z.infer<typeof blogSchema>;
export const collection = {
    blog: blogCollection,
};
