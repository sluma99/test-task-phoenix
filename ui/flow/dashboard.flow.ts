// src/flow/task.flow.ts

import { DashboardPage } from "../pages/dashboard.page";

interface DashboardFlow {
    dashboardPage: DashboardPage;
    title: string;
    description: string;
}

export const createTask = async ({ dashboardPage, title, description }: DashboardFlow) => {
    await dashboardPage.clickOnTheAddNewTaskBtn();
    await dashboardPage.fillDescriptionField(description);
    await dashboardPage.fillTitleField(title);
    await dashboardPage.clickOnTheCreateTaskBtn();
};

export const deleteTask = async (dashboardPage: DashboardPage, title: string) => {
    await dashboardPage.clickOnTheDeleteBtn(title);
};

export const editTask = async (
    dashboardPage: DashboardPage,
    originalTitle: string,
    newTitle: string,
    newDescription: string
) => {
    await dashboardPage.clickOnTheEditBtn(originalTitle, newTitle);
    await dashboardPage.fillDescriptionField(newDescription);
};


