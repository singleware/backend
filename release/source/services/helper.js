"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const Class = require("@singleware/class");
/**
 * Services helper class.
 */
let Helper = class Helper extends Class.Null {
    /**
     * Get the first header value from the specified header.
     * @param header Header.
     * @returns Returns the first header value or undefined when there's no header value.
     */
    static getFirstHeaderValue(header) {
        if (header instanceof Array) {
            return this.getFirstHeaderValue(header.shift());
        }
        if (header !== void 0) {
            const value = header.split(',').shift();
            if (value !== void 0) {
                return value.trim();
            }
        }
        return void 0;
    }
    /**
     * Gets the requested domain name.
     * @param incoming Incoming message.
     * @returns Returns the requested domain name or undefined when there's no incoming host header.
     */
    static getDomainName(incoming) {
        return this.getFirstHeaderValue(incoming.headers['host']);
    }
    /**
     * Get the remote address from the specified incoming message.
     * @param incoming Incoming message.
     * @returns Returns the remote address from the incoming message or undefined when there is no remote address.
     */
    static getRemoteAddress(incoming) {
        return (this.getFirstHeaderValue(incoming.headers['x-forwarded-for']) ||
            incoming.connection.remoteAddress ||
            incoming.socket.remoteAddress);
    }
    /**
     * Get the remote port from the specified incoming message.
     * @param incoming Incoming message.
     * @returns Returns the remote port from the incoming message or undefined when there is no remote port.
     */
    static getRemotePort(incoming) {
        return (parseInt(this.getFirstHeaderValue(incoming.headers['x-forwarded-port'])) ||
            incoming.connection.remotePort ||
            incoming.socket.remotePort);
    }
    /**
     * Get a new request with the specified parameters.
     * @param connection Request connection.
     * @param method Request method.
     * @param domain Request domain.
     * @param path Request path
     * @param search Request search parameters.
     * @param headers Request headers.
     * @param variables Request variables.
     * @returns Returns the new request information.
     */
    static getRequest(connection, method, domain, path, search, headers, variables) {
        return {
            path: path,
            input: {
                connection: connection,
                method: method,
                domain: domain,
                search: search,
                headers: headers,
                data: Buffer.alloc(0)
            },
            output: {
                status: 501,
                message: 'Not Implemented',
                headers: {},
                data: void 0
            },
            environment: {
                local: {
                    ...variables
                },
                shared: {}
            },
            granted: true
        };
    }
};
__decorate([
    Class.Private()
], Helper, "getFirstHeaderValue", null);
__decorate([
    Class.Public()
], Helper, "getDomainName", null);
__decorate([
    Class.Public()
], Helper, "getRemoteAddress", null);
__decorate([
    Class.Public()
], Helper, "getRemotePort", null);
__decorate([
    Class.Public()
], Helper, "getRequest", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map