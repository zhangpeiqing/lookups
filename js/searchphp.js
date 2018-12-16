
var onswitch0 = false;
// var onswitch1 = false;
var onswitch2 = false;
var onswitch3 = false;
var onswitch4 = false;
var submitswitch = false;
// 年份筛选
var year_include = function(item, target) {
		if(target == item) {
			return true
		} else {
			return false
		}
}
// 工作地点筛选
var address_include = function(item, target) {
	if(item == '不限') {
		return true
	} else {
		if(item == target) {
			return true
		} else {
			return false
		}
	}
}
// 学历筛选
var school_include = function(item, target) {
	if(item == '不限') {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 学位筛选
var degree_include = function(item, target) {
	if(item == '不限') {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 政治面貌筛选
var political_include = function(item, target) {
		if(target == item) {
			return true
		} else {
			return false
		}
}
// 基层经历筛选
var base_include = function(item, target) {
		if(target == item) {
			return true
		} else {
			return false
		}
}
//  单位名称筛选00
var professional_include00 = function(item, target) {
	if(onswitch0) {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 部门名称筛选01
// var professional_include01 = function(item, target) {
// 	if(onswitch1) {
// 		if(target.indexOf(item) != -1 || target == "部门名称") {
// 			return true
// 		} else {
// 			return false
// 		}
// 	} else {
// 		if(target.indexOf(item) != -1) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// }
// 职位名称筛选02
var professional_include02 = function(item, target) {
	if(onswitch2) {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 职位代码筛选03
var professional_include03 = function(item, target) {
	if(onswitch3) {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 专业筛选04
var professional_include04 = function(item, target) {
	if(onswitch4) {
		return true
	} else {
		if(target.indexOf(item) != -1) {
			return true
		} else {
			return false
		}
	}
}
// 渲染模板函数
function templateDo(jsonData ,num) {
	if(jsonData.length == 0) {
		var htmls = '<p class="result_tip">没有匹配的数据，请重新修改条件查询，或点击不限专业开关，查看更多职位！</p>';
	} else {
		var htmls = '<table class="my_table">\
                  <tr>\
                      <th class="th1">地区</th>\
                      <th class="th2">职位名称</th>\
                      <th class="th3">面试类别</th>\
                      <th class="th4">更多</th>\
                  </tr>';
		for(var j in jsonData) {
			var obj = jsonData[j];
			htmls += '<tr data_index=' + obj.data_index + '>'
			htmls += '<td>' + obj.item03 + '</td>';
			htmls += '<td>' + obj.item04 + '</td>';
			htmls += '<td>' + obj.item10 + '</td>';
			htmls += '<td><a href="javascript:;">查看更多</a></td>';
			htmls += '</tr>'
		}
		htmls += '</table>';
	}
	$('.data').html(num.length);
	$('.zg_wrapper').hide();
	$('.www').show();
	$('.table_wrap').html('').append(htmls);
}
$('.back').click(function(){
	$('.zg_wrapper').show();
	$('.www').hide();
})
var cs = true;
var clickfn = function() {
	var attr = [];
	var num = [];
	var year = $('#year').val()
	var address = $('#address').val()
	var record = $('#xuel').val()
	var degree = $('#xuew').val()
	var political = $('#zzmm').val()
	var base = $('#jcjl').val()
	var professional0 = $('#professional0').val()
	// var professional1 = $('#professional1').val()
	var professional2 = $('#professional2').val()
	var professional3 = $('#professional3').val()
	var professional4 = $('#professional4').val()
	console.log(year);
	if(year == "") {
		alert('请选择年份！')
		return false;
	}
	if(address == "") {
		alert('请选择工作地址！')
		return false;
	}
	if(record == "") {
		alert('请选择学历！')
		return false;
	}
	if(base == "") {
		alert('请选择基层经历！')
		return;
	}
	if(political == "") {
		political = "不限"
		$('#zzmm').val('不限')
	}
	$.each(datalist, function(idx, obj) {
		if(year_include(year, obj.item00) &&
			address_include(address, obj.item03) &&
			school_include(record, obj.item05) &&
			political_include(political, obj.item08) &&
			base_include(base, obj.item09) &&
			degree_include(degree, obj.item06) &&
			professional_include00(professional0, obj.item02) &&
			professional_include02(professional2, obj.item04)  &&
			professional_include03(professional3, obj.item01.toString())  &&
			professional_include04(professional4, obj.item07)) {
			obj.data_index = idx;
			num.push(obj.data_index);
			// console.log(num.length);
			attr.push(obj);
		}
	});
	templateDo(attr,num);
	if(cs == true) {
		var tc = function() {
			setTimeout(function() {
				// if($('.table_wrap').html() != null) {
				// 	$('.zg_cover').show();
				// 	$('.tc').show();
				// }
			}, 10000);
		}
		tc()
		cs = false;
	}
}

$('#submit').click(function() {
	$.getJSON("http://bj.offcn.com/index.php?m=formguide&c=index&a=formlogin&type=islogin&callback=?", function(json) {
		if(json.status == 1) {
			submitswitch = true;
			clickfn()
		} else {
			alert("请先注册或登录");
			$('.zg_cover').show();
			$('.container').show();
		}
	})
})
// 部门代码按钮00
$('#professional0').blur(function() {
	if(($(this).val() != '') && ($(".item_check_dwmc").hasClass('active') == true)) {
		$(".item_check_dwmc").removeClass('active')
	}
})

$(".item_check_dwmc").click(function() {
	$(this).toggleClass('active');
	onswitch0 = !onswitch0;
	if($(this).hasClass('active')) {
		$('#professional0').attr('disabled', true);
		$('#professional0').val('');
	} else {
		$('#professional0').attr('disabled', false);
	}
})
// 部门名称按钮01
$('#professional1').blur(function() {
	if(($(this).val() != '') && ($(".item_check_bmmc").hasClass('active') == true)) {
		$(".item_check_bmmc").removeClass('active')
	}
})

$(".item_check_bmmc").click(function() {
	$(this).toggleClass('active');
	onswitch1 = !onswitch1;
	if($(this).hasClass('active')) {
		$('#professional1').attr('disabled', true);
		$('#professional1').val('');
	} else {
		$('#professional1').attr('disabled', false);
	}
})
// 职位名称按钮02
$('#professional2').blur(function() {
	if(($(this).val() != '') && ($(".item_check_zwmc").hasClass('active') == true)) {
		$(".item_check_zwmc").removeClass('active')
	}
})

$(".item_check_zwmc").click(function() {
	$(this).toggleClass('active');
	onswitch2 = !onswitch2;
	if($(this).hasClass('active')) {
		$('#professional2').attr('disabled', true);
		$('#professional2').val('');
	} else {
		$('#professional2').attr('disabled', false);
	}
})
// 职位代码按钮03
$('#professional3').blur(function() {
	if(($(this).val() != '') && ($(".item_check_zwdm").hasClass('active') == true)) {
		$(".item_check_zwdm").removeClass('active')
	}
})

$(".item_check_zwdm").click(function() {
	$(this).toggleClass('active');
	onswitch3 = !onswitch3;
	if($(this).hasClass('active')) {
		$('#professional3').attr('disabled', true);
		$('#professional3').val('');
	} else {
		$('#professional3').attr('disabled', false);
	}
})
// 专业按钮04
$('#professional4').blur(function() {
	if(($(this).val() != '') && ($(".item_check_zy").hasClass('active') == true)) {
		$(".item_check_zy").removeClass('active')
	}
})
$(".item_check_zy").click(function() {
	$(this).toggleClass('active');
	onswitch4 = !onswitch4;
	if($(this).hasClass('active')) {
		$('#professional4').attr('disabled', true);
		$('#professional4').val('');
	} else {
		$('#professional4').attr('disabled', false);
	}
})

$('.register_btn').click(function() {
	if(submitswitch) {
		alert('您已登陆！')
	} else {
		$('.zg_cover').show();
		$('.container').show();
		$('.bd_nav span:nth-child(2)').addClass('active');
		$('.bd_nav span:nth-child(1)').removeClass('active');
		$('.login').hide();
		$('.register').show();
	}
})
$('.login_btn').click(function() {
	console.log(submitswitch)
	if(submitswitch) {
		alert('您已登陆！')
	} else {
		$('.zg_cover').show();
		$('.container').show();
		$('.bd_nav span:nth-child(1)').addClass('active');
		$('.bd_nav span:nth-child(2)').removeClass('active');
		$('.login').show();
		$('.register').hide();
	}
})
$('.bd_close').click(function() {
	$('.zg_cover').hide();
	$('.container').hide();
})
$('.direction_know').click(function() {
	$('.zg_cover').hide();
	$('.zg_direction').hide();
})

$('.table_wrap').on('click', 'tr', function() {
	var now_json = datalist[parseInt($(this).attr('data_index'))]
	$('.zg_cover').show();
	$('.detail_wrap').show();
	$('.detail_item1').html(now_json.item01)
	$('.detail_item2').html(now_json.item02)
	$('.detail_item3').html(now_json.item03)
	$('.detail_item4').html(now_json.item04)
	$('.detail_item5').html(now_json.item05)
	$('.detail_item6').html(now_json.item06)
	$('.detail_item06').html(now_json.item07)
	$('.detail_item7').html(now_json.item08)
	$('.detail_item8').html(now_json.item09)
	$('.detail_item9').html(now_json.item10)
	$('.detail_item10').html(now_json.item11)
	$('.detail_item11').html(now_json.item12)
})
$('.zwxqBack').click(function() {
	$('.zg_cover').hide();
	$('.detail_wrap').hide();
})
$('.detail_know').click(function() {
	$('.zg_cover').hide();
	$('.detail_wrap').hide();
})
$('.direction_close').click(function() {
	$('.zg_direction').hide();
	$('.zg_cover').hide();
})
$('.bd_nav').find('span').click(function() {
	$('.bd_nav').find('span').removeClass('active').eq($(this).index()).addClass('active');
	$('.container').find('.agileits').hide().eq($(this).index()).show()
})
$('.gjfz').click(function() {
	$('.zg_cover').hide();
	$('.fixr').hide();
})
$('.hl,.tc span').click(function() {
	$('.zg_cover').hide();
	$('.tc').hide();
})
$('.lginsecc a').click(function() {
	window.location='http://m.bj.offcn.com/zg//jkrmfsx_m/';
})