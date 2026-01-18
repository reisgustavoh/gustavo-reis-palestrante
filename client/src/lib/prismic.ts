import * as prismic from "@prismicio/client";

export const repositoryName = "gustavo-reis-palestrante-blog";

export function createClient() {
  return prismic.createClient(repositoryName, {
    accessToken: import.meta.env.VITE_PRISMIC_TOKEN,
  });
}
