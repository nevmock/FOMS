export const snakeToCamel = (item: unknown): unknown => {
	if (Array.isArray(item)) {
		return item.map((el: unknown) => snakeToCamel(el));
	} else if (typeof item === 'function' || item !== Object(item)) {
		return item;
	}
	return Object.fromEntries(
		Object.entries(item as Record<string, unknown>).map(([key, value]: [string, unknown]) => [
			key.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace(/[-_]/g, '')),
			snakeToCamel(value)
		])
	);
};

export const camelToSnake = (obj: unknown) => {
	if (typeof obj != 'object') return obj;
	const newObj = { ...obj };
	for (const oldName in newObj) {
		const newName = oldName.replace(/([A-Z])/g, function ($1) {
			return '_' + $1.toLowerCase();
		});

		if (newName != oldName) {
			if (Object.prototype.hasOwnProperty.call(newObj, oldName)) {
				newObj[newName] = newObj[oldName];
				delete newObj[oldName];
			}
		}

		if (typeof newObj[newName] == 'object') {
			newObj[newName] = camelToSnake(newObj[newName]);
		}
	}
	return newObj;
};
