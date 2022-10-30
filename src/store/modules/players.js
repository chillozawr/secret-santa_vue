import {v4 as uuidv4} from 'uuid';

const players = localStorage.getItem("players")
	? JSON.parse(localStorage.getItem("players"))
	: [];

const bindedPlayers = localStorage.getItem("bindedPlayers")
	? JSON.parse(localStorage.getItem("bindedPlayers"))
	: [];

export default {
	namespaced: 'true',
	state: {
		players: players,
		bindedPlayers: bindedPlayers
	},
	mutations: {
		addNewPlayer(state, name) {
			const newPlayer = {
				id: uuidv4,
				name
			}
			state.players.push(newPlayer)
			localStorage.setItem(
				"players",
				JSON.stringify(state.players.map((item) => item))
			)
		},
		bindPlayers(state, players) {
			const playersRemake = players.map(item => {
				return {
					id: item.id(),
					name: item.name
				}
			})
			const playersId = playersRemake.map(item => item.id);
			state.bindedPlayers = players.map(item => {
				const currentID = playersId.shift();

				for (let i = playersId.length - 1; i > 0; i--) {
					let j = Math.floor(Math.random() * (i + 1));
					[playersId[i], playersId[j]] = [playersId[j], playersId[i]];
				}
				playersId.push(currentID);

				const id = playersId.shift();

				return {
					id: item.id,
					name: item.name,
					bindedPerson: playersRemake.find(item => item.id === id).name
				}
			})
			localStorage.setItem(
				"bindedPlayers",
				JSON.stringify(state.bindedPlayers.map((item) => item))
			)
		}
	},
	actions: {
		addPlayer({ commit }, name) {
			commit('addNewPlayer', name)
		},
		bindPlayersAct({ commit }, players) {
			commit('bindPlayers', players)
		},
	}
}