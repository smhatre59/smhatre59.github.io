import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "nav": {
        "position": "relative"
    },
    "nav ul": {
        "display": "flex",
        "width": "100%",
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "flexDirection": "row"
    },
    "nav ul li a": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "background": "#0F9962",
        "color": "white",
        "textDecoration": "none"
    },
    "nav ul li": {
        "position": "relative",
        "textAlign": "center",
        "flex": 1
    },
    "slider": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center"
    },
    "headericon img": {
        "width": "100%",
        "height": 40
    },
    "ordercontainer": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "width": "100%",
        "height": 100,
        "backgroundColor": "gray"
    },
    "orderbox": {
        "width": "90%",
        "height": "80%",
        "backgroundColor": "black"
    },
    "ordericon": {
        "float": "left",
        "width": "20%",
        "height": "100%",
        "backgroundColor": "red"
    },
    "itunes": {
        "float": "right",
        "display": "flex",
        "justifyContent": "center",
        "flexDirection": "column",
        "width": "80%",
        "height": "50%",
        "backgroundColor": "green"
    },
    "physical": {
        "float": "right",
        "display": "flex",
        "justifyContent": "center",
        "flexDirection": "column",
        "width": "80%",
        "height": "50%",
        "backgroundColor": "pink"
    },
    "sociallogin": {
        "display": "-ms-flexbox",
        "WebkitFlexDirection": "row",
        "flexDirection": "row",
        "justifyContent": "center",
        "width": "100%",
        "height": 100,
        "backgroundColor": "gray"
    },
    "socialcontainer": {
        "width": "90%",
        "height": "80%",
        "display": "-ms-flexbox",
        "WebkitFlexDirection": "row",
        "flexDirection": "row",
        "justifyContent": "center",
        "backgroundColor": "white"
    },
    "socialicon": {
        "float": "left",
        "paddingTop": "4%",
        "paddingRight": "4%",
        "paddingBottom": "4%",
        "paddingLeft": "4%",
        "maxWidth": 100,
        "height": "auto",
        "alignSelf": "center"
    },
    "socialsignup": {
        "float": "left",
        "width": "100%",
        "maxWidth": 150,
        "height": "auto",
        "alignSelf": "center"
    },
    "socialimg": {
        "width": "70%",
        "top": "10%",
        "left": "10%"
    },
    "button": {
        "display": "inline-block",
        "textAlign": "center",
        "verticalAlign": "middle",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "border": "2px solid #593232",
        "borderRadius": 11,
        "background": "linear-gradient(to bottom, #080000, #575656)",
        "textShadow": "#591717 1px 1px 1px",
        "font": "normal normal bold 20px arial",
        "color": "#ffffff",
        "textDecoration": "none"
    },
    "button:after": {
        "content": "\\0000a0",
        "display": "inline-block",
        "height": 24,
        "width": 24,
        "lineHeight": 24,
        "marginTop": 0,
        "marginRight": -4,
        "marginBottom": -6,
        "marginLeft": 4,
        "position": "relative",
        "top": 0,
        "left": 0,
        "background": "url(\"../assets/arrowwhite.png\") no-repeat left center transparent",
        "backgroundSize": "100% 100%"
    }
});