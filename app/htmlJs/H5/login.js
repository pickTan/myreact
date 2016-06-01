/**
 * Created by girl on 16/5/19.
 */
"use strict"

//require('es5-shim');
//require('es5-shim/es5-sham');
require('console-polyfill');
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'React-dom';
import Footer from '../../component/Footer';
import LoginContent from '../../component/Login';
import './css/index.css';
import './css/public.css';
class Login extends Component{
    render() {
        return (
            <div>
                <LoginContent source="http://192.168.201.167:8888/demo/login" />
            </div>
        );
    }
};
ReactDOM.render(
    <Login   />,
    document.getElementById('content')
);

//let app = document.createElement('div');
//const myPromise = Promise.resolve(42);
//myPromise.then((number) => {
//    $('body').append('<p>我是jq加载进来的变量'+number+'现在是</p>')
//})
//app.innerHTML='<h1>hellow world wo shi 2</h1>'
//document.body.appendChild(app); //body加入app
//app.appendChild(component());//app里面嵌套 component
//
////var component = require('./component');
//require('./index.css');
//document.body.appendChild(component());
