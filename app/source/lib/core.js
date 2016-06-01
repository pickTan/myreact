/**
 * Created by girl on 16/5/25.
 */
"use strict"
import $ from 'jquery';
const core = (  obj,{
                    url=obj.props.source,
                    type="POST",
                    date="",
                    dateType='JSON',
                    success=(resulte)=>{obj.setState({resulte:resulte})},
                    error=(xhr, status, err)=>{obj.setState({resulte:err})}
                }={}) => {

        let otp ={
            'url': url,
            'type':type,
            'date':date,
            'dataType':dateType,
            'error':error.bind(obj),
            'success':success.bind(obj)
        }
    //jsop特殊处理
    if(dateType=="JSONP"){
        otp.jsonpCallback="success_jsonpCallback";
        otp.jsonp="callback";
    }
    if(type!="POST" && dateType!='JSONP' && date!=""){
        let params="?"
        for (let key in date ){
            params+=key+"="+date[key];
        }
        otp.url=url+params;
    }
    console.log(otp.url);
       return $.ajax(otp);
}

module.exports =  core;
