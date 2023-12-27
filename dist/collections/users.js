"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: __dirname + "../.env",
});
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                // console.log("Email sent");
                return "<a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL
                    ? process.env.NEXT_PUBLIC_SERVER_URL
                    : "http://localhost:3000", "/verify-email?token=").concat(token, "'>Verify Account</a>");
            },
        },
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            admin: {
                condition: function () { return false; },
            },
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
