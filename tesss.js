 async deleteUserById(id, softDeletion) {
    return this.sequelize.transaction(async (transaction) => {
      // Search for the user on verified and unverified tables
      const verifiedUser = await this.VerifiedUser.findOne({
        where: { userId: id },
        transaction,
      });
      const unverifiedUser = await this.UnverifiedUser.findOne({
        where: { userId: id },
        transaction,
      });
      // Check already the user is in deleted table
      const softDeletedUser = await this.deletedUser.findOne({
        where: { userId: id },
        transaction,
      });

      if (softDeletedUser !== null) {
        throw new errors.Conflict('A user with the same credentials exist at deleted table.');
      }
      let user;
      // Users are either verified or unverified.
      if (verifiedUser !== null) {
        user = verifiedUser;
      } else if (unverifiedUser !== null) {
        user = unverifiedUser;
      } else {
        throw new errors.NotFound('Can not find user with this Id.');
      }

      // step 1
      await user.destroy({ transaction });
      // step 2
      if (softDeletion) {
        await this.deletedUser.create({
          userId: user.userId,
          email: user.email,
          termsAccepted: user.termsAccepted,
          hashedPassword: user.hashedPassword,
        },
        { transaction });
      }
      return true;
    });
    
  }


}