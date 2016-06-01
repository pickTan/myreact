/**
 * Created by girl on 16/5/23.
 */
import $ from 'jquery';

const $Post = (obj) =>{
    $.ajax({
        url: obj.props.source,
        dataType: 'json',
        success: function(resulte) {
            obj.setState(
                {
                    resulte:resulte
                }
            );
        }.bind(obj),
        error: function(xhr, status, err) {
            console.error(obj.props.source, status, err.toString());
        }.bind(obj)
    });
 }

//let ajax = {
//    post:
//}

module.exports =  $Post;
