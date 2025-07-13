import {dataFactoryLogin} from '../factories/base.factory';
import {ErrorText} from "../enum/login.enum";

export const testDataEmail = [
    {
        id: "[TC - 1]",
        description: "Invalid email",
        password: dataFactoryLogin.password,
        email: dataFactoryLogin.invalidEmail,
        expectedError: ErrorText.INVALID_EMAIL,
    },
    {
        id: "[TC - 2]",
        description: "Invalid email and Password",
        password: dataFactoryLogin.password,
        email: dataFactoryLogin.email,
        expectedError: ErrorText.INVALID_EMAIL_PASSWORD,
    },
];

export const testDataWithInvalidEmail = [
    {
        id: "[TC - 3]",
        description: "Invalid email without @",
        password: dataFactoryLogin.password,
        email: dataFactoryLogin.emailWithoutAt,
        getExpectedError: (email: string) =>
            `Please include an '@' in the email address. '${email}' is missing an '@'.`,
    },

    {
        id: "[TC - 4]",
        description: "Invalid email without username",
        password: dataFactoryLogin.password,
        email: "@gmail.com",
        expectedError: ErrorText.INVALID_EMAIL_WITHOUT_USERNAME,
    },

    {
        id: "[TC - 5]",
        description: "Invalid email without domain name",
        password: dataFactoryLogin.password,
        email: dataFactoryLogin.username,
        getExpectedError: (email: string) =>
            `Please include an '@' in the email address. '${email}' is missing an '@'.`,
    }
];