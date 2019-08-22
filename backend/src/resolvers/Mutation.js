const { signIn, signOut, signUp } = require("./mutations/userMutations");

const Mutations = {
  signIn,
  signOut,
  signUp
};

module.exports = Mutations;
