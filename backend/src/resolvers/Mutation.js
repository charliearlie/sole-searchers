const { signIn, signOut, signUp } = require("./mutations/userMutations");
const { createItem } = require("./mutations/itemMutations");

const Mutations = {
  signIn,
  signOut,
  signUp,
  createItem
};

module.exports = Mutations;
