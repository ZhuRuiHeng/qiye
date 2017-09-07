/**
 * 
 */
window.indexPage = function(){
	var commonConfig = {
			servicePath:"http://123.207.251.221/web/api/invoke/{session}/",
			serverPath:"http://123.207.251.221/web/files/"
	}
	function indexMain(){};
	
	function indexView(){};
	
	function indexAction(){};
	
	indexMain.prototype = {
		init:function(){
			_indexMain.initPage();
		},
		initPage:function(){
			//_indexAction.getSlideList();
			//_indexView.initSildImage();
		},
		bindEvent:function(){
			
		},
		initSildImage:function(){//初始化轮播图片
			$("#KinSlideshow").KinSlideshow({
                moveStyle: "left",
                mouseEvent:"mouseclick",
                titleBar: {
                  titleBar_height: 30,
                  titleBar_bgColor: "#08355c",
                  titleBar_alpha: 0.5
                },
                titleFont: {
                  TitleFont_size: 12,
                  TitleFont_color: "#FFFFFF",
                  TitleFont_weight: "normal"
                },
                btn: {
                  btn_bgColor: "#FFFFFF",
                  btn_bgHoverColor: "#1072aa",
                  btn_fontColor: "#000000",
                  btn_fontHoverColor: "#FFFFFF",
                  btn_borderColor: "#cccccc",
                  btn_borderHoverColor: "#1188c0",
                  btn_borderWidth: 1
                }
              });
		}
	}
	
	indexView.prototype = {
		loadSildImage:function(data){
			$('#KinSlideshow').remove();
			var html = '';
			var images = data.info_list;
			$.each(function(i,images){
				html += '<a href="javascript:void(0);"><img src="'+(commonConfig.serverPath+images[i].sildimage)+'" alt="'+images[i].name+'" width="1000" height="365"/></a>';
			});
			$('#KinSlideshow').append(html);
		}
	}
	
	indexAction.prototype = {
		getSlideList:function(){
			var url = commonConfig.servicePath + "c_LBTP.baseDataQuery";
			$.ajax({
				  type: "GET",
				  url: url,
				  dataType:"json",
				  async:false,
				  success: function(data){
					  _indexView.loadSildImage(data);
				  }
				});
		}
	}
	
	var _indexMain,_indexView,_indexAction;
	
	$(function(){
		_indexMain = new indexMain();
		_indexView = new indexView();
		_indexAction = new indexAction();
		_indexMain.init();
	})
}();
