import "reflect-metadata";
import { createConnection } from "typeorm";
import { Example } from "./example";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "test",
  entities: [Example],
  synchronize: true,
  logging: false,
});
