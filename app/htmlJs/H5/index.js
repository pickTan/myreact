/**
 * Created by girl on 16/5/19.
 */
"use strict"
//require('es5-shim');
//require('es5-shim/es5-sham');
require('console-polyfill');
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'React-dom';
import Footer from '../../Footer';
import Ajax from '../../source/ajax';
import './css/index.css';
import './css/public.css';
//class HelloWorld extends Component{
//    render() {
//        return (
//            <div>
//                <h1 >
//                    clea  Hello,
//                    <input type="text" placeholder="Your name here" />!
//                    It is {this.props.date.toTimeString()}
//                </h1>
//            </div>
//
//        );
//    }
//};

class HelloWorld extends Component{
    constructor(){  //最先运行;可做缓存机制.对比版本好,如果版本号改变 重新加载
        super();
        this.state = {
            resulte:{
                results:[]
            }
        };
    }
    componentDidMount() {       //首次加载
        console.log("1");
        let obj =this;
        Ajax.Get(obj);
        //console.log(this.state.resulte.ursName+"3");
    }
    nexPage(){      //下一页
        console.log("2");
        let obj =this,
            pramas={"pageNo":"2"};
        Ajax.Get(obj,pramas);
    }
    render() {
        //console.log(this.state.resulte.ursName+"4");
        let sta = this.state.resulte.results;
        console.log(Array.isArray(this.state.resulte.results));
        let trHtml = sta.map(
            (sta)=>{
                return(<tr>
                    <td>{sta.id}</td>
                    <td>{sta.matched}</td>
                    <td>{sta.mobile}</td>
                    <td>{sta.money}</td>
                    <td>{sta.nick}</td>
                    <td>{sta.password}</td>
                    <td>{sta.sex}</td>
                    <td>{sta.status}</td>
                </tr>)
            }
        );
        return (
        <div className="er_table">
            <a className="lrLogin"  onClick={this.nexPage.bind(this)} >点击我刷新</a>
            <table  >
                <thead>
                <tr>
                    <th>编号</th>
                    <th>数据</th>
                    <th>数据</th>
                    <th>数据</th>
                    <th>数据</th>
                    <th>数据</th>
                    <th>数据</th>
                    <th>数据</th>
                </tr>
                </thead>
                <tbody>
                {trHtml}
                </tbody>
            </table>
        </div>

        );
    }
};
ReactDOM.render(
    <HelloWorld  source="http://192.168.201.167:8888/demo/getCustomInfoList" />,
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
