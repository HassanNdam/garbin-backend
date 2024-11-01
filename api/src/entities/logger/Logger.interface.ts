export interface LoggerInterface {
    error(message: string, context?: any[]): void;
    warn(message: string, context?: any[]): void;
    info(message: string, context?: any[]): void;
    http(message: string, context?: any[]): void;
    debug(message: string, context?: any[]): void;
}
