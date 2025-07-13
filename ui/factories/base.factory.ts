import {emailFactory} from "./login.factory";
import {dashboardFactory} from "./dashboard.factory";

export const dataFactoryLogin = emailFactory.build();
export const dataFactoryDashboard = dashboardFactory.build();