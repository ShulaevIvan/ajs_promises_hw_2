import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  constructor(data) {
    this.data = data;
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {

      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points,
    };
  }

  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => new GameSavingLoader(JSON.parse(jsonData)));
  }
}
