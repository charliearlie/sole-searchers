const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signUp(parent, args, ctx, info) {
  args.email = args.email.toLowerCase();
  const password = await bcrypt.hash(args.password, 10);

  const user = await ctx.db.mutation.createUser(
    {
      data: {
        ...args,
        active: true,
        password,
        permissions: { set: ["USER"] }
      }
    },
    info
  );

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  ctx.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
  return user;
}
