webpackJsonp([0],{"fY+s":function(t,s){},kvay:function(t,s,e){"use strict";var a=e("Dd8w"),i=e.n(a),l=e("qwAB"),n=e("ZV4u"),r=e("3Q4o"),o=e("y/jF"),c=e("NYxO"),g=e("F4+m"),h=Object(r.c)("transform"),f=Object(r.c)("backdrop-filter"),d={mixins:[g.b],data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:function(){return[]}},title:{type:String,default:""},rank:{type:Boolean,default:!1}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},methods:i()({handlePlaylist:function(t){t.length>0?(this.$refs.list.$el.style.bottom="60px",this.$refs.list.refresh()):(this.$refs.list.$el.style.bottom="",this.$refs.list.refresh())},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},randomPlayAll:function(){this.randomPlay({list:this.songs})}},Object(c.b)(["selectPlay","randomPlay"])),computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},watch:{scrollY:function(t){var s=0,e=40-this.imageHeight,a=Math.abs(t/this.imageHeight),i=1+a,l=Math.min(20,20*a),n=Math.max(e,t);this.$refs.layer.style[h]="translate3d(0, "+n+"px, 0)",t>0?(this.$refs.bgImage.style[h]="scale("+i+")",s=10):this.$refs.filter.style[f]="blur("+l+"px)",t<e?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=s}},components:{Scroll:l.a,SongList:n.a,Loading:o.a}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.bgImage,expression:"bgImage"}],staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.bgImage,expression:"bgImage"}],ref:"playBtn",staticClass:"play-wrapper"},[e("div",{staticClass:"play",on:{click:t.randomPlayAll}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{probeType:t.probeType,listenScroll:t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]};var p=e("VU/8")(d,m,!1,function(t){e("fY+s")},"data-v-4ab7fce0",null);s.a=p.exports}});
//# sourceMappingURL=0.2658a2654ac466e1e29c.js.map