import { HoustonController } from '../controllers/houstonController.js';

class HoustonRoutes {
  constructor() {
    this.houstonController = new HoustonController();
  }

  async routes(app) {

    app.route('/')
      .get(async (req, res) => {
        const podcasts = await this.houstonController.getPodcasts();
        res.json(podcasts);
      })

  }
}

export { HoustonRoutes }