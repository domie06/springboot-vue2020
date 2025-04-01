const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm716ti/",
            name: "ssm716ti",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm716ti/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "中国咖啡文化宣传网站"
        } 
    }
}
export default base
