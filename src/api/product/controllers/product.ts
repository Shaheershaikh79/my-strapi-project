/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::product.product",
        {
          ...query,
          populate: {
            category: true,
            variations: {
              populate: {
                value: true,
              },
            },
            backgroundImage:true,

            catalogue: {
              populate: {
                file: true,
              },
            },
          },
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.entityService.findOne(
        "api::product.product",
        id,
        {
          populate: {
            category: true,
            variations: {
              populate: {
                value: true,
              },
            },
            catalogue: {
              populate: {
                file: true,
              },
            },
          },
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
