"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Backend = require("../../source");
/**
 * Files server, example class.
 */
let Example = class Example extends Backend.Main {
    constructor() {
        super({
            httpStrictTransportSecurity: {
                maxAge: 3600,
                includeSubDomains: true,
                preload: true
            },
            contentSecurityPolicy: {
                polices: [
                    { name: 'default-src', value: "'self'" },
                    { name: 'child-src', value: "'self'" }
                ]
            }
        });
        // Add console logger.
        this.addLogger(new Backend.Loggers.Console());
        // Add HTTP service.
        this.addService(new Backend.Services.Server({
            debug: true,
            port: 8080
        }));
        // Add request handler.
        this.addHandler(Backend.Handlers.File.Default, {
            strictTypes: true,
            baseDirectory: './examples/files/public',
            indexFile: 'index.html',
            types: {
                html: 'text/html',
                css: 'text/css',
                js: 'application/javascript',
                jpg: 'image/jpeg',
                png: 'image/png'
            }
        });
        // Automatic start.
        this.start();
    }
};
Example = __decorate([
    Class.Describe()
], Example);
// Start application.
new Example();
//# sourceMappingURL=main.js.map