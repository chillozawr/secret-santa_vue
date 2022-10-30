import Vue from "vue";
import VueX from 'vuex';
import players from "@/store/modules/players";
import customization from "@/store/modules/customization";

Vue.use(VueX);
export default new VueX.Store({
	modules: {
		players,
		customization
	}
})