import {expect, Page, test} from "@playwright/test";

export class CreateTask {

    constructor(
        private readonly page: Page,
        private readonly descriptionInput = page.locator(`textarea[name='description']`),
        private readonly titleInput = page.locator(`input[name='title']`),
        private readonly priorityDropDown = page.locator(`button[role='combobox']`),
        private readonly createTaskBtn = page.locator(`button[type='submit']`),
    ) {
    }

    async fillDescriptionInput(text: string) {
        await test.step("I fill `Description` field", async () => {
            await this.descriptionInput.isVisible();
            await this.descriptionInput.fill(text);
        });
    }

    async fillTitleInput(text: string) {
        await this.titleInput.isVisible();
        await this.titleInput.fill(text);
    }

    async clickOnTheCreateTaskBtn() {
        await test.step("I fill `Title` field", async () => {
            await this.createTaskBtn.isVisible();
            await this.createTaskBtn.click();
        });
    }
}