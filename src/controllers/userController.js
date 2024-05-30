const { pool } = require('../config/db');

const createUser = async (req, res) => {
  const {
    p_user_ced,
    p_user_name,
    p_user_phone,
    p_user_address,
    p_user_mail,
    p_user_plan,
    p_city_id,
    p_user_profile_pic_url,
    p_password
  } = req.body;

  try {
    const [rows] = await pool.execute(`
      CALL create_user(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [p_user_ced, p_user_name, p_user_phone, p_user_address, p_user_mail, p_user_plan, p_city_id, p_user_profile_pic_url, p_password]);
    
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
};

module.exports = { createUser };
