/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Application from '@singleware/application';

import { Callable } from './types';
import { Settings } from './settings';
import { CORS } from './cors';
import { Response } from './response';
import { Input } from './input';
import { Output } from './output';

/**
 * Back-end application class.
 */
@Class.Describe()
export class Main extends Application.Main<Input, Output> {
  /**
   * Application settings.
   */
  @Class.Protected()
  protected settings: Settings;

  /**
   * Process event handler.
   * @param match Matched routes.
   * @param callback Handler callback.
   */
  @Class.Protected()
  protected async process(match: Application.Match<Input, Output>, callback: Callable): Promise<void> {
    const methods = match.variables.methods;
    const output = match.detail.output;
    const input = match.detail.input;
    const cors = <CORS>match.variables.cors;

    if (cors) {
      cors.origin = cors.origin || <string>input.headers['origin'];
      Response.setCORS(output, cors);
    }

    if ((methods instanceof Array && methods.indexOf(input.method) !== -1) || methods === input.method || methods === '*') {
      await super.process(match, callback);
    } else if (input.method === 'OPTIONS') {
      Response.setStatus(output, 204);
    } else {
      await match.next();
    }
  }

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    super({ separator: '/', variable: /^\{([a-z_0-9]+)\}$/ });
    this.settings = settings;
  }
}
