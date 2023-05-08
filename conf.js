const config = {
    baseModel:{
        _containerStyle:"100vw;clear:both",
        _titleLayerStyle:"font-size:4vw;width:100vw;margin-bottom:1vw",
        _splitLayerStyle:"clear:both;margin-bottom:2vw",
        _leftSplitLineStyle:"width:10vw;background-color:aquamarine;height:1vw",
        _rightSplitLineStyle:"position:relative;left:10vw;top:-0.1vw;width:90vw;background-color:aqua;height:0.1vw",
        
    },
    personalInformation: {
        _tagStyle:"background-color: #EEEEEE;font:0.5vw;float:left;margin-right: 1vw;padding-left: 0.5vw;padding-right: 0.5vw;",
        _textLayerStyle:"font-size:2vw",
        
        gender: {
            key: ["性别", "gender"],
            format: function (value) {
                return "⚧ " + value
            }
        },
        age: {
            key: ["年龄", "age"],
            format: function (value) {
                return "🎂 " + value
            }
        },
        work: {
            key: ["经验", "work"],
            format: function (value) {
                return "💼 " + value
            }
        },
        phone:{
            key:["电话","phone"],
            format:function(value){
                return "📞 "+value
            }
        },
        email:{
            key:["邮箱","email"],
            format:function(value){
                return "📧 "+value
            }
        }
    }
}

export {
    config
}