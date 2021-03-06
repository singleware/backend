import * as Class from '@singleware/class';
import * as Aliases from '../../aliases';
import * as Responses from '../../responses';
import { Settings } from './settings';
/**
 * Default file handler class.
 */
export declare class Default extends Class.Null {
    /**
     * Assets path.
     */
    private static assetsPath;
    /**
     * Handler settings.
     */
    private settings;
    /**
     * Gets the MIME type that corresponds to the extension of the specified file.
     * @param path File path.
     * @returns Returns the corresponding MIME type or undefined when the type was not found.
     */
    protected getMimeType(path: string): string | undefined;
    /**
     * Sets the content of a default error file into the give output response.
     * @param output Output response.
     * @param status Output status.
     * @param information Error information.
     */
    protected setResponseError(output: Responses.Output, status: number, information: string): Promise<void>;
    /**
     * Set the content of the specified file into the given output response.
     * @param output Output response.
     * @param path File path.
     */
    protected setResponseFile(output: Responses.Output, path: string): Promise<void>;
    /**
     * Default constructor.
     * @param settings Handler settings.
     */
    constructor(settings: Settings);
    /**
     * Exception response processor.
     * @param match Matched rote.
     */
    exceptionResponse(match: Aliases.Match): Promise<void>;
    /**
     * Default response processor.
     * @param match Matched rote.
     */
    defaultResponse(match: Aliases.Match): Promise<void>;
    /**
     * Gets the base directory.
     */
    get baseDirectory(): string;
    /**
     * Gets the index file.
     */
    get indexFile(): string;
    /**
     * Gets the strict types status.
     */
    get strictTypes(): boolean;
    /**
     * Gets the handler types.
     */
    get types(): Responses.Types;
}
