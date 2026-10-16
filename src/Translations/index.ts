import es from "./es";
import en from "./en";
import { transform } from "motion";

export const translations = {
    es, en
};
export type Language = keyof typeof translations;