/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product", 
  ({ strapi }) => ({
    async find(ctx) {
      try {
        const { query } = ctx;

        // Fetch products with deep population
        const products = await strapi.entityService.findMany(
          "api::product.product",
          {
            ...query,
            populate: {
              category: true,
              variations: {
                populate: {
                  colors: {
                    fields: ['id', 'value', 'publishedAt']
                  },
                  thicknesses: {
                    fields: ['id', 'value', 'publishedAt']
                  },
                  sizes: {
                    fields: ['id', 'value', 'publishedAt']
                  }
                }
              },
              backgroundImage: {
                fields: ['id', 'url', 'formats']
              },
              catalogue: {
                populate: {
                  file: {
                    fields: ['id', 'url', 'name']
                  }
                }
              }
            }
          }
        );

        // Sanitize and return response
        const sanitizedProducts = await this.sanitizeOutput(products, ctx);
        return this.transformResponse(sanitizedProducts);
        
      } catch (error) {
        strapi.log.error('Error fetching products:', error);
        ctx.throw(500, 'Internal server error');
      }
    },

    async findOne(ctx) {
      try {
        const { id } = ctx.params;

        // Fetch single product with deep population
        const product = await strapi.entityService.findOne(
          "api::product.product",
          id,
          {
            populate: {
              category: true,
              variations: {
                populate: {
                  colors: {
                    fields: ['id', 'value', 'publishedAt']
                  },
                  thicknesses: {
                    fields: ['id', 'value', 'publishedAt']
                  },
                  sizes: {
                    fields: ['id', 'value', 'publishedAt']
                  }
                }
              },
              backgroundImage: {
                fields: ['id', 'url', 'formats']
              },
              catalogue: {
                populate: {
                  file: {
                    fields: ['id', 'url', 'name']
                  }
                }
              }
            }
          }
        );

        if (!product) {
          return ctx.notFound('Product not found');
        }

        // Sanitize and return response
        const sanitizedProduct = await this.sanitizeOutput(product, ctx);
        return this.transformResponse(sanitizedProduct);

      } catch (error) {
        strapi.log.error('Error fetching product:', error);
        ctx.throw(500, 'Internal server error');
      }
    }
  })
);