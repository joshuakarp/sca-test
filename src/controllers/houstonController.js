import Parser from 'rss-parser';

class HoustonController {
  async getPodcasts(count = 10) {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss');

    const payload = {
      title: feed.title,
      description: feed.description,
      episodes: feed.items.splice(0, count),
    };
    // Return only the first 10 podcasts
    return payload;
  }
}

export { HoustonController }