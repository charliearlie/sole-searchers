async function createItem(parent, args, ctx, info) {
  // if (!ctx.request.userId) {
  //   throw new Error('You must be logged in to add an item to the database');
  // }
  const data = {
    ...args
    // images: { set: args.images },
    // sizes: { set: args.sizes }
  };

  console.log(data);

  const item = await ctx.db.mutation.createItem(
    {
      data
    },
    info
  );

  return item;
}

module.exports = {
  createItem
};
