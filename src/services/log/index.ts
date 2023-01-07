export default class LogService {

  public log(...args: any[]): void {
    console.log(...args);
  }

  public error(description: string, ...args: any[]): void {
    console.error(`Ошибка ${description}: `, ...args);
  }
}