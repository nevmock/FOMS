import type { Level, Officer } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import type { TGetAll, TGetDetail } from '$lib/server/types/ServiceLayer';
class OfficerService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<TGetAll<Officer> | null> => {
		try {
			const result: TGetAll<Officer> | null = { data: null, recordsTotal: 0 };

			const search = payload?.search;

			const records = await prisma.officer.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search?.toLowerCase()
									}
								}
							]
						}
					: undefined,
				// skip: payload.start ?? 0,
				// take: payload.length ?? this.DEFAULT_SIZE,
				orderBy: {
					created_at: 'desc'
				}
			});

			const recordsTotal = await prisma.officer.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search?.toLowerCase()
									}
								}
								// {
								// 	level: {
								// 		contains: search?.level
								// 	}
								// },
								// {
								// 	officer: {
								// 		contains: search?.officer
								// 	}
								// },
								// {
								// 	basic_salary: {
								// 		contains: parseFloat(search?.basicSalary)
								// 	}
								// }
							]
						}
					: undefined
			});

			result.data = records;
			result.recordsTotal = recordsTotal.length || 0;

			return result;
		} catch (err: unknown) {
			return null;
		}
	};

	public getDetail = async (id: string): Promise<TGetDetail<any> | null> => {
		const records = await prisma.officer.findUnique({
			where: {
				id: id
			},
			include: {
				position_links: {
					include: {
						position: true
					}
				}
			}
		});

		return {
			data: records,
			recordsTotal: records?.length || 0
		};
	};

	public save = async (payload: any): Promise<TGetDetail<Officer> | null> => {
		try {
			let records: Level | null = null;
			if (payload.id && payload.id !== '' && payload.id !== null) {
				records = await prisma.officer.update({
					where: {
						id: payload.id
					},
					data: {
						name: payload.name
					}
				});
			} else {
				records = await prisma.officer.create({
					data: {
						name: payload.name
					}
				});
			}

			return { data: records, recordsTotal: JSON.parse(JSON.stringify(records)).length || 0 };
		} catch (e: any) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.officer.delete({
			where: {
				id: id
			}
		});
	};
}

export default OfficerService;
