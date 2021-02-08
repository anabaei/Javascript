import 'babel-polyfill';

const Sequelize = require('sequelize');

class UserService {

  async init() {
    const connection = new Sequelize(
        'postgres',
        '',
        '',
        {
          dialect: 'postgres',
        },
      );

   // await this.sequelize.authenticate();
  //  this.modelInstance = UserModel(connection);

 //   await this.sequelize.sync();
  }

}
const userService = new UserService();
export default userService;