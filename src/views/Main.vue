<template>
    <el-container class="container">
        <el-header class="header">
            后台管理系统
        </el-header>
        <el-container>
            <el-aside class="aside">
                <el-menu
                    :default-active="2"
                    :unique-opened="false"
                    :router="true"
                    class="el-menu">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item class="menu-item" index="user">用户新增</el-menu-item>
                        <el-menu-item class="menu-item" index="user1">用户修改</el-menu-item>
                        <el-menu-item class="menu-item" index="user2">删除用户</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>资产管理</span>
                        </template>
                        <el-menu-item class="menu-item" index="asset">资产分配</el-menu-item>
                        <el-menu-item class="menu-item" index="asset1">游资私募</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span class="submenu">个人中心</span>
                        </template>
                        <el-menu-item class="menu-item" index="account">账户设置</el-menu-item>
                        <el-menu-item class="menu-item" index="account1">账户冻结</el-menu-item>
                        <el-menu-item class="menu-item" index="account2">密码修改</el-menu-item>
                        <el-menu-item class="menu-item" index="account3">头像上传</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span class="submenu">联系我们</span>
                        </template>
                        <el-menu-item class="menu-item" index="link">公司地址</el-menu-item>
                        <el-menu-item class="menu-item" index="link1">个人信息</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {
        msg: 'Hello Vue.js'
      }
    }
  }
</script>

<style scoped lang="less">
    .container {
        height: 100%;
    }

    .header {
        background-color: #545c64;
        color: white;
        font-size: 20px;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .aside {
        width: 200px !important;
        background-color: #D3DCE6;
    }

    .main {
        background-color: #E9EEF3;
    }

    .el-menu {
        height: 100%;
    }

    l
        /* 父菜单默认样式 */
        /* 父菜单激活样式 */
        /*.el-submenu.hover{*/
        /*    background-color: #545c64 !important;*/
        /*    color: white;*/
        /*}*/
        /* 子菜单鼠标悬浮效果 */
    .menu-item:hover {
        background-color: #545c64 !important;
        color: white;
    }

    /* 子菜单鼠标选中效果 */
    .menu-item.is-active {
        background-color: #545c64 !important;
        color: white;
    }
</style>
