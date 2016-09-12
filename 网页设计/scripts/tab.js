$(function(){
	var $div_li = $("div.tab_menu ul li");
	$div_li.click(function(){
		$(this).addClass("selected")               //当前<li>元素高亮
			.siblings().removeClass("selected");   //去掉其他父辈<li>元素的高亮
		var index = $div_li.index(this);           //获取当前单击的<li>元素在全部li元素中的索引
	$("div.tab_box > div")
													//获取子节点。不选取子节点会引起错误。如果里面还有<div>元素在全部li元素中
			.eq(index).show()                       //显示<li>元素对应的<div>元素
			.siblings().hide();                     //隐藏其他几个同辈的<div>元素
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
})