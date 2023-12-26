import { CollectionConfig } from "payload/types";
import dotenv from "dotenv";

dotenv.config({
  path: __dirname + "../.env",
});
export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        // console.log("Email sent");
        return `<a href='${
          process.env.NEXT_PUBLIC_SERVER_URL
            ? process.env.NEXT_PUBLIC_SERVER_URL
            : "http://localhost:3000"
        }/verify-email?token=${token}'>Verify Account</a>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      type: "select",
      admin: {
        condition: () => false,
      },
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
