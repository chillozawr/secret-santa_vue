const curBack = localStorage.getItem("curBack")
	? localStorage.getItem("curBack")
	: '';

export default {
	namespaced: 'true',
	state: {
		currentBackground: curBack
	},
	mutations: {
		setNewBackground(state, background) {
			state.currentBackground = background;
			localStorage.setItem(
				"curBack",
				background
			)
		}
	},
	actions: {
		setBack({commit}, back) {
			commit('customization/setNewBackground', back)
		}
	}
}