/**
 * Created by cui on 2016/3/3.
 */
require.config({
    baseUrl: './asset/js',
    paths: {
        "init": 'init.min'
    }
});

require(["init"], function(init){
    init.init();
});