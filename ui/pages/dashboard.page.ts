import {expect, Page, test} from "@playwright/test";
import { CreateTask } from '../components/create.task';

export class DashboardPage {
    private readonly createTask: CreateTask;

    constructor(
        private readonly page: Page,
        private readonly addNewTaskBtn = page.locator(`div[class='flex items-center gap-2'] button:nth-child(1)`),
        private readonly сardsSel = page.locator(`div[class='leading-none font-semibold']`),
        private readonly dotsSelTemplate = `//div[@class='leading-none font-semibold' and contains(text(), "$TITLE")]/../../button`,
        private readonly deleteBtn = page.locator("div[role='menuitem']", {hasText: 'Delete'}),
        private readonly editBtn = page.locator("div[role='menuitem']", {hasText: 'Edit'}),
        private readonly saveChangesBtn = page.locator("button[type='submit']"),
    ) {
        this.createTask = new CreateTask(page);
    }

    async clickOnTheAddNewTaskBtn() {
        await test.step("I click on the `Add New Task` button", async () => {
            await this.addNewTaskBtn.waitFor({state: 'visible'});
            await this.addNewTaskBtn.scrollIntoViewIfNeeded();

            await Promise.all([
                this.addNewTaskBtn.isVisible(),
                this.addNewTaskBtn.click(),
            ]);
        });
    }

    async checkCreateTask(taskTitle: string) {
        await test.step("I check created task on the dashboard", async () => {
            await this.page.waitForTimeout(500)
            const allTitles = await this.сardsSel.allTextContents();
            expect(allTitles).toContain(taskTitle);
        });
    }

    async checkTaskDoesNotExist(taskTitle: string) {
        await test.step("I check task does not exist on the dashboard", async () => {
            await this.page.waitForTimeout(500);
            const allTitles = await this.сardsSel.allTextContents();
            expect(allTitles).not.toContain(taskTitle);
        });
    }

    async clickOnTheDeleteBtn(text: string) {
        await test.step("I click on the `Delete` button", async () => {
            const dotsSel = this.dotsSelTemplate.replace('$TITLE', text);
            const dotsBtn = this.page.locator(dotsSel);
            await dotsBtn.click();
            await this.deleteBtn.isVisible();
            await this.deleteBtn.click();
        });
    }

    async clickOnTheEditBtn(text: string, title: string) {
        await test.step("I click on the `Edit` button", async () => {
            const dotsSel = this.dotsSelTemplate.replace('$TITLE', text);
            const dotsBtn = this.page.locator(dotsSel);
            await dotsBtn.click();
            await this.editBtn.isVisible();
            await this.editBtn.click();
            await this.createTask.fillTitleInput(title)
            await this.saveChangesBtn.click()
        });
    }

    async fillTitleField(text: string) {
        await test.step("I fill 'Title' field", async () => {
            await this.createTask.fillTitleInput(text)
        });
    }

    async fillDescriptionField(text: string) {
        await test.step("I fill 'Description' field", async () => {
            await this.createTask.fillDescriptionInput(text)
        });
    }

    async clickOnTheCreateTaskBtn() {
        await test.step("I click on the 'Create Task' button", async () => {
            await this.createTask.clickOnTheCreateTaskBtn()
        });
    }
}