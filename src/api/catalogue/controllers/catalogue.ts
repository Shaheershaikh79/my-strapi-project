import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::catalogue.catalogue', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Populate all relevant relations and components
    query.populate = {
      products: true,
      category: true,
      KeyFeatures: true,
      file: true,
    };

    // Use Strapi's entity service to fetch the data
    const entities = await strapi.entityService.findMany('api::catalogue.catalogue', query);

    // Sanitize and return the data
    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitizedEntities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    // Populate all related data for a single entry
    query.populate = {
      products: true,
      category: true,
      KeyFeatures: true,
      file: true,
    };

    const entity = await strapi.entityService.findOne('api::catalogue.catalogue', id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
