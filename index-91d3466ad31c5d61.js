window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"bodyScroll":true,"navigationPathType":"path"},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"backgroundColor":"#FFFFFF","minHeight":{"value":100,"unit":"vh"}},"ports":[],"children":[{"id":"074ae1c8-03bc-8b30-ee56-e723ea9a4e6b","type":"Router","parameters":{"name":"Main","pages":{"routes":["/login","/signup","/app","/about"],"startPage":"/app"},"mounted":true},"ports":[],"children":[]}]},{"id":"55ff3c18-9207-83cd-88a8-8ee8595019be","type":"JavaScriptFunction","parameters":{"functionScript":"if(pb.authStore.isValid === false) {\r\n    Outputs.url = \"login\";\r\n    Outputs.notLogin();\r\n}\r\nelse {\r\n    const record = await pb.collection('users').getOne(pb.authStore.model.id);\r\n    Outputs.username = record.username;\r\n    Outputs.isLogin();\r\n}"},"ports":[{"name":"out-notLogin","displayName":"notLogin","plug":"output","type":"signal","group":"Outputs","index":4},{"name":"out-isLogin","displayName":"isLogin","plug":"output","type":"signal","group":"Outputs","index":5},{"name":"out-url","displayName":"url","plug":"output","type":"*","group":"Outputs","index":6},{"name":"out-username","displayName":"username","plug":"output","type":"*","group":"Outputs","index":7}],"children":[]},{"id":"085944c0-83ce-03c7-f9f6-c876ec1a7f2f","type":"Set Variable","parameters":{"name":"username","setWith":"string"},"ports":[],"children":[]},{"id":"de0aa3b7-af5a-d348-1415-b9fc4b133b2b","type":"RouterNavigate","parameters":{"router":"Main","target":"/login"},"ports":[],"children":[]},{"id":"68f229fc-d7a3-3c81-9d7d-50710f30e7e3","type":"RouterNavigate","parameters":{"router":"Main","target":"/app"},"ports":[],"children":[]}],"connections":[{"sourceId":"246f9453-a119-ac78-171e-3806cf596ecc","sourcePort":"didMount","targetId":"55ff3c18-9207-83cd-88a8-8ee8595019be","targetPort":"run"},{"sourceId":"55ff3c18-9207-83cd-88a8-8ee8595019be","sourcePort":"out-username","targetId":"085944c0-83ce-03c7-f9f6-c876ec1a7f2f","targetPort":"value"},{"sourceId":"55ff3c18-9207-83cd-88a8-8ee8595019be","sourcePort":"out-notLogin","targetId":"de0aa3b7-af5a-d348-1415-b9fc4b133b2b","targetPort":"navigate"},{"sourceId":"55ff3c18-9207-83cd-88a8-8ee8595019be","sourcePort":"out-isLogin","targetId":"085944c0-83ce-03c7-f9f6-c876ec1a7f2f","targetPort":"do"},{"sourceId":"55ff3c18-9207-83cd-88a8-8ee8595019be","sourcePort":"out-isLogin","targetId":"68f229fc-d7a3-3c81-9d7d-50710f30e7e3","targetPort":"navigate"}],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}}],"componentIndex":{"b1-f27cacf569d597da":{"components":["/login"],"dependencies":[]},"b2-cc92492fc36db76f":{"components":["/signup"],"dependencies":[]},"b3-e191a3689baf87f1":{"components":["/app"],"dependencies":[]},"b4-fa90d8329a601e08":{"components":["/about"],"dependencies":[]}},"routerIndex":{"routers":[{"name":"Main","pages":{"routes":["/login","/signup","/app","/about"],"startPage":"/app"},"mounted":true}],"pages":[{"path":"about","title":"about","component":"/about"},{"path":"app","title":"App","component":"/app"},{"path":"login","title":"Log in","component":"/login"},{"path":"signup","title":"Sign up","component":"/signup"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Primary":"#5836F5","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","Grey - 900":"#1F1F1F","Grey - 800":"#383838","Grey - 700":"#4C4C4C","Grey - 600":"#757575","Grey - 500":"#A5A5A5","Grey - 400":"#CECECE","Grey - 300":"#E9E9E9","Grey - 200":"#F4F4F4","Grey - 100":"#FBFBFB","Success":"#49AD7F","Notice":"#F2C441","Danger":"#F75A4F","White":"#FFFFFF","Black":"#000000"}},"cloudservices":{"instanceId":"http://localhost:3000-myappid","endpoint":"http://localhost:3000","appId":"myappid"}},"variants":[{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}}]};
