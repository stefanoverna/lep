/**
 * Base functions for interacting with other apis
 *
 * Requests will return either a ApiResponse or ApiError (defined in @typedef below)
 * For more info see the request method
 *
 * @module ApiFactory
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Object} ApiResponse.json
 * @property {ApiError} ApiResponse.error - Error object either from this module or the api
 */

/**
 * @typedef {Object} ApiError
 * @property {Object} ApiError.error
 * @property {string} ApiError.error.code - To identify the type of error
 * @property {string} ApiError.error.message
 */

export function ApiError(code, message) {
  return {
    error: {
      code,
      message,
    },
  };
}

/**
 * API
 *
 * @param {string} url
 */
export default function API({ url: baseUrl }) {
  /**
   * Parse api response
   *
   * @private
   * @async
   *
   * @param {object} response
   * @returns {ApiResponse}
   */
  async function parseAPIResponse(response) {
    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const res = {
      status: response.status,
    };

    if (isJson) {
      res.json = await response.json();

      if (res.json.error) {
        res.error = res.json.error;
      }
    }

    return res;
  }

  /**
   * Generic request template
   *
   * @private
   * @async
   *
   * @param {string} url
   * @param {object} data
   * @param {object} [options]
   * @param {string} [options.method]
   * @param {string} [options.formDataObject] - Is this request sending a JS FormData object
   * @returns {ApiResponse}
   */
  async function request(
    url,
    data,
    { method = "POST", formDataObject = false } = {}
  ) {
    const headers = {
      "Content-Type": "application/json",
    };
    // Let the browser decide the content type
    if (formDataObject) delete headers["Content-Type"];

    const requestOptions = {
      method,
      headers: new Headers(headers),
      credentials: "include",
    };

    if (method !== "GET") {
      requestOptions.body = formDataObject ? data : JSON.stringify(data);
    }

    let response;
    try {
      response = await fetch(`${baseUrl}${url}`, requestOptions);
    } catch (error) {
      return ApiError("GENERIC", "Failed to communicate with the server");
    }

    return parseAPIResponse(response);
  }

  return Object.freeze({
    get: (url, data, options) =>
      request(url, data, { ...options, method: "GET" }),
    post: (url, data, options) =>
      request(url, data, { ...options, method: "POST" }),
    put: (url, data, options) =>
      request(url, data, { ...options, method: "PUT" }),
    delete: (url, data, options) =>
      request(url, data, { ...options, method: "DELETE" }),
  });
}
