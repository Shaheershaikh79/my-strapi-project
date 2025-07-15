import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async find(ctx) {
    const entry = await strapi.entityService.findOne('api::global.global', 1, {
      populate: {
        header: { populate: '*' },
        footer: { populate: '*' },
        logo: { populate: '*' },
      },
    });

    return this.transformResponse(entry);
  },
}));
