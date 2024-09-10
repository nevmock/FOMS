export class OurBaseError extends Error {
	public errorCode: number;
	public statusCode: string;

	constructor(errorCode: number, statusCode: string, message: string) {
		super(message);
		this.errorCode = errorCode;
		this.statusCode = statusCode;
		this.name = 'BaseError';
	}
}