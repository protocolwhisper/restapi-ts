import { Api, StackContext } from "sst/constructs";

export function examplestack({ stack }: StackContext) {
  // create the http api
  const api = new Api(stack, "api", {
    routes: {
      "get /notes": "packages/functions/src/list.main",
      "get /notes/{id}": "packages/functions/src/get.main",
      "put /notes/{id}": "packages/functions/src/update.main",
    },
  });

  // show the api endpoint in the output
  stack.addOutputs({
    apiendpoint: api.url,
  });
}
