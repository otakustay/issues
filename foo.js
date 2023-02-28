export function foo() {
    try {
        return 1;
    }
    /* c8 ignore start */
    catch (ex) {
        console.error(ex);
    }
    /* c8 ignore stop */
}
