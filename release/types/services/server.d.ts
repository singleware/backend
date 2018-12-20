import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';
import { Request, Service } from '../types';
import { Settings } from './settings';
/**
 * Back-end HTTP service class.
 */
export declare class Server extends Class.Null implements Service {
    /**
     * HTTP server.
     */
    private server;
    /**
     * Service settings.
     */
    private settings;
    /**
     * Service events.
     */
    private events;
    /**
     * Create an unprocessed request with the specified parameters.
     * @param address Request address.
     * @param method Request method.
     * @param path Request path
     * @param search Request search parameters.
     * @param headers Request headers.
     * @returns Returns the created request object.
     */
    private createRequest;
    /**
     * Request event handler
     * @param request Request message.
     * @param response Response message.
     */
    private requestHandler;
    /**
     * Response event handler.
     * @param request Request information.
     * @param response Response manager.
     */
    private responseHandler;
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings: Settings);
    /**
     * Receive request event.
     */
    readonly onReceive: Observable.Subject<Request>;
    /**
     * Send response event.
     */
    readonly onSend: Observable.Subject<Request>;
    /**
     * Error response event.
     */
    readonly onError: Observable.Subject<Request>;
    /**
     * Starts the service listening.
     */
    start(): void;
    /**
     * Stops the service listening.
     */
    stop(): void;
}
