import * as Chance from 'chance';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const chance = new Chance.Chance();

const main = async () => {
	// Seed Companies
	for (let i = 0; i < 10; i++) {
		const company = await prisma.company.create({
			data: {
				name: chance.company(),
				address: chance.address(),
				code: chance
					.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' })
					.toUpperCase(),
				logo_uri: chance.url()
			}
		});
		console.log('Company created:', company);

		// Seed Positions for each company
		for (let j = 0; j < 3; j++) {
			const position = await prisma.position.create({
				data: {
					basic_salary: chance.floating({ min: 3000, max: 10000, fixed: 2 }),
					company_id: company.id
				}
			});
			console.log('Position created:', position);

			// Seed Levels for each position
			const level = await prisma.level.create({
				data: {
					name: chance.profession()
				}
			});
			console.log('Level created:', level);

			// Seed Officers for each level
			const officer = await prisma.officer.create({
				data: {
					name: chance.name()
				}
			});
			console.log('Officer created:', officer);

			// Seed DetailPosition
			const detailPosition = await prisma.detailPosition.create({
				data: {
					position_id: position.id,
					level_id: level.id,
					officer_id: officer.id,
					is_active: chance.bool()
				}
			});
			console.log('DetailPosition created:', detailPosition);

			// Seed Employees for each position
			for (let k = 0; k < 2; k++) {
				const employee = await prisma.employee.create({
					data: {
						company_id: company.id,
						position_id: position.id,
						nip: chance.natural({ min: 1000000000, max: 9999999999 }).toString(),
						name: chance.name(),
						tmt: chance.date({ year: 2000 }),
						gender: chance.pickone(['MAN', 'WOMAN']),
						whatsapp_number: chance.phone({ formatted: true }),
						email: chance.email()
					}
				});
				console.log('Employee created:', employee);

				// Seed Salary for each employee
				const salary = await prisma.salary.create({
					data: {
						employee_id: employee.id,
						month_salary: chance.date({ string: true }).toString(),
						position_allowance: chance.floating({ min: 500, max: 2000, fixed: 2 }),
						bjps_allowance: chance.floating({ min: 100, max: 500, fixed: 2 }),
						tax_allowance: chance.floating({ min: 50, max: 200, fixed: 2 }),
						other_allowance: chance.sentence(),
						position_deduction: chance.floating({ min: 50, max: 200, fixed: 2 }),
						bpjs_deduction: chance.floating({ min: 20, max: 100, fixed: 2 }),
						tax_deduction: chance.floating({ min: 10, max: 50, fixed: 2 }),
						other_deduction: chance.sentence()
					}
				});
				console.log('Salary created:', salary);
			}
		}
	}
};

main()
	.then(() => prisma.$disconnect())
	.catch((e) => {
		console.error(e);
		prisma.$disconnect().finally(() => process.exit(1));
	});
