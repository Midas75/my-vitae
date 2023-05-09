const config = {
    baseModel: {
        _containerStyle: "100vw;clear:both;margin-bottom:4vw",
        _contentContainerStyle: "clear: both;margin-bottom: 2vw;font-size:1.5vw;padding-left:2vw",
        _titleLayerStyle: "clear:both;font-size:3vw;width:100vw;margin-bottom:1vw",
        _splitLayerStyle: "clear:both;margin-bottom:2vw;",//align-items:flex-end;display:flex
        _leftSplitLineStyle: "width:10vw;background-color:#DFF;height:1vw;",
        _rightSplitLineStyle: "width:auto;background-color:#0DD;height:0.3vw",

    },
    personalInformation: {
        _tagStyle: "font-size:2vw;display:inline-table;background-color: #EEEEEE;margin-right: 1vw;padding-left: 0.5vw;padding-right: 0.5vw;",

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
                return "💼 " + value + " 工作经验"
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
        _schoolLayerStyle: "font-size: 2vw;font-weight: bold;",
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

    },
    award: {
        _containerStyle: "align-items: baseline;display: flex;margin-bottom: 0.5vw;",
        _timeLayerStyle: "font-size: 1.5vw;color: #AAAAAA;",
        _awardLayerStyle: "font-size: 1.5vw;margin-left:2vw",

        time: {
            key: ["时间", "time"]
        }
    },
    workExperience: {
        _mainContainerStyle: "align-items: baseline;display: flex;margin-bottom: 0.5vw;",
        _companyLayerStyle: "font-size: 2vw;",
        _departmentLayerStyle: "font-size: 1.5vw;margin-left:2vw",
        _positionLayerStyle:"font-size: 1.5vw;margin-left:2vw",
        _practiceLayerStyle:"font-size:1.5vw;border-radius: 0.4vw;margin-left:2vw;background-color: #DFF;color:#0BB;padding-left: 0.5vw;padding-right: 0.5vw;",
        _timeLayerStyle:"font-size: 1.5vw;margin-left:auto",
        _contentLayerStyle:"clear:both;font-size:1.5vw;",
        department: {
            key: ["部门", "department"]
        },
        position: {
            key: ["职位", "position"]
        },
        time: {
            key: ["时间", "time"]
        },
        content: {
            key: ["内容", "content"]
        },
        practice:{
            key:["实习","practice"]
        }
    }
}

export {
    config
}