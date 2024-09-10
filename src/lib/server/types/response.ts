export type OurResponse<T> = {
	code: number;
	status: string;
	recordsTotal?: number;
	data: T | null;
	error: any;
}

export type composeResponseParam = {
	code: number;
	status: string;
	recordsTotal?: number;
	data: any;
	error: any;
}