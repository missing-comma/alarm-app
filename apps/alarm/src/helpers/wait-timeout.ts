export const waitTimeout = <Args extends any[], R>(
	fn: (...args: Args) => R,
	ms: number,
	...args: Args
) => {
	console.log("waiting - start");

	const wrapWithLog = (r: any) => {
		return (...args: any) => {
			console.log("waiting - end");
			return r(...args);
		};
	};

	return new Promise<R>((resolve, reject) => {
		setTimeout(
			(...args: Args) => {
				try {
					const r = wrapWithLog(resolve);
					r(fn(...args));
				} catch (err) {
					reject(err);
				}
			},
			ms,
			...args
		);
	});
};
