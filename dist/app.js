"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const AuthRouter_1 = __importDefault(require("./routes/AuthRouter"));
const PlantRouter_1 = __importDefault(require("./routes/PlantRouter"));
const path_1 = __importDefault(require("path"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
        this.app.use((0, cors_1.default)({ origin: "*", optionsSuccessStatus: 200 }));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use("/api/auth", AuthRouter_1.default);
        this.app.use("/api/plant", PlantRouter_1.default);
        this.app.get("/", (req, res) => {
            res.json({
                message: "Hello World with TypeScript!",
                timestamp: new Date().toISOString(),
            });
        });
    }
}
exports.default = new App().app;
