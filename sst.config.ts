import { SSTConfig } from "sst";
import { examplestack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "rest-api-ts",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(examplestack);
  },
} satisfies SSTConfig;
