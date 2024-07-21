import { DEVICE_TYPES } from "../constants/breakpoints";

export interface IPageContext {
  params: Record<string, unknown>;
  searchParams: { device: DEVICE_TYPES } & Record<string, unknown>;
}
