const RouteNames = {
    register: '/register',
    login: '/login',
    data: '/allData',
    validate: '/validateUsername'

};
const ProductRouteNames = {
    add: '/add',
    cancel: '/cancel',
    data: '/allData',
    validate: '/validateProduct',
    update: '/update',
    change_state:'/changeState',
    add_review: '/add_review',
    order:'/order'
};

module.exports = {
    RouteNames:RouteNames,
    ProductRouteNames: ProductRouteNames
};
// module.exports = ProductRouteNames;