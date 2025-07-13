import { faker } from '@faker-js/faker';
import {TaskPriority, TaskRequest} from "../types/types";

export const taskFactory = () => {
    return {
        build(): TaskRequest {
            return {
                title: faker.lorem.words(3),
                description: faker.lorem.sentence(),
                priority: faker.helpers.arrayElement<TaskPriority>([
                    'High',
                    'Medium',
                    'Low',
                ]),
                status: 'Backlog',
            };
        },
    };
};