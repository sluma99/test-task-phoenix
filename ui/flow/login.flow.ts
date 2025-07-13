import {Page, test} from '@playwright/test';
import {BaseFixture} from "../fixture/base.fixture";

type TestContext = Pick<BaseFixture, 'loginPage'> & { page: Page };

export async function successfulLogin(
    context: TestContext,
    email: string,
    password: string,
): Promise<void> {
    const { page, loginPage} = context;

    await test.step('Successful login', async () => {
        await loginPage.clickOnTheLoginBtn()
        await loginPage.fillEmailInput(email)
        await loginPage.fillPasswordInput(password)
        await loginPage.clickOnTheSubmitBtn()
        await loginPage.verifyHeaderText("Your Kanban Board");
    });
}
