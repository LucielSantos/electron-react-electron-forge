import Store, { Schema } from "electron-store";

const schema: Schema<any> = {
  count: {
    type: "number",
    default: 0,
  },
};

const store = new Store({ schema, watch: true });

export { store };
