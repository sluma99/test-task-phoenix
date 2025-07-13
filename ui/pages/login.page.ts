import { expect, Page, test } from "@playwright/test";

export class LoginPage {
    constructor(
        private readonly page: Page,
        private readonly loginBtn = page.getByText('Login', { exact: true }),
        private readonly registerBtn = page.locator(`a[href="/auth/register"]`),
        private readonly emailInput = page.locator(`#email`),
        private readonly passwordInput = page.locator(`#password`),
        private readonly submitBtn = page.locator(`button[type='submit']`),
        private readonly headerText = page.locator(`h1[class='text-3xl font-bold']`),
        private readonly errorText = page.locator(`p[class='text-red-500 text-sm']`)
    ) {}

    async clickOnTheLoginBtn() {
        await test.step("I click on the `Login` button", async () => {
            const loginLink = this.loginBtn;
            await loginLink.waitFor({ state: 'visible' });
            await Promise.all([
                loginLink.click()
            ]);
        });
    }

    async clickOnTheSubmitBtn() {
        await test.step("I click on the `Submit` button", async () => {
            await this.submitBtn.isVisible();
            await this.submitBtn.click();
        });
    }

    async clickOnTheRegisterBtn() {
        await test.step("I click on the `Register` button", async () => {
            await this.registerBtn.isVisible();
            await this.registerBtn.click();
        });
    }

    async fillEmailInput(email: string) {
        await test.step("I fill the `Email` field", async () => {
            await this.emailInput.isVisible();
            await this.emailInput.fill(email);
        });
    }

    async fillPasswordInput(password: string) {
        await test.step("I fill the `Password` field", async () => {
            await this.passwordInput.isVisible();
            await this.passwordInput.fill(password);
        });
    }

    async verifyHeaderText(text: string) {
        await test.step("I check the text after login", async () => {
            expect(await this.headerText.textContent()).toBe(text);
        });
    }

    async verifyErrorText(text: string) {
        await test.step("I check the error text", async () => {
            expect(await this.errorText.textContent()).toBe(text);
        });
    }

    async verifyErrorEmail(text: string) {
        await test.step("I check the error text", async () => {
            const validationMessage = await this.emailInput.evaluate(
                el => (el as HTMLInputElement).validationMessage
            );


            expect(validationMessage).toBe(text);
        });
    }



}