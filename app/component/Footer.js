/**
 * Created by girl on 16/5/26.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'React-dom';
"use strict"
/**
 * 页面公共尾部
 */
class Footer extends Component{
    render() {
        return (
            <div  >
                <p >广州七一一电子信息科技有限公司 版权所有</p>
                <p  >©2016 广州七一一电子信息科技有限公司  粤ICP备12043664号-5</p>
            </div>
        );
    }
};

module.exports =  Footer;
