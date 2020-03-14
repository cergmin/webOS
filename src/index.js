import $ from "jquery";
import { FluentRevealEffect } from "fluent-reveal-effect";


let app_data_changing = {
    "pid": -1,
    "x": 0,
    "y": 0,
    "x_mouse" : 0,
    "y_mouse": 0,
    "width": 0,
    "height": 0,
    "action": ""
};

// Application draggable
$(document).on("mousedown", ".app__top", function (e) {
    app_data_changing["pid"] = $(this).parent().attr("pid");
    app_data_changing["x"] = $(this).parent().position().left;
    app_data_changing["y"] = $(this).parent().position().top;
    app_data_changing["x_mouse"] = e.clientX;
    app_data_changing["y_mouse"] = e.clientY;
    app_data_changing["action"] = "move";

    $('iframe').css('pointer-events', 'none');

    console.log("mousedown | move");
});

$('body').on("mousemove", function (e) {
    if(app_data_changing["action"] === "move"){
        if(e.buttons === 0){
            app_data_changing["pid"] = -1;
            app_data_changing["action"] = "";
            $('iframe').css('pointer-events', '');
        }

        let x_offset = e.clientX - app_data_changing["x_mouse"];
        let y_offset = e.clientY - app_data_changing["y_mouse"];

        if(Math.sqrt((x_offset * x_offset + y_offset * y_offset)) > 5){
            $("[pid='" + app_data_changing["pid"] + "']").css('transform',
                'translate(' +
                (app_data_changing["x"] + x_offset) + 'px, ' +
                (app_data_changing["y"] + y_offset) + 'px)');
        }

        console.log("mousemove | move");
    }
});


// Application resize

$(document).on("mousedown", ".app__resize", function (e) {
    app_data_changing["pid"] = $(this).parent().attr("pid");
    app_data_changing["x"] = $(this).parent().position().left;
    app_data_changing["y"] = $(this).parent().position().top;
    app_data_changing["x_mouse"] = e.clientX;
    app_data_changing["y_mouse"] = e.clientY;
    app_data_changing["width"] = $(this).parent().width();
    app_data_changing["height"] = $(this).parent().height();

    app_data_changing["action"] = $(this).attr("action");

    $('iframe').css('pointer-events', 'none');
    console.log("mousedown | resize");
});

$('body').on("mousemove", function (e) {
    if(e.buttons === 0){
        app_data_changing["pid"] = -1;
        app_data_changing["action"] = "";
        $('iframe').css('pointer-events', '');
    }

    let x_offset = e.clientX - app_data_changing["x_mouse"];
    let y_offset = e.clientY - app_data_changing["y_mouse"];
    let app_element = $("[pid='" + app_data_changing["pid"] + "']");

    if(app_data_changing["action"] === "resize_right"  ||
        app_data_changing["action"] === "resize_bottom_right" ||
        app_data_changing["action"] === "resize_top_right"){
        app_element.css('width',
            (app_data_changing["width"] + x_offset) + 'px');

        console.log("mousemove | resize_right");
    }
    if(app_data_changing["action"] === "resize_bottom" ||
        app_data_changing["action"] === "resize_bottom_right" ||
        app_data_changing["action"] === "resize_bottom_left"){
        app_element.css('height',
            (app_data_changing["height"] + y_offset) + 'px');

        console.log("mousemove | resize_bottom");
    }
    if(app_data_changing["action"] === "resize_top"  ||
        app_data_changing["action"] === "resize_top_right" ||
        app_data_changing["action"] === "resize_top_left"){
        app_element.css('height',
            (app_data_changing["height"] - y_offset) + 'px');

        app_element.css('transform',
            'translate(' +
            app_data_changing["x"] + 'px, ' +
            (app_data_changing["y"] + y_offset) + 'px)');

        console.log("mousemove | resize_top");
    }
    if(app_data_changing["action"] === "resize_left"  ||
        app_data_changing["action"] === "resize_bottom_left" ||
        app_data_changing["action"] === "resize_top_left"){
        app_element.css('width',
            (app_data_changing["width"] - x_offset) + 'px');

        app_element.css('transform',
            'translate(' +
            (app_data_changing["x"] + x_offset) + 'px, ' +
            app_data_changing["y"] + 'px)');

        console.log("mousemove | resize_left");
    }
    if(app_data_changing["action"] === "resize_top_left"){
        app_element.css('transform',
            'translate(' +
            (app_data_changing["x"] + x_offset) + 'px, ' +
            (app_data_changing["y"] + y_offset) + 'px)');
    }
});




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
