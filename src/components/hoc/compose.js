const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrap, func) => {
            return func(wrap)
    }, comp)
};
export default compose;