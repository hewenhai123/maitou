Vue.component('temp', {
        template: "#temp1",
        props: {
            list: Array
        },
        methods: {
            edit: function (item) {
                // console.log(item)
                this.$emit('item-click',item)
            }


        }
    }
)


var app = new Vue({
    el: "#app",
    data: {
        box: {
            width: 100 + 'mm',
            height: 80 + 'mm',
            'border': "1px solid #000",
            background: "#fff"
        },
        inner: [
            {//块
                sign: new Date().getTime(),
                blockStyle: {
                    width: "50mm",
                    height: "30mm",
                    border: "1px solid #000",

                },
                content: '',
                block: [
                    {//块
                        sign: new Date().getTime(),
                        blockStyle: {
                            // width: "4mm",
                            height: "14mm",
                            border: "1px solid #000",
                            float: "left"
                        },
                        content: 'l2-1',
                        block: []
                    },
                    {//块
                        sign: new Date().getTime(),
                        blockStyle: {
                            // width: "4mm",
                            height: "14mm",
                            border: "1px solid #000",
                            float: "left"
                        },
                        content: 'l2-2',
                        block: []
                    }
                ],

            },

        ]


    },
    methods: {
        add: function () {
            console.log("sdafasdfa")
            var boxStyle = {
                width: 100 + 'mm',
                height: 80 + 'mm',
                'border': "1px solid #000",
                background: "#fff"
            }
            this.box = boxStyle;
            // this.data.box=this.createStyle(boxStyle)
        },
        renderEle: function () {

        },
        createStyle: function (data) {
            var style = '';
            for (var key in data) {
                style += `${key}:${data[key]};`

            }
            return style
        },
        itemClick:function(item){
            console.log(item)
        }


    }

})