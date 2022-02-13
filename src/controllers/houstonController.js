import Parser from 'rss-parser';
import { convertISODateToAEST } from '../utilities/format-iso-date-to-AEST.js';

class HoustonController {
  async getPodcasts(count = 10) {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss');

    // Structure the episodes as required
    const requiredEpisodes = feed.items.splice(0, count);
    const parsedEpisodes = [];
    requiredEpisodes.forEach((episode) => {
      parsedEpisodes.push({
        title: episode.title,
        audioUrl: episode.enclosure.url,
        publishedDate: convertISODateToAEST(episode.isoDate),
      })
    });
    const payload = {
      title: feed.title,
      description: feed.description,
      episodes: parsedEpisodes,
    };
    // Return only the first 10 podcasts
    return payload;
  }
}

export { HoustonController }