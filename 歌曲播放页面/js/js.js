/**
 * Created by asus on 2017/9/19.
 */
$(function(){
    var arr=[{
        url:'http://dl.stream.qqmusic.qq.com/C400003OUlho2HcRHC.m4a?fromtag=38&vkey=CE4475DE15B25E3D4B184E8AB77F910798F6E337199186D0C76AE1B800DF8634F33AEF05D4720D3D2621D0E9061F2E3D16E3C35D4C76D22F&guid=6700986615',
        songname:'告白气球',
        name:'周杰伦',
        src:'http://y.gtimg.cn/music/photo_new/T002R150x150M000003RMaRI1iFoYd.jpg?max_age=2592000'
    },{
        url:'http://dl.stream.qqmusic.qq.com/C400001Js78a40BZU6.m4a?fromtag=38&vkey=E35257DDD097C04D5E9EB8FA8A07595132B6AF1833D6E9499843B2DACCF24A2F48FA4738019A20EDF3581B01440CFD53D8F51F9F64686E31&guid=6700986615',
        songname:'算什么男人',
        name:'周杰伦',
        src:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001uqejs3d6EID.jpg?max_age=2592000'
    },{
        url:'http://dl.stream.qqmusic.qq.com/C400002u8ZOM4C7QF4.m4a?fromtag=38&vkey=93C19A055E46C22EE956724A5C7F9C277BB1020D7A619F3F88E7EB58B360D1CD70E77A52B38D41AF7FD1022F74C8DFEF6EAA54EFAC4EB4A8&guid=6700986615',
        songname:'手写的从前',
        name:'周杰伦',
        src:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001uqejs3d6EID.jpg?max_age=2592000'
    },{
        url:'http://dl.stream.qqmusic.qq.com/C4000009BCJK1nRaad.m4a?fromtag=38&vkey=5382388C94838FDA0029B4A5B80D110CA05F165F9E03AEE102BD91308AF738E252544E659489474300660E91934514B2A31483DA5AB3333A&guid=6700986615',
        songname:'简单爱',
        name:'周杰伦',
        src:'//y.gtimg.cn/music/photo_new/T002R150x150M000000I5jJB3blWeN.jpg?max_age=2592000'
    },{
        url:'http://dl.stream.qqmusic.qq.com/C4000002jB2g1E3Zhd.m4a?fromtag=38&vkey=76F3A354163F7439CA52FCB40A4C57C479A03932DC880C8B9AB5EDD11C97744BF0030208222CCD8A8A64347C98DDD96A1A6FE709FFDCBD9E&guid=6700986615',
        songname:'晴天',
        name:'周杰伦',
        src:'http://y.gtimg.cn/music/photo_new/T002R150x150M000003F3HTD47a7hp.jpg?max_age=2592000'
    }];
    var index = 0;
    var audio = document.querySelector('audio');
    var play = document.querySelector('.play');
    var pause = document.querySelector('.pause');

    function move(index){
        $('.song-name>h3').html(arr[index].songname);
        $('audio').attr('src',arr[index].url);
        $('.song-img>img').attr('src',arr[index].src);
        $('.singer>span').html(arr[index].name);
    }
    move(index);
    $('audio').on('canplay',function() {
        $('.play').tap(function(){
            if(!audio.paused){
                audio.pause();
                play.style.display = 'none';
                pause.style.display = 'block';
                //play.setAttribute('display','none');
                //pause.setAttribute('display','black')
            }
        });
        $('.pause').tap(function(){
            if(audio.paused){
                audio.play();
                play.style.display = 'block';
                pause.style.display = 'none';
            }
        });
        //上一曲按钮
        $('.left').tap(function(){
            index--;
            index = index < 0 ? arr.length-1:index;
            //$('.specialImg').empty('img');
            move(index);
        });
        //下一曲按钮
        $('.right').tap(function(){
            index++;
            index = index > arr.length-1 ? 0:index;
            move(index);
            audio.play();
            play.style.display = 'block';
            pause.style.display = 'none';

        });
        $('audio').on('ended',function(){
            index++;
            index = index > arr.length-1 ? 0 : index;
            move(index);
            audio.play();
            play.style.display = 'block';
            pause.style.display = 'none';
        })
    });
    $('.back').tap(function(){
        window.history.back();
    })
})