let a = new Vue({
    el: "#vues",
    data: {
        mid: "",
        mpass: ""
    },
    methods: {
        gopage: function () {
            if (this.mid == "") {
                alert('아이디를 입력하세요');
                return false;
            }
            else if (this.mpass == "") {
                alert('패스워드를 입력하세요');
                return false;
            }
            else {
                location.href = 'http://dbfla6302.dothome.co.kr';
            }
        }
    }
});