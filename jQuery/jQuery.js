
//用户点击button后，所有<p>都隐藏
$(document).ready(function() {
    $("#button1").click(function() {
        $("p").hide();
    });
})

//用户点击按钮后，有 id="test" 属性的元素将被隐藏
$(document).ready(function(){
    $("#button2").click(function(){
      $("#test").hide();
    });
  });

//用户点击p标签后元素消失
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });  

//鼠标移动到此处会看到弹窗
$(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert('您的鼠标移到了 id="p1" 的元素上!');
    });
  });  

//鼠标移动到此处以及离开此处时都将触发function
$(document).ready(function(){
    $("#p2").hover(
		function(){
			alert("你进入了 p1!");
		},
		function(){
			alert("拜拜! 现在你离开了 p1!");
		}
    )
}); 

//触发focus事件
$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color","#cccccc");
    });
    $("input").blur(function(){
      $(this).css("background-color","#ffffff");
    });
  });


//hide & show
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });  


//获取Input的值
$(document).ready(function(){
    $("#show-input-button").click(function(){
      alert("值为: " + $("#show-input").val());
    });
  });  

//设置文本
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#test1").text(" 设置文本成功");
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>设置HTML成功</b>");
    });
    $("#btn3").click(function(){
      $("#test3").val("设置值成功");
    });
  });  

//追加文本
$(document).ready(function(){
    $("#append-button").click(function(){
      $("ol").append("<li> 列表已添加 </li>");
    });
  });  