import type { ICompanyService } from '$lib/server/interfaces/companyInterface';
import type { Company } from '@prisma/client';
import { prisma } from '$lib/server/prisma';
import type { OurPayload } from '$lib/server/types/request';
class CompanyService implements ICompanyService {
	private DEFAULT_SIZE = 5;
	public getAll = async (payload: OurPayload): Promise<Array<Company> | null> => {
		try {
			const search = payload?.search ? JSON.parse(payload?.search) : null;
			const results = await prisma.company.findMany({
				where: payload.search
					? {
							OR: [
								{
									name: {
										contains: search?.name
									}
								},
								{
									address: {
										contains: search?.address
									}
								},
								{
									code: {
										contains: search?.code
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
			return null;
		}
	};

	public getDetail = async (id: string): Promise<Company> => {
		return await prisma.company.findUnique({
			where: {
				id: id
			},
			include: {
				employees: true,
				positions: true
			}
		});
	};

	public save = async (payload: Company) => {
		if (payload.id && payload.id !== '' && payload.id !== null) {
			return await prisma.company.update({
				where: {
					id: payload.id
				},
				data: {
					name: payload.name,
					address: payload.address,
					code: payload.code,
					logo_uri: payload.logo_uri
				}
			});
		} else {
			return await prisma.company.create({
				data: {
					name: payload.name,
					address: payload.address,
					code: payload.code,
					logo_uri: payload.logo_uri
				}
			});
		}
	};

	public delete = async (id: string) => {
		return await prisma.company.delete({
			where: {
				id: id
			}
		});
	};
}

export default CompanyService;
