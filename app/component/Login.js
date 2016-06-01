/**
 * Created by girl on 16/5/26.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'React-dom';
import $ from 'jquery';
import Ajax from '../source/ajax';
/**
 * 页面公共尾部
 */
"use strict"
class Login extends Component{
    constructor(){  //最先运行;可做缓存机制.对比版本好,如果版本号改变 重新加载
        super();
        this.state = {
            resulte:{
            }
        };
    }
    login(){
        let usrName = $("#usrName").val(),
            password = $("#password").val(),
            obj = this,
            params = {"usrName":usrName,"password":password};
        Ajax.Get(obj,params);
    }
    goto(){
        window.location.href="index.html";
    }
    render() {
        let sta = this.state.resulte.errorCode=="00000";

        return sta?this.goto():(
            (<div className="login_navigate" id="loginIndex" >
                <div className="loginForm" >
                    <div className="userName clearfix">
                        <input type="text" id="usrName" maxlength="50" placeholder="用户名/手机/身份证/邮箱"  />
                    </div>
                    <div className="loginPsw clearfix">
                        <input type="password" id="password" maxlength="16" placeholder="请输入密码" />
                    </div>
                    <div className="loginRegister">
                        <a className="lrLogin" onClick={this.login.bind(this)} >登&nbsp;录</a>
                    </div>
                    <p className="form_register">还没有账号？<a href="ej_register.html">快速注册</a></p>
                </div>
            </div>)
        );
    }
};

module.exports =  Login;
