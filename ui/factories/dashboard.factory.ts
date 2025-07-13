import {Factory} from "rosie";
import {faker} from "@faker-js/faker";

export const dashboardFactory = new Factory()
    .attr("title", () => faker.lorem.words(3))
    .attr("description", () => faker.lorem.sentences(2))
    .attr("text", () => faker.lorem.text())