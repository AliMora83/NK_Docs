"use strict";
(() => {
var exports = {};
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 1310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__.staticGenerationAsyncStorage),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2315);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2333);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2885);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(683);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3269);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5746);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8208);
/* harmony import */ var next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_react_server_dom_webpack_server_browser__WEBPACK_IMPORTED_MODULE_6__);

    const tree = {
      children: [
        '',
        {
      children: [
        'user',
        {
      children: ['', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6167)), "/Users/alikora/ThirdWeb/NK/Docs/app/user/page.tsx"]}]
    },
        {
          
        }
      ]
    },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8514)), "/Users/alikora/ThirdWeb/NK/Docs/app/layout.tsx"],
'head': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 447)), "/Users/alikora/ThirdWeb/NK/Docs/app/head.tsx"],
        }
      ]
    }.children;
    const pages = ["/Users/alikora/ThirdWeb/NK/Docs/app/user/page.tsx"]

    
    
    

    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
  

/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ User)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8499);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(5468);
;// CONCATENATED MODULE: ./app/user/bannerUser.tsx


function BannerUser({}) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
            className: "px-6 py-10 max-w-full space-y-5 dark:bg-[#0b0e10] dark:text-gray-50 justify-center align-middle",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-auto space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            className: "doc_h5",
                            children: "#NAMKA Crypto Draw"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "doc_h1",
                            children: "General Use"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                            className: "doc_h4",
                            children: [
                                "How the ideal ",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "font-bold text-white",
                                    children: "User"
                                }),
                                " can navigate NAMKA Crypto Draw"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-5 border-t dark:border-[#4a4a4a]"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/user/user.tsx


function Users({}) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "visit",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-10 pb-5 text-gray-800 font-semibold",
                        children: "Visit us here"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://nk-crypto-draw.vercel.app/",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "bg-[#2c2b2b] hover:bg-[#080a0b] text-gray-200 hover:text-[#caa969] font-medium py-2 px-4 border border-[#caa969] rounded-lg drop-shadow-xl mb-5 text-sm",
                            children: "NK Crypto Draw"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Onboarding flow is getting users acquainted with an app or program, showing them around. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem ad alias eius expedita harum debitis non consequuntur maiores illum quibusdam placeat eos velit tenetur, ipsum asperiores labore? Rem blanditiis adipisci ab natus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "info",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Browse Info page"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem ad alias eius expedita harum debitis non consequuntur maiores illum quibusdam placeat eos velit tenetur, ipsum asperiores labore? Rem blanditiis adipisci ab natus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "draw",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Got to Draw"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem ad alias eius expedita harum debitis non consequuntur maiores illum quibusdam placeat eos velit tenetur, ipsum asperiores labore? Rem blanditiis adipisci ab natus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "tickets",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Buy tickets"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "wait",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Wait for draw"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "check",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Check Winnings"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto",
                id: "faq",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "pt-20 pb-5 text-gray-800 font-semibold",
                        children: "Frequently Asked Questions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos."
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const user = (Users);

;// CONCATENATED MODULE: ./app/user/page.tsx




function User({}) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(BannerUser, {}),
            /*#__PURE__*/ jsx_runtime.jsx(user, {})
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [714,275], () => (__webpack_exec__(1310)));
module.exports = __webpack_exports__;

})();