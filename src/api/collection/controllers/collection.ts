// src/api/collection/controllers/collection.ts

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::collection.collection', () => ({
  async find(ctx) {
    ctx.query.populate = {
      backgroundImage: true
    };

    const response = await super.find(ctx);
    return response;
  },

  async findOne(ctx) {
    ctx.query.populate = {
      backgroundImage: true
    };

    const response = await super.findOne(ctx);
    return response;
  },
}));
