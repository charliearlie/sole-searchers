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

async function signIn(parent, { email, password }, ctx, info) {
  const user = await ctx.db.query.user({
    where: { email }
  });

  if (!user) {
    throw new Error("No user with that user name exists");
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  //TODO: Move this out in to separate function
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  ctx.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });

  return user;
}
