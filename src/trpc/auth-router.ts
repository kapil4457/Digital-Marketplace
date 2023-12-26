import { AuthCreditentialsValidator } from "../lib/validators/account-creditentials";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCreditentialsValidator)
    .mutation(async ({ input }) => {
      console.log("I am in");
      const { email, password } = input;
      const payload = await getPayloadClient();
      //   check if user already exists
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });
      if (users.length != 0) {
        throw new TRPCError({ code: "CONFLICT" });
      }

      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: "user",
        },
      });

      return { success: true, sentToEmail: email };
    }),
});
