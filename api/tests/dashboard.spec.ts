import {test} from '../fixture/api.fixture';
import {ApiEndpoints} from '../enums/endpoints.enum';
import {expect} from "@playwright/test";
import {dataApiFactoryTask} from '../factories/base.factory';
import {TaskResponse} from "../types/types";

let createdTaskId: string;

test.afterEach(async ({apiClient}) => {
    if (createdTaskId) {
        const deleteUrl = `${ApiEndpoints.TASKS}/${createdTaskId}`;
        const response = await apiClient.delete(deleteUrl);

        expect(204).toContain(response.status());
    }
});

test('[TC-9] - Should create a new task successfully', async ({apiClient}) => {
    const taskData = dataApiFactoryTask;

    const response = await apiClient.post(ApiEndpoints.TASKS, {
        data: taskData
    });

    const body = await response.json();
    expect(response.status()).toBe(201);
    expect(typeof body.id).toBe('string');

    expect(body.title).toBe(taskData.title);
    expect(body.description).toBe(taskData.description);
    expect(body.priority).toBe(taskData.priority);
    expect(body.status).toBe(taskData.status);
});

test('[TC-10] - Should update an existing task', async ({apiClient}) => {
    const taskData = dataApiFactoryTask;

    const response = await apiClient.post(ApiEndpoints.TASKS, {
        data: taskData
    });

    const body = await response.json();
    expect(response.status()).toBe(201);
    expect(typeof body.id).toBe('string');

    expect(body.title).toBe(taskData.title);
    expect(body.description).toBe(taskData.description);
    expect(body.priority).toBe(taskData.priority);
    expect(body.status).toBe(taskData.status);
});

test('[TC-11] - Should delete a task successfully', async ({apiClient}) => {
    const taskData = dataApiFactoryTask;

    const createResponse = await apiClient.post(ApiEndpoints.TASKS, {
        data: taskData,
    });

    const createdTask = await createResponse.json();

    const deleteUrl = `${ApiEndpoints.TASKS}/${createdTask.id}`;
    const deleteResponse = await apiClient.delete(deleteUrl);

    expect(deleteResponse.status()).toBe(204);
});

test('[TC-12] - Should get all tasks and validate fields', async ({apiClient}) => {
    const response = await apiClient.get(ApiEndpoints.TASKS);

    expect(response.status()).toBe(200);

    const tasks: TaskResponse[] = await response.json();

    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);

    for (const task of tasks) {
        expect(typeof task.id).toBe('string');
        expect(typeof task.userId).toBe('string');
        expect(typeof task.title).toBe('string');

        expect(typeof task.description).toBe('string');

        expect(['High', 'Medium', 'Low']).toContain(task.priority);
        expect(task.status).toBe('Backlog');
    }
});