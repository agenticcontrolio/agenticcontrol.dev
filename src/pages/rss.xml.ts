// src/pages/rss.xml.ts
// RSS feed generator for tutorials
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // Fetch all published tutorials
  const tutorials = await getCollection('tutorials', ({ data }) => {
    return !data.draft; // Only published tutorials
  });

  // Sort by publish date (newest first)
  const sortedTutorials = tutorials.sort((a, b) => {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });

  return rss({
    // RSS Feed metadata
    title: 'AgenticControl.dev - Industrial AI Tutorials',
    description: 'Learn to build AI agents for industrial automation. Tutorials for PLCs, SCADA, digital twins, and agentic workflows.',
    site: context.site || 'https://agenticcontrol.dev',

    // Feed items (tutorials)
    items: sortedTutorials.map((tutorial) => ({
      title: tutorial.data.title,
      description: tutorial.data.description,
      pubDate: tutorial.data.publishDate,
      link: `/tutorials/${tutorial.slug}/`,

      // Additional metadata
      categories: [
        tutorial.data.category,
        tutorial.data.difficulty,
        ...tutorial.data.tags
      ],

      // Custom data (optional, for advanced RSS readers)
      customData: `
        <author>
          <name>${tutorial.data.author}</name>
        </author>
        <difficulty>${tutorial.data.difficulty}</difficulty>
        <estimatedTime>${tutorial.data.estimatedTime} minutes</estimatedTime>
        <estimatedCost>$${tutorial.data.estimatedCost.toFixed(2)}</estimatedCost>
        ${tutorial.data.series ? `<series>${tutorial.data.series}</series>` : ''}
        ${tutorial.data.seriesOrder ? `<seriesOrder>${tutorial.data.seriesOrder}</seriesOrder>` : ''}
      `.trim(),
    })),

    // Feed configuration
    customData: `
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>60</ttl>
      <image>
        <url>https://agenticcontrol.dev/og-image.jpg</url>
        <title>AgenticControl.dev</title>
        <link>https://agenticcontrol.dev</link>
      </image>
    `.trim(),

    // Styling for RSS feed (makes it readable in browsers)
    stylesheet: '/rss-styles.xsl',
  });
}
