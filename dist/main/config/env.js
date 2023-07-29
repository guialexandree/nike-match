"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
exports.default = {
    apiVersion: process.env.API_VERSION || "v1",
    port: process.env.API_PORT || 3000
};
//# sourceMappingURL=env.js.map