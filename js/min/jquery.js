$(function(){$(".hoge1").css("color","blue")}),$(function(){$("#logo").attr({src:"http://www.wings.msn.to/image/wings.jpg",title:"wings project"})}),$(function(){var o=$(".box");console.log("コンテンツ:"+o.height()+"x"+o.width()),console.log("コンテンツ:"+o.innerHeight()+"x"+o.innerWidth()),console.log("コンテンツ:"+o.outerHeight()+"x"+o.outerWidth()),console.log("コンテンツ:"+o.outerHeight(!0)+"x"+o.outerWidth(!0))}),$(function(){$(".composition").empty()}),$(function(){var o;$("#show").change(function(){this.checked?$("body").append(o):o=$("#log").detack()}),$("#log").click(function(){console.log("buttonがクリックされました")})}),$(function(){$(".content").click(function(){$(".content01").hide()})}),$(document).ready(function(){$(".content01").fadeIn(3e3)});