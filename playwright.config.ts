import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL || 'https://todotest.site';

export default defineConfig({
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    reporter: [['html', { open: 'never' }]],
    workers: 4,

    projects: [
        {
            name: 'chromium',
            testDir: './ui',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: baseURL,
                ignoreHTTPSErrors: true,
                headless: false,
                screenshot: 'only-on-failure',
                video: 'retain-on-failure',
            },
        },
        {
            name: 'api',
            testDir: './api',
            use: {
                baseURL: baseURL,
                ignoreHTTPSErrors: true,
            },
        },
    ],
});