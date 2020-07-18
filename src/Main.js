/**
 * Created by Rychou on 2018/4/19.
 */
import React, {
    Component
} from 'react'
import $ from 'jquery'
// import url from './audio/gbqq.mp3' // 引入背景音乐文件
import url from './audio/eds.mp3'

class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2014, 7, 14) // 你们的纪念日
        }, 1000)
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                } else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({
            date: {
                d: d,
                hour: hour,
                minute: minute,
                second: second
            }
        });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const {
                    d,
                    hour,
                    minute,
                    second
                } = this.state.date
                return ( < p > Kita telah bersama selama: < span className = "date-text" > {
                    d
                } < /span> hari <span className="date-text">{hour}</span > jam < span className = "date-text" > {
                    minute
                } < /span> menit <span className="date-text">{second}</span > detik < /p>)
            }
        }
        return ( <
            div className = "App animated bounceInLeft" >
            <
            div className = "date" > {
                date()
            } < /div> <
            div id = "autotype" >
            <
            h1 style = {
                {
                    fontWeight: 900
                }
            } > Hi Bby < /h1> <
            p > Sebelum dimulai, ayo puter lagunya dulu wkwk < /p> <
            p > Selasa, 14 Juni 2020 adalah hari peringatan jadian kita yang ke 6 Tahun.Kita sudah cukup lama ya menghadapi segala sesuatu bersama bb hehe <
            /p> <
            p > Sebelumnya, aku ingin minta maaf ya buat yang kesalahan aku kemarin, maafin yaaa maafin dong kamu kan baik ^ ^
            <
            /p> <
            p > Hey sayang, 6 tahun bukan waktu yang sebentar untuk bersama - sama.Dari kita masih mungil kecil sekarang jadi rada buncit, rada loh ya: v aku gatau mau nulis apa, dan gimana, aku ga pandai merangkai kata seperti kamu yang pintar membuat dan merangkai kata yang bisa uwu. <
            /p> <
            p > Yaudah, intinya Selamat hari jadian kita yang ke - 6 tahun ya, Wish nya yang deket dulu deh untuk kita punya pekerjaan yang layak dan halal,
            terus doakan aku supaya cepat lulus dan menghasilkan uang untuk bisa cepet - cepet lebih ke jenjang yang serius. <
            /p> <
            p > Izinkan aku buat jagain hubungan ini lebih lama lagi, dan semoga rasa kamu masih sama dengan aku seterusnya sampe aku ga buncit lagi donggg wkwkwk <
            /p> <
            p > Sekali lagi, selamat hari jadian yang ke - 6 tahun ya！ Love ya sayang < /p> <
            div style = {
                {
                    textAlign: 'right'
                }
            } >
            <
            p > Pacarmu yang ganteng < /p> <
            p > 14 Juni 2020 < /p> <
            /div> <
            /div> <
            audio id = "audio"
            src = {
                url
            } > < /audio> <
            /div>

        )
    }
}
export default Main