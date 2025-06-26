/**
 * project controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entities = await strapi.entityService.findMany('api::project.project', {
      ...query,
      populate: {
        heading: true,
        card: {
          populate: {
            backgroundImage: true,
            category: true,
          },
        },
      },
    });

    return this.transformResponse(entities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::project.project', id, {
      ...query,
      populate: {
        heading: true,
        card: {
          populate: {
            backgroundImage: true,
            category: true,
          },
        },
      },
    });

    return this.transformResponse(entity);
  },
}));
