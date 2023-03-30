const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class categoryService {
  constructor() {}

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll({
      include: ["products"],
    });
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ["products"],
    });
    if (!category) {
      throw new boom.notFound("Category not found");
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const res = await category.update(changes);
    return res;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = categoryService;
