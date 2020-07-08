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
    getDetail(productId) {
        return service.get(`/goods/detail?productId=${productId}`)
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
    getAddCart({productId}) {
        return service.post('/goods/addCart',{productId})
    },

    // 9.查询购物车
    getCarts() {
        return service.get('/goods/getCarts')
    },

    // 10.删除购物车的商品
    getDelCart({productId}) {
        return service.post('/goods/delCart',{productId})
    },

    // 11.修改购物车数量
    getEditCart({productId,count}) {
        return service.post('/goods/editCart',{productId,count})
    },

    // 12.获取全部收货地址
    getAddressList() {
        return service.get('/address/list')
    },

    // 13.添加收货地址
    getAddaddress({username,phone,address,isDefault}) {
        return service.post('/address/addAddress',{username,phone,address,isDefault})
    },

    // 14.设置默认地址
    getSetDefault({addressId}) {
        return service.post('/address/setDefault',{addressId})
    },

    // 14.修改地址
    getEditAddress({addressId,username,phone,address,isDefault}) {
        return service.post('/address/editAddress',{addressId,username,phone,address,isDefault})
    },

    // 15.删除地址
    getDeleteAddress({addressId}) {
        return service.post('/address/deleteAddress',{addressId})
    },
}