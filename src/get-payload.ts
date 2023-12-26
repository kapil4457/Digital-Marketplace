import dotenv from "dotenv";
import path from "path";
import payload, { Payload } from "payload";
import type { InitOptions } from "payload/config";
import nodemailer from "nodemailer";
dotenv.config({
  path: path.resolve(__dirname + "./.env"),
});

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: "re_JmP2sqDx_Mygi66E1c66CwvYyMRttFZLT",
  },
});
let cache = (global as any).payload;
if (!cache) {
  cache = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}
const PAYLOAD_SECRET = "my_secret";
export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is missing");
  }
  if (cache.client) {
    return cache.client;
  }

  if (!cache.promise) {
    cache.promise = payload.init({
      secret: PAYLOAD_SECRET,
      email: {
        transport: transporter,
        fromAddress: "onboarding@resend.dev",
        fromName: "HippoHarbour",
      },
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }
  try {
    cache.client = await cache.promise;
  } catch (err: unknown) {
    cache.promise = null;
    throw err;
  }

  return cache.client;
};
