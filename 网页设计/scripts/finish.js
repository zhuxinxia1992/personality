$(function(){
	var $product = $(".pro_detail_right");
	$("#cart a").click(function(){
		var pro_name = $("h4:first").text();
		var pro_size = $(".pro_size strong").text();
		var pro_color = $(".color_change strong").text();
		var pro_num = $("#num_sort").val();
		var pro_price = $(".pro_price strong").text();
		var dialog = "感谢您的购买。\n您购买的"+
					"产品是："+pro_name+"; \n"+
					"尺寸是："+pro_size+"; \n"+
					"颜色是："+pro_color+"; \n"+
					"数量是："+pro_num+"; \n"+
					"总价是："+pro_price+"元";
		alert(dialog);
		return false;            //避免页面跳转
	})
})
