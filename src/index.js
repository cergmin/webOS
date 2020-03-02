import $ from "jquery";
import { FluentRevealEffect } from "fluent-reveal-effect";


$("#windows_btn").on("click", function () {
    if($(".explorer_menu").hasClass('hidden')){
        $(".explorer_menu").css("transition", "none");
        $(".explorer_menu *").css("transition", "none");
        $(".explorer_menu").removeClass('search');
        setTimeout(function () {
            $(".explorer_menu").css("transition", "");
            $(".explorer_menu *").css("transition", "");
            $(".explorer_menu").removeClass('hidden');
        }, 0);
    }
    else{
        if($(".explorer_menu").hasClass('search')){
            $(".explorer_menu").removeClass('search');
        }
        else{
            $(".explorer_menu").addClass('hidden');
        }
    }
});

$("#search_btn").on("click", function () {
    if($(".explorer_menu").hasClass('hidden')){
        $(".explorer_menu").css("transition", "none");
        $(".explorer_menu *").css("transition", "none");
        $(".explorer_menu").addClass('search');
        setTimeout(function () {
            $(".explorer_menu").css("transition", "");
            $(".explorer_menu *").css("transition", "");
            $(".explorer_menu").removeClass('hidden');
        }, 0);
    }
    else{
        if($(".explorer_menu").hasClass('search')){
            $(".explorer_menu").addClass('hidden');
            // $(".explorer_menu").css("transition", "none");
        }
        else{
            $(".explorer_menu").addClass('search');
        }
    }
});


// FluentRevealEffect.applyEffect(".explorer_menu__plate", {
//     lightColor: "rgba(255,255,255,0.2)",
//     gradientSize: 200,
//     clickEffect: true
// });

$(".explorer_menu__button").append('<div class="explorer_menu__button_border button_border_top"></div>' +
    '<div class="explorer_menu__button_border button_border_right"></div>');

FluentRevealEffect.applyEffect(".explorer_menu", {
    lightColor: "rgba(255,255,255,0.3)",
    gradientSize: 60,
    isContainer: true,
    children: {
        borderSelector: ".explorer_menu__button_border",
        elementSelector: ".explorer_menu__button",
        lightColor: "rgba(255,255,255,0.15)",
        gradientSize: 140
    }
});


$(".explorer_menu__app").append('<div class="explorer_menu__app_border app_border_top"></div>' +
                                '<div class="explorer_menu__app_border app_border_bottom"></div>' +
                                '<div class="explorer_menu__app_border app_border_left"></div>' +
                                '<div class="explorer_menu__app_border app_border_right"></div>');

FluentRevealEffect.applyEffect(".explorer_menu__apps", {
	lightColor: "rgba(255,255,255,0.2)",
	gradientSize: 70,
    isContainer: true,
	children: {
		borderSelector: ".explorer_menu__app_border",
		elementSelector: ".explorer_menu__app",
		lightColor: "rgba(255,255,255,0.2)",
		gradientSize: 200
	}
});


FluentRevealEffect.applyEffect(".explorer_menu", {
	lightColor: "rgba(255,255,255,0.4)",
	gradientSize: 100,
    isContainer: true,
	children: {
		borderSelector: ".explorer_menu__plate_border",
		elementSelector: ".explorer_menu__plate",
		lightColor: "rgba(255,255,255,0.2)",
		gradientSize: 200
	}
});
