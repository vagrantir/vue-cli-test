module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    baseUrl            : '/',
    filenameHashing    : true,
    assetsDir          : 'app',
    indexPath          : './app.php'
};