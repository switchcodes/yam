import Lobby from "./Lobby"

export default class LobbyMananger {
	lobbies: Lobby[];

	constructor() {
		this.lobbies = [];
	}

	createLobby(lobbyName: string, maxUsers: number) {
		this.lobbies.push(new Lobby(lobbyName, maxUsers));
	}

	deleteLobby(lobbyName: string) {
		this.lobbies.filter((lobby) => lobby.name != lobbyName);
	}

	getLobby(lobbyName: string): Lobby {
    let returnLobby: Lobby;
		this.lobbies.forEach((lobby) =>{
			if(lobby.name == lobbyName){
        returnLobby = lobby;
      }
		});
    return returnLobby;
	}

	getLobbyCount(): number{
    return this.lobbies.length;
	}
}
