
function User(connection) {
  return connection.define('Amir',{
  name: Sequelize.STRING,
  bio: Sequelize.TEXT
})
    // return sequelize.define('User', {
    //   userId: {
    //     primaryKey: true,
    //     type: Sequilize.UUID,
    //   },
    //   email: {
    //     type: Sequilize.STRING,
    //     required: true,
    //     unique: true,
    //   },
    //   hashedPassword: {
    //     type: Sequilize.STRING,
    //     required: true,
    //     maxlength: 3323,
    //   },
    //   passwordSalt: {
    //     type: Sequilize.STRING,
    //     required: true,
    //     minlength: 2,
    //   },
    //   createdAt: {
    //     type: Sequilize.DATE,
    //   },
    //   updatedAt: {
    //     type: Sequilize.DATE,
    //   },
    // });
  }

  export default User;



