const { Op } = require("sequelize");
const { User, Referral } = require("../../lib/sequelize");
const Service = require("../service");

class referralService extends Service {
  static createReferral = async (req) => {
    try {
      const { referral_code, type, description } = req.body;
      const { token } = req;

      const findUser = await User.findOne({
        where: {
          id: token.id,
        },
      });
      const newReferral = await Referral.create({
        referral_code,
        type,
        description,
        added_by: findUser.username,
      });
      return this.handleSuccess({
        message: "Post Created",
        statusCode: 201,
        data: newReferral,
      });
    } catch (err) {
      console.log(err);
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static getAllReferral = async (req) => {
    try {
      const findAllReferral = await Referral.findAll();
      return this.handleSuccess({
        message: "Get All Data",
        statusCode: 200,
        data: findAllReferral,
      });
    } catch (error) {
      console.log(err);
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };
}

module.exports = referralService;
