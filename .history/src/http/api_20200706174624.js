import service from "./index"

export default {
    // 登录
    // login(params){    //传形参
    //     //所有的方法必须return
    //     return service.post('./user/login',{username,password})
    // },
    getLogin({ nickname, password, verify }) {    //也可传实际参数
        //所有的方法必须return
        console.log(nickname);
        console.log(password);
        return service.post('/login', { nickname, password, verify })
    },
    // 注册
    getRegister(nickname, password, verify) {
        return service.post('/register', { nickname: nickname, password: password, verify: verify })
    },

    getClassification(id) {
        return service.get(`/classification?mallSubId=${id}`)
    },
    getRecommend() {
        return service.get('/recommend')
    },

    // 1.首页
    getHome() {
        return service.get('/goods/home')
    },

    // 2.为你推荐
    getRecommend() {
        return service.get('/goods/recommend')
    },

    // 3.所有商品
    getAllGoods(
        page,
        size,
        sort,
        priceGt,
        priceLte
    ) {
        return service.get(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}&priceGt=${priceGt}&priceLte=${priceLte}`)
    },

    // 4.搜索商品
    getSearch(keyword) {
        return service.get(`/goods/search?keyword=${keyword}`)
    },

    // 5.商品详情
    getDetail(id) {
        return service.get(`/goods/detail?productId=${id}`)
    },

    // 6.登录
    getLogin({username,password}) {
        return service.post('/users/login',{username,password})
    },

    // 7.注册
    getRegister({username,password}) {
        return service.post('/users/register',{username,password})
    },

    // 8.加入购物车
    getAddCart({username,password}) {
        return service.post('/goods/addCart',{username,password})
    },
}