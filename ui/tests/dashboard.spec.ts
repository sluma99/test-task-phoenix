import { test } from "../fixture/base.fixture";
import { successfulLogin } from "../flow/login.flow";
import { createTask, deleteTask, editTask } from "../flow/dashboard.flow";
import { dataFactoryDashboard } from "../factories/base.factory";

test.describe("Dashboard", () => {
    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto("/");
        await successfulLogin(
            { page, loginPage },
            process.env.EMAIL!,
            process.env.PASSWORD!
        );
    });

    test(`[TC-6] - Create new task`, async ({ dashboardPage }) => {
        const title = dataFactoryDashboard.title;
        const description = dataFactoryDashboard.description;

        await createTask({
            dashboardPage,
            title,
            description,
        });

        await dashboardPage.checkCreateTask(title);
        await deleteTask(dashboardPage, title);
    });

    test("[TC-7] - Edit created task", async ({page, dashboardPage}) => {
        const originalTitle = dataFactoryDashboard.title;
        const newTitle = originalTitle + "_edited";
        const newDescription = dataFactoryDashboard.description + " updated";

        await createTask({
            dashboardPage,
            title: originalTitle,
            description: dataFactoryDashboard.description,
        });

        await editTask(
            dashboardPage,
            originalTitle,
            newTitle,
            newDescription
        );

        await dashboardPage.checkCreateTask(newTitle);
        await dashboardPage.clickOnTheDeleteBtn(newTitle);
    });

    test(`[TC-8] - Delete task`, async ({ dashboardPage }) => {
        const title = dataFactoryDashboard.title;
        const description = dataFactoryDashboard.description;

        await createTask({
            dashboardPage,
            title,
            description,
        });

        await deleteTask(dashboardPage, title);
        await dashboardPage.checkTaskDoesNotExist(title);
    });
});