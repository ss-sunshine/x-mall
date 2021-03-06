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
    
    getClassification(id){
        return service.get(`/classification?mallSubId=${id}`)
    },
}