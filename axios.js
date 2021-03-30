class Axios{
  constructor(defaultConfig) {
    this.defaultConfig = defaultConfig;
  }
  fetch() {
    return Promise.resolve(1)
  }
}

function createInstance() {
  let context = new Axios();
  let instance = context.fetch
  return instance
}

let axios = createInstance()