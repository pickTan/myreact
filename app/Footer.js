/**
 * Created by girl on 16/5/19.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'React-dom';
import Ajax from './source/ajax';

//module.exports =  function(){
//    let element = document.createElement('h1');
//    element.innerHTML = 'Hello world';
//    return  element;
//};
class Footer extends Component{
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
                    <td  >{sta.id}</td>
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
            <div>

                <a  onClick={this.nexPage.bind(this)} >点击我刷新</a>
                <table>
                    <tbody>
                    {trHtml}
                    </tbody>
                </table>
            </div>

        );
    }
};

//class Footer extends Component{
//    constructor(){  //最先运行;可做缓存机制.对比版本好,如果版本号改变 重新加载
//        super();
//        this.state = {
//            resulte:{
//                results:[]
//            }
//        };
//    }
//    componentDidMount() {       //首次加载
//        console.log("1");
//        let obj =this;
//        Ajax.Post(obj);
//        //console.log(this.state.resulte.ursName+"3");
//    }
//    nexPage(){      //下一页
//        console.log("2");
//        let obj =this,
//            pramas={"pageNo":"2"};
//        Ajax.Post(obj,pramas);
//    }
//    render() {
//        //console.log(this.state.resulte.ursName+"4");
//        let sta = this.state.resulte.results;
//        console.log(Array.isArray(this.state.resulte.results));
//        let trHtml = sta.map(
//            (sta)=>{
//                    return(<tr>
//                            <td  >{sta.id}</td>
//                            <td>{sta.matched}</td>
//                            <td>{sta.mobile}</td>
//                            <td>{sta.money}</td>
//                            <td>{sta.nick}</td>
//                            <td>{sta.password}</td>
//                            <td>{sta.sex}</td>
//                            <td>{sta.status}</td>
//                        </tr>)
//                }
//        );
//        return (
//            <table>
//                <a  onClick={this.nexPage.bind(this)} >点击我刷新</a>
//                <tbody>
//                {trHtml}
//                </tbody>
//            </table>
//        );
//    }
//};

module.exports =  Footer;

//module.exports = generateText;
