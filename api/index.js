const axios = require('axios');

module.exports = async (req, res) => {
  const token = process.env.GHL_API_KEY; 
  const locationId = 'xhikX0m94bzYmA2CBwwd'; // This is your specific account ID

  try {
    const response = await axios.get(`https://services.leadconnectorhq.com/emails/stats/location/${locationId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Version': '2021-07-28'
      }
    });
    res.status(200).json({ emailCount: response.data.totalCount || 0 });
  } catch (error) {
    res.status(500).json({ emailCount: 0 }); // If it fails, show 0
  }
};
