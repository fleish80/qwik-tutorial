export const isServer = (() => {
    // This is a workaround for a bug in REPL which fails to package up of @builder.io/qwik/build.
    // TODO remove this when the bug is fixed.
    try {
        return typeof window == 'undefined';
    } catch (e) {
        return false;
    }
})();
