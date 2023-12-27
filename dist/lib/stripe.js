"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
var stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default((_a = process.env.STRIPE_SECRET_KEY) !== null && _a !== void 0 ? _a : "sk_test_51KW0eOSEQiF6Q8x0wM6ZxVSxNrOiA9UyHIUbeKgl6va5lL2qNor2pDJJBQJpDQoI6xipPkVPrf1Jnpe4vtrMix2Y00PCH1FAmA", {
    apiVersion: "2023-10-16",
    typescript: true,
});
