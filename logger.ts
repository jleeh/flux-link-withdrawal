import {Category,CategoryServiceFactory,CategoryConfiguration,LogLevel} from "typescript-logging";

CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));

export const log = new Category("flux-link-withdrawal")
