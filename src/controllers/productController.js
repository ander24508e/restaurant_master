const { pool } = require('../config/db');

const createProduct = async (req, res) => {
  const {
    p_business_id,
    p_product_name,
    p_product_description,
    p_base_price,
    p_product_price,
    p_category_id,
    p_availability,
    p_main_image_url,
    p_menu_portrait_pic_url,
    p_is_featured
  } = req.body;

  try {
    const [rows] = await pool.execute(`
      CALL create_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [p_business_id, p_product_name, p_product_description, p_base_price, p_product_price, p_category_id, p_availability, p_main_image_url, p_menu_portrait_pic_url, p_is_featured]);
    
    res.status(201).send('Product created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
};

const getAllProductsWithDetails = async (req, res) => {
  try {
    const [rows] = await pool.execute('CALL get_all_products_with_details()');
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
};

module.exports = { createProduct, getAllProductsWithDetails };
