const { pool } = require('../config/db');

const createBusiness = async (req, res) => {
  const {
    p_business_owner_ced,
    p_business_name,
    p_business_phone,
    p_business_mail,
    p_business_city_id,
    p_business_main_desc,
    p_business_desc,
    p_business_slogan,
    p_business_main_pic_url,
    p_business_portrait_pic
  } = req.body;

  try {
    const [rows] = await pool.execute(`
      CALL create_business(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [p_business_owner_ced, p_business_name, p_business_phone, p_business_mail, p_business_city_id, p_business_main_desc, p_business_desc, p_business_slogan, p_business_main_pic_url, p_business_portrait_pic]);
    
    res.status(201).send('Business created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear negocio');
  }
};

const getAllBusinesses = async (req, res) => {
  try {
    const [rows] = await pool.execute('CALL get_all_businesses()');
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching businesses');
  }
};

module.exports = { createBusiness, getAllBusinesses };
