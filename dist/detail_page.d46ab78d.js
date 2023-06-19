// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/detail_page.js":[function(require,module,exports) {
/* 잠긴 게시글 클릭 */
// let lockedPosts = document.querySelectorAll('.qna-board .qna-post.locked')

// lockedPosts.forEach((post) => {
//     post.addEventListener('click', function(){
//         alert('비공개 게시글입니다.')
//     })
// })

/* 오늘 날짜 추출 */
function getToday() {
  var dt = new Date();
  var year = dt.getFullYear();
  var month = (dt.getMonth() + 1).toString();
  month = month.length == 1 ? '0' + month : month;
  var day = dt.getDate().toString();
  day = day.length == 1 ? '0' + day : day;
  return "".concat(year, "-").concat(month, "-").concat(day);
}

/* 리뷰 카운트 */
function reviewCounting() {
  var reviewCount = document.querySelector('.product-reviews > p > span:first-child');
  reviewCount.textContent = "\uC804\uCCB4 (\uCD1D ".concat(document.querySelectorAll('.product-reviews .review').length, "\uAC74)");
}

/* QNA 카운트 */
function QNACounting() {
  var howmanyQNA = document.querySelector('.qna-board > p');
  var QNAposts = document.querySelectorAll('.qna-board .qna-post');
  howmanyQNA.textContent = "\uC804\uCCB4 (\uCD1D ".concat(QNAposts.length, "\uAC74)");
}

/* 별점 클릭 */
var stars = document.querySelectorAll('.review-write p i');
stars.forEach(function (star, index) {
  star.addEventListener('click', function () {
    var att = star.getAttribute('class');
    if (att == 'fa-star far') {
      /* 빈 별 */

      for (var i = 0; i <= index; i++) {
        console.log(i);
        stars[i].classList.remove('far');
        stars[i].classList.add('fas');
      }
    } else if (att == 'fa-star fas') {
      /* 채워진 별 */

      for (var _i = 4; _i > index; _i--) {
        console.log(_i);
        stars[_i].classList.remove('fas');
        stars[_i].classList.add('far');
      }
    }
  });
});

/* 리뷰 작성 div 출력 */

var reviewDisplayBtn = document.querySelector('.product-reviews .btn-review-write');
var reviewWrite = document.querySelector('.product-reviews .review-write');
$(reviewDisplayBtn).click(function () {
  $(this).hide();
  $(reviewWrite).css('display', 'flex');
});

/* 리뷰 작성 */
var reviewWriteBtn = document.querySelector('.review-write .review-submit');
reviewWriteBtn.addEventListener('click', function () {
  var reviewText = document.querySelector('.product-reviews .review-write input').value; /* 리뷰 내용 */
  var star = document.querySelector('.review-write p span').innerHTML; /* 별점 */
  var today = getToday(); /* 현재 날짜 */
  var yourID = 'fu****'; /* 아이디 가져오기 (아무거나 일단..) */

  // let stars = document.querySelector('.review-write p i')
  var blackStars = document.querySelectorAll('.review-write p i.fas');
  if (reviewText.length < 10) alert('리뷰는 10자 이상 작성해주세요!');else if (blackStars.length == 0) alert('별점을 입력해 주세요!');else {
    var review = document.createElement('div');
    review.setAttribute('class', 'review');
    var reviewBox = document.querySelector('.reviews-wrap');
    review.innerHTML = "\n            <span>".concat(reviewText, " <i class=\"fas fa-trash-alt\"></i></span>\n            <div class=\"star-point\">").concat(star, "</div>\n            <div class=\"review-date\">").concat(today, "</div>\n            <div class=\"review-id\">").concat(yourID, "</div>\n        ");
    reviewBox.appendChild(review);

    /* 리뷰 삭제 */
    var deleteReview = reviewBox.querySelectorAll('i.fa-trash-alt');
    deleteReview.forEach(function (del) {
      del.addEventListener('click', function () {
        var removeTargetReview = del.closest('.review');
        var removeConfirm = confirm('삭제하시겠어요?');
        if (removeConfirm) {
          removeTargetReview.remove();
          reviewCounting();
        }
      });
    });

    /* 초기화 */
    document.querySelector('.product-reviews .review-write input').value = '';
    var resetStars = document.querySelectorAll('.review-write p i');
    resetStars.forEach(function (star) {
      star.classList.remove('fas');
      star.classList.add('far');
    });
    alert('작성되었습니다!');
    var reviewRecount = document.querySelector('.product-reviews > p > span:first-child');
    reviewRecount.textContent = "\uC804\uCCB4 (\uCD1D ".concat(document.querySelectorAll('.product-reviews .review').length, "\uAC74)");
  }
});

/* 열린 게시글 클릭 */
var openablePosts = document.querySelectorAll('.qna-board .qna-post');
openablePosts.forEach(function (post) {
  $(post).click(function () {
    $(this).next().toggle();
  });
});

/* 답변 작성 버튼 */

function addModBtn() {
  var answerPosts = document.querySelectorAll('.qna-board-wrap .answer p');
  answerPosts.forEach(function (post) {
    var isEmpty = post.querySelectorAll('i.fa-edit');
    if (isEmpty.length != 0) {
      return;
    }
    var editBtn = document.createElement('i');
    editBtn.classList.add('fas');
    editBtn.classList.add('fa-edit');
    editBtn.addEventListener('click', function () {
      var p = this.parentElement;
      var adminZone = this.parentElement.parentElement.querySelector('.input-answer');
      p.style.display = 'none';
      adminZone.style.display = 'block';
    });
    post.appendChild(editBtn);
  });
}
function addSubmitBtn() {
  var answerBtn = document.querySelectorAll('.input-answer .answer-submit');
  answerBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var textBox = this.previousElementSibling;
      var p = this.parentElement.previousElementSibling;
      var span = this.parentElement.previousElementSibling.querySelector('span');
      span.textContent = textBox.value;
      p.style.display = 'block';
      this.parentElement.style.display = 'none';
      var father = this.parentElement.parentElement;
      console.log(father);
      father.classList.remove('pending');
      var changeStatus = father.previousElementSibling.querySelector('.status');
      changeStatus.textContent = '답변완료';
    });
  });
}
var questionBoard = document.querySelector('.qna-board-wrap');
var questionBtn = document.querySelector('.qna .btn-question');
var questionWrite = document.querySelector('.qna .question-write');
var questionTextBox = questionWrite.querySelector('input.answer');
var questionSubmit = questionWrite.querySelector('.question-submit');
var questionCheck = questionWrite.querySelector('.private-check input');

/* 문의하기 버튼 */
questionBtn.addEventListener('click', function () {
  this.style.display = 'none';
  questionWrite.style.display = 'flex';
});

/* 본격적으로 문의하기 */
questionSubmit.addEventListener('click', function () {
  var private = document.querySelector('.private-check input').checked ? '<i class="fas fa-lock"></i>' : '';
  var qText = questionTextBox.value;
  var today = getToday();
  var yourID = 'fu****'; /* 아디는 일단 아무거나 */

  var deleteQuestion = document.createElement('i');
  deleteQuestion.classList.add('fas');
  deleteQuestion.classList.add('fa-trash-alt');
  deleteQuestion.style.marginLeft = '10px';
  deleteQuestion.style.color = 'red';
  deleteQuestion.addEventListener('click', function () {
    var a = $(this).closest('.qna-post');
    var b = a.next();
    if (confirm('문의를 삭제하시겠습니까?')) {
      a.remove();
      b.remove();
      QNACounting();
    }
  });
  if (qText.length < 10) {
    alert('10자 이상 작성해주세요!');
    return;
  }
  var questionPost = document.createElement('div');
  questionPost.classList.add('qna-post');
  questionPost.innerHTML = "\n        <p class=\"status\">\uBBF8\uCC98\uB9AC</p>\n        <p class=\"title\">".concat(qText, " ").concat(private, "</p>\n        <p class=\"date\">").concat(today, "</p>\n        <p class=\"user\">").concat(yourID, "</p>\n    ");
  var title = questionPost.querySelector('.title');
  title.appendChild(deleteQuestion);
  var answer = document.createElement('div');
  answer.classList.add('answer');
  answer.classList.add('pending');
  answer.innerHTML = "            \n        <b><i class=\"fas fa-sort-down\"></i> [CARHARTT] \uAD00\uB9AC\uC790</b>\n        <p>\n            <span></span>\n        </p>\n        <div class=\"input-answer\">\n            <input type=\"text\"></input>\n            <div class=\"answer-submit\">\uB2F5\uBCC0\uD558\uAE30</div>\n        </div>\n    ";
  /* 그냥 다 하자 로드될때 안 먹힐 수도 있다 */

  // $(answerSubmit).click(function(){
  //     $(this).parent().toggle()
  // })

  $(questionPost).click(function () {
    $(answer).toggle();
  });

  /* 최종 삽입 */
  $(questionBoard).prepend(answer); /* prepend라서 answer부터.. */
  $(questionBoard).prepend(questionPost);
  questionTextBox.value = '';
  questionCheck.checked = false;
  console.log();
  addModBtn();
  addSubmitBtn();
  QNACounting();
  alert('등록 되었습니다!');
});

/* 모든 수정/작성 버튼 이벤트 걸기 (동적인 요소들어오면 이거 한번 더 해줘야됨) */

addModBtn();
addSubmitBtn();
reviewCounting();
QNACounting();

// let answerSubmit = document.querySelectorAll('.input-answer .answer-submit')

// answerSubmit.forEach((answer) => {
//     answer.addEventListener('click', function(){

//         let textZone = answer.parentElement.previousElementSibling
//         textZone.style.display = 'block'

//         let adminZone = answer.parentElement
//         adminZone.style.display = 'none'

//         let textData = answer.previousElementSibling
//         textZone.innerHTML = `${textData.value} <i class="fas fa-edit"></i>`

//         /* 동적으로 만든거라서 여기서 한번 더 해야되나..? */

//         let editBtns = document.querySelectorAll('.answer .fa-edit')

//         editBtns.forEach((btn) => {
//             btn.addEventListener('click' , function(){
//                 adminZone.style.display = 'block'
//                 btn.parentElement.style.display = 'none'
//             })
//         }) 

//     })
// })

/* 수정 버튼 */

/* 미처리 문의 */

// const pendingAnswers = document.querySelectorAll('.answer')

// pendingAnswers.forEach((answer) => {
//     const inputAnswer = document.createElement('div')
//     inputAnswer.setAttribute('class', 'answer')
//     // inputAnswer.setAttribute('class', 'answer')

//     inputAnswer.innerHTML = `
//             <div class="input-answer">
//                 <b><i class="fas fa-sort-down"></i> [CARHARTT] 관리자</b>
//                 <input type="text"></textarea>
//                 <div class="answer-submit">답변하기</div>
//             </div>`

//     answer.appendChild(inputAnswer)

// })

// /* 미처리 문의 */

// const replyPost = document.querySelector('.qna-post .answer.pending')

// replyPost.forEach((post) => {

//     let replyInput = post.querySelector('.input-answer')

//     let replyText = post.querySelector('input')
//     let replyBtn = post.querySelector('.answer-submit')

//     replyBtn.addEventListener('click', function(){

//     console.log(replyText)
//     let replyElement = document.createElement('p')
//     replyElement.textContent = replyText.value

//     /* 수정 구현 */

//     let modifyBtn = document.createElement('span')
//     modifyBtn.innerHTML = ' <i class="fas fa-edit"></i>'
//     modifyBtn.style.color = '#545ADC'
//     modifyBtn.style.cursor = 'pointer'

//     replyElement.appendChild(modifyBtn)
//     post.appendChild(replyElement)

//     replyInput.style.display = 'none'
//     modifyBtn.addEventListener('click', function(){
//         replyInput.style.display = 'flex'
//         post.removeChild(replyElement)
//     })

//     /* 미처리 -> 답변완료 */

//     $(post).prev().children('.status').text('답변완료')

// })

// })

/* category bar 스크롤 */

var categoryBars = document.querySelectorAll('.category-bar');
categoryBars.forEach(function (gory) {
  var gorys = gory.querySelectorAll('div');
  gorys.forEach(function (g, index) {
    g.addEventListener('click', function () {
      var arrival = categoryBars[index];
      arrival.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      });
    });
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53965" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail_page.js"], null)
//# sourceMappingURL=/detail_page.d46ab78d.js.map