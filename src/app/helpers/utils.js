export const LocalStorage = {
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},

	get(key) {
		const value = localStorage.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return null;
		}
	},
};

export const addDataToLocalStorage = (email, data) => {
	const userRating = LocalStorage.get('usersRating') || {};
	const updatedUserRating =
		userRating && userRating[email] ? userRating : { ...userRating, [email]: data || null };
	LocalStorage.set('usersRating', updatedUserRating);
	LocalStorage.set('currentUser', email);
};
