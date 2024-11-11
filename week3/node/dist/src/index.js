"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
let poems = [];
fs_1.default.readFile("data/poems.json", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    try {
        poems = JSON.parse(data);
    }
    catch (error) {
        console.error(`Error parsing JSON: ${error}`);
    }
});
router.get("/", (req, res) => {
    res.json(poems);
});
exports.default = router;
