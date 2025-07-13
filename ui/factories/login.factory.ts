import {Factory} from "rosie";
import {faker} from "@faker-js/faker";

export const emailFactory = new Factory()
    .attr("email", () => faker.internet.email())
    .attr("username", () => faker.internet.username())
    .attr("invalidEmail", () => faker.internet.email() + "1")
    .attr("password", () => faker.internet.password())
    .attr("emailWithoutAt", () => faker.internet.displayName() + "gmail.com")
