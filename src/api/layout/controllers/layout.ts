import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    const entry = await strapi.entityService.findOne("api::layout.layout", 1, {
      populate: {
        header: { populate: "*" },
        footer: { populate: "*" },
        logo: { populate: "*" },
      },
    });

    

    
    return this.transformResponse(entry);
  },
}));