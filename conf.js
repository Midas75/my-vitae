const config = {
    baseModel: {
        _containerStyle: "100vw;clear:both;margin-bottom:4vw",
        _contentStyle: "clear: both;margin-bottom: 2vw;",
        _titleLayerStyle: "clear:both;font-size:4vw;width:100vw;margin-bottom:1vw",
        _splitLayerStyle: "clear:both;margin-bottom:2vw;align-items:flex-end;display:flex",
        _leftSplitLineStyle: "width:10vw;background-color:aquamarine;height:1vw;",
        _rightSplitLineStyle: "width:90vw;background-color:aqua;height:0.3vw",

    },
    personalInformation: {
        _tagStyle: "background-color: #EEEEEE;font:0.5vw;float:left;margin-right: 1vw;padding-left: 0.5vw;padding-right: 0.5vw;",
        _textLayerStyle: "font-size:2vw",

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
                return "💼 " + value+" 工作经验"
            }
        },
        phone: {
            key: ["电话", "phone"],
            format: function (value) {
                return "📞 " + value
            }
        },
        email: {
            key: ["邮箱", "email"],
            format: function (value) {
                return "📧 " + value
            }
        }
    },
    educationExperience: {
        _mainContainerStyle: "align-items: baseline;display: flex;margin-bottom: 0.5vw;",
        _schoolLayerStyle: "align-items: baseline;display: flex;margin-bottom: 0.5vw;",
        _timeLayerStyle: "font-size: 1.5vw;color: #AAAAAA;margin-left:2vw",

        _detailContainerStyle: "clear:both;align-items: baseline;display: flex;text-align: center;",
        _detailLayerStyle: "font-size:1.5vw;margin-left: 1vw;",
        _detailSeparatorStyle: "font-size:1.5vw;margin-left: 1vw;color:#AAAAAA",



        college: {
            key: ["学院", "college"]
        },
        major: {
            key: ["专业", "major"]
        },
        qualification: {
            key: ["学历", "qualification"]
        },
        rank: {
            key: ["绩点", "rank"]
        },
        time: {
            key: ["时间", "time"]
        },

    }
}

export {
    config
}