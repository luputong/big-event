<script setup>
import { userRepasswardService } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import router from '@/router'
const rePassword = ref({
    "old_pwd": "",
    "new_pwd": "",
    "re_pwd": ""
})
const checkrepassword = (rule, value, callback) => {
    if (value !== rePassword.value.new_pwd) {
        callback(new Error('请确保两次输入密码一致'))
    } else {
        callback()
    }
}
const rules = {
    old_pwd: [
        { required: true, message: '请输入当前密码', trigger: 'blur' },
        { min: 5, max: 16, message: '旧密码位数为5到16位', trigger: 'blur' }
    ],
    new_pwd: [
        { required: true, message: '请输入修改密码', trigger: 'blur' },
        { min: 5, max: 16, message: '新密码位数为5到16位', trigger: 'blur' }
    ],
    re_pwd: [
        { required: true, message: '请再次确认密码', trigger: 'blur' },
        { validator: checkrepassword, trigger: 'blur' },
    ]
}
const SubmitEvent = async () => {
    let result = await userRepasswardService(rePassword.value);
    ElMessage.success(result.msg ? result.msg : '修改成功')
    router.push('/login')
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>修改密码</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-form :model="rePassword" :rules="rules" label-width="100px" size="large">
                    <el-form-item label="当前密码" prop="old_pwd">
                        <el-input v-model="rePassword.old_pwd"  ></el-input>
                    </el-form-item>
                    <el-form-item label="修改密码" prop="new_pwd">
                        <el-input v-model="rePassword.new_pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="re_pwd">
                        <el-input v-model="rePassword.re_pwd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="SubmitEvent">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>