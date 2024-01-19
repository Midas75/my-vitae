import { Lexer, marked } from "./marked.esm.min.js"

const config = {
    baseModel: {
    },
    personalInformation: {
        gender: {
            key: ["性别", "gender"],
            format: function (value) {
                return "&nbsp;<b>⚤</b> " + value
            }
        },
        age: {
            key: ["年龄", "age"],
            format: function (value) {
                return "🎂 " + value
            }
        },
        wechat: {
            key: ["微信", "wechat"],
            format: function (value) {
                let span = document.createElement('span');
                span.style.fontSize = "85%";
                span.style.color = "white";
                span.style.background = "linear-gradient(to bottom,#00D50D,#00B70C)";
                span.style.borderRadius = "35%";
                span.style.display = "inline-block";
                span.style.transform = "scaleX(-0.85)";
                span.innerHTML = "&nbsp;🗪&nbsp;";
                return `${span.outerHTML}&nbsp;${value}`;
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
        expection: {
            key: ["期望岗位", "expection"],
            format: function (value) {
                return "🖥️ " + value;
            }
        },
        work: {
            key: ["经验", "work"],
            format: function (value) {
                return "💼 " + value + " 工作经验"
            }
        },
        avatar: {
            key: ["头像", "avatar"],
            format: function (value) {
                return `<image class="pi-image" src="${Lexer.lex(value)[0].tokens[0].href}">`
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
                return marked.parse(value)
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
                return `地址：<a href="${value}">${value}</a>`
            }
        },
        hide: {
            key: ["隐藏", "hide"]
        },
        content: {
            key: ["内容", "content"],
            format: function (value) {
                return marked.parse(value)
            }
        }
    }
}

export {
    config
}