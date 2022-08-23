(function (t) {
    function e(e) {
        for (var n, r, a = e[0], i = e[1], o = 0, c = []; o < a.length; o++) r = a[o], Object.prototype.hasOwnProperty.call(s, r) && s[r] && c.push(s[r][0]), s[r] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        l && l(e);
        while (c.length) c.shift()()
    }

    var n = {}, s = {widget: 0};

    function r(t) {
        return a.p + "js/" + ({
            "lang-ar-json": "lang-ar-json",
            "lang-bg-json": "lang-bg-json",
            "lang-cs-json": "lang-cs-json",
            "lang-de-json": "lang-de-json",
            "lang-el-json": "lang-el-json",
            "lang-en-json": "lang-en-json",
            "lang-es-json": "lang-es-json",
            "lang-fa-json": "lang-fa-json",
            "lang-fr-json": "lang-fr-json",
            "lang-he-json": "lang-he-json",
            "lang-hi-json": "lang-hi-json",
            "lang-id-json": "lang-id-json",
            "lang-it-json": "lang-it-json",
            "lang-ja-json": "lang-ja-json",
            "lang-ka-json": "lang-ka-json",
            "lang-ms-json": "lang-ms-json",
            "lang-nl-json": "lang-nl-json",
            "lang-no-json": "lang-no-json",
            "lang-pl-json": "lang-pl-json",
            "lang-pt-json": "lang-pt-json",
            "lang-ro-json": "lang-ro-json",
            "lang-ru-json": "lang-ru-json",
            "lang-sk-json": "lang-sk-json",
            "lang-sv-json": "lang-sv-json",
            "lang-th-json": "lang-th-json",
            "lang-ua-json": "lang-ua-json",
            "lang-uk-json": "lang-uk-json",
            "lang-uz-json": "lang-uz-json",
            "lang-vi-json": "lang-vi-json",
            "lang-zh-json": "lang-zh-json"
        }[t] || t) + "." + {
            "lang-ar-json": "bbb1cc16",
            "lang-bg-json": "3b9d28c7",
            "lang-cs-json": "22240df5",
            "lang-de-json": "a63d97dc",
            "lang-el-json": "f512ff7e",
            "lang-en-json": "d9856f5c",
            "lang-es-json": "7d1fb23d",
            "lang-fa-json": "da15831b",
            "lang-fr-json": "5ffd8bf9",
            "lang-he-json": "20330820",
            "lang-hi-json": "6f764903",
            "lang-id-json": "5b7e3b77",
            "lang-it-json": "e572afd5",
            "lang-ja-json": "f08a5519",
            "lang-ka-json": "fdf3a244",
            "lang-ms-json": "214937d7",
            "lang-nl-json": "c0b81b6c",
            "lang-no-json": "0f3934cd",
            "lang-pl-json": "1931a4dd",
            "lang-pt-json": "cc80b073",
            "lang-ro-json": "66ae3292",
            "lang-ru-json": "1ff6f457",
            "lang-sk-json": "f1fc7610",
            "lang-sv-json": "0321b8b9",
            "lang-th-json": "bab289cc",
            "lang-ua-json": "3f390d92",
            "lang-uk-json": "f15b2d85",
            "lang-uz-json": "a289c6e9",
            "lang-vi-json": "c8184287",
            "lang-zh-json": "25919a28"
        }[t] + ".js"
    }

    function a(e) {
        if (n[e]) return n[e].exports;
        var s = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(s.exports, s, s.exports, a), s.l = !0, s.exports
    }

    a.e = function (t) {
        var e = [], n = s[t];
        if (0 !== n) if (n) e.push(n[2]); else {
            var i = new Promise((function (e, r) {
                n = s[t] = [e, r]
            }));
            e.push(n[2] = i);
            var o, c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = r(t);
            var l = new Error;
            o = function (e) {
                c.onerror = c.onload = null, clearTimeout(u);
                var n = s[t];
                if (0 !== n) {
                    if (n) {
                        var r = e && ("load" === e.type ? "missing" : e.type), a = e && e.target && e.target.src;
                        l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", l.name = "ChunkLoadError", l.type = r, l.request = a, n[1](l)
                    }
                    s[t] = void 0
                }
            };
            var u = setTimeout((function () {
                o({type: "timeout", target: c})
            }), 12e4);
            c.onerror = c.onload = o, document.head.appendChild(c)
        }
        return Promise.all(e)
    }, a.m = t, a.c = n, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) a.d(n, s, function (e) {
            return t[e]
        }.bind(null, s));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "https://widget.replain.cc/dist/", a.oe = function (t) {
        throw console.error(t), t
    };
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [], o = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var c = 0; c < i.length; c++) e(i[c]);
    var l = o;
    a(a.s = 0)
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    }, "0032": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("svg", {
                staticClass: "svg-icon",
                class: t.classes
            }, [n("use", {attrs: {"xlink:href": "#" + t.icon}})])
        }, r = [], a = {
            props: {
                icon: {type: String, default: "", required: !0},
                classes: {type: String, default: "", required: !1}
            }
        }, i = a, o = (n("a4aa"), n("2877")), c = Object(o["a"])(i, s, r, !1, null, null, null);
        e["a"] = c.exports
    }, "01f8": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return ContactFormMessage
        }));
        var s = n("5c99");

        class ContactFormMessage extends s["l"] {
            constructor() {
                super(), this.type = s["c"]
            }
        }
    }, "0234": function (t, e, n) {
        "use strict";

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, s = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                })))), s.forEach((function (e) {
                    r(t, e, n[e])
                }))
            }
            return t
        }

        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function a(t) {
            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, a(t)
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.pushParams = l, e.popParams = u, e.withParams = p, e._setTarget = e.target = void 0;
        var i = [], o = null;
        e.target = o;
        var c = function (t) {
            e.target = o = t
        };

        function l() {
            null !== o && i.push(o), e.target = o = {}
        }

        function u() {
            var t = o, n = e.target = o = i.pop() || null;
            return n && (Array.isArray(n.$sub) || (n.$sub = []), n.$sub.push(t)), t
        }

        function d(t) {
            if ("object" !== a(t) || Array.isArray(t)) throw new Error("params must be an object");
            e.target = o = s({}, o, t)
        }

        function h(t, e) {
            return f((function (n) {
                return function () {
                    n(t);
                    for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                    return e.apply(this, r)
                }
            }))
        }

        function f(t) {
            var e = t(d);
            return function () {
                l();
                try {
                    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                    return e.apply(this, n)
                } finally {
                    u()
                }
            }
        }

        function p(t, e) {
            return "object" === a(t) && void 0 !== e ? h(t, e) : f(t)
        }

        e._setTarget = c
    }, "0281": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return TagsCard
        }));

        class TagsCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.tags = t.tags
            }
        }
    }, "0334": function (t, e, n) {
        "use strict";
        n("c7eb")
    }, "034f": function (t, e, n) {
        "use strict";
        n("85ec")
    }, "0418": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "header",
                class: {"-offline": !t.isOnline()}
            }, [n("div", {staticClass: "column -grow"}, [n("div", {staticClass: "info"}, [n("div", {staticClass: "column"}, [n("div", {staticClass: "logo"}, [n("img", {
                staticClass: "image",
                attrs: {src: t.logo, alt: t.name}
            })])]), n("div", {staticClass: "column -grow"}, [n("div", {
                staticClass: "title",
                domProps: {innerHTML: t._s(t.$options.filters.purify(t.name))}
            }), n("div", {
                staticClass: "description",
                domProps: {innerHTML: t._s(t.$options.filters.safehtml(t.description))}
            })])])]), n("div", {staticClass: "column"}, [t.$root.$isEmbedded ? t._e() : [n("ButtonLink", {
                attrs: {
                    icon: "cross",
                    classes: "hide-chat",
                    title: t.$t("HEADER.CLOSE_BTN:TITLE")
                }, on: {click: t.onCloseClick}
            })], t.$root.$isEmbedded ? [n("ButtonLink", {
                staticClass: "hide-btn",
                attrs: {icon: "maximize", classes: "hide-chat", title: t.$t("HEADER.MAXIMIZE_BTN:TITLE")},
                on: {click: t.onMaximizeClick}
            })] : t._e()], 2)])
        }, r = [], a = n("c53a"), i = n("76ab"), o = {
            components: {ButtonLink: i["a"]}, computed: {
                logo() {
                    return this.$root.$stores.chat.state.settings.logo
                }, name() {
                    return this.$root.$stores.chat.state.settings.name
                }, description() {
                    return this.$root.$stores.chat.state.settings.description
                }
            }, methods: {
                onCloseClick() {
                    this.$root.$stores.chat.setHideState()
                }, onMaximizeClick() {
                    this.$root.$stores.chat.setOpenState()
                }, isOnline() {
                    return a["a"].isOnline(this.$root.$stores.chat)
                }
            }
        }, c = o, l = (n("21cf"), n("2877")), u = Object(l["a"])(c, s, r, !1, null, "0bacff24", null);
        e["a"] = u.exports
    }, "05e0": function (t, e, n) {
        "use strict";
        n("a6dc")
    }, "0645": function (t, e, n) {
    }, "0a06": function (t, e, n) {
        "use strict";
        var s = n("c532"), r = n("30b5"), a = n("f6b4"), i = n("5270"), o = n("4a7b"), c = n("848b"), l = c.validators;

        function u(t) {
            this.defaults = t, this.interceptors = {request: new a, response: new a}
        }

        u.prototype.request = function (t) {
            "string" === typeof t ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = o(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
            var e = t.transitional;
            void 0 !== e && c.assertOptions(e, {
                silentJSONParsing: l.transitional(l.boolean),
                forcedJSONParsing: l.transitional(l.boolean),
                clarifyTimeoutError: l.transitional(l.boolean)
            }, !1);
            var n = [], s = !0;
            this.interceptors.request.forEach((function (e) {
                "function" === typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous, n.unshift(e.fulfilled, e.rejected))
            }));
            var r, a = [];
            if (this.interceptors.response.forEach((function (t) {
                a.push(t.fulfilled, t.rejected)
            })), !s) {
                var u = [i, void 0];
                Array.prototype.unshift.apply(u, n), u = u.concat(a), r = Promise.resolve(t);
                while (u.length) r = r.then(u.shift(), u.shift());
                return r
            }
            var d = t;
            while (n.length) {
                var h = n.shift(), f = n.shift();
                try {
                    d = h(d)
                } catch (p) {
                    f(p);
                    break
                }
            }
            try {
                r = i(d)
            } catch (p) {
                return Promise.reject(p)
            }
            while (a.length) r = r.then(a.shift(), a.shift());
            return r
        }, u.prototype.getUri = function (t) {
            return t = o(this.defaults, t), r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        }, s.forEach(["delete", "get", "head", "options"], (function (t) {
            u.prototype[t] = function (e, n) {
                return this.request(o(n || {}, {method: t, url: e, data: (n || {}).data}))
            }
        })), s.forEach(["post", "put", "patch"], (function (t) {
            u.prototype[t] = function (e, n, s) {
                return this.request(o(s || {}, {method: t, url: e, data: n}))
            }
        })), t.exports = u
    }, "0b45": function (t, e, n) {
    }, "0df6": function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return function (e) {
                return t.apply(null, e)
            }
        }
    }, 1048: function (t, e, n) {
    }, "105f": function (t, e, n) {
    }, 1075: function (t, e, n) {
        "use strict";
        n("1cce")
    }, 1331: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.regex)("integer", /(^[0-9]*$)|(^-[0-9]+$)/);
        e.default = r
    }, "144d": function (t, e, n) {
    }, "16b2": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return MapCard
        }));

        class MapCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.text = t.text, this.address = t.address, this.coordinates = t.coordinates
            }
        }
    }, "198a": function (t, e, n) {
        "use strict";
        n("0645")
    }, "1a36": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [t.hideStartMessage ? t._e() : n("TextMessage", {attrs: {message: t.startMessage}}), n("div", {staticStyle: {width: "95%"}}, [n("Departments", {attrs: {"form-mode": !1}})], 1)], 1)
        }, r = [], a = n("c94a"), i = n("c0cb"), o = n("b077"), c = {
            components: {Departments: o["a"], TextMessage: a["a"]},
            props: {hideStartMessage: {type: Boolean, default: !1}},
            computed: {
                startMessage() {
                    const {startMessage: t} = this.$root.$stores.chat.state.settings, e = new i["a"](t);
                    return e.setIsOperatorSender(), e.setSender({name: this.$root.$stores.chat.state.settings.name}), e
                }
            }
        }, l = c, u = n("2877"), d = Object(u["a"])(l, s, r, !1, null, null, null);
        e["a"] = d.exports
    }, "1cce": function (t, e, n) {
    }, "1d2b": function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return function () {
                for (var n = new Array(arguments.length), s = 0; s < n.length; s++) n[s] = arguments[s];
                return t.apply(e, n)
            }
        }
    }, "1dce": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Vuelidate = A, Object.defineProperty(e, "withParams", {
            enumerable: !0,
            get: function () {
                return r.withParams
            }
        }), e.default = e.validationMixin = void 0;
        var s = n("fbf4"), r = n("0234");

        function a(t) {
            return c(t) || o(t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function o(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }

        function c(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, s = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                })))), s.forEach((function (e) {
                    u(t, e, n[e])
                }))
            }
            return t
        }

        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function d(t) {
            return d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, d(t)
        }

        var h = function () {
            return null
        }, f = function (t, e, n) {
            return t.reduce((function (t, s) {
                return t[n ? n(s) : s] = e(s), t
            }), {})
        };

        function p(t) {
            return "function" === typeof t
        }

        function m(t) {
            return null !== t && ("object" === d(t) || p(t))
        }

        function g(t) {
            return m(t) && p(t.then)
        }

        var v = function (t, e, n, s) {
            if ("function" === typeof n) return n.call(t, e, s);
            n = Array.isArray(n) ? n : n.split(".");
            for (var r = 0; r < n.length; r++) {
                if (!e || "object" !== d(e)) return s;
                e = e[n[r]]
            }
            return "undefined" === typeof e ? s : e
        }, y = "__isVuelidateAsyncVm";

        function b(t, e) {
            var n = new t({data: {p: !0, v: !1}});
            return e.then((function (t) {
                n.p = !1, n.v = t
            }), (function (t) {
                throw n.p = !1, n.v = !1, t
            })), n[y] = !0, n
        }

        var _ = {
            $invalid: function () {
                var t = this, e = this.proxy;
                return this.nestedKeys.some((function (e) {
                    return t.refProxy(e).$invalid
                })) || this.ruleKeys.some((function (t) {
                    return !e[t]
                }))
            }, $dirty: function () {
                var t = this;
                return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.every((function (e) {
                    return t.refProxy(e).$dirty
                }))
            }, $anyDirty: function () {
                var t = this;
                return !!this.dirty || 0 !== this.nestedKeys.length && this.nestedKeys.some((function (e) {
                    return t.refProxy(e).$anyDirty
                }))
            }, $error: function () {
                return this.$dirty && !this.$pending && this.$invalid
            }, $anyError: function () {
                var t = this;
                return !!this.$error || this.nestedKeys.some((function (e) {
                    return t.refProxy(e).$anyError
                }))
            }, $pending: function () {
                var t = this;
                return this.ruleKeys.some((function (e) {
                    return t.getRef(e).$pending
                })) || this.nestedKeys.some((function (e) {
                    return t.refProxy(e).$pending
                }))
            }, $params: function () {
                var t = this, e = this.validations;
                return l({}, f(this.nestedKeys, (function (t) {
                    return e[t] && e[t].$params || null
                })), f(this.ruleKeys, (function (e) {
                    return t.getRef(e).$params
                })))
            }
        };

        function w(t) {
            this.dirty = t;
            var e = this.proxy, n = t ? "$touch" : "$reset";
            this.nestedKeys.forEach((function (t) {
                e[t][n]()
            }))
        }

        var C = {
            $touch: function () {
                w.call(this, !0)
            }, $reset: function () {
                w.call(this, !1)
            }, $flattenParams: function () {
                var t = this.proxy, e = [];
                for (var n in this.$params) if (this.isNested(n)) {
                    for (var s = t[n].$flattenParams(), r = 0; r < s.length; r++) s[r].path.unshift(n);
                    e = e.concat(s)
                } else e.push({path: [], name: n, params: this.$params[n]});
                return e
            }
        }, S = Object.keys(_), $ = Object.keys(C), k = null, x = function (t) {
            if (k) return k;
            var e = t.extend({
                computed: {
                    refs: function () {
                        var t = this._vval;
                        this._vval = this.children, (0, s.patchChildren)(t, this._vval);
                        var e = {};
                        return this._vval.forEach((function (t) {
                            e[t.key] = t.vm
                        })), e
                    }
                }, beforeCreate: function () {
                    this._vval = null
                }, beforeDestroy: function () {
                    this._vval && ((0, s.patchChildren)(this._vval), this._vval = null)
                }, methods: {
                    getModel: function () {
                        return this.lazyModel ? this.lazyModel(this.prop) : this.model
                    }, getModelKey: function (t) {
                        var e = this.getModel();
                        if (e) return e[t]
                    }, hasIter: function () {
                        return !1
                    }
                }
            }), n = e.extend({
                data: function () {
                    return {rule: null, lazyModel: null, model: null, lazyParentModel: null, rootModel: null}
                }, methods: {
                    runRule: function (e) {
                        var n = this.getModel();
                        (0, r.pushParams)();
                        var s = this.rule.call(this.rootModel, n, e), a = g(s) ? b(t, s) : s, i = (0, r.popParams)(),
                            o = i && i.$sub ? i.$sub.length > 1 ? i : i.$sub[0] : null;
                        return {output: a, params: o}
                    }
                }, computed: {
                    run: function () {
                        var t = this, e = this.lazyParentModel(), n = Array.isArray(e) && e.__ob__;
                        if (n) {
                            var s = e.__ob__.dep;
                            s.depend();
                            var r = s.constructor.target;
                            if (!this._indirectWatcher) {
                                var a = r.constructor;
                                this._indirectWatcher = new a(this, (function () {
                                    return t.runRule(e)
                                }), null, {lazy: !0})
                            }
                            var i = this.getModel();
                            if (!this._indirectWatcher.dirty && this._lastModel === i) return this._indirectWatcher.depend(), r.value;
                            this._lastModel = i, this._indirectWatcher.evaluate(), this._indirectWatcher.depend()
                        } else this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null);
                        return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(e)
                    }, $params: function () {
                        return this.run.params
                    }, proxy: function () {
                        var t = this.run.output;
                        return t[y] ? !!t.v : !!t
                    }, $pending: function () {
                        var t = this.run.output;
                        return !!t[y] && t.p
                    }
                }, destroyed: function () {
                    this._indirectWatcher && (this._indirectWatcher.teardown(), this._indirectWatcher = null)
                }
            }), i = e.extend({
                data: function () {
                    return {
                        dirty: !1,
                        validations: null,
                        lazyModel: null,
                        model: null,
                        prop: null,
                        lazyParentModel: null,
                        rootModel: null
                    }
                }, methods: l({}, C, {
                    refProxy: function (t) {
                        return this.getRef(t).proxy
                    }, getRef: function (t) {
                        return this.refs[t]
                    }, isNested: function (t) {
                        return "function" !== typeof this.validations[t]
                    }
                }), computed: l({}, _, {
                    nestedKeys: function () {
                        return this.keys.filter(this.isNested)
                    }, ruleKeys: function () {
                        var t = this;
                        return this.keys.filter((function (e) {
                            return !t.isNested(e)
                        }))
                    }, keys: function () {
                        return Object.keys(this.validations).filter((function (t) {
                            return "$params" !== t
                        }))
                    }, proxy: function () {
                        var t = this, e = f(this.keys, (function (e) {
                            return {
                                enumerable: !0, configurable: !0, get: function () {
                                    return t.refProxy(e)
                                }
                            }
                        })), n = f(S, (function (e) {
                            return {
                                enumerable: !0, configurable: !0, get: function () {
                                    return t[e]
                                }
                            }
                        })), s = f($, (function (e) {
                            return {
                                enumerable: !1, configurable: !0, get: function () {
                                    return t[e]
                                }
                            }
                        })), r = this.hasIter() ? {
                            $iter: {
                                enumerable: !0,
                                value: Object.defineProperties({}, l({}, e))
                            }
                        } : {};
                        return Object.defineProperties({}, l({}, e, r, {
                            $model: {
                                enumerable: !0, get: function () {
                                    var e = t.lazyParentModel();
                                    return null != e ? e[t.prop] : null
                                }, set: function (e) {
                                    var n = t.lazyParentModel();
                                    null != n && (n[t.prop] = e, t.$touch())
                                }
                            }
                        }, n, s))
                    }, children: function () {
                        var t = this;
                        return a(this.nestedKeys.map((function (e) {
                            return u(t, e)
                        }))).concat(a(this.ruleKeys.map((function (e) {
                            return d(t, e)
                        })))).filter(Boolean)
                    }
                })
            }), o = i.extend({
                methods: {
                    isNested: function (t) {
                        return "undefined" !== typeof this.validations[t]()
                    }, getRef: function (t) {
                        var e = this;
                        return {
                            get proxy() {
                                return e.validations[t]() || !1
                            }
                        }
                    }
                }
            }), c = i.extend({
                computed: {
                    keys: function () {
                        var t = this.getModel();
                        return m(t) ? Object.keys(t) : []
                    }, tracker: function () {
                        var t = this, e = this.validations.$trackBy;
                        return e ? function (n) {
                            return "".concat(v(t.rootModel, t.getModelKey(n), e))
                        } : function (t) {
                            return "".concat(t)
                        }
                    }, getModelLazy: function () {
                        var t = this;
                        return function () {
                            return t.getModel()
                        }
                    }, children: function () {
                        var t = this, e = this.validations, n = this.getModel(), r = l({}, e);
                        delete r["$trackBy"];
                        var a = {};
                        return this.keys.map((function (e) {
                            var o = t.tracker(e);
                            return a.hasOwnProperty(o) ? null : (a[o] = !0, (0, s.h)(i, o, {
                                validations: r,
                                prop: e,
                                lazyParentModel: t.getModelLazy,
                                model: n[e],
                                rootModel: t.rootModel
                            }))
                        })).filter(Boolean)
                    }
                }, methods: {
                    isNested: function () {
                        return !0
                    }, getRef: function (t) {
                        return this.refs[this.tracker(t)]
                    }, hasIter: function () {
                        return !0
                    }
                }
            }), u = function (t, e) {
                if ("$each" === e) return (0, s.h)(c, e, {
                    validations: t.validations[e],
                    lazyParentModel: t.lazyParentModel,
                    prop: e,
                    lazyModel: t.getModel,
                    rootModel: t.rootModel
                });
                var n = t.validations[e];
                if (Array.isArray(n)) {
                    var r = t.rootModel, a = f(n, (function (t) {
                        return function () {
                            return v(r, r.$v, t)
                        }
                    }), (function (t) {
                        return Array.isArray(t) ? t.join(".") : t
                    }));
                    return (0, s.h)(o, e, {validations: a, lazyParentModel: h, prop: e, lazyModel: h, rootModel: r})
                }
                return (0, s.h)(i, e, {
                    validations: n,
                    lazyParentModel: t.getModel,
                    prop: e,
                    lazyModel: t.getModelKey,
                    rootModel: t.rootModel
                })
            }, d = function (t, e) {
                return (0, s.h)(n, e, {
                    rule: t.validations[e],
                    lazyParentModel: t.lazyParentModel,
                    lazyModel: t.getModel,
                    rootModel: t.rootModel
                })
            };
            return k = {VBase: e, Validation: i}, k
        }, T = null;

        function O(t) {
            if (T) return T;
            var e = t.constructor;
            while (e.super) e = e.super;
            return T = e, e
        }

        var E = function (t, e) {
            var n = O(t), r = x(n), a = r.Validation, i = r.VBase, o = new i({
                computed: {
                    children: function () {
                        var n = "function" === typeof e ? e.call(t) : e;
                        return [(0, s.h)(a, "$v", {
                            validations: n,
                            lazyParentModel: h,
                            prop: "$v",
                            model: t,
                            rootModel: t
                        })]
                    }
                }
            });
            return o
        }, M = {
            data: function () {
                var t = this.$options.validations;
                return t && (this._vuelidate = E(this, t)), {}
            }, beforeCreate: function () {
                var t = this.$options, e = t.validations;
                e && (t.computed || (t.computed = {}), t.computed.$v || (t.computed.$v = function () {
                    return this._vuelidate ? this._vuelidate.refs.$v.proxy : null
                }))
            }, beforeDestroy: function () {
                this._vuelidate && (this._vuelidate.$destroy(), this._vuelidate = null)
            }
        };

        function A(t) {
            t.mixin(M)
        }

        e.validationMixin = M;
        var I = A;
        e.default = I
    }, "21cf": function (t, e, n) {
        "use strict";
        n("70fc")
    }, 2292: function (t, e, n) {
        "use strict";
        var s = n("f121"), r = n("e5a3"), a = n("6d45"), i = n("7424"), o = n("ae74"), c = n("371c");

        function l(t, e, n) {
            return 429 === t.httpStatus ? n.t("FILES.EXCEEDED_LIMIT_ERROR") : 422 === t.httpStatus ? n.t("FILES.MAX_SIZE_ERROR", {
                filename: e.name,
                maxSize: Object(o["a"])(s["a"].files.maxSize)
            }) : n.t("_.SYSTEM_ERROR")
        }

        function u(t, e, n) {
            const r = [];
            for (const a of Object.keys(t)) {
                const i = t[a];
                i.size > s["a"].files.maxSize ? e(n.t("FILES.MAX_SIZE_ERROR", {
                    filename: i.name,
                    maxSize: Object(o["a"])(s["a"].files.maxSize)
                })) : r.push(i)
            }
            return r.length > s["a"].files.maxCount && (r.splice(s["a"].files.maxCount), e(n.t("FILES.REQUIREMENTS_COUNT", {countPlural: n.tc("FILES.PLURAL_COUNT", s["a"].files.maxCount)}))), r
        }

        async function d(t, e, n, r, a) {
            if (0 === e.length) return void c["a"].info("file: empty fules");
            c["a"].info(`file: start upload ${r + 1}/${e.length}`);
            const o = e[r];
            try {
                const e = await Object(i["g"])(t.state.id, t.state.clientId, t.state.token, o);
                c["a"].info("file: upload", e), n(null, e)
            } catch (u) {
                if (c["a"].error(u), n(l(u, o, a)), 422 !== u.httpStatus) return
            }
            if (r++, !e[r]) return !0;
            setTimeout(() => {
                d(t, e, n, r, a)
            }, 1e3 * s["a"].files.timeoutAfterUpload)
        }

        var h = async (t, e, n, s) => d(t, u(n, s, e), s, 0, e);
        e["a"] = (t, e, n, i, o, c, l) => h(n, o, t, (t, o) => {
            if (t) {
                const e = new a["b"](t);
                return e.setIsTemp(), e.setIsErrorLevel(), void n.addMessage(e)
            }
            const {name: u, url: d, size: h} = o, f = new r["a"](u, d);
            f.setIsClientSender(), n.addMessage(f), c.emit("ADD_MESSAGE", f), e.send("FILE_MESSAGE", {
                name: u,
                url: d,
                size: h
            }), n.updateCountOwnMessages(), i.trigger(i.events.CLIENT_SENT_MESSAGE, n.form(), d), l && l.push(s["a"].analytics.events.CLIENT_SENT_ONLINE_MESSAGE)
        })
    }, 2444: function (t, e, n) {
        "use strict";
        (function (e) {
            var s = n("c532"), r = n("c8af"), a = n("387f"), i = {"Content-Type": "application/x-www-form-urlencoded"};

            function o(t, e) {
                !s.isUndefined(t) && s.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }

            function c() {
                var t;
                return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof e && "[object process]" === Object.prototype.toString.call(e)) && (t = n("b50d")), t
            }

            function l(t, e, n) {
                if (s.isString(t)) try {
                    return (e || JSON.parse)(t), s.trim(t)
                } catch (r) {
                    if ("SyntaxError" !== r.name) throw r
                }
                return (n || JSON.stringify)(t)
            }

            var u = {
                transitional: {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
                adapter: c(),
                transformRequest: [function (t, e) {
                    return r(e, "Accept"), r(e, "Content-Type"), s.isFormData(t) || s.isArrayBuffer(t) || s.isBuffer(t) || s.isStream(t) || s.isFile(t) || s.isBlob(t) ? t : s.isArrayBufferView(t) ? t.buffer : s.isURLSearchParams(t) ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : s.isObject(t) || e && "application/json" === e["Content-Type"] ? (o(e, "application/json"), l(t)) : t
                }],
                transformResponse: [function (t) {
                    var e = this.transitional || u.transitional, n = e && e.silentJSONParsing,
                        r = e && e.forcedJSONParsing, i = !n && "json" === this.responseType;
                    if (i || r && s.isString(t) && t.length) try {
                        return JSON.parse(t)
                    } catch (o) {
                        if (i) {
                            if ("SyntaxError" === o.name) throw a(o, this, "E_JSON_PARSE");
                            throw o
                        }
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function (t) {
                    return t >= 200 && t < 300
                },
                headers: {common: {Accept: "application/json, text/plain, */*"}}
            };
            s.forEach(["delete", "get", "head"], (function (t) {
                u.headers[t] = {}
            })), s.forEach(["post", "put", "patch"], (function (t) {
                u.headers[t] = s.merge(i)
            })), t.exports = u
        }).call(this, n("4362"))
    }, 2453: function (t, e, n) {
    }, "24aa": function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (s) {
            "object" === typeof window && (n = window)
        }
        t.exports = n
    }, "25c8": function (t, e, n) {
    }, "25ca": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return VideoManagerCard
        }));

        class VideoManagerCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.module = !0
            }
        }
    }, 2858: function (t, e, n) {
    }, 2877: function (t, e, n) {
        "use strict";

        function s(t, e, n, s, r, a, i, o) {
            var c, l = "function" === typeof t ? t.options : t;
            if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), s && (l.functional = !0), a && (l._scopeId = "data-v-" + a), i ? (c = function (t) {
                t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
            }, l._ssrRegister = c) : r && (c = o ? function () {
                r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
            } : r), c) if (l.functional) {
                l._injectStyles = c;
                var u = l.render;
                l.render = function (t, e) {
                    return c.call(e), u(t, e)
                }
            } else {
                var d = l.beforeCreate;
                l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return {exports: t, options: l}
        }

        n.d(e, "a", (function () {
            return s
        }))
    }, "2a12": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "maxLength", max: t}, (function (e) {
                return !(0, s.req)(e) || (0, s.len)(e) <= t
            }))
        };
        e.default = r
    }, "2a52": function (t, e, n) {
        "use strict";
        var s = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "body"}, [n("TextMessage", {attrs: {message: t.startMessage}}), t.shouldAskDepartment ? [n("DepartmentsDialog", {attrs: {"hide-start-message": !0}}), n("br")] : t._e(), t._l(t.messages, (function (e, s) {
                    return [e.isTextMessage() ? n("TextMessage", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isFileMessage() && !e.isMediaType() ? n("FileMessage", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isFileMessage() && e.isImageType() ? n("ImageMessage", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isFileMessage() && e.isVideoType() ? n("VideoMessage", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isContactFormMessage() && t.contactForm ? n("FormMessage", {
                        key: s,
                        attrs: {
                            message: e,
                            "form-model": t.contactForm,
                            text: t.contactForm.text(),
                            privacy: t.privacy,
                            fields: t.contactForm.fields(),
                            values: t.contactForm.values()
                        },
                        on: {submit: t.contactFormSubmit}
                    }) : t._e(), e.isFeedbackFormMessage() && t.feedbackForm ? n("FormMessage", {
                        key: s,
                        attrs: {
                            message: e,
                            "form-model": t.feedbackForm,
                            text: t.feedbackForm.text(),
                            privacy: t.privacy,
                            fields: t.feedbackForm.fields(),
                            values: t.feedbackForm.values()
                        },
                        on: {submit: t.feedbackFormSubmit}
                    }) : t._e(), e.isServiceMessage() ? n("ServiceMessage", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isAutoFeedbackMessage() && t.autoFeedbackForm && t.autoFeedbackForm.isEnable() ? n("AutoFeedback", {
                        key: s,
                        attrs: {
                            message: e,
                            messengers: t.autoFeedbackForm.messengers(),
                            "contacts-text": t.autoFeedbackForm.contactsText(),
                            values: t.autoFeedbackForm.values()
                        },
                        on: {submit: t.autoFeedbackSubmit}
                    }) : t._e(), e.isBannerMessage() ? n("Banner", {
                        key: s,
                        attrs: {message: e},
                        on: {"banner-click": t.onBannerClick}
                    }) : t._e(), e.isVideoWelcomeMessage() ? n("VideoWelcome", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isSuggestsMessage() ? n("Suggests", {
                        key: s,
                        attrs: {message: e},
                        on: {
                            "suggest-click": t.onSuggestClick, update: function () {
                                return e.time = Date.now()
                            }
                        }
                    }) : t._e(), e.isQualityControlMessage() && !e.isExpired() ? n("QualityControl", {
                        key: s,
                        attrs: {message: e}
                    }) : t._e(), e.isVideoRequestMessage() ? n("VideoRequestMessage", {
                        key: s,
                        attrs: {message: e},
                        on: {
                            update: function () {
                                return e.time = Date.now()
                            }
                        }
                    }) : t._e()]
                }))], 2)
            }, r = [], a = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "message -file",
                    class: "-" + t.senderTypeString
                }, [n("div", {
                    staticClass: "content",
                    class: {"accent-color-bg": t.message.isClientSender()}
                }, [n("div", {
                    staticClass: "corner",
                    class: {"accent-color-border": t.message.isClientSender()}
                }), n("div", {staticClass: "data"}, [n("div", {staticClass: "sender"}, [n("div", {staticClass: "name"}, [t._v(" " + t._s(t.senderName) + " ")]), t._v(" Â Â· "), n("div", {staticClass: "time"}, [t._v(" " + t._s(t._f("formatDate")(t.message.time)) + " ")])]), n("div", {staticClass: "text"}, [n("a", {
                    attrs: {
                        href: "javascript:void(null)",
                        rel: "nofollow noopener"
                    }, on: {click: t.onOpenLink}
                }, [t._v(t._s(t.message.name))])])]), n("div", {staticClass: "icon"}, [n("SvgIcon", {attrs: {icon: "file"}})], 1)])])
            }, i = [], o = n("e5a3"), c = n("0032"), l = {
                components: {SvgIcon: c["a"]},
                props: {message: {type: Object, validator: t => o["a"].name === t.constructor.name, required: !0}},
                computed: {
                    senderName() {
                        return this.message.isClientSender() ? this.$t("_.YOU") : this.message.senderName()
                    }, senderTypeString() {
                        return this.message.isClientSender() ? "client" : "operator"
                    }
                },
                methods: {
                    onOpenLink() {
                        window.open(this.message.url, "_blank")
                    }
                }
            }, u = l, d = (n("b173"), n("2877")), h = Object(d["a"])(u, a, i, !1, null, "5f5eede8", null), f = h.exports,
            p = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -form"}, [n("div", {staticClass: "content"}, [t.text ? n("div", {
                    staticClass: "text",
                    domProps: {innerHTML: t._s(t.$options.filters.safehtml(t.text))}
                }) : t._e(), n("form", {
                    staticClass: "form -white",
                    class: {"-sent": t.message.isSent()},
                    on: {
                        submit: function (e) {
                            return e.preventDefault(), t.sendForm.apply(null, arguments)
                        }
                    }
                }, [n("div", {staticClass: "item -fields"}, [t._l(t.activeFields, (function (e) {
                    return [n("div", {
                        key: e.key,
                        staticClass: "field-wrap"
                    }, [t.$v.form[e.key].$error ? n("div", {staticClass: "error-text"}, [t._v(" " + t._s(t.validationError(e.key)) + " ")]) : t._e(), t.isTextInput(e) ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.$v.form[e.key].$model,
                            expression: "$v.form[field.key].$model",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-field -input",
                        class: {error: t.$v.form[e.key].$error},
                        attrs: {
                            type: e.type,
                            name: e.key,
                            maxlength: e.maxlength,
                            required: e.required,
                            placeholder: t.fieldTitle(e)
                        },
                        domProps: {value: t.$v.form[e.key].$model},
                        on: {
                            focus: t.hideHeaderChat, blur: [t.showHeaderChat, function (e) {
                                return t.$forceUpdate()
                            }], input: function (n) {
                                n.target.composing || t.$set(t.$v.form[e.key], "$model", n.target.value.trim())
                            }
                        }
                    }) : t._e(), t.isTextarea(e) ? n("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.$v.form[e.key].$model,
                            expression: "$v.form[field.key].$model",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-field -textarea",
                        class: {error: t.$v.form[e.key].$error},
                        attrs: {
                            type: e.type,
                            name: e.key,
                            maxlength: e.maxlength,
                            required: e.required,
                            placeholder: t.fieldTitle(e)
                        },
                        domProps: {value: t.$v.form[e.key].$model},
                        on: {
                            focus: t.hideHeaderChat, blur: [t.showHeaderChat, function (e) {
                                return t.$forceUpdate()
                            }], input: function (n) {
                                n.target.composing || t.$set(t.$v.form[e.key], "$model", n.target.value.trim())
                            }
                        }
                    }) : t._e()])]
                })), t.shouldAgree && t.message.isNew() ? n("div", {staticClass: "field-wrap -transparent"}, [n("label", {staticClass: "checkbox-wrap"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.agree,
                        expression: "agree"
                    }],
                    attrs: {type: "checkbox", name: "checkbox"},
                    domProps: {checked: Array.isArray(t.agree) ? t._i(t.agree, null) > -1 : t.agree},
                    on: {
                        change: function (e) {
                            var n = t.agree, s = e.target, r = !!s.checked;
                            if (Array.isArray(n)) {
                                var a = null, i = t._i(n, a);
                                s.checked ? i < 0 && (t.agree = n.concat([a])) : i > -1 && (t.agree = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.agree = r
                        }
                    }
                }), n("span", {staticClass: "fake-input"}, [n("SvgIcon", {
                    attrs: {
                        icon: "check",
                        classes: "checkmark"
                    }
                })], 1), t._v(" Â  "), n("span", {
                    staticClass: "privacy",
                    domProps: {innerHTML: t._s(t.privacyText)}
                })])]) : t._e()], 2), n("div", [n("div", {staticClass: "item -button"}, [n("button", {
                    staticClass: "button accent-color-bg submit-form-button",
                    attrs: {disabled: !t.allowSubmit}
                }, [t.message.isSent() ? n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "FORM.SUBMITTED",
                        expression: "'FORM.SUBMITTED'"
                    }], staticClass: "item -title"
                }) : [n("SvgIcon", {
                    attrs: {
                        icon: t.buttonIcon,
                        classes: "item -icon"
                    }
                }), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "FORM.SUBMIT_BTN",
                        expression: "'FORM.SUBMIT_BTN'"
                    }], staticClass: "item -title"
                })]], 2)])])])])])
            }, m = [], g = n("1dce"), v = n("b5ae"), y = n("8295"), b = n("6dc6");
        const _ = Object(b["c"])().android.device, w = y["a"].size().height;
        let C = null, S = null;

        function $() {
            return w < 768 && _
        }

        function k() {
            const t = document.querySelector(".-js-forms-focus");
            t && $() && t.classList.remove("-focus")
        }

        function x() {
            const t = document.querySelector(".-js-forms-focus");
            t && $() && t.classList.add("-focus")
        }

        var T = {
                show() {
                    clearTimeout(S), C = setTimeout(() => {
                        k()
                    }, 300)
                }, hide() {
                    clearTimeout(C), S = setTimeout(() => {
                        x()
                    }, 300)
                }
            }, O = t => {
                const e = Object.keys(t).map(e => t[e]);
                return e.every(t => 0 === t.length)
            }, E = n("4128"), M = {
                components: {SvgIcon: c["a"]},
                mixins: [g["validationMixin"]],
                props: {
                    formModel: {type: Object, required: !0},
                    message: {type: Object, required: !0},
                    text: {type: String, default: null, required: !1},
                    fields: {type: Array, required: !0},
                    values: {
                        type: Object, default: function () {
                            return {}
                        }, required: !1
                    },
                    buttonIcon: {type: String, default: "plane", required: !1},
                    privacy: {type: Object, default: null, required: !1}
                },
                data() {
                    const t = {options: {fields: {}}, agree: !1, form: {}};
                    for (const e of this.fields) e.hide || (t.form[e.key] = this.values[e.key] || "", t.options.fields[e.key] = e);
                    return t
                },
                computed: {
                    activeFields() {
                        return this.fields.filter(t => !t.hide)
                    }, allowSubmit() {
                        return !this.shouldAgree || this.agree
                    }, shouldAgree() {
                        return this.privacy && this.privacy.active && this.privacy.text
                    }, privacyText() {
                        return this.privacy.text
                    }
                },
                watch: {
                    form: {
                        handler() {
                            this.message.isNew() || this.message.setIsNew()
                        }, deep: !0
                    }
                },
                created() {
                    this.formModel.setMessage(this.message)
                },
                validations() {
                    const t = {form: {}};
                    for (const e of this.fields) e.hide || (t.form[e.key] = {
                        required: Object(v["requiredIf"])(() => e.required),
                        maxLength: Object(v["maxLength"])(e.maxlength)
                    }, "email" === e.type && (t.form[e.key] = Object.assign(t.form[e.key], {email: v["email"]})), "tel" === e.type && (t.form[e.key] = Object.assign(t.form[e.key], {phone: E["a"]})));
                    return t
                },
                methods: {
                    hideHeaderChat() {
                        T.hide()
                    }, showHeaderChat() {
                        T.show()
                    }, isTextInput(t) {
                        const e = ["text", "email", "tel"];
                        return e.includes(t.type)
                    }, isTextarea(t) {
                        return "textarea" === t.type
                    }, isCheckbox(t) {
                        return "checkbox" === t.type
                    }, fieldTitle(t) {
                        return t.title.length > 0 ? t.title : this.$t("FORM." + t.titleKey)
                    }, validationError(t) {
                        const e = this.options.fields[t], n = [];
                        switch (e.type) {
                            case"email":
                                n.push(this.$t("FORM.INVALID_EMAIL_ERROR"));
                                break;
                            case"tel":
                                n.push(this.$t("FORM.INVALID_TEL_ERROR"));
                                break
                        }
                        return e.maxLength && n.push(this.$t("FORM.MAX_LENGTH_ERROR", {length: e.maxlength})), e.required && n.push(this.$t("FORM.REQUIRED_ERROR")), n.join(". ")
                    }, sendForm() {
                        this.$v.$invalid || O(this.form) || this.message.isSent() || (this.$emit("submit", {
                            message: this.message,
                            form: Object.assign({}, this.form),
                            component: this
                        }), this.$v.$reset())
                    }
                }
            }, A = M, I = (n("2c97"), n("628f"), Object(d["a"])(A, p, m, !1, null, "29dc75b8", null)), j = I.exports,
            L = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "message -image",
                    class: ["-" + t.senderTypeString, {"-loading": !t.isImageLoaded}]
                }, [n("a", {
                    staticClass: "content",
                    class: {"accent-color-bg": t.message.isClientSender()},
                    attrs: {target: "_blank", href: t.message.url}
                }, [t.isImageLoaded ? t._e() : n("span", {staticClass: "preloader"}, [n("SvgIcon", {attrs: {icon: "preloader"}})], 1), n("span", {staticClass: "sender"}, [n("span", {staticClass: "name"}, [t._v(t._s(t.senderName))]), t._v("Â Â· "), n("span", {staticClass: "time"}, [t._v(t._s(t._f("formatDate")(t.message.time)))])]), n("img", {
                    staticClass: "img",
                    attrs: {src: t.message.url, alt: t.message.name},
                    on: {load: t.onImageLoaded}
                })])])
            }, D = [], N = n("e343"), F = {
                components: {SvgIcon: c["a"]},
                props: {message: {type: Object, validator: t => o["a"].name === t.constructor.name, required: !0}},
                data() {
                    return {imageLoaded: !1}
                },
                computed: {
                    senderName() {
                        return this.message.isClientSender() ? this.$t("_.YOU") : this.message.senderName()
                    }, senderTypeString() {
                        return this.message.isClientSender() ? "client" : "operator"
                    }, isImageLoaded() {
                        return this.imageLoaded
                    }
                },
                methods: {
                    onImageLoaded() {
                        this.imageLoaded = !0, Object(N["a"])(".-js-scrollable-dialog")
                    }
                }
            }, R = F, P = (n("73f8"), Object(d["a"])(R, L, D, !1, null, "29bc6009", null)), B = P.exports, z = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "service-message",
                    class: t.level
                }, [n("div", {staticClass: "text"}, [t._v(" " + t._s(t.message.message) + " ")])])
            }, U = [], q = n("6d45"), H = {
                props: {message: {type: Object, validator: t => q["b"].name === t.constructor.name, required: !0}},
                computed: {
                    level() {
                        switch (this.message.level) {
                            case q["a"]:
                                return "-error";
                            default:
                                return ""
                        }
                    }
                }
            }, V = H, W = (n("7c94"), Object(d["a"])(V, z, U, !1, null, "69b5c787", null)), G = W.exports, K = n("c94a"),
            Q = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "message -image",
                    class: ["-" + t.senderTypeString, {"-loading": !t.isVideoLoaded}],
                    on: {mouseover: t.onMouseOver}
                }, [n("video", {
                    ref: "video",
                    staticClass: "content",
                    attrs: {controls: "", width: "100%"},
                    on: {loadeddata: t.onVideoLoaded}
                }, [n("source", {
                    attrs: {
                        src: t.message.url,
                        type: "video/mp4"
                    }
                }), t.isVideoLoaded ? t._e() : n("span", {staticClass: "preloader"}, [n("SvgIcon", {attrs: {icon: "preloader"}})], 1), n("span", {staticClass: "sender"}, [n("span", {staticClass: "name"}, [t._v(t._s(t.senderName))]), t._v("Â Â· "), n("span", {staticClass: "time"}, [t._v(t._s(t._f("formatDate")(t.message.time)))])])])])
            }, X = [], Y = {
                components: {SvgIcon: c["a"]},
                props: {message: {type: Object, validator: t => o["a"].name === t.constructor.name, required: !0}},
                data() {
                    return {videoLoaded: !1, played: !1}
                },
                computed: {
                    senderName() {
                        return this.message.isClientSender() ? this.$t("_.YOU") : this.message.senderName()
                    }, senderTypeString() {
                        return this.message.isClientSender() ? "client" : "operator"
                    }, isVideoLoaded() {
                        return this.videoLoaded
                    }
                },
                methods: {
                    onVideoLoaded() {
                        this.videoLoaded = !0, Object(N["a"])(".-js-scrollable-dialog")
                    }, onMouseOver() {
                        this.played || (this.played = !0, this.$refs.video.play())
                    }
                }
            }, J = Y, Z = (n("88aa"), Object(d["a"])(J, Q, X, !1, null, "325a45b8", null)), tt = Z.exports, et = n("f121"),
            nt = n("c0cb"), st = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -banner accent-color-border-b"}, [n("a", {
                    staticClass: "content",
                    class: {"cursor-default": !t.shouldLink},
                    attrs: {href: t.message.url},
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.onBannerClick(t.message.name)
                        }
                    }
                }, [n("span", {staticClass: "item -text"}, [t.shouldShowName ? n("span", {staticClass: "name"}, [t._v(t._s(t.message.name))]) : t._e(), t.shouldShowText ? n("span", {staticClass: "text"}, [t._v(t._s(t.message.text))]) : t._e()]), t.shouldShowImg ? n("span", {
                    staticClass: "item -image",
                    style: {"background-image": "url(" + t.message.image + ")"}
                }) : t._e()])])
            }, rt = [], at = n("4a50"), it = {
                props: {message: {type: Object, validator: t => at["a"].name === t.constructor.name, required: !0}},
                computed: {
                    shouldLink() {
                        return this.message.url && this.message.url.length > 0
                    }, shouldShowName() {
                        return this.message.name && this.message.name.length > 0
                    }, shouldShowText() {
                        return this.message.text && this.message.text.length > 0
                    }, shouldShowImg() {
                        return this.message.image && this.message.image.length > 0
                    }
                },
                methods: {
                    onBannerClick(t) {
                        const {url: e} = this.message;
                        return e && e.length > 0 && window.open(e, "_blank"), this.$emit("banner-click", t), !1
                    }
                }
            }, ot = it, ct = (n("1075"), Object(d["a"])(ot, st, rt, !1, null, "12b22747", null)), lt = ct.exports,
            ut = n("649f"), dt = n("46ef"), ht = n("c53a"), ft = n("371c"), pt = n("01f8"), mt = class {
                constructor(t, e, n, s) {
                    ft["a"].info("contact form: initialized", t), this.intl = s, this.store = n.forms, this.chatStore = n.chat, this.settings = t, this.socket = e, this.isShown = !1, this.message = null
                }

                setMessage(t) {
                    this.message = t
                }

                fields() {
                    return this.settings.fields
                }

                text() {
                    return this.settings.welcomeMessage || this.intl.t("FORM.CONTACT_FORM_TEXT")
                }

                values() {
                    return this.chatStore.state.form || {}
                }

                isEnable() {
                    const {welcomeForm: t} = this.settings;
                    return t && this.fields().filter(t => !t.hide).length > 0
                }

                isFilled() {
                    const t = this.chatStore.form(),
                        e = this.fields().every(e => void 0 !== t[e.key] && t[e.key] || !0 === e.hide);
                    return e
                }

                shouldShow() {
                    if (this.isShown || !ht["a"].isOnline(this.chatStore) || !this.isEnable() || this.isFilled()) return !1;
                    const {shownContactForm: t} = this.store.state, {countOwnMessages: e} = this.chatStore.state;
                    return !t && 1 === e
                }

                show(t) {
                    ft["a"].info("contact form: show"), this.isShown = !0, this.message ? this.message.time = Date.now() : this.chatStore.addMessage(new pt["a"]), this.store.setShownContactForm(), t && t()
                }

                submit(t) {
                    ft["a"].info("contact form: submit", t);
                    const e = this.chatStore.form();
                    for (const n in t) e[n] = t[n];
                    this.chatStore.setForm(e), this.socket.send("WELCOME_FORM", {
                        form: e,
                        datetime: (new Date).toLocaleString(),
                        timestamp: Date.now(),
                        timezoneOffset: (new Date).getTimezoneOffset()
                    })
                }
            }, gt = n("2e49");
        const vt = {
            hide: !1,
            key: "message",
            maxlength: 1e3,
            required: !0,
            title: "",
            titleKey: "FORM_MESSAGE",
            type: "textarea"
        };
        var yt = class {
                constructor(t, e, n, s, r) {
                    ft["a"].info("feedback form: initialized", t), this.intl = s, this.chatStore = n.chat, this.settings = t, this.socket = e, this.isEmbedded = r, this.message = null
                }

                setMessage(t) {
                    this.message = t
                }

                fields() {
                    return [...this.settings.fields, vt]
                }

                text() {
                    const {offlineMessage: t} = this.chatStore.state.settings;
                    return t || this.intl.t("FORM.FEEDBACK_FORM_TEXT")
                }

                values() {
                    const t = this.chatStore.state.form || {};
                    return t.message = "", t
                }

                shouldShow() {
                    return !this.isEmbedded && !ht["a"].isOnline(this.chatStore)
                }

                show(t) {
                    ft["a"].info("feedback form: show"), this.chatStore.addMessage(new gt["a"]), t && t()
                }

                submit(t) {
                    ft["a"].info("feedback form: submit", t);
                    const {message: e, ...n} = t, s = this.chatStore.form();
                    for (const a in n) s[a] = n[a];
                    this.chatStore.setForm(s);
                    const r = new nt["a"](e);
                    r.setIsClientSender(), this.chatStore.addMessage(r), this.socket.send("FEEDBACK_FORM", {
                        form: s,
                        message: e,
                        datetime: (new Date).toLocaleString(),
                        timestamp: Date.now(),
                        timezoneOffset: (new Date).getTimezoneOffset()
                    })
                }
            }, bt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -gray -quality-control"}, [n("div", {staticClass: "content"}, [1 === t.message.step ? n("div", {staticClass: "item -score"}, [n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.TITLE",
                        expression: "'QUALITY_CONTROL.TITLE'"
                    }], staticClass: "text -title"
                }), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.TEXT",
                        expression: "'QUALITY_CONTROL.TEXT'"
                    }], staticClass: "text -desc"
                }), n("ul", {staticClass: "score-list"}, [n("li", {staticClass: "item"}, [n("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:void(null);"},
                    on: {
                        click: function () {
                            return t.onScoreClick(1)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        alt: "",
                        src: t.smileUrl("smile-angry-2.png")
                    }
                })])]), n("li", {staticClass: "item"}, [n("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:void(null);"},
                    on: {
                        click: function () {
                            return t.onScoreClick(2)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        alt: "",
                        src: t.smileUrl("smile-angry-1.png")
                    }
                })])]), n("li", {staticClass: "item"}, [n("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:void(null);"},
                    on: {
                        click: function () {
                            return t.onScoreClick(3)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        alt: "",
                        src: t.smileUrl("smile-neutral.png")
                    }
                })])]), n("li", {staticClass: "item"}, [n("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:void(null);"},
                    on: {
                        click: function () {
                            return t.onScoreClick(4)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        alt: "",
                        src: t.smileUrl("smile-happy-1.png")
                    }
                })])]), n("li", {staticClass: "item"}, [n("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:void(null);"},
                    on: {
                        click: function () {
                            return t.onScoreClick(5)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        alt: "",
                        src: t.smileUrl("smile-happy-2.png")
                    }
                })])])])]) : t._e(), 2 === t.message.step ? n("div", {staticClass: "item -score-sent"}, [n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.THANKS",
                        expression: "'QUALITY_CONTROL.THANKS'"
                    }], staticClass: "text -title"
                }), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.REVIEW",
                        expression: "'QUALITY_CONTROL.REVIEW'"
                    }], staticClass: "text -desc"
                }), n("p", {staticClass: "text"}, [n("a", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.LEAVE_REVIEW",
                        expression: "'QUALITY_CONTROL.LEAVE_REVIEW'"
                    }], staticClass: "step-link", attrs: {href: "javascript:void(null);"}, on: {click: t.onLeaveReviewClick}
                })])]) : t._e(), 3 === t.message.step ? n("div", {staticClass: "item -review"}, [n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.WRITE_REVIEW",
                        expression: "'QUALITY_CONTROL.WRITE_REVIEW'"
                    }], staticClass: "text -title"
                }), n("form", {
                    staticClass: "form", on: {
                        submit: function (e) {
                            return e.preventDefault(), t.onReviewSubmit.apply(null, arguments)
                        }
                    }
                }, [n("div", {staticClass: "item -fields"}, [n("div", {staticClass: "field-wrap"}, [t.$v.text.$error ? n("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.INVALID_TEXT",
                        expression: "'QUALITY_CONTROL.INVALID_TEXT'"
                    }], staticClass: "error-text"
                }) : t._e(), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.text.$model,
                        expression: "$v.text.$model",
                        modifiers: {trim: !0}
                    }, {name: "focus", rawName: "v-focus"}],
                    staticClass: "form-field -textarea",
                    class: {error: t.$v.text.$error},
                    attrs: {
                        name: "text",
                        required: "true",
                        maxlength: t.$v.text.$params.maxLength.max,
                        placeholder: t.$t("QUALITY_CONTROL.REVIEW_TEXT")
                    },
                    domProps: {value: t.$v.text.$model},
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.$v.text, "$model", e.target.value.trim())
                        }, blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                })])]), n("div", [n("div", {staticClass: "item -button"}, [n("button", {
                    staticClass: "button accent-color-bg",
                    attrs: {disabled: t.$v.$invalid}
                }, [n("SvgIcon", {attrs: {icon: "plane", classes: "item -icon"}}), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "FORM.SUBMIT_BTN",
                        expression: "'FORM.SUBMIT_BTN'"
                    }], staticClass: "item -title"
                })], 1)])])])]) : t._e(), 4 === t.message.step ? n("div", {staticClass: "item -review-sent"}, [n("p", {staticClass: "text -title -center"}, [n("span", {staticClass: "item -icon"}, [n("SvgIcon", {attrs: {icon: "success"}})], 1), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "QUALITY_CONTROL.REVIEW_SENT",
                        expression: "'QUALITY_CONTROL.REVIEW_SENT'"
                    }], staticClass: "item -text"
                })])]) : t._e()])])
            }, _t = [], wt = n("efa7"), Ct = {
                components: {SvgIcon: c["a"]},
                mixins: [g["validationMixin"]],
                props: {message: {type: Object, validator: t => wt["a"].name === t.constructor.name, required: !0}},
                data() {
                    return {text: ""}
                },
                mounted() {
                    Object(N["a"])(".container.-body")
                },
                validations() {
                    return {
                        text: {
                            required: v["required"],
                            minLength: Object(v["minLength"])(10),
                            maxLength: Object(v["maxLength"])(300)
                        }
                    }
                },
                methods: {
                    smileUrl(t) {
                        return `${this.$baseUrl}/img/modules/quality-control/${t}`
                    }, onScoreClick(t) {
                        this.message.setStep(2), this.$root.$stores.chat.saveMessages(), this.$root.$stores.qualityControl.setShownDate(), this.$root.$socket.send("QUALITY_CONTROL_SCORE", {
                            operator: this.$root.$stores.chat.operator(),
                            score: t
                        })
                    }, onLeaveReviewClick() {
                        this.message.setStep(3)
                    }, onReviewSubmit() {
                        this.message.setStep(4), this.$root.$stores.chat.saveMessages(), this.$root.$stores.qualityControl.setShownDate(), this.$root.$socket.send("QUALITY_CONTROL_REVIEW", {
                            operator: this.$root.$stores.chat.operator(),
                            text: this.text
                        })
                    }, isAllowSubmit() {
                        return "" !== this.text
                    }
                }
            }, St = Ct, $t = (n("bd23"), Object(d["a"])(St, bt, _t, !1, null, "38f016a5", null)), kt = $t.exports,
            xt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -client -suggests"}, [n("ul", {staticClass: "suggests"}, [t._l(t.message.suggests, (function (e) {
                    return [t.isUsed(e.id) ? t._e() : n("li", {
                        key: e.id,
                        staticClass: "item"
                    }, [n("a", {
                        staticClass: "link accent-color-border",
                        attrs: {href: "javascript:void(null);"},
                        on: {
                            click: function (n) {
                                return t.onClick(e.id, e.title)
                            }
                        }
                    }, [t._v(" " + t._s(e.title) + " "), n("span", {staticClass: "suggest-corner accent-color-border"})])])]
                }))], 2)])
            }, Tt = [], Ot = n("acbe"), Et = {
                props: {message: {type: Object, validator: t => Ot["a"].name === t.constructor.name, required: !0}},
                data() {
                    return {
                        used: this.$root.$stores.suggests.state.used || [],
                        sent: !1,
                        chatState: this.$root.$stores.chat.state
                    }
                },
                watch: {
                    "chatState.messages": function () {
                        this.sent && (this.sent = !1, setTimeout(() => {
                            this.$emit("update")
                        }, 1e3))
                    }
                },
                methods: {
                    isUsed(t) {
                        return this.used.includes(t)
                    }, onClick(t, e) {
                        const n = new nt["a"](e);
                        n.setIsClientSender(), this.$root.$stores.chat.addMessage(n), this.used.push(t), this.$root.$stores.suggests.setUsed(this.used), this.$emit("suggest-click", e), setTimeout(() => {
                            this.sent = !0, this.$root.$socket.send("SUGGEST", {suggestId: t})
                        }, 2e3)
                    }
                }
            }, Mt = Et, At = (n("76b4"), Object(d["a"])(Mt, xt, Tt, !1, null, "2d3d11a7", null)), It = At.exports,
            jt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -video-welcome"}, [n("iframe", {
                    attrs: {
                        width: "100%",
                        height: "175px",
                        src: "https://www.youtube.com/embed/" + t.message.youtubeId + "?enablejsapi=1",
                        frameborder: "0",
                        allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: ""
                    }
                })])
            }, Lt = [], Dt = n("c208"), Nt = {
                props: {message: {type: Object, validator: t => Dt["a"].name === t.constructor.name, required: !0}},
                created() {
                    const {videoWelcome: t} = this.$root.$modules;
                    t && t.setMessage(this.message)
                },
                mounted() {
                    Object(N["a"])(".-js-scrollable-dialog")
                }
            }, Ft = Nt, Rt = Object(d["a"])(Ft, jt, Lt, !1, null, null, null), Pt = Rt.exports, Bt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message accent-color-bg"}, [n("div", {staticClass: "content"}, [n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VIDEO.TITLE",
                        expression: "'VIDEO.TITLE'"
                    }], staticClass: "title"
                }), t.message.isInitialState() ? n("div", [n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VIDEO.DESC",
                        expression: "'VIDEO.DESC'"
                    }], staticClass: "description"
                }), n("div", {staticClass: "controls"}, [n("button", {
                    attrs: {type: "button"}, on: {
                        click: function (e) {
                            return t.onAudioCall()
                        }
                    }
                }, [n("AudioButton"), t._v("Â "), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VIDEO.AUDIOCALL_BTN",
                        expression: "'VIDEO.AUDIOCALL_BTN'"
                    }]
                })], 1), n("button", {
                    attrs: {type: "button"}, on: {
                        click: function (e) {
                            return t.onVideoCall()
                        }
                    }
                }, [n("VideoButton"), t._v("Â "), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VIDEO.VIDEOCALL_BTN",
                        expression: "'VIDEO.VIDEOCALL_BTN'"
                    }]
                })], 1)])]) : t._e(), n("p", {staticClass: "description"}, [t.message.isRequested() ? [n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VIDEO.REQUEST_SENT",
                        expression: "'VIDEO.REQUEST_SENT'"
                    }]
                }), n("br")] : t._e(), t.message.isRejected() ? [t._v(" " + t._s(t.$t("VIDEO.REQUEST_REJECTED")) + " ")] : t._e()], 2)])])
            }, zt = [], Ut = n("9f42"), qt = n("c995"), Ht = n("bfb0"), Vt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        width: "18px",
                        height: "18px",
                        viewBox: "0 244.8 595.3 597.1",
                        "enable-background": "new 0 244.8 595.3 597.1",
                        "xml:space": "preserve"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "#ffffff",
                        d: "M470.7,632.3c-20.2-20-45.5-20-65.6,0c-15.3,15.2-30.7,30.4-45.7,45.9c-4.1,4.2-7.6,5.2-12.6,2.3c-9.9-5.4-20.5-9.8-30-15.7 c-44.4-28-81.7-63.9-114.7-104.4c-16.4-20.1-30.9-41.6-41.1-65.8c-2.1-4.9-1.7-8.1,2.3-12.1c15.3-14.8,30.3-30,45.3-45.2 c21-21.1,21-45.9-0.1-67.1c-12-12.1-24-24-35.9-36.1c-12.4-12.4-24.6-24.9-37.1-37.1c-20.2-19.7-45.5-19.7-65.6,0.1 c-15.5,15.2-30.3,30.8-46,45.7C9.3,356.6,2,373.5,0.4,393.2c-2.5,32.1,5.4,62.4,16.5,91.9c22.7,61.1,57.2,115.3,99.1,165 c56.6,67.3,124.1,120.5,203,158.9c35.6,17.3,72.4,30.5,112.5,32.7c27.6,1.5,51.5-5.4,70.7-26.9c13.1-14.7,28-28.1,41.9-42.1 c20.6-20.9,20.7-46.1,0.3-66.7C519.9,681.3,495.3,656.8,470.7,632.3z"
                    }
                }), n("g", [n("path", {
                    attrs: {
                        fill: "#ffffff",
                        d: "M435.9,528.9l45.5-7.4c-7.1-39.8-26.9-75.9-56.8-104.5c-31.7-30.2-71.7-49.2-115.8-55.1l-6.4,43.6 c34.1,4.6,65.2,19.3,89.7,42.6C415.2,470.2,430.4,498.2,435.9,528.9z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#ffffff",
                        d: "M500.9,336.2c-52.5-50-118.9-81.6-192.1-91.4l-6.4,43.6c63.3,8.5,120.7,35.8,166,78.9c43,41,71.2,92.8,81.4,149.7l45.5-7.4 C583.3,443.7,550.7,383.8,500.9,336.2z"
                    }
                })])])
            }, Wt = [], Gt = {}, Kt = Object(d["a"])(Gt, Vt, Wt, !1, null, null, null), Qt = Kt.exports, Xt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        width: "18px",
                        height: "18px",
                        viewBox: "-120 388.89 90.721 67.045",
                        "enable-background": "new -120 388.89 90.721 67.045",
                        "xml:space": "preserve"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "#ffffff",
                        d: "M-31.105,402.54c-1.136-0.682-2.553-0.744-3.748-0.164l-18.101,8.412v24.652l18.101,7.017 c0.544,0.264,1.134,0.396,1.722,0.396c0.704,0,1.406-0.188,2.025-0.559c1.136-0.681,1.827-1.885,1.827-3.182v-33.39 C-29.279,404.425-29.97,403.221-31.105,402.54z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#ffffff",
                        d: "M-58.968,388.89h-55.019c-3.321,0-6.013,2.692-6.013,6.013v55.019c0,3.321,2.692,6.013,6.013,6.013h55.019 c3.321,0,6.013-2.692,6.013-6.013v-55.019C-52.955,391.582-55.647,388.89-58.968,388.89z M-97.75,414.89 c-2.623,0-4.75-2.127-4.75-4.75s2.127-4.75,4.75-4.75s4.75,2.127,4.75,4.75S-95.127,414.89-97.75,414.89z"
                    }
                }), n("circle", {attrs: {fill: "#ffffff", opacity: "0", cx: "-97", cy: "411", r: "8"}})])
            }, Yt = [], Jt = {}, Zt = Object(d["a"])(Jt, Xt, Yt, !1, null, null, null), te = Zt.exports, ee = {
                components: {AudioButton: Qt, VideoButton: te},
                props: {message: {type: Object, validator: t => Ht["a"].name === t.constructor.name, required: !0}},
                methods: {
                    analytics(t, e) {
                        const {analytics: n} = this.$root.$modules;
                        n && n.push(t, e)
                    }, embedVideo(t) {
                        this.message.request(), qt["a"].load({
                            video: t,
                            socket: this.$root.$socket,
                            watcher: this.$root.$globalWatcher,
                            color: this.$root.$stores.chat.settings().color,
                            isColorLight: this.$root.$stores.chat.settings().colorLight,
                            onAccept: ({type: t}) => {
                                this.analytics(et["a"].analytics.events.OPERATOR_ACCEPTED_CALL_REQUEST, t), this.$root.$globalWatcher.trigger(Ut["a"].events.OPERATOR_ACCEPTED_CALL_REQUEST, this.$root.$stores.chat.form(), "video" === t)
                            },
                            onReject: () => {
                                this.message.reject()
                            },
                            onDisconnect: () => {
                                this.message.reset()
                            }
                        })
                    }, onAudioCall() {
                        this.embedVideo(!1), this.analytics(et["a"].analytics.events.CLIENT_SENT_CALL_REQUEST, "audio"), this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_SENT_CALL_REQUEST, this.$root.$stores.chat.form(), !1)
                    }, onVideoCall() {
                        this.embedVideo(!0), this.analytics(et["a"].analytics.events.CLIENT_SENT_CALL_REQUEST, "video"), this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_SENT_CALL_REQUEST, this.$root.$stores.chat.form(), !0)
                    }
                }
            }, ne = ee, se = (n("e03c"), Object(d["a"])(ne, Bt, zt, !1, null, "2fb2ae6c", null)), re = se.exports,
            ae = t => (e, n) => {
                let s = 0;
                return e[t] > n[t] ? s = 1 : e[t] < n[t] && (s = -1), s
            }, ie = n("1a36");
        let oe = 0;
        var ce = {
            components: {
                TextMessage: K["a"],
                ImageMessage: B,
                VideoMessage: tt,
                FileMessage: f,
                FormMessage: j,
                ServiceMessage: G,
                VideoWelcome: Pt,
                Banner: lt,
                AutoFeedback: ut["a"],
                Suggests: It,
                QualityControl: kt,
                VideoRequestMessage: re,
                DepartmentsDialog: ie["a"]
            }, props: {
                initialHistory: {
                    type: Array, required: !1, default: function () {
                        return []
                    }
                }
            }, data() {
                return {history: this.initialHistory, contactForm: null, feedbackForm: null, autoFeedbackForm: null}
            }, computed: {
                messages() {
                    const {chat: t} = this.$root.$stores, e = [...t.state.messages];
                    return e.sort(ae("time"))
                }, startMessage() {
                    const {startMessage: t} = this.$root.$stores.chat.state.settings, e = new nt["a"](t);
                    return e.setIsOperatorSender(), e.setSender({name: this.$root.$stores.chat.state.settings.name}), e
                }, privacy() {
                    return this.$root.$stores.chat.state.settings.privacy
                }, shouldAskDepartment() {
                    if (this.$root.$isEmbedded) return !1;
                    const {departments: t} = this.$root.$modules;
                    return !(!t || !t.shouldAskDepartment())
                }
            }, watch: {
                initialHistory: function (t) {
                    this.history = t, this.renderHistory()
                }
            }, created() {
                oe = this.$root.$stores.chat.state.messages.length;
                const {forms: t} = this.$root.$modules;
                t && (this.contactForm = new mt(t.settings, this.$root.$socket, this.$root.$stores, this.$root.$intl), this.feedbackForm = new yt(t.settings, this.$root.$socket, this.$root.$stores, this.$root.$intl, this.$root.$isEmbedded), t.isEnableAutoFeedback() && (this.autoFeedbackForm = new dt["a"](t.settings, this.$root.$socket, this.$root.$stores)), this.feedbackForm && this.feedbackForm.shouldShow() && this.feedbackForm.show()), Ut["a"].chat.watchCommand("ASSIGN_OPERATOR", this.onAssignOperatorCommand), Ut["a"].chat.watchCommand("TEXT_MESSAGE", this.onTextMessageCommand), Ut["a"].chat.watchCommand("FILE_MESSAGE", this.onFileMessageCommand), Ut["a"].chat.watchCommand("SHOW_WELCOME_FORM", this.onShowContactFormCommand), this.renderHistory()
            }, updated() {
                const {qualityControl: t} = this.$root.$modules;
                this.renderHistory(), this.contactForm && this.contactForm.shouldShow() && this.contactForm.show(() => {
                    this.$nextTick(() => {
                        Object(N["a"])(".-js-scrollable-dialog")
                    })
                }), t && t.shouldShow() && t.show(), oe !== this.messages.length && this.$nextTick(() => {
                    Object(N["a"])(".-js-scrollable-dialog"), oe = this.$root.$stores.chat.state.messages.length
                })
            }, methods: {
                analytics(t, e) {
                    const {analytics: n} = this.$root.$modules;
                    n && n.push(t, e)
                }, renderHistory() {
                    if (0 === this.history.length) return void ft["a"].info("dialog: empty history");
                    ft["a"].info("dialog: render history", this.history);
                    const t = this.history;
                    this.history = [];
                    for (const {command: e, data: n} of t) setTimeout(() => {
                        this.$root.$stores.chat.setCommand(e, n)
                    }, 60)
                }, onAssignOperatorCommand(t) {
                    const {name: e, image: n = null, operatorId: s} = t, {name: r} = this.$root.$stores.chat.state.operator || {};
                    if (this.$root.$stores.chat.isCallbackMode() && this.$root.$stores.chat.setOpenState(), this.$root.$stores.chat.updateLastAssignDate(), ht["a"].isOnline(this.$root.$stores.chat) || (ht["a"].setOnline(this.$root.$stores.chat), this.$nextTick(() => {
                        Object(N["a"])(".-js-scrollable-dialog")
                    })), this.$root.$stores.chat.setOperator({
                        name: e || this.$root.$stores.chat.state.settings.name,
                        image: n,
                        operatorId: s
                    }), e !== r && (Ut["a"].trigger(Ut["a"].events.OPERATOR_CHOSE_CLIENT, this.$root.$stores.chat.form(), this.$root.$stores.chat.operator().name), this.analytics(et["a"].analytics.events.OPERATOR_ASSIGNED), e)) {
                        const t = new q["b"](this.$t("DIALOG.OPERATOR_ASSIGN", {name: e}));
                        this.$root.$stores.chat.addMessage(t), this.$root.$crosstab.emit("ADD_MESSAGE", t)
                    }
                }, onTextMessageCommand(t) {
                    const e = new nt["a"](t.message);
                    e.setIsOperatorSender(), e.setSender(this.$root.$stores.chat.operator()), this.$root.$stores.chat.addMessage(e), this.$root.$crosstab.emit("ADD_MESSAGE", e), Ut["a"].trigger(Ut["a"].events.OPERATOR_SENT_MESSAGE, this.$root.$stores.chat.form(), this.$root.$stores.chat.operator().name, e.message), this.analytics(et["a"].analytics.events.OPERATOR_SENT_MESSAGE)
                }, onFileMessageCommand(t) {
                    const e = new o["a"](t.name, t.url);
                    e.setIsOperatorSender(), e.setSender(this.$root.$stores.chat.operator()), this.$root.$stores.chat.addMessage(e), this.$root.$crosstab.emit("ADD_MESSAGE", e), Ut["a"].trigger(Ut["a"].events.OPERATOR_SENT_MESSAGE, this.$root.$stores.chat.form(), this.$root.$stores.chat.operator().name, e.url), this.analytics(et["a"].analytics.events.OPERATOR_SENT_MESSAGE)
                }, onShowContactFormCommand() {
                    this.contactForm.show(() => {
                        this.$nextTick(() => {
                            Object(N["a"])(".-js-scrollable-dialog")
                        })
                    })
                }, contactFormSubmit(t) {
                    const {message: e, form: n} = t;
                    this.contactForm.submit(n), e.setIsSent(), this.$root.$stores.chat.saveMessages(), this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_SENT_CONTACT_FROM, this.$root.$stores.chat.form()), this.analytics(et["a"].analytics.events.CLIENT_SENT_CONTACT_FORM)
                }, feedbackFormSubmit(t) {
                    const {component: e, form: n} = t;
                    this.feedbackForm.submit(n), this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_SENT_OFFLINE_FORM, this.$root.$stores.chat.form(), n.message), e.form.message = "", this.analytics(et["a"].analytics.events.CLIENT_SENT_OFFLINE_MESSAGE)
                }, autoFeedbackSubmit(t) {
                    const {message: e, form: n} = t;
                    this.autoFeedbackForm.submit(n), e.setIsSent(), this.$root.$stores.chat.saveMessages(), this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_SENT_AUTO_CONTACT_FORM, this.$root.$stores.chat.form()), this.analytics(et["a"].analytics.events.CLIENT_SENT_OFFLINE_MESSAGE)
                }, onSuggestClick(t) {
                    this.$root.$globalWatcher.trigger(Ut["a"].events.CLIENT_CLICKED_QUESTION, this.$root.$stores.chat.form(), t), this.analytics(et["a"].analytics.events.CLIENT_CLICKED_QUESTION, t)
                }, onBannerClick(t) {
                    this.analytics(et["a"].analytics.events.CLIENT_CLICKED_BANNER, t)
                }
            }
        }, le = ce, ue = Object(d["a"])(le, s, r, !1, null, null, null);
        e["a"] = ue.exports
    }, "2b0e": function (t, e, n) {
        "use strict";
        n.r(e), function (t) {
            /*!
         * Vue.js v2.6.14
         * (c) 2014-2021 Evan You
         * Released under the MIT License.
         */
            var n = Object.freeze({});

            function s(t) {
                return void 0 === t || null === t
            }

            function r(t) {
                return void 0 !== t && null !== t
            }

            function a(t) {
                return !0 === t
            }

            function i(t) {
                return !1 === t
            }

            function o(t) {
                return "string" === typeof t || "number" === typeof t || "symbol" === typeof t || "boolean" === typeof t
            }

            function c(t) {
                return null !== t && "object" === typeof t
            }

            var l = Object.prototype.toString;

            function u(t) {
                return "[object Object]" === l.call(t)
            }

            function d(t) {
                return "[object RegExp]" === l.call(t)
            }

            function h(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }

            function f(t) {
                return r(t) && "function" === typeof t.then && "function" === typeof t.catch
            }

            function p(t) {
                return null == t ? "" : Array.isArray(t) || u(t) && t.toString === l ? JSON.stringify(t, null, 2) : String(t)
            }

            function m(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function g(t, e) {
                for (var n = Object.create(null), s = t.split(","), r = 0; r < s.length; r++) n[s[r]] = !0;
                return e ? function (t) {
                    return n[t.toLowerCase()]
                } : function (t) {
                    return n[t]
                }
            }

            g("slot,component", !0);
            var v = g("key,ref,slot,slot-scope,is");

            function y(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1)
                }
            }

            var b = Object.prototype.hasOwnProperty;

            function _(t, e) {
                return b.call(t, e)
            }

            function w(t) {
                var e = Object.create(null);
                return function (n) {
                    var s = e[n];
                    return s || (e[n] = t(n))
                }
            }

            var C = /-(\w)/g, S = w((function (t) {
                return t.replace(C, (function (t, e) {
                    return e ? e.toUpperCase() : ""
                }))
            })), $ = w((function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            })), k = /\B([A-Z])/g, x = w((function (t) {
                return t.replace(k, "-$1").toLowerCase()
            }));

            function T(t, e) {
                function n(n) {
                    var s = arguments.length;
                    return s ? s > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }

                return n._length = t.length, n
            }

            function O(t, e) {
                return t.bind(e)
            }

            var E = Function.prototype.bind ? O : T;

            function M(t, e) {
                e = e || 0;
                var n = t.length - e, s = new Array(n);
                while (n--) s[n] = t[n + e];
                return s
            }

            function A(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function I(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && A(e, t[n]);
                return e
            }

            function j(t, e, n) {
            }

            var L = function (t, e, n) {
                return !1
            }, D = function (t) {
                return t
            };

            function N(t, e) {
                if (t === e) return !0;
                var n = c(t), s = c(e);
                if (!n || !s) return !n && !s && String(t) === String(e);
                try {
                    var r = Array.isArray(t), a = Array.isArray(e);
                    if (r && a) return t.length === e.length && t.every((function (t, n) {
                        return N(t, e[n])
                    }));
                    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                    if (r || a) return !1;
                    var i = Object.keys(t), o = Object.keys(e);
                    return i.length === o.length && i.every((function (n) {
                        return N(t[n], e[n])
                    }))
                } catch (l) {
                    return !1
                }
            }

            function F(t, e) {
                for (var n = 0; n < t.length; n++) if (N(t[n], e)) return n;
                return -1
            }

            function R(t) {
                var e = !1;
                return function () {
                    e || (e = !0, t.apply(this, arguments))
                }
            }

            var P = "data-server-rendered", B = ["component", "directive", "filter"],
                z = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                U = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: L,
                    isReservedAttr: L,
                    isUnknownElement: L,
                    getTagNamespace: j,
                    parsePlatformTagName: D,
                    mustUseProp: L,
                    async: !0,
                    _lifecycleHooks: z
                },
                q = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function H(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }

            function V(t, e, n, s) {
                Object.defineProperty(t, e, {value: n, enumerable: !!s, writable: !0, configurable: !0})
            }

            var W = new RegExp("[^" + q.source + ".$_\\d]");

            function G(t) {
                if (!W.test(t)) {
                    var e = t.split(".");
                    return function (t) {
                        for (var n = 0; n < e.length; n++) {
                            if (!t) return;
                            t = t[e[n]]
                        }
                        return t
                    }
                }
            }

            var K, Q = "__proto__" in {}, X = "undefined" !== typeof window,
                Y = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
                J = Y && WXEnvironment.platform.toLowerCase(), Z = X && window.navigator.userAgent.toLowerCase(),
                tt = Z && /msie|trident/.test(Z), et = Z && Z.indexOf("msie 9.0") > 0, nt = Z && Z.indexOf("edge/") > 0,
                st = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === J),
                rt = (Z && /chrome\/\d+/.test(Z), Z && /phantomjs/.test(Z), Z && Z.match(/firefox\/(\d+)/)),
                at = {}.watch, it = !1;
            if (X) try {
                var ot = {};
                Object.defineProperty(ot, "passive", {
                    get: function () {
                        it = !0
                    }
                }), window.addEventListener("test-passive", null, ot)
            } catch (Si) {
            }
            var ct = function () {
                return void 0 === K && (K = !X && !Y && "undefined" !== typeof t && (t["process"] && "server" === t["process"].env.VUE_ENV)), K
            }, lt = X && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function ut(t) {
                return "function" === typeof t && /native code/.test(t.toString())
            }

            var dt,
                ht = "undefined" !== typeof Symbol && ut(Symbol) && "undefined" !== typeof Reflect && ut(Reflect.ownKeys);
            dt = "undefined" !== typeof Set && ut(Set) ? Set : function () {
                function t() {
                    this.set = Object.create(null)
                }

                return t.prototype.has = function (t) {
                    return !0 === this.set[t]
                }, t.prototype.add = function (t) {
                    this.set[t] = !0
                }, t.prototype.clear = function () {
                    this.set = Object.create(null)
                }, t
            }();
            var ft = j, pt = 0, mt = function () {
                this.id = pt++, this.subs = []
            };
            mt.prototype.addSub = function (t) {
                this.subs.push(t)
            }, mt.prototype.removeSub = function (t) {
                y(this.subs, t)
            }, mt.prototype.depend = function () {
                mt.target && mt.target.addDep(this)
            }, mt.prototype.notify = function () {
                var t = this.subs.slice();
                for (var e = 0, n = t.length; e < n; e++) t[e].update()
            }, mt.target = null;
            var gt = [];

            function vt(t) {
                gt.push(t), mt.target = t
            }

            function yt() {
                gt.pop(), mt.target = gt[gt.length - 1]
            }

            var bt = function (t, e, n, s, r, a, i, o) {
                this.tag = t, this.data = e, this.children = n, this.text = s, this.elm = r, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            }, _t = {child: {configurable: !0}};
            _t.child.get = function () {
                return this.componentInstance
            }, Object.defineProperties(bt.prototype, _t);
            var wt = function (t) {
                void 0 === t && (t = "");
                var e = new bt;
                return e.text = t, e.isComment = !0, e
            };

            function Ct(t) {
                return new bt(void 0, void 0, void 0, String(t))
            }

            function St(t) {
                var e = new bt(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
            }

            var $t = Array.prototype, kt = Object.create($t),
                xt = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
            xt.forEach((function (t) {
                var e = $t[t];
                V(kt, t, (function () {
                    var n = [], s = arguments.length;
                    while (s--) n[s] = arguments[s];
                    var r, a = e.apply(this, n), i = this.__ob__;
                    switch (t) {
                        case"push":
                        case"unshift":
                            r = n;
                            break;
                        case"splice":
                            r = n.slice(2);
                            break
                    }
                    return r && i.observeArray(r), i.dep.notify(), a
                }))
            }));
            var Tt = Object.getOwnPropertyNames(kt), Ot = !0;

            function Et(t) {
                Ot = t
            }

            var Mt = function (t) {
                this.value = t, this.dep = new mt, this.vmCount = 0, V(t, "__ob__", this), Array.isArray(t) ? (Q ? At(t, kt) : It(t, kt, Tt), this.observeArray(t)) : this.walk(t)
            };

            function At(t, e) {
                t.__proto__ = e
            }

            function It(t, e, n) {
                for (var s = 0, r = n.length; s < r; s++) {
                    var a = n[s];
                    V(t, a, e[a])
                }
            }

            function jt(t, e) {
                var n;
                if (c(t) && !(t instanceof bt)) return _(t, "__ob__") && t.__ob__ instanceof Mt ? n = t.__ob__ : Ot && !ct() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new Mt(t)), e && n && n.vmCount++, n
            }

            function Lt(t, e, n, s, r) {
                var a = new mt, i = Object.getOwnPropertyDescriptor(t, e);
                if (!i || !1 !== i.configurable) {
                    var o = i && i.get, c = i && i.set;
                    o && !c || 2 !== arguments.length || (n = t[e]);
                    var l = !r && jt(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0, configurable: !0, get: function () {
                            var e = o ? o.call(t) : n;
                            return mt.target && (a.depend(), l && (l.dep.depend(), Array.isArray(e) && Ft(e))), e
                        }, set: function (e) {
                            var s = o ? o.call(t) : n;
                            e === s || e !== e && s !== s || o && !c || (c ? c.call(t, e) : n = e, l = !r && jt(e), a.notify())
                        }
                    })
                }
            }

            function Dt(t, e, n) {
                if (Array.isArray(t) && h(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var s = t.__ob__;
                return t._isVue || s && s.vmCount ? n : s ? (Lt(s.value, e, n), s.dep.notify(), n) : (t[e] = n, n)
            }

            function Nt(t, e) {
                if (Array.isArray(t) && h(e)) t.splice(e, 1); else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || _(t, e) && (delete t[e], n && n.dep.notify())
                }
            }

            function Ft(t) {
                for (var e = void 0, n = 0, s = t.length; n < s; n++) e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && Ft(e)
            }

            Mt.prototype.walk = function (t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) Lt(t, e[n])
            }, Mt.prototype.observeArray = function (t) {
                for (var e = 0, n = t.length; e < n; e++) jt(t[e])
            };
            var Rt = U.optionMergeStrategies;

            function Pt(t, e) {
                if (!e) return t;
                for (var n, s, r, a = ht ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < a.length; i++) n = a[i], "__ob__" !== n && (s = t[n], r = e[n], _(t, n) ? s !== r && u(s) && u(r) && Pt(s, r) : Dt(t, n, r));
                return t
            }

            function Bt(t, e, n) {
                return n ? function () {
                    var s = "function" === typeof e ? e.call(n, n) : e, r = "function" === typeof t ? t.call(n, n) : t;
                    return s ? Pt(s, r) : r
                } : e ? t ? function () {
                    return Pt("function" === typeof e ? e.call(this, this) : e, "function" === typeof t ? t.call(this, this) : t)
                } : e : t
            }

            function zt(t, e) {
                var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
                return n ? Ut(n) : n
            }

            function Ut(t) {
                for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                return e
            }

            function qt(t, e, n, s) {
                var r = Object.create(t || null);
                return e ? A(r, e) : r
            }

            Rt.data = function (t, e, n) {
                return n ? Bt(t, e, n) : e && "function" !== typeof e ? t : Bt(t, e)
            }, z.forEach((function (t) {
                Rt[t] = zt
            })), B.forEach((function (t) {
                Rt[t + "s"] = qt
            })), Rt.watch = function (t, e, n, s) {
                if (t === at && (t = void 0), e === at && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var r = {};
                for (var a in A(r, t), e) {
                    var i = r[a], o = e[a];
                    i && !Array.isArray(i) && (i = [i]), r[a] = i ? i.concat(o) : Array.isArray(o) ? o : [o]
                }
                return r
            }, Rt.props = Rt.methods = Rt.inject = Rt.computed = function (t, e, n, s) {
                if (!t) return e;
                var r = Object.create(null);
                return A(r, t), e && A(r, e), r
            }, Rt.provide = Bt;
            var Ht = function (t, e) {
                return void 0 === e ? t : e
            };

            function Vt(t, e) {
                var n = t.props;
                if (n) {
                    var s, r, a, i = {};
                    if (Array.isArray(n)) {
                        s = n.length;
                        while (s--) r = n[s], "string" === typeof r && (a = S(r), i[a] = {type: null})
                    } else if (u(n)) for (var o in n) r = n[o], a = S(o), i[a] = u(r) ? r : {type: r}; else 0;
                    t.props = i
                }
            }

            function Wt(t, e) {
                var n = t.inject;
                if (n) {
                    var s = t.inject = {};
                    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) s[n[r]] = {from: n[r]}; else if (u(n)) for (var a in n) {
                        var i = n[a];
                        s[a] = u(i) ? A({from: a}, i) : {from: i}
                    } else 0
                }
            }

            function Gt(t) {
                var e = t.directives;
                if (e) for (var n in e) {
                    var s = e[n];
                    "function" === typeof s && (e[n] = {bind: s, update: s})
                }
            }

            function Kt(t, e, n) {
                if ("function" === typeof e && (e = e.options), Vt(e, n), Wt(e, n), Gt(e), !e._base && (e.extends && (t = Kt(t, e.extends, n)), e.mixins)) for (var s = 0, r = e.mixins.length; s < r; s++) t = Kt(t, e.mixins[s], n);
                var a, i = {};
                for (a in t) o(a);
                for (a in e) _(t, a) || o(a);

                function o(s) {
                    var r = Rt[s] || Ht;
                    i[s] = r(t[s], e[s], n, s)
                }

                return i
            }

            function Qt(t, e, n, s) {
                if ("string" === typeof n) {
                    var r = t[e];
                    if (_(r, n)) return r[n];
                    var a = S(n);
                    if (_(r, a)) return r[a];
                    var i = $(a);
                    if (_(r, i)) return r[i];
                    var o = r[n] || r[a] || r[i];
                    return o
                }
            }

            function Xt(t, e, n, s) {
                var r = e[t], a = !_(n, t), i = n[t], o = ee(Boolean, r.type);
                if (o > -1) if (a && !_(r, "default")) i = !1; else if ("" === i || i === x(t)) {
                    var c = ee(String, r.type);
                    (c < 0 || o < c) && (i = !0)
                }
                if (void 0 === i) {
                    i = Yt(s, r, t);
                    var l = Ot;
                    Et(!0), jt(i), Et(l)
                }
                return i
            }

            function Yt(t, e, n) {
                if (_(e, "default")) {
                    var s = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" === typeof s && "Function" !== Zt(e.type) ? s.call(t) : s
                }
            }

            var Jt = /^\s*function (\w+)/;

            function Zt(t) {
                var e = t && t.toString().match(Jt);
                return e ? e[1] : ""
            }

            function te(t, e) {
                return Zt(t) === Zt(e)
            }

            function ee(t, e) {
                if (!Array.isArray(e)) return te(e, t) ? 0 : -1;
                for (var n = 0, s = e.length; n < s; n++) if (te(e[n], t)) return n;
                return -1
            }

            function ne(t, e, n) {
                vt();
                try {
                    if (e) {
                        var s = e;
                        while (s = s.$parent) {
                            var r = s.$options.errorCaptured;
                            if (r) for (var a = 0; a < r.length; a++) try {
                                var i = !1 === r[a].call(s, t, e, n);
                                if (i) return
                            } catch (Si) {
                                re(Si, s, "errorCaptured hook")
                            }
                        }
                    }
                    re(t, e, n)
                } finally {
                    yt()
                }
            }

            function se(t, e, n, s, r) {
                var a;
                try {
                    a = n ? t.apply(e, n) : t.call(e), a && !a._isVue && f(a) && !a._handled && (a.catch((function (t) {
                        return ne(t, s, r + " (Promise/async)")
                    })), a._handled = !0)
                } catch (Si) {
                    ne(Si, s, r)
                }
                return a
            }

            function re(t, e, n) {
                if (U.errorHandler) try {
                    return U.errorHandler.call(null, t, e, n)
                } catch (Si) {
                    Si !== t && ae(Si, null, "config.errorHandler")
                }
                ae(t, e, n)
            }

            function ae(t, e, n) {
                if (!X && !Y || "undefined" === typeof console) throw t;
                console.error(t)
            }

            var ie, oe = !1, ce = [], le = !1;

            function ue() {
                le = !1;
                var t = ce.slice(0);
                ce.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }

            if ("undefined" !== typeof Promise && ut(Promise)) {
                var de = Promise.resolve();
                ie = function () {
                    de.then(ue), st && setTimeout(j)
                }, oe = !0
            } else if (tt || "undefined" === typeof MutationObserver || !ut(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ie = "undefined" !== typeof setImmediate && ut(setImmediate) ? function () {
                setImmediate(ue)
            } : function () {
                setTimeout(ue, 0)
            }; else {
                var he = 1, fe = new MutationObserver(ue), pe = document.createTextNode(String(he));
                fe.observe(pe, {characterData: !0}), ie = function () {
                    he = (he + 1) % 2, pe.data = String(he)
                }, oe = !0
            }

            function me(t, e) {
                var n;
                if (ce.push((function () {
                    if (t) try {
                        t.call(e)
                    } catch (Si) {
                        ne(Si, e, "nextTick")
                    } else n && n(e)
                })), le || (le = !0, ie()), !t && "undefined" !== typeof Promise) return new Promise((function (t) {
                    n = t
                }))
            }

            var ge = new dt;

            function ve(t) {
                ye(t, ge), ge.clear()
            }

            function ye(t, e) {
                var n, s, r = Array.isArray(t);
                if (!(!r && !c(t) || Object.isFrozen(t) || t instanceof bt)) {
                    if (t.__ob__) {
                        var a = t.__ob__.dep.id;
                        if (e.has(a)) return;
                        e.add(a)
                    }
                    if (r) {
                        n = t.length;
                        while (n--) ye(t[n], e)
                    } else {
                        s = Object.keys(t), n = s.length;
                        while (n--) ye(t[s[n]], e)
                    }
                }
            }

            var be = w((function (t) {
                var e = "&" === t.charAt(0);
                t = e ? t.slice(1) : t;
                var n = "~" === t.charAt(0);
                t = n ? t.slice(1) : t;
                var s = "!" === t.charAt(0);
                return t = s ? t.slice(1) : t, {name: t, once: n, capture: s, passive: e}
            }));

            function _e(t, e) {
                function n() {
                    var t = arguments, s = n.fns;
                    if (!Array.isArray(s)) return se(s, null, arguments, e, "v-on handler");
                    for (var r = s.slice(), a = 0; a < r.length; a++) se(r[a], null, t, e, "v-on handler")
                }

                return n.fns = t, n
            }

            function we(t, e, n, r, i, o) {
                var c, l, u, d;
                for (c in t) l = t[c], u = e[c], d = be(c), s(l) || (s(u) ? (s(l.fns) && (l = t[c] = _e(l, o)), a(d.once) && (l = t[c] = i(d.name, l, d.capture)), n(d.name, l, d.capture, d.passive, d.params)) : l !== u && (u.fns = l, t[c] = u));
                for (c in e) s(t[c]) && (d = be(c), r(d.name, e[c], d.capture))
            }

            function Ce(t, e, n) {
                var i;
                t instanceof bt && (t = t.data.hook || (t.data.hook = {}));
                var o = t[e];

                function c() {
                    n.apply(this, arguments), y(i.fns, c)
                }

                s(o) ? i = _e([c]) : r(o.fns) && a(o.merged) ? (i = o, i.fns.push(c)) : i = _e([o, c]), i.merged = !0, t[e] = i
            }

            function Se(t, e, n) {
                var a = e.options.props;
                if (!s(a)) {
                    var i = {}, o = t.attrs, c = t.props;
                    if (r(o) || r(c)) for (var l in a) {
                        var u = x(l);
                        $e(i, c, l, u, !0) || $e(i, o, l, u, !1)
                    }
                    return i
                }
            }

            function $e(t, e, n, s, a) {
                if (r(e)) {
                    if (_(e, n)) return t[n] = e[n], a || delete e[n], !0;
                    if (_(e, s)) return t[n] = e[s], a || delete e[s], !0
                }
                return !1
            }

            function ke(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t
            }

            function xe(t) {
                return o(t) ? [Ct(t)] : Array.isArray(t) ? Oe(t) : void 0
            }

            function Te(t) {
                return r(t) && r(t.text) && i(t.isComment)
            }

            function Oe(t, e) {
                var n, i, c, l, u = [];
                for (n = 0; n < t.length; n++) i = t[n], s(i) || "boolean" === typeof i || (c = u.length - 1, l = u[c], Array.isArray(i) ? i.length > 0 && (i = Oe(i, (e || "") + "_" + n), Te(i[0]) && Te(l) && (u[c] = Ct(l.text + i[0].text), i.shift()), u.push.apply(u, i)) : o(i) ? Te(l) ? u[c] = Ct(l.text + i) : "" !== i && u.push(Ct(i)) : Te(i) && Te(l) ? u[c] = Ct(l.text + i.text) : (a(t._isVList) && r(i.tag) && s(i.key) && r(e) && (i.key = "__vlist" + e + "_" + n + "__"), u.push(i)));
                return u
            }

            function Ee(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" === typeof e ? e.call(t) : e)
            }

            function Me(t) {
                var e = Ae(t.$options.inject, t);
                e && (Et(!1), Object.keys(e).forEach((function (n) {
                    Lt(t, n, e[n])
                })), Et(!0))
            }

            function Ae(t, e) {
                if (t) {
                    for (var n = Object.create(null), s = ht ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < s.length; r++) {
                        var a = s[r];
                        if ("__ob__" !== a) {
                            var i = t[a].from, o = e;
                            while (o) {
                                if (o._provided && _(o._provided, i)) {
                                    n[a] = o._provided[i];
                                    break
                                }
                                o = o.$parent
                            }
                            if (!o) if ("default" in t[a]) {
                                var c = t[a].default;
                                n[a] = "function" === typeof c ? c.call(e) : c
                            } else 0
                        }
                    }
                    return n
                }
            }

            function Ie(t, e) {
                if (!t || !t.length) return {};
                for (var n = {}, s = 0, r = t.length; s < r; s++) {
                    var a = t[s], i = a.data;
                    if (i && i.attrs && i.attrs.slot && delete i.attrs.slot, a.context !== e && a.fnContext !== e || !i || null == i.slot) (n.default || (n.default = [])).push(a); else {
                        var o = i.slot, c = n[o] || (n[o] = []);
                        "template" === a.tag ? c.push.apply(c, a.children || []) : c.push(a)
                    }
                }
                for (var l in n) n[l].every(je) && delete n[l];
                return n
            }

            function je(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }

            function Le(t) {
                return t.isComment && t.asyncFactory
            }

            function De(t, e, s) {
                var r, a = Object.keys(e).length > 0, i = t ? !!t.$stable : !a, o = t && t.$key;
                if (t) {
                    if (t._normalized) return t._normalized;
                    if (i && s && s !== n && o === s.$key && !a && !s.$hasNormal) return s;
                    for (var c in r = {}, t) t[c] && "$" !== c[0] && (r[c] = Ne(e, c, t[c]))
                } else r = {};
                for (var l in e) l in r || (r[l] = Fe(e, l));
                return t && Object.isExtensible(t) && (t._normalized = r), V(r, "$stable", i), V(r, "$key", o), V(r, "$hasNormal", a), r
            }

            function Ne(t, e, n) {
                var s = function () {
                    var t = arguments.length ? n.apply(null, arguments) : n({});
                    t = t && "object" === typeof t && !Array.isArray(t) ? [t] : xe(t);
                    var e = t && t[0];
                    return t && (!e || 1 === t.length && e.isComment && !Le(e)) ? void 0 : t
                };
                return n.proxy && Object.defineProperty(t, e, {get: s, enumerable: !0, configurable: !0}), s
            }

            function Fe(t, e) {
                return function () {
                    return t[e]
                }
            }

            function Re(t, e) {
                var n, s, a, i, o;
                if (Array.isArray(t) || "string" === typeof t) for (n = new Array(t.length), s = 0, a = t.length; s < a; s++) n[s] = e(t[s], s); else if ("number" === typeof t) for (n = new Array(t), s = 0; s < t; s++) n[s] = e(s + 1, s); else if (c(t)) if (ht && t[Symbol.iterator]) {
                    n = [];
                    var l = t[Symbol.iterator](), u = l.next();
                    while (!u.done) n.push(e(u.value, n.length)), u = l.next()
                } else for (i = Object.keys(t), n = new Array(i.length), s = 0, a = i.length; s < a; s++) o = i[s], n[s] = e(t[o], o, s);
                return r(n) || (n = []), n._isVList = !0, n
            }

            function Pe(t, e, n, s) {
                var r, a = this.$scopedSlots[t];
                a ? (n = n || {}, s && (n = A(A({}, s), n)), r = a(n) || ("function" === typeof e ? e() : e)) : r = this.$slots[t] || ("function" === typeof e ? e() : e);
                var i = n && n.slot;
                return i ? this.$createElement("template", {slot: i}, r) : r
            }

            function Be(t) {
                return Qt(this.$options, "filters", t, !0) || D
            }

            function ze(t, e) {
                return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
            }

            function Ue(t, e, n, s, r) {
                var a = U.keyCodes[e] || n;
                return r && s && !U.keyCodes[e] ? ze(r, s) : a ? ze(a, t) : s ? x(s) !== e : void 0 === t
            }

            function qe(t, e, n, s, r) {
                if (n) if (c(n)) {
                    var a;
                    Array.isArray(n) && (n = I(n));
                    var i = function (i) {
                        if ("class" === i || "style" === i || v(i)) a = t; else {
                            var o = t.attrs && t.attrs.type;
                            a = s || U.mustUseProp(e, o, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                        }
                        var c = S(i), l = x(i);
                        if (!(c in a) && !(l in a) && (a[i] = n[i], r)) {
                            var u = t.on || (t.on = {});
                            u["update:" + i] = function (t) {
                                n[i] = t
                            }
                        }
                    };
                    for (var o in n) i(o)
                } else ;
                return t
            }

            function He(t, e) {
                var n = this._staticTrees || (this._staticTrees = []), s = n[t];
                return s && !e || (s = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), We(s, "__static__" + t, !1)), s
            }

            function Ve(t, e, n) {
                return We(t, "__once__" + e + (n ? "_" + n : ""), !0), t
            }

            function We(t, e, n) {
                if (Array.isArray(t)) for (var s = 0; s < t.length; s++) t[s] && "string" !== typeof t[s] && Ge(t[s], e + "_" + s, n); else Ge(t, e, n)
            }

            function Ge(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n
            }

            function Ke(t, e) {
                if (e) if (u(e)) {
                    var n = t.on = t.on ? A({}, t.on) : {};
                    for (var s in e) {
                        var r = n[s], a = e[s];
                        n[s] = r ? [].concat(r, a) : a
                    }
                } else ;
                return t
            }

            function Qe(t, e, n, s) {
                e = e || {$stable: !n};
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    Array.isArray(a) ? Qe(a, e, n) : a && (a.proxy && (a.fn.proxy = !0), e[a.key] = a.fn)
                }
                return s && (e.$key = s), e
            }

            function Xe(t, e) {
                for (var n = 0; n < e.length; n += 2) {
                    var s = e[n];
                    "string" === typeof s && s && (t[e[n]] = e[n + 1])
                }
                return t
            }

            function Ye(t, e) {
                return "string" === typeof t ? e + t : t
            }

            function Je(t) {
                t._o = Ve, t._n = m, t._s = p, t._l = Re, t._t = Pe, t._q = N, t._i = F, t._m = He, t._f = Be, t._k = Ue, t._b = qe, t._v = Ct, t._e = wt, t._u = Qe, t._g = Ke, t._d = Xe, t._p = Ye
            }

            function Ze(t, e, s, r, i) {
                var o, c = this, l = i.options;
                _(r, "_uid") ? (o = Object.create(r), o._original = r) : (o = r, r = r._original);
                var u = a(l._compiled), d = !u;
                this.data = t, this.props = e, this.children = s, this.parent = r, this.listeners = t.on || n, this.injections = Ae(l.inject, r), this.slots = function () {
                    return c.$slots || De(t.scopedSlots, c.$slots = Ie(s, r)), c.$slots
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0, get: function () {
                        return De(t.scopedSlots, this.slots())
                    }
                }), u && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = De(t.scopedSlots, this.$slots)), l._scopeId ? this._c = function (t, e, n, s) {
                    var a = fn(o, t, e, n, s, d);
                    return a && !Array.isArray(a) && (a.fnScopeId = l._scopeId, a.fnContext = r), a
                } : this._c = function (t, e, n, s) {
                    return fn(o, t, e, n, s, d)
                }
            }

            function tn(t, e, s, a, i) {
                var o = t.options, c = {}, l = o.props;
                if (r(l)) for (var u in l) c[u] = Xt(u, l, e || n); else r(s.attrs) && nn(c, s.attrs), r(s.props) && nn(c, s.props);
                var d = new Ze(s, c, i, a, t), h = o.render.call(null, d._c, d);
                if (h instanceof bt) return en(h, s, d.parent, o, d);
                if (Array.isArray(h)) {
                    for (var f = xe(h) || [], p = new Array(f.length), m = 0; m < f.length; m++) p[m] = en(f[m], s, d.parent, o, d);
                    return p
                }
            }

            function en(t, e, n, s, r) {
                var a = St(t);
                return a.fnContext = n, a.fnOptions = s, e.slot && ((a.data || (a.data = {})).slot = e.slot), a
            }

            function nn(t, e) {
                for (var n in e) t[S(n)] = e[n]
            }

            Je(Ze.prototype);
            var sn = {
                init: function (t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        sn.prepatch(n, n)
                    } else {
                        var s = t.componentInstance = on(t, An);
                        s.$mount(e ? t.elm : void 0, e)
                    }
                }, prepatch: function (t, e) {
                    var n = e.componentOptions, s = e.componentInstance = t.componentInstance;
                    Nn(s, n.propsData, n.listeners, e, n.children)
                }, insert: function (t) {
                    var e = t.context, n = t.componentInstance;
                    n._isMounted || (n._isMounted = !0, Bn(n, "mounted")), t.data.keepAlive && (e._isMounted ? Zn(n) : Rn(n, !0))
                }, destroy: function (t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? Pn(e, !0) : e.$destroy())
                }
            }, rn = Object.keys(sn);

            function an(t, e, n, i, o) {
                if (!s(t)) {
                    var l = n.$options._base;
                    if (c(t) && (t = l.extend(t)), "function" === typeof t) {
                        var u;
                        if (s(t.cid) && (u = t, t = Sn(u, l), void 0 === t)) return Cn(u, e, n, i, o);
                        e = e || {}, Cs(t), r(e.model) && un(t.options, e);
                        var d = Se(e, t, o);
                        if (a(t.options.functional)) return tn(t, d, e, n, i);
                        var h = e.on;
                        if (e.on = e.nativeOn, a(t.options.abstract)) {
                            var f = e.slot;
                            e = {}, f && (e.slot = f)
                        }
                        cn(e);
                        var p = t.options.name || o,
                            m = new bt("vue-component-" + t.cid + (p ? "-" + p : ""), e, void 0, void 0, void 0, n, {
                                Ctor: t,
                                propsData: d,
                                listeners: h,
                                tag: o,
                                children: i
                            }, u);
                        return m
                    }
                }
            }

            function on(t, e) {
                var n = {_isComponent: !0, _parentVnode: t, parent: e}, s = t.data.inlineTemplate;
                return r(s) && (n.render = s.render, n.staticRenderFns = s.staticRenderFns), new t.componentOptions.Ctor(n)
            }

            function cn(t) {
                for (var e = t.hook || (t.hook = {}), n = 0; n < rn.length; n++) {
                    var s = rn[n], r = e[s], a = sn[s];
                    r === a || r && r._merged || (e[s] = r ? ln(a, r) : a)
                }
            }

            function ln(t, e) {
                var n = function (n, s) {
                    t(n, s), e(n, s)
                };
                return n._merged = !0, n
            }

            function un(t, e) {
                var n = t.model && t.model.prop || "value", s = t.model && t.model.event || "input";
                (e.attrs || (e.attrs = {}))[n] = e.model.value;
                var a = e.on || (e.on = {}), i = a[s], o = e.model.callback;
                r(i) ? (Array.isArray(i) ? -1 === i.indexOf(o) : i !== o) && (a[s] = [o].concat(i)) : a[s] = o
            }

            var dn = 1, hn = 2;

            function fn(t, e, n, s, r, i) {
                return (Array.isArray(n) || o(n)) && (r = s, s = n, n = void 0), a(i) && (r = hn), pn(t, e, n, s, r)
            }

            function pn(t, e, n, s, a) {
                if (r(n) && r(n.__ob__)) return wt();
                if (r(n) && r(n.is) && (e = n.is), !e) return wt();
                var i, o, c;
                (Array.isArray(s) && "function" === typeof s[0] && (n = n || {}, n.scopedSlots = {default: s[0]}, s.length = 0), a === hn ? s = xe(s) : a === dn && (s = ke(s)), "string" === typeof e) ? (o = t.$vnode && t.$vnode.ns || U.getTagNamespace(e), i = U.isReservedTag(e) ? new bt(U.parsePlatformTagName(e), n, s, void 0, void 0, t) : n && n.pre || !r(c = Qt(t.$options, "components", e)) ? new bt(e, n, s, void 0, void 0, t) : an(c, n, t, s, e)) : i = an(e, n, t, s);
                return Array.isArray(i) ? i : r(i) ? (r(o) && mn(i, o), r(n) && gn(n), i) : wt()
            }

            function mn(t, e, n) {
                if (t.ns = e, "foreignObject" === t.tag && (e = void 0, n = !0), r(t.children)) for (var i = 0, o = t.children.length; i < o; i++) {
                    var c = t.children[i];
                    r(c.tag) && (s(c.ns) || a(n) && "svg" !== c.tag) && mn(c, e, n)
                }
            }

            function gn(t) {
                c(t.style) && ve(t.style), c(t.class) && ve(t.class)
            }

            function vn(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, s = t.$vnode = e._parentVnode, r = s && s.context;
                t.$slots = Ie(e._renderChildren, r), t.$scopedSlots = n, t._c = function (e, n, s, r) {
                    return fn(t, e, n, s, r, !1)
                }, t.$createElement = function (e, n, s, r) {
                    return fn(t, e, n, s, r, !0)
                };
                var a = s && s.data;
                Lt(t, "$attrs", a && a.attrs || n, null, !0), Lt(t, "$listeners", e._parentListeners || n, null, !0)
            }

            var yn, bn = null;

            function _n(t) {
                Je(t.prototype), t.prototype.$nextTick = function (t) {
                    return me(t, this)
                }, t.prototype._render = function () {
                    var t, e = this, n = e.$options, s = n.render, r = n._parentVnode;
                    r && (e.$scopedSlots = De(r.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = r;
                    try {
                        bn = e, t = s.call(e._renderProxy, e.$createElement)
                    } catch (Si) {
                        ne(Si, e, "render"), t = e._vnode
                    } finally {
                        bn = null
                    }
                    return Array.isArray(t) && 1 === t.length && (t = t[0]), t instanceof bt || (t = wt()), t.parent = r, t
                }
            }

            function wn(t, e) {
                return (t.__esModule || ht && "Module" === t[Symbol.toStringTag]) && (t = t.default), c(t) ? e.extend(t) : t
            }

            function Cn(t, e, n, s, r) {
                var a = wt();
                return a.asyncFactory = t, a.asyncMeta = {data: e, context: n, children: s, tag: r}, a
            }

            function Sn(t, e) {
                if (a(t.error) && r(t.errorComp)) return t.errorComp;
                if (r(t.resolved)) return t.resolved;
                var n = bn;
                if (n && r(t.owners) && -1 === t.owners.indexOf(n) && t.owners.push(n), a(t.loading) && r(t.loadingComp)) return t.loadingComp;
                if (n && !r(t.owners)) {
                    var i = t.owners = [n], o = !0, l = null, u = null;
                    n.$on("hook:destroyed", (function () {
                        return y(i, n)
                    }));
                    var d = function (t) {
                        for (var e = 0, n = i.length; e < n; e++) i[e].$forceUpdate();
                        t && (i.length = 0, null !== l && (clearTimeout(l), l = null), null !== u && (clearTimeout(u), u = null))
                    }, h = R((function (n) {
                        t.resolved = wn(n, e), o ? i.length = 0 : d(!0)
                    })), p = R((function (e) {
                        r(t.errorComp) && (t.error = !0, d(!0))
                    })), m = t(h, p);
                    return c(m) && (f(m) ? s(t.resolved) && m.then(h, p) : f(m.component) && (m.component.then(h, p), r(m.error) && (t.errorComp = wn(m.error, e)), r(m.loading) && (t.loadingComp = wn(m.loading, e), 0 === m.delay ? t.loading = !0 : l = setTimeout((function () {
                        l = null, s(t.resolved) && s(t.error) && (t.loading = !0, d(!1))
                    }), m.delay || 200)), r(m.timeout) && (u = setTimeout((function () {
                        u = null, s(t.resolved) && p(null)
                    }), m.timeout)))), o = !1, t.loading ? t.loadingComp : t.resolved
                }
            }

            function $n(t) {
                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (r(n) && (r(n.componentOptions) || Le(n))) return n
                }
            }

            function kn(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && En(t, e)
            }

            function xn(t, e) {
                yn.$on(t, e)
            }

            function Tn(t, e) {
                yn.$off(t, e)
            }

            function On(t, e) {
                var n = yn;
                return function s() {
                    var r = e.apply(null, arguments);
                    null !== r && n.$off(t, s)
                }
            }

            function En(t, e, n) {
                yn = t, we(e, n || {}, xn, Tn, On, t), yn = void 0
            }

            function Mn(t) {
                var e = /^hook:/;
                t.prototype.$on = function (t, n) {
                    var s = this;
                    if (Array.isArray(t)) for (var r = 0, a = t.length; r < a; r++) s.$on(t[r], n); else (s._events[t] || (s._events[t] = [])).push(n), e.test(t) && (s._hasHookEvent = !0);
                    return s
                }, t.prototype.$once = function (t, e) {
                    var n = this;

                    function s() {
                        n.$off(t, s), e.apply(n, arguments)
                    }

                    return s.fn = e, n.$on(t, s), n
                }, t.prototype.$off = function (t, e) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(t)) {
                        for (var s = 0, r = t.length; s < r; s++) n.$off(t[s], e);
                        return n
                    }
                    var a, i = n._events[t];
                    if (!i) return n;
                    if (!e) return n._events[t] = null, n;
                    var o = i.length;
                    while (o--) if (a = i[o], a === e || a.fn === e) {
                        i.splice(o, 1);
                        break
                    }
                    return n
                }, t.prototype.$emit = function (t) {
                    var e = this, n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? M(n) : n;
                        for (var s = M(arguments, 1), r = 'event handler for "' + t + '"', a = 0, i = n.length; a < i; a++) se(n[a], e, s, e, r)
                    }
                    return e
                }
            }

            var An = null;

            function In(t) {
                var e = An;
                return An = t, function () {
                    An = e
                }
            }

            function jn(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    while (n.$options.abstract && n.$parent) n = n.$parent;
                    n.$children.push(t)
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
            }

            function Ln(t) {
                t.prototype._update = function (t, e) {
                    var n = this, s = n.$el, r = n._vnode, a = In(n);
                    n._vnode = t, n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1), a(), s && (s.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, t.prototype.$forceUpdate = function () {
                    var t = this;
                    t._watcher && t._watcher.update()
                }, t.prototype.$destroy = function () {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        Bn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options.abstract || y(e.$children, t), t._watcher && t._watcher.teardown();
                        var n = t._watchers.length;
                        while (n--) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Bn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                    }
                }
            }

            function Dn(t, e, n) {
                var s;
                return t.$el = e, t.$options.render || (t.$options.render = wt), Bn(t, "beforeMount"), s = function () {
                    t._update(t._render(), n)
                }, new ss(t, s, j, {
                    before: function () {
                        t._isMounted && !t._isDestroyed && Bn(t, "beforeUpdate")
                    }
                }, !0), n = !1, null == t.$vnode && (t._isMounted = !0, Bn(t, "mounted")), t
            }

            function Nn(t, e, s, r, a) {
                var i = r.data.scopedSlots, o = t.$scopedSlots,
                    c = !!(i && !i.$stable || o !== n && !o.$stable || i && t.$scopedSlots.$key !== i.$key || !i && t.$scopedSlots.$key),
                    l = !!(a || t.$options._renderChildren || c);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = a, t.$attrs = r.data.attrs || n, t.$listeners = s || n, e && t.$options.props) {
                    Et(!1);
                    for (var u = t._props, d = t.$options._propKeys || [], h = 0; h < d.length; h++) {
                        var f = d[h], p = t.$options.props;
                        u[f] = Xt(f, p, e, t)
                    }
                    Et(!0), t.$options.propsData = e
                }
                s = s || n;
                var m = t.$options._parentListeners;
                t.$options._parentListeners = s, En(t, s, m), l && (t.$slots = Ie(a, r.context), t.$forceUpdate())
            }

            function Fn(t) {
                while (t && (t = t.$parent)) if (t._inactive) return !0;
                return !1
            }

            function Rn(t, e) {
                if (e) {
                    if (t._directInactive = !1, Fn(t)) return
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) Rn(t.$children[n]);
                    Bn(t, "activated")
                }
            }

            function Pn(t, e) {
                if ((!e || (t._directInactive = !0, !Fn(t))) && !t._inactive) {
                    t._inactive = !0;
                    for (var n = 0; n < t.$children.length; n++) Pn(t.$children[n]);
                    Bn(t, "deactivated")
                }
            }

            function Bn(t, e) {
                vt();
                var n = t.$options[e], s = e + " hook";
                if (n) for (var r = 0, a = n.length; r < a; r++) se(n[r], t, null, t, s);
                t._hasHookEvent && t.$emit("hook:" + e), yt()
            }

            var zn = [], Un = [], qn = {}, Hn = !1, Vn = !1, Wn = 0;

            function Gn() {
                Wn = zn.length = Un.length = 0, qn = {}, Hn = Vn = !1
            }

            var Kn = 0, Qn = Date.now;
            if (X && !tt) {
                var Xn = window.performance;
                Xn && "function" === typeof Xn.now && Qn() > document.createEvent("Event").timeStamp && (Qn = function () {
                    return Xn.now()
                })
            }

            function Yn() {
                var t, e;
                for (Kn = Qn(), Vn = !0, zn.sort((function (t, e) {
                    return t.id - e.id
                })), Wn = 0; Wn < zn.length; Wn++) t = zn[Wn], t.before && t.before(), e = t.id, qn[e] = null, t.run();
                var n = Un.slice(), s = zn.slice();
                Gn(), ts(n), Jn(s), lt && U.devtools && lt.emit("flush")
            }

            function Jn(t) {
                var e = t.length;
                while (e--) {
                    var n = t[e], s = n.vm;
                    s._watcher === n && s._isMounted && !s._isDestroyed && Bn(s, "updated")
                }
            }

            function Zn(t) {
                t._inactive = !1, Un.push(t)
            }

            function ts(t) {
                for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Rn(t[e], !0)
            }

            function es(t) {
                var e = t.id;
                if (null == qn[e]) {
                    if (qn[e] = !0, Vn) {
                        var n = zn.length - 1;
                        while (n > Wn && zn[n].id > t.id) n--;
                        zn.splice(n + 1, 0, t)
                    } else zn.push(t);
                    Hn || (Hn = !0, me(Yn))
                }
            }

            var ns = 0, ss = function (t, e, n, s, r) {
                this.vm = t, r && (t._watcher = this), t._watchers.push(this), s ? (this.deep = !!s.deep, this.user = !!s.user, this.lazy = !!s.lazy, this.sync = !!s.sync, this.before = s.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ns, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new dt, this.newDepIds = new dt, this.expression = "", "function" === typeof e ? this.getter = e : (this.getter = G(e), this.getter || (this.getter = j)), this.value = this.lazy ? void 0 : this.get()
            };
            ss.prototype.get = function () {
                var t;
                vt(this);
                var e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (Si) {
                    if (!this.user) throw Si;
                    ne(Si, e, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && ve(t), yt(), this.cleanupDeps()
                }
                return t
            }, ss.prototype.addDep = function (t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, ss.prototype.cleanupDeps = function () {
                var t = this.deps.length;
                while (t--) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, ss.prototype.update = function () {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : es(this)
            }, ss.prototype.run = function () {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || c(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) {
                            var n = 'callback for watcher "' + this.expression + '"';
                            se(this.cb, this.vm, [t, e], this.vm, n)
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, ss.prototype.evaluate = function () {
                this.value = this.get(), this.dirty = !1
            }, ss.prototype.depend = function () {
                var t = this.deps.length;
                while (t--) this.deps[t].depend()
            }, ss.prototype.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                    var t = this.deps.length;
                    while (t--) this.deps[t].removeSub(this);
                    this.active = !1
                }
            };
            var rs = {enumerable: !0, configurable: !0, get: j, set: j};

            function as(t, e, n) {
                rs.get = function () {
                    return this[e][n]
                }, rs.set = function (t) {
                    this[e][n] = t
                }, Object.defineProperty(t, n, rs)
            }

            function is(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && os(t, e.props), e.methods && ms(t, e.methods), e.data ? cs(t) : jt(t._data = {}, !0), e.computed && ds(t, e.computed), e.watch && e.watch !== at && gs(t, e.watch)
            }

            function os(t, e) {
                var n = t.$options.propsData || {}, s = t._props = {}, r = t.$options._propKeys = [], a = !t.$parent;
                a || Et(!1);
                var i = function (a) {
                    r.push(a);
                    var i = Xt(a, e, n, t);
                    Lt(s, a, i), a in t || as(t, "_props", a)
                };
                for (var o in e) i(o);
                Et(!0)
            }

            function cs(t) {
                var e = t.$options.data;
                e = t._data = "function" === typeof e ? ls(e, t) : e || {}, u(e) || (e = {});
                var n = Object.keys(e), s = t.$options.props, r = (t.$options.methods, n.length);
                while (r--) {
                    var a = n[r];
                    0, s && _(s, a) || H(a) || as(t, "_data", a)
                }
                jt(e, !0)
            }

            function ls(t, e) {
                vt();
                try {
                    return t.call(e, e)
                } catch (Si) {
                    return ne(Si, e, "data()"), {}
                } finally {
                    yt()
                }
            }

            var us = {lazy: !0};

            function ds(t, e) {
                var n = t._computedWatchers = Object.create(null), s = ct();
                for (var r in e) {
                    var a = e[r], i = "function" === typeof a ? a : a.get;
                    0, s || (n[r] = new ss(t, i || j, j, us)), r in t || hs(t, r, a)
                }
            }

            function hs(t, e, n) {
                var s = !ct();
                "function" === typeof n ? (rs.get = s ? fs(e) : ps(n), rs.set = j) : (rs.get = n.get ? s && !1 !== n.cache ? fs(e) : ps(n.get) : j, rs.set = n.set || j), Object.defineProperty(t, e, rs)
            }

            function fs(t) {
                return function () {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), mt.target && e.depend(), e.value
                }
            }

            function ps(t) {
                return function () {
                    return t.call(this, this)
                }
            }

            function ms(t, e) {
                t.$options.props;
                for (var n in e) t[n] = "function" !== typeof e[n] ? j : E(e[n], t)
            }

            function gs(t, e) {
                for (var n in e) {
                    var s = e[n];
                    if (Array.isArray(s)) for (var r = 0; r < s.length; r++) vs(t, n, s[r]); else vs(t, n, s)
                }
            }

            function vs(t, e, n, s) {
                return u(n) && (s = n, n = n.handler), "string" === typeof n && (n = t[n]), t.$watch(e, n, s)
            }

            function ys(t) {
                var e = {
                    get: function () {
                        return this._data
                    }
                }, n = {
                    get: function () {
                        return this._props
                    }
                };
                Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = Dt, t.prototype.$delete = Nt, t.prototype.$watch = function (t, e, n) {
                    var s = this;
                    if (u(e)) return vs(s, t, e, n);
                    n = n || {}, n.user = !0;
                    var r = new ss(s, t, e, n);
                    if (n.immediate) {
                        var a = 'callback for immediate watcher "' + r.expression + '"';
                        vt(), se(e, s, [r.value], s, a), yt()
                    }
                    return function () {
                        r.teardown()
                    }
                }
            }

            var bs = 0;

            function _s(t) {
                t.prototype._init = function (t) {
                    var e = this;
                    e._uid = bs++, e._isVue = !0, t && t._isComponent ? ws(e, t) : e.$options = Kt(Cs(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, jn(e), kn(e), vn(e), Bn(e, "beforeCreate"), Me(e), is(e), Ee(e), Bn(e, "created"), e.$options.el && e.$mount(e.$options.el)
                }
            }

            function ws(t, e) {
                var n = t.$options = Object.create(t.constructor.options), s = e._parentVnode;
                n.parent = e.parent, n._parentVnode = s;
                var r = s.componentOptions;
                n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
            }

            function Cs(t) {
                var e = t.options;
                if (t.super) {
                    var n = Cs(t.super), s = t.superOptions;
                    if (n !== s) {
                        t.superOptions = n;
                        var r = Ss(t);
                        r && A(t.extendOptions, r), e = t.options = Kt(n, t.extendOptions), e.name && (e.components[e.name] = t)
                    }
                }
                return e
            }

            function Ss(t) {
                var e, n = t.options, s = t.sealedOptions;
                for (var r in n) n[r] !== s[r] && (e || (e = {}), e[r] = n[r]);
                return e
            }

            function $s(t) {
                this._init(t)
            }

            function ks(t) {
                t.use = function (t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var n = M(arguments, 1);
                    return n.unshift(this), "function" === typeof t.install ? t.install.apply(t, n) : "function" === typeof t && t.apply(null, n), e.push(t), this
                }
            }

            function xs(t) {
                t.mixin = function (t) {
                    return this.options = Kt(this.options, t), this
                }
            }

            function Ts(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function (t) {
                    t = t || {};
                    var n = this, s = n.cid, r = t._Ctor || (t._Ctor = {});
                    if (r[s]) return r[s];
                    var a = t.name || n.options.name;
                    var i = function (t) {
                        this._init(t)
                    };
                    return i.prototype = Object.create(n.prototype), i.prototype.constructor = i, i.cid = e++, i.options = Kt(n.options, t), i["super"] = n, i.options.props && Os(i), i.options.computed && Es(i), i.extend = n.extend, i.mixin = n.mixin, i.use = n.use, B.forEach((function (t) {
                        i[t] = n[t]
                    })), a && (i.options.components[a] = i), i.superOptions = n.options, i.extendOptions = t, i.sealedOptions = A({}, i.options), r[s] = i, i
                }
            }

            function Os(t) {
                var e = t.options.props;
                for (var n in e) as(t.prototype, "_props", n)
            }

            function Es(t) {
                var e = t.options.computed;
                for (var n in e) hs(t.prototype, n, e[n])
            }

            function Ms(t) {
                B.forEach((function (e) {
                    t[e] = function (t, n) {
                        return n ? ("component" === e && u(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" === typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                    }
                }))
            }

            function As(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function Is(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" === typeof t ? t.split(",").indexOf(e) > -1 : !!d(t) && t.test(e)
            }

            function js(t, e) {
                var n = t.cache, s = t.keys, r = t._vnode;
                for (var a in n) {
                    var i = n[a];
                    if (i) {
                        var o = i.name;
                        o && !e(o) && Ls(n, a, s, r)
                    }
                }
            }

            function Ls(t, e, n, s) {
                var r = t[e];
                !r || s && r.tag === s.tag || r.componentInstance.$destroy(), t[e] = null, y(n, e)
            }

            _s($s), ys($s), Mn($s), Ln($s), _n($s);
            var Ds = [String, RegExp, Array], Ns = {
                name: "keep-alive",
                abstract: !0,
                props: {include: Ds, exclude: Ds, max: [String, Number]},
                methods: {
                    cacheVNode: function () {
                        var t = this, e = t.cache, n = t.keys, s = t.vnodeToCache, r = t.keyToCache;
                        if (s) {
                            var a = s.tag, i = s.componentInstance, o = s.componentOptions;
                            e[r] = {
                                name: As(o),
                                tag: a,
                                componentInstance: i
                            }, n.push(r), this.max && n.length > parseInt(this.max) && Ls(e, n[0], n, this._vnode), this.vnodeToCache = null
                        }
                    }
                },
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    for (var t in this.cache) Ls(this.cache, t, this.keys)
                },
                mounted: function () {
                    var t = this;
                    this.cacheVNode(), this.$watch("include", (function (e) {
                        js(t, (function (t) {
                            return Is(e, t)
                        }))
                    })), this.$watch("exclude", (function (e) {
                        js(t, (function (t) {
                            return !Is(e, t)
                        }))
                    }))
                },
                updated: function () {
                    this.cacheVNode()
                },
                render: function () {
                    var t = this.$slots.default, e = $n(t), n = e && e.componentOptions;
                    if (n) {
                        var s = As(n), r = this, a = r.include, i = r.exclude;
                        if (a && (!s || !Is(a, s)) || i && s && Is(i, s)) return e;
                        var o = this, c = o.cache, l = o.keys,
                            u = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                        c[u] ? (e.componentInstance = c[u].componentInstance, y(l, u), l.push(u)) : (this.vnodeToCache = e, this.keyToCache = u), e.data.keepAlive = !0
                    }
                    return e || t && t[0]
                }
            }, Fs = {KeepAlive: Ns};

            function Rs(t) {
                var e = {
                    get: function () {
                        return U
                    }
                };
                Object.defineProperty(t, "config", e), t.util = {
                    warn: ft,
                    extend: A,
                    mergeOptions: Kt,
                    defineReactive: Lt
                }, t.set = Dt, t.delete = Nt, t.nextTick = me, t.observable = function (t) {
                    return jt(t), t
                }, t.options = Object.create(null), B.forEach((function (e) {
                    t.options[e + "s"] = Object.create(null)
                })), t.options._base = t, A(t.options.components, Fs), ks(t), xs(t), Ts(t), Ms(t)
            }

            Rs($s), Object.defineProperty($s.prototype, "$isServer", {get: ct}), Object.defineProperty($s.prototype, "$ssrContext", {
                get: function () {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Object.defineProperty($s, "FunctionalRenderContext", {value: Ze}), $s.version = "2.6.14";
            var Ps = g("style,class"), Bs = g("input,textarea,option,select,progress"), zs = function (t, e, n) {
                    return "value" === n && Bs(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
                }, Us = g("contenteditable,draggable,spellcheck"), qs = g("events,caret,typing,plaintext-only"),
                Hs = function (t, e) {
                    return Qs(e) || "false" === e ? "false" : "contenteditable" === t && qs(e) ? e : "true"
                },
                Vs = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
                Ws = "http://www.w3.org/1999/xlink", Gs = function (t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                }, Ks = function (t) {
                    return Gs(t) ? t.slice(6, t.length) : ""
                }, Qs = function (t) {
                    return null == t || !1 === t
                };

            function Xs(t) {
                var e = t.data, n = t, s = t;
                while (r(s.componentInstance)) s = s.componentInstance._vnode, s && s.data && (e = Ys(s.data, e));
                while (r(n = n.parent)) n && n.data && (e = Ys(e, n.data));
                return Js(e.staticClass, e.class)
            }

            function Ys(t, e) {
                return {staticClass: Zs(t.staticClass, e.staticClass), class: r(t.class) ? [t.class, e.class] : e.class}
            }

            function Js(t, e) {
                return r(t) || r(e) ? Zs(t, tr(e)) : ""
            }

            function Zs(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function tr(t) {
                return Array.isArray(t) ? er(t) : c(t) ? nr(t) : "string" === typeof t ? t : ""
            }

            function er(t) {
                for (var e, n = "", s = 0, a = t.length; s < a; s++) r(e = tr(t[s])) && "" !== e && (n && (n += " "), n += e);
                return n
            }

            function nr(t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), e += n);
                return e
            }

            var sr = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
                rr = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                ar = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                ir = function (t) {
                    return rr(t) || ar(t)
                };

            function or(t) {
                return ar(t) ? "svg" : "math" === t ? "math" : void 0
            }

            var cr = Object.create(null);

            function lr(t) {
                if (!X) return !0;
                if (ir(t)) return !1;
                if (t = t.toLowerCase(), null != cr[t]) return cr[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? cr[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : cr[t] = /HTMLUnknownElement/.test(e.toString())
            }

            var ur = g("text,number,password,search,email,tel,url");

            function dr(t) {
                if ("string" === typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }

            function hr(t, e) {
                var n = document.createElement(t);
                return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
            }

            function fr(t, e) {
                return document.createElementNS(sr[t], e)
            }

            function pr(t) {
                return document.createTextNode(t)
            }

            function mr(t) {
                return document.createComment(t)
            }

            function gr(t, e, n) {
                t.insertBefore(e, n)
            }

            function vr(t, e) {
                t.removeChild(e)
            }

            function yr(t, e) {
                t.appendChild(e)
            }

            function br(t) {
                return t.parentNode
            }

            function _r(t) {
                return t.nextSibling
            }

            function wr(t) {
                return t.tagName
            }

            function Cr(t, e) {
                t.textContent = e
            }

            function Sr(t, e) {
                t.setAttribute(e, "")
            }

            var $r = Object.freeze({
                createElement: hr,
                createElementNS: fr,
                createTextNode: pr,
                createComment: mr,
                insertBefore: gr,
                removeChild: vr,
                appendChild: yr,
                parentNode: br,
                nextSibling: _r,
                tagName: wr,
                setTextContent: Cr,
                setStyleScope: Sr
            }), kr = {
                create: function (t, e) {
                    xr(e)
                }, update: function (t, e) {
                    t.data.ref !== e.data.ref && (xr(t, !0), xr(e))
                }, destroy: function (t) {
                    xr(t, !0)
                }
            };

            function xr(t, e) {
                var n = t.data.ref;
                if (r(n)) {
                    var s = t.context, a = t.componentInstance || t.elm, i = s.$refs;
                    e ? Array.isArray(i[n]) ? y(i[n], a) : i[n] === a && (i[n] = void 0) : t.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(a) < 0 && i[n].push(a) : i[n] = [a] : i[n] = a
                }
            }

            var Tr = new bt("", {}, []), Or = ["create", "activate", "update", "remove", "destroy"];

            function Er(t, e) {
                return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && Mr(t, e) || a(t.isAsyncPlaceholder) && s(e.asyncFactory.error))
            }

            function Mr(t, e) {
                if ("input" !== t.tag) return !0;
                var n, s = r(n = t.data) && r(n = n.attrs) && n.type, a = r(n = e.data) && r(n = n.attrs) && n.type;
                return s === a || ur(s) && ur(a)
            }

            function Ar(t, e, n) {
                var s, a, i = {};
                for (s = e; s <= n; ++s) a = t[s].key, r(a) && (i[a] = s);
                return i
            }

            function Ir(t) {
                var e, n, i = {}, c = t.modules, l = t.nodeOps;
                for (e = 0; e < Or.length; ++e) for (i[Or[e]] = [], n = 0; n < c.length; ++n) r(c[n][Or[e]]) && i[Or[e]].push(c[n][Or[e]]);

                function u(t) {
                    return new bt(l.tagName(t).toLowerCase(), {}, [], void 0, t)
                }

                function d(t, e) {
                    function n() {
                        0 === --n.listeners && h(t)
                    }

                    return n.listeners = e, n
                }

                function h(t) {
                    var e = l.parentNode(t);
                    r(e) && l.removeChild(e, t)
                }

                function f(t, e, n, s, i, o, c) {
                    if (r(t.elm) && r(o) && (t = o[c] = St(t)), t.isRootInsert = !i, !p(t, e, n, s)) {
                        var u = t.data, d = t.children, h = t.tag;
                        r(h) ? (t.elm = t.ns ? l.createElementNS(t.ns, h) : l.createElement(h, t), C(t), b(t, d, e), r(u) && w(t, e), y(n, t.elm, s)) : a(t.isComment) ? (t.elm = l.createComment(t.text), y(n, t.elm, s)) : (t.elm = l.createTextNode(t.text), y(n, t.elm, s))
                    }
                }

                function p(t, e, n, s) {
                    var i = t.data;
                    if (r(i)) {
                        var o = r(t.componentInstance) && i.keepAlive;
                        if (r(i = i.hook) && r(i = i.init) && i(t, !1), r(t.componentInstance)) return m(t, e), y(n, t.elm, s), a(o) && v(t, e, n, s), !0
                    }
                }

                function m(t, e) {
                    r(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, _(t) ? (w(t, e), C(t)) : (xr(t), e.push(t))
                }

                function v(t, e, n, s) {
                    var a, o = t;
                    while (o.componentInstance) if (o = o.componentInstance._vnode, r(a = o.data) && r(a = a.transition)) {
                        for (a = 0; a < i.activate.length; ++a) i.activate[a](Tr, o);
                        e.push(o);
                        break
                    }
                    y(n, t.elm, s)
                }

                function y(t, e, n) {
                    r(t) && (r(n) ? l.parentNode(n) === t && l.insertBefore(t, e, n) : l.appendChild(t, e))
                }

                function b(t, e, n) {
                    if (Array.isArray(e)) {
                        0;
                        for (var s = 0; s < e.length; ++s) f(e[s], n, t.elm, null, !0, e, s)
                    } else o(t.text) && l.appendChild(t.elm, l.createTextNode(String(t.text)))
                }

                function _(t) {
                    while (t.componentInstance) t = t.componentInstance._vnode;
                    return r(t.tag)
                }

                function w(t, n) {
                    for (var s = 0; s < i.create.length; ++s) i.create[s](Tr, t);
                    e = t.data.hook, r(e) && (r(e.create) && e.create(Tr, t), r(e.insert) && n.push(t))
                }

                function C(t) {
                    var e;
                    if (r(e = t.fnScopeId)) l.setStyleScope(t.elm, e); else {
                        var n = t;
                        while (n) r(e = n.context) && r(e = e.$options._scopeId) && l.setStyleScope(t.elm, e), n = n.parent
                    }
                    r(e = An) && e !== t.context && e !== t.fnContext && r(e = e.$options._scopeId) && l.setStyleScope(t.elm, e)
                }

                function S(t, e, n, s, r, a) {
                    for (; s <= r; ++s) f(n[s], a, t, e, !1, n, s)
                }

                function $(t) {
                    var e, n, s = t.data;
                    if (r(s)) for (r(e = s.hook) && r(e = e.destroy) && e(t), e = 0; e < i.destroy.length; ++e) i.destroy[e](t);
                    if (r(e = t.children)) for (n = 0; n < t.children.length; ++n) $(t.children[n])
                }

                function k(t, e, n) {
                    for (; e <= n; ++e) {
                        var s = t[e];
                        r(s) && (r(s.tag) ? (x(s), $(s)) : h(s.elm))
                    }
                }

                function x(t, e) {
                    if (r(e) || r(t.data)) {
                        var n, s = i.remove.length + 1;
                        for (r(e) ? e.listeners += s : e = d(t.elm, s), r(n = t.componentInstance) && r(n = n._vnode) && r(n.data) && x(n, e), n = 0; n < i.remove.length; ++n) i.remove[n](t, e);
                        r(n = t.data.hook) && r(n = n.remove) ? n(t, e) : e()
                    } else h(t.elm)
                }

                function T(t, e, n, a, i) {
                    var o, c, u, d, h = 0, p = 0, m = e.length - 1, g = e[0], v = e[m], y = n.length - 1, b = n[0],
                        _ = n[y], w = !i;
                    while (h <= m && p <= y) s(g) ? g = e[++h] : s(v) ? v = e[--m] : Er(g, b) ? (E(g, b, a, n, p), g = e[++h], b = n[++p]) : Er(v, _) ? (E(v, _, a, n, y), v = e[--m], _ = n[--y]) : Er(g, _) ? (E(g, _, a, n, y), w && l.insertBefore(t, g.elm, l.nextSibling(v.elm)), g = e[++h], _ = n[--y]) : Er(v, b) ? (E(v, b, a, n, p), w && l.insertBefore(t, v.elm, g.elm), v = e[--m], b = n[++p]) : (s(o) && (o = Ar(e, h, m)), c = r(b.key) ? o[b.key] : O(b, e, h, m), s(c) ? f(b, a, t, g.elm, !1, n, p) : (u = e[c], Er(u, b) ? (E(u, b, a, n, p), e[c] = void 0, w && l.insertBefore(t, u.elm, g.elm)) : f(b, a, t, g.elm, !1, n, p)), b = n[++p]);
                    h > m ? (d = s(n[y + 1]) ? null : n[y + 1].elm, S(t, d, n, p, y, a)) : p > y && k(e, h, m)
                }

                function O(t, e, n, s) {
                    for (var a = n; a < s; a++) {
                        var i = e[a];
                        if (r(i) && Er(t, i)) return a
                    }
                }

                function E(t, e, n, o, c, u) {
                    if (t !== e) {
                        r(e.elm) && r(o) && (e = o[c] = St(e));
                        var d = e.elm = t.elm;
                        if (a(t.isAsyncPlaceholder)) r(e.asyncFactory.resolved) ? I(t.elm, e, n) : e.isAsyncPlaceholder = !0; else if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) e.componentInstance = t.componentInstance; else {
                            var h, f = e.data;
                            r(f) && r(h = f.hook) && r(h = h.prepatch) && h(t, e);
                            var p = t.children, m = e.children;
                            if (r(f) && _(e)) {
                                for (h = 0; h < i.update.length; ++h) i.update[h](t, e);
                                r(h = f.hook) && r(h = h.update) && h(t, e)
                            }
                            s(e.text) ? r(p) && r(m) ? p !== m && T(d, p, m, n, u) : r(m) ? (r(t.text) && l.setTextContent(d, ""), S(d, null, m, 0, m.length - 1, n)) : r(p) ? k(p, 0, p.length - 1) : r(t.text) && l.setTextContent(d, "") : t.text !== e.text && l.setTextContent(d, e.text), r(f) && r(h = f.hook) && r(h = h.postpatch) && h(t, e)
                        }
                    }
                }

                function M(t, e, n) {
                    if (a(n) && r(t.parent)) t.parent.data.pendingInsert = e; else for (var s = 0; s < e.length; ++s) e[s].data.hook.insert(e[s])
                }

                var A = g("attrs,class,staticClass,staticStyle,key");

                function I(t, e, n, s) {
                    var i, o = e.tag, c = e.data, l = e.children;
                    if (s = s || c && c.pre, e.elm = t, a(e.isComment) && r(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (r(c) && (r(i = c.hook) && r(i = i.init) && i(e, !0), r(i = e.componentInstance))) return m(e, n), !0;
                    if (r(o)) {
                        if (r(l)) if (t.hasChildNodes()) if (r(i = c) && r(i = i.domProps) && r(i = i.innerHTML)) {
                            if (i !== t.innerHTML) return !1
                        } else {
                            for (var u = !0, d = t.firstChild, h = 0; h < l.length; h++) {
                                if (!d || !I(d, l[h], n, s)) {
                                    u = !1;
                                    break
                                }
                                d = d.nextSibling
                            }
                            if (!u || d) return !1
                        } else b(e, l, n);
                        if (r(c)) {
                            var f = !1;
                            for (var p in c) if (!A(p)) {
                                f = !0, w(e, n);
                                break
                            }
                            !f && c["class"] && ve(c["class"])
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }

                return function (t, e, n, o) {
                    if (!s(e)) {
                        var c = !1, d = [];
                        if (s(t)) c = !0, f(e, d); else {
                            var h = r(t.nodeType);
                            if (!h && Er(t, e)) E(t, e, d, null, null, o); else {
                                if (h) {
                                    if (1 === t.nodeType && t.hasAttribute(P) && (t.removeAttribute(P), n = !0), a(n) && I(t, e, d)) return M(e, d, !0), t;
                                    t = u(t)
                                }
                                var p = t.elm, m = l.parentNode(p);
                                if (f(e, d, p._leaveCb ? null : m, l.nextSibling(p)), r(e.parent)) {
                                    var g = e.parent, v = _(e);
                                    while (g) {
                                        for (var y = 0; y < i.destroy.length; ++y) i.destroy[y](g);
                                        if (g.elm = e.elm, v) {
                                            for (var b = 0; b < i.create.length; ++b) i.create[b](Tr, g);
                                            var w = g.data.hook.insert;
                                            if (w.merged) for (var C = 1; C < w.fns.length; C++) w.fns[C]()
                                        } else xr(g);
                                        g = g.parent
                                    }
                                }
                                r(m) ? k([t], 0, 0) : r(t.tag) && $(t)
                            }
                        }
                        return M(e, d, c), e.elm
                    }
                    r(t) && $(t)
                }
            }

            var jr = {
                create: Lr, update: Lr, destroy: function (t) {
                    Lr(t, Tr)
                }
            };

            function Lr(t, e) {
                (t.data.directives || e.data.directives) && Dr(t, e)
            }

            function Dr(t, e) {
                var n, s, r, a = t === Tr, i = e === Tr, o = Fr(t.data.directives, t.context),
                    c = Fr(e.data.directives, e.context), l = [], u = [];
                for (n in c) s = o[n], r = c[n], s ? (r.oldValue = s.value, r.oldArg = s.arg, Pr(r, "update", e, t), r.def && r.def.componentUpdated && u.push(r)) : (Pr(r, "bind", e, t), r.def && r.def.inserted && l.push(r));
                if (l.length) {
                    var d = function () {
                        for (var n = 0; n < l.length; n++) Pr(l[n], "inserted", e, t)
                    };
                    a ? Ce(e, "insert", d) : d()
                }
                if (u.length && Ce(e, "postpatch", (function () {
                    for (var n = 0; n < u.length; n++) Pr(u[n], "componentUpdated", e, t)
                })), !a) for (n in o) c[n] || Pr(o[n], "unbind", t, t, i)
            }

            var Nr = Object.create(null);

            function Fr(t, e) {
                var n, s, r = Object.create(null);
                if (!t) return r;
                for (n = 0; n < t.length; n++) s = t[n], s.modifiers || (s.modifiers = Nr), r[Rr(s)] = s, s.def = Qt(e.$options, "directives", s.name, !0);
                return r
            }

            function Rr(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }

            function Pr(t, e, n, s, r) {
                var a = t.def && t.def[e];
                if (a) try {
                    a(n.elm, t, n, s, r)
                } catch (Si) {
                    ne(Si, n.context, "directive " + t.name + " " + e + " hook")
                }
            }

            var Br = [kr, jr];

            function zr(t, e) {
                var n = e.componentOptions;
                if ((!r(n) || !1 !== n.Ctor.options.inheritAttrs) && (!s(t.data.attrs) || !s(e.data.attrs))) {
                    var a, i, o, c = e.elm, l = t.data.attrs || {}, u = e.data.attrs || {};
                    for (a in r(u.__ob__) && (u = e.data.attrs = A({}, u)), u) i = u[a], o = l[a], o !== i && Ur(c, a, i, e.data.pre);
                    for (a in (tt || nt) && u.value !== l.value && Ur(c, "value", u.value), l) s(u[a]) && (Gs(a) ? c.removeAttributeNS(Ws, Ks(a)) : Us(a) || c.removeAttribute(a))
                }
            }

            function Ur(t, e, n, s) {
                s || t.tagName.indexOf("-") > -1 ? qr(t, e, n) : Vs(e) ? Qs(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Us(e) ? t.setAttribute(e, Hs(e, n)) : Gs(e) ? Qs(n) ? t.removeAttributeNS(Ws, Ks(e)) : t.setAttributeNS(Ws, e, n) : qr(t, e, n)
            }

            function qr(t, e, n) {
                if (Qs(n)) t.removeAttribute(e); else {
                    if (tt && !et && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
                        var s = function (e) {
                            e.stopImmediatePropagation(), t.removeEventListener("input", s)
                        };
                        t.addEventListener("input", s), t.__ieph = !0
                    }
                    t.setAttribute(e, n)
                }
            }

            var Hr = {create: zr, update: zr};

            function Vr(t, e) {
                var n = e.elm, a = e.data, i = t.data;
                if (!(s(a.staticClass) && s(a.class) && (s(i) || s(i.staticClass) && s(i.class)))) {
                    var o = Xs(e), c = n._transitionClasses;
                    r(c) && (o = Zs(o, tr(c))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
                }
            }

            var Wr, Gr = {create: Vr, update: Vr}, Kr = "__r", Qr = "__c";

            function Xr(t) {
                if (r(t[Kr])) {
                    var e = tt ? "change" : "input";
                    t[e] = [].concat(t[Kr], t[e] || []), delete t[Kr]
                }
                r(t[Qr]) && (t.change = [].concat(t[Qr], t.change || []), delete t[Qr])
            }

            function Yr(t, e, n) {
                var s = Wr;
                return function r() {
                    var a = e.apply(null, arguments);
                    null !== a && ta(t, r, n, s)
                }
            }

            var Jr = oe && !(rt && Number(rt[1]) <= 53);

            function Zr(t, e, n, s) {
                if (Jr) {
                    var r = Kn, a = e;
                    e = a._wrapper = function (t) {
                        if (t.target === t.currentTarget || t.timeStamp >= r || t.timeStamp <= 0 || t.target.ownerDocument !== document) return a.apply(this, arguments)
                    }
                }
                Wr.addEventListener(t, e, it ? {capture: n, passive: s} : n)
            }

            function ta(t, e, n, s) {
                (s || Wr).removeEventListener(t, e._wrapper || e, n)
            }

            function ea(t, e) {
                if (!s(t.data.on) || !s(e.data.on)) {
                    var n = e.data.on || {}, r = t.data.on || {};
                    Wr = e.elm, Xr(n), we(n, r, Zr, ta, Yr, e.context), Wr = void 0
                }
            }

            var na, sa = {create: ea, update: ea};

            function ra(t, e) {
                if (!s(t.data.domProps) || !s(e.data.domProps)) {
                    var n, a, i = e.elm, o = t.data.domProps || {}, c = e.data.domProps || {};
                    for (n in r(c.__ob__) && (c = e.data.domProps = A({}, c)), o) n in c || (i[n] = "");
                    for (n in c) {
                        if (a = c[n], "textContent" === n || "innerHTML" === n) {
                            if (e.children && (e.children.length = 0), a === o[n]) continue;
                            1 === i.childNodes.length && i.removeChild(i.childNodes[0])
                        }
                        if ("value" === n && "PROGRESS" !== i.tagName) {
                            i._value = a;
                            var l = s(a) ? "" : String(a);
                            aa(i, l) && (i.value = l)
                        } else if ("innerHTML" === n && ar(i.tagName) && s(i.innerHTML)) {
                            na = na || document.createElement("div"), na.innerHTML = "<svg>" + a + "</svg>";
                            var u = na.firstChild;
                            while (i.firstChild) i.removeChild(i.firstChild);
                            while (u.firstChild) i.appendChild(u.firstChild)
                        } else if (a !== o[n]) try {
                            i[n] = a
                        } catch (Si) {
                        }
                    }
                }
            }

            function aa(t, e) {
                return !t.composing && ("OPTION" === t.tagName || ia(t, e) || oa(t, e))
            }

            function ia(t, e) {
                var n = !0;
                try {
                    n = document.activeElement !== t
                } catch (Si) {
                }
                return n && t.value !== e
            }

            function oa(t, e) {
                var n = t.value, s = t._vModifiers;
                if (r(s)) {
                    if (s.number) return m(n) !== m(e);
                    if (s.trim) return n.trim() !== e.trim()
                }
                return n !== e
            }

            var ca = {create: ra, update: ra}, la = w((function (t) {
                var e = {}, n = /;(?![^(]*\))/g, s = /:(.+)/;
                return t.split(n).forEach((function (t) {
                    if (t) {
                        var n = t.split(s);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim())
                    }
                })), e
            }));

            function ua(t) {
                var e = da(t.style);
                return t.staticStyle ? A(t.staticStyle, e) : e
            }

            function da(t) {
                return Array.isArray(t) ? I(t) : "string" === typeof t ? la(t) : t
            }

            function ha(t, e) {
                var n, s = {};
                if (e) {
                    var r = t;
                    while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (n = ua(r.data)) && A(s, n)
                }
                (n = ua(t.data)) && A(s, n);
                var a = t;
                while (a = a.parent) a.data && (n = ua(a.data)) && A(s, n);
                return s
            }

            var fa, pa = /^--/, ma = /\s*!important$/, ga = function (t, e, n) {
                if (pa.test(e)) t.style.setProperty(e, n); else if (ma.test(n)) t.style.setProperty(x(e), n.replace(ma, ""), "important"); else {
                    var s = ya(e);
                    if (Array.isArray(n)) for (var r = 0, a = n.length; r < a; r++) t.style[s] = n[r]; else t.style[s] = n
                }
            }, va = ["Webkit", "Moz", "ms"], ya = w((function (t) {
                if (fa = fa || document.createElement("div").style, t = S(t), "filter" !== t && t in fa) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < va.length; n++) {
                    var s = va[n] + e;
                    if (s in fa) return s
                }
            }));

            function ba(t, e) {
                var n = e.data, a = t.data;
                if (!(s(n.staticStyle) && s(n.style) && s(a.staticStyle) && s(a.style))) {
                    var i, o, c = e.elm, l = a.staticStyle, u = a.normalizedStyle || a.style || {}, d = l || u,
                        h = da(e.data.style) || {};
                    e.data.normalizedStyle = r(h.__ob__) ? A({}, h) : h;
                    var f = ha(e, !0);
                    for (o in d) s(f[o]) && ga(c, o, "");
                    for (o in f) i = f[o], i !== d[o] && ga(c, o, null == i ? "" : i)
                }
            }

            var _a = {create: ba, update: ba}, wa = /\s+/;

            function Ca(t, e) {
                if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(wa).forEach((function (e) {
                    return t.classList.add(e)
                })) : t.classList.add(e); else {
                    var n = " " + (t.getAttribute("class") || "") + " ";
                    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                }
            }

            function Sa(t, e) {
                if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(wa).forEach((function (e) {
                    return t.classList.remove(e)
                })) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
                    var n = " " + (t.getAttribute("class") || "") + " ", s = " " + e + " ";
                    while (n.indexOf(s) >= 0) n = n.replace(s, " ");
                    n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class")
                }
            }

            function $a(t) {
                if (t) {
                    if ("object" === typeof t) {
                        var e = {};
                        return !1 !== t.css && A(e, ka(t.name || "v")), A(e, t), e
                    }
                    return "string" === typeof t ? ka(t) : void 0
                }
            }

            var ka = w((function (t) {
                    return {
                        enterClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveClass: t + "-leave",
                        leaveToClass: t + "-leave-to",
                        leaveActiveClass: t + "-leave-active"
                    }
                })), xa = X && !et, Ta = "transition", Oa = "animation", Ea = "transition", Ma = "transitionend",
                Aa = "animation", Ia = "animationend";
            xa && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ea = "WebkitTransition", Ma = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Aa = "WebkitAnimation", Ia = "webkitAnimationEnd"));
            var ja = X ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
                return t()
            };

            function La(t) {
                ja((function () {
                    ja(t)
                }))
            }

            function Da(t, e) {
                var n = t._transitionClasses || (t._transitionClasses = []);
                n.indexOf(e) < 0 && (n.push(e), Ca(t, e))
            }

            function Na(t, e) {
                t._transitionClasses && y(t._transitionClasses, e), Sa(t, e)
            }

            function Fa(t, e, n) {
                var s = Pa(t, e), r = s.type, a = s.timeout, i = s.propCount;
                if (!r) return n();
                var o = r === Ta ? Ma : Ia, c = 0, l = function () {
                    t.removeEventListener(o, u), n()
                }, u = function (e) {
                    e.target === t && ++c >= i && l()
                };
                setTimeout((function () {
                    c < i && l()
                }), a + 1), t.addEventListener(o, u)
            }

            var Ra = /\b(transform|all)(,|$)/;

            function Pa(t, e) {
                var n, s = window.getComputedStyle(t), r = (s[Ea + "Delay"] || "").split(", "),
                    a = (s[Ea + "Duration"] || "").split(", "), i = Ba(r, a), o = (s[Aa + "Delay"] || "").split(", "),
                    c = (s[Aa + "Duration"] || "").split(", "), l = Ba(o, c), u = 0, d = 0;
                e === Ta ? i > 0 && (n = Ta, u = i, d = a.length) : e === Oa ? l > 0 && (n = Oa, u = l, d = c.length) : (u = Math.max(i, l), n = u > 0 ? i > l ? Ta : Oa : null, d = n ? n === Ta ? a.length : c.length : 0);
                var h = n === Ta && Ra.test(s[Ea + "Property"]);
                return {type: n, timeout: u, propCount: d, hasTransform: h}
            }

            function Ba(t, e) {
                while (t.length < e.length) t = t.concat(t);
                return Math.max.apply(null, e.map((function (e, n) {
                    return za(e) + za(t[n])
                })))
            }

            function za(t) {
                return 1e3 * Number(t.slice(0, -1).replace(",", "."))
            }

            function Ua(t, e) {
                var n = t.elm;
                r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                var a = $a(t.data.transition);
                if (!s(a) && !r(n._enterCb) && 1 === n.nodeType) {
                    var i = a.css, o = a.type, l = a.enterClass, u = a.enterToClass, d = a.enterActiveClass,
                        h = a.appearClass, f = a.appearToClass, p = a.appearActiveClass, g = a.beforeEnter, v = a.enter,
                        y = a.afterEnter, b = a.enterCancelled, _ = a.beforeAppear, w = a.appear, C = a.afterAppear,
                        S = a.appearCancelled, $ = a.duration, k = An, x = An.$vnode;
                    while (x && x.parent) k = x.context, x = x.parent;
                    var T = !k._isMounted || !t.isRootInsert;
                    if (!T || w || "" === w) {
                        var O = T && h ? h : l, E = T && p ? p : d, M = T && f ? f : u, A = T && _ || g,
                            I = T && "function" === typeof w ? w : v, j = T && C || y, L = T && S || b,
                            D = m(c($) ? $.enter : $);
                        0;
                        var N = !1 !== i && !et, F = Va(I), P = n._enterCb = R((function () {
                            N && (Na(n, M), Na(n, E)), P.cancelled ? (N && Na(n, O), L && L(n)) : j && j(n), n._enterCb = null
                        }));
                        t.data.show || Ce(t, "insert", (function () {
                            var e = n.parentNode, s = e && e._pending && e._pending[t.key];
                            s && s.tag === t.tag && s.elm._leaveCb && s.elm._leaveCb(), I && I(n, P)
                        })), A && A(n), N && (Da(n, O), Da(n, E), La((function () {
                            Na(n, O), P.cancelled || (Da(n, M), F || (Ha(D) ? setTimeout(P, D) : Fa(n, o, P)))
                        }))), t.data.show && (e && e(), I && I(n, P)), N || F || P()
                    }
                }
            }

            function qa(t, e) {
                var n = t.elm;
                r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                var a = $a(t.data.transition);
                if (s(a) || 1 !== n.nodeType) return e();
                if (!r(n._leaveCb)) {
                    var i = a.css, o = a.type, l = a.leaveClass, u = a.leaveToClass, d = a.leaveActiveClass,
                        h = a.beforeLeave, f = a.leave, p = a.afterLeave, g = a.leaveCancelled, v = a.delayLeave,
                        y = a.duration, b = !1 !== i && !et, _ = Va(f), w = m(c(y) ? y.leave : y);
                    0;
                    var C = n._leaveCb = R((function () {
                        n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), b && (Na(n, u), Na(n, d)), C.cancelled ? (b && Na(n, l), g && g(n)) : (e(), p && p(n)), n._leaveCb = null
                    }));
                    v ? v(S) : S()
                }

                function S() {
                    C.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), h && h(n), b && (Da(n, l), Da(n, d), La((function () {
                        Na(n, l), C.cancelled || (Da(n, u), _ || (Ha(w) ? setTimeout(C, w) : Fa(n, o, C)))
                    }))), f && f(n, C), b || _ || C())
                }
            }

            function Ha(t) {
                return "number" === typeof t && !isNaN(t)
            }

            function Va(t) {
                if (s(t)) return !1;
                var e = t.fns;
                return r(e) ? Va(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }

            function Wa(t, e) {
                !0 !== e.data.show && Ua(e)
            }

            var Ga = X ? {
                create: Wa, activate: Wa, remove: function (t, e) {
                    !0 !== t.data.show ? qa(t, e) : e()
                }
            } : {}, Ka = [Hr, Gr, sa, ca, _a, Ga], Qa = Ka.concat(Br), Xa = Ir({nodeOps: $r, modules: Qa});
            et && document.addEventListener("selectionchange", (function () {
                var t = document.activeElement;
                t && t.vmodel && ri(t, "input")
            }));
            var Ya = {
                inserted: function (t, e, n, s) {
                    "select" === n.tag ? (s.elm && !s.elm._vOptions ? Ce(n, "postpatch", (function () {
                        Ya.componentUpdated(t, e, n)
                    })) : Ja(t, e, n.context), t._vOptions = [].map.call(t.options, ei)) : ("textarea" === n.tag || ur(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", ni), t.addEventListener("compositionend", si), t.addEventListener("change", si), et && (t.vmodel = !0)))
                }, componentUpdated: function (t, e, n) {
                    if ("select" === n.tag) {
                        Ja(t, e, n.context);
                        var s = t._vOptions, r = t._vOptions = [].map.call(t.options, ei);
                        if (r.some((function (t, e) {
                            return !N(t, s[e])
                        }))) {
                            var a = t.multiple ? e.value.some((function (t) {
                                return ti(t, r)
                            })) : e.value !== e.oldValue && ti(e.value, r);
                            a && ri(t, "change")
                        }
                    }
                }
            };

            function Ja(t, e, n) {
                Za(t, e, n), (tt || nt) && setTimeout((function () {
                    Za(t, e, n)
                }), 0)
            }

            function Za(t, e, n) {
                var s = e.value, r = t.multiple;
                if (!r || Array.isArray(s)) {
                    for (var a, i, o = 0, c = t.options.length; o < c; o++) if (i = t.options[o], r) a = F(s, ei(i)) > -1, i.selected !== a && (i.selected = a); else if (N(ei(i), s)) return void (t.selectedIndex !== o && (t.selectedIndex = o));
                    r || (t.selectedIndex = -1)
                }
            }

            function ti(t, e) {
                return e.every((function (e) {
                    return !N(e, t)
                }))
            }

            function ei(t) {
                return "_value" in t ? t._value : t.value
            }

            function ni(t) {
                t.target.composing = !0
            }

            function si(t) {
                t.target.composing && (t.target.composing = !1, ri(t.target, "input"))
            }

            function ri(t, e) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0), t.dispatchEvent(n)
            }

            function ai(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : ai(t.componentInstance._vnode)
            }

            var ii = {
                bind: function (t, e, n) {
                    var s = e.value;
                    n = ai(n);
                    var r = n.data && n.data.transition,
                        a = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                    s && r ? (n.data.show = !0, Ua(n, (function () {
                        t.style.display = a
                    }))) : t.style.display = s ? a : "none"
                }, update: function (t, e, n) {
                    var s = e.value, r = e.oldValue;
                    if (!s !== !r) {
                        n = ai(n);
                        var a = n.data && n.data.transition;
                        a ? (n.data.show = !0, s ? Ua(n, (function () {
                            t.style.display = t.__vOriginalDisplay
                        })) : qa(n, (function () {
                            t.style.display = "none"
                        }))) : t.style.display = s ? t.__vOriginalDisplay : "none"
                    }
                }, unbind: function (t, e, n, s, r) {
                    r || (t.style.display = t.__vOriginalDisplay)
                }
            }, oi = {model: Ya, show: ii}, ci = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

            function li(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options.abstract ? li($n(e.children)) : t
            }

            function ui(t) {
                var e = {}, n = t.$options;
                for (var s in n.propsData) e[s] = t[s];
                var r = n._parentListeners;
                for (var a in r) e[S(a)] = r[a];
                return e
            }

            function di(t, e) {
                if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {props: e.componentOptions.propsData})
            }

            function hi(t) {
                while (t = t.parent) if (t.data.transition) return !0
            }

            function fi(t, e) {
                return e.key === t.key && e.tag === t.tag
            }

            var pi = function (t) {
                return t.tag || Le(t)
            }, mi = function (t) {
                return "show" === t.name
            }, gi = {
                name: "transition", props: ci, abstract: !0, render: function (t) {
                    var e = this, n = this.$slots.default;
                    if (n && (n = n.filter(pi), n.length)) {
                        0;
                        var s = this.mode;
                        0;
                        var r = n[0];
                        if (hi(this.$vnode)) return r;
                        var a = li(r);
                        if (!a) return r;
                        if (this._leaving) return di(t, r);
                        var i = "__transition-" + this._uid + "-";
                        a.key = null == a.key ? a.isComment ? i + "comment" : i + a.tag : o(a.key) ? 0 === String(a.key).indexOf(i) ? a.key : i + a.key : a.key;
                        var c = (a.data || (a.data = {})).transition = ui(this), l = this._vnode, u = li(l);
                        if (a.data.directives && a.data.directives.some(mi) && (a.data.show = !0), u && u.data && !fi(a, u) && !Le(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                            var d = u.data.transition = A({}, c);
                            if ("out-in" === s) return this._leaving = !0, Ce(d, "afterLeave", (function () {
                                e._leaving = !1, e.$forceUpdate()
                            })), di(t, r);
                            if ("in-out" === s) {
                                if (Le(a)) return l;
                                var h, f = function () {
                                    h()
                                };
                                Ce(c, "afterEnter", f), Ce(c, "enterCancelled", f), Ce(d, "delayLeave", (function (t) {
                                    h = t
                                }))
                            }
                        }
                        return r
                    }
                }
            }, vi = A({tag: String, moveClass: String}, ci);
            delete vi.mode;
            var yi = {
                props: vi, beforeMount: function () {
                    var t = this, e = this._update;
                    this._update = function (n, s) {
                        var r = In(t);
                        t.__patch__(t._vnode, t.kept, !1, !0), t._vnode = t.kept, r(), e.call(t, n, s)
                    }
                }, render: function (t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), s = this.prevChildren = this.children, r = this.$slots.default || [], a = this.children = [], i = ui(this), o = 0; o < r.length; o++) {
                        var c = r[o];
                        if (c.tag) if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) a.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = i; else ;
                    }
                    if (s) {
                        for (var l = [], u = [], d = 0; d < s.length; d++) {
                            var h = s[d];
                            h.data.transition = i, h.data.pos = h.elm.getBoundingClientRect(), n[h.key] ? l.push(h) : u.push(h)
                        }
                        this.kept = t(e, null, l), this.removed = u
                    }
                    return t(e, null, a)
                }, updated: function () {
                    var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(bi), t.forEach(_i), t.forEach(wi), this._reflow = document.body.offsetHeight, t.forEach((function (t) {
                        if (t.data.moved) {
                            var n = t.elm, s = n.style;
                            Da(n, e), s.transform = s.WebkitTransform = s.transitionDuration = "", n.addEventListener(Ma, n._moveCb = function t(s) {
                                s && s.target !== n || s && !/transform$/.test(s.propertyName) || (n.removeEventListener(Ma, t), n._moveCb = null, Na(n, e))
                            })
                        }
                    })))
                }, methods: {
                    hasMove: function (t, e) {
                        if (!xa) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach((function (t) {
                            Sa(n, t)
                        })), Ca(n, e), n.style.display = "none", this.$el.appendChild(n);
                        var s = Pa(n);
                        return this.$el.removeChild(n), this._hasMove = s.hasTransform
                    }
                }
            };

            function bi(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function _i(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function wi(t) {
                var e = t.data.pos, n = t.data.newPos, s = e.left - n.left, r = e.top - n.top;
                if (s || r) {
                    t.data.moved = !0;
                    var a = t.elm.style;
                    a.transform = a.WebkitTransform = "translate(" + s + "px," + r + "px)", a.transitionDuration = "0s"
                }
            }

            var Ci = {Transition: gi, TransitionGroup: yi};
            $s.config.mustUseProp = zs, $s.config.isReservedTag = ir, $s.config.isReservedAttr = Ps, $s.config.getTagNamespace = or, $s.config.isUnknownElement = lr, A($s.options.directives, oi), A($s.options.components, Ci), $s.prototype.__patch__ = X ? Xa : j, $s.prototype.$mount = function (t, e) {
                return t = t && X ? dr(t) : void 0, Dn(this, t, e)
            }, X && setTimeout((function () {
                U.devtools && lt && lt.emit("init", $s)
            }), 0), e["default"] = $s
        }.call(this, n("24aa"))
    }, "2c97": function (t, e, n) {
        "use strict";
        n("7b96")
    }, "2d53": function (t, e, n) {
    }, "2d83": function (t, e, n) {
        "use strict";
        var s = n("387f");
        t.exports = function (t, e, n, r, a) {
            var i = new Error(t);
            return s(i, e, n, r, a)
        }
    }, "2e49": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return FeedbackFormMessage
        }));
        var s = n("5c99");

        class FeedbackFormMessage extends s["l"] {
            constructor() {
                super(), this.type = s["d"], this.temp = !0
            }
        }
    }, "2e67": function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__)
        }
    }, "2eff": function (t, e, n) {
        "use strict";
        n("a1a7")
    }, "2fd8": function (t, e, n) {
    }, "30b5": function (t, e, n) {
        "use strict";
        var s = n("c532");

        function r(t) {
            return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        t.exports = function (t, e, n) {
            if (!e) return t;
            var a;
            if (n) a = n(e); else if (s.isURLSearchParams(e)) a = e.toString(); else {
                var i = [];
                s.forEach(e, (function (t, e) {
                    null !== t && "undefined" !== typeof t && (s.isArray(t) ? e += "[]" : t = [t], s.forEach(t, (function (t) {
                        s.isDate(t) ? t = t.toISOString() : s.isObject(t) && (t = JSON.stringify(t)), i.push(r(e) + "=" + r(t))
                    })))
                })), a = i.join("&")
            }
            if (a) {
                var o = t.indexOf("#");
                -1 !== o && (t = t.slice(0, o)), t += (-1 === t.indexOf("?") ? "?" : "&") + a
            }
            return t
        }
    }, 3360: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return (0, s.withParams)({type: "and"}, (function () {
                for (var t = this, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                return e.length > 0 && e.reduce((function (e, n) {
                    return e && n.apply(t, s)
                }), !0)
            }))
        };
        e.default = r
    }, "33ff": function (t, e, n) {
    }, "362f": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.shouldShow && t.text ? n("div", {staticClass: "return-time"}, [n("div", {staticClass: "text"}, [t._v(" " + t._s(t.text) + " ")]), t._v(" Â  "), n("div", {staticClass: "icon"}, [t.showIcon ? n("SvgIcon", {
                attrs: {
                    icon: "timer",
                    classes: "-md"
                }
            }) : t._e()], 1)]) : t._e()
        }, r = [];

        function a(t, e) {
            let n = t.getMinutes().toString(), s = t.getHours().toString();
            1 === n.length && (n = "0" + n), 1 === s.length && (s = "0" + s);
            const r = new Date(e.valueOf() + 864e5),
                a = t.getDate() == e.getDate() && t.getMonth() == e.getMonth() && t.getFullYear() == e.getFullYear(),
                i = t.getDate() == r.getDate() && t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear();
            return {date: t, hours: s, minutes: n, isToday: a, isTomorrow: i}
        }

        function i(t, e) {
            let n = t, s = 1, r = 0;
            do {
                if (e.includes(n)) break;
                r += 1, n >= 6 ? n = 0 : n += 1, s += 1
            } while (s <= 7);
            return r
        }

        var o = (t, e, n) => {
            const s = [...e], r = [...n], o = s.indexOf(7);
            -1 !== o && (s[o] = 0), s.sort(), r.sort();
            const c = new Date, l = new Date(c.toLocaleString("en-US", {timeZone: t})), u = l - c, d = l.getDay();
            let h = i(d, s);
            const f = l.getHours(), p = l.getMinutes();
            let m = f;
            h > 0 ? m = 1 : p > 0 && (m += 1);
            let g = m;
            do {
                if (r.includes(m)) break;
                if (m >= 24) {
                    m = 1, g = 1, h += 1;
                    let t = d + h;
                    t > 6 && (t = 0), h = i(t, s) + 1
                } else m += 1, g += 1
            } while (g <= 24);
            const v = l;
            v.setDate(l.getDate() + h), v.setHours(m), v.setMinutes(0), v.setSeconds(0), v.setMilliseconds(0);
            let y = null;
            return y = u > 0 ? v.getTime() - Math.abs(u) : v.getTime() + Math.abs(u), y = new Date(y), y.setHours(y.getHours() + Math.round(y.getMinutes() / 60)), y.setMinutes(0), a(y, c)
        }, c = n("371c"), l = n("0032"), u = {
            components: {SvgIcon: l["a"]},
            props: {showIcon: {type: Boolean, required: !1, default: !0}},
            computed: {
                text() {
                    const {timezone: t, days: e, hours: n} = this.$root.$stores.chat.state.settings.schedule,
                        s = o(t, e, n);
                    if (c["a"].info("chat: return time", s), !s.isToday && !s.isTomorrow) return "";
                    const r = s.isToday ? this.$t("_.TODAY") : this.$t("_.TOMORROW"), a = `${s.hours}:${s.minutes}`;
                    return this.$t("RETURN_TIME.TEXT", {day: r.toLowerCase(), time: a})
                }, shouldShow() {
                    const {schedule: t, scheduled: e} = this.$root.$stores.chat.state.settings;
                    if (!e) return !1;
                    const {timezone: n, days: s = [], hours: r = []} = t;
                    return n && n.length > 0 && s.length > 0 && r.length > 0
                }
            }
        }, d = u, h = (n("2eff"), n("2877")), f = Object(h["a"])(d, s, r, !1, null, "06735f00", null);
        e["a"] = f.exports
    }, "371c": function (t, e, n) {
        "use strict";

        function s() {
            return "on" === localStorage.REPLAIN_DEBUG
        }

        const r = {
            label: "color: #999;",
            scope: "color: #157FFB; font-weight: 600; text-transform: uppercase",
            text: "color: #333"
        };
        e["a"] = {
            info(t, ...e) {
                if (s()) {
                    const [n, ...s] = t.split(":");
                    console.log(`%c[RE:PLAIN] %c${n}%c${s}`, r.label, r.scope, r.text, ...e)
                }
            }, warn(t, ...e) {
                if (s()) {
                    const [n, ...s] = t.split(":");
                    console.warn(`%c[RE:PLAIN] %c${n}%c${s}`, r.label, r.scope, r.text, ...e)
                }
            }, error(t) {
                s() && console.error(t)
            }
        }
    }, "387f": function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, s, r) {
            return t.config = e, n && (t.code = n), t.request = s, t.response = r, t.isAxiosError = !0, t.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }, t
        }
    }, 3934: function (t, e, n) {
        "use strict";
        var s = n("c532");
        t.exports = s.isStandardBrowserEnv() ? function () {
            var t, e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

            function r(t) {
                var s = t;
                return e && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }

            return t = r(window.location.href), function (e) {
                var n = s.isString(e) ? r(e) : e;
                return n.protocol === t.protocol && n.host === t.host
            }
        }() : function () {
            return function () {
                return !0
            }
        }()
    }, "39c3": function (t, e, n) {
        var s = {
            "./ar.json": ["af08", "lang-ar-json"],
            "./bg.json": ["dcd0", "lang-bg-json"],
            "./cs.json": ["c686", "lang-cs-json"],
            "./de.json": ["6ce2", "lang-de-json"],
            "./el.json": ["f184", "lang-el-json"],
            "./en.json": ["edd4", "lang-en-json"],
            "./es.json": ["a306", "lang-es-json"],
            "./fa.json": ["15ad", "lang-fa-json"],
            "./fr.json": ["f693", "lang-fr-json"],
            "./he.json": ["ba8d", "lang-he-json"],
            "./hi.json": ["7a03", "lang-hi-json"],
            "./id.json": ["210c", "lang-id-json"],
            "./it.json": ["0825", "lang-it-json"],
            "./ja.json": ["0423", "lang-ja-json"],
            "./ka.json": ["c5cb", "lang-ka-json"],
            "./ms.json": ["2060", "lang-ms-json"],
            "./nl.json": ["a625", "lang-nl-json"],
            "./no.json": ["f947", "lang-no-json"],
            "./pl.json": ["89b2", "lang-pl-json"],
            "./pt.json": ["5d67", "lang-pt-json"],
            "./ro.json": ["9542", "lang-ro-json"],
            "./ru.json": ["7704", "lang-ru-json"],
            "./sk.json": ["3da9", "lang-sk-json"],
            "./sv.json": ["4c5b", "lang-sv-json"],
            "./th.json": ["8680", "lang-th-json"],
            "./ua.json": ["94b0", "lang-ua-json"],
            "./uk.json": ["62ea", "lang-uk-json"],
            "./uz.json": ["7500", "lang-uz-json"],
            "./vi.json": ["aced", "lang-vi-json"],
            "./zh.json": ["3504", "lang-zh-json"]
        };

        function r(t) {
            if (!n.o(s, t)) return Promise.resolve().then((function () {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }));
            var e = s[t], r = e[0];
            return n.e(e[1]).then((function () {
                return n.t(r, 3)
            }))
        }

        r.keys = function () {
            return Object.keys(s)
        }, r.id = "39c3", t.exports = r
    }, "3a54": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.regex)("alphaNum", /^[a-zA-Z0-9]*$/);
        e.default = r
    }, "3af8": function (t, e, n) {
    }, "3dba": function (t, e, n) {
        "use strict";
        e["a"] = t => JSON.stringify(t).replace(/,/g, ";").replace(/"/g, "").slice(1, -1)
    }, "3f93": function (t, e, n) {
        "use strict";
        n("2fd8")
    }, 4128: function (t, e, n) {
        "use strict";
        e["a"] = t => {
            if (0 === t.length) return !0;
            const e = t.replace(/\D+/g, "");
            return e.length >= 6 && e.length <= 17 && !e.split("").every((t, e, n) => t === n[0])
        }
    }, 4362: function (t, e, n) {
        e.nextTick = function (t) {
            var e = Array.prototype.slice.call(arguments);
            e.shift(), setTimeout((function () {
                t.apply(null, e)
            }), 0)
        }, e.platform = e.arch = e.execPath = e.title = "browser", e.pid = 1, e.browser = !0, e.env = {}, e.argv = [], e.binding = function (t) {
            throw new Error("No such module. (Possibly not yet loaded)")
        }, function () {
            var t, s = "/";
            e.cwd = function () {
                return s
            }, e.chdir = function (e) {
                t || (t = n("df7c")), s = t.resolve(e, s)
            }
        }(), e.exit = e.kill = e.umask = e.dlopen = e.uptime = e.memoryUsage = e.uvCounters = function () {
        }, e.features = {}
    }, "45b8": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.regex)("numeric", /^[0-9]*$/);
        e.default = r
    }, 4615: function (t, e, n) {
    }, "467f": function (t, e, n) {
        "use strict";
        var s = n("2d83");
        t.exports = function (t, e, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? e(s("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
        }
    }, "46bc": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "maxValue", max: t}, (function (e) {
                return !(0, s.req)(e) || (!/\s/.test(e) || e instanceof Date) && +e <= +t
            }))
        };
        e.default = r
    }, "46cf": function (t, e, n) {
        "use strict";
        n("de7c")
    }, "46ef": function (t, e, n) {
        "use strict";
        var s = n("c53a"), r = n("471c"), a = n("371c"), i = n("ef23");
        let o = null, c = null;
        e["a"] = class {
            constructor(t, e, n) {
                a["a"].info("auto feedback form: initialized", t.autoFeedback), o = n.chat, c = e, this.settings = t.autoFeedback, this.isShown = !1
            }

            messengers() {
                const t = this.settings.messengers;
                return 0 === this.contactsText().length ? t.filter(t => "contacts" !== t) : t
            }

            contactsText() {
                return this.settings.contactsText || ""
            }

            values() {
                return o.state.form || {}
            }

            isEnable() {
                return this.messengers().length > 0
            }

            shouldShow() {
                if (this.isShown || !s["a"].isOnline(o)) return !1;
                const {lastAssignDate: t} = o.state;
                return !t || r["a"].hours(t) > 0
            }

            show(t) {
                a["a"].info(`auto feedback form: show after ${this.settings.timeout} sec.`), setTimeout(() => {
                    this.shouldShow() ? (a["a"].info("auto feedback form: show"), this.isShown = !0, o.addMessage(new i["a"]), t && t()) : a["a"].info("auto feedback form: skip, because operator is here")
                }, 1e3 * this.settings.timeout)
            }

            submit(t) {
                a["a"].info("auto feedback form: submit", t);
                const e = Object.keys(t)[0], n = t[e], s = o.form();
                s[e] = n, o.setForm(s), c.send("AUTO_FEEDBACK_FORM", {type: e, payload: n})
            }
        }
    }, "471c": function (t, e, n) {
        "use strict";
        e["a"] = {
            minutes: t => Math.floor((Date.now() - t) / 6e4),
            hours: t => Math.floor((Date.now() - t) / 36e5),
            week: t => Math.floor((Date.now() - t) / 6048e5)
        }
    }, "472d": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return GalleryCard
        }));

        class GalleryCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.images = t.images
            }
        }
    }, 4734: function (t, e, n) {
        "use strict";
        n("8c15")
    }, "481c": function (t, e, n) {
    }, "4a50": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return BannerMessage
        }));
        var s = n("5c99");

        class BannerMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["b"], this.text = t.text, this.name = t.name, this.url = t.url, this.image = t.image, this.hide = t.hide, this.popup = t.popup, this.dialog = t.dialog, this.temp = !0
            }
        }
    }, "4a7b": function (t, e, n) {
        "use strict";
        var s = n("c532");
        t.exports = function (t, e) {
            e = e || {};
            var n = {};

            function r(t, e) {
                return s.isPlainObject(t) && s.isPlainObject(e) ? s.merge(t, e) : s.isPlainObject(e) ? s.merge({}, e) : s.isArray(e) ? e.slice() : e
            }

            function a(n) {
                return s.isUndefined(e[n]) ? s.isUndefined(t[n]) ? void 0 : r(void 0, t[n]) : r(t[n], e[n])
            }

            function i(t) {
                if (!s.isUndefined(e[t])) return r(void 0, e[t])
            }

            function o(n) {
                return s.isUndefined(e[n]) ? s.isUndefined(t[n]) ? void 0 : r(void 0, t[n]) : r(void 0, e[n])
            }

            function c(n) {
                return n in e ? r(t[n], e[n]) : n in t ? r(void 0, t[n]) : void 0
            }

            var l = {
                url: i,
                method: i,
                data: i,
                baseURL: o,
                transformRequest: o,
                transformResponse: o,
                paramsSerializer: o,
                timeout: o,
                timeoutMessage: o,
                withCredentials: o,
                adapter: o,
                responseType: o,
                xsrfCookieName: o,
                xsrfHeaderName: o,
                onUploadProgress: o,
                onDownloadProgress: o,
                decompress: o,
                maxContentLength: o,
                maxBodyLength: o,
                transport: o,
                httpAgent: o,
                httpsAgent: o,
                cancelToken: o,
                socketPath: o,
                responseEncoding: o,
                validateStatus: c
            };
            return s.forEach(Object.keys(t).concat(Object.keys(e)), (function (t) {
                var e = l[t] || a, r = e(t);
                s.isUndefined(r) && e !== c || (n[t] = r)
            })), n
        }
    }, "4a99": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return CallbackCard
        }));

        class CallbackCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.module = !0
            }
        }
    }, "506d": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return CatalogCard
        }));

        class CatalogCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.catalogId = t.catalogId
            }
        }
    }, 5270: function (t, e, n) {
        "use strict";
        var s = n("c532"), r = n("c401"), a = n("2e67"), i = n("2444"), o = n("7a77");

        function c(t) {
            if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new o("canceled")
        }

        t.exports = function (t) {
            c(t), t.headers = t.headers || {}, t.data = r.call(t, t.data, t.headers, t.transformRequest), t.headers = s.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), s.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
                delete t.headers[e]
            }));
            var e = t.adapter || i.adapter;
            return e(t).then((function (e) {
                return c(t), e.data = r.call(t, e.data, e.headers, t.transformResponse), e
            }), (function (e) {
                return a(e) || (c(t), e && e.response && (e.response.data = r.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
            }))
        }
    }, "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        var s = n("2b0e"), r = n("f121"), a = n("f11f"), i = n("371c");
        const o = Object(a["a"])(), c = {
            tabId: Date.now(), lastTime: 0, enabled: !1, storageKey: "crosstab", init(t) {
                this.storageKey = t
            }, onTabOpen() {
                this.enabled && (this.enabled = !1)
            }, validateChanges(t) {
                const {lastTime: e, tab: n} = t;
                return Number(e) > this.lastTime && this.tabId !== Number(n)
            }, updateStorage(t) {
                if (t.key !== this.storageKey) return;
                const e = JSON.parse(t.newValue);
                if (!this.validateChanges(e)) return;
                i["a"].warn("crosstab: handle", e), this.enabled = !0;
                const {name: n, payload: s} = e;
                o.emit(n, s)
            }, emit(t, e) {
                i["a"].warn("crosstab: emit", t, e);
                const n = {name: t, payload: e};
                n.tab = this.tabId, n.lastTime = Date.now(), this.lastTime = n.lastTime, localStorage.setItem(this.storageKey, JSON.stringify(n))
            }, on(t, e) {
                return i["a"].warn("crosstab: on", t), o.on(t, e)
            }
        };
        document.addEventListener("visibilitychange", () => {
            document.hidden || c.onTabOpen()
        }), window.addEventListener("storage", c.updateStorage.bind(c));
        var l = c, u = n("8295"), d = n("3dba"), h = n("6dc6"), f = n("9f42");
        const p = Object(h["d"])(), m = window.parent, g = m.document, v = "HIDE", y = "OPEN";
        let b = null, _ = 0;
        const w = 2147e6, C = {width: 70, height: 70}, S = {
            position: "fixed !important",
            left: "0px !important",
            top: "0px !important",
            width: "100% !important",
            height: "100% !important",
            margin: "0 !important",
            padding: "0 !important",
            overflow: "hidden !important",
            opacity: "1 !important"
        }, $ = {
            position: "fixed",
            top: "auto",
            left: "auto",
            bottom: "20px",
            right: "20px",
            width: C.width + "px",
            height: C.height + "px",
            "z-index": w,
            transform: "translate3d(0, 0, 0)",
            "background-color": "transparent",
            border: "none !important"
        }, k = {
            display: "block",
            width: "360px",
            height: "100%",
            top: "auto",
            bottom: "0px",
            left: "auto",
            right: "0px"
        }, x = {
            display: "block !important",
            visibility: "visible !important",
            background: "none transparent !important",
            opacity: "1 !important",
            overflow: "visible !important",
            position: "absolute !important",
            left: "0 !important",
            top: "0 !important",
            width: "100% !important",
            "min-width": "auto !important",
            "max-width": "100vw !important",
            height: "100% !important",
            "min-height": "auto !important",
            "max-height": "100% !important",
            "z-index": w + " !important",
            transition: "none !important",
            margin: "0 !important",
            padding: "0 !important",
            border: "none !important"
        };
        var T = class {
            constructor(t, e) {
                this.wrapper = t, this.iframe = e, this.body = t.parentElement, this.isSmallBreakpoint = u["a"].isSmallBreakpoint(), this.mountedComponents = {}, this.state, u["a"].onResize(t => {
                    this.isSmallBreakpoint = t, this.isOpenState() && this.setOpenStateStyles()
                }), m.addEventListener("load", () => {
                    setTimeout(() => {
                        this.iframe.style.cssText = Object(d["a"])(x)
                    }, 0)
                })
            }

            bringToFront() {
                this.wrapper.style.zIndex = w + 10
            }

            resetFront() {
                this.wrapper.style.zIndex = w
            }

            isHideState() {
                return this.state === v
            }

            isOpenState() {
                return this.state === y
            }

            setHideState() {
                i["a"].info("wrapper: set hide state"), this.state = v, this.setHideStateStyles()
            }

            setOpenState() {
                i["a"].info("wrapper: set open state"), this.state = y, this.setOpenStateStyles()
            }

            setInvisibleMode() {
                i["a"].info("wrapper: set invisible mode"), C.width = 0, C.height = 0, $.width = C.width + "px", $.height = C.height + "px", this.applyStyles({
                    width: "0px",
                    height: "0px"
                })
            }

            disableRTLMode() {
                i["a"].info("wrapper: disable RTL mode"), $.left = "auto", $.right = "20px", k.left = "auto", k.right = "0px", this.applyStyles({
                    right: $.right,
                    left: $.left
                })
            }

            setRTLMode() {
                i["a"].info("wrapper: set RTL mode"), $.right = $.left, $.left = "20px", k.right = "auto", k.left = "0px", this.applyStyles({
                    right: $.right,
                    left: $.left
                })
            }

            getResponsivePosition(t) {
                let e = t;
                return u["a"].size().width < 768 && (e = Math.floor(e / 1), e < 15 && (e = 15)), e
            }

            setCustomIconPosition(t) {
                i["a"].info("wrapper: set custom icon position", t);
                const e = {};
                "number" === typeof t.bottom ? (e.bottom = this.getResponsivePosition(t.bottom) + "px", e.top = "auto") : "number" === typeof t.top && (e.bottom = "auto", e.top = this.getResponsivePosition(t.top) + "px", k.bottom = "auto", k.top = "0px"), "number" === typeof t.right ? (e.right = this.getResponsivePosition(t.right) + "px", e.left = "auto") : "number" === typeof t.left && (e.right = "auto", e.left = this.getResponsivePosition(t.left) + "px", k.right = "auto", k.left = "0px"), $.top = e.top, $.right = e.right, $.bottom = e.bottom, $.left = e.left, this.applyStyles({
                    top: $.top,
                    right: $.right,
                    bottom: $.bottom,
                    left: $.left
                })
            }

            setOpenStateStyles() {
                const t = Object.assign({}, k);
                !0 === this.isSmallBreakpoint && (t.width = "100%"), this.applyStyles(t)
            }

            setHideStateStyles() {
                this.iframe.style.cssText = Object(d["a"])(x), this.applyStyles($)
            }

            mountComponent(t, e, n) {
                i["a"].info("wrapper: mount component", t, e, n), this.mountedComponents = Object.assign(this.mountedComponents, {
                    [t]: {
                        width: e,
                        height: n
                    }
                }), this.resize()
            }

            unmountComponent(t) {
                i["a"].info("wrapper: unmount component", t), delete this.mountedComponents[t], this.resize()
            }

            resize() {
                if (this.isOpenState()) return void i["a"].info("wrapper: skip resize, because the open state");
                const t = {width: C.width, height: C.height};
                for (const e of Object.keys(this.mountedComponents)) {
                    const n = this.mountedComponents[e];
                    n.width > t.width && (t.width = n.width), n.height > t.height && (t.height = n.height)
                }
                i["a"].info("wrapper: resize with size", t, this.mountedComponents), this.applyStyles({
                    width: t.width + "px",
                    height: t.height + "px"
                })
            }

            beforeAppleStylesForMobile(t) {
                if (!p) return;
                const e = this.isOpenState();
                e && 0 === _ && "100%" !== t.width || (e ? (_ = g.documentElement.scrollTop, null === b && (b = this.body.style.cssText), this.body.style.cssText = Object(d["a"])(S)) : e || null === b || (this.body.style.cssText = b), !e && _ > 0 && (g.documentElement.scrollTop = _, _ = 0))
            }

            applyStyles(t) {
                this.beforeAppleStylesForMobile(t), this.wrapper.style.cssText = Object(d["a"])(Object.assign({}, $, t)), f["a"].wrapper.triggerResize()
            }
        }, O = n("9225");
        let E = {};
        var M = {
            state: null, init(t) {
                i["a"].info("banner store: init"), E = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {current: t = "", info: e = {}} = E.banners || {};
                return {current: t, info: e}
            }, save() {
                E.save({banners: this.state})
            }, setCurrentRotation(t) {
                i["a"].info("banner store: set current rotation", t), this.state.current = t.current, this.state.info = t.info, this.save()
            }
        };
        let A = {};
        var I = {
            state: null, init(t) {
                i["a"].info("callback store: init"), A = t;
                const e = {requestDate: null};
                this.state = s["default"].observable(Object.assign(e, A.data.callback))
            }, save() {
                A.save({callback: this.state})
            }, requestDate() {
                return this.state.requestDate
            }, setRequestDate() {
                i["a"].info("callback store: set request date"), this.state.requestDate = Date.now(), this.save()
            }
        };
        let j = {};
        var L = {
            state: null, init(t) {
                i["a"].info("departments store: init"), j = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {departmentId: t = null, dateUpdate: e = null} = j.departments || {};
                return {departmentId: t, dateUpdate: e}
            }, save() {
                j.save({departments: this.state})
            }, departmentId() {
                return this.state.departmentId
            }, dateUpdate() {
                return this.state.dateUpdate
            }, setDepartment(t) {
                i["a"].info("departments store: set department", t), this.state.departmentId = t, this.state.dateUpdate = Date.now(), this.save()
            }
        };
        let D = {};
        var N = {
            state: null, init(t) {
                i["a"].info("forms store: init"), D = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {shownContactForm: t = !1} = D.forms || {};
                return {shownContactForm: t}
            }, save() {
                D.save({forms: this.state})
            }, setShownContactForm() {
                i["a"].info("forms store: set shown contact form"), this.state.shownContactForm = !0, this.save()
            }
        };
        let F = {};
        var R = {
            state: null, init(t) {
                i["a"].info("quality control store: init"), F = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {shownDate: t = "", countOperatorMessages: e = 0} = F.qualityControl || {};
                return {shownDate: t, countOperatorMessages: e}
            }, save() {
                F.save({qualityControl: this.state})
            }, setShownDate() {
                i["a"].info("quality control store: set shown date"), this.state.shownDate = Date.now(), this.save()
            }, updateCountOperatorMessages() {
                i["a"].info("quality control store: update operator messages count"), this.state.countOperatorMessages++, this.save()
            }, resetCountOperatorMessages() {
                i["a"].info("quality control store: reset operator messages count"), this.state.countOperatorMessages = 0, this.save()
            }
        };
        let P = {};
        var B = {
            state: null, init(t) {
                i["a"].info("suggests store: init"), P = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {used: t = []} = P.suggests || {};
                return {used: t}
            }, save() {
                P.save({suggests: this.state})
            }, setUsed(t) {
                i["a"].info("suggests store: set used", t), this.state.used = t, this.save()
            }
        };
        let z = {};
        var U = {
            state: null, init(t) {
                i["a"].info("video welcome store: init"), z = t;
                const e = {};
                this.state = s["default"].observable(Object.assign(e, this.fromStorage()))
            }, fromStorage() {
                const {shownDate: t = null} = z.videoWelcome || {};
                return {shownDate: t}
            }, save() {
                z.save({videoWelcome: this.state})
            }, setShownDate() {
                i["a"].info("video welcome store: set shown date"), this.state.shownDate = Date.now(), this.save()
            }
        };
        let q = {};
        var H = {
                state: null, init(t) {
                    i["a"].info("video store: init"), q = t;
                    const e = {shownDate: null};
                    this.state = s["default"].observable(Object.assign(e, q.data.video))
                }, save() {
                    q.save({video: this.state})
                }, shownDate() {
                    return this.state.shownDate
                }, setShownDate() {
                    i["a"].info("video store: set shown date"), this.state.shownDate = Date.now(), this.save()
                }
            }, V = n("80eb"), W = n("e5a3"), G = n("5c99"), K = n("6d45"), Q = n("c0cb"), X = n("4a50"), Y = n("ef23"),
            J = n("01f8"), Z = n("2e49"), tt = n("efa7"), et = n("acbe"), nt = n("c208"), st = n("bfb0");

        function rt(t) {
            return new Q["a"](t.message)
        }

        function at(t) {
            return new W["a"](t.name, t.url)
        }

        function it() {
            return new J["a"]
        }

        function ot() {
            return new Z["a"]
        }

        function ct(t) {
            return new K["b"](t.message)
        }

        function lt() {
            return new Y["a"]
        }

        function ut(t) {
            return new X["a"](t)
        }

        function dt(t) {
            return new nt["a"](t)
        }

        function ht(t) {
            return new et["a"](t.suggests)
        }

        function ft(t) {
            return new tt["a"](t.step)
        }

        function pt() {
            return new st["a"]
        }

        var mt = t => {
            const e = [];
            let n = 0;
            for (const s of t) {
                let t = null;
                if (!(s.type === G["k"] && (n++, n > 1))) {
                    switch (s.type) {
                        case G["e"]:
                            t = at(s);
                            break;
                        case G["c"]:
                            t = it(s);
                            break;
                        case G["d"]:
                            t = ot(s);
                            break;
                        case G["g"]:
                            t = ct(s);
                            break;
                        case G["i"]:
                            s.message && s.message.length > 0 && (t = rt(s));
                            break;
                        case G["a"]:
                            t = lt(s);
                            break;
                        case G["b"]:
                            t = ut(s);
                            break;
                        case G["k"]:
                            t = dt(s);
                            break;
                        case G["h"]:
                            t = ht(s);
                            break;
                        case G["f"]:
                            t = ft(s);
                            break;
                        case G["j"]:
                            t = pt(s);
                            break
                    }
                    t && (t.time = s.time, t.sender = s.sender, t.senderType = s.senderType, t.status = s.status, e.push(t))
                }
            }
            return e
        };
        const gt = t => "REPLAIN_" + t;
        var vt = class {
            constructor(t) {
                this.chatId = t, this.data = {}, this._messages = [], this.init()
            }

            init() {
                let t = localStorage.getItem(gt(this.chatId));
                if (t) return this.data = JSON.parse(t) || {}, void i["a"].info("storage: init with exist data", this.data);
                i["a"].info("storage: init with empty data"), this.save({})
            }

            replaceData(t) {
                i["a"].warn("storage: replace data", this.data), this.data = t
            }

            get clientId() {
                return this.data.clientId
            }

            get token() {
                return this.data.token
            }

            get operator() {
                return this.data.operator
            }

            get countUnreaded() {
                return this.data.countUnreaded
            }

            get lastOpenDate() {
                return this.data.lastOpenDate
            }

            get lastMessageDate() {
                return this.data.lastMessageDate
            }

            get lastAssignDate() {
                return this.data.lastAssignDate
            }

            get countOwnMessages() {
                return this.data.countOwnMessages
            }

            get messages() {
                return 0 === this._messages.length && (this._messages = mt(this.data.messages || [])), this._messages
            }

            get form() {
                return this.data.form
            }

            get notification() {
                return this.data.notification
            }

            get forms() {
                return this.data.forms
            }

            get banners() {
                return this.data.banners
            }

            get videoWelcome() {
                return this.data.videoWelcome
            }

            get suggests() {
                return this.data.suggests
            }

            get departments() {
                return this.data.departments
            }

            get qualityControl() {
                return this.data.qualityControl
            }

            get lastOperatorMessageDate() {
                return this.data.lastOperatorMessageDate
            }

            refresh() {
                let t = localStorage.getItem(gt(this.chatId));
                if (t) return this._messages = [], this.data = JSON.parse(t) || {}, void i["a"].info("storage: refresh with data", this.data)
            }

            save(t) {
                i["a"].info("storage: save data", t), this.data = Object.assign(this.data, t), this.data.lastChanged = Date.now(), localStorage.setItem(gt(this.chatId), JSON.stringify(this.data))
            }
        };
        const yt = "HIDE", bt = "OPEN", _t = "default", wt = "CALLBACK";
        let Ct = null, St = {}, $t = null;
        const kt = [];
        var xt = {
            state: null, init(t, e, n) {
                i["a"].info("chat store: init"), St = e, $t = n;
                const r = {
                    id: t,
                    pending: !1,
                    command: null,
                    settings: {},
                    state: yt,
                    mode: _t,
                    connected: !1,
                    darkTheme: !1,
                    message: "",
                    parameters: {},
                    departmentId: null,
                    initialized: !1
                };
                this.state = s["default"].observable(Object.assign(r, this.fromStorage())), $t.on("ADD_MESSAGE", t => {
                    this.addMessage(mt([t])[0])
                }), $t.on("SET_DEPARTMENT", t => {
                    this.setDepartment(t)
                }), $t.on("UPDATE_LAST_OPERATOR_MESSAGE_DATE", t => {
                    this.updateLastOperatorMessageDate(t)
                })
            }, fromStorage() {
                return {
                    clientId: St.clientId || "",
                    token: St.token || "",
                    isNew: !St.messages || 0 === St.messages.length,
                    operator: St.operator || null,
                    countUnreaded: St.countUnreaded || 0,
                    lastOpenDate: St.lastOpenDate || 0,
                    lastMessageDate: St.lastMessageDate || 0,
                    lastAssignDate: St.lastAssignDate || 0,
                    countOwnMessages: St.countOwnMessages || 0,
                    messages: St.messages,
                    form: St.form || {},
                    notification: Object.assign({text: "", keep: !0}, St.notification || {}),
                    lastOperatorMessageDate: St.lastOperatorMessageDate
                }
            }, updateStorage() {
                St.refresh(), this.state = Object.assign(this.state, this.fromStorage())
            }, isInitialized() {
                return !0 === this.state.initialized
            }, initialized() {
                this.state.initialized = !0
            }, setOnline() {
                this.state.settings.online = !0, i["a"].info("chat store: set online")
            }, updateCountOwnMessages() {
                this.state.countOwnMessages++, St.save({countOwnMessages: this.state.countOwnMessages})
            }, addMessage(t) {
                if (i["a"].info("chat store: add message", t), t.time > 0) {
                    const e = Number(t.time);
                    if (kt.includes(e)) return;
                    kt.push(e)
                }
                this.state.messages.push(t), t.time > 0 && !t.temp && (this.state.lastMessageDate = t.time), this.saveMessages()
            }, saveMessages() {
                St.save({
                    lastMessageDate: this.state.lastMessageDate,
                    messages: this.state.messages.filter(t => !t.isTemp()).slice(-r["a"].maxMessages)
                })
            }, setForm(t) {
                i["a"].info("chat store: set form data", t), this.state.form = t, St.save({form: this.state.form})
            }, setClientId(t) {
                t !== this.state.clientId && (i["a"].info("chat store: set client id", t), this.state.clientId = t, St.save({clientId: t}))
            }, setToken(t) {
                t !== this.state.token && (i["a"].info("chat store: set token", t), this.state.token = t, St.save({token: t}))
            }, setConnected() {
                i["a"].info("chat store: set connected"), this.state.connected = !0
            }, setDisconnected() {
                i["a"].info("chat store: set disconnected"), this.state.connected = !1
            }, enablePending() {
                i["a"].info("chat store: enable pending mode"), this.state.pending = !0
            }, disablePending() {
                i["a"].info("chat store: disable pending mode"), this.state.pending = !1
            }, setNotification(t) {
                i["a"].info("chat store: set notification", this.state.notification), this.state.notification = Object.assign(this.state.notification, t), St.save({notification: {keep: this.state.notification.keep}})
            }, existNotification() {
                const {text: t} = this.state.notification;
                return t && t.length > 0
            }, resetNotification() {
                this.setNotification({text: "", keep: !0})
            }, isUnreadedMessage(t) {
                return t.time > this.state.lastOpenDate && t.isTextMessage()
            }, lastMessageDate() {
                return this.state.lastMessageDate
            }, unreadedMessages() {
                return this.state.countUnreaded ? this.state.messages.filter(this.isUnreadedMessage.bind(this)) : []
            }, lastMessage() {
                return this.state.messages[this.state.messages.length - 1]
            }, updateLastOpenDate() {
                this.state.lastOpenDate = Date.now(), St.save({lastOpenDate: this.state.lastOpenDate})
            }, updateLastAssignDate() {
                this.state.lastAssignDate = Date.now(), St.save({lastAssignDate: this.state.lastAssignDate})
            }, updateLastOperatorMessageDate(t) {
                i["a"].info("chat store: update last operator message date", t), this.state.lastOperatorMessageDate = t, St.save({lastOperatorMessageDate: this.state.lastOperatorMessageDate})
            }, increaseCountUnreaded() {
                this.state.countUnreaded++, St.save({countUnreaded: this.state.countUnreaded})
            }, setCountUnreaded(t) {
                this.state.countUnreaded = t, St.save({countUnreaded: this.state.countUnreaded})
            }, resetCountUnreaded() {
                this.state.countUnreaded = 0, St.save({countUnreaded: this.state.countUnreaded})
            }, setDelayCommand(t, e) {
                Ct = setTimeout(() => {
                    this.setCommand(t, e, !0), Ct = null
                }, null === Ct ? 2500 : 3e3)
            }, setCommand(t, e, n = !1) {
                i["a"].info("chat store: receive command", t, e);
                const {dateCreate: s, chatbot: r = null} = e;
                null === r || !1 !== n ? (e && s && (this.updateLastOperatorMessageDate(s), $t.emit("UPDATE_LAST_OPERATOR_MESSAGE_DATE", s)), this.state.command = {
                    name: t,
                    data: e
                }, f["a"].chat.triggerCommand(t, e)) : this.setDelayCommand(t, e)
            }, settings() {
                return this.state.settings
            }, setSettings(t) {
                i["a"].info("chat store: receive settings", t), this.state.settings = t
            }, setOperator(t) {
                i["a"].info("chat store: assign operator", t);
                const {name: e, image: n, operatorId: s} = t;
                this.state.operator = {name: e, image: n, operatorId: s}, St.save({
                    operator: {
                        name: e,
                        image: n,
                        operatorId: s
                    }
                })
            }, operator() {
                const {settings: t, operator: e} = this.state;
                return e || {name: t.name, image: null}
            }, form() {
                const t = {...this.state.form};
                return delete t.message, t
            }, setHideState() {
                i["a"].info("chat store: set hide state"), this.state.state = yt, f["a"].chat.triggerChatState(this.state.state)
            }, setOpenState() {
                i["a"].info("chat store: set open state"), this.state.state = bt, this.state.mode = _t, f["a"].chat.triggerChatState(this.state.state)
            }, setCallbackMode() {
                this.setOpenState(), i["a"].info("chat store: set callback mode"), this.state.mode = wt, f["a"].chat.triggerChatMode(this.state.mode)
            }, isHideState() {
                return this.state.state === yt
            }, isOpenState() {
                return this.state.state === bt
            }, isDefaultMode() {
                return this.state.mode === _t
            }, isCallbackMode() {
                return this.state.mode === wt
            }, isNewClient() {
                return this.state.isNew
            }, isDarkTheme() {
                return !0 === this.state.darkTheme
            }, activateDarkTheme() {
                i["a"].info("chat store: activate dark theme"), this.state.darkTheme = !0
            }, activateLightTheme() {
                i["a"].info("chat store: activate light theme"), this.state.darkTheme = !1
            }, departmentId() {
                return this.state.departmentId
            }, setDepartment(t) {
                i["a"].info("chat store: set department", t), this.state.departmentId = t, $t.emit("SET_DEPARTMENT", t), f["a"].trigger(f["a"].events.CLIENT_ASSIGNED_DEPARTMENT, t)
            }, setParameters(t) {
                i["a"].info("chat store: set parameters", t), this.state.parameters = t
            }, parameters() {
                const t = this.departmentId();
                return null !== t ? {...this.state.parameters, departmentId: t} : this.state.parameters
            }
        }, Tt = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.isInitialized ? n("div", {
                staticClass: "app -js-forms-focus",
                class: [{"-open": t.isOpenStateChat}, {"-light": t.isColorLight}, {"-dark": t.isDarkTheme}, {"-dragenter": t.isChatDragenter}, {"-wobutton": t.isHideChatButton}, {"-rtl": t.isRTL}, t.isMobile ? "-mobile" : "-desktop", t.isTouch ? "-touch" : "-cursor", t.isSmallBreakpoint ? "-sm" : "-lg", t.iconPositionClasses],
                attrs: {id: "app"},
                on: {
                    "!click": function (e) {
                        return t.onFocus.apply(null, arguments)
                    }, mouseleave: function () {
                        return t.$wrapper.widget.resetFront()
                    }
                }
            }, [n("transition", {
                on: {
                    "before-enter": t.beforeChatOpenState,
                    "after-leave": t.afterChatHideState
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpenStateChat,
                    expression: "isOpenStateChat"
                }], staticClass: "chat", on: {dragenter: t.onDragenter, dragover: t.onDragover, drop: t.uploadFiles}
            }, [n("div", {staticClass: "container -header"}, [n("div", {staticClass: "wrapper"}, [n("Header")], 1)]), t.isCallbackMode ? [n("Callback")] : t._e(), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDefaultMode,
                    expression: "isDefaultMode"
                }], staticClass: "container -body -js-scrollable-dialog"
            }, [n("div", {staticClass: "wrapper -body"}, [t.isActive ? t._e() : n("div", [n("DepartmentsDialog")], 1), n("Dialog", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isActive,
                    expression: "isActive"
                }], attrs: {"initial-history": t.history}
            })], 1)]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDefaultMode,
                    expression: "isDefaultMode"
                }], staticClass: "container -footer"
            }, [n("div", {staticClass: "wrapper"}, [n("Footer", {
                attrs: {
                    "is-open": t.isOpenStateChat,
                    "is-active": t.isActive
                }
            })], 1)]), n("DropFiles", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isDefaultMode,
                    expression: "isDefaultMode"
                }], on: {"drop-files-dragleave": t.onDragleave}
            })], 2)]), n("ChatButton", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowChatButton,
                    expression: "isShowChatButton"
                }], ref: "chatButton", attrs: {"is-show": t.isShowChatButton}
            }), n("SvgIcons")], 1) : t._e()
        }, Ot = [], Et = (n("5aea"), (t, e = 0) => {
            if (null === t) return !1;
            const n = t.ownerDocument.defaultView, {bottom: s} = t.getBoundingClientRect(), {innerHeight: r} = n, {clientHeight: a} = n,
                i = s - e;
            return i > 0 && i <= (r || a)
        });
        const Mt = window.parent, At = Mt.document, It = 160;
        var jt = t => {
            if (u["a"].isHideState()) return !1;
            const e = At.querySelector("#" + r["a"].embedded.iframeId);
            return !(null === e || !Et(e, It)) || t.isOpenState()
        }, Lt = n("cd7d"), Dt = n.n(Lt);
        const Nt = new Audio(Dt.a);
        var Ft = () => {
            const t = Nt.play();
            void 0 !== t && t.catch(() => null)
        };
        const Rt = window.parent.document;
        let Pt = null, Bt = Rt.title;

        function zt() {
            i["a"].info("tab notification: stop", Pt), clearTimeout(Pt), Pt = null, Rt.title = Bt, Rt.removeEventListener("visibilitychange", zt)
        }

        function Ut(t, e) {
            e += 1, Rt.title = e % 2 ? t : Bt, Pt = setTimeout(Ut.bind(this, t, e), 1e3)
        }

        var qt = t => {
            Pt ? i["a"].info("tab notification: skip, already launched") : (i["a"].info("tab notification: start"), Bt = Rt.title, Ut(t, 0), Rt.addEventListener("visibilitychange", zt))
        };

        function Ht(t, e, n) {
            e && (u["a"].isHideState() && qt(e), !u["a"].isHideState() && !t.isHideState() || n || Ft(), t.isHideState() && (t.increaseCountUnreaded(), t.setNotification({
                text: e,
                keep: !0
            })))
        }

        var Vt = (t, e, n, s, r = !1) => {
                if (!jt(t)) switch (n) {
                    case"TEXT_MESSAGE":
                        Ht(t, s.message, r);
                        break;
                    case"FILE_MESSAGE":
                    case"SHOW_VIDEO_WELCOME":
                        Ht(t, e.t("_.NEW_MESSAGE") + "!", r);
                        break
                }
            }, Wt = n("471c"), Gt = {
                update: null,
                begin: null,
                loopBegin: null,
                changeBegin: null,
                change: null,
                changeComplete: null,
                loopComplete: null,
                complete: null,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                timelineOffset: 0
            }, Kt = {duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0},
            Qt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
            Xt = {CSS: {}, springs: {}};

        function Yt(t, e, n) {
            return Math.min(Math.max(t, e), n)
        }

        function Jt(t, e) {
            return t.indexOf(e) > -1
        }

        function Zt(t, e) {
            return t.apply(null, e)
        }

        var te = {
            arr: function (t) {
                return Array.isArray(t)
            }, obj: function (t) {
                return Jt(Object.prototype.toString.call(t), "Object")
            }, pth: function (t) {
                return te.obj(t) && t.hasOwnProperty("totalLength")
            }, svg: function (t) {
                return t instanceof SVGElement
            }, inp: function (t) {
                return t instanceof HTMLInputElement
            }, dom: function (t) {
                return t.nodeType || te.svg(t)
            }, str: function (t) {
                return "string" === typeof t
            }, fnc: function (t) {
                return "function" === typeof t
            }, und: function (t) {
                return "undefined" === typeof t
            }, nil: function (t) {
                return te.und(t) || null === t
            }, hex: function (t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            }, rgb: function (t) {
                return /^rgb/.test(t)
            }, hsl: function (t) {
                return /^hsl/.test(t)
            }, col: function (t) {
                return te.hex(t) || te.rgb(t) || te.hsl(t)
            }, key: function (t) {
                return !Gt.hasOwnProperty(t) && !Kt.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
            }
        };

        function ee(t) {
            var e = /\(([^)]+)\)/.exec(t);
            return e ? e[1].split(",").map((function (t) {
                return parseFloat(t)
            })) : []
        }

        function ne(t, e) {
            var n = ee(t), s = Yt(te.und(n[0]) ? 1 : n[0], .1, 100), r = Yt(te.und(n[1]) ? 100 : n[1], .1, 100),
                a = Yt(te.und(n[2]) ? 10 : n[2], .1, 100), i = Yt(te.und(n[3]) ? 0 : n[3], .1, 100),
                o = Math.sqrt(r / s), c = a / (2 * Math.sqrt(r * s)), l = c < 1 ? o * Math.sqrt(1 - c * c) : 0, u = 1,
                d = c < 1 ? (c * o - i) / l : -i + o;

            function h(t) {
                var n = e ? e * t / 1e3 : t;
                return n = c < 1 ? Math.exp(-n * c * o) * (u * Math.cos(l * n) + d * Math.sin(l * n)) : (u + d * n) * Math.exp(-n * o), 0 === t || 1 === t ? t : 1 - n
            }

            function f() {
                var e = Xt.springs[t];
                if (e) return e;
                var n = 1 / 6, s = 0, r = 0;
                while (1) if (s += n, 1 === h(s)) {
                    if (r++, r >= 16) break
                } else r = 0;
                var a = s * n * 1e3;
                return Xt.springs[t] = a, a
            }

            return e ? h : f
        }

        function se(t) {
            return void 0 === t && (t = 10), function (e) {
                return Math.ceil(Yt(e, 1e-6, 1) * t) * (1 / t)
            }
        }

        var re = function () {
            var t = 11, e = 1 / (t - 1);

            function n(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
                return 3 * e - 6 * t
            }

            function r(t) {
                return 3 * t
            }

            function a(t, e, a) {
                return ((n(e, a) * t + s(e, a)) * t + r(e)) * t
            }

            function i(t, e, a) {
                return 3 * n(e, a) * t * t + 2 * s(e, a) * t + r(e)
            }

            function o(t, e, n, s, r) {
                var i, o, c = 0;
                do {
                    o = e + (n - e) / 2, i = a(o, s, r) - t, i > 0 ? n = o : e = o
                } while (Math.abs(i) > 1e-7 && ++c < 10);
                return o
            }

            function c(t, e, n, s) {
                for (var r = 0; r < 4; ++r) {
                    var o = i(e, n, s);
                    if (0 === o) return e;
                    var c = a(e, n, s) - t;
                    e -= c / o
                }
                return e
            }

            function l(n, s, r, l) {
                if (0 <= n && n <= 1 && 0 <= r && r <= 1) {
                    var u = new Float32Array(t);
                    if (n !== s || r !== l) for (var d = 0; d < t; ++d) u[d] = a(d * e, n, r);
                    return function (t) {
                        return n === s && r === l || 0 === t || 1 === t ? t : a(h(t), s, l)
                    }
                }

                function h(s) {
                    for (var a = 0, l = 1, d = t - 1; l !== d && u[l] <= s; ++l) a += e;
                    --l;
                    var h = (s - u[l]) / (u[l + 1] - u[l]), f = a + h * e, p = i(f, n, r);
                    return p >= .001 ? c(s, f, n, r) : 0 === p ? f : o(s, a, a + e, n, r)
                }
            }

            return l
        }(), ae = function () {
            var t = {
                linear: function () {
                    return function (t) {
                        return t
                    }
                }
            }, e = {
                Sine: function () {
                    return function (t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    }
                }, Circ: function () {
                    return function (t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }
                }, Back: function () {
                    return function (t) {
                        return t * t * (3 * t - 2)
                    }
                }, Bounce: function () {
                    return function (t) {
                        var e, n = 4;
                        while (t < ((e = Math.pow(2, --n)) - 1) / 11) ;
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }, Elastic: function (t, e) {
                    void 0 === t && (t = 1), void 0 === e && (e = .5);
                    var n = Yt(t, 1, 10), s = Yt(e, .1, 2);
                    return function (t) {
                        return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - s / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / s)
                    }
                }
            }, n = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
            return n.forEach((function (t, n) {
                e[t] = function () {
                    return function (t) {
                        return Math.pow(t, n + 2)
                    }
                }
            })), Object.keys(e).forEach((function (n) {
                var s = e[n];
                t["easeIn" + n] = s, t["easeOut" + n] = function (t, e) {
                    return function (n) {
                        return 1 - s(t, e)(1 - n)
                    }
                }, t["easeInOut" + n] = function (t, e) {
                    return function (n) {
                        return n < .5 ? s(t, e)(2 * n) / 2 : 1 - s(t, e)(-2 * n + 2) / 2
                    }
                }, t["easeOutIn" + n] = function (t, e) {
                    return function (n) {
                        return n < .5 ? (1 - s(t, e)(1 - 2 * n)) / 2 : (s(t, e)(2 * n - 1) + 1) / 2
                    }
                }
            })), t
        }();

        function ie(t, e) {
            if (te.fnc(t)) return t;
            var n = t.split("(")[0], s = ae[n], r = ee(t);
            switch (n) {
                case"spring":
                    return ne(t, e);
                case"cubicBezier":
                    return Zt(re, r);
                case"steps":
                    return Zt(se, r);
                default:
                    return Zt(s, r)
            }
        }

        function oe(t) {
            try {
                var e = document.querySelectorAll(t);
                return e
            } catch (n) {
                return
            }
        }

        function ce(t, e) {
            for (var n = t.length, s = arguments.length >= 2 ? arguments[1] : void 0, r = [], a = 0; a < n; a++) if (a in t) {
                var i = t[a];
                e.call(s, i, a, t) && r.push(i)
            }
            return r
        }

        function le(t) {
            return t.reduce((function (t, e) {
                return t.concat(te.arr(e) ? le(e) : e)
            }), [])
        }

        function ue(t) {
            return te.arr(t) ? t : (te.str(t) && (t = oe(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
        }

        function de(t, e) {
            return t.some((function (t) {
                return t === e
            }))
        }

        function he(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        }

        function fe(t, e) {
            var n = he(t);
            for (var s in t) n[s] = e.hasOwnProperty(s) ? e[s] : t[s];
            return n
        }

        function pe(t, e) {
            var n = he(t);
            for (var s in e) n[s] = te.und(t[s]) ? e[s] : t[s];
            return n
        }

        function me(t) {
            var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);
            return e ? "rgba(" + e[1] + ",1)" : t
        }

        function ge(t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = t.replace(e, (function (t, e, n, s) {
                    return e + e + n + n + s + s
                })), s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), r = parseInt(s[1], 16),
                a = parseInt(s[2], 16), i = parseInt(s[3], 16);
            return "rgba(" + r + "," + a + "," + i + ",1)"
        }

        function ve(t) {
            var e, n, s,
                r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                a = parseInt(r[1], 10) / 360, i = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100, c = r[4] || 1;

            function l(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            if (0 == i) e = n = s = o; else {
                var u = o < .5 ? o * (1 + i) : o + i - o * i, d = 2 * o - u;
                e = l(d, u, a + 1 / 3), n = l(d, u, a), s = l(d, u, a - 1 / 3)
            }
            return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * s + "," + c + ")"
        }

        function ye(t) {
            return te.rgb(t) ? me(t) : te.hex(t) ? ge(t) : te.hsl(t) ? ve(t) : void 0
        }

        function be(t) {
            var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
            if (e) return e[1]
        }

        function _e(t) {
            return Jt(t, "translate") || "perspective" === t ? "px" : Jt(t, "rotate") || Jt(t, "skew") ? "deg" : void 0
        }

        function we(t, e) {
            return te.fnc(t) ? t(e.target, e.id, e.total) : t
        }

        function Ce(t, e) {
            return t.getAttribute(e)
        }

        function Se(t, e, n) {
            var s = be(e);
            if (de([n, "deg", "rad", "turn"], s)) return e;
            var r = Xt.CSS[e + n];
            if (!te.und(r)) return r;
            var a = 100, i = document.createElement(t.tagName),
                o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
            o.appendChild(i), i.style.position = "absolute", i.style.width = a + n;
            var c = a / i.offsetWidth;
            o.removeChild(i);
            var l = c * parseFloat(e);
            return Xt.CSS[e + n] = l, l
        }

        function $e(t, e, n) {
            if (e in t.style) {
                var s = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    r = t.style[e] || getComputedStyle(t).getPropertyValue(s) || "0";
                return n ? Se(t, r, n) : r
            }
        }

        function ke(t, e) {
            return te.dom(t) && !te.inp(t) && (!te.nil(Ce(t, e)) || te.svg(t) && t[e]) ? "attribute" : te.dom(t) && de(Qt, e) ? "transform" : te.dom(t) && "transform" !== e && $e(t, e) ? "css" : null != t[e] ? "object" : void 0
        }

        function xe(t) {
            if (te.dom(t)) {
                var e, n = t.style.transform || "", s = /(\w+)\(([^)]*)\)/g, r = new Map;
                while (e = s.exec(n)) r.set(e[1], e[2]);
                return r
            }
        }

        function Te(t, e, n, s) {
            var r = Jt(e, "scale") ? 1 : 0 + _e(e), a = xe(t).get(e) || r;
            return n && (n.transforms.list.set(e, a), n.transforms["last"] = e), s ? Se(t, a, s) : a
        }

        function Oe(t, e, n, s) {
            switch (ke(t, e)) {
                case"transform":
                    return Te(t, e, s, n);
                case"css":
                    return $e(t, e, n);
                case"attribute":
                    return Ce(t, e);
                default:
                    return t[e] || 0
            }
        }

        function Ee(t, e) {
            var n = /^(\*=|\+=|-=)/.exec(t);
            if (!n) return t;
            var s = be(t) || 0, r = parseFloat(e), a = parseFloat(t.replace(n[0], ""));
            switch (n[0][0]) {
                case"+":
                    return r + a + s;
                case"-":
                    return r - a + s;
                case"*":
                    return r * a + s
            }
        }

        function Me(t, e) {
            if (te.col(t)) return ye(t);
            if (/\s/g.test(t)) return t;
            var n = be(t), s = n ? t.substr(0, t.length - n.length) : t;
            return e ? s + e : s
        }

        function Ae(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function Ie(t) {
            return 2 * Math.PI * Ce(t, "r")
        }

        function je(t) {
            return 2 * Ce(t, "width") + 2 * Ce(t, "height")
        }

        function Le(t) {
            return Ae({x: Ce(t, "x1"), y: Ce(t, "y1")}, {x: Ce(t, "x2"), y: Ce(t, "y2")})
        }

        function De(t) {
            for (var e, n = t.points, s = 0, r = 0; r < n.numberOfItems; r++) {
                var a = n.getItem(r);
                r > 0 && (s += Ae(e, a)), e = a
            }
            return s
        }

        function Ne(t) {
            var e = t.points;
            return De(t) + Ae(e.getItem(e.numberOfItems - 1), e.getItem(0))
        }

        function Fe(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case"circle":
                    return Ie(t);
                case"rect":
                    return je(t);
                case"line":
                    return Le(t);
                case"polyline":
                    return De(t);
                case"polygon":
                    return Ne(t)
            }
        }

        function Re(t) {
            var e = Fe(t);
            return t.setAttribute("stroke-dasharray", e), e
        }

        function Pe(t) {
            var e = t.parentNode;
            while (te.svg(e)) {
                if (!te.svg(e.parentNode)) break;
                e = e.parentNode
            }
            return e
        }

        function Be(t, e) {
            var n = e || {}, s = n.el || Pe(t), r = s.getBoundingClientRect(), a = Ce(s, "viewBox"), i = r.width,
                o = r.height, c = n.viewBox || (a ? a.split(" ") : [0, 0, i, o]);
            return {el: s, viewBox: c, x: c[0] / 1, y: c[1] / 1, w: i, h: o, vW: c[2], vH: c[3]}
        }

        function ze(t, e) {
            var n = te.str(t) ? oe(t)[0] : t, s = e || 100;
            return function (t) {
                return {property: t, el: n, svg: Be(n), totalLength: Fe(n) * (s / 100)}
            }
        }

        function Ue(t, e, n) {
            function s(n) {
                void 0 === n && (n = 0);
                var s = e + n >= 1 ? e + n : 0;
                return t.el.getPointAtLength(s)
            }

            var r = Be(t.el, t.svg), a = s(), i = s(-1), o = s(1), c = n ? 1 : r.w / r.vW, l = n ? 1 : r.h / r.vH;
            switch (t.property) {
                case"x":
                    return (a.x - r.x) * c;
                case"y":
                    return (a.y - r.y) * l;
                case"angle":
                    return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI
            }
        }

        function qe(t, e) {
            var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, s = Me(te.pth(t) ? t.totalLength : t, e) + "";
            return {
                original: s,
                numbers: s.match(n) ? s.match(n).map(Number) : [0],
                strings: te.str(t) || e ? s.split(n) : []
            }
        }

        function He(t) {
            var e = t ? le(te.arr(t) ? t.map(ue) : ue(t)) : [];
            return ce(e, (function (t, e, n) {
                return n.indexOf(t) === e
            }))
        }

        function Ve(t) {
            var e = He(t);
            return e.map((function (t, n) {
                return {target: t, id: n, total: e.length, transforms: {list: xe(t)}}
            }))
        }

        function We(t, e) {
            var n = he(e);
            if (/^spring/.test(n.easing) && (n.duration = ne(n.easing)), te.arr(t)) {
                var s = t.length, r = 2 === s && !te.obj(t[0]);
                r ? t = {value: t} : te.fnc(e.duration) || (n.duration = e.duration / s)
            }
            var a = te.arr(t) ? t : [t];
            return a.map((function (t, n) {
                var s = te.obj(t) && !te.pth(t) ? t : {value: t};
                return te.und(s.delay) && (s.delay = n ? 0 : e.delay), te.und(s.endDelay) && (s.endDelay = n === a.length - 1 ? e.endDelay : 0), s
            })).map((function (t) {
                return pe(t, n)
            }))
        }

        function Ge(t) {
            for (var e = ce(le(t.map((function (t) {
                return Object.keys(t)
            }))), (function (t) {
                return te.key(t)
            })).reduce((function (t, e) {
                return t.indexOf(e) < 0 && t.push(e), t
            }), []), n = {}, s = function (s) {
                var r = e[s];
                n[r] = t.map((function (t) {
                    var e = {};
                    for (var n in t) te.key(n) ? n == r && (e.value = t[n]) : e[n] = t[n];
                    return e
                }))
            }, r = 0; r < e.length; r++) s(r);
            return n
        }

        function Ke(t, e) {
            var n = [], s = e.keyframes;
            for (var r in s && (e = pe(Ge(s), e)), e) te.key(r) && n.push({name: r, tweens: We(e[r], t)});
            return n
        }

        function Qe(t, e) {
            var n = {};
            for (var s in t) {
                var r = we(t[s], e);
                te.arr(r) && (r = r.map((function (t) {
                    return we(t, e)
                })), 1 === r.length && (r = r[0])), n[s] = r
            }
            return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
        }

        function Xe(t, e) {
            var n;
            return t.tweens.map((function (s) {
                var r = Qe(s, e), a = r.value, i = te.arr(a) ? a[1] : a, o = be(i), c = Oe(e.target, t.name, o, e),
                    l = n ? n.to.original : c, u = te.arr(a) ? a[0] : l, d = be(u) || be(c), h = o || d;
                return te.und(i) && (i = l), r.from = qe(u, h), r.to = qe(Ee(i, u), h), r.start = n ? n.end : 0, r.end = r.start + r.delay + r.duration + r.endDelay, r.easing = ie(r.easing, r.duration), r.isPath = te.pth(a), r.isPathTargetInsideSVG = r.isPath && te.svg(e.target), r.isColor = te.col(r.from.original), r.isColor && (r.round = 1), n = r, r
            }))
        }

        var Ye = {
            css: function (t, e, n) {
                return t.style[e] = n
            }, attribute: function (t, e, n) {
                return t.setAttribute(e, n)
            }, object: function (t, e, n) {
                return t[e] = n
            }, transform: function (t, e, n, s, r) {
                if (s.list.set(e, n), e === s.last || r) {
                    var a = "";
                    s.list.forEach((function (t, e) {
                        a += e + "(" + t + ") "
                    })), t.style.transform = a
                }
            }
        };

        function Je(t, e) {
            var n = Ve(t);
            n.forEach((function (t) {
                for (var n in e) {
                    var s = we(e[n], t), r = t.target, a = be(s), i = Oe(r, n, a, t), o = a || be(i),
                        c = Ee(Me(s, o), i), l = ke(r, n);
                    Ye[l](r, n, c, t.transforms, !0)
                }
            }))
        }

        function Ze(t, e) {
            var n = ke(t.target, e.name);
            if (n) {
                var s = Xe(e, t), r = s[s.length - 1];
                return {
                    type: n,
                    property: e.name,
                    animatable: t,
                    tweens: s,
                    duration: r.end,
                    delay: s[0].delay,
                    endDelay: r.endDelay
                }
            }
        }

        function tn(t, e) {
            return ce(le(t.map((function (t) {
                return e.map((function (e) {
                    return Ze(t, e)
                }))
            }))), (function (t) {
                return !te.und(t)
            }))
        }

        function en(t, e) {
            var n = t.length, s = function (t) {
                return t.timelineOffset ? t.timelineOffset : 0
            }, r = {};
            return r.duration = n ? Math.max.apply(Math, t.map((function (t) {
                return s(t) + t.duration
            }))) : e.duration, r.delay = n ? Math.min.apply(Math, t.map((function (t) {
                return s(t) + t.delay
            }))) : e.delay, r.endDelay = n ? r.duration - Math.max.apply(Math, t.map((function (t) {
                return s(t) + t.duration - t.endDelay
            }))) : e.endDelay, r
        }

        var nn = 0;

        function sn(t) {
            var e = fe(Gt, t), n = fe(Kt, t), s = Ke(n, t), r = Ve(t.targets), a = tn(r, s), i = en(a, n), o = nn;
            return nn++, pe(e, {
                id: o,
                children: [],
                animatables: r,
                animations: a,
                duration: i.duration,
                delay: i.delay,
                endDelay: i.endDelay
            })
        }

        var rn = [], an = function () {
            var t;

            function e() {
                t || on() && cn.suspendWhenDocumentHidden || !(rn.length > 0) || (t = requestAnimationFrame(n))
            }

            function n(e) {
                var s = rn.length, r = 0;
                while (r < s) {
                    var a = rn[r];
                    a.paused ? (rn.splice(r, 1), s--) : (a.tick(e), r++)
                }
                t = r > 0 ? requestAnimationFrame(n) : void 0
            }

            function s() {
                cn.suspendWhenDocumentHidden && (on() ? t = cancelAnimationFrame(t) : (rn.forEach((function (t) {
                    return t._onDocumentVisibility()
                })), an()))
            }

            return "undefined" !== typeof document && document.addEventListener("visibilitychange", s), e
        }();

        function on() {
            return !!document && document.hidden
        }

        function cn(t) {
            void 0 === t && (t = {});
            var e, n = 0, s = 0, r = 0, a = 0, i = null;

            function o(t) {
                var e = window.Promise && new Promise((function (t) {
                    return i = t
                }));
                return t.finished = e, e
            }

            var c = sn(t);
            o(c);

            function l() {
                var t = c.direction;
                "alternate" !== t && (c.direction = "normal" !== t ? "normal" : "reverse"), c.reversed = !c.reversed, e.forEach((function (t) {
                    return t.reversed = c.reversed
                }))
            }

            function u(t) {
                return c.reversed ? c.duration - t : t
            }

            function d() {
                n = 0, s = u(c.currentTime) * (1 / cn.speed)
            }

            function h(t, e) {
                e && e.seek(t - e.timelineOffset)
            }

            function f(t) {
                if (c.reversePlayback) for (var n = a; n--;) h(t, e[n]); else for (var s = 0; s < a; s++) h(t, e[s])
            }

            function p(t) {
                var e = 0, n = c.animations, s = n.length;
                while (e < s) {
                    var r = n[e], a = r.animatable, i = r.tweens, o = i.length - 1, l = i[o];
                    o && (l = ce(i, (function (e) {
                        return t < e.end
                    }))[0] || l);
                    for (var u = Yt(t - l.start - l.delay, 0, l.duration) / l.duration, d = isNaN(u) ? 1 : l.easing(u), h = l.to.strings, f = l.round, p = [], m = l.to.numbers.length, g = void 0, v = 0; v < m; v++) {
                        var y = void 0, b = l.to.numbers[v], _ = l.from.numbers[v] || 0;
                        y = l.isPath ? Ue(l.value, d * b, l.isPathTargetInsideSVG) : _ + d * (b - _), f && (l.isColor && v > 2 || (y = Math.round(y * f) / f)), p.push(y)
                    }
                    var w = h.length;
                    if (w) {
                        g = h[0];
                        for (var C = 0; C < w; C++) {
                            h[C];
                            var S = h[C + 1], $ = p[C];
                            isNaN($) || (g += S ? $ + S : $ + " ")
                        }
                    } else g = p[0];
                    Ye[r.type](a.target, r.property, g, a.transforms), r.currentValue = g, e++
                }
            }

            function m(t) {
                c[t] && !c.passThrough && c[t](c)
            }

            function g() {
                c.remaining && !0 !== c.remaining && c.remaining--
            }

            function v(t) {
                var a = c.duration, d = c.delay, h = a - c.endDelay, v = u(t);
                c.progress = Yt(v / a * 100, 0, 100), c.reversePlayback = v < c.currentTime, e && f(v), !c.began && c.currentTime > 0 && (c.began = !0, m("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, m("loopBegin")), v <= d && 0 !== c.currentTime && p(0), (v >= h && c.currentTime !== a || !a) && p(a), v > d && v < h ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, m("changeBegin")), m("change"), p(v)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, m("changeComplete")), c.currentTime = Yt(v, 0, a), c.began && m("update"), t >= a && (s = 0, g(), c.remaining ? (n = r, m("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && l()) : (c.paused = !0, c.completed || (c.completed = !0, m("loopComplete"), m("complete"), !c.passThrough && "Promise" in window && (i(), o(c)))))
            }

            return c.reset = function () {
                var t = c.direction;
                c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === t, c.remaining = c.loop, e = c.children, a = e.length;
                for (var n = a; n--;) c.children[n].reset();
                (c.reversed && !0 !== c.loop || "alternate" === t && 1 === c.loop) && c.remaining++, p(c.reversed ? c.duration : 0)
            }, c._onDocumentVisibility = d, c.set = function (t, e) {
                return Je(t, e), c
            }, c.tick = function (t) {
                r = t, n || (n = r), v((r + (s - n)) * cn.speed)
            }, c.seek = function (t) {
                v(u(t))
            }, c.pause = function () {
                c.paused = !0, d()
            }, c.play = function () {
                c.paused && (c.completed && c.reset(), c.paused = !1, rn.push(c), d(), an())
            }, c.reverse = function () {
                l(), c.completed = !c.reversed, d()
            }, c.restart = function () {
                c.reset(), c.play()
            }, c.remove = function (t) {
                var e = He(t);
                un(e, c)
            }, c.reset(), c.autoplay && c.play(), c
        }

        function ln(t, e) {
            for (var n = e.length; n--;) de(t, e[n].animatable.target) && e.splice(n, 1)
        }

        function un(t, e) {
            var n = e.animations, s = e.children;
            ln(t, n);
            for (var r = s.length; r--;) {
                var a = s[r], i = a.animations;
                ln(t, i), i.length || a.children.length || s.splice(r, 1)
            }
            n.length || s.length || e.pause()
        }

        function dn(t) {
            for (var e = He(t), n = rn.length; n--;) {
                var s = rn[n];
                un(e, s)
            }
        }

        function hn(t, e) {
            void 0 === e && (e = {});
            var n = e.direction || "normal", s = e.easing ? ie(e.easing) : null, r = e.grid, a = e.axis,
                i = e.from || 0, o = "first" === i, c = "center" === i, l = "last" === i, u = te.arr(t),
                d = u ? parseFloat(t[0]) : parseFloat(t), h = u ? parseFloat(t[1]) : 0, f = be(u ? t[1] : t) || 0,
                p = e.start || 0 + (u ? d : 0), m = [], g = 0;
            return function (t, e, v) {
                if (o && (i = 0), c && (i = (v - 1) / 2), l && (i = v - 1), !m.length) {
                    for (var y = 0; y < v; y++) {
                        if (r) {
                            var b = c ? (r[0] - 1) / 2 : i % r[0], _ = c ? (r[1] - 1) / 2 : Math.floor(i / r[0]),
                                w = y % r[0], C = Math.floor(y / r[0]), S = b - w, $ = _ - C,
                                k = Math.sqrt(S * S + $ * $);
                            "x" === a && (k = -S), "y" === a && (k = -$), m.push(k)
                        } else m.push(Math.abs(i - y));
                        g = Math.max.apply(Math, m)
                    }
                    s && (m = m.map((function (t) {
                        return s(t / g) * g
                    }))), "reverse" === n && (m = m.map((function (t) {
                        return a ? t < 0 ? -1 * t : -t : Math.abs(g - t)
                    })))
                }
                var x = u ? (h - d) / g : d;
                return p + x * (Math.round(100 * m[e]) / 100) + f
            }
        }

        function fn(t) {
            void 0 === t && (t = {});
            var e = cn(t);
            return e.duration = 0, e.add = function (n, s) {
                var r = rn.indexOf(e), a = e.children;

                function i(t) {
                    t.passThrough = !0
                }

                r > -1 && rn.splice(r, 1);
                for (var o = 0; o < a.length; o++) i(a[o]);
                var c = pe(n, fe(Kt, t));
                c.targets = c.targets || t.targets;
                var l = e.duration;
                c.autoplay = !1, c.direction = e.direction, c.timelineOffset = te.und(s) ? l : Ee(s, l), i(e), e.seek(c.timelineOffset);
                var u = cn(c);
                i(u), a.push(u);
                var d = en(a, t);
                return e.delay = d.delay, e.endDelay = d.endDelay, e.duration = d.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
            }, e
        }

        cn.version = "3.2.1", cn.speed = 1, cn.suspendWhenDocumentHidden = !0, cn.running = rn, cn.remove = dn, cn.get = Oe, cn.set = Je, cn.convertPx = Se, cn.path = ze, cn.setDashoffset = Re, cn.stagger = hn, cn.timeline = fn, cn.easing = ie, cn.penner = ae, cn.random = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        };
        var pn = cn, mn = () => {
            const t = {
                chat1: document.querySelector(".-js-animate-wrap .group.-group-1"),
                chat2: document.querySelector(".-js-animate-wrap .group.-group-2")
            };
            pn({
                targets: t.chat1,
                keyframes: [{
                    duration: 0,
                    rotate: 0,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    opacity: 1
                }, {duration: 600, rotate: -20, scale: .88, easing: "easeInOutCubic"}, {
                    duration: 300,
                    rotate: 0,
                    scale: 11,
                    translateX: 0,
                    translateY: -3.85,
                    easing: "easeInOutCubic"
                }, {duration: 0, opacity: 0}]
            }), pn({
                targets: t.chat2,
                keyframes: [{
                    duration: 0,
                    rotate: -20,
                    scale: 0,
                    translateX: 0,
                    translateY: 0,
                    opacity: 0
                }, {duration: 600, rotate: 0, scale: 1, opacity: 1, easing: "easeOutBack"}],
                delay: 750
            })
        }, gn = class {
            constructor(t, e, n, s, r, a) {
                i["a"].info("active invitation: initialized", t), this.intl = a, this.chatStore = r.chat, this.settings = t
            }

            shouldStop() {
                const {timeout: t} = r["a"].activeInvitation, {lastOpenDate: e} = this.chatStore.state;
                return !!(e && Wt["a"].hours(e) < t) && (i["a"].info("active invitation: stop by timeout"), !0)
            }

            popup(t, e) {
                setTimeout(() => {
                    if (this.shouldStop()) return;
                    i["a"].info("active invitation: show popup");
                    const {startMessage: t} = this.chatStore.state.settings;
                    Vt(this.chatStore, this.intl, "TEXT_MESSAGE", {message: t}, !0), e()
                }, t)
            }

            animate(t) {
                const e = setInterval(() => {
                    this.shouldStop() ? clearInterval(e) : (i["a"].info("active invitation: start animate"), mn())
                }, t)
            }

            show(t, e, n) {
                i["a"].info(`active invitation: start after ${t / 1e3} sec.`);
                const {keep: s} = this.chatStore.state.notification;
                s ? this.popup(t, n) : this.animate(e)
            }

            start(t) {
                if (!this.settings.enabled) return void i["a"].info("active invitation: skip start, disabled");
                const {timeout: e, animateDesktopTimeout: n, animateMobileTimeout: s} = r["a"].activeInvitation, {lastOpenDate: a, countUnreaded: o = 0} = this.chatStore.state;
                if (o > 0) return void i["a"].info("active invitation: already shown");
                if (a && Wt["a"].hours(a) < e) return void i["a"].info("active invitation: skip by timeout");
                const c = Object(h["c"])().any ? s : n;
                this.show(1e3 * this.settings.timeout, 1e3 * c, t)
            }
        };
        const vn = window.parent;
        var yn = class {
            constructor() {
                i["a"].info("analytics: initialized"), this.category = r["a"].analytics.category
            }

            pushToGoogle(t, e) {
                let n = !1;
                const {push: s} = vn.dataLayer || {};
                "function" === typeof s && (vn.dataLayer.push({
                    event: t,
                    param: e || ""
                }), n = !0), "function" === typeof vn.gtag && (vn.gtag("event", t, {param: e}), n = !0);
                const r = vn[vn.GoogleAnalyticsObject || "ga"];
                return "function" === typeof r && (i["a"].info("analytics: push event to google analytics"), "function" === typeof r.getAll ? r.getAll()[0].send("event", this.category, t, e) : r("send", "event", this.category, t, e), n = !0), "object" === typeof _gaq && "function" === typeof vn._gaq.push && (i["a"].info("analytics: push to google analytics (legacy)"), vn._gaq.push(["_trackEvent", this.category, t, e]), n = !0), n
            }

            pushToYandex(t, e) {
                const n = vn.Ya && (vn.Ya.Metrika || vn.Ya.Metrika2);
                if ("function" === typeof n && "function" === typeof n.counters) {
                    const s = "yaCounter" + n.counters()[0].id, r = {value: e};
                    return i["a"].info("analytics: push to yandex metrika " + s), vn[s].reachGoal(`${this.category}_${t.replace(/\s/g, "_")}`, r), !0
                }
                return !1
            }

            push(t, e) {
                i["a"].warn(`analytics: push event "${t}" with param "${e || "â€”"}"`);
                try {
                    this.pushToGoogle(t, e) || i["a"].warn("analytics: not found google analytics")
                } catch (n) {
                    console.warn("Replain: Error while trying to send event to Google Analytics:", n)
                }
                try {
                    this.pushToYandex(t, e) || i["a"].warn("analytics: not found yandex metrika")
                } catch (n) {
                    console.warn("Replain: Error while trying to send event to Yandex.Metrika:", n)
                }
            }
        }, bn = n("b775");

        async function _n(t, e, n) {
            const s = await bn["a"].post("/banners", {chatId: t, clientId: e, token: n});
            return s.data
        }

        const wn = window.parent.document, Cn = "30px", Sn = "0px", $n = "auto", kn = "__replain_overlay_top",
            xn = "__replain_overlay_woslider";
        let Tn = null, On = {}, En = !1, Mn = !1, An = {}, In = {}, jn = [], Ln = null, Dn = null, Nn = null, Fn = null,
            Rn = null, Pn = null, Bn = null, zn = null, Un = null, qn = null, Hn = null;

        function Vn(t) {
            Jn(t)
        }

        function Wn() {
            return Math.floor(Date.now() / 1e3)
        }

        function Gn(t, e) {
            return t(), setInterval(t, e)
        }

        function Kn() {
            qn.setCurrentRotation({current: Ln, info: In})
        }

        function Qn(t, e) {
            const n = qn.state;
            On = e;
            for (let s = 0; s < t.length; s++) if (Object.prototype.hasOwnProperty.call(t, s)) {
                const e = t[s];
                jn.push(e.id), An[e.id] = {
                    name: e.name,
                    text: e.text,
                    url: e.url,
                    image: e.image
                }, n && n.info && n.info[e.id] ? In[e.id] = {dateClosed: n.info[e.id]["dateClosed"]} : In[e.id] = {dateClosed: null}
            }
            Ln = n && n.current && An[n.current] ? n.current : jn[0], Kn()
        }

        function Xn() {
            Nn.classList.add(kn)
        }

        function Yn() {
            Nn.classList.remove(kn)
        }

        function Jn(t) {
            const e = u["a"].size(), {microsite: n} = t;
            e.width < 576 ? (Xn(), Nn.style.top = Sn, Nn.style.left = Sn, Nn.style.right = $n, Nn.style.bottom = $n) : e.width < Dn.offsetWidth + Nn.offsetWidth + 70 ? (Xn(), !0 === On.rtl ? (Nn.style.top = Cn, Nn.style.right = Cn, Nn.style.bottom = $n, Nn.style.left = $n) : (Nn.style.top = Cn, Nn.style.right = $n, Nn.style.bottom = $n, Nn.style.left = Cn)) : !0 === n ? (Xn(), Nn.style.top = Cn, Nn.style.right = Cn, Nn.style.bottom = $n, Nn.style.left = $n) : (Yn(), !0 === On.rtl ? (Nn.style.top = $n, Nn.style.right = Cn, Nn.style.bottom = Cn, Nn.style.left = $n) : (Nn.style.top = $n, Nn.style.right = $n, Nn.style.bottom = Cn, Nn.style.left = Cn))
        }

        function Zn() {
            es() || Nn.classList.add(xn)
        }

        function ts(t, e) {
            Dn = wn.querySelector("#__replain_widget");
            let n = '<a href="https://replain.cc" rel="noopener noreferrer" target="_blank" id="__replain_overlay__via"><svg id="__replain_overlay__via__img" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512.032 512.032" xml:space="preserve"><path d="M256.016 321.632V126.368c-5.536.512-11.008 1.376-16.576 1.632H80.016c-8.832 0-16 7.168-16 16v16h-48c-8.832 0-16 7.168-16 16v96c0 8.832 7.168 16 16 16h48v16c0 8.832 7.168 16 16 16h9.696l64.32 171.456c3.936 10.272 12.736 17.728 23.552 19.904 2.144.448 4.288.672 6.4.672 8.544 0 16.672-3.392 22.496-9.472l38.432-38.112c9.824-9.824 12.16-25.152 5.888-37.024L197.104 320H239.6c5.504.256 10.944 1.12 16.416 1.632zM509.392 7.744c-.32-.544-.608-.992-1.024-1.504-1.76-2.24-3.968-4.064-6.688-5.12-.096-.032-.16-.16-.256-.192-.32-.096-.608.064-.928-.032-1.44-.416-2.88-.896-4.48-.896-1.088 0-2.048.416-3.104.64-.608.128-1.184.16-1.792.352-2.752.896-5.12 2.432-7.008 4.544-.128.128-.32.16-.448.288C433.776 66.4 364.208 106.912 288.016 121.76v204.512c76.192 14.848 145.76 55.328 195.648 115.904.128.16.352.224.512.416 1.12 1.248 2.496 2.24 3.968 3.072.48.288.864.704 1.344.928 2.016.864 4.192 1.408 6.528 1.408 1.824 0 3.616-.32 5.408-.928.096-.032.16-.16.256-.192 2.72-1.056 4.928-2.848 6.688-5.12.384-.512.672-.96 1.024-1.504 1.536-2.464 2.624-5.184 2.624-8.256V16c0-3.072-1.088-5.792-2.624-8.256z"/></svg> via Re:plain</a>';
            t || (n = "");
            const s = wn.createElement("div");
            s.id = "__replain_overlay_container", s.innerHTML = "<style>#__replain_overlay {display: none; position: fixed !important; top: auto; right: auto; bottom: 0; left: " + Cn + "; width: auto !important; height: auto !important; z-index: 2147483647 !important; background-color: transparent !important; transition: opacity 500ms linear, bottom 500ms ease-in-out, top 500ms ease-in-out !important; opacity: 0; overflow: visible !important;}#__replain_overlay__wrapper {transition: background-color 0.1s ease-in !important; box-sizing: border-box !important; float: left !important; border-radius: 5px !important; display: block; position: relative !important; width: 440px !important; height: auto !important; padding: 12px !important; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15) !important; background-color: #fff !important; border: 0 !important; text-decoration: none !important; font-family: Arial, sans-serif !important; overflow: visible !important;}#__replain_overlay__wrapper__image {display: none; border: 0 !important; border-radius: 0 !important; overflow: hidden !important; width: 68px !important; height: 68px !important; float: left !important; margin: 0 10px 0 0 !important; background-position: 50% !important; background-repeat: no-repeat !important; background-size: contain !important;}#__replain_overlay__wrapper__header {display: none; color: #222 !important; font-size: 17px !important; line-height: 1.25 !important; font-weight: bold !important; margin: 0 20px 0 0 !important;}#__replain_overlay__wrapper__text {display: none; font-size: 14px !important; line-height: 1.25 !important; font-weight: 400 !important; line-height: 1.3em !important; color: #8c8c8c !important; margin: 5px 20px 0 0 !important; padding: 0 0 2px 0 !important;}#__replain_overlay__wrapper__close {cursor: pointer !important; display: block !important; position: absolute !important; width: 26px !important; height: 26px !important; background: transparent none !important; border-radius: 50% !important; top: 3px !important; right: 2px !important; border: 0 !important; background-size: 10px 10px !important; -webkit-box-sizing: border-box; box-sizing: border-box !important; min-height: 26px !important !important; opacity: .5 !important; transition: opacity 0.1s linear;}#__replain_overlay__wrapper__close__img {pointer-events: none !important; width: 10px !important; height: 10px !important; display: block !important; margin: 6px auto 0 auto !important; position: relative !important; padding: 0 !important}#__replain_overlay__via {font-family: Arial, sans-serif !important; text-decoration: none !important; display: none; position: absolute !important; background: rgba(255, 255, 255, .75) none !important; font-size: 11px !important; padding: 5px 6px !important; line-height: 1 !important; color: #191c1e !important; bottom: -25px !important; border-radius: 4px !important; right: 0 !important; width: auto !important; box-sizing: border-box !important; opacity: 0; transition: opacity 0.1s ease-in !important;}#__replain_overlay__via__img {width: 10px !important; height: 10px !important; display: inline-block !important; vertical-align: middle !important; position: relative !important; margin: 0 2px 0 0 !important; opacity: .4 !important;}#__replain_overlay__wrapper:hover {background-color: #f9f9f9 !important;}#__replain_overlay__wrapper__close:hover {opacity: 1 !important;}@media all and (max-width: 575px) {#__replain_overlay {width: 100% !important;}#__replain_overlay__wrapper {width: 100% !important; border-radius: 0 !important;}}.__replain_overlay__arrow {display: block; position: absolute; width: 24px; height: 24px; box-sizing: border-box; top: 50%; margin-top: -12px; right: -24px; padding: 2px; transition: opacity 0.1s ease-in !important; opacity: 0;}." + xn + " .__replain_overlay__arrow {display: none !important;}." + kn + ' .__replain_overlay__arrow {display: none !important;}.__replain_overlay__arrow.__replain_overlay_prev {right: auto; left: -24px}.__replain_overlay__arrow::before {content: ""; display: block; width: 100%; height: 100%; background: #fff none !important; border-radius: 50%; transition: opacity 0.1s ease-in !important; opacity: 0.75;}.__replain_overlay__arrow:hover::before {opacity: 1;}.__replain_overlay__arrow__img {display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 10px; height: 10px;}</style><div id="__replain_overlay"><div id="__replain_overlay__wrapper" data-id="" data-href="" target="_blank" rel="noopener noreferrer"><span id="__replain_overlay__wrapper__image"></span><span id="__replain_overlay__wrapper__header"></span><span id="__replain_overlay__wrapper__text"></span><span id="__replain_overlay__wrapper__close"><svg id="__replain_overlay__wrapper__close__img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642"><path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"/></svg></span></div>' + n + '<a class="__replain_overlay__arrow __replain_overlay_next" href="javascript:void(null);"><svg class="__replain_overlay__arrow__img" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 477.175 477.175" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "/></svg></a><a class="__replain_overlay__arrow __replain_overlay_prev" href="javascript:void(null);"><svg class="__replain_overlay__arrow__img" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 477.175 477.175" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></a></div>', wn.body.appendChild(s), Nn = wn.querySelector("#__replain_overlay"), Fn = wn.querySelector("#__replain_overlay__wrapper"), Rn = wn.querySelector("#__replain_overlay__wrapper__image"), Pn = wn.querySelector("#__replain_overlay__wrapper__header"), Bn = wn.querySelector("#__replain_overlay__wrapper__text"), zn = wn.querySelector("#__replain_overlay__via"), Un = wn.querySelectorAll(".__replain_overlay__arrow"), Zn(), Jn(e), "ontouchstart" in window || navigator.maxTouchPoints || (Nn.addEventListener("mouseenter", (function () {
                En = !0, zn && (zn.style.opacity = "1"), es() && (Un[0].style.opacity = "1", Un[1].style.opacity = "1")
            })), Nn.addEventListener("mouseleave", (function () {
                En = !1, zn && (zn.style.opacity = "0"), es() && (Un[0].style.opacity = "0", Un[1].style.opacity = "0")
            }))), Fn.addEventListener("click", (function (t) {
                const e = Fn.getAttribute("data-href"), n = t.target.getAttribute("id");
                "__replain_overlay__wrapper__close" !== n ? "" !== e && window.open(e, "_blank") : rs(t)
            })), Un[0].addEventListener("click", (function () {
                is(ls())
            })), Un[1].addEventListener("click", (function () {
                is(ds())
            })), u["a"].onResize(Jn.bind(this, e)), u["a"].onShown(() => {
                Hn.isOpenState() || ps(e)
            }), u["a"].onHidden(fs)
        }

        function es() {
            let t = 0;
            for (const e in In) null === In[e].dateClosed && (t += 1);
            return t > 1
        }

        function ns() {
            Nn.style.opacity = "1", zn && (zn.style.display = "block")
        }

        function ss() {
            Nn.style.opacity = "0", zn && (zn.style.display = "none")
        }

        function rs(t) {
            const e = Fn.getAttribute("data-id");
            ss(), In[e].dateClosed = Wn(), Zn(), Kn(), t.preventDefault(), setTimeout((function () {
                ls() ? Nn.style.display = "none" : cs()
            }), 500)
        }

        function as() {
            const t = hs();
            !0 === t && ns()
        }

        function is(t) {
            t && t != Ln ? (ss(), setTimeout((function () {
                Ln = t, Kn(), as()
            }), 1500)) : (Ln = t, Kn(), as())
        }

        function os(t) {
            Tn = Gn((function () {
                !1 === Mn && !1 === En && (Nn.style.display = "block", Jn(t), setTimeout((function () {
                    ls() ? is(ls()) : cs()
                }), 16))
            }), 1e3 * On.changeTime)
        }

        function cs() {
            Nn && (Mn = !0, Nn.style.display = "none", ss(), clearTimeout(Tn))
        }

        function ls() {
            let t = jn.indexOf(Ln), e = null, n = null;
            for (let s = 0; s < jn.length; s++) {
                n = t == jn.length - 1 ? 0 : t + 1;
                const s = jn[n], r = Wn();
                if (null !== In[s].dateClosed && r - In[s].dateClosed > 1e3 * On.stayClosedTime && (In[s].dateClosed = null, Zn(), Kn()), In[s] && null === In[s].dateClosed) {
                    e = s;
                    break
                }
                t = n
            }
            return e
        }

        function us(t) {
            const e = Wn();
            null !== In[t].dateClosed && e - In[t].dateClosed > 1e3 * On.stayClosedTime && (In[t].dateClosed = null, Zn(), Kn())
        }

        function ds() {
            let t = jn.indexOf(Ln), e = null, n = null;
            for (let s = jn.length - 1; s >= 0; s--) {
                n = 0 == t ? jn.length - 1 : t - 1;
                const s = jn[n];
                if (us(s), In[s] && null === In[s].dateClosed) {
                    e = s;
                    break
                }
                t = n
            }
            return e
        }

        function hs() {
            if (null !== Ln) {
                const t = An[Ln];
                return Fn.dataset.id = Ln, t.url ? (Fn.dataset.href = t.url, Fn.style.cursor = "pointer") : (Fn.dataset.href = "", Fn.style.cursor = "default"), t.image ? (Rn.style.backgroundImage = "url(" + t.image + ")", Rn.style.display = "block") : Rn.style.display = "none", t.name ? (Pn.innerHTML = t.name, Pn.style.display = "block") : Pn.style.display = "none", t.text ? (Bn.innerHTML = t.text, Bn.style.display = "block") : Bn.style.display = "none", !0
            }
            return !1
        }

        function fs() {
            cs()
        }

        function ps(t) {
            Mn = !1, os(t)
        }

        var ms = (t, e, n, s, r) => {
            qn = e, Hn = n, Qn(t, s), ts(r, s), setTimeout((function () {
                os(s)
            }), 1e3 * On.startTime), f["a"].chat.watchChatState("OPEN", fs), f["a"].chat.watchChatState("HIDE", ps.bind(void 0, s)), f["a"].wrapper.watchResize(Vn.bind(void 0, s))
        }, gs = class {
            constructor(t, e, n, s, r, a, o) {
                const c = {startTime: 10, changeTime: 10, stayClosedTime: 604800, rtl: !1};
                this.store = r.banners, this.chatStore = r.chat, this.replainSettings = n, this.watcher = o, this.loaded = !1;
                const {microsite: l = !1} = n;
                this.settings = Object.assign({microsite: l}, c, t), this.banners = [], this.init(), o.chat.watchCommand("SHOW_BANNER", this.onShowBanner.bind(this)), i["a"].info("banners: initialized", this.settings)
            }

            isLoaded() {
                return !0 === this.loaded
            }

            async init() {
                if (await this.loadBanners(), this.loaded = !0, this.watcher.trigger(f["a"].events.BANNERS_LOADED, {}, !1), this.banners.length > 0) {
                    this.showBannerMessages();
                    const t = this.popupBanners();
                    t.length > 0 && ms(t, this.store, this.chatStore, this.settings, this.isEnabledBranding())
                }
            }

            isEnabledBranding() {
                const {enable: t = !0} = this.chatStore.state.settings.branding;
                return !0 === t
            }

            async loadBanners() {
                const {id: t, clientId: e, token: n} = this.chatStore.state, s = await _n(t, e, n);
                for (const r of s) r.hide || this.banners.push(r)
            }

            showBannerMessages() {
                if (!0 === this.replainSettings.microsite) return;
                const t = this.chatStore.lastMessageDate(), e = !t || Wt["a"].hours(t) >= 1;
                let n = 0;
                for (const s of this.banners.filter(t => !0 === t.dialog)) n += 10, setTimeout(() => {
                    const t = new X["a"](s);
                    e || (t.time = -1), this.chatStore.addMessage(t)
                }, n)
            }

            popupBanners() {
                let t = [];
                for (const e of this.banners) e.popup && t.push(e);
                return t
            }

            onShowBanner(t) {
                const e = new X["a"](t);
                e.temp = !1, this.chatStore.addMessage(e)
            }
        };
        const vs = window.parent, ys = vs.document;
        var bs = class {
            constructor(t, e, n, s, r) {
                this.store = r.callback, this.settings = t, i["a"].info("callback: initialized", t), this.bindLinks()
            }

            bindLinks() {
                const t = ys.querySelectorAll('a[href="#replain-callback"]');
                if (t.length > 0) for (const e of t) e.addEventListener("click", (function (t) {
                    t.preventDefault(), vs.ReplainAPI("requestCallback")
                }))
            }

            shouldShow() {
                const {active: t} = this.settings,
                    e = Wt["a"].minutes(this.store.requestDate()) >= r["a"].callback.retryTimeout;
                return t && e
            }

            submit() {
                i["a"].info("callback: submit"), this.store.setRequestDate()
            }
        };
        const _s = 5;
        var ws = class {
            constructor(t, e) {
                this.chatStore = t, this.intl = e, this.intents = new Set, this.timer = null, f["a"].chat.watchCommand("TEXT_MESSAGE", this.onMessage.bind(this))
            }

            onMessage({chatbot: t = null}) {
                if (null === t) return;
                const {intent: e} = t;
                this.intents.add(e), this.start(e)
            }

            start(t) {
                this.intents.size > 1 || "welcome" !== t ? this.cancel() : this.show()
            }

            show() {
                this.cancel(), this.timer = setTimeout(() => {
                    const t = new Q["a"](this.intl.t("CHATBOT.CLARIFY_QUESTION"));
                    t.setSender(this.chatStore.operator()), t.setIsOperatorSender(), this.chatStore.addMessage(t), Vt(this.chatStore, this.intl, "TEXT_MESSAGE", {message: t.message})
                }, 1e3 * _s)
            }

            cancel() {
                null !== this.timer && (clearTimeout(this.timer), this.timer = null)
            }
        }, Cs = class {
            constructor(t, e, n, s, r, a) {
                this.chatStore = r.chat, this.intl = a, i["a"].info("chatbot: initialized"), new ws(this.chatStore, this.intl)
            }
        };
        const Ss = window.parent.document;
        var $s = t => {
            const e = document.createElement("style");
            e.id = "replain-style", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), Ss.querySelectorAll("head")[0].appendChild(e)
        };
        const ks = {title: "data-title", border: "data-border", color: "data-color", background: "data-background"},
            xs = '\n  <span class="replain-link__icon">\n    <svg x="0px" y="0px" viewBox="0 0 18 18" width="18" height="18">\n      <path fill:#010101="" class="st0" d="M9.0022717,0C2.9457765,0,0.4292893,3.0887458,0.4292893,7.3125048v2.2886448 c0,4.2237291,2.5164871,7.3124743,8.5729828,7.3124743c0.2845993,0,1.0852404-0.0234604,1.0852404-0.0234604 c0.3202801,0,0.5822735,0.2620373,0.5822735,0.5822735v0.0454559c0,0.1664944-0.0771923,0.309021-0.1916227,0.4133186 l0.0026989,0.001709c0,0-0.0838785,0.080204,0.0624094,0.0652122c1.0088882-0.0936089,7.0274401-0.9631634,7.0274401-8.3969955 V8.9394989V7.3125048C17.5707111,3.0887308,14.9424915,0,9.0022717,0z M9.0000076,12.2791405 c-0.874279,0-1.6127791-0.7384396-1.6127791-1.6128244c0-0.8742046,0.7385154-1.6126757,1.6127801-1.6126757 s1.6127806,0.738471,1.6127806,1.6126757C10.6127863,11.5407009,9.8742723,12.2791405,9.0000076,12.2791405z M9.0000076,7.9381032 c-0.874279,0-1.6127791-0.73844-1.6127791-1.6128249c0-0.8742042,0.7385154-1.6128249,1.6127801-1.6128249 s1.6127806,0.7386208,1.6127806,1.6128249C10.6127863,7.1996632,9.8742723,7.9381032,9.0000076,7.9381032z"></path>\n    </svg>\n  </span><span class="replain-link__caption">{title}</span>';

        function Ts(t, e) {
            const n = e ? "222" : "FFF",
                s = `.replain-link {background-color: #${t}; display: inline-block; vertical-align: baseline; position: relative; margin: 5px; padding: 7px 15px 6px 12px; border-radius: 5px; text-decoration: none; line-height: 1; white-space: nowrap; transition: opacity .15s linear; border: 1px solid transparent; box-sizing: border-box;}\n  .replain-link.-replain-only-icon {padding-left: 15px;}\n  .replain-link, .replain-link:hover {color: #${n};}\n  .replain-link:hover {opacity: .75; text-decoration: none;}\n  .replain-link.-replain-border-dark {border-color: #222;}  \n  .replain-link.-replain-border-light {border-color: #FFF;}  \n  .replain-link:first-child {margin-left: 0;}\n  .replain-link:last-child {margin-right: 0;}\n  .replain-link__icon {margin: 0 6px 0 0; padding: 0; display: inline-block; position: relative; vertical-align: middle; font-size: 0; line-height: 0; top: -1px;}\n  .replain-link.-replain-only-icon .replain-link__icon {margin: 0 0px 0 0;}\n  .replain-link__icon path {fill: currentColor;}\n  .replain-link__caption {margin: 0; padding: 0; display: inline; line-height: 1; font-family: sans-serif; font-weight: normal; font-size: 14px;}`;
            $s(s)
        }

        function Os(t) {
            const e = t.getAttribute(ks.title) || "", n = t.getAttribute(ks.border), s = t.getAttribute(ks.color),
                r = t.getAttribute(ks.background);
            e || t.classList.add("-replain-only-icon"), n && ("#" === n[0] ? t.style.borderColor = n : t.classList.add("-replain-border-" + n)), s && (t.style.color = s), r && (t.style.background = r), t.innerHTML = xs.replace("{title}", e)
        }

        var Es = (t, e, n) => {
            Ts(e, n);
            for (const s of t) Os(s)
        };
        const Ms = window.parent, As = Ms.document;
        var Is = class {
            constructor(t, e, n, s, r) {
                i["a"].info("custom button: initialized", t), this.settings = t, this.chatStore = r.chat;
                const {color: a, colorLight: o} = this.chatStore.state.settings,
                    c = As.querySelectorAll('a[href="#replain-link"]'), l = As.querySelectorAll(".replain-link");
                l.length > 0 && Es(l, a, o), this.attachHandler(c), this.attachHandler(l)
            }

            attachHandler(t) {
                if (t.length > 0) for (const e of t) e.addEventListener("click", (function (t) {
                    t.preventDefault(), Ms.ReplainAPI("open")
                }))
            }

            isHideChatButton() {
                return !0 === this.settings.hide
            }

            isCustomIconPosition() {
                const {iconPosition: t} = this.settings;
                return !!t
            }

            isTopIcon() {
                return "number" === typeof this.settings.iconPosition.top
            }

            isLeftIcon() {
                return "number" === typeof this.settings.iconPosition.left
            }
        };
        const js = 24;
        var Ls = class {
            constructor(t, e, n, s, r) {
                this.chatStore = r.chat, this.store = r.departments, this.settings = t, this.replainSettings = n, f["a"].on(f["a"].events.CLIENT_ASSIGNED_DEPARTMENT, t => {
                    this.store.setDepartment(t)
                }), this.initDepartment(), i["a"].info("departments: initialized", t)
            }

            initDepartment() {
                const {department: t = null} = this.replainSettings;
                if (null !== t) return;
                const e = this.store.departmentId();
                if (null !== e) {
                    const t = this.store.dateUpdate() || Date.now();
                    if (Wt["a"].hours(t) < js) return void this.chatStore.setDepartment(e)
                }
                const n = this.departmentForPage();
                null === n ? 1 === this.list().length && this.chatStore.setDepartment(this.list()[0].id) : this.chatStore.setDepartment(n.id)
            }

            header() {
                return this.settings.header
            }

            selectHeader() {
                return this.settings.selectHeader
            }

            allowSkip() {
                return !0 === this.settings.allowSkip
            }

            list() {
                return this.settings.list
            }

            getDepartment(t) {
                return this.list().find(e => Number(e.id) === Number(t)) || null
            }

            departmentForPage() {
                const t = window.parent.location.href, e = this.settings.list.find(e => t.includes(e.url || null));
                return void 0 === e ? null : e
            }

            shouldAskDepartment() {
                if (this.list().length < 2) return !1;
                const {departmentId: t} = this.chatStore.parameters();
                return null === t || void 0 === t
            }

            requeredAskDepartment() {
                return !1 === this.allowSkip() && !0 === this.shouldAskDepartment()
            }
        };
        const Ds = window.parent, Ns = Ds.document;
        var Fs = class {
            constructor(t) {
                i["a"].info("embedded: initialized", t), this.settings = t;
                const e = Ns.querySelector("#" + r["a"].widget.iframeId), n = r["a"].embedded.defaultHostId;
                e.dispatchEvent(new CustomEvent(r["a"].embedded.events.INIT, {
                    detail: {
                        wrapperId: n,
                        width: "100%",
                        height: "500px"
                    }
                }))
            }
        }, Rs = class {
            constructor(t) {
                i["a"].info("forms: initialized", t), this.settings = t
            }

            isEnableAutoFeedback() {
                const {autoFeedback: t} = this.settings, {messengers: e} = t || {};
                return t && !t.disabled && e.length > 0
            }
        }, Ps = class {
            constructor(t) {
                this.replainSettings = t
            }

            subscribe() {
                for (const t in f["a"].events) {
                    const e = f["a"].events[t], n = this.replainSettings[e];
                    void 0 !== n && f["a"].on(e, n)
                }
            }
        };
        const Bs = 15;
        var zs = class {
            constructor(t, e, n, s) {
                this.chatStore = e, this.socket = t, this.formFields = n, this.clientFields = s, this.isDirty = !1
            }

            handle() {
                if (void 0 !== this.clientFields) {
                    if (i["a"].info("js-api: client fields passed", this.clientFields), this.clearUnusedFields(), this.updateData(), this.isDirty) {
                        const {countOwnMessages: t} = this.chatStore.state;
                        t && this.sendFields()
                    }
                } else i["a"].info("js-api: client fields NOT passed")
            }

            clearUnusedFields() {
                const t = this.chatStore.form();
                for (const e in t) {
                    const n = this.formFields.find(t => t.key === e), s = this.clientFields[e];
                    void 0 === n && void 0 === s && (this.isDirty = !0, delete t[e])
                }
                this.isDirty && this.chatStore.setForm(t)
            }

            updateData() {
                const t = this.chatStore.form();
                let e = 0;
                for (const n in this.clientFields) {
                    if (e++, e >= Bs) break;
                    const s = t[n] !== this.clientFields[n];
                    s && (t[n] = this.clientFields[n], this.isDirty = !0)
                }
                this.isDirty && this.chatStore.setForm(t)
            }

            sendFields() {
                this.socket.send("SET_FORM")
            }
        }, Us = t => ({
            requestCallback() {
                t.setCallbackMode()
            }
        }), qs = n("c995"), Hs = (t, e, n, s) => ({
            requestAudioCall() {
                qs["a"].load({
                    video: !1,
                    socket: e,
                    watcher: s,
                    color: t.settings().color,
                    isColorLight: t.settings().colorLight
                })
            }, requestVideoCall() {
                qs["a"].load({
                    video: !0,
                    socket: e,
                    watcher: s,
                    color: t.settings().color,
                    isColorLight: t.settings().colorLight
                })
            }
        }), Vs = n("c53a");
        const Ws = window.parent, Gs = Ws.document;
        var Ks = (t, e, n) => ({
            open() {
                t.setOpenState()
            }, close() {
                t.setHideState()
            }, destroy() {
                Ws.replainInitialized = void 0, Gs.querySelector("#" + r["a"].widget.wrapperId).remove()
            }, isChatOnline() {
                return Vs["a"].isOnline(t)
            }, setLanguage(t) {
                r["a"].languages.includes(t) ? n.loadLanguage(t) : console.error(`[RE:PLAIN] The language "${t}" is not supported`)
            }, setStartMessage(e) {
                const n = t.settings();
                n.startMessage = e, t.setSettings(n)
            }, activateDarkTheme() {
                t.activateDarkTheme()
            }, activateLightTheme() {
                t.activateLightTheme()
            }, setDepartment(e) {
                t.setDepartment(e)
            }
        }), Qs = (t, e, n, s) => ({...Ks(t, e, n, s), ...Hs(t, e, n, s), ...Us(t, e, n, s)});
        const Xs = window.parent;
        var Ys = class {
            constructor(t, e, n, s, r, a, o) {
                i["a"].info("js-api: initialized", t), this.intl = a, this.chatStore = r.chat, this.settings = t, this.replainSettings = n, this.formFields = s.forms.fields, this.clientFields = n.fields, this.methods = Qs(this.chatStore, e, this.intl, o), this.socket = e, Xs.ReplainAPI = this.callMethod.bind(this), this.subscribeToEvents(), this.handleClientFields()
            }

            checkAccess(t) {
                const e = this.settings.includes("*");
                if (e) return !0;
                if (void 0 !== t) {
                    const e = this.settings.includes(t);
                    if (e) return !0
                }
                return !1
            }

            callMethod(t, e) {
                if (this.checkAccess(t)) return i["a"].info(`js-api: call method "${t}"`, e), this.methods[t](e);
                i["a"].warn(`js-api: method "${t}" is not allowed`)
            }

            subscribeToEvents() {
                this.checkAccess() && (i["a"].info("js-api: subscribe to events"), new Ps(this.replainSettings).subscribe())
            }

            handleClientFields() {
                this.checkAccess() && (i["a"].info("js-api: handle client fields"), new zs(this.socket, this.chatStore, this.formFields, this.clientFields).handle())
            }
        }, Js = class {
            constructor(t) {
                this.settings = t, i["a"].info("messengers: initialized", t)
            }
        }, Zs = class {
            constructor(t) {
                i["a"].info("microsite: initialized", t), this.settings = t
            }
        };
        const tr = 5;
        var er = class {
            constructor(t, e, n, s, r) {
                this.store = r.qualityControl, this.chatStore = r.chat, this.settings = t, this.isShown = !0, this.message = null;
                const {shownDate: a = Date.now()} = this.store.state;
                Wt["a"].week(a) >= 1 && this.reset(), f["a"].chat.watchCommand("TEXT_MESSAGE", this.updateCountOperatorMessages.bind(this)), f["a"].chat.watchCommand("FILE_MESSAGE", this.updateCountOperatorMessages.bind(this)), f["a"].chat.watchCommand("SHOW_QUALITY_CONTROL", this.showQualityControl.bind(this)), i["a"].info("quality control: initialized", t)
            }

            reset() {
                i["a"].info("quality control: reset state"), this.isShown = !1, this.store.resetCountOperatorMessages()
            }

            updateCountOperatorMessages() {
                this.store.updateCountOperatorMessages()
            }

            showQualityControl() {
                this.isShown || this.show()
            }

            shouldShow() {
                const {enabled: t} = this.settings, {countOperatorMessages: e} = this.store.state;
                return t && !this.isShown && e >= tr
            }

            show(t) {
                i["a"].info("quality control: show"), this.isShown = !0, null === this.message && (this.message = new tt["a"](1), this.chatStore.addMessage(this.message)), this.message.isExpired() && (this.message.time = Date.now()), this.store.setShownDate(), t && t()
            }
        }, nr = class {
            constructor(t, e, n, s, r) {
                this.chatStore = r.chat, this.settings = t, this.settings.length > 0 && this.chatStore.addMessage(new et["a"](this.settings)), f["a"].chat.watchCommand("SUGGEST_MESSAGE", this.onSuggestMessageCommand.bind(this)), i["a"].info("suggests: initialized", t)
            }

            onSuggestMessageCommand(t) {
                i["a"].info("suggests: receive answer", t);
                const e = new Q["a"](t.answer);
                e.setIsOperatorSender(), e.setSender(this.chatStore.operator()), this.chatStore.addMessage(e)
            }
        };

        function sr(t) {
            return "chrome" === t && /Edge/.test(navigator.userAgent) && ("undefined" === typeof window.chrome || "undefined" === typeof window.chrome.runtime)
        }

        function rr() {
            return !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) || !!navigator.getUserMedia || !!navigator.webkitGetUserMedia || !!navigator.mozGetUserMedia
        }

        function ar() {
            return "undefined" !== typeof RTCPeerConnection || "undefined" !== typeof webkitRTCPeerConnection || "undefined" !== typeof mozRTCPeerConnection
        }

        function ir() {
            return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : null
        }

        function or(t) {
            return "undefined" === typeof t && (t = ir()), /Chrome|CriOS/.test(t) ? "chrome" : /Firefox|FxiOS/.test(t) ? "firefox" : /Safari/.test(t) ? "safari" : null
        }

        var cr = () => {
            const t = or();
            return rr() && ar() && !!t && !sr(t)
        };
        const lr = window.parent, ur = lr.document;
        var dr = class {
            constructor(t, e, n, s, r) {
                this.store = r.video, this.chatStore = r.chat, this.settings = t, this.socket = e, this.message = null, this.isShown = !1, this.isSupported = cr(), this.replainSettings = n, i["a"].info("video: initialized", t), this.shouldShow() && this.show(), f["a"].chat.watchCommand("SHOW_CALL_REQUEST", this.onShowCallRequest.bind(this)), this.embedStyles(), this.bindLinks()
            }

            bindLinks() {
                const t = ur.querySelectorAll('a[href="#replain-audio-call"],a[href="#replain-video-call"]');
                if (t.length > 0) for (const e of t) {
                    const t = e.getAttribute("href").includes("audio"), n = t ? "requestAudioCall" : "requestVideoCall";
                    e.addEventListener("click", (function (t) {
                        t.preventDefault(), lr.ReplainAPI(n)
                    }))
                }
            }

            shouldShow() {
                const {active: t} = this.settings;
                return this.isSupported && t && !this.isShown && Vs["a"].isOnline(this.chatStore)
            }

            shouldShowOnMicrosite() {
                const {active: t} = this.settings;
                return this.isSupported && t && Vs["a"].isOnline(this.chatStore)
            }

            show() {
                i["a"].info("video: show"), this.isShown = !0;
                let t = !1;
                null === this.message && (this.message = new st["a"], t = !0), this.store.shownDate() || this.store.setShownDate(), this.message.time = this.store.shownDate(), Wt["a"].hours(this.message.time) >= 10 && (this.store.setShownDate(), this.message.time = this.store.shownDate()), t && this.chatStore.addMessage(this.message)
            }

            onShowCallRequest() {
                this.isSupported ? (this.store.setShownDate(), null !== this.message && this.message.reset(), this.show()) : this.socket.send("Ð¡ALL_UNSUPPORTED")
            }

            embedStyles() {
                u["a"].insertCssRules([["body.__replain_draggable_active", ["user-select", "none"]], ["div.__replain_draggable:after", ["cursor", "move"], ["content", '""'], ["display", "block"], ["position", "absolute"], ["left", "0"], ["right", "0"], ["top", "0"], ["bottom", "auto"], ["height", "15px"]], ["div.__replain_draggable_active:after", ["bottom", "0"], ["height", "auto"]]])
            }
        }, hr = class {
            constructor(t, e, n, s, r) {
                this.store = r.videoWelcome, this.chatStore = r.chat, this.settings = t, this.socket = e, this.message = null, this.isShown = this.store.state.shownDate || !1, i["a"].info("video welcome: initialized", t), this.chatStore.isNewClient() && this.shouldShow() && this.show(), f["a"].chat.watchCommand("SHOW_VIDEO_WELCOME", this.onShowVideoWelcome.bind(this))
            }

            setMessage(t) {
                this.isShown = !0, this.message = t
            }

            shouldShow() {
                const {disabled: t, youtubeId: e} = this.settings;
                return e && !t && !this.isShown && !this.message
            }

            show(t) {
                i["a"].info("video welcome: show"), this.isShown = !0, this.store.setShownDate(), this.chatStore.addMessage(new nt["a"](this.settings)), t && t()
            }

            onShowVideoWelcome() {
                this.message ? (this.message.time = Date.now(), this.chatStore.saveMessages()) : this.chatStore.addMessage(new nt["a"](this.settings))
            }
        };
        const fr = {
            jsAPI: Ys,
            analytics: yn,
            activeInvitation: gn,
            forms: Rs,
            customButton: Is,
            banners: gs,
            videoWelcome: hr,
            suggests: nr,
            messengers: Js,
            qualityControl: er,
            video: dr,
            callback: bs,
            embedded: Fs,
            chatbot: Cs,
            departments: Ls,
            microsite: Zs
        };
        var pr = {
            init(t, e, n, s, r, a) {
                const o = {};
                for (const i of Object.keys(t)) if (fr[i]) {
                    const c = fr[i];
                    o[i] = new c(t[i], n, s, t, e, r, a)
                }
                return i["a"].info("modules: loaded", Object.keys(t)), o
            }
        }, mr = n("a448"), gr = n.n(mr), vr = n("7424");
        const yr = {retries: 5, factor: 3, minTimeout: 1e3, maxTimeout: 6e4, randomize: !0};
        var br = async (t, e) => {
            const {clientId: n, token: s, lastOperatorMessageDate: r, countOwnMessages: a} = e.state;
            let i = r;
            !i && a && (i = 1);
            let o = gr.a.operation(yr);
            return new Promise((e, r) => {
                o.attempt(async () => {
                    try {
                        const r = await Object(vr["a"])(t, n, s, i);
                        e(r)
                    } catch (a) {
                        if (o.retry(a)) return;
                        r(o.mainError())
                    }
                })
            })
        }, _r = n("5e35"), wr = async (t, e) => {
            const {clientId: n, token: s, lastOperatorMessageDate: r, countOwnMessages: a} = e.state;
            let i = r;
            !i && a && (i = 1);
            const o = await Object(vr["c"])(t, n, s, i);
            return o
        }, Cr = n("2292"), Sr = t => Object.keys(t).map(e => `${e}=${t[e]}`).join("&");
        let $r = null;

        function kr(t) {
            clearTimeout($r), $r = setTimeout(() => {
                i["a"].warn("socket: detect broken connection"), t.close()
            }, 1e3 * r["a"].socket.heartbeatSec)
        }

        var xr = t => {
                t.addEventListener("open", () => kr(t)), t.addEventListener("message", ({data: e}) => {
                    switch (e) {
                        case"PING":
                            kr(t);
                            break;
                        default:
                            break
                    }
                }), t.addEventListener("close", () => {
                    clearTimeout($r)
                })
            }, Tr = class {
                constructor(t, e) {
                    this.params = t, this.chatStore = e, this.closed = !0, this.reconnected = 0, this.currentReconnectDelaySec = 1, this.socket = null, this.pending = !1, this.isFormSent = !1
                }

                attachHeartbeat() {
                    xr(this.socket)
                }

                isReconnected() {
                    return this.reconnected || this.pending
                }

                connect() {
                    this.socket = new WebSocket(`${r["a"].websocketHost}?${Sr(Object.assign({reconnected: this.reconnected}, this.params))}`), this.socket.addEventListener("open", this.onOpen.bind(this)), this.socket.addEventListener("message", this.onMessage.bind(this)), this.socket.addEventListener("close", this.onClose.bind(this)), this.socket.addEventListener("error", this.onError.bind(this))
                }

                ping() {
                    this.socket.send("PING")
                }

                onOpen() {
                    i["a"].info("socket: connected"), this.closed = !1, this.chatStore.setConnected(), this.isReconnected() && f["a"].socket.triggerReconnect(), this.chatStore.state.pending && (i["a"].warn("socket: disable pending mode"), this.pending = !1, this.chatStore.disablePending())
                }

                onMessage({data: t}) {
                    if ("PING" === t || "PONG" === t) return;
                    const {command: e, data: n} = JSON.parse(t);
                    i["a"].info("socket: receive command", e, n), this.chatStore.setCommand(e, n)
                }

                onClose(t) {
                    switch (this.closed = !0, i["a"].warn("socket: disconnect", t.code), this.chatStore.setDisconnected(), t.code) {
                        case 4001:
                            setTimeout(this.reconnect.bind(this), 1e4);
                            break;
                        case 4002:
                        case 4003:
                            break;
                        case 4004:
                            i["a"].warn("socket: enable pending mode"), this.pending = !0, this.chatStore.enablePending();
                            break;
                        default:
                            this.reconnect();
                            break
                    }
                }

                onError(t) {
                    this.chatStore.setDisconnected(), i["a"].error(t)
                }

                reconnectDelay() {
                    if (this.reconnected += 1, this.currentReconnectDelaySec += 1, this.reconnected >= r["a"].socket.reconnect.maxCount) return this.reconnected = 0, this.currentReconnectDelaySec = 1, 0;
                    const t = (1 + Math.random()) * Math.pow(1.5, this.currentReconnectDelaySec) * 1e3;
                    return 1e3 * this.currentReconnectDelaySec + t
                }

                reconnect() {
                    const t = this.reconnectDelay();
                    0 !== t ? (i["a"].warn(`socket: ${this.reconnected} attempt connection after ${t} ms.`), setTimeout(this.connect.bind(this), t)) : i["a"].warn("socket: no more retry connect")
                }

                send(t, e, n = !1) {
                    if (!this.socket) return void i["a"].warn("socket: not connect");
                    const s = {command: t, data: e, parameters: this.chatStore.parameters()};
                    this.isFormSent || (s.form = this.chatStore.form(), this.isFormSent = !0), !0 === n && void 0 === s.form && (s.form = this.chatStore.form()), i["a"].info("socket: send command", s), this.socket.send(JSON.stringify(s))
                }
            }, Or = class {
                constructor(t) {
                    this.chatId = encodeURIComponent(t.chatId), this.clientId = encodeURIComponent(t.clientId), this.token = encodeURIComponent(t.token), this.page = encodeURIComponent(t.page), this.lang = t.lang
                }
            }, Er = n("e343"), Mr = n("fd2d"), Ar = n("0418"), Ir = n("7aef"), jr = n("82aa"), Lr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [t.hasCallback && !t.isShownMessengers ? [n("CallbackButton")] : t._e(), n("div", {
                    staticClass: "btn",
                    on: {mouseenter: t.onMouseEnter, mouseleave: t.onMouseLeave}
                }, [n("div", {
                    staticClass: "btn-img -js-animate-wrap",
                    attrs: {title: t.$t("CHAT_BUTTON.TITLE")},
                    on: {click: t.onChatButtonClick}
                }, [n("Icon")], 1), n("transition", [n("Notification")], 1), n("UnreadedCount"), t.hasMessengers ? n("Messengers", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.hasMessengers && t.hoverButton,
                        expression: "hasMessengers && hoverButton"
                    }],
                    ref: "messengers",
                    attrs: {messengers: t.messengers, "has-callback": t.hasCallback},
                    on: {hide: t.onHideMessengers, mounted: t.onMountedMessengers, "messenger-click": t.onMessengerClick}
                }) : t._e()], 1)], 2)
            }, Dr = [], Nr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "callback"}, [n("Link", {staticClass: "link"})], 1)
            }, Fr = [], Rr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("a", {
                    attrs: {title: t.$t("CALLBACK.BTN_TITLE"), href: "javascript:void(0)"},
                    on: {click: t.onOpen}
                }, [n("Icon")], 1)
            }, Pr = [], Br = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("svg", {
                    staticStyle: {"enable-background": "new 0 0 51.6 50.9"},
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 51.6 50.9",
                        "xml:space": "preserve"
                    }
                }, [n("g", [n("path", {
                    staticClass: "accent-color-fill",
                    attrs: {d: "M0.8,28.8v-6.7C0.8,9.8,8.1,0.7,25.8,0.7c17.4,0,25.1,9,25.1,21.4v6.7c0,12.4-7.7,21.4-25.1,21.4\n\t\tC8.1,50.2,0.8,41.2,0.8,28.8z"}
                }), n("path", {
                    staticClass: "icon",
                    attrs: {d: "M25.8,10.9c-10.4,0-14.7,5.3-14.7,12.6v3.9c0,7.3,4.3,12.6,14.7,12.6c0.5,0,1.9,0,1.9,0c0.6,0,1,0.5,1,1V41\n\t\tc0,0.3-0.1,0.5-0.3,0.7l0,0c0,0-0.1,0.1,0.1,0.1c1.7-0.2,12.1-1.7,12.1-14.4v-1.1v-2.8C40.5,16.3,36,10.9,25.8,10.9z"}
                }), n("g", [n("path", {
                    staticClass: "accent-color-fill",
                    attrs: {d: "M30.1,29.6l-2.4-0.9c0,0-0.7-0.3-1.5,0.3l-0.6,0.5c0,0-0.2-0.1-0.5-0.2l0,0c0,0-2.7-2.1-3.3-3.9\n\t\t\tc0-0.1,0-0.1-0.1-0.2v0l0,0c-0.1-0.2-0.1-0.3-0.1-0.3l0.6-0.5c0.7-0.7,0.5-1.4,0.5-1.4l-0.5-2.5c-1.1-2-3.5,0.4-3.5,0.4\n\t\t\tc-0.8,1.4-0.8,2.8-0.4,4c0,0.1,0.7,3.8,5.3,7c1.3,1,3.2,1.9,5.3,1.1C29.2,33,32,31,30.1,29.6z"}
                }), n("g", [n("path", {
                    staticClass: "accent-color-fill",
                    attrs: {d: "M28,26.9C28,26.9,28,26.9,28,26.9c-0.4,0-0.6-0.3-0.6-0.7c0.1-1.3-0.8-2.5-2.1-2.6c-0.3,0-0.6-0.3-0.5-0.6\n\t\t\t\tc0-0.3,0.3-0.6,0.6-0.5c2,0.2,3.4,2,3.2,3.9C28.6,26.6,28.3,26.9,28,26.9z"}
                }), n("path", {
                    staticClass: "accent-color-fill",
                    attrs: {d: "M30.4,27.1C30.4,27.1,30.3,27.1,30.4,27.1c-0.4,0-0.6-0.3-0.6-0.7c0.1-1.3-0.2-2.5-1-3.5\n\t\t\t\tc-0.8-1-1.9-1.6-3.2-1.7c-0.3,0-0.6-0.3-0.5-0.6c0-0.3,0.3-0.6,0.6-0.5c1.6,0.2,3,0.9,4,2.2c1,1.2,1.5,2.8,1.3,4.4\n\t\t\t\tC30.9,26.9,30.7,27.1,30.4,27.1z"}
                }), n("path", {
                    staticClass: "accent-color-fill",
                    attrs: {d: "M32.8,27.4C32.7,27.4,32.7,27.4,32.8,27.4c-0.4,0-0.6-0.3-0.6-0.7c0.4-3.9-2.5-7.5-6.4-7.9\n\t\t\t\tc-0.3,0-0.6-0.3-0.5-0.6c0-0.3,0.3-0.6,0.6-0.5c4.6,0.5,7.9,4.6,7.4,9.2C33.3,27.1,33.1,27.4,32.8,27.4z"}
                })])])])])
            }, zr = [], Ur = (n("808c"), n("2877")), qr = {}, Hr = Object(Ur["a"])(qr, Br, zr, !1, null, "1822eb04", null),
            Vr = Hr.exports, Wr = {
                components: {Icon: Vr}, methods: {
                    onOpen() {
                        this.$root.$stores.chat.setCallbackMode()
                    }
                }
            }, Gr = Wr, Kr = Object(Ur["a"])(Gr, Rr, Pr, !1, null, null, null), Qr = Kr.exports,
            Xr = {components: {Link: Qr}}, Yr = Xr,
            Jr = (n("e387"), Object(Ur["a"])(Yr, Nr, Fr, !1, null, "370cced7", null)), Zr = Jr.exports,
            ta = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "messengers"}, [t.hasCallback ? n("CallbackLink", {staticClass: "messenger-link callback-btn"}) : t._e(), t._l(t.messengers, (function (e) {
                    return [n("a", {
                        key: e.name,
                        staticClass: "messenger-link",
                        attrs: {href: e.link, title: e.name, target: "_blank"},
                        on: {
                            click: function (n) {
                                return t.onMessengerClick(e.name)
                            }
                        }
                    }, [n("img", {
                        staticClass: "img",
                        attrs: {src: t.$baseUrl + "/img/modules/messengers/" + e.name + ".svg", alt: e.name}
                    })])]
                })), t.isTouch ? n("a", {
                    staticClass: "messenger-link -close",
                    attrs: {href: "javascript:void(null);"},
                    on: {click: t.onHideMessengers}
                }, [n("img", {
                    attrs: {
                        src: t.$baseUrl + "/img/modules/messengers/close.svg",
                        alt: "close"
                    }
                })]) : t._e()], 2)
            }, ea = [], na = {
                name: "Messengers",
                components: {CallbackLink: Qr},
                props: {hasCallback: {type: Boolean, required: !1, default: !1}, messengers: {type: Array, required: !0}},
                data() {
                    return {isTouch: Object(h["d"])()}
                },
                mounted() {
                    this.$emit("mounted")
                },
                methods: {
                    onHideMessengers() {
                        this.$emit("hide")
                    }, onMessengerClick(t) {
                        this.$emit("messenger-click", t)
                    }
                }
            }, sa = na, ra = (n("6b93"), Object(Ur["a"])(sa, ta, ea, !1, null, "81ba873a", null)), aa = ra.exports, ia = {
                topButton: !1, elements: {}, setTopButton() {
                    this.topButton = !0
                }, setElements(t) {
                    this.elements.chatButton = t, this.elements.closeButton = t.querySelector(".messenger-link.-close"), this.elements.messengers = t.querySelectorAll(".messenger-link:not(.-close)")
                }, hasElements() {
                    return !!this.elements.messengers
                }, animationDirection(t) {
                    const e = {icons: null, close: null};
                    return !0 === t ? this.topButton ? (e.icons = [-15, 0], e.close = [15, 0]) : (e.icons = [15, 0], e.close = [-15, 0]) : this.topButton ? (e.icons = [0, -15], e.close = [0, 15]) : (e.icons = [0, 15], e.close = [0, -15]), e
                }, staggerAnimationTime(t, e, n) {
                    const s = t + (t - e) * n;
                    return s
                }, animateChatButtonIn() {
                    const t = 200, e = {targets: this.elements.chatButton, duration: t, easing: "easeOutBack"};
                    return this.topButton ? e.top = 72 : e.bottom = 72, pn(e), t
                }, animateChatButtonOut() {
                    const t = 200, e = {targets: this.elements.chatButton, duration: t, easing: "easeOutBack"};
                    return this.topButton ? e.top = 4 : e.bottom = 4, pn(e), t
                }, showMessengersClose() {
                    const t = 200;
                    return pn({
                        targets: this.elements.closeButton,
                        duration: t,
                        opacity: 1,
                        scale: 1,
                        delay: 80,
                        easing: "easeOutBack"
                    }), t
                }, hideMessengersClose() {
                    const t = 200;
                    return pn({
                        targets: this.elements.closeButton,
                        duration: t,
                        opacity: 0,
                        scale: .7,
                        easing: "easeInSine"
                    }), t
                }, showMessengers() {
                    const {messengers: t} = this.elements, e = this.animationDirection(!0), n = 200, s = 80,
                        r = this.staggerAnimationTime(n, s, t.length);
                    return pn({
                        targets: t,
                        duration: n,
                        translateY: e.icons,
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        delay: pn.stagger(s),
                        easing: "easeOutBack"
                    }), r
                }, hideMessengers() {
                    const t = this.animationDirection(!1), {messengers: e} = this.elements, n = 100, s = 40,
                        r = this.staggerAnimationTime(n, s, e.length);
                    return pn({
                        targets: e,
                        duration: n,
                        translateY: t.icons,
                        opacity: 0,
                        scale: .7,
                        rotate: 45,
                        delay: pn.stagger(s),
                        easing: "easeInSine"
                    }), r
                }
            }, oa = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.existNotification,
                        expression: "existNotification"
                    }], ref: t.$options.name, staticClass: "notification accent-color-bg"
                }, [n("span", {staticClass: "corner accent-color-text"}, [n("SvgIcon", {attrs: {icon: "corner"}})], 1), n("span", {
                    staticClass: "text",
                    domProps: {innerHTML: t._s(t.$options.filters.safehtml(t.text))},
                    on: {click: t.onOpenClick}
                }), n("span", {
                    staticClass: "close",
                    on: {click: t.onCloseClick}
                }, [n("SvgIcon", {attrs: {icon: "cross"}})], 1)])
            }, ca = [], la = n("0032"), ua = {
                name: "Notification", components: {SvgIcon: la["a"]}, data() {
                    return {isMobile: Object(h["c"])().any}
                }, computed: {
                    existNotification() {
                        return this.$root.$stores.chat.existNotification()
                    }, text() {
                        return this.$root.$stores.chat.state.notification.text
                    }
                }, mounted() {
                    this.resize()
                }, updated() {
                    this.resize()
                }, methods: {
                    reset() {
                        this.$root.$stores.chat.setNotification({text: "", keep: !1, activeInvitation: !1})
                    }, resize() {
                        const t = this.$options.name;
                        if (!this.existNotification) return void this.$wrapper.widget.unmountComponent(t);
                        const e = this.$refs[t];
                        this.$wrapper.widget.mountComponent(t, e.clientWidth + 100, e.clientHeight + 15)
                    }, onOpenClick() {
                        this.$root.$stores.chat.setOpenState()
                    }, onCloseClick() {
                        const {activeInvitation: t} = this.$root.$stores.chat.state.notification, {analytics: e} = this.$root.$modules;
                        e && t && e.push(r["a"].analytics.events.INVITATION_CLOSED), this.reset()
                    }
                }
            }, da = ua, ha = (n("8d4f"), Object(Ur["a"])(da, oa, ca, !1, null, "485c53e5", null)), fa = ha.exports,
            pa = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.countUnreaded ? n("span", {staticClass: "unreaded-count"}, [n("span", {staticClass: "text"}, [t._v(t._s(t.countUnreaded))]), n("span", {staticClass: "corner"}, [n("SvgIcon", {attrs: {icon: "corner"}})], 1)]) : t._e()
            }, ma = [], ga = {
                components: {SvgIcon: la["a"]}, computed: {
                    countUnreaded() {
                        return this.$root.$stores.chat.state.countUnreaded
                    }
                }
            }, va = ga, ya = (n("7ae3"), Object(Ur["a"])(va, pa, ma, !1, null, "57516536", null)), ba = ya.exports,
            _a = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("svg", {
                    attrs: {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 50.1314354 49.4648323"
                    }
                }, [n("defs", [n("clipPath", {attrs: {id: "cut"}}, [n("path", {attrs: {d: "M25.0657082,49.4648323L25.0657082,49.4648323C7.7844591,49.4648323,0,40.5237274,0,28.3366642v-7.7919445 C0,9.2451239,7.5344591,0,25.0657082,0l0,0c17.3125,0,25.0657272,9.0549793,25.0657272,21.2737293v7.3129101 C50.1314354,40.3987274,42.1907082,49.4648323,25.0657082,49.4648323z"}})])]), n("path", {
                    staticClass: "bg accent-color-fill",
                    attrs: {d: "M25.0657082,49.4648323L25.0657082,49.4648323C7.7844591,49.4648323,0,40.5237274,0,28.3366642v-7.7919445 C0,9.2451239,7.5344591,0,25.0657082,0l0,0c17.3125,0,25.0657272,9.0549793,25.0657272,21.2737293v7.3129101 C50.1314354,40.3987274,42.1907082,49.4648323,25.0657082,49.4648323z"}
                }), n("g", {attrs: {"clip-path": "url(#cut)"}}, [n("g", {staticClass: "group -group-1 -active"}, [n("path", {
                    staticClass: "icon",
                    attrs: {d: "M25.0696144,10.2087879c-10.4013662,0-14.7231436,5.3045654-14.7231436,12.5584106v3.930481 c0,7.2537823,4.3217773,12.5583477,14.7231436,12.5583477c0.4887695,0,1.8637695-0.0402832,1.8637695-0.0402832 c0.5500488,0,1,0.4500122,1,1v0.078064c0,0.2859497-0.1325684,0.5307007-0.3291016,0.7098389l0.0046387,0.0029297 c0,0-0.144043,0.1377563,0.1071777,0.1119995c1.732666-0.1607666,12.0688477-1.6541138,12.0688477-14.4208965V25.561388v-2.7941895 C39.7849464,15.5133533,35.2712746,10.2087879,25.0696144,10.2087879z M25.0657082,31.2968616 c-1.5014648,0-2.7697754-1.2681885-2.7697754-2.7698364c0-1.5013428,1.2683105-2.7695923,2.7697754-2.7695923 s2.7697754,1.2682495,2.7697754,2.7695923C27.8354836,30.0286732,26.567173,31.2968616,25.0657082,31.2968616z M25.0657082,23.8416004c-1.5014648,0-2.7697754-1.2681885-2.7697754-2.7698364 c0-1.5013428,1.2683105-2.7698364,2.7697754-2.7698364s2.7697754,1.2684937,2.7697754,2.7698364 C27.8354836,22.5734119,26.567173,23.8416004,25.0657082,23.8416004z"}
                })])]), n("g", {attrs: {"clip-path": "url(#cut)"}}, [n("g", {staticClass: "group -group-2"}, [n("path", {
                    staticClass: "icon",
                    attrs: {d: "M25.0696144,10.2087879c-10.4013662,0-14.7231436,5.3045654-14.7231436,12.5584106v3.930481 c0,7.2537823,4.3217773,12.5583477,14.7231436,12.5583477c0.4887695,0,1.8637695-0.0402832,1.8637695-0.0402832 c0.5500488,0,1,0.4500122,1,1v0.078064c0,0.2859497-0.1325684,0.5307007-0.3291016,0.7098389l0.0046387,0.0029297 c0,0-0.144043,0.1377563,0.1071777,0.1119995c1.732666-0.1607666,12.0688477-1.6541138,12.0688477-14.4208965V25.561388v-2.7941895 C39.7849464,15.5133533,35.2712746,10.2087879,25.0696144,10.2087879z M25.0657082,31.2968616 c-1.5014648,0-2.7697754-1.2681885-2.7697754-2.7698364c0-1.5013428,1.2683105-2.7695923,2.7697754-2.7695923 s2.7697754,1.2682495,2.7697754,2.7695923C27.8354836,30.0286732,26.567173,31.2968616,25.0657082,31.2968616z M25.0657082,23.8416004c-1.5014648,0-2.7697754-1.2681885-2.7697754-2.7698364 c0-1.5013428,1.2683105-2.7698364,2.7697754-2.7698364s2.7697754,1.2684937,2.7697754,2.7698364 C27.8354836,22.5734119,26.567173,23.8416004,25.0657082,23.8416004z"}
                })])])])
            }, wa = [], Ca = (n("4734"), {}), Sa = Object(Ur["a"])(Ca, _a, wa, !1, null, "41e0831b", null),
            $a = Sa.exports, ka = {
                components: {Notification: fa, UnreadedCount: ba, Messengers: aa, CallbackButton: Zr, Icon: $a},
                props: {isShow: {type: Boolean, default: !0, required: !0}},
                data() {
                    return {
                        messengers: [],
                        isTouch: Object(h["d"])(),
                        isShownMessengers: !1,
                        hoverButton: !1,
                        animationTimeouts: {messengers: null, chatButton: null}
                    }
                },
                computed: {
                    hasMessengers() {
                        return this.messengers.length > 0
                    }, hasCallback() {
                        const {callback: t = null} = this.$root.$modules;
                        return null !== t && t.shouldShow()
                    }
                },
                watch: {
                    isShow: function (t, e) {
                        t !== e && !0 === t && this.mountCallback()
                    }
                },
                created() {
                    const {messengers: t, customButton: e} = this.$root.$modules;
                    t && this.activateMessengers(t, e), f["a"].chat.watchChatState("OPEN", this.onOpenStateChat), f["a"].chat.watchChatState("HIDE", this.onHideStateChat)
                },
                mounted() {
                    Object(h["a"])() && document.querySelector(".btn").addEventListener("click", t => {
                        t.target.classList.contains(".btn-img") && this.onChatButtonClick()
                    }), this.mountCallback()
                },
                methods: {
                    onOpenStateChat() {
                        this.hasMessengers && this.onHideMessengers()
                    }, onHideStateChat() {
                        this.hoverButton = !1, this.isShownMessengers = !1
                    }, activateMessengers(t, e) {
                        for (const n in t.settings) this.messengers.push({name: n, link: t.settings[n]});
                        if (e) {
                            const {iconPosition: t} = e.settings;
                            t && t.top && ia.setTopButton()
                        }
                    }, clearMessengersTimeout() {
                        this.animationTimeouts.messengers && clearTimeout(this.animationTimeouts.messengers)
                    }, clearChatButtonTimeout() {
                        this.animationTimeouts.chatButton && clearTimeout(this.animationTimeouts.chatButton)
                    }, mountCallback() {
                        this.hasCallback && this.$wrapper.widget.mountComponent("callback", 0, 150)
                    }, mountComponent(t, e, n) {
                        const s = this.$refs[t];
                        return this.$wrapper.widget.mountComponent(s.$options.name, s.$el.clientWidth + e, s.$el.clientHeight + n), !0
                    }, unmountComponent(t) {
                        this.$wrapper.widget.unmountComponent(this.$refs[t].$options.name)
                    }, onChatButtonClick() {
                        this.hasMessengers ? this.onChatButtonClickWithMessengers() : this.$root.$stores.chat.setOpenState()
                    }, onChatButtonClickWithMessengers() {
                        this.isTouch ? !this.isShownMessengers && ia.hasElements() ? (this.isShownMessengers = !0, this.clearMessengersTimeout(), this.clearChatButtonTimeout(), this.mountComponent("messengers", 6, 140) && (ia.animateChatButtonIn(), ia.showMessengers(), ia.showMessengersClose())) : (document.querySelector(".messenger-link.-close").click(), this.$root.$stores.chat.setOpenState()) : this.$root.$stores.chat.setOpenState()
                    }, onMouseEnter() {
                        this.hoverButton = !0, this.$nextTick(() => {
                            this.hasMessengers && this.onMouseEnterWithMessengers()
                        })
                    }, onMouseLeave() {
                        this.hasMessengers && this.onMouseLeaveWithMessengers(() => {
                            this.hoverButton = !1
                        })
                    }, onMouseEnterWithMessengers() {
                        this.isTouch || this.isShownMessengers || (this.isShownMessengers = !0, this.clearMessengersTimeout(), ia.hasElements() && (this.mountComponent("messengers", 6, 140), ia.showMessengers()))
                    }, onMouseLeaveWithMessengers(t) {
                        if (this.isTouch) return;
                        const e = ia.hideMessengers();
                        this.animationTimeouts.messengers = setTimeout(() => {
                            this.unmountComponent("messengers"), this.$nextTick(() => {
                                this.isShownMessengers = !1
                            }), t()
                        }, e)
                    }, onHideMessengers() {
                        ia.hideMessengersClose(), this.animationTimeouts.chatButton = setTimeout(() => {
                            ia.animateChatButtonOut()
                        }, 150);
                        const t = ia.hideMessengers();
                        this.animationTimeouts.messengers = setTimeout(() => {
                            this.unmountComponent("messengers"), this.$nextTick(() => {
                                this.isShownMessengers = !1
                            })
                        }, t)
                    }, onMountedMessengers() {
                        this.hasMessengers && ia.setElements(this.$el)
                    }, onMessengerClick(t) {
                        const {analytics: e} = this.$root.$modules;
                        e && e.push(r["a"].analytics.events.CLIENT_CLICKED_MESSENGER, t)
                    }
                }
            }, xa = ka, Ta = (n("f98c"), Object(Ur["a"])(xa, Lr, Dr, !1, null, "e648039c", null)), Oa = Ta.exports,
            Ea = n("2a52"), Ma = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "callback -js-scrollable-callback",
                    class: {"-sent": t.sent}
                }, [n("div", {staticClass: "block"}, [t.sent ? [n("h3", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.SUBMITTED_REQUEST",
                        expression: "'CALLBACK.SUBMITTED_REQUEST'"
                    }]
                }), t.isOnline() ? t._e() : n("ReturnTime", {attrs: {"show-icon": !1}})] : t._e(), t.sent ? t._e() : [n("h3", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.HEADER",
                        expression: "'CALLBACK.HEADER'"
                    }]
                }), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.DESC",
                        expression: "'CALLBACK.DESC'"
                    }]
                }), n("form", {
                    staticClass: "form -white", on: {
                        submit: function (e) {
                            return e.preventDefault(), t.onSubmitCallback.apply(null, arguments)
                        }
                    }
                }, [n("div", {staticClass: "fields"}, [n("div", {staticClass: "field-wrap"}, [!1 === t.isValid ? n("div", {staticClass: "error-text"}, [t._v(" " + t._s(t.$t("FORM.INVALID_TEL_ERROR")) + " ")]) : t._e(), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.$v.phone.$model,
                        expression: "$v.phone.$model",
                        modifiers: {trim: !0}
                    }],
                    staticClass: "form-field -input",
                    attrs: {type: "tel", name: "phone", required: "required", placeholder: "+1234567890", maxlength: "17"},
                    domProps: {value: t.$v.phone.$model},
                    on: {
                        input: [function (e) {
                            e.target.composing || t.$set(t.$v.phone, "$model", e.target.value.trim())
                        }, t.onInput], focus: t.onFocus, blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), t.shouldAskDepartment ? n("div", {staticClass: "field-wrap"}, [n("Departments", {
                    model: {
                        value: t.departmentId,
                        callback: function (e) {
                            t.departmentId = e
                        },
                        expression: "departmentId"
                    }
                })], 1) : t._e(), t.shouldAgree ? n("div", {staticClass: "field-wrap -transparent"}, [n("label", {staticClass: "checkbox-wrap"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isAgree,
                        expression: "isAgree"
                    }],
                    attrs: {type: "checkbox", name: "checkbox"},
                    domProps: {checked: Array.isArray(t.isAgree) ? t._i(t.isAgree, null) > -1 : t.isAgree},
                    on: {
                        change: function (e) {
                            var n = t.isAgree, s = e.target, r = !!s.checked;
                            if (Array.isArray(n)) {
                                var a = null, i = t._i(n, a);
                                s.checked ? i < 0 && (t.isAgree = n.concat([a])) : i > -1 && (t.isAgree = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.isAgree = r
                        }
                    }
                }), n("span", {staticClass: "fake-input"}, [n("SvgIcon", {
                    attrs: {
                        icon: "check",
                        classes: "checkmark"
                    }
                })], 1), t._v(" Â  "), n("span", {
                    staticClass: "privacy",
                    domProps: {innerHTML: t._s(t.privacyText)}
                })])]) : t._e()]), n("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.CALL_ME_BTN",
                        expression: "'CALLBACK.CALL_ME_BTN'"
                    }], staticClass: "button submit-btn accent-color-bg", attrs: {disabled: !t.isAgree}
                })]), t.messengers.length > 0 ? n("Messengers", {
                    attrs: {messengers: t.messengers},
                    on: {submit: t.onSubmitMessengers}
                }) : t._e()]], 2), t.isOnline() || t.sent ? t._e() : n("ReturnTime", {attrs: {"show-icon": !1}}), n("br"), n("Footer")], 1)
            }, Aa = [], Ia = n("1dce"), ja = n("b5ae"), La = n("46ef"), Da = n("4128"), Na = n("362f"), Fa = n("b077"),
            Ra = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "messengers"}, [n("a", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.MESSENGERS_TITLE",
                        expression: "'CALLBACK.MESSENGERS_TITLE'"
                    }], staticClass: "show", attrs: {href: "javascript:void(0)"}, on: {click: t.onShow}
                }), t.opened ? n("AutoFeedback", {
                    attrs: {
                        message: t.autoFeedbackMessage,
                        "contacts-text": t.autoFeedbackForm.contactsText(),
                        values: t.autoFeedbackForm.values(),
                        "show-header": !1,
                        messengers: t.messengers
                    }, on: {submit: t.onSubmit}
                }) : t._e()], 1)
            }, Pa = [], Ba = n("649f"), za = {
                components: {AutoFeedback: Ba["a"]}, props: {messengers: {type: Array, required: !0}}, data() {
                    return {show: !1, autoFeedbackForm: null, autoFeedbackMessage: new Y["a"]}
                }, computed: {
                    opened() {
                        return this.show && null !== this.autoFeedbackForm
                    }
                }, created() {
                    const {forms: t} = this.$root.$modules;
                    t && (this.autoFeedbackForm = new La["a"](t.settings, this.$root.$socket, this.$root.$stores))
                }, methods: {
                    onShow() {
                        this.$emit("show-click"), this.show = !0, this.$nextTick(() => {
                            Object(Er["a"])(".-js-scrollable-callback")
                        })
                    }, onSubmit(t) {
                        this.$emit("submit", t.form)
                    }
                }
            }, Ua = za, qa = (n("46cf"), Object(Ur["a"])(Ua, Ra, Pa, !1, null, "75369f36", null)), Ha = qa.exports,
            Va = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "footer"}, [n("a", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CALLBACK.GO_TO_CHAT",
                        expression: "'CALLBACK.GO_TO_CHAT'"
                    }],
                    staticClass: "go-chat-btn",
                    attrs: {href: "javascript:void(null)"},
                    on: {click: t.onChatButtonClick}
                }), n("div", {staticClass: "chat-btn-block"}, [n("div", {
                    staticClass: "chat-btn",
                    on: {click: t.onChatButtonClick}
                }, [n("ChatButtonIcon")], 1)])])
            }, Wa = [], Ga = {
                components: {ChatButtonIcon: $a}, methods: {
                    onChatButtonClick() {
                        this.$root.$stores.chat.setOpenState(), setTimeout(() => {
                            Object(Er["a"])(".-js-scrollable-dialog")
                        }, 100)
                    }
                }
            }, Ka = Ga, Qa = (n("637b"), Object(Ur["a"])(Ka, Va, Wa, !1, null, "0e0ade5e", null)), Xa = Qa.exports, Ya = {
                components: {Footer: Xa, SvgIcon: la["a"], Messengers: Ha, ReturnTime: Na["a"], Departments: Fa["a"]},
                mixins: [Ia["validationMixin"]],
                data() {
                    return {
                        phone: "",
                        code: "",
                        isValid: null,
                        isAgree: !1,
                        sent: !1,
                        autoFeedbackForm: null,
                        departmentId: ""
                    }
                },
                computed: {
                    shouldAskDepartment() {
                        const {departments: t} = this.$root.$modules;
                        return !(!t || !t.shouldAskDepartment())
                    }, privacyText() {
                        const {text: t = ""} = this.$root.$stores.chat.state.settings.privacy || {};
                        return t
                    }, shouldAgree() {
                        const {active: t = !1} = this.$root.$stores.chat.state.settings.privacy || {};
                        return t
                    }, messengers() {
                        return null === this.autoFeedbackForm ? [] : this.autoFeedbackForm.isEnable() ? this.autoFeedbackForm.messengers() : []
                    }
                },
                mounted() {
                    this.shouldAgree || (this.isAgree = !0)
                },
                validations() {
                    return {phone: {required: ja["required"], phone: Da["a"]}}
                },
                created() {
                    const {forms: t} = this.$root.$modules;
                    t && (this.autoFeedbackForm = new La["a"](t.settings, this.$root.$socket, this.$root.$stores))
                },
                methods: {
                    isOnline() {
                        return Vs["a"].isOnline(this.$root.$stores.chat)
                    }, analytics(t, e) {
                        const {analytics: n} = this.$root.$modules;
                        n && n.push(t, e)
                    }, onInput() {
                        this.phone = "+" + this.phone.replace(/\D/g, ""), this.isValid = null
                    }, onFocus() {
                        0 === this.phone.length && (this.phone = "+" + this.code)
                    }, validate() {
                        const {$error: t, $dirty: e} = this.$v.phone;
                        return this.isValid = !t && e, this.isValid
                    }, onSuccessSubmit() {
                        this.sent = !0;
                        const {callback: t} = this.$root.$modules;
                        t.submit(), this.analytics(r["a"].analytics.events.CLIENT_SENT_REQUEST_CALLBACK), this.$root.$globalWatcher.trigger(f["a"].events.CLIENT_SENT_REQUEST_CALLBACK, this.$root.$stores.chat.form())
                    }, onSubmitCallback() {
                        if (!this.validate()) return;
                        this.onSuccessSubmit();
                        const t = this.$root.$stores.chat.form();
                        t.phone = this.phone, this.$root.$stores.chat.setForm(t), this.$root.$stores.chat.setDepartment(this.departmentId), this.$root.$socket.send("CALLBACK_REQUEST", {
                            type: "phone",
                            value: this.phone
                        }, !0)
                    }, onSubmitMessengers(t) {
                        this.onSuccessSubmit();
                        const e = Object.keys(t)[0], n = t[e], s = this.$root.$stores.chat.form();
                        s[e] = n, this.$root.$stores.chat.setForm(s), this.$root.$socket.send("CALLBACK_REQUEST", {
                            type: e,
                            value: n
                        }, !0)
                    }
                }
            }, Ja = Ya, Za = (n("fd18"), Object(Ur["a"])(Ja, Ma, Aa, !1, null, "5277bf0c", null)), ti = Za.exports,
            ei = n("1a36");
        const ni = window.parent, si = new Set(["ar", "fa", "he"]);
        var ri = {
                name: "Widget",
                components: {
                    Header: Ar["a"],
                    Dialog: Ea["a"],
                    Footer: Mr["a"],
                    ChatButton: Oa,
                    SvgIcons: Ir["a"],
                    DropFiles: jr["a"],
                    Callback: ti,
                    DepartmentsDialog: ei["a"]
                },
                data() {
                    return {
                        initialized: !1,
                        isShowChatButton: !0,
                        isMobile: Object(h["c"])().any,
                        isTouch: Object(h["d"])(),
                        colorLight: !1,
                        chatDragenter: !1,
                        isSmallBreakpoint: u["a"].isSmallBreakpoint(),
                        isHideChatButton: !1,
                        iconPosition: ["-right", "-bottom"],
                        isRTL: !1,
                        history: [],
                        lastShownTime: Date.now()
                    }
                },
                computed: {
                    isInitialized() {
                        return this.initialized
                    }, isDefaultMode() {
                        return this.$root.$stores.chat.isDefaultMode()
                    }, isDarkTheme() {
                        return this.$root.$stores.chat.isDarkTheme()
                    }, isCallbackMode() {
                        return this.$root.$stores.chat.isCallbackMode()
                    }, isOpenStateChat() {
                        return this.$root.$stores.chat.isOpenState()
                    }, isColorLight() {
                        return this.colorLight
                    }, isChatDragenter() {
                        return this.chatDragenter
                    }, iconPositionClasses() {
                        return this.iconPosition.join(" ")
                    }, requeredAskDepartment() {
                        const {departments: t} = this.$root.$modules;
                        return !(!t || !t.requeredAskDepartment())
                    }, isActive() {
                        return !!this.isEmbedded || !1 === this.requeredAskDepartment
                    }
                },
                async created() {
                    this.$isDemo && i["a"].warn("chat: enable demo mode"), await this.init()
                },
                methods: {
                    async init() {
                        i["a"].info("chat: initâ€¦"), this.$root.$isEmbedded = !1, this.$wrapper.widget.setHideState(), f["a"].chat.watchCommand("INIT", this.onInitCommand), f["a"].chat.watchCommand("GET_USER_INFO", this.onUserInfoCommand), f["a"].chat.watchChatState("OPEN", this.onOpenStateChat), f["a"].chat.watchEveryCommand((t, e) => {
                            Vt(this.$root.$stores.chat, this.$root.$intl, t, e)
                        }), f["a"].socket.watchReconnect(this.onReconnect), u["a"].onResize(t => {
                            this.isSmallBreakpoint = t
                        }), await this.authorize(), await this.connect(), u["a"].onShown(this.onShowApp)
                    }, onFocus() {
                        this.chatDragenter = !1, this.$wrapper.widget.bringToFront(), this.setParameters()
                    }, setParameters() {
                        const {department: t = null} = this.$replainSettings;
                        this.$root.$stores.chat.setParameters({departmentId: t})
                    }, async authorize() {
                        if (this.$isDemo) return void i["a"].info("chat: demo authorizeâ€¦");
                        i["a"].info("chat: authorizeâ€¦");
                        const {clientId: t, token: e, history: n = []} = await br(this.$replainSettings.id, this.$root.$stores.chat);
                        this.history = n, this.$root.$stores.chat.setClientId(t), this.$root.$stores.chat.setToken(e), i["a"].info("chat: authorized")
                    }, async connect() {
                        if (this.$isDemo) return this.$root.$socket = new Tr, s["default"].prototype.$socket = this.$root.$socket, void i["a"].info("chat: demo connectionâ€¦");
                        i["a"].info("chat: connectionâ€¦");
                        const t = new Tr(new Or({
                            chatId: this.$root.$stores.chat.state.id,
                            clientId: this.$root.$stores.chat.state.clientId,
                            token: this.$root.$stores.chat.state.token,
                            page: u["a"].url(),
                            lang: u["a"].language()
                        }), this.$root.$stores.chat);
                        t.connect(), this.$root.$socket = t, s["default"].prototype.$socket = this.$root.$socket
                    }, async onShowApp() {
                        if (Wt["a"].hours(this.lastShownTime) >= 1) {
                            const {history: t = []} = await wr(this.$replainSettings.id, this.$root.$stores.chat);
                            this.history = t
                        }
                        if (this.lastShownTime = Date.now(), this.$root.$stores.chat.state.pending) return i["a"].warn("socket: need to reconnect, because the pending mode"), void this.$root.$socket.connect();
                        this.$root.$socket.ping()
                    }, showNotification() {
                        const t = this.$root.$stores.chat.unreadedMessages().pop(), {keep: e} = this.$root.$stores.chat.state.notification;
                        e && t && this.$root.$stores.chat.setNotification({text: t.message})
                    }, async customize(t) {
                        const {color: e, colorLight: n, lang: s, heartbeat: r} = t;
                        this.$root.$stores.chat.setSettings(t), await this.$root.$intl.loadLanguage(s), r && this.$root.$socket.attachHeartbeat(), s && si.has(s) && (this.isRTL = !0, this.$wrapper.widget.setRTLMode()), this.colorLight = n, Object(_r["a"])(e)
                    }, activateModules(t) {
                        this.$root.$modules = {}, t.modules && Object.keys(t.modules).length > 0 && (this.$root.$modules = pr.init(t.modules, this.$root.$stores, this.$root.$socket, this.$root.$replainSettings, this.$root.$intl, this.$root.$globalWatcher)), s["default"].prototype.$modules = this.$root.$modules, this.activateActiveInvitation(), this.activateCustomButton()
                    }, activateActiveInvitation() {
                        const {activeInvitation: t, customButton: e} = this.$root.$modules;
                        t && (e && e.isHideChatButton() || t.start(() => {
                            this.analytics(r["a"].analytics.events.INVITATION_SHOWN), f["a"].trigger(f["a"].events.INVITATION_SHOWN, this.$root.$stores.chat.form())
                        }))
                    }, activateCustomButton() {
                        const {customButton: t} = this.$root.$modules;
                        t && (this.isHideChatButton = t.isHideChatButton(), this.isHideChatButton && this.$wrapper.widget.setInvisibleMode(), t.isCustomIconPosition() && (this.$wrapper.widget.disableRTLMode(), t.isTopIcon() && (this.iconPosition[1] = "-top"), t.isLeftIcon() && (this.iconPosition[0] = "-left"), this.$wrapper.widget.setCustomIconPosition(t.settings.iconPosition)))
                    }, applyGlobalSettings(t) {
                        const {openChatAfterPageLoad: e = !1} = t;
                        e && this.$nextTick(() => {
                            ni.ReplainAPI("open")
                        })
                    }, async onInitCommand(t) {
                        if (this.initialized) return;
                        i["a"].info("chat: initialized", t), await this.customize(t), this.showNotification(), this.activateModules(t), this.initialized = !0;
                        const {microsite: e} = this.$replainSettings;
                        !0 === e && window.parent.dispatchEvent(new CustomEvent(r["a"].widget.events.INIT, {
                            detail: {
                                stores: this.$root.$stores,
                                modules: this.$root.$modules,
                                socket: this.$root.$socket,
                                globalWatcher: this.$root.$globalWatcher
                            }
                        })), this.applyGlobalSettings(this.$root.$replainSettings), this.$root.$stores.chat.initialized(), this.$nextTick(() => {
                            f["a"].trigger(f["a"].events.WIDGET_LOADED)
                        })
                    }, onUserInfoCommand() {
                        this.$root.$socket.send("TEXT_MESSAGE", {message: u["a"].debugInfo()})
                    }, beforeChatOpenState() {
                        this.isShowChatButton = !1, setTimeout(() => {
                            this.$wrapper.widget.setOpenState(), Object(Er["a"])(".-js-scrollable-dialog")
                        }, 16)
                    }, afterChatHideState() {
                        this.$wrapper.widget.setHideState(), setTimeout(() => {
                            this.isShowChatButton = !0, this.$root.$globalWatcher.trigger(f["a"].events.CLIENT_CLOSED_CHAT, this.$root.$stores.chat.form())
                        }, 16)
                    }, onOpenStateChat() {
                        this.$root.$stores.chat.updateLastOpenDate(), this.$root.$stores.chat.resetCountUnreaded(), this.$root.$stores.chat.resetNotification();
                        const {activeInvitation: t} = this.$root.$stores.chat.state.notification;
                        this.analytics(r["a"].analytics.events.CLIENT_OPEN_CHAT), this.$root.$globalWatcher.trigger(f["a"].events.CLIENT_OPENED_CHAT, this.$root.$stores.chat.form()), t && (this.analytics(r["a"].analytics.events.INVITATION_ACCEPTED), this.$root.$stores.chat.setNotification({activeInvitation: !1}))
                    }, async onReconnect() {
                        i["a"].info("chat: load history");
                        const {history: t = []} = await wr(this.$replainSettings.id, this.$root.$stores.chat);
                        this.history = t
                    }, onDragover(t) {
                        t.preventDefault()
                    }, onDragenter(t) {
                        t.preventDefault(), t.dataTransfer.dropEffect = "copy", this.chatDragenter = !0, setTimeout(() => {
                            this.chatDragenter = !1
                        }, 5e3)
                    }, onDragleave() {
                        this.chatDragenter = !1
                    }, uploadFiles(t) {
                        t.preventDefault(), this.chatDragenter = !1;
                        const {files: e} = t.dataTransfer;
                        if (e.length > 0) {
                            const {$socket: t, $stores: n, $crosstab: s, $modules: r, $intl: a, $globalWatcher: i} = this.$root, {analytics: o} = r;
                            Object(Cr["a"])(e, t, n.chat, i, a, s, o)
                        }
                    }, analytics(t, e) {
                        const {analytics: n} = this.$root.$modules;
                        n && n.push(t, e)
                    }
                }
            }, ai = ri, ii = (n("034f"), n("aac8"), Object(Ur["a"])(ai, Tt, Ot, !1, null, "7e52d0b6", null)),
            oi = ii.exports;
        const ci = !1, li = window.parent, ui = li.document, {replainSettings: di = {}} = li, {id: hi} = di;
        li.ReplainWidget.Vue = s["default"], li.ReplainWidget.i18n = O["b"], ci && (li.chatStore = xt);
        const fi = hi, pi = new vt(fi);
        l.init("REPLAIN_CROSSTAB_" + fi), xt.init(fi, pi, l), N.init(pi), M.init(pi), B.init(pi), R.init(pi), U.init(pi), H.init(pi), I.init(pi), L.init(pi), u["a"].init(), s["default"].prototype.$isDevelopment = ci, s["default"].prototype.$isDemo = ci && "1" === localStorage.REPLAIN_DEMO, s["default"].prototype.$replainSettings = di, s["default"].prototype.$baseUrl = "https://widget.replain.cc/dist/", s["default"].prototype.$intl = O["a"], s["default"].prototype.$modules = {}, s["default"].prototype.$crosstab = l, s["default"].prototype.$socket = null, s["default"].prototype.$globalWatcher = f["a"], s["default"].prototype.$stores = {
            chat: xt,
            forms: N,
            banners: M,
            suggests: B,
            qualityControl: R,
            videoWelcome: U,
            video: H,
            callback: I,
            departments: L
        }, s["default"].prototype.$wrapper = {widget: new T(ui.querySelector("#" + r["a"].widget.wrapperId), ui.querySelector("#" + r["a"].widget.iframeId))}, s["default"].use(V["a"], {i18n: O["b"]}), new s["default"]({
            i18n: O["b"],
            render: t => t(oi)
        }).$mount("#app")
    }, "5aea": function (t, e, n) {
    }, "5c99": function (t, e, n) {
        "use strict";
        n.d(e, "i", (function () {
            return s
        })), n.d(e, "e", (function () {
            return r
        })), n.d(e, "g", (function () {
            return a
        })), n.d(e, "c", (function () {
            return i
        })), n.d(e, "d", (function () {
            return o
        })), n.d(e, "a", (function () {
            return c
        })), n.d(e, "b", (function () {
            return l
        })), n.d(e, "k", (function () {
            return u
        })), n.d(e, "h", (function () {
            return d
        })), n.d(e, "f", (function () {
            return h
        })), n.d(e, "j", (function () {
            return f
        })), n.d(e, "l", (function () {
            return Message
        }));
        const s = 0, r = 1, a = 2, i = 3, o = 5, c = 6, l = 7, u = 8, d = 9, h = 10, f = 11, p = 0, m = 1, g = 0, v = 1;

        class Message {
            constructor() {
                this.type = null, this.time = Date.now(), this.sender = null, this.senderType = null, this.temp = !1, this.status = g
            }

            isNew() {
                return this.status === g
            }

            isSent() {
                return this.status === v
            }

            setIsNew() {
                this.status = g
            }

            setIsSent() {
                this.status = v
            }

            isTextMessage() {
                return this.type === s
            }

            isFileMessage() {
                return this.type === r
            }

            isServiceMessage() {
                return this.type === a
            }

            isContactFormMessage() {
                return this.type === i
            }

            isFeedbackFormMessage() {
                return this.type === o
            }

            isAutoFeedbackMessage() {
                return this.type === c
            }

            isBannerMessage() {
                return this.type === l
            }

            isVideoWelcomeMessage() {
                return this.type === u
            }

            isSuggestsMessage() {
                return this.type === d
            }

            isQualityControlMessage() {
                return this.type === h
            }

            isVideoRequestMessage() {
                return this.type === f
            }

            setSender(t) {
                this.sender = t
            }

            senderName() {
                return this.sender.name
            }

            senderAvatar() {
                return null === this.sender ? null : this.sender.image || null
            }

            isClientSender() {
                return this.senderType === p
            }

            setIsClientSender() {
                this.senderType = p
            }

            isOperatorSender() {
                return this.senderType === m
            }

            setIsOperatorSender() {
                this.senderType = m
            }

            setIsTemp() {
                this.temp = !0
            }

            isTemp() {
                return this.temp
            }
        }
    }, "5cce": function (t, e) {
        t.exports = {version: "0.24.0"}
    }, "5cd9": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return ServicesCard
        }));

        class ServicesCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.tree = t.tree
            }
        }
    }, "5d75": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"),
            r = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
            a = (0, s.regex)("email", r);
        e.default = a
    }, "5db3": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "minLength", min: t}, (function (e) {
                return !(0, s.req)(e) || (0, s.len)(e) >= t
            }))
        };
        e.default = r
    }, "5e35": function (t, e, n) {
        "use strict";
        var s = t => t.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, (t, e, n, s) => "#" + e + e + n + n + s + s).slice(1).match(/.{2}/g).map(t => Number.parseInt(t, 16));
        e["a"] = (t, e = "1") => {
            const n = document.createElement("style"), r = document.head || document.querySelectorAll("head")[0],
                a = s("#" + t).join(",");
            n.innerHTML = `\n    :root {\n      --accent-color: rgba(${a}, ${e}) !important;\n    }\n    .accent-color-bg {background-color: rgba(${a}, ${e}) !important;}\n    .accent-color-bg-10 {background-color: rgba(${a}, 0.1) !important;}\n    .accent-color-bg-20 {background-color: rgba(${a}, 0.2) !important;}\n    .accent-color-border {border-color: rgba(${a}, ${e}) !important;}\n    .accent-color-border-b {border-color: rgba(${a}, ${e}) !important;}\n    .accent-color-text {color: rgba(${a}, ${e}) !important;}\n    .accent-color-fill {fill: rgba(${a}, ${e}) !important;}\n  `, r.appendChild(n)
        }
    }, "5f02": function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return "object" === typeof t && !0 === t.isAxiosError
        }
    }, "5fa2": function (t, e, n) {
        "use strict";
        n("6e16")
    }, 6235: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.regex)("alpha", /^[a-zA-Z]*$/);
        e.default = r
    }, "628f": function (t, e, n) {
        "use strict";
        n("aa7c")
    }, "637b": function (t, e, n) {
        "use strict";
        n("2858")
    }, 6417: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "not"}, (function (e, n) {
                return !(0, s.req)(e) || !t.call(this, e, n)
            }))
        };
        e.default = r
    }, "649f": function (t, e, n) {
        "use strict";
        var s = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "message -autofeedback -wide"}, [n("div", {staticClass: "content"}, [n("div", {staticClass: "text"}, [t.showHeader ? n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "AUTO_FEEDBACK.TEXT",
                        expression: "'AUTO_FEEDBACK.TEXT'"
                    }], staticClass: "name"
                }) : t._e(), n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "AUTO_FEEDBACK.DESCRIPTION",
                        expression: "'AUTO_FEEDBACK.DESCRIPTION'"
                    }], staticClass: "text"
                })]), n("ul", {
                    staticClass: "tabs",
                    class: {"-short": t.messengersList.length <= 4}
                }, [t._l(t.messengersList, (function (e) {
                    return [n("li", {key: e, staticClass: "item"}, [n("a", {
                        staticClass: "link",
                        class: {"-selected": t.current === e},
                        attrs: {href: "javascript:void(null)", title: t.params(e, "title")},
                        on: {
                            click: function (n) {
                                t.current = e
                            }
                        }
                    }, [n("img", {attrs: {src: t.$baseUrl + t.params(e, "image"), alt: t.params(e, "title")}})])])]
                }))], 2), n("div", {staticClass: "tabs-content"}, [t._l(t.messengersList, (function (e) {
                    return [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.current === e,
                            expression: "current === name"
                        }], key: e, staticClass: "item"
                    }, [t.params(e, "form") ? n("form", {
                        staticClass: "form -white",
                        class: {"-sent": t.message.isSent()},
                        on: {
                            submit: function (e) {
                                return e.preventDefault(), t.sendForm.apply(null, arguments)
                            }
                        }
                    }, [n("div", {staticClass: "item -fields"}, [n("div", {
                        staticClass: "field-wrap",
                        class: {"-wobutton": !t.message.isNew()}
                    }, [t.$v.form[e].$error ? n("div", {staticClass: "error-text"}, [t._v(" " + t._s(t.validationError(e)) + " ")]) : t._e(), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.$v.form[e].$model,
                            expression: "$v.form[name].$model",
                            modifiers: {trim: !0}
                        }],
                        staticClass: "form-field -input",
                        class: {error: t.$v.form[e].$error},
                        attrs: {
                            type: t.params(e, "inputType"),
                            name: e,
                            required: "required",
                            placeholder: t.params(e, "placeholder")
                        },
                        domProps: {value: t.$v.form[e].$model},
                        on: {
                            input: function (n) {
                                n.target.composing || t.$set(t.$v.form[e], "$model", n.target.value.trim())
                            }, blur: function (e) {
                                return t.$forceUpdate()
                            }
                        }
                    })]), n("div", {staticClass: "field-wrap"}, [t.shouldAskDepartment ? n("Departments", {
                        model: {
                            value: t.departmentId,
                            callback: function (e) {
                                t.departmentId = e
                            },
                            expression: "departmentId"
                        }
                    }) : t._e()], 1)]), n("button", {staticClass: "button accent-color-bg"}, [t.message.isNew() ? [n("SvgIcon", {
                        attrs: {
                            icon: "plane",
                            classes: "item -icon"
                        }
                    }), n("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "FORM.SUBMIT_BTN",
                            expression: "'FORM.SUBMIT_BTN'"
                        }], staticClass: "item -title"
                    })] : n("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "FORM.SUBMITTED",
                            expression: "'FORM.SUBMITTED'"
                        }], staticClass: "item -title"
                    })], 2)]) : n("p", {domProps: {innerHTML: t._s(t.$options.filters.safehtml(t.contactsText))}})])]
                }))], 2)])])
            }, r = [], a = n("1dce"), i = n("b5ae"), o = n("e343"), c = n("4128"), l = n("0032"), u = n("b077"),
            d = n("ef23");
        const h = t => ({
            email: {
                image: "/img/email-icon.svg",
                title: "Email",
                placeholder: "Email",
                inputType: "email",
                form: !0
            },
            viber: {
                image: "/img/viber-icon.svg",
                title: "Viber",
                placeholder: t("AUTO_FEEDBACK.VIBER_INPUT_TEXT"),
                inputType: "tel",
                form: !0
            },
            whatsapp: {
                image: "/img/whatsapp-icon.svg",
                title: "WhatsApp",
                placeholder: t("AUTO_FEEDBACK.WHATSAPP_INPUT_TEXT"),
                inputType: "tel",
                form: !0
            },
            telegram: {
                image: "/img/telegram-icon.svg",
                title: "Telegram Messenger",
                placeholder: t("AUTO_FEEDBACK.TELEGRAM_INPUT_TEXT"),
                inputType: "text",
                form: !0
            },
            messenger: {
                image: "/img/messenger-icon.svg",
                title: "Facebook Messenger",
                placeholder: t("AUTO_FEEDBACK.MESSENGER_INPUT_TEXT"),
                inputType: "text",
                form: !0
            },
            phone: {
                image: "/img/phone-icon.svg",
                title: t("FORM.FORM_PHONE"),
                placeholder: t("FORM.FORM_PHONE"),
                inputType: "tel",
                form: !0
            },
            contacts: {
                image: "/img/contacts-icon.svg",
                title: t("AUTO_FEEDBACK.CONTACTS_TITLE"),
                placeholder: "",
                inputType: "",
                form: !1
            }
        });
        var f = {
            components: {SvgIcon: l["a"], Departments: u["a"]},
            mixins: [a["validationMixin"]],
            props: {
                message: {type: Object, validator: t => d["a"].name === t.constructor.name, required: !0},
                showHeader: {type: Boolean, default: !0, required: !1},
                messengers: {type: Array, required: !0},
                contactsText: {type: String, default: "", required: !1},
                values: {
                    type: Object, default: function () {
                        return {}
                    }, required: !1
                }
            },
            data() {
                return {
                    current: this.messengers[0],
                    form: {
                        email: this.values.email || "",
                        viber: this.values.viber || this.values.phone || "",
                        whatsapp: this.values.whatsapp || this.values.phone || "",
                        telegram: this.values.telegram || "",
                        messenger: this.values.messenger || "",
                        phone: this.values.phone || ""
                    },
                    departmentId: ""
                }
            },
            computed: {
                shouldAskDepartment() {
                    const {departments: t} = this.$root.$modules;
                    return !(!t || !t.shouldAskDepartment())
                }, messengersList() {
                    if (this.contactsText.length > 0) return this.messengers;
                    const t = [...this.messengers];
                    return t.filter(t => "contacts" !== t)
                }
            },
            watch: {
                form: {
                    handler() {
                        this.message.setIsNew()
                    }, deep: !0
                }, current: function () {
                    this.message.setIsNew()
                }
            },
            mounted() {
                Object(o["a"])(".-js-scrollable-dialog")
            },
            validations() {
                return {
                    form: {
                        email: {email: i["email"]},
                        viber: {phone: c["a"]},
                        whatsapp: {phone: c["a"]},
                        telegram: {},
                        messenger: {url: i["url"]},
                        phone: {phone: c["a"]}
                    }
                }
            },
            methods: {
                params(t, e) {
                    return h(this.$root.$intl.t)[t][e]
                }, validationError(t) {
                    const e = [];
                    switch (t) {
                        case"email":
                            e.push(this.$root.$intl.t("FORM.INVALID_EMAIL_ERROR"));
                            break;
                        case"viber":
                        case"whatsapp":
                        case"phone":
                            e.push(this.$root.$intl.t("FORM.INVALID_TEL_ERROR"));
                            break;
                        case"messenger":
                            e.push(this.$root.$intl.t("FORM.INVALID_LINK_ERROR"));
                            break
                    }
                    return e.join(". ")
                }, sendForm() {
                    if (this.message.isSent()) return;
                    const t = 0 === this.form[this.current].length;
                    this.$v.form[this.current].$error || t || (this.$root.$stores.chat.setDepartment(this.departmentId), this.$emit("submit", {
                        message: this.message,
                        form: {[this.current]: this.form[this.current]},
                        component: this
                    }))
                }
            }
        }, p = f, m = (n("5fa2"), n("2877")), g = Object(m["a"])(p, s, r, !1, null, "2c6f02aa", null);
        e["a"] = g.exports
    }, 6632: function (t, e, n) {
    }, "666c": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return ReviewsCard
        }));

        class ReviewsCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.sources = t.sources
            }
        }
    }, "697e": function (t, e, n) {
        "use strict";
        var s = n("81ff"), r = n("4a99"), a = n("506d"), i = n("472d"), o = n("16b2"), c = n("e344"), l = n("666c"),
            u = n("5cd9"), d = n("0281"), h = n("f90c"), f = n("d813"), p = n("25ca");
        e["a"] = {
            hydrate(t) {
                const {cards: e = []} = t, n = {...t};
                n.cards = [];
                for (const s of e) {
                    const t = this.hydrateCard(s);
                    null !== t && n.cards.push(t)
                }
                return n
            }, hydrateCard(t) {
                switch (t.type) {
                    case a["a"].name:
                        return new a["a"](t);
                    case s["a"].name:
                        return new s["a"](t);
                    case r["a"].name:
                        return new r["a"](t);
                    case i["a"].name:
                        return new i["a"](t);
                    case c["a"].name:
                        return new c["a"](t);
                    case o["a"].name:
                        return new o["a"](t);
                    case d["a"].name:
                        return new d["a"](t);
                    case f["a"].name:
                        return new f["a"](t);
                    case h["a"].name:
                        return new h["a"](t);
                    case p["a"].name:
                        return new p["a"](t);
                    case u["a"].name:
                        return new u["a"](t);
                    case l["a"].name:
                        return new l["a"](t);
                    default:
                        return null
                }
            }
        }
    }, "6b93": function (t, e, n) {
        "use strict";
        n("71c4")
    }, "6d45": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        })), n.d(e, "b", (function () {
            return ServiceMessage
        }));
        var s = n("5c99");
        const r = 0, a = 1;

        class ServiceMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["g"], this.message = t, this.level = r
            }

            setIsLevel() {
                this.level = r
            }

            setIsErrorLevel() {
                this.level = a
            }

            isInfoLevel() {
                return this.level === r
            }

            isErrorLevel() {
                return this.level = a
            }
        }
    }, "6dc6": function (t, e, n) {
        "use strict";

        function s(t, e) {
            return t.test(e)
        }

        function r(t) {
            const e = /iphone/i, n = /ipod/i, r = /ipad/i, a = /\bandroid.+mobile\b/i, i = /android/i,
                o = /\bandroid.+sd4930ur\b/i, c = /\bandroid.+kf[a-z]{2,4}\b/i, l = /windows phone/i,
                u = /\bwindows.+arm\b/i, d = /blackberry/i, h = /bb10/i, f = /opera mini/i,
                p = /\b(crios|chrome).+mobile/i, m = /\Mobile(?:.+)Firefox\b/i;
            let g = t || ("undefined" !== typeof navigator ? navigator.userAgent : ""), v = g.split("[FBAN");
            "undefined" !== typeof v[1] && ([g] = v), v = g.split("Twitter"), "undefined" !== typeof v[1] && ([g] = v);
            const y = {
                apple: {
                    phone: s(e, g) && !s(l, g),
                    ipod: s(n, g),
                    tablet: !s(e, g) && s(r, g) && !s(l, g),
                    device: (s(e, g) || s(n, g) || s(r, g)) && !s(l, g)
                },
                amazon: {phone: s(o, g), tablet: !s(o, g) && s(c, g), device: s(o, g) || s(c, g)},
                android: {
                    phone: !s(l, g) && s(o, g) || !s(l, g) && s(a, g),
                    tablet: !s(l, g) && !s(o, g) && !s(a, g) && (s(c, g) || s(i, g)),
                    device: !s(l, g) && (s(o, g) || s(c, g) || s(a, g) || s(i, g)) || s(/\bokhttp\b/i, g)
                },
                windows: {phone: s(l, g), tablet: s(u, g), device: s(l, g) || s(u, g)},
                other: {
                    blackberry: s(d, g),
                    blackberry10: s(h, g),
                    opera: s(f, g),
                    firefox: s(m, g),
                    chrome: s(p, g),
                    device: s(d, g) || s(h, g) || s(f, g) || s(m, g) || s(p, g)
                }
            };
            return y.any = y.apple.device || y.android.device || y.windows.device || y.other.device, y.phone = y.apple.phone || y.android.phone || y.windows.phone, y.tablet = y.apple.tablet || y.android.tablet || y.windows.tablet, y
        }

        function a() {
            return "ontouchstart" in window || navigator.maxTouchPoints
        }

        function i() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
        }

        function o() {
            return navigator.userAgent.match(/Trident\/7\./)
        }

        n.d(e, "c", (function () {
            return r
        })), n.d(e, "d", (function () {
            return a
        })), n.d(e, "b", (function () {
            return i
        })), n.d(e, "a", (function () {
            return o
        }))
    }, "6dd6": function (t, e, n) {
        var s = n("7322");
        e.operation = function (t) {
            var n = e.timeouts(t);
            return new s(n, {
                forever: t && (t.forever || t.retries === 1 / 0),
                unref: t && t.unref,
                maxRetryTime: t && t.maxRetryTime
            })
        }, e.timeouts = function (t) {
            if (t instanceof Array) return [].concat(t);
            var e = {retries: 10, factor: 2, minTimeout: 1e3, maxTimeout: 1 / 0, randomize: !1};
            for (var n in t) e[n] = t[n];
            if (e.minTimeout > e.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
            for (var s = [], r = 0; r < e.retries; r++) s.push(this.createTimeout(r, e));
            return t && t.forever && !s.length && s.push(this.createTimeout(r, e)), s.sort((function (t, e) {
                return t - e
            })), s
        }, e.createTimeout = function (t, e) {
            var n = e.randomize ? Math.random() + 1 : 1,
                s = Math.round(n * Math.max(e.minTimeout, 1) * Math.pow(e.factor, t));
            return s = Math.min(s, e.maxTimeout), s
        }, e.wrap = function (t, n, s) {
            if (n instanceof Array && (s = n, n = null), !s) for (var r in s = [], t) "function" === typeof t[r] && s.push(r);
            for (var a = 0; a < s.length; a++) {
                var i = s[a], o = t[i];
                t[i] = function (s) {
                    var r = e.operation(n), a = Array.prototype.slice.call(arguments, 1), i = a.pop();
                    a.push((function (t) {
                        r.retry(t) || (t && (arguments[0] = r.mainError()), i.apply(this, arguments))
                    })), r.attempt((function () {
                        s.apply(t, a)
                    }))
                }.bind(t, o), t[i].options = n
            }
        }
    }, "6e16": function (t, e, n) {
    }, "70fc": function (t, e, n) {
    }, "71c4": function (t, e, n) {
    }, 7297: function (t, e, n) {
    }, 7322: function (t, e) {
        function n(t, e) {
            "boolean" === typeof e && (e = {forever: e}), this._originalTimeouts = JSON.parse(JSON.stringify(t)), this._timeouts = t, this._options = e || {}, this._maxRetryTime = e && e.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
        }

        t.exports = n, n.prototype.reset = function () {
            this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
        }, n.prototype.stop = function () {
            this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
        }, n.prototype.retry = function (t) {
            if (this._timeout && clearTimeout(this._timeout), !t) return !1;
            var e = (new Date).getTime();
            if (t && e - this._operationStart >= this._maxRetryTime) return this._errors.push(t), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
            this._errors.push(t);
            var n = this._timeouts.shift();
            if (void 0 === n) {
                if (!this._cachedTimeouts) return !1;
                this._errors.splice(0, this._errors.length - 1), n = this._cachedTimeouts.slice(-1)
            }
            var s = this;
            return this._timer = setTimeout((function () {
                s._attempts++, s._operationTimeoutCb && (s._timeout = setTimeout((function () {
                    s._operationTimeoutCb(s._attempts)
                }), s._operationTimeout), s._options.unref && s._timeout.unref()), s._fn(s._attempts)
            }), n), this._options.unref && this._timer.unref(), !0
        }, n.prototype.attempt = function (t, e) {
            this._fn = t, e && (e.timeout && (this._operationTimeout = e.timeout), e.cb && (this._operationTimeoutCb = e.cb));
            var n = this;
            this._operationTimeoutCb && (this._timeout = setTimeout((function () {
                n._operationTimeoutCb()
            }), n._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts)
        }, n.prototype.try = function (t) {
            console.log("Using RetryOperation.try() is deprecated"), this.attempt(t)
        }, n.prototype.start = function (t) {
            console.log("Using RetryOperation.start() is deprecated"), this.attempt(t)
        }, n.prototype.start = n.prototype.try, n.prototype.errors = function () {
            return this._errors
        }, n.prototype.attempts = function () {
            return this._attempts
        }, n.prototype.mainError = function () {
            if (0 === this._errors.length) return null;
            for (var t = {}, e = null, n = 0, s = 0; s < this._errors.length; s++) {
                var r = this._errors[s], a = r.message, i = (t[a] || 0) + 1;
                t[a] = i, i >= n && (e = r, n = i)
            }
            return e
        }
    }, "73f8": function (t, e, n) {
        "use strict";
        n("7cc9")
    }, 7424: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        })), n.d(e, "c", (function () {
            return i
        })), n.d(e, "e", (function () {
            return o
        })), n.d(e, "d", (function () {
            return c
        })), n.d(e, "b", (function () {
            return l
        })), n.d(e, "f", (function () {
            return u
        })), n.d(e, "g", (function () {
            return d
        }));
        var s = n("697e"), r = n("b775");

        async function a(t, e, n, s) {
            const a = await r["a"].post("/auth", {chatId: t, clientId: e, token: n, lastMessageDate: s});
            return a.data
        }

        async function i(t, e, n, s) {
            const a = await r["a"].post("/history", {chatId: t, clientId: e, token: n, lastMessageDate: s});
            return a.data
        }

        async function o(t) {
            const e = await r["b"].post("/page", {slug: t});
            return void 0 === e.data ? null : s["a"].hydrate(e.data)
        }

        async function c(t) {
            const e = await r["b"].post("/item", {slug: t});
            return void 0 === e.data ? null : s["a"].hydrate(e.data)
        }

        async function l(t) {
            const e = await r["b"].get("/card/" + t);
            return void 0 === e.data ? null : s["a"].hydrateCard(e.data)
        }

        async function u(t) {
            const e = await r["b"].get("/reviews", {params: {sources: t.join(",")}});
            return void 0 === e.data ? null : e.data
        }

        async function d(t, e, n, s) {
            const a = new FormData;
            a.append("chatId", encodeURIComponent(t)), a.append("clientId", encodeURIComponent(e)), a.append("token", encodeURIComponent(n)), a.append("file", s);
            const i = await r["a"].post("/upload", a);
            return i.data
        }
    }, "761e": function (t, e, n) {
        "use strict";
        n("0b45")
    }, "76ab": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("a", t._g({
                staticClass: "button-link",
                class: t.classes,
                attrs: {href: t.link}
            }, t.$listeners), [n("SvgIcon", {attrs: {icon: t.icon, classes: "icon"}})], 1)
        }, r = [], a = n("0032"), i = {
            components: {SvgIcon: a["a"]},
            props: {
                icon: {type: String, default: "", required: !0},
                classes: {type: String, default: "", required: !1},
                link: {type: String, default: "javascript:void(null)", required: !1}
            }
        }, o = i, c = (n("761e"), n("2877")), l = Object(c["a"])(o, s, r, !1, null, null, null);
        e["a"] = l.exports
    }, "76b4": function (t, e, n) {
        "use strict";
        n("4615")
    }, "772d": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"),
            r = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
            a = (0, s.regex)("url", r);
        e.default = a
    }, "78ef": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "withParams", {
            enumerable: !0,
            get: function () {
                return s.default
            }
        }), e.regex = e.ref = e.len = e.req = void 0;
        var s = r(n("8750"));

        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t) {
            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, a(t)
        }

        var i = function (t) {
            if (Array.isArray(t)) return !!t.length;
            if (void 0 === t || null === t) return !1;
            if (!1 === t) return !0;
            if (t instanceof Date) return !isNaN(t.getTime());
            if ("object" === a(t)) {
                for (var e in t) return !0;
                return !1
            }
            return !!String(t).length
        };
        e.req = i;
        var o = function (t) {
            return Array.isArray(t) ? t.length : "object" === a(t) ? Object.keys(t).length : String(t).length
        };
        e.len = o;
        var c = function (t, e, n) {
            return "function" === typeof t ? t.call(e, n) : n[t]
        };
        e.ref = c;
        var l = function (t, e) {
            return (0, s.default)({type: t}, (function (t) {
                return !i(t) || e.test(t)
            }))
        };
        e.regex = l
    }, "7a77": function (t, e, n) {
        "use strict";

        function s(t) {
            this.message = t
        }

        s.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, s.prototype.__CANCEL__ = !0, t.exports = s
    }, "7aac": function (t, e, n) {
        "use strict";
        var s = n("c532");
        t.exports = s.isStandardBrowserEnv() ? function () {
            return {
                write: function (t, e, n, r, a, i) {
                    var o = [];
                    o.push(t + "=" + encodeURIComponent(e)), s.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), s.isString(r) && o.push("path=" + r), s.isString(a) && o.push("domain=" + a), !0 === i && o.push("secure"), document.cookie = o.join("; ")
                }, read: function (t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                }, remove: function (t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            }
        }() : function () {
            return {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }()
    }, "7ae3": function (t, e, n) {
        "use strict";
        n("e2f5")
    }, "7aef": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("svg", {staticClass: "svg-icons"}, [n("symbol", {
                attrs: {
                    id: "preloader",
                    viewBox: "0 0 128 128"
                }
            }, [n("circle", {
                attrs: {
                    cx: "64",
                    cy: "64",
                    r: "64",
                    fill: "#FFFFFF"
                }
            }), n("g", [n("path", {
                attrs: {
                    d: "M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z",
                    fill: "#222222"
                }
            }), n("animateTransform", {
                attrs: {
                    attributeName: "transform",
                    type: "rotate",
                    from: "0 64 64",
                    to: "360 64 64",
                    dur: "800ms",
                    repeatCount: "indefinite"
                }
            })], 1)]), n("symbol", {
                attrs: {
                    id: "corner",
                    viewBox: "0 0 6.6 1.9"
                }
            }, [n("path", {attrs: {d: "M6,1.8C5.8,1.6,5.6,1.4,5.6,1.1V1c0-0.5,0.4-1,0.9-1H0c2.5,1.5,5.1,1.8,5.8,1.9C6.1,1.9,6.1,1.9,6,1.8L6,1.8z"}})]), n("symbol", {
                attrs: {
                    id: "cross",
                    viewBox: "0 0 15.642 15.642"
                }
            }, [n("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    d: "M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061 c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"
                }
            })]), n("svg", {
                attrs: {
                    id: "maximize",
                    viewBox: "0 0 512 512"
                }
            }, [n("g", [n("g", [n("path", {attrs: {d: "M175.445,336.555c-5-5.009-13.099-5.009-18.099,0L25.6,468.301V396.8c0-7.074-5.726-12.8-12.8-12.8\n\t\t\tC5.726,384,0,389.726,0,396.8v102.4c0,7.074,5.726,12.8,12.8,12.8h102.4c7.074,0,12.8-5.726,12.8-12.8\n\t\t\tc0-7.074-5.726-12.8-12.8-12.8H43.699l131.746-131.746C180.446,349.653,180.446,341.555,175.445,336.555z"}})])]), n("g", [n("g", [n("path", {attrs: {d: "M499.2,0H396.8C389.726,0,384,5.726,384,12.8c0,7.074,5.726,12.8,12.8,12.8h71.492L336.555,157.346\n\t\t\tc-5.001,5.001-5.001,13.099,0,18.099c5,5.001,13.099,5.001,18.099,0L486.4,43.699V115.2c0,7.074,5.726,12.8,12.8,12.8\n\t\t\tc7.074,0,12.8-5.726,12.8-12.8V12.8C512,5.726,506.274,0,499.2,0z"}})])]), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g"), n("g")]), n("symbol", {
                attrs: {
                    id: "clip",
                    viewBox: "-25 1 511 511.99725"
                }
            }, [n("path", {
                attrs: {d: "m309.671875 166.308594c8.785156-8.785156 8.785156-23.027344 0-31.816406-8.785156-8.785157-23.03125-8.785157-31.816406 0l-182.070313 182.070312c-27.59375 27.597656-27.59375 72.5.003906 100.09375 13.796876 13.796875 31.921876 20.695312 50.042969 20.695312 18.125 0 36.25-6.898437 50.046875-20.695312l87.003906-87s.003907-.003906.003907-.003906l146.441406-146.445313c41.855469-41.855469 41.855469-109.960937 0-151.816406s-109.960937-41.851563-151.816406 0l-201.035157 201.035156c-.363281.359375-.6875.746094-1.019531 1.125l-32.960937 32.960938c-27.082032 27.082031-41.996094 63.21875-41.996094 101.746093 0 38.527344 14.914062 74.660157 41.996094 101.742188 27.082031 27.082031 63.214844 41.996094 101.742187 41.996094 38.527344 0 74.664063-14.914063 101.746094-41.996094l165.757813-165.757812c8.785156-8.785157 8.785156-23.03125 0-31.816407-8.785157-8.789062-23.03125-8.789062-31.816407 0l-165.761719 165.757813c-18.582031 18.585937-43.414062 28.816406-69.925781 28.816406s-51.34375-10.230469-69.925781-28.816406c-18.585938-18.582032-28.820312-43.417969-28.820312-69.925782 0-26.511718 10.234374-51.34375 28.820312-69.929687l165.757812-165.757813c.363282-.363281.691407-.75 1.023438-1.132812l68.230469-68.230469c24.3125-24.3125 63.875-24.3125 88.183593-.003906 24.3125 24.3125 24.3125 63.875 0 88.1875l-51.367187 51.367187c-.003906.003907-.007813.007813-.011719.011719l-182.066406 182.070313c-10.050781 10.050781-26.40625 10.050781-36.457031 0-10.054688-10.050782-10.054688-26.40625 0-36.460938zm0 0"}
            })]), n("symbol", {
                attrs: {
                    id: "flash",
                    viewBox: "0 0 512 512"
                }
            }, [n("path", {attrs: {d: "M400.268,175.599c-1.399-3.004-4.412-4.932-7.731-4.932h-101.12l99.797-157.568c1.664-2.628,1.766-5.956,0.265-8.678 C389.977,1.69,387.109,0,384.003,0H247.47c-3.234,0-6.187,1.826-7.637,4.719l-128,256c-1.323,2.637-1.178,5.777,0.375,8.294 c1.562,2.517,4.301,4.053,7.262,4.053h87.748l-95.616,227.089c-1.63,3.883-0.179,8.388,3.413,10.59 c1.382,0.845,2.918,1.254,4.446,1.254c2.449,0,4.864-1.05,6.537-3.029l273.067-324.267 C401.206,182.161,401.667,178.611,400.268,175.599z"}})]), n("symbol", {
                attrs: {
                    id: "timer",
                    viewBox: "0 0 510 510"
                }
            }, [n("path", {attrs: {d: "M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75 l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25 c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255 C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z"}})]), n("symbol", {
                attrs: {
                    id: "plane",
                    viewBox: "0 0 535.5 535.5"
                }
            }, [n("path", {attrs: {d: "M0 497.25l535.5-229.5L0 38.25v178.5l382.5 51-382.5 51z"}})]), n("symbol", {
                attrs: {
                    id: "check",
                    viewBox: "0 0 512 512"
                }
            }, [n("path", {attrs: {d: "M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"}})]), n("symbol", {
                attrs: {
                    id: "file",
                    viewBox: "0 0 438.533 438.533"
                }
            }, [n("path", {attrs: {d: "M396.283,130.188c-3.806-9.135-8.371-16.365-13.703-21.695l-89.078-89.081c-5.332-5.325-12.56-9.895-21.697-13.704   C262.672,1.903,254.297,0,246.687,0H63.953C56.341,0,49.869,2.663,44.54,7.993c-5.33,5.327-7.994,11.799-7.994,19.414v383.719   c0,7.617,2.664,14.089,7.994,19.417c5.33,5.325,11.801,7.991,19.414,7.991h310.633c7.611,0,14.079-2.666,19.407-7.991   c5.328-5.332,7.994-11.8,7.994-19.417V155.313C401.991,147.699,400.088,139.323,396.283,130.188z M255.816,38.826   c5.517,1.903,9.418,3.999,11.704,6.28l89.366,89.366c2.279,2.286,4.374,6.186,6.276,11.706H255.816V38.826z M365.449,401.991   H73.089V36.545h146.178v118.771c0,7.614,2.662,14.084,7.992,19.414c5.332,5.327,11.8,7.994,19.417,7.994h118.773V401.991z"}})]), n("symbol", {
                attrs: {
                    id: "success",
                    viewBox: "0 0 512 512"
                }
            }, [n("path", {attrs: {d: "M468.907,214.604c-11.423,0-20.682,9.26-20.682,20.682v20.831c-0.031,54.338-21.221,105.412-59.666,143.812 c-38.417,38.372-89.467,59.5-143.761,59.5c-0.04,0-0.08,0-0.12,0C132.506,459.365,41.3,368.056,41.364,255.883 c0.031-54.337,21.221-105.411,59.667-143.813c38.417-38.372,89.468-59.5,143.761-59.5c0.04,0,0.08,0,0.12,0 c28.672,0.016,56.49,5.942,82.68,17.611c10.436,4.65,22.659-0.041,27.309-10.474c4.648-10.433-0.04-22.659-10.474-27.309 c-31.516-14.043-64.989-21.173-99.492-21.192c-0.052,0-0.092,0-0.144,0c-65.329,0-126.767,25.428-172.993,71.6 C25.536,129.014,0.038,190.473,0,255.861c-0.037,65.386,25.389,126.874,71.599,173.136c46.21,46.262,107.668,71.76,173.055,71.798 c0.051,0,0.092,0,0.144,0c65.329,0,126.767-25.427,172.993-71.6c46.262-46.209,71.76-107.668,71.798-173.066v-20.842 C489.589,223.864,480.33,214.604,468.907,214.604z"}}), n("path", {attrs: {d: "M505.942,39.803c-8.077-8.076-21.172-8.076-29.249,0L244.794,271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248,0 c-8.077,8.077-8.077,21.172,0,29.249l67.234,67.234c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.586-2.019,14.625-6.058 L505.942,69.052C514.019,60.975,514.019,47.88,505.942,39.803z"}})])])
        }, r = [], a = (n("b252"), n("2877")), i = {}, o = Object(a["a"])(i, s, r, !1, null, null, null);
        e["a"] = o.exports
    }, "7b96": function (t, e, n) {
    }, "7c94": function (t, e, n) {
        "use strict";
        n("d7fd")
    }, "7cc9": function (t, e, n) {
    }, "808c": function (t, e, n) {
        "use strict";
        n("7297")
    }, "80eb": function (t, e, n) {
        "use strict";
        var s = n("6dc6"), r = n("ae74");

        function a(t) {
            const e = t.match(/(?:__|[#*])|\[(.*?)]\(.*?\)/g);
            if (null != e && e.length > 0) for (const n of e) {
                const e = n.match(/\[(.*?)]/gm), s = n.match(/\(.*?\)/gm);
                if (null !== e && null !== s) {
                    const r = e.pop().match(/\[(.*?)]/)[1], a = s.pop().match(/\((.*?)\)/)[1];
                    null !== a && (t = t.replace(n, '<a href="' + a + '" target="_blank">' + r + "</a>"))
                }
            }
            return t
        }

        function i(t) {
            return t.replace(/((\s(https?|ftp):\/\/[\w!#%&+,./:;=?@|~-]*[\w#%&+/=@|~-])|(^(https?|ftp):\/\/[\w!#%&+,./:;=?@|~-]*[\w#%&+/=@|~-]))/gim, '<a href="$&" target="_blank" rel="nofollow noopener">$&</a>')
        }

        var o = (t = "", e = !0) => {
            let n = t;
            return !0 === e && (n = a(n)), i(n)
        }, c = t => t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        e["a"] = {
            install(t, e) {
                t.directive("focus", {
                    inserted: function (t) {
                        Object(s["d"])() || t.focus()
                    }
                }), t.filter("formatSize", (function (t) {
                    return Object(r["a"])(t)
                })), t.filter("formatDate", (function (t) {
                    return new Date(t).toLocaleString(e.i18n.locale, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !1
                    }).replace(",", "")
                })), t.filter("purify", (function (t) {
                    return t ? c(t) : ""
                })), t.filter("linkify", (function (t) {
                    return t ? o(t) : ""
                })), t.filter("htmlContent", (function (t) {
                    return t ? o(t, !1) : ""
                })), t.filter("safehtml", (function (t) {
                    return t ? o(c(t)) : ""
                }))
            }
        }
    }, "81ff": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return BannersCard
        }));

        class BannersCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.module = !0
            }
        }
    }, 8295: function (t, e, n) {
        "use strict";
        var s = (t, e) => {
            const n = t.sheet;
            for (let s of e) {
                let t = 1;
                const e = s[0];
                let r = "";
                Array.isArray(s[1][0]) && ([s] = s, t = 0);
                for (let n = s.length; t < n; t += 1) {
                    const e = s[t];
                    r += `${e[0]}: ${e[1]}${e[2] ? " !important" : ""};\n`
                }
                n.insertRule(`${e}{${r}}`, n.cssRules.length)
            }
        }, r = n("371c");
        const a = window.parent, i = a.document;
        e["a"] = {
            init() {
                this.styleTag = i.createElement("style"), this.styleTag.id = "__replain_styles", i.head.appendChild(this.styleTag)
            }, insertCssRules(t) {
                s(this.styleTag, t)
            }, isOpenState() {
                return !i.hidden
            }, isHideState() {
                return i.hidden
            }, onShown(t) {
                a.addEventListener("visibilitychange", () => {
                    i.hidden || (r["a"].info("page: open"), t())
                })
            }, onHidden(t) {
                a.addEventListener("visibilitychange", () => {
                    i.hidden && (r["a"].info("page: hide"), t())
                })
            }, onResize(t) {
                a.addEventListener("resize", () => {
                    r["a"].info("page: resize"), t(this.isSmallBreakpoint())
                })
            }, isSmallBreakpoint() {
                const t = this.size().width < 576;
                return t
            }, size() {
                const t = a, e = i, n = e.documentElement, s = e.querySelectorAll("body")[0],
                    r = t.innerWidth || n.clientWidth || s.clientWidth,
                    o = t.innerHeight || n.clientHeight || s.clientHeight;
                return {width: r, height: o}
            }, url() {
                return i.location.href
            }, language() {
                const t = i.querySelectorAll("html")[0], e = t.getAttribute("lang");
                return e ? e.split("-")[0] : null
            }, debugInfo() {
                const {width: t, height: e} = this.size(), n = navigator.userAgent;
                return `${n} / ${t}x${e} / ${this.language()} / ${this.url()}`
            }, isDarkTheme() {
                return a.matchMedia && a.matchMedia("(prefers-color-scheme: dark)").matches
            }, onChangeTheme(t) {
                a.matchMedia && a.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
                    r["a"].info("page: change color"), t()
                })
            }
        }
    }, "82aa": function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "files-drop",
                on: {dragleave: t.onDragleave}
            }, [n("div", {
                directives: [{
                    name: "t",
                    rawName: "v-t",
                    value: "FILES.DROP_TEXT",
                    expression: "'FILES.DROP_TEXT'"
                }], staticClass: "item -header"
            }), n("div", {staticClass: "item -text"}, [t._v(" " + t._s(t.$t("FILES.REQUIREMENTS_COUNT", {countPlural: t.$tc("FILES.PLURAL_COUNT", t.maxCount)})) + " "), n("br"), t._v(" " + t._s(t.$t("FILES.REQUIREMENTS_SIZE", {maxSize: t.$options.filters.formatSize(t.maxSize)})) + " ")])])
        }, r = [], a = n("f121"), i = {
            computed: {
                maxCount() {
                    return a["a"].files.maxCount
                }, maxSize() {
                    return a["a"].files.maxSize
                }
            }, methods: {
                onDragleave(t) {
                    t.preventDefault(), this.$emit("drop-files-dragleave", t)
                }
            }
        }, o = i, c = (n("3f93"), n("2877")), l = Object(c["a"])(o, s, r, !1, null, "7f8f4f60", null);
        e["a"] = l.exports
    }, "83b9": function (t, e, n) {
        "use strict";
        var s = n("d925"), r = n("e683");
        t.exports = function (t, e) {
            return t && !s(e) ? r(t, e) : e
        }
    }, "848b": function (t, e, n) {
        "use strict";
        var s = n("5cce").version, r = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (t, e) {
            r[t] = function (n) {
                return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
            }
        }));
        var a = {};

        function i(t, e, n) {
            if ("object" !== typeof t) throw new TypeError("options must be an object");
            var s = Object.keys(t), r = s.length;
            while (r-- > 0) {
                var a = s[r], i = e[a];
                if (i) {
                    var o = t[a], c = void 0 === o || i(o, a, t);
                    if (!0 !== c) throw new TypeError("option " + a + " must be " + c)
                } else if (!0 !== n) throw Error("Unknown option " + a)
            }
        }

        r.transitional = function (t, e, n) {
            function r(t, e) {
                return "[Axios v" + s + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "")
            }

            return function (n, s, i) {
                if (!1 === t) throw new Error(r(s, " has been removed" + (e ? " in " + e : "")));
                return e && !a[s] && (a[s] = !0, console.warn(r(s, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(n, s, i)
            }
        }, t.exports = {assertOptions: i, validators: r}
    }, "858c": function (t, e, n) {
        "use strict";
        n("144d")
    }, "85ec": function (t, e, n) {
    }, 8750: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = "web" === Object({
            NODE_ENV: "production",
            VUE_APP_WIDGET_HOST: "https://widget.replain.cc/dist",
            VUE_APP_API_HOST: "https://app.replain.cc",
            VUE_APP_WEBSOCKET_URL: "wss://ws.replain.cc/widget",
            VUE_APP_MICROSITE_BASE_URL: "",
            BASE_URL: "https://widget.replain.cc/dist/"
        }).BUILD ? n("cb69").withParams : n("0234").withParams, r = s;
        e.default = r
    }, "88aa": function (t, e, n) {
        "use strict";
        n("2d53")
    }, "8c15": function (t, e, n) {
    }, "8d4f": function (t, e, n) {
        "use strict";
        n("d7c5")
    }, "8df4": function (t, e, n) {
        "use strict";
        var s = n("7a77");

        function r(t) {
            if ("function" !== typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise((function (t) {
                e = t
            }));
            var n = this;
            this.promise.then((function (t) {
                if (n._listeners) {
                    var e, s = n._listeners.length;
                    for (e = 0; e < s; e++) n._listeners[e](t);
                    n._listeners = null
                }
            })), this.promise.then = function (t) {
                var e, s = new Promise((function (t) {
                    n.subscribe(t), e = t
                })).then(t);
                return s.cancel = function () {
                    n.unsubscribe(e)
                }, s
            }, t((function (t) {
                n.reason || (n.reason = new s(t), e(n.reason))
            }))
        }

        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, r.prototype.subscribe = function (t) {
            this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }, r.prototype.unsubscribe = function (t) {
            if (this._listeners) {
                var e = this._listeners.indexOf(t);
                -1 !== e && this._listeners.splice(e, 1)
            }
        }, r.source = function () {
            var t, e = new r((function (e) {
                t = e
            }));
            return {token: e, cancel: t}
        }, t.exports = r
    }, "8ee7": function (t, e, n) {
        "use strict";
        n("8fad")
    }, "8f84": function (t, e, n) {
    }, "8fad": function (t, e, n) {
    }, "91d3": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":";
            return (0, s.withParams)({type: "macAddress"}, (function (e) {
                if (!(0, s.req)(e)) return !0;
                if ("string" !== typeof e) return !1;
                var n = "string" === typeof t && "" !== t ? e.split(t) : 12 === e.length || 16 === e.length ? e.match(/.{2}/g) : null;
                return null !== n && (6 === n.length || 8 === n.length) && n.every(a)
            }))
        };
        e.default = r;
        var a = function (t) {
            return t.toLowerCase().match(/^[0-9a-f]{2}$/)
        }
    }, 9225: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return At
        }));
        var s = n("2b0e"),
            r = ["compactDisplay", "currency", "currencyDisplay", "currencySign", "localeMatcher", "notation", "numberingSystem", "signDisplay", "style", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];

        /*!
         * vue-i18n v8.24.4
         * (c) 2021 kazuya kawaguchi
         * Released under the MIT License.
         */
        function a(t, e) {
            "undefined" !== typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack))
        }

        function i(t, e) {
            "undefined" !== typeof console && (console.error("[vue-i18n] " + t), e && console.error(e.stack))
        }

        var o = Array.isArray;

        function c(t) {
            return null !== t && "object" === typeof t
        }

        function l(t) {
            return "boolean" === typeof t
        }

        function u(t) {
            return "string" === typeof t
        }

        var d = Object.prototype.toString, h = "[object Object]";

        function f(t) {
            return d.call(t) === h
        }

        function p(t) {
            return null === t || void 0 === t
        }

        function m(t) {
            return "function" === typeof t
        }

        function g() {
            var t = [], e = arguments.length;
            while (e--) t[e] = arguments[e];
            var n = null, s = null;
            return 1 === t.length ? c(t[0]) || o(t[0]) ? s = t[0] : "string" === typeof t[0] && (n = t[0]) : 2 === t.length && ("string" === typeof t[0] && (n = t[0]), (c(t[1]) || o(t[1])) && (s = t[1])), {
                locale: n,
                params: s
            }
        }

        function v(t) {
            return JSON.parse(JSON.stringify(t))
        }

        function y(t, e) {
            if (t.delete(e)) return t
        }

        function b(t, e) {
            return !!~t.indexOf(e)
        }

        var _ = Object.prototype.hasOwnProperty;

        function w(t, e) {
            return _.call(t, e)
        }

        function C(t) {
            for (var e = arguments, n = Object(t), s = 1; s < arguments.length; s++) {
                var r = e[s];
                if (void 0 !== r && null !== r) {
                    var a = void 0;
                    for (a in r) w(r, a) && (c(r[a]) ? n[a] = C(n[a], r[a]) : n[a] = r[a])
                }
            }
            return n
        }

        function S(t, e) {
            if (t === e) return !0;
            var n = c(t), s = c(e);
            if (!n || !s) return !n && !s && String(t) === String(e);
            try {
                var r = o(t), a = o(e);
                if (r && a) return t.length === e.length && t.every((function (t, n) {
                    return S(t, e[n])
                }));
                if (r || a) return !1;
                var i = Object.keys(t), l = Object.keys(e);
                return i.length === l.length && i.every((function (n) {
                    return S(t[n], e[n])
                }))
            } catch (u) {
                return !1
            }
        }

        function $(t) {
            return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        }

        function k(t) {
            return null != t && Object.keys(t).forEach((function (e) {
                "string" == typeof t[e] && (t[e] = $(t[e]))
            })), t
        }

        function x(t) {
            t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
                get: function () {
                    return this._i18n
                }
            }), t.prototype.$t = function (t) {
                var e = [], n = arguments.length - 1;
                while (n-- > 0) e[n] = arguments[n + 1];
                var s = this.$i18n;
                return s._t.apply(s, [t, s.locale, s._getMessages(), this].concat(e))
            }, t.prototype.$tc = function (t, e) {
                var n = [], s = arguments.length - 2;
                while (s-- > 0) n[s] = arguments[s + 2];
                var r = this.$i18n;
                return r._tc.apply(r, [t, r.locale, r._getMessages(), this, e].concat(n))
            }, t.prototype.$te = function (t, e) {
                var n = this.$i18n;
                return n._te(t, n.locale, n._getMessages(), e)
            }, t.prototype.$d = function (t) {
                var e, n = [], s = arguments.length - 1;
                while (s-- > 0) n[s] = arguments[s + 1];
                return (e = this.$i18n).d.apply(e, [t].concat(n))
            }, t.prototype.$n = function (t) {
                var e, n = [], s = arguments.length - 1;
                while (s-- > 0) n[s] = arguments[s + 1];
                return (e = this.$i18n).n.apply(e, [t].concat(n))
            }
        }

        var T = {
            beforeCreate: function () {
                var t = this.$options;
                if (t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n) if (t.i18n instanceof kt) {
                    if (t.__i18n) try {
                        var e = t.i18n && t.i18n.messages ? t.i18n.messages : {};
                        t.__i18n.forEach((function (t) {
                            e = C(e, JSON.parse(t))
                        })), Object.keys(e).forEach((function (n) {
                            t.i18n.mergeLocaleMessage(n, e[n])
                        }))
                    } catch (i) {
                        0
                    }
                    this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData()
                } else if (f(t.i18n)) {
                    var n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof kt ? this.$root.$i18n : null;
                    if (n && (t.i18n.root = this.$root, t.i18n.formatter = n.formatter, t.i18n.fallbackLocale = n.fallbackLocale, t.i18n.formatFallbackMessages = n.formatFallbackMessages, t.i18n.silentTranslationWarn = n.silentTranslationWarn, t.i18n.silentFallbackWarn = n.silentFallbackWarn, t.i18n.pluralizationRules = n.pluralizationRules, t.i18n.preserveDirectiveContent = n.preserveDirectiveContent), t.__i18n) try {
                        var s = t.i18n && t.i18n.messages ? t.i18n.messages : {};
                        t.__i18n.forEach((function (t) {
                            s = C(s, JSON.parse(t))
                        })), t.i18n.messages = s
                    } catch (i) {
                        0
                    }
                    var r = t.i18n, a = r.sharedMessages;
                    a && f(a) && (t.i18n.messages = C(t.i18n.messages, a)), this._i18n = new kt(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()), n && n.onComponentInstanceCreated(this._i18n)
                } else 0; else this.$root && this.$root.$i18n && this.$root.$i18n instanceof kt ? this._i18n = this.$root.$i18n : t.parent && t.parent.$i18n && t.parent.$i18n instanceof kt && (this._i18n = t.parent.$i18n)
            }, beforeMount: function () {
                var t = this.$options;
                t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n ? (t.i18n instanceof kt || f(t.i18n)) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof kt || t.parent && t.parent.$i18n && t.parent.$i18n instanceof kt) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0)
            }, mounted: function () {
                this !== this.$root && this.$options.__INTLIFY_META__ && this.$el && this.$el.setAttribute("data-intlify", this.$options.__INTLIFY_META__)
            }, beforeDestroy: function () {
                if (this._i18n) {
                    var t = this;
                    this.$nextTick((function () {
                        t._subscribing && (t._i18n.unsubscribeDataChanging(t), delete t._subscribing), t._i18nWatcher && (t._i18nWatcher(), t._i18n.destroyVM(), delete t._i18nWatcher), t._localeWatcher && (t._localeWatcher(), delete t._localeWatcher)
                    }))
                }
            }
        }, O = {
            name: "i18n",
            functional: !0,
            props: {
                tag: {type: [String, Boolean, Object], default: "span"},
                path: {type: String, required: !0},
                locale: {type: String},
                places: {type: [Array, Object]}
            },
            render: function (t, e) {
                var n = e.data, s = e.parent, r = e.props, a = e.slots, i = s.$i18n;
                if (i) {
                    var o = r.path, c = r.locale, l = r.places, u = a(), d = i.i(o, c, E(u) || l ? M(u.default, l) : u),
                        h = r.tag && !0 !== r.tag || !1 === r.tag ? r.tag : "span";
                    return h ? t(h, n, d) : d
                }
            }
        };

        function E(t) {
            var e;
            for (e in t) if ("default" !== e) return !1;
            return Boolean(e)
        }

        function M(t, e) {
            var n = e ? A(e) : {};
            if (!t) return n;
            t = t.filter((function (t) {
                return t.tag || "" !== t.text.trim()
            }));
            var s = t.every(L);
            return t.reduce(s ? I : j, n)
        }

        function A(t) {
            return Array.isArray(t) ? t.reduce(j, {}) : Object.assign({}, t)
        }

        function I(t, e) {
            return e.data && e.data.attrs && e.data.attrs.place && (t[e.data.attrs.place] = e), t
        }

        function j(t, e, n) {
            return t[n] = e, t
        }

        function L(t) {
            return Boolean(t.data && t.data.attrs && t.data.attrs.place)
        }

        var D, N = {
            name: "i18n-n",
            functional: !0,
            props: {
                tag: {type: [String, Boolean, Object], default: "span"},
                value: {type: Number, required: !0},
                format: {type: [String, Object]},
                locale: {type: String}
            },
            render: function (t, e) {
                var n = e.props, s = e.parent, a = e.data, i = s.$i18n;
                if (!i) return null;
                var o = null, l = null;
                u(n.format) ? o = n.format : c(n.format) && (n.format.key && (o = n.format.key), l = Object.keys(n.format).reduce((function (t, e) {
                    var s;
                    return b(r, e) ? Object.assign({}, t, (s = {}, s[e] = n.format[e], s)) : t
                }), null));
                var d = n.locale || i.locale, h = i._ntp(n.value, d, o, l), f = h.map((function (t, e) {
                    var n, s = a.scopedSlots && a.scopedSlots[t.type];
                    return s ? s((n = {}, n[t.type] = t.value, n.index = e, n.parts = h, n)) : t.value
                })), p = n.tag && !0 !== n.tag || !1 === n.tag ? n.tag : "span";
                return p ? t(p, {attrs: a.attrs, class: a["class"], staticClass: a.staticClass}, f) : f
            }
        };

        function F(t, e, n) {
            B(t, n) && U(t, e, n)
        }

        function R(t, e, n, s) {
            if (B(t, n)) {
                var r = n.context.$i18n;
                z(t, n) && S(e.value, e.oldValue) && S(t._localeMessage, r.getLocaleMessage(r.locale)) || U(t, e, n)
            }
        }

        function P(t, e, n, s) {
            var r = n.context;
            if (r) {
                var i = n.context.$i18n || {};
                e.modifiers.preserve || i.preserveDirectiveContent || (t.textContent = ""), t._vt = void 0, delete t["_vt"], t._locale = void 0, delete t["_locale"], t._localeMessage = void 0, delete t["_localeMessage"]
            } else a("Vue instance does not exists in VNode context")
        }

        function B(t, e) {
            var n = e.context;
            return n ? !!n.$i18n || (a("VueI18n instance does not exists in Vue instance"), !1) : (a("Vue instance does not exists in VNode context"), !1)
        }

        function z(t, e) {
            var n = e.context;
            return t._locale === n.$i18n.locale
        }

        function U(t, e, n) {
            var s, r, i = e.value, o = q(i), c = o.path, l = o.locale, u = o.args, d = o.choice;
            if (c || l || u) if (c) {
                var h = n.context;
                t._vt = t.textContent = null != d ? (s = h.$i18n).tc.apply(s, [c, d].concat(H(l, u))) : (r = h.$i18n).t.apply(r, [c].concat(H(l, u))), t._locale = h.$i18n.locale, t._localeMessage = h.$i18n.getLocaleMessage(h.$i18n.locale)
            } else a("`path` is required in v-t directive"); else a("value type not supported")
        }

        function q(t) {
            var e, n, s, r;
            return u(t) ? e = t : f(t) && (e = t.path, n = t.locale, s = t.args, r = t.choice), {
                path: e,
                locale: n,
                args: s,
                choice: r
            }
        }

        function H(t, e) {
            var n = [];
            return t && n.push(t), e && (Array.isArray(e) || f(e)) && n.push(e), n
        }

        function V(t) {
            V.installed = !0, D = t;
            D.version && Number(D.version.split(".")[0]);
            x(D), D.mixin(T), D.directive("t", {
                bind: F,
                update: R,
                unbind: P
            }), D.component(O.name, O), D.component(N.name, N);
            var e = D.config.optionMergeStrategies;
            e.i18n = function (t, e) {
                return void 0 === e ? t : e
            }
        }

        var W = function () {
            this._caches = Object.create(null)
        };
        W.prototype.interpolate = function (t, e) {
            if (!e) return [t];
            var n = this._caches[t];
            return n || (n = Q(t), this._caches[t] = n), X(n, e)
        };
        var G = /^(?:\d)+/, K = /^(?:\w)+/;

        function Q(t) {
            var e = [], n = 0, s = "";
            while (n < t.length) {
                var r = t[n++];
                if ("{" === r) {
                    s && e.push({type: "text", value: s}), s = "";
                    var a = "";
                    r = t[n++];
                    while (void 0 !== r && "}" !== r) a += r, r = t[n++];
                    var i = "}" === r, o = G.test(a) ? "list" : i && K.test(a) ? "named" : "unknown";
                    e.push({value: a, type: o})
                } else "%" === r ? "{" !== t[n] && (s += r) : s += r
            }
            return s && e.push({type: "text", value: s}), e
        }

        function X(t, e) {
            var n = [], s = 0, r = Array.isArray(e) ? "list" : c(e) ? "named" : "unknown";
            if ("unknown" === r) return n;
            while (s < t.length) {
                var a = t[s];
                switch (a.type) {
                    case"text":
                        n.push(a.value);
                        break;
                    case"list":
                        n.push(e[parseInt(a.value, 10)]);
                        break;
                    case"named":
                        "named" === r && n.push(e[a.value]);
                        break;
                    case"unknown":
                        0;
                        break
                }
                s++
            }
            return n
        }

        var Y = 0, J = 1, Z = 2, tt = 3, et = 0, nt = 1, st = 2, rt = 3, at = 4, it = 5, ot = 6, ct = 7, lt = 8,
            ut = [];
        ut[et] = {ws: [et], ident: [rt, Y], "[": [at], eof: [ct]}, ut[nt] = {
            ws: [nt],
            ".": [st],
            "[": [at],
            eof: [ct]
        }, ut[st] = {ws: [st], ident: [rt, Y], 0: [rt, Y], number: [rt, Y]}, ut[rt] = {
            ident: [rt, Y],
            0: [rt, Y],
            number: [rt, Y],
            ws: [nt, J],
            ".": [st, J],
            "[": [at, J],
            eof: [ct, J]
        }, ut[at] = {
            "'": [it, Y],
            '"': [ot, Y],
            "[": [at, Z],
            "]": [nt, tt],
            eof: lt,
            else: [at, Y]
        }, ut[it] = {"'": [at, Y], eof: lt, else: [it, Y]}, ut[ot] = {'"': [at, Y], eof: lt, else: [ot, Y]};
        var dt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

        function ht(t) {
            return dt.test(t)
        }

        function ft(t) {
            var e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
            return e !== n || 34 !== e && 39 !== e ? t : t.slice(1, -1)
        }

        function pt(t) {
            if (void 0 === t || null === t) return "eof";
            var e = t.charCodeAt(0);
            switch (e) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                    return t;
                case 95:
                case 36:
                case 45:
                    return "ident";
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
            }
            return "ident"
        }

        function mt(t) {
            var e = t.trim();
            return ("0" !== t.charAt(0) || !isNaN(t)) && (ht(e) ? ft(e) : "*" + e)
        }

        function gt(t) {
            var e, n, s, r, a, i, o, c = [], l = -1, u = et, d = 0, h = [];

            function f() {
                var e = t[l + 1];
                if (u === it && "'" === e || u === ot && '"' === e) return l++, s = "\\" + e, h[Y](), !0
            }

            h[J] = function () {
                void 0 !== n && (c.push(n), n = void 0)
            }, h[Y] = function () {
                void 0 === n ? n = s : n += s
            }, h[Z] = function () {
                h[Y](), d++
            }, h[tt] = function () {
                if (d > 0) d--, u = at, h[Y](); else {
                    if (d = 0, void 0 === n) return !1;
                    if (n = mt(n), !1 === n) return !1;
                    h[J]()
                }
            };
            while (null !== u) if (l++, e = t[l], "\\" !== e || !f()) {
                if (r = pt(e), o = ut[u], a = o[r] || o["else"] || lt, a === lt) return;
                if (u = a[0], i = h[a[1]], i && (s = a[2], s = void 0 === s ? e : s, !1 === i())) return;
                if (u === ct) return c
            }
        }

        var vt = function () {
            this._cache = Object.create(null)
        };
        vt.prototype.parsePath = function (t) {
            var e = this._cache[t];
            return e || (e = gt(t), e && (this._cache[t] = e)), e || []
        }, vt.prototype.getPathValue = function (t, e) {
            if (!c(t)) return null;
            var n = this.parsePath(e);
            if (0 === n.length) return null;
            var s = n.length, r = t, a = 0;
            while (a < s) {
                var i = r[n[a]];
                if (void 0 === i || null === i) return null;
                r = i, a++
            }
            return r
        };
        var yt, bt = /<\/?[\w\s="/.':;#-\/]+>/, _t = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
            wt = /^@(?:\.([a-z]+))?:/, Ct = /[()]/g, St = {
                upper: function (t) {
                    return t.toLocaleUpperCase()
                }, lower: function (t) {
                    return t.toLocaleLowerCase()
                }, capitalize: function (t) {
                    return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1)
                }
            }, $t = new W, kt = function (t) {
                var e = this;
                void 0 === t && (t = {}), !D && "undefined" !== typeof window && window.Vue && V(window.Vue);
                var n = t.locale || "en-US", s = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
                    r = t.messages || {}, a = t.dateTimeFormats || {}, i = t.numberFormats || {};
                this._vm = null, this._formatter = t.formatter || $t, this._modifiers = t.modifiers || {}, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !!t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot, this._formatFallbackMessages = void 0 !== t.formatFallbackMessages && !!t.formatFallbackMessages, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && t.silentTranslationWarn, this._silentFallbackWarn = void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new vt, this._dataListeners = new Set, this._componentInstanceCreatedListener = t.componentInstanceCreatedListener || null, this._preserveDirectiveContent = void 0 !== t.preserveDirectiveContent && !!t.preserveDirectiveContent, this.pluralizationRules = t.pluralizationRules || {}, this._warnHtmlInMessage = t.warnHtmlInMessage || "off", this._postTranslation = t.postTranslation || null, this._escapeParameterHtml = t.escapeParameterHtml || !1, this.getChoiceIndex = function (t, n) {
                    var s = Object.getPrototypeOf(e);
                    if (s && s.getChoiceIndex) {
                        var r = s.getChoiceIndex;
                        return r.call(e, t, n)
                    }
                    var a = function (t, e) {
                        return t = Math.abs(t), 2 === e ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
                    };
                    return e.locale in e.pluralizationRules ? e.pluralizationRules[e.locale].apply(e, [t, n]) : a(t, n)
                }, this._exist = function (t, n) {
                    return !(!t || !n) && (!p(e._path.getPathValue(t, n)) || !!t[n])
                }, "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(r).forEach((function (t) {
                    e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t])
                })), this._initVM({locale: n, fallbackLocale: s, messages: r, dateTimeFormats: a, numberFormats: i})
            }, xt = {
                vm: {configurable: !0},
                messages: {configurable: !0},
                dateTimeFormats: {configurable: !0},
                numberFormats: {configurable: !0},
                availableLocales: {configurable: !0},
                locale: {configurable: !0},
                fallbackLocale: {configurable: !0},
                formatFallbackMessages: {configurable: !0},
                missing: {configurable: !0},
                formatter: {configurable: !0},
                silentTranslationWarn: {configurable: !0},
                silentFallbackWarn: {configurable: !0},
                preserveDirectiveContent: {configurable: !0},
                warnHtmlInMessage: {configurable: !0},
                postTranslation: {configurable: !0}
            };
        kt.prototype._checkLocaleMessage = function (t, e, n) {
            var s = [], r = function (t, e, n, s) {
                if (f(n)) Object.keys(n).forEach((function (a) {
                    var i = n[a];
                    f(i) ? (s.push(a), s.push("."), r(t, e, i, s), s.pop(), s.pop()) : (s.push(a), r(t, e, i, s), s.pop())
                })); else if (o(n)) n.forEach((function (n, a) {
                    f(n) ? (s.push("[" + a + "]"), s.push("."), r(t, e, n, s), s.pop(), s.pop()) : (s.push("[" + a + "]"), r(t, e, n, s), s.pop())
                })); else if (u(n)) {
                    var c = bt.test(n);
                    if (c) {
                        var l = "Detected HTML in message '" + n + "' of keypath '" + s.join("") + "' at '" + e + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
                        "warn" === t ? a(l) : "error" === t && i(l)
                    }
                }
            };
            r(e, t, n, s)
        }, kt.prototype._initVM = function (t) {
            var e = D.config.silent;
            D.config.silent = !0, this._vm = new D({data: t}), D.config.silent = e
        }, kt.prototype.destroyVM = function () {
            this._vm.$destroy()
        }, kt.prototype.subscribeDataChanging = function (t) {
            this._dataListeners.add(t)
        }, kt.prototype.unsubscribeDataChanging = function (t) {
            y(this._dataListeners, t)
        }, kt.prototype.watchI18nData = function () {
            var t = this;
            return this._vm.$watch("$data", (function () {
                t._dataListeners.forEach((function (t) {
                    D.nextTick((function () {
                        t && t.$forceUpdate()
                    }))
                }))
            }), {deep: !0})
        }, kt.prototype.watchLocale = function () {
            if (!this._sync || !this._root) return null;
            var t = this._vm;
            return this._root.$i18n.vm.$watch("locale", (function (e) {
                t.$set(t, "locale", e), t.$forceUpdate()
            }), {immediate: !0})
        }, kt.prototype.onComponentInstanceCreated = function (t) {
            this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(t, this)
        }, xt.vm.get = function () {
            return this._vm
        }, xt.messages.get = function () {
            return v(this._getMessages())
        }, xt.dateTimeFormats.get = function () {
            return v(this._getDateTimeFormats())
        }, xt.numberFormats.get = function () {
            return v(this._getNumberFormats())
        }, xt.availableLocales.get = function () {
            return Object.keys(this.messages).sort()
        }, xt.locale.get = function () {
            return this._vm.locale
        }, xt.locale.set = function (t) {
            this._vm.$set(this._vm, "locale", t)
        }, xt.fallbackLocale.get = function () {
            return this._vm.fallbackLocale
        }, xt.fallbackLocale.set = function (t) {
            this._localeChainCache = {}, this._vm.$set(this._vm, "fallbackLocale", t)
        }, xt.formatFallbackMessages.get = function () {
            return this._formatFallbackMessages
        }, xt.formatFallbackMessages.set = function (t) {
            this._formatFallbackMessages = t
        }, xt.missing.get = function () {
            return this._missing
        }, xt.missing.set = function (t) {
            this._missing = t
        }, xt.formatter.get = function () {
            return this._formatter
        }, xt.formatter.set = function (t) {
            this._formatter = t
        }, xt.silentTranslationWarn.get = function () {
            return this._silentTranslationWarn
        }, xt.silentTranslationWarn.set = function (t) {
            this._silentTranslationWarn = t
        }, xt.silentFallbackWarn.get = function () {
            return this._silentFallbackWarn
        }, xt.silentFallbackWarn.set = function (t) {
            this._silentFallbackWarn = t
        }, xt.preserveDirectiveContent.get = function () {
            return this._preserveDirectiveContent
        }, xt.preserveDirectiveContent.set = function (t) {
            this._preserveDirectiveContent = t
        }, xt.warnHtmlInMessage.get = function () {
            return this._warnHtmlInMessage
        }, xt.warnHtmlInMessage.set = function (t) {
            var e = this, n = this._warnHtmlInMessage;
            if (this._warnHtmlInMessage = t, n !== t && ("warn" === t || "error" === t)) {
                var s = this._getMessages();
                Object.keys(s).forEach((function (t) {
                    e._checkLocaleMessage(t, e._warnHtmlInMessage, s[t])
                }))
            }
        }, xt.postTranslation.get = function () {
            return this._postTranslation
        }, xt.postTranslation.set = function (t) {
            this._postTranslation = t
        }, kt.prototype._getMessages = function () {
            return this._vm.messages
        }, kt.prototype._getDateTimeFormats = function () {
            return this._vm.dateTimeFormats
        }, kt.prototype._getNumberFormats = function () {
            return this._vm.numberFormats
        }, kt.prototype._warnDefault = function (t, e, n, s, r, a) {
            if (!p(n)) return n;
            if (this._missing) {
                var i = this._missing.apply(null, [t, e, s, r]);
                if (u(i)) return i
            } else 0;
            if (this._formatFallbackMessages) {
                var o = g.apply(void 0, r);
                return this._render(e, a, o.params, e)
            }
            return e
        }, kt.prototype._isFallbackRoot = function (t) {
            return !t && !p(this._root) && this._fallbackRoot
        }, kt.prototype._isSilentFallbackWarn = function (t) {
            return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(t) : this._silentFallbackWarn
        }, kt.prototype._isSilentFallback = function (t, e) {
            return this._isSilentFallbackWarn(e) && (this._isFallbackRoot() || t !== this.fallbackLocale)
        }, kt.prototype._isSilentTranslationWarn = function (t) {
            return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(t) : this._silentTranslationWarn
        }, kt.prototype._interpolate = function (t, e, n, s, r, a, i) {
            if (!e) return null;
            var c, l = this._path.getPathValue(e, n);
            if (o(l) || f(l)) return l;
            if (p(l)) {
                if (!f(e)) return null;
                if (c = e[n], !u(c) && !m(c)) return null
            } else {
                if (!u(l) && !m(l)) return null;
                c = l
            }
            return u(c) && (c.indexOf("@:") >= 0 || c.indexOf("@.") >= 0) && (c = this._link(t, e, c, s, "raw", a, i)), this._render(c, r, a, n)
        }, kt.prototype._link = function (t, e, n, s, r, a, i) {
            var c = n, l = c.match(_t);
            for (var u in l) if (l.hasOwnProperty(u)) {
                var d = l[u], h = d.match(wt), f = h[0], p = h[1], m = d.replace(f, "").replace(Ct, "");
                if (b(i, m)) return c;
                i.push(m);
                var g = this._interpolate(t, e, m, s, "raw" === r ? "string" : r, "raw" === r ? void 0 : a, i);
                if (this._isFallbackRoot(g)) {
                    if (!this._root) throw Error("unexpected error");
                    var v = this._root.$i18n;
                    g = v._translate(v._getMessages(), v.locale, v.fallbackLocale, m, s, r, a)
                }
                g = this._warnDefault(t, m, g, s, o(a) ? a : [a], r), this._modifiers.hasOwnProperty(p) ? g = this._modifiers[p](g) : St.hasOwnProperty(p) && (g = St[p](g)), i.pop(), c = g ? c.replace(d, g) : c
            }
            return c
        }, kt.prototype._createMessageContext = function (t) {
            var e = o(t) ? t : [], n = c(t) ? t : {}, s = function (t) {
                return e[t]
            }, r = function (t) {
                return n[t]
            };
            return {list: s, named: r}
        }, kt.prototype._render = function (t, e, n, s) {
            if (m(t)) return t(this._createMessageContext(n));
            var r = this._formatter.interpolate(t, n, s);
            return r || (r = $t.interpolate(t, n, s)), "string" !== e || u(r) ? r : r.join("")
        }, kt.prototype._appendItemToChain = function (t, e, n) {
            var s = !1;
            return b(t, e) || (s = !0, e && (s = "!" !== e[e.length - 1], e = e.replace(/!/g, ""), t.push(e), n && n[e] && (s = n[e]))), s
        }, kt.prototype._appendLocaleToChain = function (t, e, n) {
            var s, r = e.split("-");
            do {
                var a = r.join("-");
                s = this._appendItemToChain(t, a, n), r.splice(-1, 1)
            } while (r.length && !0 === s);
            return s
        }, kt.prototype._appendBlockToChain = function (t, e, n) {
            for (var s = !0, r = 0; r < e.length && l(s); r++) {
                var a = e[r];
                u(a) && (s = this._appendLocaleToChain(t, a, n))
            }
            return s
        }, kt.prototype._getLocaleChain = function (t, e) {
            if ("" === t) return [];
            this._localeChainCache || (this._localeChainCache = {});
            var n = this._localeChainCache[t];
            if (!n) {
                e || (e = this.fallbackLocale), n = [];
                var s, r = [t];
                while (o(r)) r = this._appendBlockToChain(n, r, e);
                s = o(e) ? e : c(e) ? e["default"] ? e["default"] : null : e, r = u(s) ? [s] : s, r && this._appendBlockToChain(n, r, null), this._localeChainCache[t] = n
            }
            return n
        }, kt.prototype._translate = function (t, e, n, s, r, a, i) {
            for (var o, c = this._getLocaleChain(e, n), l = 0; l < c.length; l++) {
                var u = c[l];
                if (o = this._interpolate(u, t[u], s, r, a, i, [s]), !p(o)) return o
            }
            return null
        }, kt.prototype._t = function (t, e, n, s) {
            var r, a = [], i = arguments.length - 4;
            while (i-- > 0) a[i] = arguments[i + 4];
            if (!t) return "";
            var o = g.apply(void 0, a);
            this._escapeParameterHtml && (o.params = k(o.params));
            var c = o.locale || e, l = this._translate(n, c, this.fallbackLocale, t, s, "string", o.params);
            if (this._isFallbackRoot(l)) {
                if (!this._root) throw Error("unexpected error");
                return (r = this._root).$t.apply(r, [t].concat(a))
            }
            return l = this._warnDefault(c, t, l, s, a, "string"), this._postTranslation && null !== l && void 0 !== l && (l = this._postTranslation(l, t)), l
        }, kt.prototype.t = function (t) {
            var e, n = [], s = arguments.length - 1;
            while (s-- > 0) n[s] = arguments[s + 1];
            return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(n))
        }, kt.prototype._i = function (t, e, n, s, r) {
            var a = this._translate(n, e, this.fallbackLocale, t, s, "raw", r);
            if (this._isFallbackRoot(a)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.i(t, e, r)
            }
            return this._warnDefault(e, t, a, s, [r], "raw")
        }, kt.prototype.i = function (t, e, n) {
            return t ? (u(e) || (e = this.locale), this._i(t, e, this._getMessages(), null, n)) : ""
        }, kt.prototype._tc = function (t, e, n, s, r) {
            var a, i = [], o = arguments.length - 5;
            while (o-- > 0) i[o] = arguments[o + 5];
            if (!t) return "";
            void 0 === r && (r = 1);
            var c = {count: r, n: r}, l = g.apply(void 0, i);
            return l.params = Object.assign(c, l.params), i = null === l.locale ? [l.params] : [l.locale, l.params], this.fetchChoice((a = this)._t.apply(a, [t, e, n, s].concat(i)), r)
        }, kt.prototype.fetchChoice = function (t, e) {
            if (!t || !u(t)) return null;
            var n = t.split("|");
            return e = this.getChoiceIndex(e, n.length), n[e] ? n[e].trim() : t
        }, kt.prototype.tc = function (t, e) {
            var n, s = [], r = arguments.length - 2;
            while (r-- > 0) s[r] = arguments[r + 2];
            return (n = this)._tc.apply(n, [t, this.locale, this._getMessages(), null, e].concat(s))
        }, kt.prototype._te = function (t, e, n) {
            var s = [], r = arguments.length - 3;
            while (r-- > 0) s[r] = arguments[r + 3];
            var a = g.apply(void 0, s).locale || e;
            return this._exist(n[a], t)
        }, kt.prototype.te = function (t, e) {
            return this._te(t, this.locale, this._getMessages(), e)
        }, kt.prototype.getLocaleMessage = function (t) {
            return v(this._vm.messages[t] || {})
        }, kt.prototype.setLocaleMessage = function (t, e) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, e)
        }, kt.prototype.mergeLocaleMessage = function (t, e) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, C("undefined" !== typeof this._vm.messages[t] && Object.keys(this._vm.messages[t]).length ? this._vm.messages[t] : {}, e))
        }, kt.prototype.getDateTimeFormat = function (t) {
            return v(this._vm.dateTimeFormats[t] || {})
        }, kt.prototype.setDateTimeFormat = function (t, e) {
            this._vm.$set(this._vm.dateTimeFormats, t, e), this._clearDateTimeFormat(t, e)
        }, kt.prototype.mergeDateTimeFormat = function (t, e) {
            this._vm.$set(this._vm.dateTimeFormats, t, C(this._vm.dateTimeFormats[t] || {}, e)), this._clearDateTimeFormat(t, e)
        }, kt.prototype._clearDateTimeFormat = function (t, e) {
            for (var n in e) {
                var s = t + "__" + n;
                this._dateTimeFormatters.hasOwnProperty(s) && delete this._dateTimeFormatters[s]
            }
        }, kt.prototype._localizeDateTime = function (t, e, n, s, r) {
            for (var a = e, i = s[a], o = this._getLocaleChain(e, n), c = 0; c < o.length; c++) {
                var l = o[c];
                if (i = s[l], a = l, !p(i) && !p(i[r])) break
            }
            if (p(i) || p(i[r])) return null;
            var u = i[r], d = a + "__" + r, h = this._dateTimeFormatters[d];
            return h || (h = this._dateTimeFormatters[d] = new Intl.DateTimeFormat(a, u)), h.format(t)
        }, kt.prototype._d = function (t, e, n) {
            if (!n) return new Intl.DateTimeFormat(e).format(t);
            var s = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), n);
            if (this._isFallbackRoot(s)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.d(t, n, e)
            }
            return s || ""
        }, kt.prototype.d = function (t) {
            var e = [], n = arguments.length - 1;
            while (n-- > 0) e[n] = arguments[n + 1];
            var s = this.locale, r = null;
            return 1 === e.length ? u(e[0]) ? r = e[0] : c(e[0]) && (e[0].locale && (s = e[0].locale), e[0].key && (r = e[0].key)) : 2 === e.length && (u(e[0]) && (r = e[0]), u(e[1]) && (s = e[1])), this._d(t, s, r)
        }, kt.prototype.getNumberFormat = function (t) {
            return v(this._vm.numberFormats[t] || {})
        }, kt.prototype.setNumberFormat = function (t, e) {
            this._vm.$set(this._vm.numberFormats, t, e), this._clearNumberFormat(t, e)
        }, kt.prototype.mergeNumberFormat = function (t, e) {
            this._vm.$set(this._vm.numberFormats, t, C(this._vm.numberFormats[t] || {}, e)), this._clearNumberFormat(t, e)
        }, kt.prototype._clearNumberFormat = function (t, e) {
            for (var n in e) {
                var s = t + "__" + n;
                this._numberFormatters.hasOwnProperty(s) && delete this._numberFormatters[s]
            }
        }, kt.prototype._getNumberFormatter = function (t, e, n, s, r, a) {
            for (var i = e, o = s[i], c = this._getLocaleChain(e, n), l = 0; l < c.length; l++) {
                var u = c[l];
                if (o = s[u], i = u, !p(o) && !p(o[r])) break
            }
            if (p(o) || p(o[r])) return null;
            var d, h = o[r];
            if (a) d = new Intl.NumberFormat(i, Object.assign({}, h, a)); else {
                var f = i + "__" + r;
                d = this._numberFormatters[f], d || (d = this._numberFormatters[f] = new Intl.NumberFormat(i, h))
            }
            return d
        }, kt.prototype._n = function (t, e, n, s) {
            if (!kt.availabilities.numberFormat) return "";
            if (!n) {
                var r = s ? new Intl.NumberFormat(e, s) : new Intl.NumberFormat(e);
                return r.format(t)
            }
            var a = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, s),
                i = a && a.format(t);
            if (this._isFallbackRoot(i)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.n(t, Object.assign({}, {key: n, locale: e}, s))
            }
            return i || ""
        }, kt.prototype.n = function (t) {
            var e = [], n = arguments.length - 1;
            while (n-- > 0) e[n] = arguments[n + 1];
            var s = this.locale, a = null, i = null;
            return 1 === e.length ? u(e[0]) ? a = e[0] : c(e[0]) && (e[0].locale && (s = e[0].locale), e[0].key && (a = e[0].key), i = Object.keys(e[0]).reduce((function (t, n) {
                var s;
                return b(r, n) ? Object.assign({}, t, (s = {}, s[n] = e[0][n], s)) : t
            }), null)) : 2 === e.length && (u(e[0]) && (a = e[0]), u(e[1]) && (s = e[1])), this._n(t, s, a, i)
        }, kt.prototype._ntp = function (t, e, n, s) {
            if (!kt.availabilities.numberFormat) return [];
            if (!n) {
                var r = s ? new Intl.NumberFormat(e, s) : new Intl.NumberFormat(e);
                return r.formatToParts(t)
            }
            var a = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, s),
                i = a && a.formatToParts(t);
            if (this._isFallbackRoot(i)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n._ntp(t, e, n, s)
            }
            return i || []
        }, Object.defineProperties(kt.prototype, xt), Object.defineProperty(kt, "availabilities", {
            get: function () {
                if (!yt) {
                    var t = "undefined" !== typeof Intl;
                    yt = {
                        dateTimeFormat: t && "undefined" !== typeof Intl.DateTimeFormat,
                        numberFormat: t && "undefined" !== typeof Intl.NumberFormat
                    }
                }
                return yt
            }
        }), kt.install = V, kt.version = "8.24.4";
        var Tt = kt, Ot = n("f121"), Et = n("8295"), Mt = n("371c");
        s["default"].use(Tt);
        const At = new Tt({locale: "en", fallbackLocale: "en"});

        function It(t) {
            return Mt["a"].info(`i18n: set language "${t}"`), At.locale = t, document.querySelector("html").setAttribute("lang", t), t
        }

        function jt(t) {
            let e = t;
            return "auto" === e && (e = Et["a"].language(), Mt["a"].info(`i18n: autodetect language "${e}"`)), Ot["a"].languages.includes(e) || (Mt["a"].warn(`i18n: "${e}" is not supported`), e = Ot["a"].defaultLanguage), Mt["a"].info(`i18n: loading "${e}"`), n("39c3")(`./${e}.json`).then(t => (At.setLocaleMessage(e, t.default), It(e)))
        }

        e["a"] = {loadLanguage: jt, t: (t, e) => At.t(t, e), plural: (t, e) => At.tc(t, e)}
    }, "9f42": function (t, e, n) {
        "use strict";
        var s = n("f11f");
        const r = Object(s["a"])(), a = {
            WIDGET_LOADED: "onWidgetLoaded",
            CLIENT_OPENED_CHAT: "onClientOpenedChat",
            CLIENT_CLOSED_CHAT: "onClientClosedChat",
            CLIENT_SENT_MESSAGE: "onClientSentMessage",
            CLIENT_SENT_CONTACT_FROM: "onClientSentContactForm",
            CLIENT_SENT_AUTO_CONTACT_FORM: "onClientSentAutoContactForm",
            CLIENT_SENT_OFFLINE_FORM: "onClientSentOfflineForm",
            CLIENT_SENT_REQUEST_CALLBACK: "onClientSentRequestCallback",
            OPERATOR_CHOSE_CLIENT: "onOperatorChoseClient",
            OPERATOR_SENT_MESSAGE: "onOperatorSentMessage",
            INVITATION_SHOWN: "onInvitationShown",
            CLIENT_SENT_CALL_REQUEST: "onClientSentCallRequest",
            OPERATOR_ACCEPTED_CALL_REQUEST: "onOperatorAcceptedCallRequest",
            CLIENT_ASSIGNED_DEPARTMENT: "onClientAssignedDepartment",
            BANNERS_LOADED: "onBannersLoaded",
            CLIENT_CLICKED_QUESTION: "onClientClickedQuestion"
        }, i = {
            chat: {command: [], everyCommand: [], chatState: [], chatMode: []},
            wrapper: {resize: []},
            socket: {reconnect: []}
        };
        e["a"] = {
            events: a, on(t, e) {
                r.on(t, e)
            }, trigger(t, ...e) {
                r.emit(t, ...e)
            }, chat: {
                watchCommand(t, e) {
                    i.chat.command.push({name: t, cb: e})
                }, watchEveryCommand(t) {
                    i.chat.everyCommand.push(t)
                }, watchChatState(t, e) {
                    i.chat.chatState.push({name: t, cb: e})
                }, watchChatMode(t, e) {
                    i.chat.chatMode.push({name: t, cb: e})
                }, triggerCommand(t, e) {
                    for (const n of i.chat.everyCommand) n(t, e);
                    for (const n of i.chat.command) t === n.name && n.cb(e)
                }, triggerChatState(t) {
                    for (const e of i.chat.chatState) t === e.name && e.cb()
                }, triggerChatMode(t) {
                    for (const e of i.chat.chatMode) t === e.name && e.cb()
                }
            }, wrapper: {
                watchResize(t) {
                    i.wrapper.resize.push({cb: t})
                }, triggerResize() {
                    for (const t of i.wrapper.resize) t.cb()
                }
            }, socket: {
                watchReconnect(t) {
                    i.socket.reconnect.push({cb: t})
                }, triggerReconnect() {
                    for (const t of i.socket.reconnect) t.cb()
                }
            }
        }
    }, "9ff0": function (t, e, n) {
        "use strict";
        n("b637")
    }, a1a7: function (t, e, n) {
    }, a448: function (t, e, n) {
        t.exports = n("6dd6")
    }, a4aa: function (t, e, n) {
        "use strict";
        n("33ff")
    }, a6dc: function (t, e, n) {
    }, aa7c: function (t, e, n) {
    }, aa82: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "requiredIf", prop: t}, (function (e, n) {
                return !(0, s.ref)(t, this, n) || (0, s.req)(e)
            }))
        };
        e.default = r
    }, aac8: function (t, e, n) {
        "use strict";
        n("1048")
    }, acbe: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return SuggestsMessage
        }));
        var s = n("5c99");

        class SuggestsMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["h"], this.suggests = t, this.temp = !0
            }
        }
    }, ae74: function (t, e, n) {
        "use strict";
        e["a"] = t => {
            const e = Math.floor(Math.log(t) / Math.log(1024));
            return 1 * (t / Math.pow(1024, e)).toFixed(2)
        }
    }, b077: function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [t.formMode ? t._e() : n("div", {staticClass: "header"}, [t._v(" " + t._s(t.header) + " ")]), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.departmentId,
                    expression: "departmentId"
                }],
                staticClass: "select",
                class: {"-invisible": t.formMode, "-selected": t.departmentId},
                attrs: {required: t.requeredAskDepartment},
                on: {
                    change: [function (e) {
                        var n = Array.prototype.filter.call(e.target.options, (function (t) {
                            return t.selected
                        })).map((function (t) {
                            var e = "_value" in t ? t._value : t.value;
                            return e
                        }));
                        t.departmentId = e.target.multiple ? n : n[0]
                    }, t.onChange]
                }
            }, [n("option", {attrs: {value: ""}}, [t._v(" " + t._s(t.selectHeader) + " ")]), t._l(t.$root.$modules.departments.list(), (function (e) {
                return [n("option", {key: e.id, domProps: {value: e.id}}, [t._v(" " + t._s(e.name) + " ")])]
            }))], 2)])
        }, r = [], a = n("c0cb"), i = n("e343"), o = {
            props: {formMode: {type: Boolean, default: !0}}, data() {
                return {departmentId: ""}
            }, computed: {
                header() {
                    return this.$root.$modules.departments.header() || this.$t("DEPARTMENTS.HEADER")
                }, selectHeader() {
                    return this.$root.$modules.departments.selectHeader() || this.$t("DEPARTMENTS.SELECT_HEADER")
                }, requeredAskDepartment() {
                    const {departments: t} = this.$root.$modules;
                    return !(!t || !t.requeredAskDepartment())
                }
            }, methods: {
                onChange() {
                    if (!this.formMode) {
                        const {chat: t} = this.$root.$stores;
                        t.setDepartment(this.departmentId), this.addDepartmentStartMessage()
                    }
                    this.$emit("input", this.departmentId)
                }, addDepartmentStartMessage() {
                    const {chat: t} = this.$root.$stores,
                        e = this.$root.$modules.departments.getDepartment(this.departmentId);
                    if (null === e || 0 === e.startMessage.length) return;
                    const n = new a["a"](e.startMessage);
                    n.setSender(t.operator()), n.setIsOperatorSender(), t.addMessage(n), Object(i["a"])(".-js-scrollable-dialog")
                }
            }
        }, c = o, l = (n("fe0e"), n("2877")), u = Object(l["a"])(c, s, r, !1, null, "11116c96", null);
        e["a"] = u.exports
    }, b173: function (t, e, n) {
        "use strict";
        n("481c")
    }, b252: function (t, e, n) {
        "use strict";
        n("8f84")
    }, b50d: function (t, e, n) {
        "use strict";
        var s = n("c532"), r = n("467f"), a = n("7aac"), i = n("30b5"), o = n("83b9"), c = n("c345"), l = n("3934"),
            u = n("2d83"), d = n("2444"), h = n("7a77");
        t.exports = function (t) {
            return new Promise((function (e, n) {
                var f, p = t.data, m = t.headers, g = t.responseType;

                function v() {
                    t.cancelToken && t.cancelToken.unsubscribe(f), t.signal && t.signal.removeEventListener("abort", f)
                }

                s.isFormData(p) && delete m["Content-Type"];
                var y = new XMLHttpRequest;
                if (t.auth) {
                    var b = t.auth.username || "",
                        _ = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                    m.Authorization = "Basic " + btoa(b + ":" + _)
                }
                var w = o(t.baseURL, t.url);

                function C() {
                    if (y) {
                        var s = "getAllResponseHeaders" in y ? c(y.getAllResponseHeaders()) : null,
                            a = g && "text" !== g && "json" !== g ? y.response : y.responseText, i = {
                                data: a,
                                status: y.status,
                                statusText: y.statusText,
                                headers: s,
                                config: t,
                                request: y
                            };
                        r((function (t) {
                            e(t), v()
                        }), (function (t) {
                            n(t), v()
                        }), i), y = null
                    }
                }

                if (y.open(t.method.toUpperCase(), i(w, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, "onloadend" in y ? y.onloadend = C : y.onreadystatechange = function () {
                    y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(C)
                }, y.onabort = function () {
                    y && (n(u("Request aborted", t, "ECONNABORTED", y)), y = null)
                }, y.onerror = function () {
                    n(u("Network Error", t, null, y)), y = null
                }, y.ontimeout = function () {
                    var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                        s = t.transitional || d.transitional;
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(u(e, t, s.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)), y = null
                }, s.isStandardBrowserEnv()) {
                    var S = (t.withCredentials || l(w)) && t.xsrfCookieName ? a.read(t.xsrfCookieName) : void 0;
                    S && (m[t.xsrfHeaderName] = S)
                }
                "setRequestHeader" in y && s.forEach(m, (function (t, e) {
                    "undefined" === typeof p && "content-type" === e.toLowerCase() ? delete m[e] : y.setRequestHeader(e, t)
                })), s.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), g && "json" !== g && (y.responseType = t.responseType), "function" === typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" === typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (f = function (t) {
                    y && (n(!t || t && t.type ? new h("canceled") : t), y.abort(), y = null)
                }, t.cancelToken && t.cancelToken.subscribe(f), t.signal && (t.signal.aborted ? f() : t.signal.addEventListener("abort", f))), p || (p = null), y.send(p)
            }))
        }
    }, b5ae: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), Object.defineProperty(e, "alpha", {
            enumerable: !0,
            get: function () {
                return s.default
            }
        }), Object.defineProperty(e, "alphaNum", {
            enumerable: !0, get: function () {
                return r.default
            }
        }), Object.defineProperty(e, "numeric", {
            enumerable: !0, get: function () {
                return a.default
            }
        }), Object.defineProperty(e, "between", {
            enumerable: !0, get: function () {
                return i.default
            }
        }), Object.defineProperty(e, "email", {
            enumerable: !0, get: function () {
                return o.default
            }
        }), Object.defineProperty(e, "ipAddress", {
            enumerable: !0, get: function () {
                return c.default
            }
        }), Object.defineProperty(e, "macAddress", {
            enumerable: !0, get: function () {
                return l.default
            }
        }), Object.defineProperty(e, "maxLength", {
            enumerable: !0, get: function () {
                return u.default
            }
        }), Object.defineProperty(e, "minLength", {
            enumerable: !0, get: function () {
                return d.default
            }
        }), Object.defineProperty(e, "required", {
            enumerable: !0, get: function () {
                return h.default
            }
        }), Object.defineProperty(e, "requiredIf", {
            enumerable: !0, get: function () {
                return f.default
            }
        }), Object.defineProperty(e, "requiredUnless", {
            enumerable: !0, get: function () {
                return p.default
            }
        }), Object.defineProperty(e, "sameAs", {
            enumerable: !0, get: function () {
                return m.default
            }
        }), Object.defineProperty(e, "url", {
            enumerable: !0, get: function () {
                return g.default
            }
        }), Object.defineProperty(e, "or", {
            enumerable: !0, get: function () {
                return v.default
            }
        }), Object.defineProperty(e, "and", {
            enumerable: !0, get: function () {
                return y.default
            }
        }), Object.defineProperty(e, "not", {
            enumerable: !0, get: function () {
                return b.default
            }
        }), Object.defineProperty(e, "minValue", {
            enumerable: !0, get: function () {
                return _.default
            }
        }), Object.defineProperty(e, "maxValue", {
            enumerable: !0, get: function () {
                return w.default
            }
        }), Object.defineProperty(e, "integer", {
            enumerable: !0, get: function () {
                return C.default
            }
        }), Object.defineProperty(e, "decimal", {
            enumerable: !0, get: function () {
                return S.default
            }
        }), e.helpers = void 0;
        var s = x(n("6235")), r = x(n("3a54")), a = x(n("45b8")), i = x(n("ec11")), o = x(n("5d75")), c = x(n("c99d")),
            l = x(n("91d3")), u = x(n("2a12")), d = x(n("5db3")), h = x(n("d4f4")), f = x(n("aa82")), p = x(n("e652")),
            m = x(n("b6cb")), g = x(n("772d")), v = x(n("d294")), y = x(n("3360")), b = x(n("6417")), _ = x(n("eb66")),
            w = x(n("46bc")), C = x(n("1331")), S = x(n("c301")), $ = k(n("78ef"));

        function k(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
                var s = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                s.get || s.set ? Object.defineProperty(e, n, s) : e[n] = t[n]
            }
            return e.default = t, e
        }

        function x(t) {
            return t && t.__esModule ? t : {default: t}
        }

        e.helpers = $
    }, b637: function (t, e, n) {
    }, b697: function (t, e, n) {
    }, b6cb: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "sameAs", eq: t}, (function (e, n) {
                return e === (0, s.ref)(t, this, n)
            }))
        };
        e.default = r
    }, b775: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return c
        }));
        var s = n("bc3a"), r = n.n(s), a = n("f121");

        class RequestError extends Error {
            constructor(t, e = {}) {
                const {config: n = {}} = e, s = [];
                s.push(t), n.url && s.unshift(n.url), super(s.join(" ")), this.name = this.constructor.name, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                const {headers: r, data: a, status: i} = e;
                this.httpStatus = i, this.request = n, this.response = {headers: r, data: a}
            }
        }

        var i = n("371c");
        const o = r.a.create({baseURL: a["a"].apiHost, responseType: "json"}),
            c = r.a.create({baseURL: `${location.origin}${a["a"].microsite.baseUrl}`, responseType: "json"});
        c.interceptors.response.use(t => t, t => {
            const e = new RequestError(t.message, t.response);
            return i["a"].error(e), e
        }), o.interceptors.response.use(t => t, t => {
            const e = new RequestError(t.message, t.response);
            return i["a"].error(e), Promise.reject(e)
        });
        e["a"] = o
    }, bc3a: function (t, e, n) {
        t.exports = n("cee4")
    }, bd23: function (t, e, n) {
        "use strict";
        n("3af8")
    }, bfb0: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return VideoRequestMessage
        }));
        var s = n("5c99");
        const r = 1, a = 2, i = 3;

        class VideoRequestMessage extends s["l"] {
            constructor() {
                super(), this.type = s["j"], this.temp = !0, this.status = 0, this.link = null
            }

            reset() {
                this.status = 0
            }

            isInitialState() {
                return 0 === this.status
            }

            request() {
                this.status = Number(r)
            }

            isRequested() {
                return this.status === Number(r)
            }

            reject() {
                this.status = Number(a)
            }

            isRejected() {
                return this.status === Number(a)
            }

            accept(t) {
                this.link = t, this.status = Number(i)
            }

            isAccepted() {
                return this.status === Number(i)
            }
        }
    }, c0cb: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return TextMessage
        }));
        var s = n("5c99");

        class TextMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["i"], this.message = t || ""
            }
        }
    }, c208: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return VideoWelcomeMessage
        }));
        var s = n("5c99");

        class VideoWelcomeMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["k"], this.youtubeId = t.youtubeId, this.temp = !1
            }
        }
    }, c301: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.regex)("decimal", /^[-]?\d*(\.\d+)?$/);
        e.default = r
    }, c345: function (t, e, n) {
        "use strict";
        var s = n("c532"),
            r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function (t) {
            var e, n, a, i = {};
            return t ? (s.forEach(t.split("\n"), (function (t) {
                if (a = t.indexOf(":"), e = s.trim(t.substr(0, a)).toLowerCase(), n = s.trim(t.substr(a + 1)), e) {
                    if (i[e] && r.indexOf(e) >= 0) return;
                    i[e] = "set-cookie" === e ? (i[e] ? i[e] : []).concat([n]) : i[e] ? i[e] + ", " + n : n
                }
            })), i) : i
        }
    }, c401: function (t, e, n) {
        "use strict";
        var s = n("c532"), r = n("2444");
        t.exports = function (t, e, n) {
            var a = this || r;
            return s.forEach(n, (function (n) {
                t = n.call(a, t, e)
            })), t
        }
    }, c532: function (t, e, n) {
        "use strict";
        var s = n("1d2b"), r = Object.prototype.toString;

        function a(t) {
            return "[object Array]" === r.call(t)
        }

        function i(t) {
            return "undefined" === typeof t
        }

        function o(t) {
            return null !== t && !i(t) && null !== t.constructor && !i(t.constructor) && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }

        function c(t) {
            return "[object ArrayBuffer]" === r.call(t)
        }

        function l(t) {
            return "undefined" !== typeof FormData && t instanceof FormData
        }

        function u(t) {
            var e;
            return e = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer, e
        }

        function d(t) {
            return "string" === typeof t
        }

        function h(t) {
            return "number" === typeof t
        }

        function f(t) {
            return null !== t && "object" === typeof t
        }

        function p(t) {
            if ("[object Object]" !== r.call(t)) return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype
        }

        function m(t) {
            return "[object Date]" === r.call(t)
        }

        function g(t) {
            return "[object File]" === r.call(t)
        }

        function v(t) {
            return "[object Blob]" === r.call(t)
        }

        function y(t) {
            return "[object Function]" === r.call(t)
        }

        function b(t) {
            return f(t) && y(t.pipe)
        }

        function _(t) {
            return "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
        }

        function w(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function C() {
            return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
        }

        function S(t, e) {
            if (null !== t && "undefined" !== typeof t) if ("object" !== typeof t && (t = [t]), a(t)) for (var n = 0, s = t.length; n < s; n++) e.call(null, t[n], n, t); else for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t)
        }

        function $() {
            var t = {};

            function e(e, n) {
                p(t[n]) && p(e) ? t[n] = $(t[n], e) : p(e) ? t[n] = $({}, e) : a(e) ? t[n] = e.slice() : t[n] = e
            }

            for (var n = 0, s = arguments.length; n < s; n++) S(arguments[n], e);
            return t
        }

        function k(t, e, n) {
            return S(e, (function (e, r) {
                t[r] = n && "function" === typeof e ? s(e, n) : e
            })), t
        }

        function x(t) {
            return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
        }

        t.exports = {
            isArray: a,
            isArrayBuffer: c,
            isBuffer: o,
            isFormData: l,
            isArrayBufferView: u,
            isString: d,
            isNumber: h,
            isObject: f,
            isPlainObject: p,
            isUndefined: i,
            isDate: m,
            isFile: g,
            isBlob: v,
            isFunction: y,
            isStream: b,
            isURLSearchParams: _,
            isStandardBrowserEnv: C,
            forEach: S,
            merge: $,
            extend: k,
            trim: w,
            stripBOM: x
        }
    }, c53a: function (t, e, n) {
        "use strict";
        e["a"] = {
            forceOnlineKey(t) {
                return "REPLAIN_ONLINE_" + t.state.id
            }, setForceOnline(t) {
                sessionStorage[this.forceOnlineKey(t)] = "on"
            }, isForceOnline(t) {
                return "on" === sessionStorage[this.forceOnlineKey(t)]
            }, setOnline(t) {
                this.setForceOnline(t), t.setOnline()
            }, isOnline(t) {
                return t.state.settings.online || this.isForceOnline(t)
            }
        }
    }, c7eb: function (t, e, n) {
    }, c8af: function (t, e, n) {
        "use strict";
        var s = n("c532");
        t.exports = function (t, e) {
            s.forEach(t, (function (n, s) {
                s !== e && s.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[s])
            }))
        }
    }, c94a: function (t, e, n) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "message",
                class: "-" + t.senderTypeString
            }, [n("div", {
                staticClass: "content",
                class: {"accent-color-bg": t.message.isClientSender()}
            }, [n("div", {
                staticClass: "corner",
                class: {"accent-color-border": t.message.isClientSender()}
            }), n("div", {
                staticClass: "sender",
                class: {"-avatar": t.isExistAvatar}
            }, [n("div", {staticClass: "name"}, [t.isExistAvatar ? n("div", {staticClass: "avatar"}, [n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.avatarLoaded,
                    expression: "avatarLoaded"
                }], attrs: {src: t.avatar, alt: ""}, on: {load: t.onAvatarLoaded}
            })]) : t._e(), t._v(" " + t._s(t.senderName) + " Â  "), n("div", {staticClass: "time"}, [t._v(" " + t._s(t._f("formatDate")(t.message.time)) + " ")])])]), n("div", {
                staticClass: "text",
                domProps: {innerHTML: t._s(t.$options.filters.safehtml(t.message.message))}
            })])])
        }, r = [], a = n("c0cb"), i = {
            props: {message: {type: Object, validator: t => a["a"].name === t.constructor.name, required: !0}},
            data() {
                return {avatarLoaded: !1}
            },
            computed: {
                senderName() {
                    return this.message.isClientSender() ? this.$t("_.YOU") : this.message.senderName()
                }, senderTypeString() {
                    return this.message.isClientSender() ? "client" : "operator"
                }, isExistAvatar() {
                    const t = this.message.senderAvatar();
                    return null !== t && String(t).length > 0
                }, avatar() {
                    return this.message.senderAvatar()
                }
            },
            methods: {
                onAvatarLoaded() {
                    this.avatarLoaded = !0
                }
            }
        }, o = i, c = (n("9ff0"), n("05e0"), n("2877")), l = Object(c["a"])(o, s, r, !1, null, "17768756", null);
        e["a"] = l.exports
    }, c995: function (t, e, n) {
        "use strict";
        var s = n("6dc6");
        const r = Object(s["d"])(), a = r ? "touchmove" : "mousemove", i = r ? "touchend" : "mouseup",
            o = r ? "touchstart" : "mousedown";

        function c(t) {
            return r ? t.changedTouches[0] : t
        }

        var l = (t, e) => {
                const n = t, {ownerDocument: s, style: r} = n;
                let l = 0, u = 0;
                const d = t => {
                    t.preventDefault();
                    const e = c(t).clientX - l, s = c(t).clientY - u, {offsetTop: a, offsetLeft: i} = n;
                    r.top = a + s + "px", r.left = i + e + "px", l = c(t).clientX, u = c(t).clientY
                }, h = () => {
                    n.classList.remove(e), s.body.classList.remove(e), s.removeEventListener(a, d), s.removeEventListener(i, h)
                }, f = t => {
                    n.classList.add(e), s.body.classList.add(e), l = c(t).clientX, u = c(t).clientY, s.addEventListener(a, d, {passive: !1}), s.addEventListener(i, h)
                };
                n.addEventListener(o, f)
            },
            u = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="https://call.replain.cc/favicon.ico"><title>Re:plain</title><script async src="https://embed.typeform.com/embed.js"><\/script><link href="https://call.replain.cc/css/app.5114eeb9.css" rel="preload" as="style"><link href="https://call.replain.cc/js/app.dfed7920.js" rel="preload" as="script"><link href="https://call.replain.cc/js/chunk-vendors.2a43631e.js" rel="preload" as="script"><link href="https://call.replain.cc/css/app.5114eeb9.css" rel="stylesheet"></head><body class="h-full"><noscript><strong>We\'re sorry but dialog doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id="app" class="h-full"></div><script src="https://call.replain.cc/js/chunk-vendors.2a43631e.js"><\/script><script src="https://call.replain.cc/js/app.dfed7920.js"><\/script></body></html>';
        const d = window.parent, h = d.document;
        var f = {
            iframe: null, wrapper: null, create({color: t, isColorLight: e, onDisconnect: n}) {
                this.wrapper = document.createElement("div"), this.wrapper.id = "__replain_video", this.wrapper.classList.add("__replain_draggable"), this.wrapper.style.cssText = "width: 250px; height: 350px; left: 24px; bottom: 24px; display: none;  position: fixed; z-index: 2147000001; background: transparent", this.iframe = document.createElement("iframe"), this.iframe.id = "__replain_widget_iframe_video", this.iframe.setAttribute("title", this.iframe.id), this.iframe.setAttribute("name", this.iframe.id), this.iframe.setAttribute("src", "about:blank"), this.iframe.setAttribute("scrolling", "no"), this.iframe.setAttribute("frameBorder", "0"), this.iframe.setAttribute("allow", "microphone; camera; fullscreen; microphone;"), this.iframe.setAttribute("width", "100%"), this.iframe.setAttribute("height", "100%"), this.iframe.setAttribute("link", ""), this.iframe.setAttribute("window-state", "minimize"), this.iframe.setAttribute("color", t), this.iframe.setAttribute("is-color-light", e), this.iframe.style.cssText = "border-radius: 12px; box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;", this.wrapper.appendChild(this.iframe), h.body.appendChild(this.wrapper), this.iframe.contentDocument.write(u), this.iframe.contentDocument.body.style.backgroundColor = "#" + t, this.iframe.contentDocument.close(), Object(s["c"])().any && (this.wrapper.style.width = "200px", this.wrapper.style.height = "250px", this.wrapper.style.top = "10px", this.wrapper.style.right = "auto", this.wrapper.style.left = "10px", this.wrapper.style.bottom = "auto", this.wrapper.style.transform = "none", this.wrapper.style.zIndex = 2147000011, this.iframe.style.borderRadius = "12px"), this.iframe.addEventListener("events", ({detail: t}) => {
                    const {event: e, payload: r} = t;
                    switch (e) {
                        case"created":
                            l(this.wrapper, "__replain_draggable_active");
                            break;
                        case"waiting-call":
                        case"connecting":
                            this.wrapper.style.display = "block";
                            break;
                        case"disconnect":
                            n();
                            break;
                        case"resize":
                            if (Object(s["c"])().any) switch (r) {
                                case"minimize":
                                    this.wrapper.style.width = "200px", this.wrapper.style.height = "250px", this.wrapper.style.top = "10px", this.wrapper.style.right = "auto", this.wrapper.style.left = "10px", this.wrapper.style.bottom = "auto", this.wrapper.style.transform = "none", this.iframe.style.borderRadius = "12px";
                                    break;
                                case"maximize":
                                    this.wrapper.style.width = "100%", this.wrapper.style.height = "50%", this.wrapper.style.inset = "0", this.wrapper.style.transform = "none", this.iframe.style.borderRadius = "0";
                                    break;
                                case"fullscreen":
                                    this.wrapper.style.width = "100%", this.wrapper.style.height = "100%", this.wrapper.style.top = "0", this.wrapper.style.right = "0", this.wrapper.style.left = "0", this.wrapper.style.bottom = "0", this.wrapper.style.transform = "none", this.iframe.style.borderRadius = "0";
                                    break;
                                default:
                                    break
                            } else switch (r) {
                                case"minimize":
                                    this.wrapper.style.width = "250px", this.wrapper.style.height = "350px", this.wrapper.style.top = "auto", this.wrapper.style.right = "auto", this.wrapper.style.left = "24px", this.wrapper.style.bottom = "24px", this.wrapper.style.transform = "none", this.iframe.style.borderRadius = "12px";
                                    break;
                                case"maximize":
                                    this.wrapper.style.width = "700px", this.wrapper.style.height = "80%", this.wrapper.style.top = "50%", this.wrapper.style.right = "auto", this.wrapper.style.left = "50%", this.wrapper.style.bottom = "auto", this.wrapper.style.transform = "translate(-50%, -50%)", this.iframe.style.borderRadius = "12px";
                                    break;
                                case"fullscreen":
                                    this.wrapper.style.width = "100%", this.wrapper.style.height = "100%", this.wrapper.style.top = "0", this.wrapper.style.right = "0", this.wrapper.style.left = "0", this.wrapper.style.bottom = "0", this.wrapper.style.transform = "none", this.iframe.style.borderRadius = "0";
                                    break;
                                default:
                                    break
                            }
                            break;
                        default:
                            break
                    }
                })
            }, fullscreen() {
                this.wrapper.style.width = "100%", this.wrapper.style.height = "100%", this.wrapper.style.top = "0", this.wrapper.style.right = "0", this.wrapper.style.left = "0", this.wrapper.style.bottom = "0", this.wrapper.style.transform = "none", this.wrapper.style.zIndex = 2147000011, this.iframe.style.borderRadius = "0", this.iframe.setAttribute("window-state", "fullscreen")
            }, remove() {
                try {
                    this.wrapper.remove()
                } catch {
                }
            }, setLink(t) {
                this.iframe.setAttribute("link", t)
            }
        };
        const p = window.parent, m = p.document;
        e["a"] = {
            loaded: !1,
            isLoaded() {
                const t = m.querySelector("#__replain_video");
                return !0 === this.loaded || null !== t
            },
            load({color: t, isColorLight: e, socket: n, watcher: s, video: r, onAccept: a, onReject: i, onDisconnect: o}) {
                this.isLoaded() || (this.socket = n, this.watcher = s, this.color = t, this.isColorLight = e, this.loaded = !0, this.socket.send("CALL_REQUEST", {video: r}), this.watcher.chat.watchCommand("CALL_REJECT", () => this.onReject(i)), this.watcher.chat.watchCommand("CALL_ACCEPT", ({link: t, type: e}) => this.onAcceptcall(t, e, a)), f.create({
                    color: this.color,
                    isColorLight: this.isColorLight,
                    onDisconnect: () => this.onDisconnect(o)
                }))
            },
            onAcceptcall(t, e, n) {
                n && n({
                    link: t,
                    type: e
                }), f.setLink(t), Object(s["c"])().any && f.fullscreen(), p.ReplainWidget.video.init(t)
            },
            onReject(t) {
                t && t(), this.remove()
            },
            onDisconnect(t) {
                t && t(), this.socket.send("Ð¡ALL_REQUEST_CANCEL"), this.remove()
            },
            remove() {
                this.loaded = !1, f.remove()
            }
        }
    }, c99d: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.withParams)({type: "ipAddress"}, (function (t) {
            if (!(0, s.req)(t)) return !0;
            if ("string" !== typeof t) return !1;
            var e = t.split(".");
            return 4 === e.length && e.every(a)
        }));
        e.default = r;
        var a = function (t) {
            if (t.length > 3 || 0 === t.length) return !1;
            if ("0" === t[0] && "0" !== t) return !1;
            if (!t.match(/^\d+$/)) return !1;
            var e = 0 | +t;
            return e >= 0 && e <= 255
        }
    }, cb69: function (t, e, n) {
        "use strict";
        (function (t) {
            function n(t) {
                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            Object.defineProperty(e, "__esModule", {value: !0}), e.withParams = void 0;
            var s = "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : {}, r = function (t, e) {
                return "object" === n(t) && void 0 !== e ? e : t((function () {
                }))
            }, a = s.vuelidate ? s.vuelidate.withParams : r;
            e.withParams = a
        }).call(this, n("24aa"))
    }, cd7d: function (t, e, n) {
        t.exports = n.p + "media/notification.ac905963.mp3"
    }, cee4: function (t, e, n) {
        "use strict";
        var s = n("c532"), r = n("1d2b"), a = n("0a06"), i = n("4a7b"), o = n("2444");

        function c(t) {
            var e = new a(t), n = r(a.prototype.request, e);
            return s.extend(n, a.prototype, e), s.extend(n, e), n.create = function (e) {
                return c(i(t, e))
            }, n
        }

        var l = c(o);
        l.Axios = a, l.Cancel = n("7a77"), l.CancelToken = n("8df4"), l.isCancel = n("2e67"), l.VERSION = n("5cce").version, l.all = function (t) {
            return Promise.all(t)
        }, l.spread = n("0df6"), l.isAxiosError = n("5f02"), t.exports = l, t.exports.default = l
    }, d294: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return (0, s.withParams)({type: "or"}, (function () {
                for (var t = this, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                return e.length > 0 && e.reduce((function (e, n) {
                    return e || n.apply(t, s)
                }), !1)
            }))
        };
        e.default = r
    }, d4f4: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = (0, s.withParams)({type: "required"}, (function (t) {
            return "string" === typeof t ? (0, s.req)(t.trim()) : (0, s.req)(t)
        }));
        e.default = r
    }, d7c5: function (t, e, n) {
    }, d7fd: function (t, e, n) {
    }, d813: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return VideoCard
        }));

        class VideoCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.link = t.link, this.image = t.image
            }
        }
    }, d925: function (t, e, n) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, de7c: function (t, e, n) {
    }, df7c: function (t, e, n) {
        (function (t) {
            function n(t, e) {
                for (var n = 0, s = t.length - 1; s >= 0; s--) {
                    var r = t[s];
                    "." === r ? t.splice(s, 1) : ".." === r ? (t.splice(s, 1), n++) : n && (t.splice(s, 1), n--)
                }
                if (e) for (; n--; n) t.unshift("..");
                return t
            }

            function s(t) {
                "string" !== typeof t && (t += "");
                var e, n = 0, s = -1, r = !0;
                for (e = t.length - 1; e >= 0; --e) if (47 === t.charCodeAt(e)) {
                    if (!r) {
                        n = e + 1;
                        break
                    }
                } else -1 === s && (r = !1, s = e + 1);
                return -1 === s ? "" : t.slice(n, s)
            }

            function r(t, e) {
                if (t.filter) return t.filter(e);
                for (var n = [], s = 0; s < t.length; s++) e(t[s], s, t) && n.push(t[s]);
                return n
            }

            e.resolve = function () {
                for (var e = "", s = !1, a = arguments.length - 1; a >= -1 && !s; a--) {
                    var i = a >= 0 ? arguments[a] : t.cwd();
                    if ("string" !== typeof i) throw new TypeError("Arguments to path.resolve must be strings");
                    i && (e = i + "/" + e, s = "/" === i.charAt(0))
                }
                return e = n(r(e.split("/"), (function (t) {
                    return !!t
                })), !s).join("/"), (s ? "/" : "") + e || "."
            }, e.normalize = function (t) {
                var s = e.isAbsolute(t), i = "/" === a(t, -1);
                return t = n(r(t.split("/"), (function (t) {
                    return !!t
                })), !s).join("/"), t || s || (t = "."), t && i && (t += "/"), (s ? "/" : "") + t
            }, e.isAbsolute = function (t) {
                return "/" === t.charAt(0)
            }, e.join = function () {
                var t = Array.prototype.slice.call(arguments, 0);
                return e.normalize(r(t, (function (t, e) {
                    if ("string" !== typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t
                })).join("/"))
            }, e.relative = function (t, n) {
                function s(t) {
                    for (var e = 0; e < t.length; e++) if ("" !== t[e]) break;
                    for (var n = t.length - 1; n >= 0; n--) if ("" !== t[n]) break;
                    return e > n ? [] : t.slice(e, n - e + 1)
                }

                t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
                for (var r = s(t.split("/")), a = s(n.split("/")), i = Math.min(r.length, a.length), o = i, c = 0; c < i; c++) if (r[c] !== a[c]) {
                    o = c;
                    break
                }
                var l = [];
                for (c = o; c < r.length; c++) l.push("..");
                return l = l.concat(a.slice(o)), l.join("/")
            }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
                if ("string" !== typeof t && (t += ""), 0 === t.length) return ".";
                for (var e = t.charCodeAt(0), n = 47 === e, s = -1, r = !0, a = t.length - 1; a >= 1; --a) if (e = t.charCodeAt(a), 47 === e) {
                    if (!r) {
                        s = a;
                        break
                    }
                } else r = !1;
                return -1 === s ? n ? "/" : "." : n && 1 === s ? "/" : t.slice(0, s)
            }, e.basename = function (t, e) {
                var n = s(t);
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
            }, e.extname = function (t) {
                "string" !== typeof t && (t += "");
                for (var e = -1, n = 0, s = -1, r = !0, a = 0, i = t.length - 1; i >= 0; --i) {
                    var o = t.charCodeAt(i);
                    if (47 !== o) -1 === s && (r = !1, s = i + 1), 46 === o ? -1 === e ? e = i : 1 !== a && (a = 1) : -1 !== e && (a = -1); else if (!r) {
                        n = i + 1;
                        break
                    }
                }
                return -1 === e || -1 === s || 0 === a || 1 === a && e === s - 1 && e === n + 1 ? "" : t.slice(e, s)
            };
            var a = "b" === "ab".substr(-1) ? function (t, e, n) {
                return t.substr(e, n)
            } : function (t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n)
            }
        }).call(this, n("4362"))
    }, e03c: function (t, e, n) {
        "use strict";
        n("105f")
    }, e2f5: function (t, e, n) {
    }, e343: function (t, e, n) {
        "use strict";
        e["a"] = t => {
            const e = document.querySelector(t);
            e && (e.scrollTop = e.scrollHeight - e.clientHeight)
        }
    }, e344: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return MyMessengersCard
        }));

        class MyMessengersCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.module = !0
            }
        }
    }, e387: function (t, e, n) {
        "use strict";
        n("6632")
    }, e5a3: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return FileMessage
        }));
        var s = n("5c99");

        class FileMessage extends s["l"] {
            constructor(t, e) {
                super(), this.type = s["e"], this.name = t, this.url = e
            }

            extension() {
                return this.name.split(".").pop()
            }

            isMediaType() {
                return this.isImageType() || this.isVideoType()
            }

            isImageType() {
                return ["png", "jpg", "jpeg", "gif", "webp"].includes(this.extension())
            }

            isVideoType() {
                return ["mp4"].includes(this.extension())
            }
        }
    }, e652: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "requiredUnless", prop: t}, (function (e, n) {
                return !!(0, s.ref)(t, this, n) || (0, s.req)(e)
            }))
        };
        e.default = r
    }, e683: function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, eb66: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t) {
            return (0, s.withParams)({type: "minValue", min: t}, (function (e) {
                return !(0, s.req)(e) || (!/\s/.test(e) || e instanceof Date) && +e >= +t
            }))
        };
        e.default = r
    }, ec11: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var s = n("78ef"), r = function (t, e) {
            return (0, s.withParams)({type: "between", min: t, max: e}, (function (n) {
                return !(0, s.req)(n) || (!/\s/.test(n) || n instanceof Date) && +t <= +n && +e >= +n
            }))
        };
        e.default = r
    }, ef23: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return AutoFeedbackMessage
        }));
        var s = n("5c99");

        class AutoFeedbackMessage extends s["l"] {
            constructor() {
                super(), this.type = s["a"], this.temp = !0
            }
        }
    }, efa7: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return QualityControlMessage
        }));
        var s = n("5c99"), r = n("471c");

        class QualityControlMessage extends s["l"] {
            constructor(t) {
                super(), this.type = s["f"], this.temp = !1, this.step = Number(t)
            }

            setStep(t) {
                this.step = Number(t)
            }

            isExpired() {
                return !!this.time && r["a"].hours(this.time) > 1
            }
        }
    }, f11f: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return s
        }));
        let s = () => ({
            events: {}, emit(t, ...e) {
                (this.events[t] || []).forEach(t => t(...e))
            }, on(t, e) {
                return (this.events[t] = this.events[t] || []).push(e), () => this.events[t] = (this.events[t] || []).filter(t => t !== e)
            }
        })
    }, f121: function (t, e, n) {
        "use strict";
        e["a"] = {
            apiHost: "https://app.replain.cc",
            websocketHost: "wss://ws.replain.cc/widget",
            maxMessages: 200,
            widget: {
                wrapperId: "__replain_widget",
                iframeId: "__replain_widget_iframe",
                events: {INIT: "onReplainInit"}
            },
            google: {apiKey: "AIzaSyABgdiz5RlnSsfWBaxS0bxrM9oMILPrUkA"},
            embedded: {
                defaultHostId: "replain-embedded",
                wrapperId: "__replain_widget_embedded",
                iframeId: "__replain_widget_iframe_embedded",
                events: {INIT: "onReplainEmbeddedInit"}
            },
            microsite: {baseUrl: ""},
            socket: {reconnect: {maxCount: 20}, heartbeatSec: 120},
            files: {
                timeoutAfterUpload: .5,
                maxCount: 5,
                maxSize: 20971520,
                allowedList: "image/*,video/*,audio/*,.rar,.tar,.7z,.djvu,.json,.log,.ppt,.xls,.doc,.docx,.rtf,.ttf,.psd,.odt,.pdf,.aac,.avi,.csv,.epub,.gz,.ics,.txt,.vsd,.zip,.zip,.html,.htm,.css,.ods,.odp,.pptx,.xlsx"
            },
            defaultLanguage: "en",
            languages: ["en", "ru", "es", "fa", "pt", "ar", "de", "id", "uz", "it", "ua", "uk", "cs", "hi", "fr", "pl", "he", "zh", "ro", "nl", "bg", "ms", "no", "sv", "th", "vi", "sk", "el", "ka", "ja"],
            activeInvitation: {timeout: 3, animateDesktopTimeout: 42, animateMobileTimeout: 20},
            callback: {retryTimeout: 5},
            analytics: {
                category: "Replain",
                events: {
                    CLIENT_OPEN_CHAT: "Client opened chat",
                    CLIENT_SENT_ONLINE_MESSAGE: "Client sent online message",
                    CLIENT_SENT_OFFLINE_MESSAGE: "Client sent offline message",
                    CLIENT_SENT_CONTACT_FORM: "Client sent contact form",
                    INVITATION_SHOWN: "Proactive invitation shown",
                    INVITATION_ACCEPTED: "Proactive invitation accepted",
                    INVITATION_CLOSED: "Proactive invitation closed",
                    OPERATOR_ASSIGNED: "Operator chose to client",
                    OPERATOR_SENT_MESSAGE: "Operator sent message",
                    CLIENT_CLICKED_QUESTION: "Client clicked suggest",
                    CLIENT_CLICKED_MESSENGER: "Client clicked messenger",
                    CLIENT_CLICKED_BANNER: "Client clicked banner",
                    CLIENT_SENT_REQUEST_CALLBACK: "Client sent request callback",
                    CLIENT_SENT_CALL_REQUEST: "Client sent call request",
                    OPERATOR_ACCEPTED_CALL_REQUEST: "Operator accepted call request"
                }
            }
        }
    }, f6b4: function (t, e, n) {
        "use strict";
        var s = n("c532");

        function r() {
            this.handlers = []
        }

        r.prototype.use = function (t, e, n) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1
        }, r.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, r.prototype.forEach = function (t) {
            s.forEach(this.handlers, (function (e) {
                null !== e && t(e)
            }))
        }, t.exports = r
    }, f90c: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return TextCard
        }));

        class TextCard {
            constructor(t) {
                this.id = t.id, this.name = t.name, this.text = t.text, this.buttonName = t.buttonName, this.link = t.link
            }
        }
    }, f98c: function (t, e, n) {
        "use strict";
        n("2453")
    }, fbf4: function (t, e, n) {
        "use strict";

        function s(t) {
            return null === t || void 0 === t
        }

        function r(t) {
            return null !== t && void 0 !== t
        }

        function a(t, e) {
            return e.tag === t.tag && e.key === t.key
        }

        function i(t) {
            var e = t.tag;
            t.vm = new e({data: t.args})
        }

        function o(t) {
            for (var e = Object.keys(t.args), n = 0; n < e.length; n++) e.forEach((function (e) {
                t.vm[e] = t.args[e]
            }))
        }

        function c(t, e, n) {
            var s, a, i = {};
            for (s = e; s <= n; ++s) a = t[s].key, r(a) && (i[a] = s);
            return i
        }

        function l(t, e) {
            var n, o, l, f = 0, p = 0, m = t.length - 1, g = t[0], v = t[m], y = e.length - 1, b = e[0], _ = e[y];
            while (f <= m && p <= y) s(g) ? g = t[++f] : s(v) ? v = t[--m] : a(g, b) ? (h(g, b), g = t[++f], b = e[++p]) : a(v, _) ? (h(v, _), v = t[--m], _ = e[--y]) : a(g, _) ? (h(g, _), g = t[++f], _ = e[--y]) : a(v, b) ? (h(v, b), v = t[--m], b = e[++p]) : (s(n) && (n = c(t, f, m)), o = r(b.key) ? n[b.key] : null, s(o) ? (i(b), b = e[++p]) : (l = t[o], a(l, b) ? (h(l, b), t[o] = void 0, b = e[++p]) : (i(b), b = e[++p])));
            f > m ? u(e, p, y) : p > y && d(t, f, m)
        }

        function u(t, e, n) {
            for (; e <= n; ++e) i(t[e])
        }

        function d(t, e, n) {
            for (; e <= n; ++e) {
                var s = t[e];
                r(s) && (s.vm.$destroy(), s.vm = null)
            }
        }

        function h(t, e) {
            t !== e && (e.vm = t.vm, o(e))
        }

        function f(t, e) {
            r(t) && r(e) ? t !== e && l(t, e) : r(e) ? u(e, 0, e.length - 1) : r(t) && d(t, 0, t.length - 1)
        }

        function p(t, e, n) {
            return {tag: t, key: e, args: n}
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.patchChildren = f, e.h = p
    }, fd18: function (t, e, n) {
        "use strict";
        n("b697")
    }, fd2d: function (t, e, n) {
        "use strict";
        var s = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "footer",
                    class: {"-offline": !t.isOnline()}
                }, [!t.isOnline() && t.isActive ? n("ReturnTime") : t._e(), t.isOnline() && t.isActive ? n("Composer", {attrs: {"is-open": t.isOpen}}) : t._e(), n("div", {
                    staticClass: "row",
                    class: {"-centered": !t.isOnline() || !t.isActive}
                }, [t.isOnline() && !t.isEmbedded && t.isActive ? n("div", {staticClass: "column -grow"}, [n("div", {staticClass: "item"}, [n("AttachmentsForm")], 1)]) : t._e(), t.isEnabledBranding ? n("div", {staticClass: "column"}, [n("PoweredLink", {attrs: {"is-open": t.isOpen}})], 1) : t._e()])], 1)
            }, r = [], a = n("c53a"), i = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("form", {
                    ref: "form",
                    staticClass: "composer",
                    class: [{"-open": t.isOpen}],
                    on: {
                        submit: function (e) {
                            return e.preventDefault(), t.onSendMessage.apply(null, arguments)
                        }
                    }
                }, [n("div", {staticClass: "textblock column -grow"}, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.message,
                        expression: "message",
                        modifiers: {trim: !0}
                    }],
                    ref: "message",
                    staticClass: "textarea",
                    attrs: {
                        rows: t.isEmbedded ? 1 : 2,
                        maxlength: "1000",
                        placeholder: t.placeholder,
                        disabled: !t.isConnected
                    },
                    domProps: {value: t.message},
                    on: {
                        paste: t.onPaste, input: [function (e) {
                            e.target.composing || (t.message = e.target.value.trim())
                        }, t.onInput], keypress: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.onSendMessage.apply(null, arguments)
                        }, blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), t.isEmbedded ? n("div", {staticClass: "column"}, [n("AttachmentsForm")], 1) : t._e(), n("div", {staticClass: "column"}, [n("transition", {attrs: {name: t.isEmbedded ? "" : "fade"}}, [n("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isVisibleButton && t.isConnected,
                        expression: "isVisibleButton && isConnected"
                    }], staticClass: "submit-button", attrs: {type: "submit"}
                }, [n("SvgIcon", {attrs: {icon: "plane"}})], 1)])], 1)])
            }, o = [], c = n("f121"), l = n("c0cb"), u = n("46ef"), d = n("2292"), h = n("6dc6"), f = n("9f42"),
            p = n("0032"), m = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("form", {
                    staticClass: "attachment",
                    attrs: {action: "", method: "post", enctype: "multipart/form-data"}
                }, [n("label", {staticClass: "label"}, [n("input", {
                    staticClass: "input",
                    attrs: {type: "file", name: "attachment", multiple: "", accept: t.allowedList},
                    on: {change: t.uploadFiles}
                }), t.button ? n("ButtonLink", {
                    attrs: {icon: t.buttonIcon, classes: "-attachment"},
                    on: {click: t.onButtonClick}
                }) : t._e()], 1)])
            }, g = [], v = n("76ab"), y = {
                components: {ButtonLink: v["a"]}, props: {button: {type: Boolean, default: !0, required: !1}}, data() {
                    return {uploadInProcess: !1}
                }, computed: {
                    allowedList() {
                        return c["a"].files.allowedList
                    }, buttonIcon() {
                        return this.uploadInProcess ? "preloader" : "clip"
                    }
                }, methods: {
                    getFileInput() {
                        return this.$el.querySelector('input[type="file"]')
                    }, onButtonClick() {
                        this.getFileInput().click()
                    }, async uploadFiles() {
                        const t = this.getFileInput().files;
                        if (t.length > 0) {
                            this.uploadInProcess = !0;
                            const {$socket: e, $stores: n, $crosstab: s, $modules: r, $intl: a, $globalWatcher: i} = this.$root, {analytics: o} = r;
                            Object(d["a"])(t, e, n.chat, i, a, s, o), this.uploadInProcess = !1
                        }
                    }
                }
            }, b = y, _ = (n("0334"), n("2877")), w = Object(_["a"])(b, m, g, !1, null, "7de97b94", null), C = w.exports,
            S = {
                components: {SvgIcon: p["a"], AttachmentsForm: C},
                props: {isOpen: {type: Boolean, default: !1, required: !0}},
                data() {
                    return {
                        cacheMessage: "",
                        message: "",
                        chatState: this.$root.$stores.chat.state,
                        autoFeedbackForm: null
                    }
                },
                computed: {
                    isVisibleButton() {
                        return this.message.length > 0
                    }, isEmbedded() {
                        return this.$root.$isEmbedded
                    }, isConnected() {
                        return this.chatState.connected
                    }, placeholder() {
                        return this.isConnected ? this.$t("COMPOSER.INPUT_TEXT") : this.$t("COMPOSER.INPUT_TEXT:DISABLED")
                    }
                },
                watch: {
                    message: function (t) {
                        this.$root.$stores.chat.state.message = t
                    }, isOpen: function (t, e) {
                        Object(h["d"])() || t === e || !0 !== t || setTimeout(() => {
                            this.$refs.message.focus()
                        }, 300)
                    }, "chatState.connected": function (t) {
                        t ? (this.message = this.cacheMessage, this.cacheMessage = "") : (this.cacheMessage = this.message, this.message = "")
                    }
                },
                created() {
                    const {forms: t} = this.$root.$modules;
                    t && t.isEnableAutoFeedback() && (this.autoFeedbackForm = new u["a"](t.settings, this.$root.$socket, this.$root.$stores))
                },
                updated() {
                    this.$root.$isEmbedded || (0 === this.$root.$stores.chat.state.message.length && (this.message = ""), 0 === this.message.length && (this.message = this.$root.$stores.chat.state.message))
                },
                methods: {
                    onInput(t) {
                        const e = t.target;
                        e.style.height = "auto";
                        let n = 40;
                        this.$root.$isEmbedded && (n = 0);
                        const s = e.scrollHeight;
                        s > n && (e.style.height = e.scrollHeight + "px")
                    }, onPaste(t) {
                        const {files: e} = t.clipboardData;
                        if (e.length > 0) {
                            const {$modules: t, $stores: n, $crosstab: s, $socket: r, $intl: a, $globalWatcher: i} = this.$root, {analytics: o} = t;
                            Object(d["a"])(e, r, n.chat, i, a, s, o)
                        }
                    }, onSendMessage() {
                        if (0 === this.message.length) return;
                        const t = new l["a"](this.message.slice(0, 1e3));
                        t.setIsClientSender(), this.$root.$stores.chat.addMessage(t), this.$root.$crosstab.emit("ADD_MESSAGE", t), this.$root.$socket.send("TEXT_MESSAGE", {message: t.message}, !1), this.message = "", this.$root.$stores.chat.state.message = "", setTimeout(() => {
                            this.$refs.form.reset(), this.$refs.message.style.height = "auto"
                        }, 16), this.onSentMessage(t)
                    }, onSentMessage(t) {
                        this.$root.$stores.chat.updateCountOwnMessages(), this.$root.$globalWatcher.trigger(f["a"].events.CLIENT_SENT_MESSAGE, this.$root.$stores.chat.form(), t.message);
                        const {analytics: e} = this.$root.$modules;
                        e && e.push(c["a"].analytics.events.CLIENT_SENT_ONLINE_MESSAGE), this.autoFeedbackForm && this.autoFeedbackForm.shouldShow() && this.autoFeedbackForm.show()
                    }
                }
            }, $ = S, k = (n("858c"), Object(_["a"])($, i, o, !1, null, "c1b8a24c", null)), x = k.exports,
            T = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("a", {
                    staticClass: "powered-link",
                    attrs: {
                        id: "powered-link",
                        rel: "noopener noreferrer",
                        target: t.showLink ? "_blank" : "_self",
                        href: t.url
                    }
                }, [t._v(" Powered by "), n("span", {staticClass: "icon"}, [n("SvgIcon", {
                    attrs: {
                        icon: "flash",
                        classes: "-xs"
                    }
                })], 1), t._v(" Re:plain ")])
            }, O = [];
        let E = null;
        var M = {
                components: {SvgIcon: p["a"]}, props: {isOpen: {type: Boolean, default: !1, required: !0}}, data() {
                    return {widgetLang: this.$root.$stores.chat.state.settings.lang, showLink: !1}
                }, computed: {
                    shouldShow() {
                        return this.isOpen || this.$root.$isEmbedded
                    }, redirectLang() {
                        switch (this.widgetLang) {
                            case"ru":
                            case"ua":
                            case"uz":
                                return "ru";
                            default:
                                return ""
                        }
                    }, url() {
                        return this.shouldShow && this.showLink ? `https://replain.cc/${this.redirectLang}?utm_source=replain_copyright&utm_medium=affiliate` : "#powered-link"
                    }
                }, created() {
                    this.startTimerLink()
                }, updated() {
                    this.startTimerLink()
                }, methods: {
                    startTimerLink() {
                        this.$root.$isEmbedded ? this.showLink = !0 : (clearTimeout(E), this.shouldShow ? E = setTimeout(() => {
                            this.showLink = !0
                        }, 3e3) : this.showLink = !1)
                    }
                }
            }, A = M, I = (n("8ee7"), Object(_["a"])(A, T, O, !1, null, "b51c4d68", null)), j = I.exports, L = n("362f"),
            D = {
                components: {ReturnTime: L["a"], AttachmentsForm: C, PoweredLink: j, Composer: x},
                props: {
                    isOpen: {type: Boolean, default: !1, required: !0},
                    isActive: {type: Boolean, default: !0, required: !1}
                },
                computed: {
                    isEmbedded() {
                        return this.$root.$isEmbedded
                    }, isEnabledBranding() {
                        const {enable: t = !0} = this.$root.$stores.chat.state.settings.branding;
                        return !0 === t
                    }
                },
                methods: {
                    isOnline() {
                        return a["a"].isOnline(this.$root.$stores.chat)
                    }
                }
            }, N = D, F = (n("198a"), Object(_["a"])(N, s, r, !1, null, "1c1809fe", null));
        e["a"] = F.exports
    }, fe0e: function (t, e, n) {
        "use strict";
        n("25c8")
    }
});