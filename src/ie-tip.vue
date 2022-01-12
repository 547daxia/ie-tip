<template>
  <div id="ie-tip-mask" v-show="visible" @click.self="close">
    <div id="ie-tip-modal">
      <div class="_header">
        <h2>您的浏览器版本过低</h2>
        <p>
          <span style="color:red;">*</span> 为了保证页面的显示效果和安全性，<a
            target="_blank"
            href="https://www.google.cn/chrome/"
            >请升级浏览器</a
          >
        </p>
        <p><span style="color:red;">*</span> 其他国产浏览器请切换到极速模式</p>
        <div class="close" @click="close"></div>
      </div>
      <div class="body">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="onclick(item.href)"
        >
          <div class="img">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="name">
            <span>{{ item.name }}</span>
          </div>
          <div class="tip">
            <p>{{ item.tip }}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <span class="button" @click="downChrome">下载Chrome试试</span>
      </div>
    </div>
  </div>
</template>

<script>
import chrome from '../assets/chrome.png'
import firefox from '../assets/firefox.png'
import safari from '../assets/safari.png'
import opera from '../assets/opera.png'
export default {
  name: 'ie-tip',
  data () {
    return {
      visible: false,
      list: [
        {
          img: chrome,
          tip: '谷歌全新推出的高速浏览器',
          name: 'chrome',
          href: 'https://www.google.cn/chrome/'
        },
        {
          img: firefox,
          tip: '快，只为更好。Fast for good.',
          name: 'firefox',
          href: 'https://www.firefox.com.cn/'
        },
        {
          img: opera,
          tip: '更快速，更安全，更智能',
          name: 'opera',
          href: 'https://www.opera.com/zh-cn'
        },
        {
          img: safari,
          tip: '风驰电掣。数据密不透风。(适用MAC)',
          name: 'safari',
          href: 'https://www.apple.com.cn/safari/'
        }
      ]
    }
  },
  methods: {
    downChrome () {
      window.open('https://www.google.cn/chrome/', '_blank')
    },
    close () {
      this.visible = false
    },
    onclick (url) {
      window.open(url, '_blank')
    },
    getinfo () {
      var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
      if (userAgent.includes('Trident')) {
        this.visible = true
      }
    }
  },
  created () {
    this.getinfo()
  }
}
</script>
<style lang="less" scoped>
#ie-tip-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  #ie-tip-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 680px;
    height: 470px;
    padding: 10px 20px 20px 30px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-left: 10px solid #4fc1e9;
    ._header {
      position: relative;
      width: 100%;
      height: 30%;
      p {
        color: #333;
        a {
          text-decoration: none;
        }
      }
      .close {
        cursor: pointer;
        background: url('../assets/close.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .body {
      width: 100%;
      display: flex;
      height: 55%;
      .item {
        display: flex;
        width: 23%;
        height: 100%;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        padding: 0 5px;
        padding-top: 10px;
        cursor: pointer;
        border-radius: 10px;
        .img {
          height: 50%;
          width: 100%;
          text-align: center;
        }
        .name {
          height: 15%;
          width: 100%;
          text-align: center;
          font-size: 16px;
          color: #333;
          span {
            margin-left: 15%;
            text-align: center;
            display: block;
            width: 70%;
            padding: 5px 0px;
            background-color: #fff;
            background-color: rgba(#50c0e9, 0);
            // transition: all 0.5s;
            border-radius: 4px;
          }
        }
        .tip {
          height: 35%;
          width: 100%;
          text-align: center;
          color: #333;
        }
      }
      .item:hover {
        background-color: #f3f3f3;
        .name {
          span {
            background-color: rgba(#50c0e9, 0.9);
            border-radius: 4px;
            color: #fff;
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 15%;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .button {
        padding: 10px 20px;
        color: #fff;
        background-color: #4fc1e9;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>
