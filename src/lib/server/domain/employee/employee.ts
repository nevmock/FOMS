import type { IEmployeeService } from '$lib/server/interfaces/employeeInterface';
import type { Employee } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { employeeSchema } from '$lib/server/schema/employee';
class EmployeeService implements IEmployeeService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<Array<Employee> | null> => {
		try {
			const search = payload?.search ? JSON.parse(payload?.search) : null;
			const results = await prisma.employee.findMany({
				where: payload.search
					? {
							OR: [
								// {
								// 	company_id: {
								// 		contains: search?.companyId
								// 	}
								// },
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
								{
									nip: {
										contains: search?.nip
									}
								},
								{
									name: {
										contains: search?.name
									}
								},
								{
									tmt: {
										contains: search?.tmt
									}
								},
								{
									gender: {
										contains: search?.gender
									}
								}
							]
						}
					: undefined,
				skip: payload.start ?? 0,
				take: payload.length ?? this.DEFAULT_SIZE,
				orderBy: {
					created_at: 'desc'
				}
			});

			return results.length > 0 ? results : null;
		} catch (err: unknown) {
			throw new OurBaseError(400, 'Bad Request', err.toString());
		}
	};

	public getDetail = async (id: string): Promise<Employee> => {
		return await prisma.employee.findUnique({
			where: {
				id: id
			}
			// include: {
			// 	employees: true,
			// 	positions: true
			// }
		});
	};

	public save = async (payload: employeeSchema) => {
		try {
			if (payload.id && payload.id !== '' && payload.id !== null) {
				return await prisma.employee.update({
					where: {
						id: payload.id
					},
					data: {
						company_id: payload.companyId,
						level_id: payload.levelId,
						officer_id: payload.officerId,
						nip: payload.nip,
						name: payload.name,
						tmt: payload.tmt,
						gender: payload.gender,
						whatsapp_number: payload.whatsapp,
						email: payload.email
					}
				});
			} else {
				return await prisma.employee.create({
					data: {
						company_id: payload.companyId,
						level_id: payload.levelId,
						officer_id: payload.officerId,
						nip: payload.nip,
						name: payload.name,
						tmt: payload.tmt,
						gender: payload.gender,
						whatsapp_number: payload.whatsapp,
						email: payload.email
					}
				});
			}
		} catch (e: unknown) {
			throw new OurBaseError(400, 'Bad Request', e.toString());
		}
	};

	public delete = async (id: string) => {
		return await prisma.employee.delete({
			where: {
				id: id
			}
		});
	};
}

export default EmployeeService;
