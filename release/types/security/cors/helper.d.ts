/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Aliases from '../../aliases';
import { Settings } from './settings';
/**
 * CORS helper class.
 */
export declare class Helper extends Class.Null {
    /**
     * Set all the CORS headers in the specified request.
     * @param request Request information.
     * @param settings CORS settings.
     */
    static setHeaders(request: Aliases.Request, settings: Settings): void;
}
