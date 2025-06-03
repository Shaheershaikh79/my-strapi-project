import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::layout.layout",
  ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.service("api::layout.layout").find({
        populate: {
          Header: true,
          Footer: true,
          Logo: { populate: "*" },
          // ✅ This fixes your TS error
        },
      });
      return this.transformResponse(entries);
    },
  })
);
