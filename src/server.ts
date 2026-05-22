import "reflect-metadata";
import "process";
import 'module-alias/register';
import dotenv = require('dotenv');
import { serverClass, ServerClass } from "./services/server/server";
import { databaseClass } from "./services/database/database";
import { SocketClass } from "./utils/socket/socket";
dotenv.config();

const server: ServerClass = serverClass;

const socket = new SocketClass(server.server);

socket.runSocket(socket);

databaseClass.start();

server.start();