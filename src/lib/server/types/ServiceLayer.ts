export type TGetAll<T> = { data: Array<T> | null; recordsTotal: number };
export type TGetDetail<T> = { data: T | null; recordsTotal: number };
