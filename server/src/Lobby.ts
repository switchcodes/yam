import {LobbyState} from "./LobbyState";
import User from "./User";

export default class Lobby {
	name: string;
	users: User[];
	maxUsers: number;
	state: LobbyState;

	constructor(lobbyName: string, maxUsers: number) {
		this.users = [];
		this.name = lobbyName;
		this.maxUsers = maxUsers;
		this.state = LobbyState.CREATING;
	}

	addUser(user: User): boolean{
    if(this.maxUsers == this.users.length) return false;
		this.users.push(user);
    return;
	}

  getUser(userName: string): User {
    let returnUser: User;
		this.users.forEach((user) =>{
			if(user.name == userName){
        returnUser = user;
      }
		});
    return returnUser;
	}

  removeUser(userToRemove: User){
		this.users.filter((user) => user != userToRemove);
	}

  setMaxUsers(maxUsers: number){
    this.maxUsers = maxUsers;
  }

  getMaxUsers(): number{
    return this.maxUsers;
  }

  setState(state: LobbyState){
    this.state = state;
  }

  getState(): LobbyState{
    return this.state;
  }

	addAI = () => {
		throw new Error("addAI() not implemented.");
	};

	join = (user) => {
		throw new Error("addAI() not implemented.");
	};

	leave = (user) => {
		throw new Error("addAI() not implemented.");
	};
}

