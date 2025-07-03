module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.category) {
      const category = await strapi.entityService.findOne(
        'api::category.category',
        data.category.connect[0].id,
        { fields: ['slug'] }
      );
      if (category) {
        data.slug = category.slug;
      }
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.category) {
      const category = await strapi.entityService.findOne(
        'api::category.category',
        data.category.connect[0].id,
        { fields: ['slug'] }
      );
      if (category) {
        data.slug = category.slug;
      }
    }
  }
};