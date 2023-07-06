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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var imgData = [{
  name: 'visual',
  src: ['./img/visual_01.jpg']
}, {
  name: 'visual',
  src: ['./img/visual_02.jpg']
}, {
  name: 'visual',
  src: ['./img/visual_03.jpg']
}, {
  name: 'best',
  src: ['./img/best_01-1.jpg', './img/best_01-2.jpg'],
  productKR: 'S/S LIFEGUARDS T-SHIRT'
}, {
  name: 'best',
  src: ['./img/best_02-1.jpg', './img/best_02-2.jpg'],
  productKR: 'S/S REYES SHIRT'
}, {
  name: 'best',
  src: ['./img/best_03-1.jpg', './img/best_03-2.jpg'],
  productKR: 'S/S BOOGIE T-SHIRT'
}, {
  name: 'best',
  src: ['./img/best_04-1.jpg', './img/best_04-2.jpg'],
  productKR: 'S/S NEW FRONTIER T-SHIRT'
}, {
  name: 'best',
  src: ['./img/best_05-1.jpg', './img/best_05-2.jpg'],
  productKR: 'CRAFT PANT DUNMORE'
}, {
  name: 'best',
  src: ['./img/best_06-1.jpg', './img/best_06-2.jpg'],
  productKR: 'COASTAL JACKET'
}, {
  name: 'best',
  src: ['./img/best_07-1.jpg', './img/best_07-2.jpg'],
  productKR: 'AWAKE NY TEDDY JACKET'
}, {
  name: 'best',
  src: ['./img/best_08-1.jpg', './img/best_08-2.jpg'],
  productKR: 'HOODED CARHARTT SWEATSHIRT'
}, {
  name: 'new',
  src: ['./img/new_01-1.jpg', './img/new_01-2.jpg'],
  productKR: 'S/S SOUVENIR VALLEY T-SHIRT'
}, {
  name: 'new',
  src: ['./img/new_02-1.jpg', './img/new_02-2.jpg'],
  productKR: 'S/S NEW FRONTIER T-SHIRT'
}, {
  name: 'new',
  src: ['./img/new_03-1.jpg', './img/new_03-2.jpg'],
  productKR: 'DOUBLE KNEE PANT DEARBORN'
}, {
  name: 'new',
  src: ['./img/new_04-1.jpg', './img/new_04-2.jpg'],
  productKR: 'S/S DELRAY SHIRT'
}, {
  name: 'new',
  src: ['./img/new_05-1.jpg', './img/new_05-2.jpg'],
  productKR: 'W HOODED TACOMA SWEATSHIRT'
}, {
  name: 'new',
  src: ['./img/new_06-1.jpg', './img/new_06-2.jpg'],
  productKR: 'W HOODED TACOMA SWEATSHIRT'
}, {
  name: 'new',
  src: ['./img/new_07-1.jpg', './img/new_07-2.jpg'],
  productKR: 'S/S DELRAY SHIRT'
}, {
  name: 'new',
  src: ['./img/new_08-1.jpg', './img/new_08-2.jpg'],
  productKR: 'S/S DELRAY SHIRT'
}, {
  name: 'lnb',
  src: ['./img/menu_00_default_1.png']
}, {
  name: 'lnb',
  src: ['./img/menu_00_default_2.png']
}, {
  name: 'lnb',
  src: ['./img/menu_01.png']
}, {
  name: 'lnb',
  src: ['./img/menu_02.png']
}, {
  name: 'lnb',
  src: ['./img/menu_03.png']
}, {
  name: 'lnb',
  src: ['./img/menu_04.png']
}, {
  name: 'lnb',
  src: ['./img/menu_05.png']
}, {
  name: 'lnb',
  src: ['./img/menu_06.png']
}, {
  name: 'lnb',
  src: ['./img/menu_07.png']
}, {
  name: 'lnb',
  src: ['./img/menu_08.png']
}, {
  name: 'lnb',
  src: ['./img/menu_09.png']
}, {
  name: 'lnb',
  src: ['./img/menu_10.png']
}, {
  name: 'lnb',
  src: ['./img/menu_11.png']
}, {
  name: 'lnb',
  src: ['./img/menu_12.png']
}, {
  name: 'lookbook_hoverInfo',
  index: 0,
  product: 'S/S MARINA SHIRT MARINA PRINT, ATOM BLUE',
  productKR: '반팔 마리나 셔츠 마리나 프린트, 아톰 블루',
  price: '₩ 145,000',
  description: 'S/S MARINA SHIRT는 면 54%, 텐셀 46% 새틴 소재의 반팔 셔츠입니다. 루즈 핏이며, 올오버 프린트 형식입니다. 가먼트 워시드 처리 되어 있으며, 가슴 포켓이 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 0,
  product: 'DOUBLE KNEE PANT DEARBORN WAX STONE WASHED',
  productKR: '더블 니 팬츠 디어본 왁스 스톤 워시드',
  price: '₩ 168,000',
  description: 'DOUBLE KNEE PANT는 오가닉 코튼 100% \'DEARBORN\' 캔버스 소재의 워크 팬츠입니다. 릴렉스드 스트레이트 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 무릎 부분은 이중으로 덧대어져 있습니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 1,
  product: 'MADISON LOGO CAP WALL',
  productKR: '메디슨 로고 캡 월',
  price: '₩ 68,000',
  description: 'MADISON LOGO CAP은 면100% 트윌 소재의 모자입니다. 모자 둘레는 메탈 버클 스트랩을 사용하여 57 ~ 62 CM 까지 유동적으로 조절이 가능합니다. 안감이 없으며, 6개의 패널로 구분되어 있습니다. 정면에 C로고 자수가 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 1,
  product: 'BAYFIELD TOTE STORM BLUE FADED',
  productKR: '베이필드 토트 스톰 블루 페이디드',
  price: '₩ 108,000',
  description: 'BAYFIELD TOTE SMALL은 오가닉 코튼 100% \'DEARBORN\' 캔버스 소재의 토트백입니다. 36 X 34 X 12 CM 크기로 14.6 리터의 수납이 가능합니다. 안감이 없고, 스냅으로 여닫을 수 있습니다. 내부에 지퍼가 달린 포켓이 있으며, 정면에는 스퀘어 라벨이 부착된 포켓이 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 1,
  product: 'S/S BRAXTON SHIRT WHITE/WHITE',
  productKR: '반팔 브랙스턴 셔츠 화이트/화이트',
  price: '₩ 118,000',
  description: 'S/S BRAXTON SHIRT는 면100% 옥스포드 소재의 반팔 셔츠입니다. 루즈 핏이며, 얀 다이드 소재를 사용하였습니다. 가먼트 워시드 처리 되어 있으며, 버튼 다운 칼라 형태입니다. 가슴 포켓에는 로고 자수가 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 1,
  product: 'LANDON SHORT ROBERTSON BLUE BLEACHED',
  productKR: '랜든 쇼츠 로버트슨 블루 블리치드',
  price: '₩ 135,000',
  description: 'LANDON SHORT는 면100% \'ROBERTSON\' 데님 소재의 반바지입니다. 루즈 핏에 밑위는 레귤러 웨이스트입니다. 지퍼 플라이 형식입니다. 후면에 스퀘어 라벨이 부착되어 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 2,
  product: 'BACKLEY CAP LUPINUS',
  productKR: '바클리 캡 루피너스',
  price: '₩ 58,000',
  description: 'BACKLEY CAP은 면 100% 캔버스 소재의 모자입니다. 모자 둘레는 스트랩을 사용하여 51 ~ 61 CM 까지 유동적으로 조절이 가능합니다. 5개의 패널 형식입니다. 메탈 소재의 작은 통풍 구멍이 있으며, 제품의 정면에 스퀘어 라벨이 부착되어 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 2,
  product: 'W S/S TAMAS TROPICS SHIRT TAMAS TROPICS PRINT, PARADISE BIRD',
  productKR: '여성 반팔 타마스 트로픽스 셔츠 타마스 트로픽스 프린트, 파라다이스 버드',
  price: '₩ 168,000',
  description: 'W S/S TAMAS TROPICS SHIRT는 서스테이너블 비스코스 포플린 100% 소재의 반팔 셔츠입니다. 올오버 프린트 형태이며, 가먼트 워시드 처리 되어 있습니다. 가슴 포켓이 있습니다.'
}, {
  name: 'lookbook_hoverInfo',
  index: 2,
  product: 'W TRISTIN SHORT WAX RINSED',
  productKR: '여성 트리스틴 반바지 왁스 린스드',
  price: '₩ 138,000',
  description: 'W TRISTIN SHORT는 면 65%, 폴리에스테르 35% \'JEFFERSON\' 트윌 소재의 치노 반바지입니다. 릴렉스드 핏에 하이 웨이스트입니다. 지퍼 플라이 형식입니다. 후면에 스퀘어 라벨이 부착되어 있습니다.'
}, {
  name: 'instagram',
  src: ['./img/insta_01.jpg'],
  path: 'https://www.instagram.com/p/CpAKSjvKlWK/'
}, {
  name: 'instagram',
  src: ['./img/insta_02.jpg'],
  path: 'https://www.instagram.com/p/Cjk6xMlt7ij/'
}, {
  name: 'instagram',
  src: ['./img/insta_03.jpg'],
  path: 'https://www.instagram.com/p/Cll5NjPqSXr/'
}, {
  name: 'instagram',
  src: ['./img/insta_04.jpg'],
  path: 'https://www.instagram.com/p/Ck5hUVyot1k/'
}, {
  name: 'product-list',
  productNum: 1,
  product: 'S/S LIFEGUARDS T-SHIRT BLACK',
  productKR: '반팔 라이프가즈 티셔츠 블랙',
  price: 75000,
  color: 'color-black',
  category: 'cloth-tshirt',
  status: ['new'],
  src: ['./img/product_list_01_1.jpg', './img/product_list_01_2.jpg'],
  sale: 400
}, {
  name: 'product-list',
  productNum: 2,
  product: 'S/S LIFEGUARDS T-SHIRT WHITE',
  productKR: '반팔 라이프가즈 티셔츠 화이트',
  price: 75000,
  color: 'color-white',
  category: 'cloth-tshirt',
  status: ['new'],
  src: ['./img/product_list_02_1.jpg', './img/product_list_02_2.jpg'],
  sale: 402
}, {
  name: 'product-list',
  productNum: 3,
  product: 'S/S LIFEGUARDS T-SHIRT AGAVE',
  productKR: '반팔 라이프가즈 티셔츠 아가베',
  price: 75000,
  color: 'color-green',
  category: 'cloth-tshirt',
  status: ['new'],
  src: ['./img/product_list_03_1.jpg', './img/product_list_03_2.jpg'],
  sale: 490
}, {
  name: 'product-list',
  productNum: 4,
  product: 'COASTAL JACKET BLACK',
  productKR: '코스탈 자켓 블랙',
  price: 248000,
  color: 'color-black',
  category: 'cloth-jacket',
  status: [],
  src: ['./img/product_list_04_1.jpg', './img/product_list_04_2.jpg'],
  sale: 300
}, {
  name: 'product-list',
  productNum: 5,
  product: 'COASTAL JACKET WHITE',
  productKR: '코스탈 자켓 화이트',
  price: 248000,
  color: 'color-white',
  category: 'cloth-jacket',
  status: [],
  src: ['./img/product_list_05_1.jpg', './img/product_list_05_2.jpg'],
  sale: 359
}, {
  name: 'product-list',
  productNum: 6,
  product: 'S/S DELRAY SHIRT AMALFI/WAX',
  productKR: '반팔 델레이 셔츠 아말피/왁스',
  price: 118000,
  color: 'color-blue',
  category: 'cloth-shirt',
  status: [],
  src: ['./img/product_list_06_1.jpg', './img/product_list_06_2.jpg'],
  sale: 158
}, {
  name: 'product-list',
  productNum: 7,
  product: 'S/S DELRAY SHIRT PHOENIX/WAX',
  productKR: '반팔 델레이 셔츠 피닉스/왁스',
  price: 118000,
  color: 'color-red',
  category: 'cloth-shirt',
  status: [],
  src: ['./img/product_list_07_1.jpg', './img/product_list_07_2.jpg'],
  sale: 288
}, {
  name: 'product-list',
  productNum: 8,
  product: 'S/S DELRAY SHIRT WALL/WAX',
  productKR: '반팔 델레이 셔츠 월/왁스',
  price: 118000,
  color: 'color-gray',
  category: 'cloth-shirt',
  status: [],
  src: ['./img/product_list_08_1.jpg', './img/product_list_08_2.jpg'],
  sale: 890
}, {
  name: 'product-list',
  productNum: 9,
  product: 'S/S DELRAY SHIRT BLACK/WAX',
  productKR: '반팔 델레이 셔츠 블랙/왁스',
  price: 118000,
  color: 'color-black',
  category: 'cloth-shirt',
  status: [],
  src: ['./img/product_list_09_1.jpg', './img/product_list_09_2.jpg'],
  sale: 133
}, {
  name: 'product-list',
  productNum: 10,
  product: 'S/S KENWAY KNIT POLO BLACK',
  productKR: '반팔 켄웨이 니트 폴로 블랙',
  price: 148000,
  color: 'color-black',
  category: 'cloth-neat',
  status: [],
  src: ['./img/product_list_10_1.jpg', './img/product_list_10_2.jpg'],
  sale: 142
}, {
  name: 'product-list',
  productNum: 11,
  product: 'S/S KENWAY KNIT POLO KIWI',
  productKR: '반팔 켄웨이 니트 폴로 키위',
  price: 148000,
  color: 'color-green',
  category: 'cloth-neat',
  status: [],
  src: ['./img/product_list_11_1.jpg', './img/product_list_11_2.jpg'],
  sale: 177
}, {
  name: 'product-list',
  productNum: 12,
  product: 'S/S KENWAY KNIT POLO WHITE SWAN',
  productKR: '반팔 켄웨이 니트 폴로 화이트 스완',
  price: 148000,
  color: 'color-white',
  category: 'cloth-neat',
  status: [],
  src: ['./img/product_list_12_1.jpg', './img/product_list_12_2.jpg'],
  sale: 399
}, {
  name: 'product-list',
  productNum: 13,
  product: 'NELSON SWEATSHIRT PISCINE GARMENT DYED',
  productKR: '넬슨 스웻셔츠 피신 가먼트 다이드',
  price: 163000,
  color: 'color-blue',
  category: 'cloth-sweat',
  status: [],
  src: ['./img/product_list_13_1.jpg', './img/product_list_13_2.jpg'],
  sale: 311
}, {
  name: 'product-list',
  productNum: 14,
  product: 'NELSON SWEATSHIRT BLACK GARMENT DYED',
  productKR: '넬슨 스웻셔츠 블랙 가먼트 다이드',
  price: 163000,
  color: 'color-black',
  category: 'cloth-sweat',
  status: [],
  src: ['./img/product_list_14_1.jpg', './img/product_list_14_2.jpg'],
  sale: 111
}, {
  name: 'product-list',
  productNum: 15,
  product: 'INVINCIBLE 15 CHORE COAT',
  productKR: '인빈서블 15 초어 블랙',
  price: 528000,
  color: 'color-black',
  category: 'cloth-jacket',
  status: [],
  src: ['./img/product_list_15_1.jpg', './img/product_list_15_2.jpg'],
  sale: 222
}, {
  name: 'product-list',
  productNum: 16,
  product: 'S/S SCRAWL SCRIPT T-SHIRT',
  productKR: '반팔 스크롤 스크립트 티셔츠 화이트',
  price: 39000,
  color: 'color-white',
  category: 'cloth-tshirt',
  status: [],
  src: ['./img/product_list_16_1.jpg', './img/product_list_16_2.jpg'],
  sale: 333
}, {
  name: 'product-list',
  productNum: 17,
  product: 'S/S FEZ T-SHIRT',
  productKR: '반팔 페즈 티셔츠 시트론',
  price: 39000,
  color: 'color-yellow',
  category: 'cloth-tshirt',
  status: [],
  src: ['./img/product_list_17_1.jpg', './img/product_list_17_2.jpg'],
  sale: 444
}, {
  name: 'product-list',
  productNum: 18,
  product: 'S/S LINK SCRIPT T-SHIRT',
  productKR: '반팔 링크 스크립트 티셔츠 블랙',
  price: 39000,
  color: 'color-black',
  category: 'cloth-tshirt',
  status: [],
  src: ['./img/product_list_18_1.jpg', './img/product_list_18_2.jpg'],
  sale: 400
}, {
  name: 'product-list',
  productNum: 19,
  product: 'S/S LINK SCRIPT T-SHIRT',
  productKR: '반팔 링크 스크립트 티셔츠 화이트',
  price: 39000,
  color: 'color-white',
  category: 'cloth-tshirt',
  status: [],
  src: ['./img/product_list_19_1.jpg', './img/product_list_19_2.jpg'],
  sale: 700
}, {
  name: 'product-list',
  productNum: 20,
  product: 'S/S NELSON T-SHIRT',
  productKR: '반팔 넬슨 티셔츠 피신 가먼트 다이드',
  price: 39000,
  color: 'color-blue',
  category: 'cloth-tshirt',
  status: [],
  src: ['./img/product_list_20_1.jpg', './img/product_list_20_2.jpg'],
  sale: 253
}, {
  name: 'product-list',
  productNum: 21,
  product: 'ARLING JACKET',
  productKR: '알링 자켓 페이디드',
  price: 368000,
  color: 'color-gray',
  category: 'cloth-jacket',
  status: [],
  src: ['./img/product_list_21_1.jpg', './img/product_list_21_2.jpg'],
  sale: 124
}, {
  name: 'detail',
  color: 'black',
  category: 'sweat',
  status: [],
  src: ['./img/detail_01_black.jpg', './img/detail_02_black.jpg', './img/detail_03_black.jpg', './img/detail_04_black.jpg', './img/detail_05_black.jpg']
}, {
  name: 'detail',
  color: 'white',
  category: 'sweat',
  status: [],
  src: ['./img/detail_01_white.jpg', './img/detail_02_white.jpg', './img/detail_03_white.jpg', './img/detail_04_white.jpg', './img/detail_05_white.jpg']
}, {
  name: 'detail',
  color: 'green',
  category: 'sweat',
  status: [],
  src: ['./img/detail_01_green.jpg', './img/detail_02_green.jpg', './img/detail_03_green.jpg', './img/detail_04_green.jpg', './img/detail_05_green.jpg']
}];
var _default = imgData;
exports.default = _default;
},{}],"js/home_accordian.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var accProducts = document.querySelectorAll('.product-accordion .accProduct');
var pickProducts = document.querySelectorAll('.mdsPick .pickProduct');

/* lookbook 마우스 호버 */
var _loop = function _loop() {
  var target = accProducts[i];

  /* 마우스 오버 */
  target.addEventListener('mouseover', function () {
    accProducts.forEach(function (value) {
      if (value === target) value.style.width = '825px';else value.style.width = '202.5px';
    });
  });

  /* 마우스 아웃 */
  target.addEventListener('mouseout', function () {
    accProducts.forEach(function (value) {
      return value.style.width = '405px';
    });
  });
};
for (var i = 0; i < accProducts.length; i++) {
  _loop();
}

/* md pick 마우스 호버 */
var _loop2 = function _loop2(_i) {
  pickProducts[_i].addEventListener('mouseover', function () {
    var hover = pickProducts[_i];
    pickProducts.forEach(function (value) {
      if (value === hover) value.style.width = '615px';else {
        value.style.width = '195px';
        value.firstElementChild.style.filter = 'brightness(20%)';
      }
    });
  });
  pickProducts[_i].addEventListener('mouseout', function () {
    pickProducts.forEach(function (value) {
      value.style.width = '300px';
      value.firstElementChild.style.filter = 'brightness(100%)';
    });
  });
};
for (var _i = 0; _i < pickProducts.length; _i++) {
  _loop2(_i);
}
var hoverContents = document.querySelectorAll('.accProduct .hoverContent');
hoverContents.forEach(function (content, lookbookIndex) {
  var imgs = content.querySelectorAll('img');
  var bgImg = content.parentElement.querySelector('img.bgImg');
  var info = content.querySelector('.productInfo');
  content.addEventListener('mouseover', function (event) {
    var a = Array.from(content.children);
    a = a.indexOf(event.target.parentElement);

    /* 백그라운드 밝기 */
    bgImg.classList.add('gangjo-off');
    bgImg.classList.remove('gangjo-default');

    /* 누끼 이미지 밝기 */
    imgs.forEach(function (img, imgIdx) {
      if (imgIdx === a) {
        img.classList.add('gangjo-on');
        img.classList.remove('gangjo-off');

        /* 상품정보 */
        var productInfo = [];
        var _iterator = _createForOfIteratorHelper(_data.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i2 = _step.value;
            if (_i2.name === 'lookbook_hoverInfo' && _i2.index === lookbookIndex && _i2.index == lookbookIndex) {
              productInfo.push(_i2);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        info.querySelector('.productName').textContent = productInfo[a].product;
        info.querySelector('.productNameKR').textContent = productInfo[a].productKR;
        info.querySelector('.productPrice').textContent = productInfo[a].price;
        info.querySelector('.productDetails').textContent = productInfo[a].description;
      } else if (a === -1) true;else if (imgIdx !== a && a !== -1) {
        img.classList.add('gangjo-off');
        img.classList.remove('gangjo-on');
      }
    });

    // /* 상품 설명 불러오기 */
    // let yourContent = content.querySelector('bright-100')

    // /* 호버한 사진의 상품 인덱스 찾기 */
  });

  content.addEventListener('mouseleave', function () {
    bgImg.classList.add('gangjo-default');
    bgImg.classList.remove('gangjo-off');
    imgs.forEach(function (img) {
      img.classList.add('gangjo-default');
      img.classList.remove('gangjo-off');
      img.classList.remove('gangjo-on');
    });
  });
});
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54983" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/home_accordian.js"], null)
//# sourceMappingURL=/home_accordian.7b20a0b7.js.map