
function common() {
  document.body.style.backgroundColor = '#faf6e6';
}

function google() {
  document.getElementsByClassName('sfbg')[0].style.background = 'none';
  document.getElementsByClassName('yg51vc')[0].style.background = 'none';
  document.getElementsByClassName('appbar')[0].style.background = 'none';
  document.getElementsByClassName('f6F9Be')[0].style.background = 'none';
}

function baidu() {
  document.getElementsByClassName('head_wrapper')[0].style.background = '#faf6e6';
  document.getElementById('page').style.background = 'none';
  document.getElementById('foot').style.background = 'none';
}

function baidu_fanyi() {
  document.getElementsByClassName('container')[0].style.background = 'none';
  document.getElementsByClassName('trans-input-wrap')[0].style.background = 'none';
  document.getElementsByClassName('input-wrap')[0].style.background = 'none';
  document.getElementsByClassName('ordinary-wrap')[0].style.background = 'none';
  document.getElementsByClassName('keywords-outter')[0].style.background = 'none';
}

function github() {
  let box = document.getElementsByClassName('Box');
  for (let i = 0; i < box.length; i++) {
  	box[i].style.background = 'none'
  }

  document.getElementsByClassName('header-search-wrapper')[0].style.background = '#faf6e6';

  document.getElementsByClassName('Box-header')[0].style.background = 'none';
  let colors = document.getElementsByClassName('color-bg-default');
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.setProperty('background', 'none', 'important');
  }
  document.getElementById('repository-container-header').style.background = 'none';
  document.getElementsByClassName('Header')[0].style.background = 'none';

  let header = document.getElementsByClassName('Header-link');
  for (let i = 0; i < header.length; i++) {
    header[i].style.color = '#666666';
  }

  // document.getElementById('foot').style.background = 'none';
}

function vue() {
  document.getElementById('header').style.background = '#faf6e6';
}

function vue3() {
  document.getElementsByClassName('navbar')[0].style.background = '#faf6e6';
  // document.getElementsByClassName('navbar links')[0].style.background = '#faf6e6';


  document.getElementsByTagName('aside')[0].style.background = '#faf6e6';
  let doms = document.querySelectorAll("div[class*=language-]");
  for (let i = 0; i < doms.length; i++) {
    doms[i].style.background = 'none';
  }

  // 代码行数 todo 未生效
  doms = document.querySelectorAll('div[class*=language-].line-numbers-mode .line-numbers-wrapper, div[class*=language-].line-numbers-mode:after');
  for (let i = 0; i < doms.length; i++) {
    doms[i].style.background = '#faf6e6';
  }

  // 去除广告
  document.getElementsByClassName('carbon-ads')[0].remove();
}

function webpack_cn() {
  document.getElementsByClassName('site')[0].style.background = 'none';
}

function zhihu() {
  let cards = document.getElementsByClassName('Card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = 'none';
  }

  document.getElementsByClassName('QuestionHeader')[0].style.background = 'none';
  document.getElementsByClassName('QuestionHeader-footer')[0].style.background = 'none';
}

function zhihu_zhuanlan() {
  let posts = document.getElementsByClassName('Post-content');
  for (let i = 0; i < posts.length; i++) {
    posts[i].style.background = 'none';
  }
}

// https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined
// https://blog.csdn.net/weixin_34413802/article/details/92498807


function npmjs() {
  // todo 未生效，待解决
  let doms = document.getElementsByClassName('icJRWX');
  for (let i = 0; i < doms.length; i++) {
    doms[i].style.background = 'none';
  }
}

function stackoverflow() {
  // todo 未生效，待解决
  document.getElementById('content').style.background = 'none';
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: common
    });
  }

  if(tab.url.includes("google.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: google
    });
  }

  if(tab.url.includes("www.baidu.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: baidu
    });
  }

  if(tab.url.includes("fanyi.baidu.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: baidu_fanyi
    });
  }

  if(tab.url.includes("github.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: github
    });
  }

  if (tab.url.includes("v3.cn.vuejs.org")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: vue3
    });
  } else if(tab.url.includes("vuejs.org")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: vue
    });
  }

  if(tab.url.includes("npmjs.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: npmjs
    });
  }

  if(tab.url.includes("docschina.org")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: webpack_cn
    });
  }

  if(tab.url.includes("zhuanlan.zhihu.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: zhihu_zhuanlan
    });
  } else if(tab.url.includes("zhihu.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: zhihu
    });
  }

  if(tab.url.includes("stackoverflow.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: stackoverflow
    });
  }


});
