// List all endpoints here
// @ts-check
import { Endpoint } from "./apiModel";
import { HTTP_METHODS } from "./httpMethods";

// ******************
// Endpoint class takes 3 params in constructor ==> "endpoint", "http-method", "API-version"
// By default, version is set to v1
// ******************
export const API = {
  AUTH: {
    LOGIN: new Endpoint("endpoint", HTTP_METHODS.POST)
  },
  PRIVATE: {
    GALLARY: new Endpoint("/list", HTTP_METHODS.GET, "v2")
  }
};

