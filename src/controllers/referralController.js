const referralService = require("../services/referral");

const referralController = {
  createReferral: async (req, res) => {
    try {
      const serviceResult = await referralService.createReferral(req);

      if (!serviceResult.success) throw serviceResult;

      return res.status(serviceResult.statusCode || 201).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },

  getReferral: async (req, res) => {
    try {
      const serviceResult = await referralService.getAllReferral(req);

      if (!serviceResult.success) throw serviceResult;

      return res.status(serviceResult.statusCode || 201).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  },
};

module.exports = referralController;
