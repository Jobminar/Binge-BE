import axios from 'axios';
import OTP from 'generate-otp';
import Otp from '../models/otpModel.js';

const otpController = {
  sendOTP: async (req, res) => {
    const { mobile } = req.body;

    // Generate a dynamic OTP
    const otp = OTP.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

    try {
      // Saving OTP record in the database
      const otpRecord = await Otp.findOneAndUpdate(
        { mobileNumber: mobile },
        { mobileNumber: mobile, otp: otp },
        { upsert: true, new: true }
      );
      console.log(`OTP Record saved: ${otpRecord}`);

      // Sending OTP via SMS
      const smsApiResponse = await axios.get('https://login.digitalsms.biz/api', {
        params: {
          apikey: '282e30c82bdc97889c5de90dacfc555b', // Replace with your API key
          mobile: mobile,
          msg: otp,
        },
      });

      console.log('SMS API Response:', smsApiResponse.data);

      // Check for a successful response or handle errors based on the API response
      if (smsApiResponse.data.success) {
        // Responding to the client
        res.status(200).json({ message: 'OTP sent successfully' });
      } else {
        console.error('SMS API Error:', smsApiResponse.data.error);
        res.status(500).json({ error: 'Failed to send OTP' });
      }
    } catch (error) {
      console.error('Error:', error.message);

      // Handling specific errors (if needed)
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      }

      // Responding to the client with an error message
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  },
};

export default otpController;
