import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers, block internals
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // Major search engines — explicit allow
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Slurp", allow: "/" },       // Yahoo
      { userAgent: "DuckDuckBot", allow: "/" },
      // AI crawlers — allow for Generative Engine Optimization (GEO)
      { userAgent: "GPTBot", allow: "/" },            // OpenAI / ChatGPT
      { userAgent: "ChatGPT-User", allow: "/" },      // ChatGPT browsing
      { userAgent: "OAI-SearchBot", allow: "/" },     // OpenAI search
      { userAgent: "PerplexityBot", allow: "/" },     // Perplexity AI
      { userAgent: "Claude-Web", allow: "/" },        // Anthropic Claude
      { userAgent: "anthropic-ai", allow: "/" },      // Anthropic
      { userAgent: "CCBot", allow: "/" },             // Common Crawl (trains many LLMs)
      { userAgent: "Googlebot-Extended", allow: "/" },// Google AI Overviews / SGE
      { userAgent: "Google-Extended", allow: "/" },   // Google Gemini training
      { userAgent: "cohere-ai", allow: "/" },         // Cohere
      { userAgent: "meta-externalagent", allow: "/" },// Meta AI
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
    ],
    sitemap: `${SITE.siteUrl}/sitemap.xml`,
    host: SITE.siteUrl,
  };
}
