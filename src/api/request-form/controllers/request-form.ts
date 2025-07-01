// src/api/request-form/controllers/request-form.js
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::request-form.request-form',
  ({ strapi }) => ({

    // Customize the `find` (GET) request
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: ['formTitle', 'fieldName'],
      };

      const { data } = await super.find(ctx);
      return data;
    },

    // Customize the `findOne` request
    async findOne(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: ['formTitle', 'fieldName'],
      };

      const { data } = await super.findOne(ctx);
      return data;
    },

    // Customize the `update` request (for saving or editing)
    async update(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: ['formTitle', 'fieldName'],
      };

      const { data } = await super.update(ctx);
      return data;
    },

    // Optionally customize `create` if working with it
    async create(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: ['formTitle', 'fieldName'],
      };

      const { data } = await super.create(ctx);
      return data;
    },

  })
);
