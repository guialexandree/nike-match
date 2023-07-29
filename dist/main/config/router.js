"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const env_1 = __importDefault(require("./env"));
exports.default = (app) => {
    const router = (0, express_1.Router)();
    app.use(`/api/${env_1.default.apiVersion}`, router);
    app.get('/', (req, res) => res.json({ message: 'Ok ' }));
};
//# sourceMappingURL=router.js.map