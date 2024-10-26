export class OurBaseError extends Error {
	public errorCode: number;
	public statusCode: string;

	constructor(
		errorCode: number = 500,
		statusCode: string = 'Internal Server Error',
		message: string
	) {
		super(message);
		this.errorCode = errorCode;
		this.statusCode = statusCode;
		this.name = 'BaseError';
	}
}

// export class OurBaseError extends Error {
// 	errorCode: number;
// 	statusCode: string;
//
// 	constructor(errorCode: number, statusCode: string, message: string) {
// 		super(message);
// 		this.errorCode = errorCode;
// 		this.statusCode = statusCode;
// 		this.name = 'OurBaseError';
// 		Error.captureStackTrace(this, this.constructor);
// 	}
// }

// export class OurBaseError extends Error {
// 	constructor(
// 		public errorCode: number,
// 		public statusCode: string,
// 		message?: string
// 	) {
// 		super(message);
// 		this.name = 'OurBaseError';
// 	}
// }
