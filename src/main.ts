import { HelloWorldApplication } from './application.js';

pkg.initGettext();
pkg.initFormat();

export function main(argv: string[]) {
    const application = new HelloWorldApplication();
    return application.runAsync(argv);
}
