// api-tests/fixtures/api.fixture.ts

import { test as base, request, APIRequestContext } from '@playwright/test';
import * as dotenv from 'dotenv';
import {ApiEndpoints} from "../enums/endpoints.enum";

dotenv.config();

export const test = base.extend<{
    apiClient: APIRequestContext;
}>({
    apiClient: async ({}, use, testInfo) => {
        const baseUrl = testInfo.project.use.baseURL;

        const context = await request.newContext({
            baseURL: baseUrl,
            ignoreHTTPSErrors: true,
        });

        const csrfResp = await context.get(ApiEndpoints.CRFS);
        const csrfBody = await csrfResp.json();


       await context.post(ApiEndpoints.LOGIN, {
            form: {
                redirect: false,
                email: process.env.EMAIL ?? "",
                password: process.env.PASSWORD ?? "",
                csrfToken: csrfBody.csrfToken,
                callbackUrl: `${baseUrl}/auth/login`,
                json: true,
            },
        });

        await use(context);
    }
});
