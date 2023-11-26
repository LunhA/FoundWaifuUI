import { STORAGE_KEY } from '@/consts/commons';
import { commonStorage } from './storage-service';

export const authService = {
    getSession() {
      const session = commonStorage.getItem(STORAGE_KEY.SESSIONS);
  
      return session;
    },
    getUser(username) {
      const users = commonStorage.getItem(STORAGE_KEY.USERS);
  
      if (!users) {
        return null;
      }
  
      const user = users.find((user) => user.username === username);
  
      return user;
    },
    register({ username, password }) {
      if (!username || !password) {
        return { ok: false };
      }
  
      let users = commonStorage.getItem(STORAGE_KEY.USERS);
  
      const newUser = { username, password, createdAt: new Date().getTime() };
  
      if (users) {
        users.push(newUser);
      } else {
        users = [newUser];
      }
  
      commonStorage.setItem(STORAGE_KEY.USERS, users);
  
      return {
        ok: true,
        user: {
          username: newUser.username,
          createdAt: newUser.createdAt,
        },
      };
    },
    login({ username, password }) {
      if (!username || !password) {
        return { ok: false };
      }
  
      const user = this.getUser(username);
  
      if (!user) {
        return { ok: false };
      }
  
      if (user.password !== password) {
        return { ok: false };
      }
  
      commonStorage.setItem(STORAGE_KEY.SESSIONS, {
        username: username,
        loggedAt: new Date().getTime(),
      });
  
      return {
        ok: true,
        user: {
          username: username,
        },
      };
    },
    logout() {
      commonStorage.setItem(STORAGE_KEY.SESSIONS, null);
    },
  };