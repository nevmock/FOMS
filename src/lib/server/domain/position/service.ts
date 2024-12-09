import type { IPositionService } from '$lib/server/interfaces/positionInterface';
import type { Company, Position } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { positionSchema } from '$lib/server/schema/position';
import type { TGetAll } from '$lib/server/types/ServiceLayer';
import { camelToSnake } from '$lib/server/utils/caseParser';
class PositionService implements IPositionService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<TGetAll<Position> | null> => {
		try {
			const result: TGetAll<Position> | null = { data: null, recordsTotal: 0 };

			const search = payload?.search;
			const advSearch = payload?.advSearch;

			const positionRecords = await prisma.position.findMany({
				where: payload.search
					? {
							OR: [
								advSearch
									? {
											company_id: {
												contains: advSearch?.companyId
											}
										}
									: undefined
								// {
								// 	level_id: {
								// 		contains: search?.level_id
								// 	}
								// },
								// {
								// 	officer: {
								// 		contains: search?.officer
								// 	}
								// },
								// {
								// 	basic_salary: {
								// 		contains: parseFloat(Stringsearch)
								// 	}
								// }
							]
						}
					: undefined,
				skip: parseInt(String(payload.start)) - 1 || 0,
				take: parseInt(String(payload.length)) || this.DEFAULT_SIZE,
				orderBy: {
					created_at: 'desc'
				},
				include: {
					company: true,
					detailPositions: {
						include: {
							level: true,
							officer: true
						}
					}
				}
			});

			const recordsTotal = await prisma.position.findMany({
				where: payload.search
					? {
							OR: [
								advSearch
									? {
											company_id: {
												contains: advSearch?.companyId
											}
										}
									: undefined
								// {
								// 	level_id: {
								// 		contains: search?.level_id
								// 	}
								// },
								// {
								// 	officer: {
								// 		contains: search?.officer
								// 	}
								// },
								// {
								// 	basic_salary: {
								// 		contains: parseFloat(Stringsearch)
								// 	}
								// }
							]
						}
					: undefined
			});

			console.info('test');
			// console.info(positionRecords);
			result.data = positionRecords;
			result.recordsTotal = recordsTotal.length || 0;

			return result;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<any> => {
		const records = await prisma.position.findUnique({
			where: {
				id: id
			},
			include: {
				detailPositions: {
					include: {
						level: true,
						officer: true
					}
				}
			}
		});

		// if (records && records.detailPositions) {
		// 	records.detailPositions = records.detailPositions.map((detail) => {
		// 		return {
		// 			...detail,
		// 			level_id: undefined,
		// 			officer_id: undefined
		// 		};
		// 	});
		// }

		return {
			data: records,
			recordsTotal: records?.length || 0
		};
	};

	public save = async (payload: positionSchema) => {
		try {
			if (payload.id && payload.id !== '' && payload.id !== null) {
				await prisma.position.update({
					where: {
						id: payload.id
					},
					data: {
						company_id: payload.companyId,
						basic_salary: parseFloat(payload.basicSalary)
					}
				});

				// delete -> create
				await prisma.detailPosition.deleteMany({
					where: {
						position_id: payload.id
					}
				});

				const newPayload = payload.options.map((v) => {
					return {
						...v,
						positionId: payload.id
					};
				});

				await prisma.detailPosition.createMany({
					data: newPayload
				});

				// beforeSelected -> false -> currentSelected -> true
			} else {
				const position = await prisma.position.create({
					data: {
						company_id: payload.companyId,
						basic_salary: parseFloat(payload.basicSalary)
					}
				});

				const newPayload = payload.options?.map((v) => {
					return camelToSnake({
						...v,
						id: undefined,
						positionId: position.id
					});
				});

				console.info(newPayload);
				await prisma.detailPosition.createMany({
					data: newPayload
				});
			}
		} catch (e: unknown) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.position.delete({
			where: {
				id: id
			}
		});
	};
}

export default PositionService;
