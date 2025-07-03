import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async find(ctx) {
      try {
        const { query } = ctx;

        const products = await strapi.entityService.findMany(
          "api::product.product",
          {
            ...query,
            populate: {
              category: true,
              backgroundImage: true,
              catalogue: {
                populate: {
                  file: true,
                },
              },
              variations: {
                populate: {
                  sizes: {
                    populate: {
                      sizes: true,
                    },
                  },
                  colors: true, // Add if you use colors
                  thicknesses: true, // Add if you use thicknesses
                },
              },
            },
          }
        );

        const sanitizedProducts = await this.sanitizeOutput(products, ctx);
        return this.transformResponse(sanitizedProducts);
      } catch (error) {
        strapi.log.error("Error fetching products:", error);
        ctx.throw(500, "Internal server error");
      }
    },

    async findOne(ctx) {
      try {
        const { id } = ctx.params;

        const product = await strapi.entityService.findOne(
          "api::product.product",
          id,
          {
            populate: {
              category: true,
              backgroundImage: true,
              catalogue: {
                populate: {
                  file: true,
                },
              },
              variations: {
                populate: {
                  sizes: {
                    populate: {
                      sizes: true,
                    },
                  },
                  colors: true,
                  thicknesses: true,
                },
              },
            },
          }
        );

        if (!product) {
          return ctx.notFound("Product not found");
        }

        const sanitizedProduct = await this.sanitizeOutput(product, ctx);
        return this.transformResponse(sanitizedProduct);
      } catch (error) {
        strapi.log.error("Error fetching product:", error);
        ctx.throw(500, "Internal server error");
      }
    },
  })
);
