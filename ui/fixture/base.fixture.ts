import { test as base } from "@playwright/test";
import {DashboardPage} from "../pages/dashboard.page";
import {LoginPage} from "../pages/login.page";

export interface BaseFixture {
    dashboardPage: DashboardPage;
    loginPage: LoginPage;
}

export const test = base.extend<BaseFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
});