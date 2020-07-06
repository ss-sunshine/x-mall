import service from "./index"

export default{
    // 登录
    // login(params){    //传形参
    //     //所有的方法必须return
    //     return service.post('./user/login',{username,password})
    // },
    getLogin({nickname,password,verify}){    //也可传实际参数
        //所有的方法必须return
        console.log(nickname);
        console.log(password);
        return service.post('/login',{nickname,password,verify})
    },
    
    // 注册
    getRegister(nickname,password,verify){
        return service.post('/register',{nickname:nickname,password:password,verify:verify})
    },

    //首页
    getRecommend(){
        return service.get('/recommend')
    },

    // 搜索
    grtSearch({value}){
        return service.post('/search',{value})
    },

    // 分类查询
    getClassification(id){
        return service.get(`/classification?mallSubId=${id}`)
    },

    // 查询获取购物车数据
    getCard(){
        return service.post('/getCard')
    },

    // 购物车加减商品
    getEditCart({count,id,mallPrice}){
        return service.post('/editCart',{count,id,mallPrice})
    },

    // 购物车商品删除
    getDeleteShop(id){
        return service.post('/deleteShop',id)
    },

    // 购物车支付页面
    getOrder({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{address,tel,orderId,totalPrice,idDirect,count})
    },

    // 单个商品详情
    getGoods(goodsId){
        return service.get(`/goods/one?id=${goodsId}`)
    },

    // 收藏单个商品
    getCollection(goods){
        return service.post('/collection',goods)
    },

    // 取消收藏
    getCancelCollection({id}){
        return service.post('/cancelCollection',{id})
    },

    // 查询商品是否已收藏
    getIsCollection({id}){
        return service.post('/isCollection',{id})
    },

    // 加入购物车
    getAddShop({id}){
        return service.post('/addShop',{id})
    },

    // 退出登录
    getLoginOut(){
        return service.post('/loginOut')
    },

    // 获取用户信息
    getQueryUser(){
        return service.post('/queryUser')
    },

    // 修改保存用户信息
    getSaveUser({gender,year,month,day,id,nickname}){
        return service.post('/saveUser',{gender,year,month,day,id,nickname})
    },

    // 查询用户订单数量
    getOrderNum(){
        return service.get('/myOrder/orderNum')
    },

    // 商品评论
    getComment({id,rate,content,anonymous,_id,order_id,image}){
        return service.post('/goodsOne/comment',{id,rate,content,anonymous,_id,order_id,image})
    },
    
    // 获取登录注册默认验证码
    getVerify(){
        return service.get('/verify')
    },

    // 查询用户收货地址
    getGetAddress(){
        return service.get('/getAddress')
    },

    // 查询默认收货地址
    getDefaultAddress(){
        return service.get('/getDefaultAddress')
    },

    // 设置默认收货地址
    getSetDefaultAddress({id}){
        return service.post('/setDefaultAddress',{id})
    },

    // 增加收货地址
    getAddress({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
        return service.post('/address',{name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id})
    },

    // 删除地址
    getDeleteAddress({id}){
        return service.post('/deleteAddress',{id})
    },

    // 查询我的收藏
    getCollectionList(){
        return service.get('/collection/list')
    },

    // 订单查询
    getMyOrder(){
        return service.get('/myOrder')
    },

    // 查询已评价
    getAlreadyEvaluated(){
        return service.get('/alreadyEvaluated')
    },

    // 查询未评价
    getTobeEvaluated(){
        return service.get('/tobeEvaluated')
    },

    // 查询单条评论
    getEvaluateOne({id,_id}){
        return service.post('/evaluateOne',{id,_id})
    },
}