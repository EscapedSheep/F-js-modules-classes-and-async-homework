import getURL from './utils';
import {ADDRESS, PATH, PORT, REGION} from "./constant";

export const url = getURL(ADDRESS, PORT, PATH);
export const region = REGION;
