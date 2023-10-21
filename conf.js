import { Lexer, marked } from "./marked.esm.min.js"

const config = {
    baseModel: {
    },
    personalInformation: {
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
        },
        address: {
            key: ["住址", "address"],
            format: function (value) {
                return "🏠 " + value;
            }
        },
        avatar: {
            key: ["头像", "avatar"],
            format: function (value) {
                return `<image class="pi-image" style="width:100%;height:100%;object-fit:cover;" src="${Lexer.lex(value)[0].tokens[0].href}">`
            }
        }
    },
    educationExperience: {
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
        time: {
            key: ["时间", "time"]
        }
    },
    workExperience: {
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
            key: ["内容", "content"],
            format: function (value) {
                return marked.parse(value).replace(/a href/g, "a target=\"_blank\" href")
            }
        },
        practice: {
            key: ["实习", "practice"]
        }
    },
    projectExperience: {
        role: {
            key: ["职责", "role"]
        },
        time: {
            key: ["时间", "time"]
        },
        technology: {
            key: ["技术栈", "technoology"]
        },
        url: {
            key: ["地址", "url"],
            format: function (value) {
                return "地址：<a target=\"_blank\" href=\"" + value + "\">" + value + "</a>"
            }
        },
        hide: {
            key: ["隐藏", "hide"]
        },
        content: {
            key: ["内容", "content"],
            format: function (value) {
                return marked.parse(value).replace(/a href/g, "a target=\"_blank\" href")
            }
        }
    }
}

export {
    config
}