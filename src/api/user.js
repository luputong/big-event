//导入request，js请求工具
import request from '@/utils/request.js'
//提供注册接口的函数
export const userRegisterService = (registerData) => {
    //借助urlSearchparams完成传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params);
}
//提供登录接口函数
export const userLoginService = (loginData) => {
      const params=  new URLSearchParams();
      for (let key in loginData) {
      params.append(key,loginData[key])
        
      }
    return   request.post('/user/login',params);
}
//获取用户详细信息
export const userInfoService=()=>{
    return request.get('/user/userInfo')
}
//修改个人信息
export const userInfoUpdateService=(userInfoDate)=>{
    return request.put('/user/update',userInfoDate)
}
//修改头像
export const userAvatarUpdate=(avatarUrl)=>{
    const params=  new URLSearchParams();
    params.append('avatarUrl',avatarUrl)
return request.patch('/user/updateAvatar',params )
}
//修改用户密码
export  const  userRepasswardService=(userPassword)=>{
    return request.patch('/user/updatePwd',userPassword)
}