import {test} from "../fixture/base.fixture";
import {testDataEmail, testDataWithInvalidEmail} from "../data/login.data";

test.describe("Login", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test(`Login with valid credentials`, async ({page, loginPage}) => {
        await loginPage.clickOnTheLoginBtn()
        await loginPage.fillEmailInput(process.env.EMAIL!)
        await loginPage.fillPasswordInput(process.env.PASSWORD!)
        await loginPage.clickOnTheSubmitBtn()
        await loginPage.verifyHeaderText("Your Kanban Board");
    });

    testDataEmail.forEach((data) => {
        test(`${data.id} ${data.description}`, async ({loginPage}) => {
            const email = data.email
            await loginPage.clickOnTheLoginBtn()
            await loginPage.fillEmailInput(email)
            await loginPage.fillPasswordInput(data.password)
            await loginPage.clickOnTheSubmitBtn()
            await loginPage.verifyErrorText(data.expectedError);
        });
    })

    testDataWithInvalidEmail.forEach((data) => {
        test(`${data.id} ${data.description}`, async ({loginPage}) => {
            const email = data.email
            await loginPage.clickOnTheLoginBtn()
            await loginPage.fillEmailInput(email)
            await loginPage.fillPasswordInput(data.password)
            await loginPage.clickOnTheSubmitBtn()
            const expectedError = data.getExpectedError
                ? data.getExpectedError(data.email)
                : data.expectedError;
            await loginPage.verifyErrorEmail(expectedError);
        });
    })
});