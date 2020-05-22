! function (e) {
    function l(l) {
        for (var u, t, v = l[0], b = l[1], o = l[2], i = 0, s = []; i < v.length; i++) t = v[i], n[t] && s.push(n[t][0]), n[t] = 0;
        for (u in b) Object.prototype.hasOwnProperty.call(b, u) && (e[u] = b[u]);
        for (c && c(l); s.length;) s.shift()();
        return r.push.apply(r, o || []), a()
    }

    function a() {
        for (var e, l = 0; l < r.length; l++) {
            for (var a = r[l], u = !0, t = 1; t < a.length; t++) {
                var b = a[t];
                0 !== n[b] && (u = !1)
            }
            u && (r.splice(l--, 1), e = v(v.s = a[0]))
        }
        return e
    }
    var u = {},
        t = {
            62: 0
        },
        n = {
            62: 0
        },
        r = [];

    function v(l) {
        if (u[l]) return u[l].exports;
        var a = u[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return e[l].call(a.exports, a, a.exports, v), a.l = !0, a.exports
    }
    v.e = function (e) {
        var l = [];
        t[e] ? l.push(t[e]) : 0 !== t[e] && {
            0: 1,
            1: 1,
            2: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 1,
            28: 1,
            29: 1,
            30: 1,
            31: 1,
            32: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            41: 1,
            42: 1,
            43: 1,
            44: 1,
            45: 1,
            46: 1,
            47: 1,
            48: 1,
            49: 1,
            50: 1,
            51: 1,
            52: 1,
            53: 1,
            54: 1,
            55: 1,
            56: 1,
            57: 1,
            58: 1,
            59: 1,
            60: 1,
            61: 1
        } [e] && l.push(t[e] = new Promise(function (l, a) {
            for (var u = "app32.0." + {
                    0: "e48c180e4da37bdba48f",
                    1: "127cce358a4bc7807339",
                    2: "909fa067bfae68edb9b9",
                    3: "0063a63d0ae3e90e272c",
                    4: "8fdaeecc148b0345cbf0",
                    5: "6c06e7633022ae409b30",
                    6: "6178d892feef7b65cf3f",
                    7: "72467c51b8b297f04487",
                    8: "b99307aa4e37fe5ec695",
                    9: "cf7245339d227525d620",
                    10: "21b043d34e0295b6492a",
                    11: "d640de438117f81b00e1",
                    12: "b4a343dd0165d23cf59d",
                    13: "8b629e25f57b1aa123f5",
                    14: "4d4d4987ec8341a1a0c8",
                    15: "172ba1dcff8000670f55",
                    16: "75d2974bef3a4b0df2c0",
                    17: "fe5ba3302bce685758b2",
                    18: "77168661f0c6429bbe41",
                    19: "6a3f54fc3e6c6b9b91aa",
                    20: "e121c67fd510f27ccfdb",
                    21: "cdfc65a95260b2b69555",
                    22: "bbb332897eef68ce3965",
                    23: "70afcdb801c97814e9d3",
                    24: "3c25b31a0eb6b59a7ed9",
                    25: "1341fc5702a05b5cc070",
                    26: "2673b4badd294224e042",
                    27: "e4f600b2b5ef8b0cfc01",
                    28: "41852209dc6563592d3c",
                    29: "bce33379df967f2223fc",
                    30: "aee74c20fc8d6b6f2169",
                    31: "6812c849743e3dcb7867",
                    32: "2989b44fffa6864a0a20",
                    33: "f7e56c2b2c5409e4b31a",
                    34: "8a494b906949c8f8c66a",
                    35: "c4c62b08e02b9c48cc33",
                    36: "f4fa003ea13742f69e66",
                    37: "a73078d766872ec57509",
                    38: "a17b9e8de8fb34daf354",
                    39: "609f9174ac247cc39a42",
                    40: "6c439d8a164d51402d49",
                    41: "b3910bbf1414c16ece27",
                    42: "0030530647df2785a682",
                    43: "4485c7e79657e25c18db",
                    44: "f302f9c46557776a5d30",
                    45: "e15236aafaa812bae617",
                    46: "bc29031bfa1daea60305",
                    47: "cd638f50dc011de03eac",
                    48: "1781f181e25524d18a4a",
                    49: "dc33770aa4f033c2d2bb",
                    50: "2542db2192bc63e88e51",
                    51: "e608ebb2c926d67d6a5c",
                    52: "95ec300bd0017c4282a3",
                    53: "47b9470ce97357362464",
                    54: "f0e4a16ace219e7bf669",
                    55: "d465b4987a79d6ece81c",
                    56: "c3e1ea80a20d3d994735",
                    57: "8b539c4f10b61dcb107e",
                    58: "c9b8809cde9562e85546",
                    59: "fd0408471752367a65e9",
                    60: "dd90bf28998883091dfc",
                    61: "0c8fb3029bcc3329a18a"
                } [e] + ".css", n = v.p + u, r = document.getElementsByTagName("link"), b = 0; b < r.length; b++) {
                var o = (c = r[b]).getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (o === u || o === n)) return l()
            }
            var i = document.getElementsByTagName("style");
            for (b = 0; b < i.length; b++) {
                var c;
                if ((o = (c = i[b]).getAttribute("data-href")) === u || o === n) return l()
            }
            var s = document.createElement("link");
            s.rel = "stylesheet", s.type = "text/css", s.onload = l, s.onerror = function (l) {
                var u = l && l.target && l.target.src || n,
                    r = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                r.request = u, delete t[e], s.parentNode.removeChild(s), a(r)
            }, s.href = n, document.getElementsByTagName("head")[0].appendChild(s)
        }).then(function () {
            t[e] = 0
        }));
        var a = n[e];
        if (0 !== a)
            if (a) l.push(a[2]);
            else {
                var u = new Promise(function (l, u) {
                    a = n[e] = [l, u]
                });
                l.push(a[2] = u);
                var r, b = document.createElement("script");
                b.charset = "utf-8", b.timeout = 120, v.nc && b.setAttribute("nonce", v.nc), b.src = function (e) {
                    return v.p + "vendor32.0." + {
                        0: "e48c180e4da37bdba48f",
                        1: "127cce358a4bc7807339",
                        2: "909fa067bfae68edb9b9",
                        3: "0063a63d0ae3e90e272c",
                        4: "8fdaeecc148b0345cbf0",
                        5: "6c06e7633022ae409b30",
                        6: "6178d892feef7b65cf3f",
                        7: "72467c51b8b297f04487",
                        8: "b99307aa4e37fe5ec695",
                        9: "cf7245339d227525d620",
                        10: "21b043d34e0295b6492a",
                        11: "d640de438117f81b00e1",
                        12: "b4a343dd0165d23cf59d",
                        13: "8b629e25f57b1aa123f5",
                        14: "4d4d4987ec8341a1a0c8",
                        15: "172ba1dcff8000670f55",
                        16: "75d2974bef3a4b0df2c0",
                        17: "fe5ba3302bce685758b2",
                        18: "77168661f0c6429bbe41",
                        19: "6a3f54fc3e6c6b9b91aa",
                        20: "e121c67fd510f27ccfdb",
                        21: "cdfc65a95260b2b69555",
                        22: "bbb332897eef68ce3965",
                        23: "70afcdb801c97814e9d3",
                        24: "3c25b31a0eb6b59a7ed9",
                        25: "1341fc5702a05b5cc070",
                        26: "2673b4badd294224e042",
                        27: "e4f600b2b5ef8b0cfc01",
                        28: "41852209dc6563592d3c",
                        29: "bce33379df967f2223fc",
                        30: "aee74c20fc8d6b6f2169",
                        31: "6812c849743e3dcb7867",
                        32: "2989b44fffa6864a0a20",
                        33: "f7e56c2b2c5409e4b31a",
                        34: "8a494b906949c8f8c66a",
                        35: "c4c62b08e02b9c48cc33",
                        36: "f4fa003ea13742f69e66",
                        37: "a73078d766872ec57509",
                        38: "a17b9e8de8fb34daf354",
                        39: "609f9174ac247cc39a42",
                        40: "6c439d8a164d51402d49",
                        41: "b3910bbf1414c16ece27",
                        42: "0030530647df2785a682",
                        43: "4485c7e79657e25c18db",
                        44: "f302f9c46557776a5d30",
                        45: "e15236aafaa812bae617",
                        46: "bc29031bfa1daea60305",
                        47: "cd638f50dc011de03eac",
                        48: "1781f181e25524d18a4a",
                        49: "dc33770aa4f033c2d2bb",
                        50: "2542db2192bc63e88e51",
                        51: "e608ebb2c926d67d6a5c",
                        52: "95ec300bd0017c4282a3",
                        53: "47b9470ce97357362464",
                        54: "f0e4a16ace219e7bf669",
                        55: "d465b4987a79d6ece81c",
                        56: "c3e1ea80a20d3d994735",
                        57: "8b539c4f10b61dcb107e",
                        58: "c9b8809cde9562e85546",
                        59: "fd0408471752367a65e9",
                        60: "dd90bf28998883091dfc",
                        61: "0c8fb3029bcc3329a18a"
                    } [e] + ".js"
                }(e), r = function (l) {
                    b.onerror = b.onload = null, clearTimeout(o);
                    var a = n[e];
                    if (0 !== a) {
                        if (a) {
                            var u = l && ("load" === l.type ? "missing" : l.type),
                                t = l && l.target && l.target.src,
                                r = new Error("Loading chunk " + e + " failed.\n(" + u + ": " + t + ")");
                            r.type = u, r.request = t, a[1](r)
                        }
                        n[e] = void 0
                    }
                };
                var o = setTimeout(function () {
                    r({
                        type: "timeout",
                        target: b
                    })
                }, 12e4);
                b.onerror = b.onload = r, document.head.appendChild(b)
            } return Promise.all(l)
    }, v.m = e, v.c = u, v.d = function (e, l, a) {
        v.o(e, l) || Object.defineProperty(e, l, {
            enumerable: !0,
            get: a
        })
    }, v.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, v.t = function (e, l) {
        if (1 & l && (e = v(e)), 8 & l) return e;
        if (4 & l && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (v.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & l && "string" != typeof e)
            for (var u in e) v.d(a, u, function (l) {
                return e[l]
            }.bind(null, u));
        return a
    }, v.n = function (e) {
        var l = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return v.d(l, "a", l), l
    }, v.o = function (e, l) {
        return Object.prototype.hasOwnProperty.call(e, l)
    }, v.p = "/", v.oe = function (e) {
        throw e
    };
    var b = window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [],
        o = b.push.bind(b);
    b.push = l, b = b.slice();
    for (var i = 0; i < b.length; i++) l(b[i]);
    var c = o;
    r.push([0, 63]), a()
}({
    "./src/App.jsx": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),
            t = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, a("./node_modules/antd/es/modal/style/css.js");
        var n = t(a("./node_modules/antd/es/modal/index.js"));
        a("./node_modules/antd/es/button/style/css.js");
        var r = t(a("./node_modules/antd/es/button/index.js"));
        a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.function.name.js");
        var v = t(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),
            b = t(a("./node_modules/@babel/runtime/helpers/createClass.js")),
            o = t(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),
            i = t(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),
            c = t(a("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),
            s = t(a("./node_modules/@babel/runtime/helpers/inherits.js")),
            d = t(a("./node_modules/@babel/runtime/helpers/defineProperty.js"));
        a("./node_modules/core-js/modules/es6.promise.js"), a("./node_modules/antd/es/select/style/css.js");
        var f = t(a("./node_modules/antd/es/select/index.js")),
            h = u(a("./node_modules/react/index.js"));
        a("./node_modules/react-router-dom/es/index.js");
        a("./src/App.scss");
        var p = t(a("./node_modules/react-addons-css-transition-group/index.js")),
            m = a("./node_modules/redux/es/redux.js"),
            g = a("./src/redux/actions/global.js"),
            S = a("./utils/utils.js"),
            y = a("./node_modules/react-redux/es/index.js"),
            _ = t(a("./src/AppRoutes.jsx")),
            A = t(a("./src/constants/api.js")),
            O = t(a("./utils/fetch.js")),
            j = (t(a("./src/constants/constants.js")), a("./utils/utils.js")),
            C = (a("./node_modules/os-browserify/browser.js"), t(a("./node_modules/js-cookie/src/js.cookie.js"))),
            E = t(a("./utils/history.js")),
            x = (t(a("./node_modules/axios/index.js")), f.default.Option),
            D = function (e) {
                function l(e) {
                    var a, u;
                    return (0, v.default)(this, l), u = (0, o.default)(this, (0, i.default)(l).call(this, e)), (0, d.default)((0, c.default)(u), "localname", function (e, l) {
                        (0, O.default)(A.default.APP_HTML + "/www/config/detial/1.json", "get", {}).then(function (a) {
                            if (a.length > 0)
                                for (var u in a) a[u].name == l && "undefined" != typeof window && (window.localStorage.setItem("localprovinceid", a[u].code), window.localStorage.setItem("localprovincename", e), window.localStorage.setItem("birthplace", JSON.stringify({
                                    id: a[u].code,
                                    name: l
                                })), window.location.reload())
                        })
                    }), (0, d.default)((0, c.default)(u), "go", function () {
                        "undefined" != typeof window && u.state.localprovincename && u.state.provincename ? (window.localStorage.setItem("havelocation", 1), (0, S.setCookie)("havecitys", !0), u.localname(u.state.localprovincename, u.state.provincename)) : u.chooseCity()
                    }), (0, d.default)((0, c.default)(u), "location", function () {
                        var e = u.props.curcity,
                            l = (0, c.default)(u);
                        if ("undefined" != typeof window) {
                            var a = new window.BMap.LocalCity,
                                t = (0, c.default)(u);
                            a.get(function (a) {
                                if (a && "undefined" != typeof window) {
                                    var u = a.name,
                                        n = t.state.province_info;
                                    for (var r in n) {
                                        var v = n[r].children;
                                        for (var b in v) - 1 != u.indexOf(v[b].label) && (l.setState({
                                            localprovinceid: n[r].value,
                                            localprovincename: v[b].label,
                                            birthplace: JSON.stringify({
                                                id: n[r].value,
                                                name: n[r].label
                                            }),
                                            provincename: n[r].label
                                        }, function () {}), localStorage.getItem("localprovinceid") || (window.localStorage.setItem("localprovinceid", n[r].value), window.localStorage.setItem("localprovincename", v[b].label), window.localStorage.setItem("birthplace", JSON.stringify({
                                            id: n[r].value,
                                            name: n[r].label
                                        })), window.localStorage.setItem("havelocation", 1), C.default.set("tool_ipprovince", n[r].value), C.default.set("areaid", n[r].value), C.default.set("cityid", v[b].value)))
                                    }
                                    e(u), t.setState({
                                        location: u
                                    })
                                } else this.chooseCity()
                            })
                        }
                    }), (0, d.default)((0, c.default)(u), "countFun", function () {
                        "undefined" != typeof window && "undefined" != typeof document && ((0, j.loadCNZZ)("https://s96.cnzz.com/z_stat.php?id=4696252&web_id=4696252", function () {}), (0, j.loadCNZZ)("https://stat.eol.cn/stat.all.js?siteid=85", function () {}))
                    }), (0, d.default)((0, c.default)(u), "historyListen", function () {
                        u.countFun();
                        E.default.listen(function (e, l) {
                            var a = "",
                                t = e.pathname;
                            t !== a && (a = t, u.countFun())
                        })
                    }), (0, d.default)((0, c.default)(u), "chuxian", function (e) {
                        clearInterval(u.timer);
                        var l = u.refs.yu,
                            a = u.refs.shenzi;
                        (0, j.animate)(l, "right", -180, 20), (0, j.animate)(a, "right", 5, 20)
                    }), (0, d.default)((0, c.default)(u), "chuqu", function (e) {
                        clearInterval(u.timer);
                        var l = u.refs.yu,
                            a = u.refs.shenzi;
                        (0, j.animate)(a, "right", -180, 20), (0, j.animate)(l, "right", 0, 20);
                        var t = !1;
                        u.timer = setInterval(function () {
                            t ? (t = !1, (0, j.animate)(l, "right", -180, 20), (0, j.animate)(a, "right", 5, 20)) : (t = !0, (0, j.animate)(a, "right", -180, 20), (0, j.animate)(l, "right", 0, 20))
                        }, 13e3)
                    }), (0, d.default)((0, c.default)(u), "handleOk", function () {
                        window.localStorage.setItem("localprovinceid", u.state.provinceId), window.localStorage.setItem("localprovincename", u.state.localprovincename), window.localStorage.setItem("birthplace", JSON.stringify({
                            id: u.state.provinceId,
                            name: u.state.provincename
                        })), C.default.set("tool_ipprovince", u.state.provinceId), C.default.set("areaid", u.state.provinceId), C.default.set("cityid", u.state.localcityid), u.setState({
                            modalVisible: !1
                        }, function () {
                            window.location.reload()
                        })
                    }), (0, d.default)((0, c.default)(u), "handleProvinceChange", function (e) {
                        u.state.province_info.forEach(function (l) {
                            l.value == e && u.setState({
                                provincename: l.label,
                                provinceId: e,
                                qcity: l.children,
                                localprovincename: l.children[0].label
                            })
                        })
                    }), (0, d.default)((0, c.default)(u), "onSecondCityChange", function (e) {
                        var l = u.state.province_info,
                            a = "";
                        l.forEach(function (l) {
                            l.value == u.state.provinceId && l.children.forEach(function (l) {
                                l.value == e && (a = l.label)
                            })
                        }), u.setState({
                            localprovincename: a,
                            localcityid: e
                        }, function () {})
                    }), u.state = (a = {
                        appName: "React-v16",
                        context: {
                            userName: "jason-in-app"
                        },
                        province_info: [],
                        province: [],
                        qcity: [],
                        ispro: !0,
                        garybtn: !1,
                        provincename: "",
                        sure: !1,
                        timer: !0,
                        flag: !1,
                        ss: 0,
                        dd: 0,
                        birthplace: "",
                        localprovincename: ""
                    }, (0, d.default)(a, "flag", !0), (0, d.default)(a, "modalVisible", !1), (0, d.default)(a, "provinceId", ""), (0, d.default)(a, "localcityid", ""), a), u.initialData = window.__INITIAL_DATA__ || {}, u
                }
                return (0, s.default)(l, e), (0, b.default)(l, [{
                    key: "componentWillMount",
                    value: function () {
                        this.state.province_info = a("./src/assets/json/info.json").data;
                        var e = (0, S.hasParameter)("xiaoshoupro", this.props);
                        if (e) {
                            if (window.localStorage)
                                for (var l in this.state.province_info)
                                    if (this.state.province_info[l].value == e) {
                                        var u = window.localStorage;
                                        u.localprovinceid = e, u.localprovincename = this.state.province_info[l].label, u.birthplace = JSON.stringify({
                                            id: e,
                                            name: this.state.province_info[l].label
                                        })
                                    }
                        } else !window.BMap || localStorage.getItem("localprovinceid") || C.default.get("cityid") ? localStorage.getItem("localprovinceid") || this.chooseCity() : this.location()
                    }
                }, {
                    key: "chooseCity",
                    value: function () {
                        var e = this,
                            l = this.state.province_info;
                        this.setState({
                            provincename: l[0].label,
                            provinceId: l[0].value,
                            localprovincename: l[0].children[0].label,
                            province: l
                        }, function () {
                            e.setState({
                                modalVisible: !0
                            })
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function () {
                        var e = this;
                        if ("undefined" != typeof window) {
                            var l = window.localStorage.getItem("birthplace"),
                                u = window.localStorage.getItem("localprovincename");
                            if (null != l && (this.state.birthplace = JSON.parse(l).id, C.default.set("areaid", this.state.birthplace, {
                                    domain: ".eol.cn"
                                })), null != u) this.state.localprovincename = u, a("./src/assets/json/info.json").data.map(function (l) {
                                l.children.map(function (l) {
                                    l.label == e.state.localprovincename && C.default.set("cityid", l.value, {
                                        domain: ".eol.cn"
                                    })
                                })
                            })
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        this.setState({
                            dd: 1
                        }), this.historyListen()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        clearInterval(this.timer)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.redirect,
                            l = localStorage.getItem("localprovincename");
                        (0, S.getCookie)("havecitys");
                        return h.default.createElement("div", {
                            className: "container"
                        }, h.default.createElement("div", {
                            className: "container"
                        }, h.default.createElement("div", {
                            className: "container"
                        }, h.default.createElement("div", {
                            className: "container"
                        }, h.default.createElement(p.default, {
                            transitionName: e.direction,
                            component: "div",
                            className: "pages app",
                            transitionEnterTimeout: 300,
                            transitionLeaveTimeout: 300,
                            location: this.props.location,
                            key: this.props.location.pathname
                        }, h.default.createElement(_.default, {
                            style: {
                                display: l ? "" : "none"
                            },
                            context: this.state.context,
                            initialData: this.initialData,
                            curRoute: this.props.location
                        }))))), h.default.createElement(n.default, {
                            className: "location_modal",
                            title: "请选择所在省份及城市！",
                            centered: !0,
                            visible: this.state.modalVisible,
                            onOk: this.handleOk,
                            footer: [h.default.createElement(r.default, {
                                key: "submit",
                                type: "primary",
                                onClick: this.handleOk
                            }, "确定")]
                        }, h.default.createElement(f.default, {
                            defaultValue: this.state.provincename,
                            style: {
                                width: 120
                            },
                            onChange: this.handleProvinceChange
                        }, this.state.province.map(function (e) {
                            return h.default.createElement(x, {
                                key: e.value
                            }, e.label)
                        })), h.default.createElement(f.default, {
                            style: {
                                width: 120,
                                marginLeft: "20px"
                            },
                            value: this.state.localprovincename,
                            onChange: this.onSecondCityChange
                        }, this.state.qcity.map(function (e) {
                            return h.default.createElement(x, {
                                key: e.value
                            }, e.label)
                        }))))
                    }
                }]), l
            }(h.Component),
            I = D = (0, y.connect)(function (e) {
                return {
                    redirect: e.redirect,
                    flag: e.lists.yuFlag
                }
            }, function (e) {
                return {
                    curcity: (0, m.bindActionCreators)(g.curcity, e),
                    changeyu: (0, m.bindActionCreators)(g.hideYu, e)
                }
            })(D);
        l.default = I
    },
    "./src/App.scss": function (e, l, a) {},
    "./src/AppRoutes.jsx": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, a("./node_modules/core-js/modules/es6.regexp.split.js");
        var t = u(a("./node_modules/react/index.js")),
            n = a("./node_modules/react-router-dom/es/index.js"),
            r = (u(a("./node_modules/@loadable/component/dist/loadable.esm.js")), u(a("./node_modules/prop-types/index.js"))),
            v = u(a("./src/pages/routes_split.js")),
            b = a("./src/modules/context.js");

        function o(e) {
            e.context, e.initialData;
            var l = e.curRoute;
            b.AppContext.Provider;
            return function (e) {
                var l = e.pathname,
                    a = sessionStorage.getItem("curRouteArr") ? JSON.parse(sessionStorage.getItem("curRouteArr")) : [],
                    u = !0;
                if (a && a.length > 0)
                    for (var t = 0; t < a.length; t++) a[t] == l && (u = !1);
                if (u) {
                    a.push(l), sessionStorage.setItem("curRouteArr", JSON.stringify(a));
                    var n = document.createElement("script"),
                        r = window.location.protocol.split(":")[0];
                    n.src = "https" === r ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
                    var v = document.getElementsByTagName("script")[0];
                    v.parentNode.insertBefore(n, v)
                }
            }(l), t.default.createElement(n.Switch, null, v.default.map(function (e, l) {
                return e.path ? t.default.createElement(n.Route, {
                    path: e.path,
                    exact: e.exact,
                    render: function (l) {
                        return t.default.createElement(e.component, l)
                    },
                    key: l
                }) : t.default.createElement(n.Route, {
                    component: e.component,
                    key: l
                })
            }))
        }
        o.propTypes = {
            initialData: r.default.object,
            context: r.default.any
        };
        var i = o;
        l.default = i
    },
    "./src/assets/json/info.json": function (e) {
        e.exports = {
            data: [{
                label: "北京",
                value: "11",
                children: [{
                    label: "北京市",
                    value: "1101",
                    children: [{
                        label: "东城区",
                        value: "110101"
                    }, {
                        label: "西城区",
                        value: "110102"
                    }, {
                        label: "朝阳区",
                        value: "110105"
                    }, {
                        label: "丰台区",
                        value: "110106"
                    }, {
                        label: "石景山区",
                        value: "110107"
                    }, {
                        label: "海淀区",
                        value: "110108"
                    }, {
                        label: "门头沟区",
                        value: "110109"
                    }, {
                        label: "房山区",
                        value: "110111"
                    }, {
                        label: "通州区",
                        value: "110112"
                    }, {
                        label: "顺义区",
                        value: "110113"
                    }, {
                        label: "昌平区",
                        value: "110114"
                    }, {
                        label: "大兴区",
                        value: "110115"
                    }, {
                        label: "怀柔区",
                        value: "110116"
                    }, {
                        label: "平谷区",
                        value: "110117"
                    }, {
                        label: "密云区",
                        value: "110118"
                    }, {
                        label: "延庆区",
                        value: "110119"
                    }]
                }]
            }, {
                label: "天津",
                value: "12",
                children: [{
                    label: "天津市",
                    value: "1201",
                    children: [{
                        label: "和平区",
                        value: "120101"
                    }, {
                        label: "河东区",
                        value: "120102"
                    }, {
                        label: "河西区",
                        value: "120103"
                    }, {
                        label: "南开区",
                        value: "120104"
                    }, {
                        label: "河北区",
                        value: "120105"
                    }, {
                        label: "红桥区",
                        value: "120106"
                    }, {
                        label: "东丽区",
                        value: "120110"
                    }, {
                        label: "西青区",
                        value: "120111"
                    }, {
                        label: "津南区",
                        value: "120112"
                    }, {
                        label: "北辰区",
                        value: "120113"
                    }, {
                        label: "武清区",
                        value: "120114"
                    }, {
                        label: "宝坻区",
                        value: "120115"
                    }, {
                        label: "滨海新区",
                        value: "120116"
                    }, {
                        label: "宁河区",
                        value: "120117"
                    }, {
                        label: "静海区",
                        value: "120118"
                    }, {
                        label: "蓟州区",
                        value: "120119"
                    }]
                }]
            }, {
                label: "河北",
                value: "13",
                children: [{
                    label: "石家庄市",
                    value: "1301",
                    children: [{
                        label: "长安区",
                        value: "130102"
                    }, {
                        label: "桥西区",
                        value: "130104"
                    }, {
                        label: "新华区",
                        value: "130105"
                    }, {
                        label: "井陉矿区",
                        value: "130107"
                    }, {
                        label: "裕华区",
                        value: "130108"
                    }, {
                        label: "藁城区",
                        value: "130109"
                    }, {
                        label: "鹿泉区",
                        value: "130110"
                    }, {
                        label: "栾城区",
                        value: "130111"
                    }, {
                        label: "井陉县",
                        value: "130121"
                    }, {
                        label: "正定县",
                        value: "130123"
                    }, {
                        label: "行唐县",
                        value: "130125"
                    }, {
                        label: "灵寿县",
                        value: "130126"
                    }, {
                        label: "高邑县",
                        value: "130127"
                    }, {
                        label: "深泽县",
                        value: "130128"
                    }, {
                        label: "赞皇县",
                        value: "130129"
                    }, {
                        label: "无极县",
                        value: "130130"
                    }, {
                        label: "平山县",
                        value: "130131"
                    }, {
                        label: "元氏县",
                        value: "130132"
                    }, {
                        label: "赵县",
                        value: "130133"
                    }, {
                        label: "石家庄高新技术产业开发区",
                        value: "130171"
                    }, {
                        label: "石家庄循环化工园区",
                        value: "130172"
                    }, {
                        label: "辛集市",
                        value: "130181"
                    }, {
                        label: "晋州市",
                        value: "130183"
                    }, {
                        label: "新乐市",
                        value: "130184"
                    }]
                }, {
                    label: "唐山市",
                    value: "1302",
                    children: [{
                        label: "路南区",
                        value: "130202"
                    }, {
                        label: "路北区",
                        value: "130203"
                    }, {
                        label: "古冶区",
                        value: "130204"
                    }, {
                        label: "开平区",
                        value: "130205"
                    }, {
                        label: "丰南区",
                        value: "130207"
                    }, {
                        label: "丰润区",
                        value: "130208"
                    }, {
                        label: "曹妃甸区",
                        value: "130209"
                    }, {
                        label: "滦县",
                        value: "130223"
                    }, {
                        label: "滦南县",
                        value: "130224"
                    }, {
                        label: "乐亭县",
                        value: "130225"
                    }, {
                        label: "迁西县",
                        value: "130227"
                    }, {
                        label: "玉田县",
                        value: "130229"
                    }, {
                        label: "唐山市芦台经济技术开发区",
                        value: "130271"
                    }, {
                        label: "唐山市汉沽管理区",
                        value: "130272"
                    }, {
                        label: "唐山高新技术产业开发区",
                        value: "130273"
                    }, {
                        label: "河北唐山海港经济开发区",
                        value: "130274"
                    }, {
                        label: "遵化市",
                        value: "130281"
                    }, {
                        label: "迁安市",
                        value: "130283"
                    }]
                }, {
                    label: "秦皇岛市",
                    value: "1303",
                    children: [{
                        label: "海港区",
                        value: "130302"
                    }, {
                        label: "山海关区",
                        value: "130303"
                    }, {
                        label: "北戴河区",
                        value: "130304"
                    }, {
                        label: "抚宁区",
                        value: "130306"
                    }, {
                        label: "青龙满族自治县",
                        value: "130321"
                    }, {
                        label: "昌黎县",
                        value: "130322"
                    }, {
                        label: "卢龙县",
                        value: "130324"
                    }, {
                        label: "秦皇岛市经济技术开发区",
                        value: "130371"
                    }, {
                        label: "北戴河新区",
                        value: "130372"
                    }]
                }, {
                    label: "邯郸市",
                    value: "1304",
                    children: [{
                        label: "邯山区",
                        value: "130402"
                    }, {
                        label: "丛台区",
                        value: "130403"
                    }, {
                        label: "复兴区",
                        value: "130404"
                    }, {
                        label: "峰峰矿区",
                        value: "130406"
                    }, {
                        label: "肥乡区",
                        value: "130407"
                    }, {
                        label: "永年区",
                        value: "130408"
                    }, {
                        label: "临漳县",
                        value: "130423"
                    }, {
                        label: "成安县",
                        value: "130424"
                    }, {
                        label: "大名县",
                        value: "130425"
                    }, {
                        label: "涉县",
                        value: "130426"
                    }, {
                        label: "磁县",
                        value: "130427"
                    }, {
                        label: "邱县",
                        value: "130430"
                    }, {
                        label: "鸡泽县",
                        value: "130431"
                    }, {
                        label: "广平县",
                        value: "130432"
                    }, {
                        label: "馆陶县",
                        value: "130433"
                    }, {
                        label: "魏县",
                        value: "130434"
                    }, {
                        label: "曲周县",
                        value: "130435"
                    }, {
                        label: "邯郸经济技术开发区",
                        value: "130471"
                    }, {
                        label: "邯郸冀南新区",
                        value: "130473"
                    }, {
                        label: "武安市",
                        value: "130481"
                    }]
                }, {
                    label: "邢台市",
                    value: "1305",
                    children: [{
                        label: "桥东区",
                        value: "130502"
                    }, {
                        label: "桥西区",
                        value: "130503"
                    }, {
                        label: "邢台县",
                        value: "130521"
                    }, {
                        label: "临城县",
                        value: "130522"
                    }, {
                        label: "内丘县",
                        value: "130523"
                    }, {
                        label: "柏乡县",
                        value: "130524"
                    }, {
                        label: "隆尧县",
                        value: "130525"
                    }, {
                        label: "任县",
                        value: "130526"
                    }, {
                        label: "南和县",
                        value: "130527"
                    }, {
                        label: "宁晋县",
                        value: "130528"
                    }, {
                        label: "巨鹿县",
                        value: "130529"
                    }, {
                        label: "新河县",
                        value: "130530"
                    }, {
                        label: "广宗县",
                        value: "130531"
                    }, {
                        label: "平乡县",
                        value: "130532"
                    }, {
                        label: "威县",
                        value: "130533"
                    }, {
                        label: "清河县",
                        value: "130534"
                    }, {
                        label: "临西县",
                        value: "130535"
                    }, {
                        label: "河北邢台经济开发区",
                        value: "130571"
                    }, {
                        label: "南宫市",
                        value: "130581"
                    }, {
                        label: "沙河市",
                        value: "130582"
                    }]
                }, {
                    label: "保定市",
                    value: "1306",
                    children: [{
                        label: "竞秀区",
                        value: "130602"
                    }, {
                        label: "莲池区",
                        value: "130606"
                    }, {
                        label: "满城区",
                        value: "130607"
                    }, {
                        label: "清苑区",
                        value: "130608"
                    }, {
                        label: "徐水区",
                        value: "130609"
                    }, {
                        label: "涞水县",
                        value: "130623"
                    }, {
                        label: "阜平县",
                        value: "130624"
                    }, {
                        label: "定兴县",
                        value: "130626"
                    }, {
                        label: "唐县",
                        value: "130627"
                    }, {
                        label: "高阳县",
                        value: "130628"
                    }, {
                        label: "容城县",
                        value: "130629"
                    }, {
                        label: "涞源县",
                        value: "130630"
                    }, {
                        label: "望都县",
                        value: "130631"
                    }, {
                        label: "安新县",
                        value: "130632"
                    }, {
                        label: "易县",
                        value: "130633"
                    }, {
                        label: "曲阳县",
                        value: "130634"
                    }, {
                        label: "蠡县",
                        value: "130635"
                    }, {
                        label: "顺平县",
                        value: "130636"
                    }, {
                        label: "博野县",
                        value: "130637"
                    }, {
                        label: "雄县",
                        value: "130638"
                    }, {
                        label: "保定高新技术产业开发区",
                        value: "130671"
                    }, {
                        label: "保定白沟新城",
                        value: "130672"
                    }, {
                        label: "涿州市",
                        value: "130681"
                    }, {
                        label: "定州市",
                        value: "130682"
                    }, {
                        label: "安国市",
                        value: "130683"
                    }, {
                        label: "高碑店市",
                        value: "130684"
                    }]
                }, {
                    label: "张家口市",
                    value: "1307",
                    children: [{
                        label: "桥东区",
                        value: "130702"
                    }, {
                        label: "桥西区",
                        value: "130703"
                    }, {
                        label: "宣化区",
                        value: "130705"
                    }, {
                        label: "下花园区",
                        value: "130706"
                    }, {
                        label: "万全区",
                        value: "130708"
                    }, {
                        label: "崇礼区",
                        value: "130709"
                    }, {
                        label: "张北县",
                        value: "130722"
                    }, {
                        label: "康保县",
                        value: "130723"
                    }, {
                        label: "沽源县",
                        value: "130724"
                    }, {
                        label: "尚义县",
                        value: "130725"
                    }, {
                        label: "蔚县",
                        value: "130726"
                    }, {
                        label: "阳原县",
                        value: "130727"
                    }, {
                        label: "怀安县",
                        value: "130728"
                    }, {
                        label: "怀来县",
                        value: "130730"
                    }, {
                        label: "涿鹿县",
                        value: "130731"
                    }, {
                        label: "赤城县",
                        value: "130732"
                    }, {
                        label: "张家口市高新技术产业开发区",
                        value: "130771"
                    }, {
                        label: "张家口市察北管理区",
                        value: "130772"
                    }, {
                        label: "张家口市塞北管理区",
                        value: "130773"
                    }]
                }, {
                    label: "承德市",
                    value: "1308",
                    children: [{
                        label: "双桥区",
                        value: "130802"
                    }, {
                        label: "双滦区",
                        value: "130803"
                    }, {
                        label: "鹰手营子矿区",
                        value: "130804"
                    }, {
                        label: "承德县",
                        value: "130821"
                    }, {
                        label: "兴隆县",
                        value: "130822"
                    }, {
                        label: "滦平县",
                        value: "130824"
                    }, {
                        label: "隆化县",
                        value: "130825"
                    }, {
                        label: "丰宁满族自治县",
                        value: "130826"
                    }, {
                        label: "宽城满族自治县",
                        value: "130827"
                    }, {
                        label: "围场满族蒙古族自治县",
                        value: "130828"
                    }, {
                        label: "承德高新技术产业开发区",
                        value: "130871"
                    }, {
                        label: "平泉市",
                        value: "130881"
                    }]
                }, {
                    label: "沧州市",
                    value: "1309",
                    children: [{
                        label: "新华区",
                        value: "130902"
                    }, {
                        label: "运河区",
                        value: "130903"
                    }, {
                        label: "沧县",
                        value: "130921"
                    }, {
                        label: "青县",
                        value: "130922"
                    }, {
                        label: "东光县",
                        value: "130923"
                    }, {
                        label: "海兴县",
                        value: "130924"
                    }, {
                        label: "盐山县",
                        value: "130925"
                    }, {
                        label: "肃宁县",
                        value: "130926"
                    }, {
                        label: "南皮县",
                        value: "130927"
                    }, {
                        label: "吴桥县",
                        value: "130928"
                    }, {
                        label: "献县",
                        value: "130929"
                    }, {
                        label: "孟村回族自治县",
                        value: "130930"
                    }, {
                        label: "河北沧州经济开发区",
                        value: "130971"
                    }, {
                        label: "沧州高新技术产业开发区",
                        value: "130972"
                    }, {
                        label: "沧州渤海新区",
                        value: "130973"
                    }, {
                        label: "泊头市",
                        value: "130981"
                    }, {
                        label: "任丘市",
                        value: "130982"
                    }, {
                        label: "黄骅市",
                        value: "130983"
                    }, {
                        label: "河间市",
                        value: "130984"
                    }]
                }, {
                    label: "廊坊市",
                    value: "1310",
                    children: [{
                        label: "安次区",
                        value: "131002"
                    }, {
                        label: "广阳区",
                        value: "131003"
                    }, {
                        label: "固安县",
                        value: "131022"
                    }, {
                        label: "永清县",
                        value: "131023"
                    }, {
                        label: "香河县",
                        value: "131024"
                    }, {
                        label: "大城县",
                        value: "131025"
                    }, {
                        label: "文安县",
                        value: "131026"
                    }, {
                        label: "大厂回族自治县",
                        value: "131028"
                    }, {
                        label: "廊坊经济技术开发区",
                        value: "131071"
                    }, {
                        label: "霸州市",
                        value: "131081"
                    }, {
                        label: "三河市",
                        value: "131082"
                    }]
                }, {
                    label: "衡水市",
                    value: "1311",
                    children: [{
                        label: "桃城区",
                        value: "131102"
                    }, {
                        label: "冀州区",
                        value: "131103"
                    }, {
                        label: "枣强县",
                        value: "131121"
                    }, {
                        label: "武邑县",
                        value: "131122"
                    }, {
                        label: "武强县",
                        value: "131123"
                    }, {
                        label: "饶阳县",
                        value: "131124"
                    }, {
                        label: "安平县",
                        value: "131125"
                    }, {
                        label: "故城县",
                        value: "131126"
                    }, {
                        label: "景县",
                        value: "131127"
                    }, {
                        label: "阜城县",
                        value: "131128"
                    }, {
                        label: "河北衡水经济开发区",
                        value: "131171"
                    }, {
                        label: "衡水滨湖新区",
                        value: "131172"
                    }, {
                        label: "深州市",
                        value: "131182"
                    }]
                }]
            }, {
                label: "山西",
                value: "14",
                children: [{
                    label: "太原市",
                    value: "1401",
                    children: [{
                        label: "小店区",
                        value: "140105"
                    }, {
                        label: "迎泽区",
                        value: "140106"
                    }, {
                        label: "杏花岭区",
                        value: "140107"
                    }, {
                        label: "尖草坪区",
                        value: "140108"
                    }, {
                        label: "万柏林区",
                        value: "140109"
                    }, {
                        label: "晋源区",
                        value: "140110"
                    }, {
                        label: "清徐县",
                        value: "140121"
                    }, {
                        label: "阳曲县",
                        value: "140122"
                    }, {
                        label: "娄烦县",
                        value: "140123"
                    }, {
                        label: "山西转型综合改革示范区",
                        value: "140171"
                    }, {
                        label: "古交市",
                        value: "140181"
                    }]
                }, {
                    label: "大同市",
                    value: "1402",
                    children: [{
                        label: "城区",
                        value: "140202"
                    }, {
                        label: "矿区",
                        value: "140203"
                    }, {
                        label: "南郊区",
                        value: "140211"
                    }, {
                        label: "新荣区",
                        value: "140212"
                    }, {
                        label: "阳高县",
                        value: "140221"
                    }, {
                        label: "天镇县",
                        value: "140222"
                    }, {
                        label: "广灵县",
                        value: "140223"
                    }, {
                        label: "灵丘县",
                        value: "140224"
                    }, {
                        label: "浑源县",
                        value: "140225"
                    }, {
                        label: "左云县",
                        value: "140226"
                    }, {
                        label: "大同县",
                        value: "140227"
                    }, {
                        label: "山西大同经济开发区",
                        value: "140271"
                    }]
                }, {
                    label: "阳泉市",
                    value: "1403",
                    children: [{
                        label: "城区",
                        value: "140302"
                    }, {
                        label: "矿区",
                        value: "140303"
                    }, {
                        label: "郊区",
                        value: "140311"
                    }, {
                        label: "平定县",
                        value: "140321"
                    }, {
                        label: "盂县",
                        value: "140322"
                    }, {
                        label: "山西阳泉经济开发区",
                        value: "140371"
                    }]
                }, {
                    label: "长治市",
                    value: "1404",
                    children: [{
                        label: "城区",
                        value: "140402"
                    }, {
                        label: "郊区",
                        value: "140411"
                    }, {
                        label: "长治县",
                        value: "140421"
                    }, {
                        label: "襄垣县",
                        value: "140423"
                    }, {
                        label: "屯留县",
                        value: "140424"
                    }, {
                        label: "平顺县",
                        value: "140425"
                    }, {
                        label: "黎城县",
                        value: "140426"
                    }, {
                        label: "壶关县",
                        value: "140427"
                    }, {
                        label: "长子县",
                        value: "140428"
                    }, {
                        label: "武乡县",
                        value: "140429"
                    }, {
                        label: "沁县",
                        value: "140430"
                    }, {
                        label: "沁源县",
                        value: "140431"
                    }, {
                        label: "山西长治高新技术产业园区",
                        value: "140471"
                    }, {
                        label: "潞城市",
                        value: "140481"
                    }]
                }, {
                    label: "晋城市",
                    value: "1405",
                    children: [{
                        label: "城区",
                        value: "140502"
                    }, {
                        label: "沁水县",
                        value: "140521"
                    }, {
                        label: "阳城县",
                        value: "140522"
                    }, {
                        label: "陵川县",
                        value: "140524"
                    }, {
                        label: "泽州县",
                        value: "140525"
                    }, {
                        label: "高平市",
                        value: "140581"
                    }]
                }, {
                    label: "朔州市",
                    value: "1406",
                    children: [{
                        label: "朔城区",
                        value: "140602"
                    }, {
                        label: "平鲁区",
                        value: "140603"
                    }, {
                        label: "山阴县",
                        value: "140621"
                    }, {
                        label: "应县",
                        value: "140622"
                    }, {
                        label: "右玉县",
                        value: "140623"
                    }, {
                        label: "怀仁县",
                        value: "140624"
                    }, {
                        label: "山西朔州经济开发区",
                        value: "140671"
                    }]
                }, {
                    label: "晋中市",
                    value: "1407",
                    children: [{
                        label: "榆次区",
                        value: "140702"
                    }, {
                        label: "榆社县",
                        value: "140721"
                    }, {
                        label: "左权县",
                        value: "140722"
                    }, {
                        label: "和顺县",
                        value: "140723"
                    }, {
                        label: "昔阳县",
                        value: "140724"
                    }, {
                        label: "寿阳县",
                        value: "140725"
                    }, {
                        label: "太谷县",
                        value: "140726"
                    }, {
                        label: "祁县",
                        value: "140727"
                    }, {
                        label: "平遥县",
                        value: "140728"
                    }, {
                        label: "灵石县",
                        value: "140729"
                    }, {
                        label: "介休市",
                        value: "140781"
                    }]
                }, {
                    label: "运城市",
                    value: "1408",
                    children: [{
                        label: "盐湖区",
                        value: "140802"
                    }, {
                        label: "临猗县",
                        value: "140821"
                    }, {
                        label: "万荣县",
                        value: "140822"
                    }, {
                        label: "闻喜县",
                        value: "140823"
                    }, {
                        label: "稷山县",
                        value: "140824"
                    }, {
                        label: "新绛县",
                        value: "140825"
                    }, {
                        label: "绛县",
                        value: "140826"
                    }, {
                        label: "垣曲县",
                        value: "140827"
                    }, {
                        label: "夏县",
                        value: "140828"
                    }, {
                        label: "平陆县",
                        value: "140829"
                    }, {
                        label: "芮城县",
                        value: "140830"
                    }, {
                        label: "永济市",
                        value: "140881"
                    }, {
                        label: "河津市",
                        value: "140882"
                    }]
                }, {
                    label: "忻州市",
                    value: "1409",
                    children: [{
                        label: "忻府区",
                        value: "140902"
                    }, {
                        label: "定襄县",
                        value: "140921"
                    }, {
                        label: "五台县",
                        value: "140922"
                    }, {
                        label: "代县",
                        value: "140923"
                    }, {
                        label: "繁峙县",
                        value: "140924"
                    }, {
                        label: "宁武县",
                        value: "140925"
                    }, {
                        label: "静乐县",
                        value: "140926"
                    }, {
                        label: "神池县",
                        value: "140927"
                    }, {
                        label: "五寨县",
                        value: "140928"
                    }, {
                        label: "岢岚县",
                        value: "140929"
                    }, {
                        label: "河曲县",
                        value: "140930"
                    }, {
                        label: "保德县",
                        value: "140931"
                    }, {
                        label: "偏关县",
                        value: "140932"
                    }, {
                        label: "五台山风景名胜区",
                        value: "140971"
                    }, {
                        label: "原平市",
                        value: "140981"
                    }]
                }, {
                    label: "临汾市",
                    value: "1410",
                    children: [{
                        label: "尧都区",
                        value: "141002"
                    }, {
                        label: "曲沃县",
                        value: "141021"
                    }, {
                        label: "翼城县",
                        value: "141022"
                    }, {
                        label: "襄汾县",
                        value: "141023"
                    }, {
                        label: "洪洞县",
                        value: "141024"
                    }, {
                        label: "古县",
                        value: "141025"
                    }, {
                        label: "安泽县",
                        value: "141026"
                    }, {
                        label: "浮山县",
                        value: "141027"
                    }, {
                        label: "吉县",
                        value: "141028"
                    }, {
                        label: "乡宁县",
                        value: "141029"
                    }, {
                        label: "大宁县",
                        value: "141030"
                    }, {
                        label: "隰县",
                        value: "141031"
                    }, {
                        label: "永和县",
                        value: "141032"
                    }, {
                        label: "蒲县",
                        value: "141033"
                    }, {
                        label: "汾西县",
                        value: "141034"
                    }, {
                        label: "侯马市",
                        value: "141081"
                    }, {
                        label: "霍州市",
                        value: "141082"
                    }]
                }, {
                    label: "吕梁市",
                    value: "1411",
                    children: [{
                        label: "离石区",
                        value: "141102"
                    }, {
                        label: "文水县",
                        value: "141121"
                    }, {
                        label: "交城县",
                        value: "141122"
                    }, {
                        label: "兴县",
                        value: "141123"
                    }, {
                        label: "临县",
                        value: "141124"
                    }, {
                        label: "柳林县",
                        value: "141125"
                    }, {
                        label: "石楼县",
                        value: "141126"
                    }, {
                        label: "岚县",
                        value: "141127"
                    }, {
                        label: "方山县",
                        value: "141128"
                    }, {
                        label: "中阳县",
                        value: "141129"
                    }, {
                        label: "交口县",
                        value: "141130"
                    }, {
                        label: "孝义市",
                        value: "141181"
                    }, {
                        label: "汾阳市",
                        value: "141182"
                    }]
                }]
            }, {
                label: "内蒙古",
                value: "15",
                children: [{
                    label: "呼和浩特市",
                    value: "1501",
                    children: [{
                        label: "新城区",
                        value: "150102"
                    }, {
                        label: "回民区",
                        value: "150103"
                    }, {
                        label: "玉泉区",
                        value: "150104"
                    }, {
                        label: "赛罕区",
                        value: "150105"
                    }, {
                        label: "土默特左旗",
                        value: "150121"
                    }, {
                        label: "托克托县",
                        value: "150122"
                    }, {
                        label: "和林格尔县",
                        value: "150123"
                    }, {
                        label: "清水河县",
                        value: "150124"
                    }, {
                        label: "武川县",
                        value: "150125"
                    }, {
                        label: "呼和浩特金海工业园区",
                        value: "150171"
                    }, {
                        label: "呼和浩特经济技术开发区",
                        value: "150172"
                    }]
                }, {
                    label: "包头市",
                    value: "1502",
                    children: [{
                        label: "东河区",
                        value: "150202"
                    }, {
                        label: "昆都仑区",
                        value: "150203"
                    }, {
                        label: "青山区",
                        value: "150204"
                    }, {
                        label: "石拐区",
                        value: "150205"
                    }, {
                        label: "白云鄂博矿区",
                        value: "150206"
                    }, {
                        label: "九原区",
                        value: "150207"
                    }, {
                        label: "土默特右旗",
                        value: "150221"
                    }, {
                        label: "固阳县",
                        value: "150222"
                    }, {
                        label: "达尔罕茂明安联合旗",
                        value: "150223"
                    }, {
                        label: "包头稀土高新技术产业开发区",
                        value: "150271"
                    }]
                }, {
                    label: "乌海市",
                    value: "1503",
                    children: [{
                        label: "海勃湾区",
                        value: "150302"
                    }, {
                        label: "海南区",
                        value: "150303"
                    }, {
                        label: "乌达区",
                        value: "150304"
                    }]
                }, {
                    label: "赤峰市",
                    value: "1504",
                    children: [{
                        label: "红山区",
                        value: "150402"
                    }, {
                        label: "元宝山区",
                        value: "150403"
                    }, {
                        label: "松山区",
                        value: "150404"
                    }, {
                        label: "阿鲁科尔沁旗",
                        value: "150421"
                    }, {
                        label: "巴林左旗",
                        value: "150422"
                    }, {
                        label: "巴林右旗",
                        value: "150423"
                    }, {
                        label: "林西县",
                        value: "150424"
                    }, {
                        label: "克什克腾旗",
                        value: "150425"
                    }, {
                        label: "翁牛特旗",
                        value: "150426"
                    }, {
                        label: "喀喇沁旗",
                        value: "150428"
                    }, {
                        label: "宁城县",
                        value: "150429"
                    }, {
                        label: "敖汉旗",
                        value: "150430"
                    }]
                }, {
                    label: "通辽市",
                    value: "1505",
                    children: [{
                        label: "科尔沁区",
                        value: "150502"
                    }, {
                        label: "科尔沁左翼中旗",
                        value: "150521"
                    }, {
                        label: "科尔沁左翼后旗",
                        value: "150522"
                    }, {
                        label: "开鲁县",
                        value: "150523"
                    }, {
                        label: "库伦旗",
                        value: "150524"
                    }, {
                        label: "奈曼旗",
                        value: "150525"
                    }, {
                        label: "扎鲁特旗",
                        value: "150526"
                    }, {
                        label: "通辽经济技术开发区",
                        value: "150571"
                    }, {
                        label: "霍林郭勒市",
                        value: "150581"
                    }]
                }, {
                    label: "鄂尔多斯市",
                    value: "1506",
                    children: [{
                        label: "东胜区",
                        value: "150602"
                    }, {
                        label: "康巴什区",
                        value: "150603"
                    }, {
                        label: "达拉特旗",
                        value: "150621"
                    }, {
                        label: "准格尔旗",
                        value: "150622"
                    }, {
                        label: "鄂托克前旗",
                        value: "150623"
                    }, {
                        label: "鄂托克旗",
                        value: "150624"
                    }, {
                        label: "杭锦旗",
                        value: "150625"
                    }, {
                        label: "乌审旗",
                        value: "150626"
                    }, {
                        label: "伊金霍洛旗",
                        value: "150627"
                    }]
                }, {
                    label: "呼伦贝尔市",
                    value: "1507",
                    children: [{
                        label: "海拉尔区",
                        value: "150702"
                    }, {
                        label: "扎赉诺尔区",
                        value: "150703"
                    }, {
                        label: "阿荣旗",
                        value: "150721"
                    }, {
                        label: "莫力达瓦达斡尔族自治旗",
                        value: "150722"
                    }, {
                        label: "鄂伦春自治旗",
                        value: "150723"
                    }, {
                        label: "鄂温克族自治旗",
                        value: "150724"
                    }, {
                        label: "陈巴尔虎旗",
                        value: "150725"
                    }, {
                        label: "新巴尔虎左旗",
                        value: "150726"
                    }, {
                        label: "新巴尔虎右旗",
                        value: "150727"
                    }, {
                        label: "满洲里市",
                        value: "150781"
                    }, {
                        label: "牙克石市",
                        value: "150782"
                    }, {
                        label: "扎兰屯市",
                        value: "150783"
                    }, {
                        label: "额尔古纳市",
                        value: "150784"
                    }, {
                        label: "根河市",
                        value: "150785"
                    }]
                }, {
                    label: "巴彦淖尔市",
                    value: "1508",
                    children: [{
                        label: "临河区",
                        value: "150802"
                    }, {
                        label: "五原县",
                        value: "150821"
                    }, {
                        label: "磴口县",
                        value: "150822"
                    }, {
                        label: "乌拉特前旗",
                        value: "150823"
                    }, {
                        label: "乌拉特中旗",
                        value: "150824"
                    }, {
                        label: "乌拉特后旗",
                        value: "150825"
                    }, {
                        label: "杭锦后旗",
                        value: "150826"
                    }]
                }, {
                    label: "乌兰察布市",
                    value: "1509",
                    children: [{
                        label: "集宁区",
                        value: "150902"
                    }, {
                        label: "卓资县",
                        value: "150921"
                    }, {
                        label: "化德县",
                        value: "150922"
                    }, {
                        label: "商都县",
                        value: "150923"
                    }, {
                        label: "兴和县",
                        value: "150924"
                    }, {
                        label: "凉城县",
                        value: "150925"
                    }, {
                        label: "察哈尔右翼前旗",
                        value: "150926"
                    }, {
                        label: "察哈尔右翼中旗",
                        value: "150927"
                    }, {
                        label: "察哈尔右翼后旗",
                        value: "150928"
                    }, {
                        label: "四子王旗",
                        value: "150929"
                    }, {
                        label: "丰镇市",
                        value: "150981"
                    }]
                }, {
                    label: "兴安盟",
                    value: "1522",
                    children: [{
                        label: "乌兰浩特市",
                        value: "152201"
                    }, {
                        label: "阿尔山市",
                        value: "152202"
                    }, {
                        label: "科尔沁右翼前旗",
                        value: "152221"
                    }, {
                        label: "科尔沁右翼中旗",
                        value: "152222"
                    }, {
                        label: "扎赉特旗",
                        value: "152223"
                    }, {
                        label: "突泉县",
                        value: "152224"
                    }]
                }, {
                    label: "锡林郭勒盟",
                    value: "1525",
                    children: [{
                        label: "二连浩特市",
                        value: "152501"
                    }, {
                        label: "锡林浩特市",
                        value: "152502"
                    }, {
                        label: "阿巴嘎旗",
                        value: "152522"
                    }, {
                        label: "苏尼特左旗",
                        value: "152523"
                    }, {
                        label: "苏尼特右旗",
                        value: "152524"
                    }, {
                        label: "东乌珠穆沁旗",
                        value: "152525"
                    }, {
                        label: "西乌珠穆沁旗",
                        value: "152526"
                    }, {
                        label: "太仆寺旗",
                        value: "152527"
                    }, {
                        label: "镶黄旗",
                        value: "152528"
                    }, {
                        label: "正镶白旗",
                        value: "152529"
                    }, {
                        label: "正蓝旗",
                        value: "152530"
                    }, {
                        label: "多伦县",
                        value: "152531"
                    }, {
                        label: "乌拉盖管委会",
                        value: "152571"
                    }]
                }, {
                    label: "阿拉善盟",
                    value: "1529",
                    children: [{
                        label: "阿拉善左旗",
                        value: "152921"
                    }, {
                        label: "阿拉善右旗",
                        value: "152922"
                    }, {
                        label: "额济纳旗",
                        value: "152923"
                    }, {
                        label: "内蒙古阿拉善经济开发区",
                        value: "152971"
                    }]
                }]
            }, {
                label: "辽宁",
                value: "21",
                children: [{
                    label: "沈阳市",
                    value: "2101",
                    children: [{
                        label: "和平区",
                        value: "210102"
                    }, {
                        label: "沈河区",
                        value: "210103"
                    }, {
                        label: "大东区",
                        value: "210104"
                    }, {
                        label: "皇姑区",
                        value: "210105"
                    }, {
                        label: "铁西区",
                        value: "210106"
                    }, {
                        label: "苏家屯区",
                        value: "210111"
                    }, {
                        label: "浑南区",
                        value: "210112"
                    }, {
                        label: "沈北新区",
                        value: "210113"
                    }, {
                        label: "于洪区",
                        value: "210114"
                    }, {
                        label: "辽中区",
                        value: "210115"
                    }, {
                        label: "康平县",
                        value: "210123"
                    }, {
                        label: "法库县",
                        value: "210124"
                    }, {
                        label: "新民市",
                        value: "210181"
                    }]
                }, {
                    label: "大连市",
                    value: "2102",
                    children: [{
                        label: "中山区",
                        value: "210202"
                    }, {
                        label: "西岗区",
                        value: "210203"
                    }, {
                        label: "沙河口区",
                        value: "210204"
                    }, {
                        label: "甘井子区",
                        value: "210211"
                    }, {
                        label: "旅顺口区",
                        value: "210212"
                    }, {
                        label: "金州区",
                        value: "210213"
                    }, {
                        label: "普兰店区",
                        value: "210214"
                    }, {
                        label: "长海县",
                        value: "210224"
                    }, {
                        label: "瓦房店市",
                        value: "210281"
                    }, {
                        label: "庄河市",
                        value: "210283"
                    }]
                }, {
                    label: "鞍山市",
                    value: "2103",
                    children: [{
                        label: "铁东区",
                        value: "210302"
                    }, {
                        label: "铁西区",
                        value: "210303"
                    }, {
                        label: "立山区",
                        value: "210304"
                    }, {
                        label: "千山区",
                        value: "210311"
                    }, {
                        label: "台安县",
                        value: "210321"
                    }, {
                        label: "岫岩满族自治县",
                        value: "210323"
                    }, {
                        label: "海城市",
                        value: "210381"
                    }]
                }, {
                    label: "抚顺市",
                    value: "2104",
                    children: [{
                        label: "新抚区",
                        value: "210402"
                    }, {
                        label: "东洲区",
                        value: "210403"
                    }, {
                        label: "望花区",
                        value: "210404"
                    }, {
                        label: "顺城区",
                        value: "210411"
                    }, {
                        label: "抚顺县",
                        value: "210421"
                    }, {
                        label: "新宾满族自治县",
                        value: "210422"
                    }, {
                        label: "清原满族自治县",
                        value: "210423"
                    }]
                }, {
                    label: "本溪市",
                    value: "2105",
                    children: [{
                        label: "平山区",
                        value: "210502"
                    }, {
                        label: "溪湖区",
                        value: "210503"
                    }, {
                        label: "明山区",
                        value: "210504"
                    }, {
                        label: "南芬区",
                        value: "210505"
                    }, {
                        label: "本溪满族自治县",
                        value: "210521"
                    }, {
                        label: "桓仁满族自治县",
                        value: "210522"
                    }]
                }, {
                    label: "丹东市",
                    value: "2106",
                    children: [{
                        label: "元宝区",
                        value: "210602"
                    }, {
                        label: "振兴区",
                        value: "210603"
                    }, {
                        label: "振安区",
                        value: "210604"
                    }, {
                        label: "宽甸满族自治县",
                        value: "210624"
                    }, {
                        label: "东港市",
                        value: "210681"
                    }, {
                        label: "凤城市",
                        value: "210682"
                    }]
                }, {
                    label: "锦州市",
                    value: "2107",
                    children: [{
                        label: "古塔区",
                        value: "210702"
                    }, {
                        label: "凌河区",
                        value: "210703"
                    }, {
                        label: "太和区",
                        value: "210711"
                    }, {
                        label: "黑山县",
                        value: "210726"
                    }, {
                        label: "义县",
                        value: "210727"
                    }, {
                        label: "凌海市",
                        value: "210781"
                    }, {
                        label: "北镇市",
                        value: "210782"
                    }]
                }, {
                    label: "营口市",
                    value: "2108",
                    children: [{
                        label: "站前区",
                        value: "210802"
                    }, {
                        label: "西市区",
                        value: "210803"
                    }, {
                        label: "鲅鱼圈区",
                        value: "210804"
                    }, {
                        label: "老边区",
                        value: "210811"
                    }, {
                        label: "盖州市",
                        value: "210881"
                    }, {
                        label: "大石桥市",
                        value: "210882"
                    }]
                }, {
                    label: "阜新市",
                    value: "2109",
                    children: [{
                        label: "海州区",
                        value: "210902"
                    }, {
                        label: "新邱区",
                        value: "210903"
                    }, {
                        label: "太平区",
                        value: "210904"
                    }, {
                        label: "清河门区",
                        value: "210905"
                    }, {
                        label: "细河区",
                        value: "210911"
                    }, {
                        label: "阜新蒙古族自治县",
                        value: "210921"
                    }, {
                        label: "彰武县",
                        value: "210922"
                    }]
                }, {
                    label: "辽阳市",
                    value: "2110",
                    children: [{
                        label: "白塔区",
                        value: "211002"
                    }, {
                        label: "文圣区",
                        value: "211003"
                    }, {
                        label: "宏伟区",
                        value: "211004"
                    }, {
                        label: "弓长岭区",
                        value: "211005"
                    }, {
                        label: "太子河区",
                        value: "211011"
                    }, {
                        label: "辽阳县",
                        value: "211021"
                    }, {
                        label: "灯塔市",
                        value: "211081"
                    }]
                }, {
                    label: "盘锦市",
                    value: "2111",
                    children: [{
                        label: "双台子区",
                        value: "211102"
                    }, {
                        label: "兴隆台区",
                        value: "211103"
                    }, {
                        label: "大洼区",
                        value: "211104"
                    }, {
                        label: "盘山县",
                        value: "211122"
                    }]
                }, {
                    label: "铁岭市",
                    value: "2112",
                    children: [{
                        label: "银州区",
                        value: "211202"
                    }, {
                        label: "清河区",
                        value: "211204"
                    }, {
                        label: "铁岭县",
                        value: "211221"
                    }, {
                        label: "西丰县",
                        value: "211223"
                    }, {
                        label: "昌图县",
                        value: "211224"
                    }, {
                        label: "调兵山市",
                        value: "211281"
                    }, {
                        label: "开原市",
                        value: "211282"
                    }]
                }, {
                    label: "朝阳市",
                    value: "2113",
                    children: [{
                        label: "双塔区",
                        value: "211302"
                    }, {
                        label: "龙城区",
                        value: "211303"
                    }, {
                        label: "朝阳县",
                        value: "211321"
                    }, {
                        label: "建平县",
                        value: "211322"
                    }, {
                        label: "喀喇沁左翼蒙古族自治县",
                        value: "211324"
                    }, {
                        label: "北票市",
                        value: "211381"
                    }, {
                        label: "凌源市",
                        value: "211382"
                    }]
                }, {
                    label: "葫芦岛市",
                    value: "2114",
                    children: [{
                        label: "连山区",
                        value: "211402"
                    }, {
                        label: "龙港区",
                        value: "211403"
                    }, {
                        label: "南票区",
                        value: "211404"
                    }, {
                        label: "绥中县",
                        value: "211421"
                    }, {
                        label: "建昌县",
                        value: "211422"
                    }, {
                        label: "兴城市",
                        value: "211481"
                    }]
                }]
            }, {
                label: "吉林",
                value: "22",
                children: [{
                    label: "长春市",
                    value: "2201",
                    children: [{
                        label: "南关区",
                        value: "220102"
                    }, {
                        label: "宽城区",
                        value: "220103"
                    }, {
                        label: "朝阳区",
                        value: "220104"
                    }, {
                        label: "二道区",
                        value: "220105"
                    }, {
                        label: "绿园区",
                        value: "220106"
                    }, {
                        label: "双阳区",
                        value: "220112"
                    }, {
                        label: "九台区",
                        value: "220113"
                    }, {
                        label: "农安县",
                        value: "220122"
                    }, {
                        label: "长春经济技术开发区",
                        value: "220171"
                    }, {
                        label: "长春净月高新技术产业开发区",
                        value: "220172"
                    }, {
                        label: "长春高新技术产业开发区",
                        value: "220173"
                    }, {
                        label: "长春汽车经济技术开发区",
                        value: "220174"
                    }, {
                        label: "榆树市",
                        value: "220182"
                    }, {
                        label: "德惠市",
                        value: "220183"
                    }]
                }, {
                    label: "吉林市",
                    value: "2202",
                    children: [{
                        label: "昌邑区",
                        value: "220202"
                    }, {
                        label: "龙潭区",
                        value: "220203"
                    }, {
                        label: "船营区",
                        value: "220204"
                    }, {
                        label: "丰满区",
                        value: "220211"
                    }, {
                        label: "永吉县",
                        value: "220221"
                    }, {
                        label: "吉林经济开发区",
                        value: "220271"
                    }, {
                        label: "吉林高新技术产业开发区",
                        value: "220272"
                    }, {
                        label: "吉林中国新加坡食品区",
                        value: "220273"
                    }, {
                        label: "蛟河市",
                        value: "220281"
                    }, {
                        label: "桦甸市",
                        value: "220282"
                    }, {
                        label: "舒兰市",
                        value: "220283"
                    }, {
                        label: "磐石市",
                        value: "220284"
                    }]
                }, {
                    label: "四平市",
                    value: "2203",
                    children: [{
                        label: "铁西区",
                        value: "220302"
                    }, {
                        label: "铁东区",
                        value: "220303"
                    }, {
                        label: "梨树县",
                        value: "220322"
                    }, {
                        label: "伊通满族自治县",
                        value: "220323"
                    }, {
                        label: "公主岭市",
                        value: "220381"
                    }, {
                        label: "双辽市",
                        value: "220382"
                    }]
                }, {
                    label: "辽源市",
                    value: "2204",
                    children: [{
                        label: "龙山区",
                        value: "220402"
                    }, {
                        label: "西安区",
                        value: "220403"
                    }, {
                        label: "东丰县",
                        value: "220421"
                    }, {
                        label: "东辽县",
                        value: "220422"
                    }]
                }, {
                    label: "通化市",
                    value: "2205",
                    children: [{
                        label: "东昌区",
                        value: "220502"
                    }, {
                        label: "二道江区",
                        value: "220503"
                    }, {
                        label: "通化县",
                        value: "220521"
                    }, {
                        label: "辉南县",
                        value: "220523"
                    }, {
                        label: "柳河县",
                        value: "220524"
                    }, {
                        label: "梅河口市",
                        value: "220581"
                    }, {
                        label: "集安市",
                        value: "220582"
                    }]
                }, {
                    label: "白山市",
                    value: "2206",
                    children: [{
                        label: "浑江区",
                        value: "220602"
                    }, {
                        label: "江源区",
                        value: "220605"
                    }, {
                        label: "抚松县",
                        value: "220621"
                    }, {
                        label: "靖宇县",
                        value: "220622"
                    }, {
                        label: "长白朝鲜族自治县",
                        value: "220623"
                    }, {
                        label: "临江市",
                        value: "220681"
                    }]
                }, {
                    label: "松原市",
                    value: "2207",
                    children: [{
                        label: "宁江区",
                        value: "220702"
                    }, {
                        label: "前郭尔罗斯蒙古族自治县",
                        value: "220721"
                    }, {
                        label: "长岭县",
                        value: "220722"
                    }, {
                        label: "乾安县",
                        value: "220723"
                    }, {
                        label: "吉林松原经济开发区",
                        value: "220771"
                    }, {
                        label: "扶余市",
                        value: "220781"
                    }]
                }, {
                    label: "白城市",
                    value: "2208",
                    children: [{
                        label: "洮北区",
                        value: "220802"
                    }, {
                        label: "镇赉县",
                        value: "220821"
                    }, {
                        label: "通榆县",
                        value: "220822"
                    }, {
                        label: "吉林白城经济开发区",
                        value: "220871"
                    }, {
                        label: "洮南市",
                        value: "220881"
                    }, {
                        label: "大安市",
                        value: "220882"
                    }]
                }, {
                    label: "延边朝鲜族自治州",
                    value: "2224",
                    children: [{
                        label: "延吉市",
                        value: "222401"
                    }, {
                        label: "图们市",
                        value: "222402"
                    }, {
                        label: "敦化市",
                        value: "222403"
                    }, {
                        label: "珲春市",
                        value: "222404"
                    }, {
                        label: "龙井市",
                        value: "222405"
                    }, {
                        label: "和龙市",
                        value: "222406"
                    }, {
                        label: "汪清县",
                        value: "222424"
                    }, {
                        label: "安图县",
                        value: "222426"
                    }]
                }]
            }, {
                label: "黑龙江",
                value: "23",
                children: [{
                    label: "哈尔滨市",
                    value: "2301",
                    children: [{
                        label: "道里区",
                        value: "230102"
                    }, {
                        label: "南岗区",
                        value: "230103"
                    }, {
                        label: "道外区",
                        value: "230104"
                    }, {
                        label: "平房区",
                        value: "230108"
                    }, {
                        label: "松北区",
                        value: "230109"
                    }, {
                        label: "香坊区",
                        value: "230110"
                    }, {
                        label: "呼兰区",
                        value: "230111"
                    }, {
                        label: "阿城区",
                        value: "230112"
                    }, {
                        label: "双城区",
                        value: "230113"
                    }, {
                        label: "依兰县",
                        value: "230123"
                    }, {
                        label: "方正县",
                        value: "230124"
                    }, {
                        label: "宾县",
                        value: "230125"
                    }, {
                        label: "巴彦县",
                        value: "230126"
                    }, {
                        label: "木兰县",
                        value: "230127"
                    }, {
                        label: "通河县",
                        value: "230128"
                    }, {
                        label: "延寿县",
                        value: "230129"
                    }, {
                        label: "尚志市",
                        value: "230183"
                    }, {
                        label: "五常市",
                        value: "230184"
                    }]
                }, {
                    label: "齐齐哈尔市",
                    value: "2302",
                    children: [{
                        label: "龙沙区",
                        value: "230202"
                    }, {
                        label: "建华区",
                        value: "230203"
                    }, {
                        label: "铁锋区",
                        value: "230204"
                    }, {
                        label: "昂昂溪区",
                        value: "230205"
                    }, {
                        label: "富拉尔基区",
                        value: "230206"
                    }, {
                        label: "碾子山区",
                        value: "230207"
                    }, {
                        label: "梅里斯达斡尔族区",
                        value: "230208"
                    }, {
                        label: "龙江县",
                        value: "230221"
                    }, {
                        label: "依安县",
                        value: "230223"
                    }, {
                        label: "泰来县",
                        value: "230224"
                    }, {
                        label: "甘南县",
                        value: "230225"
                    }, {
                        label: "富裕县",
                        value: "230227"
                    }, {
                        label: "克山县",
                        value: "230229"
                    }, {
                        label: "克东县",
                        value: "230230"
                    }, {
                        label: "拜泉县",
                        value: "230231"
                    }, {
                        label: "讷河市",
                        value: "230281"
                    }]
                }, {
                    label: "鸡西市",
                    value: "2303",
                    children: [{
                        label: "鸡冠区",
                        value: "230302"
                    }, {
                        label: "恒山区",
                        value: "230303"
                    }, {
                        label: "滴道区",
                        value: "230304"
                    }, {
                        label: "梨树区",
                        value: "230305"
                    }, {
                        label: "城子河区",
                        value: "230306"
                    }, {
                        label: "麻山区",
                        value: "230307"
                    }, {
                        label: "鸡东县",
                        value: "230321"
                    }, {
                        label: "虎林市",
                        value: "230381"
                    }, {
                        label: "密山市",
                        value: "230382"
                    }]
                }, {
                    label: "鹤岗市",
                    value: "2304",
                    children: [{
                        label: "向阳区",
                        value: "230402"
                    }, {
                        label: "工农区",
                        value: "230403"
                    }, {
                        label: "南山区",
                        value: "230404"
                    }, {
                        label: "兴安区",
                        value: "230405"
                    }, {
                        label: "东山区",
                        value: "230406"
                    }, {
                        label: "兴山区",
                        value: "230407"
                    }, {
                        label: "萝北县",
                        value: "230421"
                    }, {
                        label: "绥滨县",
                        value: "230422"
                    }]
                }, {
                    label: "双鸭山市",
                    value: "2305",
                    children: [{
                        label: "尖山区",
                        value: "230502"
                    }, {
                        label: "岭东区",
                        value: "230503"
                    }, {
                        label: "四方台区",
                        value: "230505"
                    }, {
                        label: "宝山区",
                        value: "230506"
                    }, {
                        label: "集贤县",
                        value: "230521"
                    }, {
                        label: "友谊县",
                        value: "230522"
                    }, {
                        label: "宝清县",
                        value: "230523"
                    }, {
                        label: "饶河县",
                        value: "230524"
                    }]
                }, {
                    label: "大庆市",
                    value: "2306",
                    children: [{
                        label: "萨尔图区",
                        value: "230602"
                    }, {
                        label: "龙凤区",
                        value: "230603"
                    }, {
                        label: "让胡路区",
                        value: "230604"
                    }, {
                        label: "红岗区",
                        value: "230605"
                    }, {
                        label: "大同区",
                        value: "230606"
                    }, {
                        label: "肇州县",
                        value: "230621"
                    }, {
                        label: "肇源县",
                        value: "230622"
                    }, {
                        label: "林甸县",
                        value: "230623"
                    }, {
                        label: "杜尔伯特蒙古族自治县",
                        value: "230624"
                    }, {
                        label: "大庆高新技术产业开发区",
                        value: "230671"
                    }]
                }, {
                    label: "伊春市",
                    value: "2307",
                    children: [{
                        label: "伊春区",
                        value: "230702"
                    }, {
                        label: "南岔区",
                        value: "230703"
                    }, {
                        label: "友好区",
                        value: "230704"
                    }, {
                        label: "西林区",
                        value: "230705"
                    }, {
                        label: "翠峦区",
                        value: "230706"
                    }, {
                        label: "新青区",
                        value: "230707"
                    }, {
                        label: "美溪区",
                        value: "230708"
                    }, {
                        label: "金山屯区",
                        value: "230709"
                    }, {
                        label: "五营区",
                        value: "230710"
                    }, {
                        label: "乌马河区",
                        value: "230711"
                    }, {
                        label: "汤旺河区",
                        value: "230712"
                    }, {
                        label: "带岭区",
                        value: "230713"
                    }, {
                        label: "乌伊岭区",
                        value: "230714"
                    }, {
                        label: "红星区",
                        value: "230715"
                    }, {
                        label: "上甘岭区",
                        value: "230716"
                    }, {
                        label: "嘉荫县",
                        value: "230722"
                    }, {
                        label: "铁力市",
                        value: "230781"
                    }]
                }, {
                    label: "佳木斯市",
                    value: "2308",
                    children: [{
                        label: "向阳区",
                        value: "230803"
                    }, {
                        label: "前进区",
                        value: "230804"
                    }, {
                        label: "东风区",
                        value: "230805"
                    }, {
                        label: "郊区",
                        value: "230811"
                    }, {
                        label: "桦南县",
                        value: "230822"
                    }, {
                        label: "桦川县",
                        value: "230826"
                    }, {
                        label: "汤原县",
                        value: "230828"
                    }, {
                        label: "同江市",
                        value: "230881"
                    }, {
                        label: "富锦市",
                        value: "230882"
                    }, {
                        label: "抚远市",
                        value: "230883"
                    }]
                }, {
                    label: "七台河市",
                    value: "2309",
                    children: [{
                        label: "新兴区",
                        value: "230902"
                    }, {
                        label: "桃山区",
                        value: "230903"
                    }, {
                        label: "茄子河区",
                        value: "230904"
                    }, {
                        label: "勃利县",
                        value: "230921"
                    }]
                }, {
                    label: "牡丹江市",
                    value: "2310",
                    children: [{
                        label: "东安区",
                        value: "231002"
                    }, {
                        label: "阳明区",
                        value: "231003"
                    }, {
                        label: "爱民区",
                        value: "231004"
                    }, {
                        label: "西安区",
                        value: "231005"
                    }, {
                        label: "林口县",
                        value: "231025"
                    }, {
                        label: "牡丹江经济技术开发区",
                        value: "231071"
                    }, {
                        label: "绥芬河市",
                        value: "231081"
                    }, {
                        label: "海林市",
                        value: "231083"
                    }, {
                        label: "宁安市",
                        value: "231084"
                    }, {
                        label: "穆棱市",
                        value: "231085"
                    }, {
                        label: "东宁市",
                        value: "231086"
                    }]
                }, {
                    label: "黑河市",
                    value: "2311",
                    children: [{
                        label: "爱辉区",
                        value: "231102"
                    }, {
                        label: "嫩江县",
                        value: "231121"
                    }, {
                        label: "逊克县",
                        value: "231123"
                    }, {
                        label: "孙吴县",
                        value: "231124"
                    }, {
                        label: "北安市",
                        value: "231181"
                    }, {
                        label: "五大连池市",
                        value: "231182"
                    }]
                }, {
                    label: "绥化市",
                    value: "2312",
                    children: [{
                        label: "北林区",
                        value: "231202"
                    }, {
                        label: "望奎县",
                        value: "231221"
                    }, {
                        label: "兰西县",
                        value: "231222"
                    }, {
                        label: "青冈县",
                        value: "231223"
                    }, {
                        label: "庆安县",
                        value: "231224"
                    }, {
                        label: "明水县",
                        value: "231225"
                    }, {
                        label: "绥棱县",
                        value: "231226"
                    }, {
                        label: "安达市",
                        value: "231281"
                    }, {
                        label: "肇东市",
                        value: "231282"
                    }, {
                        label: "海伦市",
                        value: "231283"
                    }]
                }, {
                    label: "大兴安岭地区",
                    value: "2327",
                    children: [{
                        label: "加格达奇区",
                        value: "232701"
                    }, {
                        label: "松岭区",
                        value: "232702"
                    }, {
                        label: "新林区",
                        value: "232703"
                    }, {
                        label: "呼中区",
                        value: "232704"
                    }, {
                        label: "呼玛县",
                        value: "232721"
                    }, {
                        label: "塔河县",
                        value: "232722"
                    }, {
                        label: "漠河县",
                        value: "232723"
                    }]
                }]
            }, {
                label: "上海",
                value: "31",
                children: [{
                    label: "上海市",
                    value: "3101",
                    children: [{
                        label: "黄浦区",
                        value: "310101"
                    }, {
                        label: "徐汇区",
                        value: "310104"
                    }, {
                        label: "长宁区",
                        value: "310105"
                    }, {
                        label: "静安区",
                        value: "310106"
                    }, {
                        label: "普陀区",
                        value: "310107"
                    }, {
                        label: "虹口区",
                        value: "310109"
                    }, {
                        label: "杨浦区",
                        value: "310110"
                    }, {
                        label: "闵行区",
                        value: "310112"
                    }, {
                        label: "宝山区",
                        value: "310113"
                    }, {
                        label: "嘉定区",
                        value: "310114"
                    }, {
                        label: "浦东新区",
                        value: "310115"
                    }, {
                        label: "金山区",
                        value: "310116"
                    }, {
                        label: "松江区",
                        value: "310117"
                    }, {
                        label: "青浦区",
                        value: "310118"
                    }, {
                        label: "奉贤区",
                        value: "310120"
                    }, {
                        label: "崇明区",
                        value: "310151"
                    }]
                }]
            }, {
                label: "江苏",
                value: "32",
                children: [{
                    label: "南京市",
                    value: "3201",
                    children: [{
                        label: "玄武区",
                        value: "320102"
                    }, {
                        label: "秦淮区",
                        value: "320104"
                    }, {
                        label: "建邺区",
                        value: "320105"
                    }, {
                        label: "鼓楼区",
                        value: "320106"
                    }, {
                        label: "浦口区",
                        value: "320111"
                    }, {
                        label: "栖霞区",
                        value: "320113"
                    }, {
                        label: "雨花台区",
                        value: "320114"
                    }, {
                        label: "江宁区",
                        value: "320115"
                    }, {
                        label: "六合区",
                        value: "320116"
                    }, {
                        label: "溧水区",
                        value: "320117"
                    }, {
                        label: "高淳区",
                        value: "320118"
                    }]
                }, {
                    label: "无锡市",
                    value: "3202",
                    children: [{
                        label: "锡山区",
                        value: "320205"
                    }, {
                        label: "惠山区",
                        value: "320206"
                    }, {
                        label: "滨湖区",
                        value: "320211"
                    }, {
                        label: "梁溪区",
                        value: "320213"
                    }, {
                        label: "新吴区",
                        value: "320214"
                    }, {
                        label: "江阴市",
                        value: "320281"
                    }, {
                        label: "宜兴市",
                        value: "320282"
                    }]
                }, {
                    label: "徐州市",
                    value: "3203",
                    children: [{
                        label: "鼓楼区",
                        value: "320302"
                    }, {
                        label: "云龙区",
                        value: "320303"
                    }, {
                        label: "贾汪区",
                        value: "320305"
                    }, {
                        label: "泉山区",
                        value: "320311"
                    }, {
                        label: "铜山区",
                        value: "320312"
                    }, {
                        label: "丰县",
                        value: "320321"
                    }, {
                        label: "沛县",
                        value: "320322"
                    }, {
                        label: "睢宁县",
                        value: "320324"
                    }, {
                        label: "徐州经济技术开发区",
                        value: "320371"
                    }, {
                        label: "新沂市",
                        value: "320381"
                    }, {
                        label: "邳州市",
                        value: "320382"
                    }]
                }, {
                    label: "常州市",
                    value: "3204",
                    children: [{
                        label: "天宁区",
                        value: "320402"
                    }, {
                        label: "钟楼区",
                        value: "320404"
                    }, {
                        label: "新北区",
                        value: "320411"
                    }, {
                        label: "武进区",
                        value: "320412"
                    }, {
                        label: "金坛区",
                        value: "320413"
                    }, {
                        label: "溧阳市",
                        value: "320481"
                    }]
                }, {
                    label: "苏州市",
                    value: "3205",
                    children: [{
                        label: "虎丘区",
                        value: "320505"
                    }, {
                        label: "吴中区",
                        value: "320506"
                    }, {
                        label: "相城区",
                        value: "320507"
                    }, {
                        label: "姑苏区",
                        value: "320508"
                    }, {
                        label: "吴江区",
                        value: "320509"
                    }, {
                        label: "苏州工业园区",
                        value: "320571"
                    }, {
                        label: "常熟市",
                        value: "320581"
                    }, {
                        label: "张家港市",
                        value: "320582"
                    }, {
                        label: "昆山市",
                        value: "320583"
                    }, {
                        label: "太仓市",
                        value: "320585"
                    }]
                }, {
                    label: "南通市",
                    value: "3206",
                    children: [{
                        label: "崇川区",
                        value: "320602"
                    }, {
                        label: "港闸区",
                        value: "320611"
                    }, {
                        label: "通州区",
                        value: "320612"
                    }, {
                        label: "海安县",
                        value: "320621"
                    }, {
                        label: "如东县",
                        value: "320623"
                    }, {
                        label: "南通经济技术开发区",
                        value: "320671"
                    }, {
                        label: "启东市",
                        value: "320681"
                    }, {
                        label: "如皋市",
                        value: "320682"
                    }, {
                        label: "海门市",
                        value: "320684"
                    }]
                }, {
                    label: "连云港市",
                    value: "3207",
                    children: [{
                        label: "连云区",
                        value: "320703"
                    }, {
                        label: "海州区",
                        value: "320706"
                    }, {
                        label: "赣榆区",
                        value: "320707"
                    }, {
                        label: "东海县",
                        value: "320722"
                    }, {
                        label: "灌云县",
                        value: "320723"
                    }, {
                        label: "灌南县",
                        value: "320724"
                    }, {
                        label: "连云港经济技术开发区",
                        value: "320771"
                    }, {
                        label: "连云港高新技术产业开发区",
                        value: "320772"
                    }]
                }, {
                    label: "淮安市",
                    value: "3208",
                    children: [{
                        label: "淮安区",
                        value: "320803"
                    }, {
                        label: "淮阴区",
                        value: "320804"
                    }, {
                        label: "清江浦区",
                        value: "320812"
                    }, {
                        label: "洪泽区",
                        value: "320813"
                    }, {
                        label: "涟水县",
                        value: "320826"
                    }, {
                        label: "盱眙县",
                        value: "320830"
                    }, {
                        label: "金湖县",
                        value: "320831"
                    }, {
                        label: "淮安经济技术开发区",
                        value: "320871"
                    }]
                }, {
                    label: "盐城市",
                    value: "3209",
                    children: [{
                        label: "亭湖区",
                        value: "320902"
                    }, {
                        label: "盐都区",
                        value: "320903"
                    }, {
                        label: "大丰区",
                        value: "320904"
                    }, {
                        label: "响水县",
                        value: "320921"
                    }, {
                        label: "滨海县",
                        value: "320922"
                    }, {
                        label: "阜宁县",
                        value: "320923"
                    }, {
                        label: "射阳县",
                        value: "320924"
                    }, {
                        label: "建湖县",
                        value: "320925"
                    }, {
                        label: "盐城经济技术开发区",
                        value: "320971"
                    }, {
                        label: "东台市",
                        value: "320981"
                    }]
                }, {
                    label: "扬州市",
                    value: "3210",
                    children: [{
                        label: "广陵区",
                        value: "321002"
                    }, {
                        label: "邗江区",
                        value: "321003"
                    }, {
                        label: "江都区",
                        value: "321012"
                    }, {
                        label: "宝应县",
                        value: "321023"
                    }, {
                        label: "扬州经济技术开发区",
                        value: "321071"
                    }, {
                        label: "仪征市",
                        value: "321081"
                    }, {
                        label: "高邮市",
                        value: "321084"
                    }]
                }, {
                    label: "镇江市",
                    value: "3211",
                    children: [{
                        label: "京口区",
                        value: "321102"
                    }, {
                        label: "润州区",
                        value: "321111"
                    }, {
                        label: "丹徒区",
                        value: "321112"
                    }, {
                        label: "镇江新区",
                        value: "321171"
                    }, {
                        label: "丹阳市",
                        value: "321181"
                    }, {
                        label: "扬中市",
                        value: "321182"
                    }, {
                        label: "句容市",
                        value: "321183"
                    }]
                }, {
                    label: "泰州市",
                    value: "3212",
                    children: [{
                        label: "海陵区",
                        value: "321202"
                    }, {
                        label: "高港区",
                        value: "321203"
                    }, {
                        label: "姜堰区",
                        value: "321204"
                    }, {
                        label: "泰州医药高新技术产业开发区",
                        value: "321271"
                    }, {
                        label: "兴化市",
                        value: "321281"
                    }, {
                        label: "靖江市",
                        value: "321282"
                    }, {
                        label: "泰兴市",
                        value: "321283"
                    }]
                }, {
                    label: "宿迁市",
                    value: "3213",
                    children: [{
                        label: "宿城区",
                        value: "321302"
                    }, {
                        label: "宿豫区",
                        value: "321311"
                    }, {
                        label: "沭阳县",
                        value: "321322"
                    }, {
                        label: "泗阳县",
                        value: "321323"
                    }, {
                        label: "泗洪县",
                        value: "321324"
                    }, {
                        label: "宿迁经济技术开发区",
                        value: "321371"
                    }]
                }]
            }, {
                label: "浙江",
                value: "33",
                children: [{
                    label: "杭州市",
                    value: "3301",
                    children: [{
                        label: "上城区",
                        value: "330102"
                    }, {
                        label: "下城区",
                        value: "330103"
                    }, {
                        label: "江干区",
                        value: "330104"
                    }, {
                        label: "拱墅区",
                        value: "330105"
                    }, {
                        label: "西湖区",
                        value: "330106"
                    }, {
                        label: "滨江区",
                        value: "330108"
                    }, {
                        label: "萧山区",
                        value: "330109"
                    }, {
                        label: "余杭区",
                        value: "330110"
                    }, {
                        label: "富阳区",
                        value: "330111"
                    }, {
                        label: "临安区",
                        value: "330112"
                    }, {
                        label: "桐庐县",
                        value: "330122"
                    }, {
                        label: "淳安县",
                        value: "330127"
                    }, {
                        label: "建德市",
                        value: "330182"
                    }]
                }, {
                    label: "宁波市",
                    value: "3302",
                    children: [{
                        label: "海曙区",
                        value: "330203"
                    }, {
                        label: "江北区",
                        value: "330205"
                    }, {
                        label: "北仑区",
                        value: "330206"
                    }, {
                        label: "镇海区",
                        value: "330211"
                    }, {
                        label: "鄞州区",
                        value: "330212"
                    }, {
                        label: "奉化区",
                        value: "330213"
                    }, {
                        label: "象山县",
                        value: "330225"
                    }, {
                        label: "宁海县",
                        value: "330226"
                    }, {
                        label: "余姚市",
                        value: "330281"
                    }, {
                        label: "慈溪市",
                        value: "330282"
                    }]
                }, {
                    label: "温州市",
                    value: "3303",
                    children: [{
                        label: "鹿城区",
                        value: "330302"
                    }, {
                        label: "龙湾区",
                        value: "330303"
                    }, {
                        label: "瓯海区",
                        value: "330304"
                    }, {
                        label: "洞头区",
                        value: "330305"
                    }, {
                        label: "永嘉县",
                        value: "330324"
                    }, {
                        label: "平阳县",
                        value: "330326"
                    }, {
                        label: "苍南县",
                        value: "330327"
                    }, {
                        label: "文成县",
                        value: "330328"
                    }, {
                        label: "泰顺县",
                        value: "330329"
                    }, {
                        label: "温州经济技术开发区",
                        value: "330371"
                    }, {
                        label: "瑞安市",
                        value: "330381"
                    }, {
                        label: "乐清市",
                        value: "330382"
                    }]
                }, {
                    label: "嘉兴市",
                    value: "3304",
                    children: [{
                        label: "南湖区",
                        value: "330402"
                    }, {
                        label: "秀洲区",
                        value: "330411"
                    }, {
                        label: "嘉善县",
                        value: "330421"
                    }, {
                        label: "海盐县",
                        value: "330424"
                    }, {
                        label: "海宁市",
                        value: "330481"
                    }, {
                        label: "平湖市",
                        value: "330482"
                    }, {
                        label: "桐乡市",
                        value: "330483"
                    }]
                }, {
                    label: "湖州市",
                    value: "3305",
                    children: [{
                        label: "吴兴区",
                        value: "330502"
                    }, {
                        label: "南浔区",
                        value: "330503"
                    }, {
                        label: "德清县",
                        value: "330521"
                    }, {
                        label: "长兴县",
                        value: "330522"
                    }, {
                        label: "安吉县",
                        value: "330523"
                    }]
                }, {
                    label: "绍兴市",
                    value: "3306",
                    children: [{
                        label: "越城区",
                        value: "330602"
                    }, {
                        label: "柯桥区",
                        value: "330603"
                    }, {
                        label: "上虞区",
                        value: "330604"
                    }, {
                        label: "新昌县",
                        value: "330624"
                    }, {
                        label: "诸暨市",
                        value: "330681"
                    }, {
                        label: "嵊州市",
                        value: "330683"
                    }]
                }, {
                    label: "金华市",
                    value: "3307",
                    children: [{
                        label: "婺城区",
                        value: "330702"
                    }, {
                        label: "金东区",
                        value: "330703"
                    }, {
                        label: "武义县",
                        value: "330723"
                    }, {
                        label: "浦江县",
                        value: "330726"
                    }, {
                        label: "磐安县",
                        value: "330727"
                    }, {
                        label: "兰溪市",
                        value: "330781"
                    }, {
                        label: "义乌市",
                        value: "330782"
                    }, {
                        label: "东阳市",
                        value: "330783"
                    }, {
                        label: "永康市",
                        value: "330784"
                    }]
                }, {
                    label: "衢州市",
                    value: "3308",
                    children: [{
                        label: "柯城区",
                        value: "330802"
                    }, {
                        label: "衢江区",
                        value: "330803"
                    }, {
                        label: "常山县",
                        value: "330822"
                    }, {
                        label: "开化县",
                        value: "330824"
                    }, {
                        label: "龙游县",
                        value: "330825"
                    }, {
                        label: "江山市",
                        value: "330881"
                    }]
                }, {
                    label: "舟山市",
                    value: "3309",
                    children: [{
                        label: "定海区",
                        value: "330902"
                    }, {
                        label: "普陀区",
                        value: "330903"
                    }, {
                        label: "岱山县",
                        value: "330921"
                    }, {
                        label: "嵊泗县",
                        value: "330922"
                    }]
                }, {
                    label: "台州市",
                    value: "3310",
                    children: [{
                        label: "椒江区",
                        value: "331002"
                    }, {
                        label: "黄岩区",
                        value: "331003"
                    }, {
                        label: "路桥区",
                        value: "331004"
                    }, {
                        label: "三门县",
                        value: "331022"
                    }, {
                        label: "天台县",
                        value: "331023"
                    }, {
                        label: "仙居县",
                        value: "331024"
                    }, {
                        label: "温岭市",
                        value: "331081"
                    }, {
                        label: "临海市",
                        value: "331082"
                    }, {
                        label: "玉环市",
                        value: "331083"
                    }]
                }, {
                    label: "丽水市",
                    value: "3311",
                    children: [{
                        label: "莲都区",
                        value: "331102"
                    }, {
                        label: "青田县",
                        value: "331121"
                    }, {
                        label: "缙云县",
                        value: "331122"
                    }, {
                        label: "遂昌县",
                        value: "331123"
                    }, {
                        label: "松阳县",
                        value: "331124"
                    }, {
                        label: "云和县",
                        value: "331125"
                    }, {
                        label: "庆元县",
                        value: "331126"
                    }, {
                        label: "景宁畲族自治县",
                        value: "331127"
                    }, {
                        label: "龙泉市",
                        value: "331181"
                    }]
                }]
            }, {
                label: "安徽",
                value: "34",
                children: [{
                    label: "合肥市",
                    value: "3401",
                    children: [{
                        label: "瑶海区",
                        value: "340102"
                    }, {
                        label: "庐阳区",
                        value: "340103"
                    }, {
                        label: "蜀山区",
                        value: "340104"
                    }, {
                        label: "包河区",
                        value: "340111"
                    }, {
                        label: "长丰县",
                        value: "340121"
                    }, {
                        label: "肥东县",
                        value: "340122"
                    }, {
                        label: "肥西县",
                        value: "340123"
                    }, {
                        label: "庐江县",
                        value: "340124"
                    }, {
                        label: "合肥高新技术产业开发区",
                        value: "340171"
                    }, {
                        label: "合肥经济技术开发区",
                        value: "340172"
                    }, {
                        label: "合肥新站高新技术产业开发区",
                        value: "340173"
                    }, {
                        label: "巢湖市",
                        value: "340181"
                    }]
                }, {
                    label: "芜湖市",
                    value: "3402",
                    children: [{
                        label: "镜湖区",
                        value: "340202"
                    }, {
                        label: "弋江区",
                        value: "340203"
                    }, {
                        label: "鸠江区",
                        value: "340207"
                    }, {
                        label: "三山区",
                        value: "340208"
                    }, {
                        label: "芜湖县",
                        value: "340221"
                    }, {
                        label: "繁昌县",
                        value: "340222"
                    }, {
                        label: "南陵县",
                        value: "340223"
                    }, {
                        label: "无为县",
                        value: "340225"
                    }, {
                        label: "芜湖经济技术开发区",
                        value: "340271"
                    }, {
                        label: "安徽芜湖长江大桥经济开发区",
                        value: "340272"
                    }]
                }, {
                    label: "蚌埠市",
                    value: "3403",
                    children: [{
                        label: "龙子湖区",
                        value: "340302"
                    }, {
                        label: "蚌山区",
                        value: "340303"
                    }, {
                        label: "禹会区",
                        value: "340304"
                    }, {
                        label: "淮上区",
                        value: "340311"
                    }, {
                        label: "怀远县",
                        value: "340321"
                    }, {
                        label: "五河县",
                        value: "340322"
                    }, {
                        label: "固镇县",
                        value: "340323"
                    }, {
                        label: "蚌埠市高新技术开发区",
                        value: "340371"
                    }, {
                        label: "蚌埠市经济开发区",
                        value: "340372"
                    }]
                }, {
                    label: "淮南市",
                    value: "3404",
                    children: [{
                        label: "大通区",
                        value: "340402"
                    }, {
                        label: "田家庵区",
                        value: "340403"
                    }, {
                        label: "谢家集区",
                        value: "340404"
                    }, {
                        label: "八公山区",
                        value: "340405"
                    }, {
                        label: "潘集区",
                        value: "340406"
                    }, {
                        label: "凤台县",
                        value: "340421"
                    }, {
                        label: "寿县",
                        value: "340422"
                    }]
                }, {
                    label: "马鞍山市",
                    value: "3405",
                    children: [{
                        label: "花山区",
                        value: "340503"
                    }, {
                        label: "雨山区",
                        value: "340504"
                    }, {
                        label: "博望区",
                        value: "340506"
                    }, {
                        label: "当涂县",
                        value: "340521"
                    }, {
                        label: "含山县",
                        value: "340522"
                    }, {
                        label: "和县",
                        value: "340523"
                    }]
                }, {
                    label: "淮北市",
                    value: "3406",
                    children: [{
                        label: "杜集区",
                        value: "340602"
                    }, {
                        label: "相山区",
                        value: "340603"
                    }, {
                        label: "烈山区",
                        value: "340604"
                    }, {
                        label: "濉溪县",
                        value: "340621"
                    }]
                }, {
                    label: "铜陵市",
                    value: "3407",
                    children: [{
                        label: "铜官区",
                        value: "340705"
                    }, {
                        label: "义安区",
                        value: "340706"
                    }, {
                        label: "郊区",
                        value: "340711"
                    }, {
                        label: "枞阳县",
                        value: "340722"
                    }]
                }, {
                    label: "安庆市",
                    value: "3408",
                    children: [{
                        label: "迎江区",
                        value: "340802"
                    }, {
                        label: "大观区",
                        value: "340803"
                    }, {
                        label: "宜秀区",
                        value: "340811"
                    }, {
                        label: "怀宁县",
                        value: "340822"
                    }, {
                        label: "潜山县",
                        value: "340824"
                    }, {
                        label: "太湖县",
                        value: "340825"
                    }, {
                        label: "宿松县",
                        value: "340826"
                    }, {
                        label: "望江县",
                        value: "340827"
                    }, {
                        label: "岳西县",
                        value: "340828"
                    }, {
                        label: "安徽安庆经济开发区",
                        value: "340871"
                    }, {
                        label: "桐城市",
                        value: "340881"
                    }]
                }, {
                    label: "黄山市",
                    value: "3410",
                    children: [{
                        label: "屯溪区",
                        value: "341002"
                    }, {
                        label: "黄山区",
                        value: "341003"
                    }, {
                        label: "徽州区",
                        value: "341004"
                    }, {
                        label: "歙县",
                        value: "341021"
                    }, {
                        label: "休宁县",
                        value: "341022"
                    }, {
                        label: "黟县",
                        value: "341023"
                    }, {
                        label: "祁门县",
                        value: "341024"
                    }]
                }, {
                    label: "滁州市",
                    value: "3411",
                    children: [{
                        label: "琅琊区",
                        value: "341102"
                    }, {
                        label: "南谯区",
                        value: "341103"
                    }, {
                        label: "来安县",
                        value: "341122"
                    }, {
                        label: "全椒县",
                        value: "341124"
                    }, {
                        label: "定远县",
                        value: "341125"
                    }, {
                        label: "凤阳县",
                        value: "341126"
                    }, {
                        label: "苏滁现代产业园",
                        value: "341171"
                    }, {
                        label: "滁州经济技术开发区",
                        value: "341172"
                    }, {
                        label: "天长市",
                        value: "341181"
                    }, {
                        label: "明光市",
                        value: "341182"
                    }]
                }, {
                    label: "阜阳市",
                    value: "3412",
                    children: [{
                        label: "颍州区",
                        value: "341202"
                    }, {
                        label: "颍东区",
                        value: "341203"
                    }, {
                        label: "颍泉区",
                        value: "341204"
                    }, {
                        label: "临泉县",
                        value: "341221"
                    }, {
                        label: "太和县",
                        value: "341222"
                    }, {
                        label: "阜南县",
                        value: "341225"
                    }, {
                        label: "颍上县",
                        value: "341226"
                    }, {
                        label: "阜阳合肥现代产业园区",
                        value: "341271"
                    }, {
                        label: "阜阳经济技术开发区",
                        value: "341272"
                    }, {
                        label: "界首市",
                        value: "341282"
                    }]
                }, {
                    label: "宿州市",
                    value: "3413",
                    children: [{
                        label: "埇桥区",
                        value: "341302"
                    }, {
                        label: "砀山县",
                        value: "341321"
                    }, {
                        label: "萧县",
                        value: "341322"
                    }, {
                        label: "灵璧县",
                        value: "341323"
                    }, {
                        label: "泗县",
                        value: "341324"
                    }, {
                        label: "宿州马鞍山现代产业园区",
                        value: "341371"
                    }, {
                        label: "宿州经济技术开发区",
                        value: "341372"
                    }]
                }, {
                    label: "六安市",
                    value: "3415",
                    children: [{
                        label: "金安区",
                        value: "341502"
                    }, {
                        label: "裕安区",
                        value: "341503"
                    }, {
                        label: "叶集区",
                        value: "341504"
                    }, {
                        label: "霍邱县",
                        value: "341522"
                    }, {
                        label: "舒城县",
                        value: "341523"
                    }, {
                        label: "金寨县",
                        value: "341524"
                    }, {
                        label: "霍山县",
                        value: "341525"
                    }]
                }, {
                    label: "亳州市",
                    value: "3416",
                    children: [{
                        label: "谯城区",
                        value: "341602"
                    }, {
                        label: "涡阳县",
                        value: "341621"
                    }, {
                        label: "蒙城县",
                        value: "341622"
                    }, {
                        label: "利辛县",
                        value: "341623"
                    }]
                }, {
                    label: "池州市",
                    value: "3417",
                    children: [{
                        label: "贵池区",
                        value: "341702"
                    }, {
                        label: "东至县",
                        value: "341721"
                    }, {
                        label: "石台县",
                        value: "341722"
                    }, {
                        label: "青阳县",
                        value: "341723"
                    }]
                }, {
                    label: "宣城市",
                    value: "3418",
                    children: [{
                        label: "宣州区",
                        value: "341802"
                    }, {
                        label: "郎溪县",
                        value: "341821"
                    }, {
                        label: "广德县",
                        value: "341822"
                    }, {
                        label: "泾县",
                        value: "341823"
                    }, {
                        label: "绩溪县",
                        value: "341824"
                    }, {
                        label: "旌德县",
                        value: "341825"
                    }, {
                        label: "宣城市经济开发区",
                        value: "341871"
                    }, {
                        label: "宁国市",
                        value: "341881"
                    }]
                }]
            }, {
                label: "福建",
                value: "35",
                children: [{
                    label: "福州市",
                    value: "3501",
                    children: [{
                        label: "鼓楼区",
                        value: "350102"
                    }, {
                        label: "台江区",
                        value: "350103"
                    }, {
                        label: "仓山区",
                        value: "350104"
                    }, {
                        label: "马尾区",
                        value: "350105"
                    }, {
                        label: "晋安区",
                        value: "350111"
                    }, {
                        label: "闽侯县",
                        value: "350121"
                    }, {
                        label: "连江县",
                        value: "350122"
                    }, {
                        label: "罗源县",
                        value: "350123"
                    }, {
                        label: "闽清县",
                        value: "350124"
                    }, {
                        label: "永泰县",
                        value: "350125"
                    }, {
                        label: "平潭县",
                        value: "350128"
                    }, {
                        label: "福清市",
                        value: "350181"
                    }, {
                        label: "长乐市",
                        value: "350182"
                    }]
                }, {
                    label: "厦门市",
                    value: "3502",
                    children: [{
                        label: "思明区",
                        value: "350203"
                    }, {
                        label: "海沧区",
                        value: "350205"
                    }, {
                        label: "湖里区",
                        value: "350206"
                    }, {
                        label: "集美区",
                        value: "350211"
                    }, {
                        label: "同安区",
                        value: "350212"
                    }, {
                        label: "翔安区",
                        value: "350213"
                    }]
                }, {
                    label: "莆田市",
                    value: "3503",
                    children: [{
                        label: "城厢区",
                        value: "350302"
                    }, {
                        label: "涵江区",
                        value: "350303"
                    }, {
                        label: "荔城区",
                        value: "350304"
                    }, {
                        label: "秀屿区",
                        value: "350305"
                    }, {
                        label: "仙游县",
                        value: "350322"
                    }]
                }, {
                    label: "三明市",
                    value: "3504",
                    children: [{
                        label: "梅列区",
                        value: "350402"
                    }, {
                        label: "三元区",
                        value: "350403"
                    }, {
                        label: "明溪县",
                        value: "350421"
                    }, {
                        label: "清流县",
                        value: "350423"
                    }, {
                        label: "宁化县",
                        value: "350424"
                    }, {
                        label: "大田县",
                        value: "350425"
                    }, {
                        label: "尤溪县",
                        value: "350426"
                    }, {
                        label: "沙县",
                        value: "350427"
                    }, {
                        label: "将乐县",
                        value: "350428"
                    }, {
                        label: "泰宁县",
                        value: "350429"
                    }, {
                        label: "建宁县",
                        value: "350430"
                    }, {
                        label: "永安市",
                        value: "350481"
                    }]
                }, {
                    label: "泉州市",
                    value: "3505",
                    children: [{
                        label: "鲤城区",
                        value: "350502"
                    }, {
                        label: "丰泽区",
                        value: "350503"
                    }, {
                        label: "洛江区",
                        value: "350504"
                    }, {
                        label: "泉港区",
                        value: "350505"
                    }, {
                        label: "惠安县",
                        value: "350521"
                    }, {
                        label: "安溪县",
                        value: "350524"
                    }, {
                        label: "永春县",
                        value: "350525"
                    }, {
                        label: "德化县",
                        value: "350526"
                    }, {
                        label: "金门县",
                        value: "350527"
                    }, {
                        label: "石狮市",
                        value: "350581"
                    }, {
                        label: "晋江市",
                        value: "350582"
                    }, {
                        label: "南安市",
                        value: "350583"
                    }]
                }, {
                    label: "漳州市",
                    value: "3506",
                    children: [{
                        label: "芗城区",
                        value: "350602"
                    }, {
                        label: "龙文区",
                        value: "350603"
                    }, {
                        label: "云霄县",
                        value: "350622"
                    }, {
                        label: "漳浦县",
                        value: "350623"
                    }, {
                        label: "诏安县",
                        value: "350624"
                    }, {
                        label: "长泰县",
                        value: "350625"
                    }, {
                        label: "东山县",
                        value: "350626"
                    }, {
                        label: "南靖县",
                        value: "350627"
                    }, {
                        label: "平和县",
                        value: "350628"
                    }, {
                        label: "华安县",
                        value: "350629"
                    }, {
                        label: "龙海市",
                        value: "350681"
                    }]
                }, {
                    label: "南平市",
                    value: "3507",
                    children: [{
                        label: "延平区",
                        value: "350702"
                    }, {
                        label: "建阳区",
                        value: "350703"
                    }, {
                        label: "顺昌县",
                        value: "350721"
                    }, {
                        label: "浦城县",
                        value: "350722"
                    }, {
                        label: "光泽县",
                        value: "350723"
                    }, {
                        label: "松溪县",
                        value: "350724"
                    }, {
                        label: "政和县",
                        value: "350725"
                    }, {
                        label: "邵武市",
                        value: "350781"
                    }, {
                        label: "武夷山市",
                        value: "350782"
                    }, {
                        label: "建瓯市",
                        value: "350783"
                    }]
                }, {
                    label: "龙岩市",
                    value: "3508",
                    children: [{
                        label: "新罗区",
                        value: "350802"
                    }, {
                        label: "永定区",
                        value: "350803"
                    }, {
                        label: "长汀县",
                        value: "350821"
                    }, {
                        label: "上杭县",
                        value: "350823"
                    }, {
                        label: "武平县",
                        value: "350824"
                    }, {
                        label: "连城县",
                        value: "350825"
                    }, {
                        label: "漳平市",
                        value: "350881"
                    }]
                }, {
                    label: "宁德市",
                    value: "3509",
                    children: [{
                        label: "蕉城区",
                        value: "350902"
                    }, {
                        label: "霞浦县",
                        value: "350921"
                    }, {
                        label: "古田县",
                        value: "350922"
                    }, {
                        label: "屏南县",
                        value: "350923"
                    }, {
                        label: "寿宁县",
                        value: "350924"
                    }, {
                        label: "周宁县",
                        value: "350925"
                    }, {
                        label: "柘荣县",
                        value: "350926"
                    }, {
                        label: "福安市",
                        value: "350981"
                    }, {
                        label: "福鼎市",
                        value: "350982"
                    }]
                }]
            }, {
                label: "江西",
                value: "36",
                children: [{
                    label: "南昌市",
                    value: "3601",
                    children: [{
                        label: "东湖区",
                        value: "360102"
                    }, {
                        label: "西湖区",
                        value: "360103"
                    }, {
                        label: "青云谱区",
                        value: "360104"
                    }, {
                        label: "湾里区",
                        value: "360105"
                    }, {
                        label: "青山湖区",
                        value: "360111"
                    }, {
                        label: "新建区",
                        value: "360112"
                    }, {
                        label: "南昌县",
                        value: "360121"
                    }, {
                        label: "安义县",
                        value: "360123"
                    }, {
                        label: "进贤县",
                        value: "360124"
                    }]
                }, {
                    label: "景德镇市",
                    value: "3602",
                    children: [{
                        label: "昌江区",
                        value: "360202"
                    }, {
                        label: "珠山区",
                        value: "360203"
                    }, {
                        label: "浮梁县",
                        value: "360222"
                    }, {
                        label: "乐平市",
                        value: "360281"
                    }]
                }, {
                    label: "萍乡市",
                    value: "3603",
                    children: [{
                        label: "安源区",
                        value: "360302"
                    }, {
                        label: "湘东区",
                        value: "360313"
                    }, {
                        label: "莲花县",
                        value: "360321"
                    }, {
                        label: "上栗县",
                        value: "360322"
                    }, {
                        label: "芦溪县",
                        value: "360323"
                    }]
                }, {
                    label: "九江市",
                    value: "3604",
                    children: [{
                        label: "濂溪区",
                        value: "360402"
                    }, {
                        label: "浔阳区",
                        value: "360403"
                    }, {
                        label: "柴桑区",
                        value: "360404"
                    }, {
                        label: "武宁县",
                        value: "360423"
                    }, {
                        label: "修水县",
                        value: "360424"
                    }, {
                        label: "永修县",
                        value: "360425"
                    }, {
                        label: "德安县",
                        value: "360426"
                    }, {
                        label: "都昌县",
                        value: "360428"
                    }, {
                        label: "湖口县",
                        value: "360429"
                    }, {
                        label: "彭泽县",
                        value: "360430"
                    }, {
                        label: "瑞昌市",
                        value: "360481"
                    }, {
                        label: "共青城市",
                        value: "360482"
                    }, {
                        label: "庐山市",
                        value: "360483"
                    }]
                }, {
                    label: "新余市",
                    value: "3605",
                    children: [{
                        label: "渝水区",
                        value: "360502"
                    }, {
                        label: "分宜县",
                        value: "360521"
                    }]
                }, {
                    label: "鹰潭市",
                    value: "3606",
                    children: [{
                        label: "月湖区",
                        value: "360602"
                    }, {
                        label: "余江县",
                        value: "360622"
                    }, {
                        label: "贵溪市",
                        value: "360681"
                    }]
                }, {
                    label: "赣州市",
                    value: "3607",
                    children: [{
                        label: "章贡区",
                        value: "360702"
                    }, {
                        label: "南康区",
                        value: "360703"
                    }, {
                        label: "赣县区",
                        value: "360704"
                    }, {
                        label: "信丰县",
                        value: "360722"
                    }, {
                        label: "大余县",
                        value: "360723"
                    }, {
                        label: "上犹县",
                        value: "360724"
                    }, {
                        label: "崇义县",
                        value: "360725"
                    }, {
                        label: "安远县",
                        value: "360726"
                    }, {
                        label: "龙南县",
                        value: "360727"
                    }, {
                        label: "定南县",
                        value: "360728"
                    }, {
                        label: "全南县",
                        value: "360729"
                    }, {
                        label: "宁都县",
                        value: "360730"
                    }, {
                        label: "于都县",
                        value: "360731"
                    }, {
                        label: "兴国县",
                        value: "360732"
                    }, {
                        label: "会昌县",
                        value: "360733"
                    }, {
                        label: "寻乌县",
                        value: "360734"
                    }, {
                        label: "石城县",
                        value: "360735"
                    }, {
                        label: "瑞金市",
                        value: "360781"
                    }]
                }, {
                    label: "吉安市",
                    value: "3608",
                    children: [{
                        label: "吉州区",
                        value: "360802"
                    }, {
                        label: "青原区",
                        value: "360803"
                    }, {
                        label: "吉安县",
                        value: "360821"
                    }, {
                        label: "吉水县",
                        value: "360822"
                    }, {
                        label: "峡江县",
                        value: "360823"
                    }, {
                        label: "新干县",
                        value: "360824"
                    }, {
                        label: "永丰县",
                        value: "360825"
                    }, {
                        label: "泰和县",
                        value: "360826"
                    }, {
                        label: "遂川县",
                        value: "360827"
                    }, {
                        label: "万安县",
                        value: "360828"
                    }, {
                        label: "安福县",
                        value: "360829"
                    }, {
                        label: "永新县",
                        value: "360830"
                    }, {
                        label: "井冈山市",
                        value: "360881"
                    }]
                }, {
                    label: "宜春市",
                    value: "3609",
                    children: [{
                        label: "袁州区",
                        value: "360902"
                    }, {
                        label: "奉新县",
                        value: "360921"
                    }, {
                        label: "万载县",
                        value: "360922"
                    }, {
                        label: "上高县",
                        value: "360923"
                    }, {
                        label: "宜丰县",
                        value: "360924"
                    }, {
                        label: "靖安县",
                        value: "360925"
                    }, {
                        label: "铜鼓县",
                        value: "360926"
                    }, {
                        label: "丰城市",
                        value: "360981"
                    }, {
                        label: "樟树市",
                        value: "360982"
                    }, {
                        label: "高安市",
                        value: "360983"
                    }]
                }, {
                    label: "抚州市",
                    value: "3610",
                    children: [{
                        label: "临川区",
                        value: "361002"
                    }, {
                        label: "东乡区",
                        value: "361003"
                    }, {
                        label: "南城县",
                        value: "361021"
                    }, {
                        label: "黎川县",
                        value: "361022"
                    }, {
                        label: "南丰县",
                        value: "361023"
                    }, {
                        label: "崇仁县",
                        value: "361024"
                    }, {
                        label: "乐安县",
                        value: "361025"
                    }, {
                        label: "宜黄县",
                        value: "361026"
                    }, {
                        label: "金溪县",
                        value: "361027"
                    }, {
                        label: "资溪县",
                        value: "361028"
                    }, {
                        label: "广昌县",
                        value: "361030"
                    }]
                }, {
                    label: "上饶市",
                    value: "3611",
                    children: [{
                        label: "信州区",
                        value: "361102"
                    }, {
                        label: "广丰区",
                        value: "361103"
                    }, {
                        label: "上饶县",
                        value: "361121"
                    }, {
                        label: "玉山县",
                        value: "361123"
                    }, {
                        label: "铅山县",
                        value: "361124"
                    }, {
                        label: "横峰县",
                        value: "361125"
                    }, {
                        label: "弋阳县",
                        value: "361126"
                    }, {
                        label: "余干县",
                        value: "361127"
                    }, {
                        label: "鄱阳县",
                        value: "361128"
                    }, {
                        label: "万年县",
                        value: "361129"
                    }, {
                        label: "婺源县",
                        value: "361130"
                    }, {
                        label: "德兴市",
                        value: "361181"
                    }]
                }]
            }, {
                label: "山东",
                value: "37",
                children: [{
                    label: "济南市",
                    value: "3701",
                    children: [{
                        label: "历下区",
                        value: "370102"
                    }, {
                        label: "市中区",
                        value: "370103"
                    }, {
                        label: "槐荫区",
                        value: "370104"
                    }, {
                        label: "天桥区",
                        value: "370105"
                    }, {
                        label: "历城区",
                        value: "370112"
                    }, {
                        label: "长清区",
                        value: "370113"
                    }, {
                        label: "章丘区",
                        value: "370114"
                    }, {
                        label: "平阴县",
                        value: "370124"
                    }, {
                        label: "济阳县",
                        value: "370125"
                    }, {
                        label: "商河县",
                        value: "370126"
                    }, {
                        label: "济南高新技术产业开发区",
                        value: "370171"
                    }]
                }, {
                    label: "青岛市",
                    value: "3702",
                    children: [{
                        label: "市南区",
                        value: "370202"
                    }, {
                        label: "市北区",
                        value: "370203"
                    }, {
                        label: "黄岛区",
                        value: "370211"
                    }, {
                        label: "崂山区",
                        value: "370212"
                    }, {
                        label: "李沧区",
                        value: "370213"
                    }, {
                        label: "城阳区",
                        value: "370214"
                    }, {
                        label: "即墨区",
                        value: "370215"
                    }, {
                        label: "青岛高新技术产业开发区",
                        value: "370271"
                    }, {
                        label: "胶州市",
                        value: "370281"
                    }, {
                        label: "平度市",
                        value: "370283"
                    }, {
                        label: "莱西市",
                        value: "370285"
                    }]
                }, {
                    label: "淄博市",
                    value: "3703",
                    children: [{
                        label: "淄川区",
                        value: "370302"
                    }, {
                        label: "张店区",
                        value: "370303"
                    }, {
                        label: "博山区",
                        value: "370304"
                    }, {
                        label: "临淄区",
                        value: "370305"
                    }, {
                        label: "周村区",
                        value: "370306"
                    }, {
                        label: "桓台县",
                        value: "370321"
                    }, {
                        label: "高青县",
                        value: "370322"
                    }, {
                        label: "沂源县",
                        value: "370323"
                    }]
                }, {
                    label: "枣庄市",
                    value: "3704",
                    children: [{
                        label: "市中区",
                        value: "370402"
                    }, {
                        label: "薛城区",
                        value: "370403"
                    }, {
                        label: "峄城区",
                        value: "370404"
                    }, {
                        label: "台儿庄区",
                        value: "370405"
                    }, {
                        label: "山亭区",
                        value: "370406"
                    }, {
                        label: "滕州市",
                        value: "370481"
                    }]
                }, {
                    label: "东营市",
                    value: "3705",
                    children: [{
                        label: "东营区",
                        value: "370502"
                    }, {
                        label: "河口区",
                        value: "370503"
                    }, {
                        label: "垦利区",
                        value: "370505"
                    }, {
                        label: "利津县",
                        value: "370522"
                    }, {
                        label: "广饶县",
                        value: "370523"
                    }, {
                        label: "东营经济技术开发区",
                        value: "370571"
                    }, {
                        label: "东营港经济开发区",
                        value: "370572"
                    }]
                }, {
                    label: "烟台市",
                    value: "3706",
                    children: [{
                        label: "芝罘区",
                        value: "370602"
                    }, {
                        label: "福山区",
                        value: "370611"
                    }, {
                        label: "牟平区",
                        value: "370612"
                    }, {
                        label: "莱山区",
                        value: "370613"
                    }, {
                        label: "长岛县",
                        value: "370634"
                    }, {
                        label: "烟台高新技术产业开发区",
                        value: "370671"
                    }, {
                        label: "烟台经济技术开发区",
                        value: "370672"
                    }, {
                        label: "龙口市",
                        value: "370681"
                    }, {
                        label: "莱阳市",
                        value: "370682"
                    }, {
                        label: "莱州市",
                        value: "370683"
                    }, {
                        label: "蓬莱市",
                        value: "370684"
                    }, {
                        label: "招远市",
                        value: "370685"
                    }, {
                        label: "栖霞市",
                        value: "370686"
                    }, {
                        label: "海阳市",
                        value: "370687"
                    }]
                }, {
                    label: "潍坊市",
                    value: "3707",
                    children: [{
                        label: "潍城区",
                        value: "370702"
                    }, {
                        label: "寒亭区",
                        value: "370703"
                    }, {
                        label: "坊子区",
                        value: "370704"
                    }, {
                        label: "奎文区",
                        value: "370705"
                    }, {
                        label: "临朐县",
                        value: "370724"
                    }, {
                        label: "昌乐县",
                        value: "370725"
                    }, {
                        label: "潍坊滨海经济技术开发区",
                        value: "370772"
                    }, {
                        label: "青州市",
                        value: "370781"
                    }, {
                        label: "诸城市",
                        value: "370782"
                    }, {
                        label: "寿光市",
                        value: "370783"
                    }, {
                        label: "安丘市",
                        value: "370784"
                    }, {
                        label: "高密市",
                        value: "370785"
                    }, {
                        label: "昌邑市",
                        value: "370786"
                    }]
                }, {
                    label: "济宁市",
                    value: "3708",
                    children: [{
                        label: "任城区",
                        value: "370811"
                    }, {
                        label: "兖州区",
                        value: "370812"
                    }, {
                        label: "微山县",
                        value: "370826"
                    }, {
                        label: "鱼台县",
                        value: "370827"
                    }, {
                        label: "金乡县",
                        value: "370828"
                    }, {
                        label: "嘉祥县",
                        value: "370829"
                    }, {
                        label: "汶上县",
                        value: "370830"
                    }, {
                        label: "泗水县",
                        value: "370831"
                    }, {
                        label: "梁山县",
                        value: "370832"
                    }, {
                        label: "济宁高新技术产业开发区",
                        value: "370871"
                    }, {
                        label: "曲阜市",
                        value: "370881"
                    }, {
                        label: "邹城市",
                        value: "370883"
                    }]
                }, {
                    label: "泰安市",
                    value: "3709",
                    children: [{
                        label: "泰山区",
                        value: "370902"
                    }, {
                        label: "岱岳区",
                        value: "370911"
                    }, {
                        label: "宁阳县",
                        value: "370921"
                    }, {
                        label: "东平县",
                        value: "370923"
                    }, {
                        label: "新泰市",
                        value: "370982"
                    }, {
                        label: "肥城市",
                        value: "370983"
                    }]
                }, {
                    label: "威海市",
                    value: "3710",
                    children: [{
                        label: "环翠区",
                        value: "371002"
                    }, {
                        label: "文登区",
                        value: "371003"
                    }, {
                        label: "威海火炬高技术产业开发区",
                        value: "371071"
                    }, {
                        label: "威海经济技术开发区",
                        value: "371072"
                    }, {
                        label: "威海临港经济技术开发区",
                        value: "371073"
                    }, {
                        label: "荣成市",
                        value: "371082"
                    }, {
                        label: "乳山市",
                        value: "371083"
                    }]
                }, {
                    label: "日照市",
                    value: "3711",
                    children: [{
                        label: "东港区",
                        value: "371102"
                    }, {
                        label: "岚山区",
                        value: "371103"
                    }, {
                        label: "五莲县",
                        value: "371121"
                    }, {
                        label: "莒县",
                        value: "371122"
                    }, {
                        label: "日照经济技术开发区",
                        value: "371171"
                    }, {
                        label: "日照国际海洋城",
                        value: "371172"
                    }]
                }, {
                    label: "莱芜市",
                    value: "3712",
                    children: [{
                        label: "莱城区",
                        value: "371202"
                    }, {
                        label: "钢城区",
                        value: "371203"
                    }]
                }, {
                    label: "临沂市",
                    value: "3713",
                    children: [{
                        label: "兰山区",
                        value: "371302"
                    }, {
                        label: "罗庄区",
                        value: "371311"
                    }, {
                        label: "河东区",
                        value: "371312"
                    }, {
                        label: "沂南县",
                        value: "371321"
                    }, {
                        label: "郯城县",
                        value: "371322"
                    }, {
                        label: "沂水县",
                        value: "371323"
                    }, {
                        label: "兰陵县",
                        value: "371324"
                    }, {
                        label: "费县",
                        value: "371325"
                    }, {
                        label: "平邑县",
                        value: "371326"
                    }, {
                        label: "莒南县",
                        value: "371327"
                    }, {
                        label: "蒙阴县",
                        value: "371328"
                    }, {
                        label: "临沭县",
                        value: "371329"
                    }, {
                        label: "临沂高新技术产业开发区",
                        value: "371371"
                    }, {
                        label: "临沂经济技术开发区",
                        value: "371372"
                    }, {
                        label: "临沂临港经济开发区",
                        value: "371373"
                    }]
                }, {
                    label: "德州市",
                    value: "3714",
                    children: [{
                        label: "德城区",
                        value: "371402"
                    }, {
                        label: "陵城区",
                        value: "371403"
                    }, {
                        label: "宁津县",
                        value: "371422"
                    }, {
                        label: "庆云县",
                        value: "371423"
                    }, {
                        label: "临邑县",
                        value: "371424"
                    }, {
                        label: "齐河县",
                        value: "371425"
                    }, {
                        label: "平原县",
                        value: "371426"
                    }, {
                        label: "夏津县",
                        value: "371427"
                    }, {
                        label: "武城县",
                        value: "371428"
                    }, {
                        label: "德州经济技术开发区",
                        value: "371471"
                    }, {
                        label: "德州运河经济开发区",
                        value: "371472"
                    }, {
                        label: "乐陵市",
                        value: "371481"
                    }, {
                        label: "禹城市",
                        value: "371482"
                    }]
                }, {
                    label: "聊城市",
                    value: "3715",
                    children: [{
                        label: "东昌府区",
                        value: "371502"
                    }, {
                        label: "阳谷县",
                        value: "371521"
                    }, {
                        label: "莘县",
                        value: "371522"
                    }, {
                        label: "茌平县",
                        value: "371523"
                    }, {
                        label: "东阿县",
                        value: "371524"
                    }, {
                        label: "冠县",
                        value: "371525"
                    }, {
                        label: "高唐县",
                        value: "371526"
                    }, {
                        label: "临清市",
                        value: "371581"
                    }]
                }, {
                    label: "滨州市",
                    value: "3716",
                    children: [{
                        label: "滨城区",
                        value: "371602"
                    }, {
                        label: "沾化区",
                        value: "371603"
                    }, {
                        label: "惠民县",
                        value: "371621"
                    }, {
                        label: "阳信县",
                        value: "371622"
                    }, {
                        label: "无棣县",
                        value: "371623"
                    }, {
                        label: "博兴县",
                        value: "371625"
                    }, {
                        label: "邹平县",
                        value: "371626"
                    }]
                }, {
                    label: "菏泽市",
                    value: "3717",
                    children: [{
                        label: "牡丹区",
                        value: "371702"
                    }, {
                        label: "定陶区",
                        value: "371703"
                    }, {
                        label: "曹县",
                        value: "371721"
                    }, {
                        label: "单县",
                        value: "371722"
                    }, {
                        label: "成武县",
                        value: "371723"
                    }, {
                        label: "巨野县",
                        value: "371724"
                    }, {
                        label: "郓城县",
                        value: "371725"
                    }, {
                        label: "鄄城县",
                        value: "371726"
                    }, {
                        label: "东明县",
                        value: "371728"
                    }, {
                        label: "菏泽经济技术开发区",
                        value: "371771"
                    }, {
                        label: "菏泽高新技术开发区",
                        value: "371772"
                    }]
                }]
            }, {
                label: "河南",
                value: "41",
                children: [{
                    label: "郑州市",
                    value: "4101",
                    children: [{
                        label: "中原区",
                        value: "410102"
                    }, {
                        label: "二七区",
                        value: "410103"
                    }, {
                        label: "管城回族区",
                        value: "410104"
                    }, {
                        label: "金水区",
                        value: "410105"
                    }, {
                        label: "上街区",
                        value: "410106"
                    }, {
                        label: "惠济区",
                        value: "410108"
                    }, {
                        label: "中牟县",
                        value: "410122"
                    }, {
                        label: "郑州经济技术开发区",
                        value: "410171"
                    }, {
                        label: "郑州高新技术产业开发区",
                        value: "410172"
                    }, {
                        label: "郑州航空港经济综合实验区",
                        value: "410173"
                    }, {
                        label: "巩义市",
                        value: "410181"
                    }, {
                        label: "荥阳市",
                        value: "410182"
                    }, {
                        label: "新密市",
                        value: "410183"
                    }, {
                        label: "新郑市",
                        value: "410184"
                    }, {
                        label: "登封市",
                        value: "410185"
                    }]
                }, {
                    label: "开封市",
                    value: "4102",
                    children: [{
                        label: "龙亭区",
                        value: "410202"
                    }, {
                        label: "顺河回族区",
                        value: "410203"
                    }, {
                        label: "鼓楼区",
                        value: "410204"
                    }, {
                        label: "禹王台区",
                        value: "410205"
                    }, {
                        label: "祥符区",
                        value: "410212"
                    }, {
                        label: "杞县",
                        value: "410221"
                    }, {
                        label: "通许县",
                        value: "410222"
                    }, {
                        label: "尉氏县",
                        value: "410223"
                    }, {
                        label: "兰考县",
                        value: "410225"
                    }]
                }, {
                    label: "洛阳市",
                    value: "4103",
                    children: [{
                        label: "老城区",
                        value: "410302"
                    }, {
                        label: "西工区",
                        value: "410303"
                    }, {
                        label: "瀍河回族区",
                        value: "410304"
                    }, {
                        label: "涧西区",
                        value: "410305"
                    }, {
                        label: "吉利区",
                        value: "410306"
                    }, {
                        label: "洛龙区",
                        value: "410311"
                    }, {
                        label: "孟津县",
                        value: "410322"
                    }, {
                        label: "新安县",
                        value: "410323"
                    }, {
                        label: "栾川县",
                        value: "410324"
                    }, {
                        label: "嵩县",
                        value: "410325"
                    }, {
                        label: "汝阳县",
                        value: "410326"
                    }, {
                        label: "宜阳县",
                        value: "410327"
                    }, {
                        label: "洛宁县",
                        value: "410328"
                    }, {
                        label: "伊川县",
                        value: "410329"
                    }, {
                        label: "洛阳高新技术产业开发区",
                        value: "410371"
                    }, {
                        label: "偃师市",
                        value: "410381"
                    }]
                }, {
                    label: "平顶山市",
                    value: "4104",
                    children: [{
                        label: "新华区",
                        value: "410402"
                    }, {
                        label: "卫东区",
                        value: "410403"
                    }, {
                        label: "石龙区",
                        value: "410404"
                    }, {
                        label: "湛河区",
                        value: "410411"
                    }, {
                        label: "宝丰县",
                        value: "410421"
                    }, {
                        label: "叶县",
                        value: "410422"
                    }, {
                        label: "鲁山县",
                        value: "410423"
                    }, {
                        label: "郏县",
                        value: "410425"
                    }, {
                        label: "平顶山高新技术产业开发区",
                        value: "410471"
                    }, {
                        label: "平顶山市新城区",
                        value: "410472"
                    }, {
                        label: "舞钢市",
                        value: "410481"
                    }, {
                        label: "汝州市",
                        value: "410482"
                    }]
                }, {
                    label: "安阳市",
                    value: "4105",
                    children: [{
                        label: "文峰区",
                        value: "410502"
                    }, {
                        label: "北关区",
                        value: "410503"
                    }, {
                        label: "殷都区",
                        value: "410505"
                    }, {
                        label: "龙安区",
                        value: "410506"
                    }, {
                        label: "安阳县",
                        value: "410522"
                    }, {
                        label: "汤阴县",
                        value: "410523"
                    }, {
                        label: "滑县",
                        value: "410526"
                    }, {
                        label: "内黄县",
                        value: "410527"
                    }, {
                        label: "安阳高新技术产业开发区",
                        value: "410571"
                    }, {
                        label: "林州市",
                        value: "410581"
                    }]
                }, {
                    label: "鹤壁市",
                    value: "4106",
                    children: [{
                        label: "鹤山区",
                        value: "410602"
                    }, {
                        label: "山城区",
                        value: "410603"
                    }, {
                        label: "淇滨区",
                        value: "410611"
                    }, {
                        label: "浚县",
                        value: "410621"
                    }, {
                        label: "淇县",
                        value: "410622"
                    }, {
                        label: "鹤壁经济技术开发区",
                        value: "410671"
                    }]
                }, {
                    label: "新乡市",
                    value: "4107",
                    children: [{
                        label: "红旗区",
                        value: "410702"
                    }, {
                        label: "卫滨区",
                        value: "410703"
                    }, {
                        label: "凤泉区",
                        value: "410704"
                    }, {
                        label: "牧野区",
                        value: "410711"
                    }, {
                        label: "新乡县",
                        value: "410721"
                    }, {
                        label: "获嘉县",
                        value: "410724"
                    }, {
                        label: "原阳县",
                        value: "410725"
                    }, {
                        label: "延津县",
                        value: "410726"
                    }, {
                        label: "封丘县",
                        value: "410727"
                    }, {
                        label: "长垣县",
                        value: "410728"
                    }, {
                        label: "新乡高新技术产业开发区",
                        value: "410771"
                    }, {
                        label: "新乡经济技术开发区",
                        value: "410772"
                    }, {
                        label: "新乡市平原城乡一体化示范区",
                        value: "410773"
                    }, {
                        label: "卫辉市",
                        value: "410781"
                    }, {
                        label: "辉县市",
                        value: "410782"
                    }]
                }, {
                    label: "焦作市",
                    value: "4108",
                    children: [{
                        label: "解放区",
                        value: "410802"
                    }, {
                        label: "中站区",
                        value: "410803"
                    }, {
                        label: "马村区",
                        value: "410804"
                    }, {
                        label: "山阳区",
                        value: "410811"
                    }, {
                        label: "修武县",
                        value: "410821"
                    }, {
                        label: "博爱县",
                        value: "410822"
                    }, {
                        label: "武陟县",
                        value: "410823"
                    }, {
                        label: "温县",
                        value: "410825"
                    }, {
                        label: "焦作城乡一体化示范区",
                        value: "410871"
                    }, {
                        label: "沁阳市",
                        value: "410882"
                    }, {
                        label: "孟州市",
                        value: "410883"
                    }]
                }, {
                    label: "濮阳市",
                    value: "4109",
                    children: [{
                        label: "华龙区",
                        value: "410902"
                    }, {
                        label: "清丰县",
                        value: "410922"
                    }, {
                        label: "南乐县",
                        value: "410923"
                    }, {
                        label: "范县",
                        value: "410926"
                    }, {
                        label: "台前县",
                        value: "410927"
                    }, {
                        label: "濮阳县",
                        value: "410928"
                    }, {
                        label: "河南濮阳工业园区",
                        value: "410971"
                    }, {
                        label: "濮阳经济技术开发区",
                        value: "410972"
                    }]
                }, {
                    label: "许昌市",
                    value: "4110",
                    children: [{
                        label: "魏都区",
                        value: "411002"
                    }, {
                        label: "建安区",
                        value: "411003"
                    }, {
                        label: "鄢陵县",
                        value: "411024"
                    }, {
                        label: "襄城县",
                        value: "411025"
                    }, {
                        label: "许昌经济技术开发区",
                        value: "411071"
                    }, {
                        label: "禹州市",
                        value: "411081"
                    }, {
                        label: "长葛市",
                        value: "411082"
                    }]
                }, {
                    label: "漯河市",
                    value: "4111",
                    children: [{
                        label: "源汇区",
                        value: "411102"
                    }, {
                        label: "郾城区",
                        value: "411103"
                    }, {
                        label: "召陵区",
                        value: "411104"
                    }, {
                        label: "舞阳县",
                        value: "411121"
                    }, {
                        label: "临颍县",
                        value: "411122"
                    }, {
                        label: "漯河经济技术开发区",
                        value: "411171"
                    }]
                }, {
                    label: "三门峡市",
                    value: "4112",
                    children: [{
                        label: "湖滨区",
                        value: "411202"
                    }, {
                        label: "陕州区",
                        value: "411203"
                    }, {
                        label: "渑池县",
                        value: "411221"
                    }, {
                        label: "卢氏县",
                        value: "411224"
                    }, {
                        label: "河南三门峡经济开发区",
                        value: "411271"
                    }, {
                        label: "义马市",
                        value: "411281"
                    }, {
                        label: "灵宝市",
                        value: "411282"
                    }]
                }, {
                    label: "南阳市",
                    value: "4113",
                    children: [{
                        label: "宛城区",
                        value: "411302"
                    }, {
                        label: "卧龙区",
                        value: "411303"
                    }, {
                        label: "南召县",
                        value: "411321"
                    }, {
                        label: "方城县",
                        value: "411322"
                    }, {
                        label: "西峡县",
                        value: "411323"
                    }, {
                        label: "镇平县",
                        value: "411324"
                    }, {
                        label: "内乡县",
                        value: "411325"
                    }, {
                        label: "淅川县",
                        value: "411326"
                    }, {
                        label: "社旗县",
                        value: "411327"
                    }, {
                        label: "唐河县",
                        value: "411328"
                    }, {
                        label: "新野县",
                        value: "411329"
                    }, {
                        label: "桐柏县",
                        value: "411330"
                    }, {
                        label: "南阳高新技术产业开发区",
                        value: "411371"
                    }, {
                        label: "南阳市城乡一体化示范区",
                        value: "411372"
                    }, {
                        label: "邓州市",
                        value: "411381"
                    }]
                }, {
                    label: "商丘市",
                    value: "4114",
                    children: [{
                        label: "梁园区",
                        value: "411402"
                    }, {
                        label: "睢阳区",
                        value: "411403"
                    }, {
                        label: "民权县",
                        value: "411421"
                    }, {
                        label: "睢县",
                        value: "411422"
                    }, {
                        label: "宁陵县",
                        value: "411423"
                    }, {
                        label: "柘城县",
                        value: "411424"
                    }, {
                        label: "虞城县",
                        value: "411425"
                    }, {
                        label: "夏邑县",
                        value: "411426"
                    }, {
                        label: "豫东综合物流产业聚集区",
                        value: "411471"
                    }, {
                        label: "河南商丘经济开发区",
                        value: "411472"
                    }, {
                        label: "永城市",
                        value: "411481"
                    }]
                }, {
                    label: "信阳市",
                    value: "4115",
                    children: [{
                        label: "浉河区",
                        value: "411502"
                    }, {
                        label: "平桥区",
                        value: "411503"
                    }, {
                        label: "罗山县",
                        value: "411521"
                    }, {
                        label: "光山县",
                        value: "411522"
                    }, {
                        label: "新县",
                        value: "411523"
                    }, {
                        label: "商城县",
                        value: "411524"
                    }, {
                        label: "固始县",
                        value: "411525"
                    }, {
                        label: "潢川县",
                        value: "411526"
                    }, {
                        label: "淮滨县",
                        value: "411527"
                    }, {
                        label: "息县",
                        value: "411528"
                    }, {
                        label: "信阳高新技术产业开发区",
                        value: "411571"
                    }]
                }, {
                    label: "周口市",
                    value: "4116",
                    children: [{
                        label: "川汇区",
                        value: "411602"
                    }, {
                        label: "扶沟县",
                        value: "411621"
                    }, {
                        label: "西华县",
                        value: "411622"
                    }, {
                        label: "商水县",
                        value: "411623"
                    }, {
                        label: "沈丘县",
                        value: "411624"
                    }, {
                        label: "郸城县",
                        value: "411625"
                    }, {
                        label: "淮阳县",
                        value: "411626"
                    }, {
                        label: "太康县",
                        value: "411627"
                    }, {
                        label: "鹿邑县",
                        value: "411628"
                    }, {
                        label: "河南周口经济开发区",
                        value: "411671"
                    }, {
                        label: "项城市",
                        value: "411681"
                    }]
                }, {
                    label: "驻马店市",
                    value: "4117",
                    children: [{
                        label: "驿城区",
                        value: "411702"
                    }, {
                        label: "西平县",
                        value: "411721"
                    }, {
                        label: "上蔡县",
                        value: "411722"
                    }, {
                        label: "平舆县",
                        value: "411723"
                    }, {
                        label: "正阳县",
                        value: "411724"
                    }, {
                        label: "确山县",
                        value: "411725"
                    }, {
                        label: "泌阳县",
                        value: "411726"
                    }, {
                        label: "汝南县",
                        value: "411727"
                    }, {
                        label: "遂平县",
                        value: "411728"
                    }, {
                        label: "新蔡县",
                        value: "411729"
                    }, {
                        label: "河南驻马店经济开发区",
                        value: "411771"
                    }]
                }, {
                    label: "省直辖县级行政区划",
                    value: "4190",
                    children: [{
                        label: "济源市",
                        value: "419001"
                    }]
                }]
            }, {
                label: "湖北",
                value: "42",
                children: [{
                    label: "武汉市",
                    value: "4201",
                    children: [{
                        label: "江岸区",
                        value: "420102"
                    }, {
                        label: "江汉区",
                        value: "420103"
                    }, {
                        label: "硚口区",
                        value: "420104"
                    }, {
                        label: "汉阳区",
                        value: "420105"
                    }, {
                        label: "武昌区",
                        value: "420106"
                    }, {
                        label: "青山区",
                        value: "420107"
                    }, {
                        label: "洪山区",
                        value: "420111"
                    }, {
                        label: "东西湖区",
                        value: "420112"
                    }, {
                        label: "汉南区",
                        value: "420113"
                    }, {
                        label: "蔡甸区",
                        value: "420114"
                    }, {
                        label: "江夏区",
                        value: "420115"
                    }, {
                        label: "黄陂区",
                        value: "420116"
                    }, {
                        label: "新洲区",
                        value: "420117"
                    }]
                }, {
                    label: "黄石市",
                    value: "4202",
                    children: [{
                        label: "黄石港区",
                        value: "420202"
                    }, {
                        label: "西塞山区",
                        value: "420203"
                    }, {
                        label: "下陆区",
                        value: "420204"
                    }, {
                        label: "铁山区",
                        value: "420205"
                    }, {
                        label: "阳新县",
                        value: "420222"
                    }, {
                        label: "大冶市",
                        value: "420281"
                    }]
                }, {
                    label: "十堰市",
                    value: "4203",
                    children: [{
                        label: "茅箭区",
                        value: "420302"
                    }, {
                        label: "张湾区",
                        value: "420303"
                    }, {
                        label: "郧阳区",
                        value: "420304"
                    }, {
                        label: "郧西县",
                        value: "420322"
                    }, {
                        label: "竹山县",
                        value: "420323"
                    }, {
                        label: "竹溪县",
                        value: "420324"
                    }, {
                        label: "房县",
                        value: "420325"
                    }, {
                        label: "丹江口市",
                        value: "420381"
                    }]
                }, {
                    label: "宜昌市",
                    value: "4205",
                    children: [{
                        label: "西陵区",
                        value: "420502"
                    }, {
                        label: "伍家岗区",
                        value: "420503"
                    }, {
                        label: "点军区",
                        value: "420504"
                    }, {
                        label: "V亭区",
                        value: "420505"
                    }, {
                        label: "夷陵区",
                        value: "420506"
                    }, {
                        label: "远安县",
                        value: "420525"
                    }, {
                        label: "兴山县",
                        value: "420526"
                    }, {
                        label: "秭归县",
                        value: "420527"
                    }, {
                        label: "长阳土家族自治县",
                        value: "420528"
                    }, {
                        label: "五峰土家族自治县",
                        value: "420529"
                    }, {
                        label: "宜都市",
                        value: "420581"
                    }, {
                        label: "当阳市",
                        value: "420582"
                    }, {
                        label: "枝江市",
                        value: "420583"
                    }]
                }, {
                    label: "襄阳市",
                    value: "4206",
                    children: [{
                        label: "襄城区",
                        value: "420602"
                    }, {
                        label: "樊城区",
                        value: "420606"
                    }, {
                        label: "襄州区",
                        value: "420607"
                    }, {
                        label: "南漳县",
                        value: "420624"
                    }, {
                        label: "谷城县",
                        value: "420625"
                    }, {
                        label: "保康县",
                        value: "420626"
                    }, {
                        label: "老河口市",
                        value: "420682"
                    }, {
                        label: "枣阳市",
                        value: "420683"
                    }, {
                        label: "宜城市",
                        value: "420684"
                    }]
                }, {
                    label: "鄂州市",
                    value: "4207",
                    children: [{
                        label: "梁子湖区",
                        value: "420702"
                    }, {
                        label: "华容区",
                        value: "420703"
                    }, {
                        label: "鄂城区",
                        value: "420704"
                    }]
                }, {
                    label: "荆门市",
                    value: "4208",
                    children: [{
                        label: "东宝区",
                        value: "420802"
                    }, {
                        label: "掇刀区",
                        value: "420804"
                    }, {
                        label: "京山县",
                        value: "420821"
                    }, {
                        label: "沙洋县",
                        value: "420822"
                    }, {
                        label: "钟祥市",
                        value: "420881"
                    }]
                }, {
                    label: "孝感市",
                    value: "4209",
                    children: [{
                        label: "孝南区",
                        value: "420902"
                    }, {
                        label: "孝昌县",
                        value: "420921"
                    }, {
                        label: "大悟县",
                        value: "420922"
                    }, {
                        label: "云梦县",
                        value: "420923"
                    }, {
                        label: "应城市",
                        value: "420981"
                    }, {
                        label: "安陆市",
                        value: "420982"
                    }, {
                        label: "汉川市",
                        value: "420984"
                    }]
                }, {
                    label: "荆州市",
                    value: "4210",
                    children: [{
                        label: "沙市区",
                        value: "421002"
                    }, {
                        label: "荆州区",
                        value: "421003"
                    }, {
                        label: "公安县",
                        value: "421022"
                    }, {
                        label: "监利县",
                        value: "421023"
                    }, {
                        label: "江陵县",
                        value: "421024"
                    }, {
                        label: "荆州经济技术开发区",
                        value: "421071"
                    }, {
                        label: "石首市",
                        value: "421081"
                    }, {
                        label: "洪湖市",
                        value: "421083"
                    }, {
                        label: "松滋市",
                        value: "421087"
                    }]
                }, {
                    label: "黄冈市",
                    value: "4211",
                    children: [{
                        label: "黄州区",
                        value: "421102"
                    }, {
                        label: "团风县",
                        value: "421121"
                    }, {
                        label: "红安县",
                        value: "421122"
                    }, {
                        label: "罗田县",
                        value: "421123"
                    }, {
                        label: "英山县",
                        value: "421124"
                    }, {
                        label: "浠水县",
                        value: "421125"
                    }, {
                        label: "蕲春县",
                        value: "421126"
                    }, {
                        label: "黄梅县",
                        value: "421127"
                    }, {
                        label: "龙感湖管理区",
                        value: "421171"
                    }, {
                        label: "麻城市",
                        value: "421181"
                    }, {
                        label: "武穴市",
                        value: "421182"
                    }]
                }, {
                    label: "咸宁市",
                    value: "4212",
                    children: [{
                        label: "咸安区",
                        value: "421202"
                    }, {
                        label: "嘉鱼县",
                        value: "421221"
                    }, {
                        label: "通城县",
                        value: "421222"
                    }, {
                        label: "崇阳县",
                        value: "421223"
                    }, {
                        label: "通山县",
                        value: "421224"
                    }, {
                        label: "赤壁市",
                        value: "421281"
                    }]
                }, {
                    label: "随州市",
                    value: "4213",
                    children: [{
                        label: "曾都区",
                        value: "421303"
                    }, {
                        label: "随县",
                        value: "421321"
                    }, {
                        label: "广水市",
                        value: "421381"
                    }]
                }, {
                    label: "恩施土家族苗族自治州",
                    value: "4228",
                    children: [{
                        label: "恩施市",
                        value: "422801"
                    }, {
                        label: "利川市",
                        value: "422802"
                    }, {
                        label: "建始县",
                        value: "422822"
                    }, {
                        label: "巴东县",
                        value: "422823"
                    }, {
                        label: "宣恩县",
                        value: "422825"
                    }, {
                        label: "咸丰县",
                        value: "422826"
                    }, {
                        label: "来凤县",
                        value: "422827"
                    }, {
                        label: "鹤峰县",
                        value: "422828"
                    }]
                }, {
                    label: "省直辖县级行政区划",
                    value: "4290",
                    children: [{
                        label: "仙桃市",
                        value: "429004"
                    }, {
                        label: "潜江市",
                        value: "429005"
                    }, {
                        label: "天门市",
                        value: "429006"
                    }, {
                        label: "神农架林区",
                        value: "429021"
                    }]
                }]
            }, {
                label: "湖南",
                value: "43",
                children: [{
                    label: "长沙市",
                    value: "4301",
                    children: [{
                        label: "芙蓉区",
                        value: "430102"
                    }, {
                        label: "天心区",
                        value: "430103"
                    }, {
                        label: "岳麓区",
                        value: "430104"
                    }, {
                        label: "开福区",
                        value: "430105"
                    }, {
                        label: "雨花区",
                        value: "430111"
                    }, {
                        label: "望城区",
                        value: "430112"
                    }, {
                        label: "长沙县",
                        value: "430121"
                    }, {
                        label: "浏阳市",
                        value: "430181"
                    }, {
                        label: "宁乡市",
                        value: "430182"
                    }]
                }, {
                    label: "株洲市",
                    value: "4302",
                    children: [{
                        label: "荷塘区",
                        value: "430202"
                    }, {
                        label: "芦淞区",
                        value: "430203"
                    }, {
                        label: "石峰区",
                        value: "430204"
                    }, {
                        label: "天元区",
                        value: "430211"
                    }, {
                        label: "株洲县",
                        value: "430221"
                    }, {
                        label: "攸县",
                        value: "430223"
                    }, {
                        label: "茶陵县",
                        value: "430224"
                    }, {
                        label: "炎陵县",
                        value: "430225"
                    }, {
                        label: "云龙示范区",
                        value: "430271"
                    }, {
                        label: "醴陵市",
                        value: "430281"
                    }]
                }, {
                    label: "湘潭市",
                    value: "4303",
                    children: [{
                        label: "雨湖区",
                        value: "430302"
                    }, {
                        label: "岳塘区",
                        value: "430304"
                    }, {
                        label: "湘潭县",
                        value: "430321"
                    }, {
                        label: "湖南湘潭高新技术产业园区",
                        value: "430371"
                    }, {
                        label: "湘潭昭山示范区",
                        value: "430372"
                    }, {
                        label: "湘潭九华示范区",
                        value: "430373"
                    }, {
                        label: "湘乡市",
                        value: "430381"
                    }, {
                        label: "韶山市",
                        value: "430382"
                    }]
                }, {
                    label: "衡阳市",
                    value: "4304",
                    children: [{
                        label: "珠晖区",
                        value: "430405"
                    }, {
                        label: "雁峰区",
                        value: "430406"
                    }, {
                        label: "石鼓区",
                        value: "430407"
                    }, {
                        label: "蒸湘区",
                        value: "430408"
                    }, {
                        label: "南岳区",
                        value: "430412"
                    }, {
                        label: "衡阳县",
                        value: "430421"
                    }, {
                        label: "衡南县",
                        value: "430422"
                    }, {
                        label: "衡山县",
                        value: "430423"
                    }, {
                        label: "衡东县",
                        value: "430424"
                    }, {
                        label: "祁东县",
                        value: "430426"
                    }, {
                        label: "衡阳综合保税区",
                        value: "430471"
                    }, {
                        label: "湖南衡阳高新技术产业园区",
                        value: "430472"
                    }, {
                        label: "湖南衡阳松木经济开发区",
                        value: "430473"
                    }, {
                        label: "耒阳市",
                        value: "430481"
                    }, {
                        label: "常宁市",
                        value: "430482"
                    }]
                }, {
                    label: "邵阳市",
                    value: "4305",
                    children: [{
                        label: "双清区",
                        value: "430502"
                    }, {
                        label: "大祥区",
                        value: "430503"
                    }, {
                        label: "北塔区",
                        value: "430511"
                    }, {
                        label: "邵东县",
                        value: "430521"
                    }, {
                        label: "新邵县",
                        value: "430522"
                    }, {
                        label: "邵阳县",
                        value: "430523"
                    }, {
                        label: "隆回县",
                        value: "430524"
                    }, {
                        label: "洞口县",
                        value: "430525"
                    }, {
                        label: "绥宁县",
                        value: "430527"
                    }, {
                        label: "新宁县",
                        value: "430528"
                    }, {
                        label: "城步苗族自治县",
                        value: "430529"
                    }, {
                        label: "武冈市",
                        value: "430581"
                    }]
                }, {
                    label: "岳阳市",
                    value: "4306",
                    children: [{
                        label: "岳阳楼区",
                        value: "430602"
                    }, {
                        label: "云溪区",
                        value: "430603"
                    }, {
                        label: "君山区",
                        value: "430611"
                    }, {
                        label: "岳阳县",
                        value: "430621"
                    }, {
                        label: "华容县",
                        value: "430623"
                    }, {
                        label: "湘阴县",
                        value: "430624"
                    }, {
                        label: "平江县",
                        value: "430626"
                    }, {
                        label: "岳阳市屈原管理区",
                        value: "430671"
                    }, {
                        label: "汨罗市",
                        value: "430681"
                    }, {
                        label: "临湘市",
                        value: "430682"
                    }]
                }, {
                    label: "常德市",
                    value: "4307",
                    children: [{
                        label: "武陵区",
                        value: "430702"
                    }, {
                        label: "鼎城区",
                        value: "430703"
                    }, {
                        label: "安乡县",
                        value: "430721"
                    }, {
                        label: "汉寿县",
                        value: "430722"
                    }, {
                        label: "澧县",
                        value: "430723"
                    }, {
                        label: "临澧县",
                        value: "430724"
                    }, {
                        label: "桃源县",
                        value: "430725"
                    }, {
                        label: "石门县",
                        value: "430726"
                    }, {
                        label: "常德市西洞庭管理区",
                        value: "430771"
                    }, {
                        label: "津市市",
                        value: "430781"
                    }]
                }, {
                    label: "张家界市",
                    value: "4308",
                    children: [{
                        label: "永定区",
                        value: "430802"
                    }, {
                        label: "武陵源区",
                        value: "430811"
                    }, {
                        label: "慈利县",
                        value: "430821"
                    }, {
                        label: "桑植县",
                        value: "430822"
                    }]
                }, {
                    label: "益阳市",
                    value: "4309",
                    children: [{
                        label: "资阳区",
                        value: "430902"
                    }, {
                        label: "赫山区",
                        value: "430903"
                    }, {
                        label: "南县",
                        value: "430921"
                    }, {
                        label: "桃江县",
                        value: "430922"
                    }, {
                        label: "安化县",
                        value: "430923"
                    }, {
                        label: "益阳市大通湖管理区",
                        value: "430971"
                    }, {
                        label: "湖南益阳高新技术产业园区",
                        value: "430972"
                    }, {
                        label: "沅江市",
                        value: "430981"
                    }]
                }, {
                    label: "郴州市",
                    value: "4310",
                    children: [{
                        label: "北湖区",
                        value: "431002"
                    }, {
                        label: "苏仙区",
                        value: "431003"
                    }, {
                        label: "桂阳县",
                        value: "431021"
                    }, {
                        label: "宜章县",
                        value: "431022"
                    }, {
                        label: "永兴县",
                        value: "431023"
                    }, {
                        label: "嘉禾县",
                        value: "431024"
                    }, {
                        label: "临武县",
                        value: "431025"
                    }, {
                        label: "汝城县",
                        value: "431026"
                    }, {
                        label: "桂东县",
                        value: "431027"
                    }, {
                        label: "安仁县",
                        value: "431028"
                    }, {
                        label: "资兴市",
                        value: "431081"
                    }]
                }, {
                    label: "永州市",
                    value: "4311",
                    children: [{
                        label: "零陵区",
                        value: "431102"
                    }, {
                        label: "冷水滩区",
                        value: "431103"
                    }, {
                        label: "祁阳县",
                        value: "431121"
                    }, {
                        label: "东安县",
                        value: "431122"
                    }, {
                        label: "双牌县",
                        value: "431123"
                    }, {
                        label: "道县",
                        value: "431124"
                    }, {
                        label: "江永县",
                        value: "431125"
                    }, {
                        label: "宁远县",
                        value: "431126"
                    }, {
                        label: "蓝山县",
                        value: "431127"
                    }, {
                        label: "新田县",
                        value: "431128"
                    }, {
                        label: "江华瑶族自治县",
                        value: "431129"
                    }, {
                        label: "永州经济技术开发区",
                        value: "431171"
                    }, {
                        label: "永州市金洞管理区",
                        value: "431172"
                    }, {
                        label: "永州市回龙圩管理区",
                        value: "431173"
                    }]
                }, {
                    label: "怀化市",
                    value: "4312",
                    children: [{
                        label: "鹤城区",
                        value: "431202"
                    }, {
                        label: "中方县",
                        value: "431221"
                    }, {
                        label: "沅陵县",
                        value: "431222"
                    }, {
                        label: "辰溪县",
                        value: "431223"
                    }, {
                        label: "溆浦县",
                        value: "431224"
                    }, {
                        label: "会同县",
                        value: "431225"
                    }, {
                        label: "麻阳苗族自治县",
                        value: "431226"
                    }, {
                        label: "新晃侗族自治县",
                        value: "431227"
                    }, {
                        label: "芷江侗族自治县",
                        value: "431228"
                    }, {
                        label: "靖州苗族侗族自治县",
                        value: "431229"
                    }, {
                        label: "通道侗族自治县",
                        value: "431230"
                    }, {
                        label: "怀化市洪江管理区",
                        value: "431271"
                    }, {
                        label: "洪江市",
                        value: "431281"
                    }]
                }, {
                    label: "娄底市",
                    value: "4313",
                    children: [{
                        label: "娄星区",
                        value: "431302"
                    }, {
                        label: "双峰县",
                        value: "431321"
                    }, {
                        label: "新化县",
                        value: "431322"
                    }, {
                        label: "冷水江市",
                        value: "431381"
                    }, {
                        label: "涟源市",
                        value: "431382"
                    }]
                }, {
                    label: "湘西土家族苗族自治州",
                    value: "4331",
                    children: [{
                        label: "吉首市",
                        value: "433101"
                    }, {
                        label: "泸溪县",
                        value: "433122"
                    }, {
                        label: "凤凰县",
                        value: "433123"
                    }, {
                        label: "花垣县",
                        value: "433124"
                    }, {
                        label: "保靖县",
                        value: "433125"
                    }, {
                        label: "古丈县",
                        value: "433126"
                    }, {
                        label: "永顺县",
                        value: "433127"
                    }, {
                        label: "龙山县",
                        value: "433130"
                    }, {
                        label: "湖南吉首经济开发区",
                        value: "433172"
                    }, {
                        label: "湖南永顺经济开发区",
                        value: "433173"
                    }]
                }]
            }, {
                label: "广东",
                value: "44",
                children: [{
                    label: "广州市",
                    value: "4401",
                    children: [{
                        label: "荔湾区",
                        value: "440103"
                    }, {
                        label: "越秀区",
                        value: "440104"
                    }, {
                        label: "海珠区",
                        value: "440105"
                    }, {
                        label: "天河区",
                        value: "440106"
                    }, {
                        label: "白云区",
                        value: "440111"
                    }, {
                        label: "黄埔区",
                        value: "440112"
                    }, {
                        label: "番禺区",
                        value: "440113"
                    }, {
                        label: "花都区",
                        value: "440114"
                    }, {
                        label: "南沙区",
                        value: "440115"
                    }, {
                        label: "从化区",
                        value: "440117"
                    }, {
                        label: "增城区",
                        value: "440118"
                    }]
                }, {
                    label: "韶关市",
                    value: "4402",
                    children: [{
                        label: "武江区",
                        value: "440203"
                    }, {
                        label: "浈江区",
                        value: "440204"
                    }, {
                        label: "曲江区",
                        value: "440205"
                    }, {
                        label: "始兴县",
                        value: "440222"
                    }, {
                        label: "仁化县",
                        value: "440224"
                    }, {
                        label: "翁源县",
                        value: "440229"
                    }, {
                        label: "乳源瑶族自治县",
                        value: "440232"
                    }, {
                        label: "新丰县",
                        value: "440233"
                    }, {
                        label: "乐昌市",
                        value: "440281"
                    }, {
                        label: "南雄市",
                        value: "440282"
                    }]
                }, {
                    label: "深圳市",
                    value: "4403",
                    children: [{
                        label: "罗湖区",
                        value: "440303"
                    }, {
                        label: "福田区",
                        value: "440304"
                    }, {
                        label: "南山区",
                        value: "440305"
                    }, {
                        label: "宝安区",
                        value: "440306"
                    }, {
                        label: "龙岗区",
                        value: "440307"
                    }, {
                        label: "盐田区",
                        value: "440308"
                    }, {
                        label: "龙华区",
                        value: "440309"
                    }, {
                        label: "坪山区",
                        value: "440310"
                    }]
                }, {
                    label: "珠海市",
                    value: "4404",
                    children: [{
                        label: "香洲区",
                        value: "440402"
                    }, {
                        label: "斗门区",
                        value: "440403"
                    }, {
                        label: "金湾区",
                        value: "440404"
                    }]
                }, {
                    label: "汕头市",
                    value: "4405",
                    children: [{
                        label: "龙湖区",
                        value: "440507"
                    }, {
                        label: "金平区",
                        value: "440511"
                    }, {
                        label: "濠江区",
                        value: "440512"
                    }, {
                        label: "潮阳区",
                        value: "440513"
                    }, {
                        label: "潮南区",
                        value: "440514"
                    }, {
                        label: "澄海区",
                        value: "440515"
                    }, {
                        label: "南澳县",
                        value: "440523"
                    }]
                }, {
                    label: "佛山市",
                    value: "4406",
                    children: [{
                        label: "禅城区",
                        value: "440604"
                    }, {
                        label: "南海区",
                        value: "440605"
                    }, {
                        label: "顺德区",
                        value: "440606"
                    }, {
                        label: "三水区",
                        value: "440607"
                    }, {
                        label: "高明区",
                        value: "440608"
                    }]
                }, {
                    label: "江门市",
                    value: "4407",
                    children: [{
                        label: "蓬江区",
                        value: "440703"
                    }, {
                        label: "江海区",
                        value: "440704"
                    }, {
                        label: "新会区",
                        value: "440705"
                    }, {
                        label: "台山市",
                        value: "440781"
                    }, {
                        label: "开平市",
                        value: "440783"
                    }, {
                        label: "鹤山市",
                        value: "440784"
                    }, {
                        label: "恩平市",
                        value: "440785"
                    }]
                }, {
                    label: "湛江市",
                    value: "4408",
                    children: [{
                        label: "赤坎区",
                        value: "440802"
                    }, {
                        label: "霞山区",
                        value: "440803"
                    }, {
                        label: "坡头区",
                        value: "440804"
                    }, {
                        label: "麻章区",
                        value: "440811"
                    }, {
                        label: "遂溪县",
                        value: "440823"
                    }, {
                        label: "徐闻县",
                        value: "440825"
                    }, {
                        label: "廉江市",
                        value: "440881"
                    }, {
                        label: "雷州市",
                        value: "440882"
                    }, {
                        label: "吴川市",
                        value: "440883"
                    }]
                }, {
                    label: "茂名市",
                    value: "4409",
                    children: [{
                        label: "茂南区",
                        value: "440902"
                    }, {
                        label: "电白区",
                        value: "440904"
                    }, {
                        label: "高州市",
                        value: "440981"
                    }, {
                        label: "化州市",
                        value: "440982"
                    }, {
                        label: "信宜市",
                        value: "440983"
                    }]
                }, {
                    label: "肇庆市",
                    value: "4412",
                    children: [{
                        label: "端州区",
                        value: "441202"
                    }, {
                        label: "鼎湖区",
                        value: "441203"
                    }, {
                        label: "高要区",
                        value: "441204"
                    }, {
                        label: "广宁县",
                        value: "441223"
                    }, {
                        label: "怀集县",
                        value: "441224"
                    }, {
                        label: "封开县",
                        value: "441225"
                    }, {
                        label: "德庆县",
                        value: "441226"
                    }, {
                        label: "四会市",
                        value: "441284"
                    }]
                }, {
                    label: "惠州市",
                    value: "4413",
                    children: [{
                        label: "惠城区",
                        value: "441302"
                    }, {
                        label: "惠阳区",
                        value: "441303"
                    }, {
                        label: "博罗县",
                        value: "441322"
                    }, {
                        label: "惠东县",
                        value: "441323"
                    }, {
                        label: "龙门县",
                        value: "441324"
                    }]
                }, {
                    label: "梅州市",
                    value: "4414",
                    children: [{
                        label: "梅江区",
                        value: "441402"
                    }, {
                        label: "梅县区",
                        value: "441403"
                    }, {
                        label: "大埔县",
                        value: "441422"
                    }, {
                        label: "丰顺县",
                        value: "441423"
                    }, {
                        label: "五华县",
                        value: "441424"
                    }, {
                        label: "平远县",
                        value: "441426"
                    }, {
                        label: "蕉岭县",
                        value: "441427"
                    }, {
                        label: "兴宁市",
                        value: "441481"
                    }]
                }, {
                    label: "汕尾市",
                    value: "4415",
                    children: [{
                        label: "城区",
                        value: "441502"
                    }, {
                        label: "海丰县",
                        value: "441521"
                    }, {
                        label: "陆河县",
                        value: "441523"
                    }, {
                        label: "陆丰市",
                        value: "441581"
                    }]
                }, {
                    label: "河源市",
                    value: "4416",
                    children: [{
                        label: "源城区",
                        value: "441602"
                    }, {
                        label: "紫金县",
                        value: "441621"
                    }, {
                        label: "龙川县",
                        value: "441622"
                    }, {
                        label: "连平县",
                        value: "441623"
                    }, {
                        label: "和平县",
                        value: "441624"
                    }, {
                        label: "东源县",
                        value: "441625"
                    }]
                }, {
                    label: "阳江市",
                    value: "4417",
                    children: [{
                        label: "江城区",
                        value: "441702"
                    }, {
                        label: "阳东区",
                        value: "441704"
                    }, {
                        label: "阳西县",
                        value: "441721"
                    }, {
                        label: "阳春市",
                        value: "441781"
                    }]
                }, {
                    label: "清远市",
                    value: "4418",
                    children: [{
                        label: "清城区",
                        value: "441802"
                    }, {
                        label: "清新区",
                        value: "441803"
                    }, {
                        label: "佛冈县",
                        value: "441821"
                    }, {
                        label: "阳山县",
                        value: "441823"
                    }, {
                        label: "连山壮族瑶族自治县",
                        value: "441825"
                    }, {
                        label: "连南瑶族自治县",
                        value: "441826"
                    }, {
                        label: "英德市",
                        value: "441881"
                    }, {
                        label: "连州市",
                        value: "441882"
                    }]
                }, {
                    label: "东莞市",
                    value: "4419",
                    children: [{
                        label: "全市",
                        value: "441901"
                    }]
                }, {
                    label: "中山市",
                    value: "4420",
                    children: [{
                        label: "全市",
                        value: "442001"
                    }]
                }, {
                    label: "潮州市",
                    value: "4451",
                    children: [{
                        label: "湘桥区",
                        value: "445102"
                    }, {
                        label: "潮安区",
                        value: "445103"
                    }, {
                        label: "饶平县",
                        value: "445122"
                    }]
                }, {
                    label: "揭阳市",
                    value: "4452",
                    children: [{
                        label: "榕城区",
                        value: "445202"
                    }, {
                        label: "揭东区",
                        value: "445203"
                    }, {
                        label: "揭西县",
                        value: "445222"
                    }, {
                        label: "惠来县",
                        value: "445224"
                    }, {
                        label: "普宁市",
                        value: "445281"
                    }]
                }, {
                    label: "云浮市",
                    value: "4453",
                    children: [{
                        label: "云城区",
                        value: "445302"
                    }, {
                        label: "云安区",
                        value: "445303"
                    }, {
                        label: "新兴县",
                        value: "445321"
                    }, {
                        label: "郁南县",
                        value: "445322"
                    }, {
                        label: "罗定市",
                        value: "445381"
                    }]
                }]
            }, {
                label: "广西",
                value: "45",
                children: [{
                    label: "南宁市",
                    value: "4501",
                    children: [{
                        label: "兴宁区",
                        value: "450102"
                    }, {
                        label: "青秀区",
                        value: "450103"
                    }, {
                        label: "江南区",
                        value: "450105"
                    }, {
                        label: "西乡塘区",
                        value: "450107"
                    }, {
                        label: "良庆区",
                        value: "450108"
                    }, {
                        label: "邕宁区",
                        value: "450109"
                    }, {
                        label: "武鸣区",
                        value: "450110"
                    }, {
                        label: "隆安县",
                        value: "450123"
                    }, {
                        label: "马山县",
                        value: "450124"
                    }, {
                        label: "上林县",
                        value: "450125"
                    }, {
                        label: "宾阳县",
                        value: "450126"
                    }, {
                        label: "横县",
                        value: "450127"
                    }]
                }, {
                    label: "柳州市",
                    value: "4502",
                    children: [{
                        label: "城中区",
                        value: "450202"
                    }, {
                        label: "鱼峰区",
                        value: "450203"
                    }, {
                        label: "柳南区",
                        value: "450204"
                    }, {
                        label: "柳北区",
                        value: "450205"
                    }, {
                        label: "柳江区",
                        value: "450206"
                    }, {
                        label: "柳城县",
                        value: "450222"
                    }, {
                        label: "鹿寨县",
                        value: "450223"
                    }, {
                        label: "融安县",
                        value: "450224"
                    }, {
                        label: "融水苗族自治县",
                        value: "450225"
                    }, {
                        label: "三江侗族自治县",
                        value: "450226"
                    }]
                }, {
                    label: "桂林市",
                    value: "4503",
                    children: [{
                        label: "秀峰区",
                        value: "450302"
                    }, {
                        label: "叠彩区",
                        value: "450303"
                    }, {
                        label: "象山区",
                        value: "450304"
                    }, {
                        label: "七星区",
                        value: "450305"
                    }, {
                        label: "雁山区",
                        value: "450311"
                    }, {
                        label: "临桂区",
                        value: "450312"
                    }, {
                        label: "阳朔县",
                        value: "450321"
                    }, {
                        label: "灵川县",
                        value: "450323"
                    }, {
                        label: "全州县",
                        value: "450324"
                    }, {
                        label: "兴安县",
                        value: "450325"
                    }, {
                        label: "永福县",
                        value: "450326"
                    }, {
                        label: "灌阳县",
                        value: "450327"
                    }, {
                        label: "龙胜各族自治县",
                        value: "450328"
                    }, {
                        label: "资源县",
                        value: "450329"
                    }, {
                        label: "平乐县",
                        value: "450330"
                    }, {
                        label: "荔浦县",
                        value: "450331"
                    }, {
                        label: "恭城瑶族自治县",
                        value: "450332"
                    }]
                }, {
                    label: "梧州市",
                    value: "4504",
                    children: [{
                        label: "万秀区",
                        value: "450403"
                    }, {
                        label: "长洲区",
                        value: "450405"
                    }, {
                        label: "龙圩区",
                        value: "450406"
                    }, {
                        label: "苍梧县",
                        value: "450421"
                    }, {
                        label: "藤县",
                        value: "450422"
                    }, {
                        label: "蒙山县",
                        value: "450423"
                    }, {
                        label: "岑溪市",
                        value: "450481"
                    }]
                }, {
                    label: "北海市",
                    value: "4505",
                    children: [{
                        label: "海城区",
                        value: "450502"
                    }, {
                        label: "银海区",
                        value: "450503"
                    }, {
                        label: "铁山港区",
                        value: "450512"
                    }, {
                        label: "合浦县",
                        value: "450521"
                    }]
                }, {
                    label: "防城港市",
                    value: "4506",
                    children: [{
                        label: "港口区",
                        value: "450602"
                    }, {
                        label: "防城区",
                        value: "450603"
                    }, {
                        label: "上思县",
                        value: "450621"
                    }, {
                        label: "东兴市",
                        value: "450681"
                    }]
                }, {
                    label: "钦州市",
                    value: "4507",
                    children: [{
                        label: "钦南区",
                        value: "450702"
                    }, {
                        label: "钦北区",
                        value: "450703"
                    }, {
                        label: "灵山县",
                        value: "450721"
                    }, {
                        label: "浦北县",
                        value: "450722"
                    }]
                }, {
                    label: "贵港市",
                    value: "4508",
                    children: [{
                        label: "港北区",
                        value: "450802"
                    }, {
                        label: "港南区",
                        value: "450803"
                    }, {
                        label: "覃塘区",
                        value: "450804"
                    }, {
                        label: "平南县",
                        value: "450821"
                    }, {
                        label: "桂平市",
                        value: "450881"
                    }]
                }, {
                    label: "玉林市",
                    value: "4509",
                    children: [{
                        label: "玉州区",
                        value: "450902"
                    }, {
                        label: "福绵区",
                        value: "450903"
                    }, {
                        label: "容县",
                        value: "450921"
                    }, {
                        label: "陆川县",
                        value: "450922"
                    }, {
                        label: "博白县",
                        value: "450923"
                    }, {
                        label: "兴业县",
                        value: "450924"
                    }, {
                        label: "北流市",
                        value: "450981"
                    }]
                }, {
                    label: "百色市",
                    value: "4510",
                    children: [{
                        label: "右江区",
                        value: "451002"
                    }, {
                        label: "田阳县",
                        value: "451021"
                    }, {
                        label: "田东县",
                        value: "451022"
                    }, {
                        label: "平果县",
                        value: "451023"
                    }, {
                        label: "德保县",
                        value: "451024"
                    }, {
                        label: "那坡县",
                        value: "451026"
                    }, {
                        label: "凌云县",
                        value: "451027"
                    }, {
                        label: "乐业县",
                        value: "451028"
                    }, {
                        label: "田林县",
                        value: "451029"
                    }, {
                        label: "西林县",
                        value: "451030"
                    }, {
                        label: "隆林各族自治县",
                        value: "451031"
                    }, {
                        label: "靖西市",
                        value: "451081"
                    }]
                }, {
                    label: "贺州市",
                    value: "4511",
                    children: [{
                        label: "八步区",
                        value: "451102"
                    }, {
                        label: "平桂区",
                        value: "451103"
                    }, {
                        label: "昭平县",
                        value: "451121"
                    }, {
                        label: "钟山县",
                        value: "451122"
                    }, {
                        label: "富川瑶族自治县",
                        value: "451123"
                    }]
                }, {
                    label: "河池市",
                    value: "4512",
                    children: [{
                        label: "金城江区",
                        value: "451202"
                    }, {
                        label: "宜州区",
                        value: "451203"
                    }, {
                        label: "南丹县",
                        value: "451221"
                    }, {
                        label: "天峨县",
                        value: "451222"
                    }, {
                        label: "凤山县",
                        value: "451223"
                    }, {
                        label: "东兰县",
                        value: "451224"
                    }, {
                        label: "罗城仫佬族自治县",
                        value: "451225"
                    }, {
                        label: "环江毛南族自治县",
                        value: "451226"
                    }, {
                        label: "巴马瑶族自治县",
                        value: "451227"
                    }, {
                        label: "都安瑶族自治县",
                        value: "451228"
                    }, {
                        label: "大化瑶族自治县",
                        value: "451229"
                    }]
                }, {
                    label: "来宾市",
                    value: "4513",
                    children: [{
                        label: "兴宾区",
                        value: "451302"
                    }, {
                        label: "忻城县",
                        value: "451321"
                    }, {
                        label: "象州县",
                        value: "451322"
                    }, {
                        label: "武宣县",
                        value: "451323"
                    }, {
                        label: "金秀瑶族自治县",
                        value: "451324"
                    }, {
                        label: "合山市",
                        value: "451381"
                    }]
                }, {
                    label: "崇左市",
                    value: "4514",
                    children: [{
                        label: "江州区",
                        value: "451402"
                    }, {
                        label: "扶绥县",
                        value: "451421"
                    }, {
                        label: "宁明县",
                        value: "451422"
                    }, {
                        label: "龙州县",
                        value: "451423"
                    }, {
                        label: "大新县",
                        value: "451424"
                    }, {
                        label: "天等县",
                        value: "451425"
                    }, {
                        label: "凭祥市",
                        value: "451481"
                    }]
                }]
            }, {
                label: "海南",
                value: "46",
                children: [{
                    label: "海口市",
                    value: "4601",
                    children: [{
                        label: "秀英区",
                        value: "460105"
                    }, {
                        label: "龙华区",
                        value: "460106"
                    }, {
                        label: "琼山区",
                        value: "460107"
                    }, {
                        label: "美兰区",
                        value: "460108"
                    }]
                }, {
                    label: "三亚市",
                    value: "4602",
                    children: [{
                        label: "海棠区",
                        value: "460202"
                    }, {
                        label: "吉阳区",
                        value: "460203"
                    }, {
                        label: "天涯区",
                        value: "460204"
                    }, {
                        label: "崖州区",
                        value: "460205"
                    }]
                }, {
                    label: "三沙市",
                    value: "4603",
                    children: [{
                        label: "西沙群岛",
                        value: "460321"
                    }, {
                        label: "南沙群岛",
                        value: "460322"
                    }, {
                        label: "中沙群岛的岛礁及其海域",
                        value: "460323"
                    }]
                }, {
                    label: "儋州市",
                    value: "4604",
                    children: [{
                        label: "全市",
                        value: "460401"
                    }]
                }, {
                    label: "省直辖县级行政区划",
                    value: "4690",
                    children: [{
                        label: "五指山市",
                        value: "469001"
                    }, {
                        label: "琼海市",
                        value: "469002"
                    }, {
                        label: "文昌市",
                        value: "469005"
                    }, {
                        label: "万宁市",
                        value: "469006"
                    }, {
                        label: "东方市",
                        value: "469007"
                    }, {
                        label: "定安县",
                        value: "469021"
                    }, {
                        label: "屯昌县",
                        value: "469022"
                    }, {
                        label: "澄迈县",
                        value: "469023"
                    }, {
                        label: "临高县",
                        value: "469024"
                    }, {
                        label: "白沙黎族自治县",
                        value: "469025"
                    }, {
                        label: "昌江黎族自治县",
                        value: "469026"
                    }, {
                        label: "乐东黎族自治县",
                        value: "469027"
                    }, {
                        label: "陵水黎族自治县",
                        value: "469028"
                    }, {
                        label: "保亭黎族苗族自治县",
                        value: "469029"
                    }, {
                        label: "琼中黎族苗族自治县",
                        value: "469030"
                    }]
                }]
            }, {
                label: "重庆",
                value: "50",
                children: [{
                    label: "重庆市",
                    value: "5001",
                    children: [{
                        label: "万州区",
                        value: "500101"
                    }, {
                        label: "涪陵区",
                        value: "500102"
                    }, {
                        label: "渝中区",
                        value: "500103"
                    }, {
                        label: "大渡口区",
                        value: "500104"
                    }, {
                        label: "江北区",
                        value: "500105"
                    }, {
                        label: "沙坪坝区",
                        value: "500106"
                    }, {
                        label: "九龙坡区",
                        value: "500107"
                    }, {
                        label: "南岸区",
                        value: "500108"
                    }, {
                        label: "北碚区",
                        value: "500109"
                    }, {
                        label: "綦江区",
                        value: "500110"
                    }, {
                        label: "大足区",
                        value: "500111"
                    }, {
                        label: "渝北区",
                        value: "500112"
                    }, {
                        label: "巴南区",
                        value: "500113"
                    }, {
                        label: "黔江区",
                        value: "500114"
                    }, {
                        label: "长寿区",
                        value: "500115"
                    }, {
                        label: "江津区",
                        value: "500116"
                    }, {
                        label: "合川区",
                        value: "500117"
                    }, {
                        label: "永川区",
                        value: "500118"
                    }, {
                        label: "南川区",
                        value: "500119"
                    }, {
                        label: "璧山区",
                        value: "500120"
                    }, {
                        label: "铜梁区",
                        value: "500151"
                    }, {
                        label: "潼南区",
                        value: "500152"
                    }, {
                        label: "荣昌区",
                        value: "500153"
                    }, {
                        label: "开州区",
                        value: "500154"
                    }, {
                        label: "梁平区",
                        value: "500155"
                    }, {
                        label: "武隆区",
                        value: "500156"
                    }]
                }, {
                    label: "县",
                    value: "5002",
                    children: [{
                        label: "城口县",
                        value: "500229"
                    }, {
                        label: "丰都县",
                        value: "500230"
                    }, {
                        label: "垫江县",
                        value: "500231"
                    }, {
                        label: "忠县",
                        value: "500233"
                    }, {
                        label: "云阳县",
                        value: "500235"
                    }, {
                        label: "奉节县",
                        value: "500236"
                    }, {
                        label: "巫山县",
                        value: "500237"
                    }, {
                        label: "巫溪县",
                        value: "500238"
                    }, {
                        label: "石柱土家族自治县",
                        value: "500240"
                    }, {
                        label: "秀山土家族苗族自治县",
                        value: "500241"
                    }, {
                        label: "酉阳土家族苗族自治县",
                        value: "500242"
                    }, {
                        label: "彭水苗族土家族自治县",
                        value: "500243"
                    }]
                }]
            }, {
                label: "四川",
                value: "51",
                children: [{
                    label: "成都市",
                    value: "5101",
                    children: [{
                        label: "锦江区",
                        value: "510104"
                    }, {
                        label: "青羊区",
                        value: "510105"
                    }, {
                        label: "金牛区",
                        value: "510106"
                    }, {
                        label: "武侯区",
                        value: "510107"
                    }, {
                        label: "成华区",
                        value: "510108"
                    }, {
                        label: "龙泉驿区",
                        value: "510112"
                    }, {
                        label: "青白江区",
                        value: "510113"
                    }, {
                        label: "新都区",
                        value: "510114"
                    }, {
                        label: "温江区",
                        value: "510115"
                    }, {
                        label: "双流区",
                        value: "510116"
                    }, {
                        label: "郫都区",
                        value: "510117"
                    }, {
                        label: "金堂县",
                        value: "510121"
                    }, {
                        label: "大邑县",
                        value: "510129"
                    }, {
                        label: "蒲江县",
                        value: "510131"
                    }, {
                        label: "新津县",
                        value: "510132"
                    }, {
                        label: "都江堰市",
                        value: "510181"
                    }, {
                        label: "彭州市",
                        value: "510182"
                    }, {
                        label: "邛崃市",
                        value: "510183"
                    }, {
                        label: "崇州市",
                        value: "510184"
                    }, {
                        label: "简阳市",
                        value: "510185"
                    }]
                }, {
                    label: "自贡市",
                    value: "5103",
                    children: [{
                        label: "自流井区",
                        value: "510302"
                    }, {
                        label: "贡井区",
                        value: "510303"
                    }, {
                        label: "大安区",
                        value: "510304"
                    }, {
                        label: "沿滩区",
                        value: "510311"
                    }, {
                        label: "荣县",
                        value: "510321"
                    }, {
                        label: "富顺县",
                        value: "510322"
                    }]
                }, {
                    label: "攀枝花市",
                    value: "5104",
                    children: [{
                        label: "东区",
                        value: "510402"
                    }, {
                        label: "西区",
                        value: "510403"
                    }, {
                        label: "仁和区",
                        value: "510411"
                    }, {
                        label: "米易县",
                        value: "510421"
                    }, {
                        label: "盐边县",
                        value: "510422"
                    }]
                }, {
                    label: "泸州市",
                    value: "5105",
                    children: [{
                        label: "江阳区",
                        value: "510502"
                    }, {
                        label: "纳溪区",
                        value: "510503"
                    }, {
                        label: "龙马潭区",
                        value: "510504"
                    }, {
                        label: "泸县",
                        value: "510521"
                    }, {
                        label: "合江县",
                        value: "510522"
                    }, {
                        label: "叙永县",
                        value: "510524"
                    }, {
                        label: "古蔺县",
                        value: "510525"
                    }]
                }, {
                    label: "德阳市",
                    value: "5106",
                    children: [{
                        label: "旌阳区",
                        value: "510603"
                    }, {
                        label: "罗江区",
                        value: "510604"
                    }, {
                        label: "中江县",
                        value: "510623"
                    }, {
                        label: "广汉市",
                        value: "510681"
                    }, {
                        label: "什邡市",
                        value: "510682"
                    }, {
                        label: "绵竹市",
                        value: "510683"
                    }]
                }, {
                    label: "绵阳市",
                    value: "5107",
                    children: [{
                        label: "涪城区",
                        value: "510703"
                    }, {
                        label: "游仙区",
                        value: "510704"
                    }, {
                        label: "安州区",
                        value: "510705"
                    }, {
                        label: "三台县",
                        value: "510722"
                    }, {
                        label: "盐亭县",
                        value: "510723"
                    }, {
                        label: "梓潼县",
                        value: "510725"
                    }, {
                        label: "北川羌族自治县",
                        value: "510726"
                    }, {
                        label: "平武县",
                        value: "510727"
                    }, {
                        label: "江油市",
                        value: "510781"
                    }]
                }, {
                    label: "广元市",
                    value: "5108",
                    children: [{
                        label: "利州区",
                        value: "510802"
                    }, {
                        label: "昭化区",
                        value: "510811"
                    }, {
                        label: "朝天区",
                        value: "510812"
                    }, {
                        label: "旺苍县",
                        value: "510821"
                    }, {
                        label: "青川县",
                        value: "510822"
                    }, {
                        label: "剑阁县",
                        value: "510823"
                    }, {
                        label: "苍溪县",
                        value: "510824"
                    }]
                }, {
                    label: "遂宁市",
                    value: "5109",
                    children: [{
                        label: "船山区",
                        value: "510903"
                    }, {
                        label: "安居区",
                        value: "510904"
                    }, {
                        label: "蓬溪县",
                        value: "510921"
                    }, {
                        label: "射洪县",
                        value: "510922"
                    }, {
                        label: "大英县",
                        value: "510923"
                    }]
                }, {
                    label: "内江市",
                    value: "5110",
                    children: [{
                        label: "市中区",
                        value: "511002"
                    }, {
                        label: "东兴区",
                        value: "511011"
                    }, {
                        label: "威远县",
                        value: "511024"
                    }, {
                        label: "资中县",
                        value: "511025"
                    }, {
                        label: "内江经济开发区",
                        value: "511071"
                    }, {
                        label: "隆昌市",
                        value: "511083"
                    }]
                }, {
                    label: "乐山市",
                    value: "5111",
                    children: [{
                        label: "市中区",
                        value: "511102"
                    }, {
                        label: "沙湾区",
                        value: "511111"
                    }, {
                        label: "五通桥区",
                        value: "511112"
                    }, {
                        label: "金口河区",
                        value: "511113"
                    }, {
                        label: "犍为县",
                        value: "511123"
                    }, {
                        label: "井研县",
                        value: "511124"
                    }, {
                        label: "夹江县",
                        value: "511126"
                    }, {
                        label: "沐川县",
                        value: "511129"
                    }, {
                        label: "峨边彝族自治县",
                        value: "511132"
                    }, {
                        label: "马边彝族自治县",
                        value: "511133"
                    }, {
                        label: "峨眉山市",
                        value: "511181"
                    }]
                }, {
                    label: "南充市",
                    value: "5113",
                    children: [{
                        label: "顺庆区",
                        value: "511302"
                    }, {
                        label: "高坪区",
                        value: "511303"
                    }, {
                        label: "嘉陵区",
                        value: "511304"
                    }, {
                        label: "南部县",
                        value: "511321"
                    }, {
                        label: "营山县",
                        value: "511322"
                    }, {
                        label: "蓬安县",
                        value: "511323"
                    }, {
                        label: "仪陇县",
                        value: "511324"
                    }, {
                        label: "西充县",
                        value: "511325"
                    }, {
                        label: "阆中市",
                        value: "511381"
                    }]
                }, {
                    label: "眉山市",
                    value: "5114",
                    children: [{
                        label: "东坡区",
                        value: "511402"
                    }, {
                        label: "彭山区",
                        value: "511403"
                    }, {
                        label: "仁寿县",
                        value: "511421"
                    }, {
                        label: "洪雅县",
                        value: "511423"
                    }, {
                        label: "丹棱县",
                        value: "511424"
                    }, {
                        label: "青神县",
                        value: "511425"
                    }]
                }, {
                    label: "宜宾市",
                    value: "5115",
                    children: [{
                        label: "翠屏区",
                        value: "511502"
                    }, {
                        label: "南溪区",
                        value: "511503"
                    }, {
                        label: "宜宾县",
                        value: "511521"
                    }, {
                        label: "江安县",
                        value: "511523"
                    }, {
                        label: "长宁县",
                        value: "511524"
                    }, {
                        label: "高县",
                        value: "511525"
                    }, {
                        label: "珙县",
                        value: "511526"
                    }, {
                        label: "筠连县",
                        value: "511527"
                    }, {
                        label: "兴文县",
                        value: "511528"
                    }, {
                        label: "屏山县",
                        value: "511529"
                    }]
                }, {
                    label: "广安市",
                    value: "5116",
                    children: [{
                        label: "广安区",
                        value: "511602"
                    }, {
                        label: "前锋区",
                        value: "511603"
                    }, {
                        label: "岳池县",
                        value: "511621"
                    }, {
                        label: "武胜县",
                        value: "511622"
                    }, {
                        label: "邻水县",
                        value: "511623"
                    }, {
                        label: "华蓥市",
                        value: "511681"
                    }]
                }, {
                    label: "达州市",
                    value: "5117",
                    children: [{
                        label: "通川区",
                        value: "511702"
                    }, {
                        label: "达川区",
                        value: "511703"
                    }, {
                        label: "宣汉县",
                        value: "511722"
                    }, {
                        label: "开江县",
                        value: "511723"
                    }, {
                        label: "大竹县",
                        value: "511724"
                    }, {
                        label: "渠县",
                        value: "511725"
                    }, {
                        label: "达州经济开发区",
                        value: "511771"
                    }, {
                        label: "万源市",
                        value: "511781"
                    }]
                }, {
                    label: "雅安市",
                    value: "5118",
                    children: [{
                        label: "雨城区",
                        value: "511802"
                    }, {
                        label: "名山区",
                        value: "511803"
                    }, {
                        label: "荥经县",
                        value: "511822"
                    }, {
                        label: "汉源县",
                        value: "511823"
                    }, {
                        label: "石棉县",
                        value: "511824"
                    }, {
                        label: "天全县",
                        value: "511825"
                    }, {
                        label: "芦山县",
                        value: "511826"
                    }, {
                        label: "宝兴县",
                        value: "511827"
                    }]
                }, {
                    label: "巴中市",
                    value: "5119",
                    children: [{
                        label: "巴州区",
                        value: "511902"
                    }, {
                        label: "恩阳区",
                        value: "511903"
                    }, {
                        label: "通江县",
                        value: "511921"
                    }, {
                        label: "南江县",
                        value: "511922"
                    }, {
                        label: "平昌县",
                        value: "511923"
                    }, {
                        label: "巴中经济开发区",
                        value: "511971"
                    }]
                }, {
                    label: "资阳市",
                    value: "5120",
                    children: [{
                        label: "雁江区",
                        value: "512002"
                    }, {
                        label: "安岳县",
                        value: "512021"
                    }, {
                        label: "乐至县",
                        value: "512022"
                    }]
                }, {
                    label: "阿坝藏族羌族自治州",
                    value: "5132",
                    children: [{
                        label: "马尔康市",
                        value: "513201"
                    }, {
                        label: "汶川县",
                        value: "513221"
                    }, {
                        label: "理县",
                        value: "513222"
                    }, {
                        label: "茂县",
                        value: "513223"
                    }, {
                        label: "松潘县",
                        value: "513224"
                    }, {
                        label: "九寨沟县",
                        value: "513225"
                    }, {
                        label: "金川县",
                        value: "513226"
                    }, {
                        label: "小金县",
                        value: "513227"
                    }, {
                        label: "黑水县",
                        value: "513228"
                    }, {
                        label: "壤塘县",
                        value: "513230"
                    }, {
                        label: "阿坝县",
                        value: "513231"
                    }, {
                        label: "若尔盖县",
                        value: "513232"
                    }, {
                        label: "红原县",
                        value: "513233"
                    }]
                }, {
                    label: "甘孜藏族自治州",
                    value: "5133",
                    children: [{
                        label: "康定市",
                        value: "513301"
                    }, {
                        label: "泸定县",
                        value: "513322"
                    }, {
                        label: "丹巴县",
                        value: "513323"
                    }, {
                        label: "九龙县",
                        value: "513324"
                    }, {
                        label: "雅江县",
                        value: "513325"
                    }, {
                        label: "道孚县",
                        value: "513326"
                    }, {
                        label: "炉霍县",
                        value: "513327"
                    }, {
                        label: "甘孜县",
                        value: "513328"
                    }, {
                        label: "新龙县",
                        value: "513329"
                    }, {
                        label: "德格县",
                        value: "513330"
                    }, {
                        label: "白玉县",
                        value: "513331"
                    }, {
                        label: "石渠县",
                        value: "513332"
                    }, {
                        label: "色达县",
                        value: "513333"
                    }, {
                        label: "理塘县",
                        value: "513334"
                    }, {
                        label: "巴塘县",
                        value: "513335"
                    }, {
                        label: "乡城县",
                        value: "513336"
                    }, {
                        label: "稻城县",
                        value: "513337"
                    }, {
                        label: "得荣县",
                        value: "513338"
                    }]
                }, {
                    label: "凉山彝族自治州",
                    value: "5134",
                    children: [{
                        label: "西昌市",
                        value: "513401"
                    }, {
                        label: "木里藏族自治县",
                        value: "513422"
                    }, {
                        label: "盐源县",
                        value: "513423"
                    }, {
                        label: "德昌县",
                        value: "513424"
                    }, {
                        label: "会理县",
                        value: "513425"
                    }, {
                        label: "会东县",
                        value: "513426"
                    }, {
                        label: "宁南县",
                        value: "513427"
                    }, {
                        label: "普格县",
                        value: "513428"
                    }, {
                        label: "布拖县",
                        value: "513429"
                    }, {
                        label: "金阳县",
                        value: "513430"
                    }, {
                        label: "昭觉县",
                        value: "513431"
                    }, {
                        label: "喜德县",
                        value: "513432"
                    }, {
                        label: "冕宁县",
                        value: "513433"
                    }, {
                        label: "越西县",
                        value: "513434"
                    }, {
                        label: "甘洛县",
                        value: "513435"
                    }, {
                        label: "美姑县",
                        value: "513436"
                    }, {
                        label: "雷波县",
                        value: "513437"
                    }]
                }]
            }, {
                label: "贵州",
                value: "52",
                children: [{
                    label: "贵阳市",
                    value: "5201",
                    children: [{
                        label: "南明区",
                        value: "520102"
                    }, {
                        label: "云岩区",
                        value: "520103"
                    }, {
                        label: "花溪区",
                        value: "520111"
                    }, {
                        label: "乌当区",
                        value: "520112"
                    }, {
                        label: "白云区",
                        value: "520113"
                    }, {
                        label: "观山湖区",
                        value: "520115"
                    }, {
                        label: "开阳县",
                        value: "520121"
                    }, {
                        label: "息烽县",
                        value: "520122"
                    }, {
                        label: "修文县",
                        value: "520123"
                    }, {
                        label: "清镇市",
                        value: "520181"
                    }]
                }, {
                    label: "六盘水市",
                    value: "5202",
                    children: [{
                        label: "钟山区",
                        value: "520201"
                    }, {
                        label: "六枝特区",
                        value: "520203"
                    }, {
                        label: "水城县",
                        value: "520221"
                    }, {
                        label: "盘州市",
                        value: "520281"
                    }]
                }, {
                    label: "遵义市",
                    value: "5203",
                    children: [{
                        label: "红花岗区",
                        value: "520302"
                    }, {
                        label: "汇川区",
                        value: "520303"
                    }, {
                        label: "播州区",
                        value: "520304"
                    }, {
                        label: "桐梓县",
                        value: "520322"
                    }, {
                        label: "绥阳县",
                        value: "520323"
                    }, {
                        label: "正安县",
                        value: "520324"
                    }, {
                        label: "道真仡佬族苗族自治县",
                        value: "520325"
                    }, {
                        label: "务川仡佬族苗族自治县",
                        value: "520326"
                    }, {
                        label: "凤冈县",
                        value: "520327"
                    }, {
                        label: "湄潭县",
                        value: "520328"
                    }, {
                        label: "余庆县",
                        value: "520329"
                    }, {
                        label: "习水县",
                        value: "520330"
                    }, {
                        label: "赤水市",
                        value: "520381"
                    }, {
                        label: "仁怀市",
                        value: "520382"
                    }]
                }, {
                    label: "安顺市",
                    value: "5204",
                    children: [{
                        label: "西秀区",
                        value: "520402"
                    }, {
                        label: "平坝区",
                        value: "520403"
                    }, {
                        label: "普定县",
                        value: "520422"
                    }, {
                        label: "镇宁布依族苗族自治县",
                        value: "520423"
                    }, {
                        label: "关岭布依族苗族自治县",
                        value: "520424"
                    }, {
                        label: "紫云苗族布依族自治县",
                        value: "520425"
                    }]
                }, {
                    label: "毕节市",
                    value: "5205",
                    children: [{
                        label: "七星关区",
                        value: "520502"
                    }, {
                        label: "大方县",
                        value: "520521"
                    }, {
                        label: "黔西县",
                        value: "520522"
                    }, {
                        label: "金沙县",
                        value: "520523"
                    }, {
                        label: "织金县",
                        value: "520524"
                    }, {
                        label: "纳雍县",
                        value: "520525"
                    }, {
                        label: "威宁彝族回族苗族自治县",
                        value: "520526"
                    }, {
                        label: "赫章县",
                        value: "520527"
                    }]
                }, {
                    label: "铜仁市",
                    value: "5206",
                    children: [{
                        label: "碧江区",
                        value: "520602"
                    }, {
                        label: "万山区",
                        value: "520603"
                    }, {
                        label: "江口县",
                        value: "520621"
                    }, {
                        label: "玉屏侗族自治县",
                        value: "520622"
                    }, {
                        label: "石阡县",
                        value: "520623"
                    }, {
                        label: "思南县",
                        value: "520624"
                    }, {
                        label: "印江土家族苗族自治县",
                        value: "520625"
                    }, {
                        label: "德江县",
                        value: "520626"
                    }, {
                        label: "沿河土家族自治县",
                        value: "520627"
                    }, {
                        label: "松桃苗族自治县",
                        value: "520628"
                    }]
                }, {
                    label: "黔西南布依族苗族自治州",
                    value: "5223",
                    children: [{
                        label: "兴义市",
                        value: "522301"
                    }, {
                        label: "兴仁县",
                        value: "522322"
                    }, {
                        label: "普安县",
                        value: "522323"
                    }, {
                        label: "晴隆县",
                        value: "522324"
                    }, {
                        label: "贞丰县",
                        value: "522325"
                    }, {
                        label: "望谟县",
                        value: "522326"
                    }, {
                        label: "册亨县",
                        value: "522327"
                    }, {
                        label: "安龙县",
                        value: "522328"
                    }]
                }, {
                    label: "黔东南苗族侗族自治州",
                    value: "5226",
                    children: [{
                        label: "凯里市",
                        value: "522601"
                    }, {
                        label: "黄平县",
                        value: "522622"
                    }, {
                        label: "施秉县",
                        value: "522623"
                    }, {
                        label: "三穗县",
                        value: "522624"
                    }, {
                        label: "镇远县",
                        value: "522625"
                    }, {
                        label: "岑巩县",
                        value: "522626"
                    }, {
                        label: "天柱县",
                        value: "522627"
                    }, {
                        label: "锦屏县",
                        value: "522628"
                    }, {
                        label: "剑河县",
                        value: "522629"
                    }, {
                        label: "台江县",
                        value: "522630"
                    }, {
                        label: "黎平县",
                        value: "522631"
                    }, {
                        label: "榕江县",
                        value: "522632"
                    }, {
                        label: "从江县",
                        value: "522633"
                    }, {
                        label: "雷山县",
                        value: "522634"
                    }, {
                        label: "麻江县",
                        value: "522635"
                    }, {
                        label: "丹寨县",
                        value: "522636"
                    }]
                }, {
                    label: "黔南布依族苗族自治州",
                    value: "5227",
                    children: [{
                        label: "都匀市",
                        value: "522701"
                    }, {
                        label: "福泉市",
                        value: "522702"
                    }, {
                        label: "荔波县",
                        value: "522722"
                    }, {
                        label: "贵定县",
                        value: "522723"
                    }, {
                        label: "瓮安县",
                        value: "522725"
                    }, {
                        label: "独山县",
                        value: "522726"
                    }, {
                        label: "平塘县",
                        value: "522727"
                    }, {
                        label: "罗甸县",
                        value: "522728"
                    }, {
                        label: "长顺县",
                        value: "522729"
                    }, {
                        label: "龙里县",
                        value: "522730"
                    }, {
                        label: "惠水县",
                        value: "522731"
                    }, {
                        label: "三都水族自治县",
                        value: "522732"
                    }]
                }]
            }, {
                label: "云南",
                value: "53",
                children: [{
                    label: "昆明市",
                    value: "5301",
                    children: [{
                        label: "五华区",
                        value: "530102"
                    }, {
                        label: "盘龙区",
                        value: "530103"
                    }, {
                        label: "官渡区",
                        value: "530111"
                    }, {
                        label: "西山区",
                        value: "530112"
                    }, {
                        label: "东川区",
                        value: "530113"
                    }, {
                        label: "呈贡区",
                        value: "530114"
                    }, {
                        label: "晋宁区",
                        value: "530115"
                    }, {
                        label: "富民县",
                        value: "530124"
                    }, {
                        label: "宜良县",
                        value: "530125"
                    }, {
                        label: "石林彝族自治县",
                        value: "530126"
                    }, {
                        label: "嵩明县",
                        value: "530127"
                    }, {
                        label: "禄劝彝族苗族自治县",
                        value: "530128"
                    }, {
                        label: "寻甸回族彝族自治县",
                        value: "530129"
                    }, {
                        label: "安宁市",
                        value: "530181"
                    }]
                }, {
                    label: "曲靖市",
                    value: "5303",
                    children: [{
                        label: "麒麟区",
                        value: "530302"
                    }, {
                        label: "沾益区",
                        value: "530303"
                    }, {
                        label: "马龙县",
                        value: "530321"
                    }, {
                        label: "陆良县",
                        value: "530322"
                    }, {
                        label: "师宗县",
                        value: "530323"
                    }, {
                        label: "罗平县",
                        value: "530324"
                    }, {
                        label: "富源县",
                        value: "530325"
                    }, {
                        label: "会泽县",
                        value: "530326"
                    }, {
                        label: "宣威市",
                        value: "530381"
                    }]
                }, {
                    label: "玉溪市",
                    value: "5304",
                    children: [{
                        label: "红塔区",
                        value: "530402"
                    }, {
                        label: "江川区",
                        value: "530403"
                    }, {
                        label: "澄江县",
                        value: "530422"
                    }, {
                        label: "通海县",
                        value: "530423"
                    }, {
                        label: "华宁县",
                        value: "530424"
                    }, {
                        label: "易门县",
                        value: "530425"
                    }, {
                        label: "峨山彝族自治县",
                        value: "530426"
                    }, {
                        label: "新平彝族傣族自治县",
                        value: "530427"
                    }, {
                        label: "元江哈尼族彝族傣族自治县",
                        value: "530428"
                    }]
                }, {
                    label: "保山市",
                    value: "5305",
                    children: [{
                        label: "隆阳区",
                        value: "530502"
                    }, {
                        label: "施甸县",
                        value: "530521"
                    }, {
                        label: "龙陵县",
                        value: "530523"
                    }, {
                        label: "昌宁县",
                        value: "530524"
                    }, {
                        label: "腾冲市",
                        value: "530581"
                    }]
                }, {
                    label: "昭通市",
                    value: "5306",
                    children: [{
                        label: "昭阳区",
                        value: "530602"
                    }, {
                        label: "鲁甸县",
                        value: "530621"
                    }, {
                        label: "巧家县",
                        value: "530622"
                    }, {
                        label: "盐津县",
                        value: "530623"
                    }, {
                        label: "大关县",
                        value: "530624"
                    }, {
                        label: "永善县",
                        value: "530625"
                    }, {
                        label: "绥江县",
                        value: "530626"
                    }, {
                        label: "镇雄县",
                        value: "530627"
                    }, {
                        label: "彝良县",
                        value: "530628"
                    }, {
                        label: "威信县",
                        value: "530629"
                    }, {
                        label: "水富县",
                        value: "530630"
                    }]
                }, {
                    label: "丽江市",
                    value: "5307",
                    children: [{
                        label: "古城区",
                        value: "530702"
                    }, {
                        label: "玉龙纳西族自治县",
                        value: "530721"
                    }, {
                        label: "永胜县",
                        value: "530722"
                    }, {
                        label: "华坪县",
                        value: "530723"
                    }, {
                        label: "宁蒗彝族自治县",
                        value: "530724"
                    }]
                }, {
                    label: "普洱市",
                    value: "5308",
                    children: [{
                        label: "思茅区",
                        value: "530802"
                    }, {
                        label: "宁洱哈尼族彝族自治县",
                        value: "530821"
                    }, {
                        label: "墨江哈尼族自治县",
                        value: "530822"
                    }, {
                        label: "景东彝族自治县",
                        value: "530823"
                    }, {
                        label: "景谷傣族彝族自治县",
                        value: "530824"
                    }, {
                        label: "镇沅彝族哈尼族拉祜族自治县",
                        value: "530825"
                    }, {
                        label: "江城哈尼族彝族自治县",
                        value: "530826"
                    }, {
                        label: "孟连傣族拉祜族佤族自治县",
                        value: "530827"
                    }, {
                        label: "澜沧拉祜族自治县",
                        value: "530828"
                    }, {
                        label: "西盟佤族自治县",
                        value: "530829"
                    }]
                }, {
                    label: "临沧市",
                    value: "5309",
                    children: [{
                        label: "临翔区",
                        value: "530902"
                    }, {
                        label: "凤庆县",
                        value: "530921"
                    }, {
                        label: "云县",
                        value: "530922"
                    }, {
                        label: "永德县",
                        value: "530923"
                    }, {
                        label: "镇康县",
                        value: "530924"
                    }, {
                        label: "双江拉祜族佤族布朗族傣族自治县",
                        value: "530925"
                    }, {
                        label: "耿马傣族佤族自治县",
                        value: "530926"
                    }, {
                        label: "沧源佤族自治县",
                        value: "530927"
                    }]
                }, {
                    label: "楚雄彝族自治州",
                    value: "5323",
                    children: [{
                        label: "楚雄市",
                        value: "532301"
                    }, {
                        label: "双柏县",
                        value: "532322"
                    }, {
                        label: "牟定县",
                        value: "532323"
                    }, {
                        label: "南华县",
                        value: "532324"
                    }, {
                        label: "姚安县",
                        value: "532325"
                    }, {
                        label: "大姚县",
                        value: "532326"
                    }, {
                        label: "永仁县",
                        value: "532327"
                    }, {
                        label: "元谋县",
                        value: "532328"
                    }, {
                        label: "武定县",
                        value: "532329"
                    }, {
                        label: "禄丰县",
                        value: "532331"
                    }]
                }, {
                    label: "红河哈尼族彝族自治州",
                    value: "5325",
                    children: [{
                        label: "个旧市",
                        value: "532501"
                    }, {
                        label: "开远市",
                        value: "532502"
                    }, {
                        label: "蒙自市",
                        value: "532503"
                    }, {
                        label: "弥勒市",
                        value: "532504"
                    }, {
                        label: "屏边苗族自治县",
                        value: "532523"
                    }, {
                        label: "建水县",
                        value: "532524"
                    }, {
                        label: "石屏县",
                        value: "532525"
                    }, {
                        label: "泸西县",
                        value: "532527"
                    }, {
                        label: "元阳县",
                        value: "532528"
                    }, {
                        label: "红河县",
                        value: "532529"
                    }, {
                        label: "金平苗族瑶族傣族自治县",
                        value: "532530"
                    }, {
                        label: "绿春县",
                        value: "532531"
                    }, {
                        label: "河口瑶族自治县",
                        value: "532532"
                    }]
                }, {
                    label: "文山壮族苗族自治州",
                    value: "5326",
                    children: [{
                        label: "文山市",
                        value: "532601"
                    }, {
                        label: "砚山县",
                        value: "532622"
                    }, {
                        label: "西畴县",
                        value: "532623"
                    }, {
                        label: "麻栗坡县",
                        value: "532624"
                    }, {
                        label: "马关县",
                        value: "532625"
                    }, {
                        label: "丘北县",
                        value: "532626"
                    }, {
                        label: "广南县",
                        value: "532627"
                    }, {
                        label: "富宁县",
                        value: "532628"
                    }]
                }, {
                    label: "西双版纳傣族自治州",
                    value: "5328",
                    children: [{
                        label: "景洪市",
                        value: "532801"
                    }, {
                        label: "勐海县",
                        value: "532822"
                    }, {
                        label: "勐腊县",
                        value: "532823"
                    }]
                }, {
                    label: "大理白族自治州",
                    value: "5329",
                    children: [{
                        label: "大理市",
                        value: "532901"
                    }, {
                        label: "漾濞彝族自治县",
                        value: "532922"
                    }, {
                        label: "祥云县",
                        value: "532923"
                    }, {
                        label: "宾川县",
                        value: "532924"
                    }, {
                        label: "弥渡县",
                        value: "532925"
                    }, {
                        label: "南涧彝族自治县",
                        value: "532926"
                    }, {
                        label: "巍山彝族回族自治县",
                        value: "532927"
                    }, {
                        label: "永平县",
                        value: "532928"
                    }, {
                        label: "云龙县",
                        value: "532929"
                    }, {
                        label: "洱源县",
                        value: "532930"
                    }, {
                        label: "剑川县",
                        value: "532931"
                    }, {
                        label: "鹤庆县",
                        value: "532932"
                    }]
                }, {
                    label: "德宏傣族景颇族自治州",
                    value: "5331",
                    children: [{
                        label: "瑞丽市",
                        value: "533102"
                    }, {
                        label: "芒市",
                        value: "533103"
                    }, {
                        label: "梁河县",
                        value: "533122"
                    }, {
                        label: "盈江县",
                        value: "533123"
                    }, {
                        label: "陇川县",
                        value: "533124"
                    }]
                }, {
                    label: "怒江傈僳族自治州",
                    value: "5333",
                    children: [{
                        label: "泸水市",
                        value: "533301"
                    }, {
                        label: "福贡县",
                        value: "533323"
                    }, {
                        label: "贡山独龙族怒族自治县",
                        value: "533324"
                    }, {
                        label: "兰坪白族普米族自治县",
                        value: "533325"
                    }]
                }, {
                    label: "迪庆藏族自治州",
                    value: "5334",
                    children: [{
                        label: "香格里拉市",
                        value: "533401"
                    }, {
                        label: "德钦县",
                        value: "533422"
                    }, {
                        label: "维西傈僳族自治县",
                        value: "533423"
                    }]
                }]
            }, {
                label: "西藏",
                value: "54",
                children: [{
                    label: "拉萨市",
                    value: "5401",
                    children: [{
                        label: "城关区",
                        value: "540102"
                    }, {
                        label: "堆龙德庆区",
                        value: "540103"
                    }, {
                        label: "林周县",
                        value: "540121"
                    }, {
                        label: "当雄县",
                        value: "540122"
                    }, {
                        label: "尼木县",
                        value: "540123"
                    }, {
                        label: "曲水县",
                        value: "540124"
                    }, {
                        label: "达孜县",
                        value: "540126"
                    }, {
                        label: "墨竹工卡县",
                        value: "540127"
                    }, {
                        label: "格尔木藏青工业园区",
                        value: "540171"
                    }, {
                        label: "拉萨经济技术开发区",
                        value: "540172"
                    }, {
                        label: "西藏文化旅游创意园区",
                        value: "540173"
                    }, {
                        label: "达孜工业园区",
                        value: "540174"
                    }]
                }, {
                    label: "日喀则市",
                    value: "5402",
                    children: [{
                        label: "桑珠孜区",
                        value: "540202"
                    }, {
                        label: "南木林县",
                        value: "540221"
                    }, {
                        label: "江孜县",
                        value: "540222"
                    }, {
                        label: "定日县",
                        value: "540223"
                    }, {
                        label: "萨迦县",
                        value: "540224"
                    }, {
                        label: "拉孜县",
                        value: "540225"
                    }, {
                        label: "昂仁县",
                        value: "540226"
                    }, {
                        label: "谢通门县",
                        value: "540227"
                    }, {
                        label: "白朗县",
                        value: "540228"
                    }, {
                        label: "仁布县",
                        value: "540229"
                    }, {
                        label: "康马县",
                        value: "540230"
                    }, {
                        label: "定结县",
                        value: "540231"
                    }, {
                        label: "仲巴县",
                        value: "540232"
                    }, {
                        label: "亚东县",
                        value: "540233"
                    }, {
                        label: "吉隆县",
                        value: "540234"
                    }, {
                        label: "聂拉木县",
                        value: "540235"
                    }, {
                        label: "萨嘎县",
                        value: "540236"
                    }, {
                        label: "岗巴县",
                        value: "540237"
                    }]
                }, {
                    label: "昌都市",
                    value: "5403",
                    children: [{
                        label: "卡若区",
                        value: "540302"
                    }, {
                        label: "江达县",
                        value: "540321"
                    }, {
                        label: "贡觉县",
                        value: "540322"
                    }, {
                        label: "类乌齐县",
                        value: "540323"
                    }, {
                        label: "丁青县",
                        value: "540324"
                    }, {
                        label: "察雅县",
                        value: "540325"
                    }, {
                        label: "八宿县",
                        value: "540326"
                    }, {
                        label: "左贡县",
                        value: "540327"
                    }, {
                        label: "芒康县",
                        value: "540328"
                    }, {
                        label: "洛隆县",
                        value: "540329"
                    }, {
                        label: "边坝县",
                        value: "540330"
                    }]
                }, {
                    label: "林芝市",
                    value: "5404",
                    children: [{
                        label: "巴宜区",
                        value: "540402"
                    }, {
                        label: "工布江达县",
                        value: "540421"
                    }, {
                        label: "米林县",
                        value: "540422"
                    }, {
                        label: "墨脱县",
                        value: "540423"
                    }, {
                        label: "波密县",
                        value: "540424"
                    }, {
                        label: "察隅县",
                        value: "540425"
                    }, {
                        label: "朗县",
                        value: "540426"
                    }]
                }, {
                    label: "山南市",
                    value: "5405",
                    children: [{
                        label: "乃东区",
                        value: "540502"
                    }, {
                        label: "扎囊县",
                        value: "540521"
                    }, {
                        label: "贡嘎县",
                        value: "540522"
                    }, {
                        label: "桑日县",
                        value: "540523"
                    }, {
                        label: "琼结县",
                        value: "540524"
                    }, {
                        label: "曲松县",
                        value: "540525"
                    }, {
                        label: "措美县",
                        value: "540526"
                    }, {
                        label: "洛扎县",
                        value: "540527"
                    }, {
                        label: "加查县",
                        value: "540528"
                    }, {
                        label: "隆子县",
                        value: "540529"
                    }, {
                        label: "错那县",
                        value: "540530"
                    }, {
                        label: "浪卡子县",
                        value: "540531"
                    }]
                }, {
                    label: "那曲地区",
                    value: "5424",
                    children: [{
                        label: "那曲县",
                        value: "542421"
                    }, {
                        label: "嘉黎县",
                        value: "542422"
                    }, {
                        label: "比如县",
                        value: "542423"
                    }, {
                        label: "聂荣县",
                        value: "542424"
                    }, {
                        label: "安多县",
                        value: "542425"
                    }, {
                        label: "申扎县",
                        value: "542426"
                    }, {
                        label: "索县",
                        value: "542427"
                    }, {
                        label: "班戈县",
                        value: "542428"
                    }, {
                        label: "巴青县",
                        value: "542429"
                    }, {
                        label: "尼玛县",
                        value: "542430"
                    }, {
                        label: "双湖县",
                        value: "542431"
                    }]
                }, {
                    label: "阿里地区",
                    value: "5425",
                    children: [{
                        label: "普兰县",
                        value: "542521"
                    }, {
                        label: "札达县",
                        value: "542522"
                    }, {
                        label: "噶尔县",
                        value: "542523"
                    }, {
                        label: "日土县",
                        value: "542524"
                    }, {
                        label: "革吉县",
                        value: "542525"
                    }, {
                        label: "改则县",
                        value: "542526"
                    }, {
                        label: "措勤县",
                        value: "542527"
                    }]
                }]
            }, {
                label: "陕西",
                value: "61",
                children: [{
                    label: "西安市",
                    value: "6101",
                    children: [{
                        label: "新城区",
                        value: "610102"
                    }, {
                        label: "碑林区",
                        value: "610103"
                    }, {
                        label: "莲湖区",
                        value: "610104"
                    }, {
                        label: "灞桥区",
                        value: "610111"
                    }, {
                        label: "未央区",
                        value: "610112"
                    }, {
                        label: "雁塔区",
                        value: "610113"
                    }, {
                        label: "阎良区",
                        value: "610114"
                    }, {
                        label: "临潼区",
                        value: "610115"
                    }, {
                        label: "长安区",
                        value: "610116"
                    }, {
                        label: "高陵区",
                        value: "610117"
                    }, {
                        label: "邑区",
                        value: "610118"
                    }, {
                        label: "蓝田县",
                        value: "610122"
                    }, {
                        label: "周至县",
                        value: "610124"
                    }]
                }, {
                    label: "铜川市",
                    value: "6102",
                    children: [{
                        label: "王益区",
                        value: "610202"
                    }, {
                        label: "印台区",
                        value: "610203"
                    }, {
                        label: "耀州区",
                        value: "610204"
                    }, {
                        label: "宜君县",
                        value: "610222"
                    }]
                }, {
                    label: "宝鸡市",
                    value: "6103",
                    children: [{
                        label: "渭滨区",
                        value: "610302"
                    }, {
                        label: "金台区",
                        value: "610303"
                    }, {
                        label: "陈仓区",
                        value: "610304"
                    }, {
                        label: "凤翔县",
                        value: "610322"
                    }, {
                        label: "岐山县",
                        value: "610323"
                    }, {
                        label: "扶风县",
                        value: "610324"
                    }, {
                        label: "眉县",
                        value: "610326"
                    }, {
                        label: "陇县",
                        value: "610327"
                    }, {
                        label: "千阳县",
                        value: "610328"
                    }, {
                        label: "麟游县",
                        value: "610329"
                    }, {
                        label: "凤县",
                        value: "610330"
                    }, {
                        label: "太白县",
                        value: "610331"
                    }]
                }, {
                    label: "咸阳市",
                    value: "6104",
                    children: [{
                        label: "秦都区",
                        value: "610402"
                    }, {
                        label: "杨陵区",
                        value: "610403"
                    }, {
                        label: "渭城区",
                        value: "610404"
                    }, {
                        label: "三原县",
                        value: "610422"
                    }, {
                        label: "泾阳县",
                        value: "610423"
                    }, {
                        label: "乾县",
                        value: "610424"
                    }, {
                        label: "礼泉县",
                        value: "610425"
                    }, {
                        label: "永寿县",
                        value: "610426"
                    }, {
                        label: "彬县",
                        value: "610427"
                    }, {
                        label: "长武县",
                        value: "610428"
                    }, {
                        label: "旬邑县",
                        value: "610429"
                    }, {
                        label: "淳化县",
                        value: "610430"
                    }, {
                        label: "武功县",
                        value: "610431"
                    }, {
                        label: "兴平市",
                        value: "610481"
                    }]
                }, {
                    label: "渭南市",
                    value: "6105",
                    children: [{
                        label: "临渭区",
                        value: "610502"
                    }, {
                        label: "华州区",
                        value: "610503"
                    }, {
                        label: "潼关县",
                        value: "610522"
                    }, {
                        label: "大荔县",
                        value: "610523"
                    }, {
                        label: "合阳县",
                        value: "610524"
                    }, {
                        label: "澄城县",
                        value: "610525"
                    }, {
                        label: "蒲城县",
                        value: "610526"
                    }, {
                        label: "白水县",
                        value: "610527"
                    }, {
                        label: "富平县",
                        value: "610528"
                    }, {
                        label: "韩城市",
                        value: "610581"
                    }, {
                        label: "华阴市",
                        value: "610582"
                    }]
                }, {
                    label: "延安市",
                    value: "6106",
                    children: [{
                        label: "宝塔区",
                        value: "610602"
                    }, {
                        label: "安塞区",
                        value: "610603"
                    }, {
                        label: "延长县",
                        value: "610621"
                    }, {
                        label: "延川县",
                        value: "610622"
                    }, {
                        label: "子长县",
                        value: "610623"
                    }, {
                        label: "志丹县",
                        value: "610625"
                    }, {
                        label: "吴起县",
                        value: "610626"
                    }, {
                        label: "甘泉县",
                        value: "610627"
                    }, {
                        label: "富县",
                        value: "610628"
                    }, {
                        label: "洛川县",
                        value: "610629"
                    }, {
                        label: "宜川县",
                        value: "610630"
                    }, {
                        label: "黄龙县",
                        value: "610631"
                    }, {
                        label: "黄陵县",
                        value: "610632"
                    }]
                }, {
                    label: "汉中市",
                    value: "6107",
                    children: [{
                        label: "汉台区",
                        value: "610702"
                    }, {
                        label: "南郑区",
                        value: "610703"
                    }, {
                        label: "城固县",
                        value: "610722"
                    }, {
                        label: "洋县",
                        value: "610723"
                    }, {
                        label: "西乡县",
                        value: "610724"
                    }, {
                        label: "勉县",
                        value: "610725"
                    }, {
                        label: "宁强县",
                        value: "610726"
                    }, {
                        label: "略阳县",
                        value: "610727"
                    }, {
                        label: "镇巴县",
                        value: "610728"
                    }, {
                        label: "留坝县",
                        value: "610729"
                    }, {
                        label: "佛坪县",
                        value: "610730"
                    }]
                }, {
                    label: "榆林市",
                    value: "6108",
                    children: [{
                        label: "榆阳区",
                        value: "610802"
                    }, {
                        label: "横山区",
                        value: "610803"
                    }, {
                        label: "府谷县",
                        value: "610822"
                    }, {
                        label: "靖边县",
                        value: "610824"
                    }, {
                        label: "定边县",
                        value: "610825"
                    }, {
                        label: "绥德县",
                        value: "610826"
                    }, {
                        label: "米脂县",
                        value: "610827"
                    }, {
                        label: "佳县",
                        value: "610828"
                    }, {
                        label: "吴堡县",
                        value: "610829"
                    }, {
                        label: "清涧县",
                        value: "610830"
                    }, {
                        label: "子洲县",
                        value: "610831"
                    }, {
                        label: "神木市",
                        value: "610881"
                    }]
                }, {
                    label: "安康市",
                    value: "6109",
                    children: [{
                        label: "汉滨区",
                        value: "610902"
                    }, {
                        label: "汉阴县",
                        value: "610921"
                    }, {
                        label: "石泉县",
                        value: "610922"
                    }, {
                        label: "宁陕县",
                        value: "610923"
                    }, {
                        label: "紫阳县",
                        value: "610924"
                    }, {
                        label: "岚皋县",
                        value: "610925"
                    }, {
                        label: "平利县",
                        value: "610926"
                    }, {
                        label: "镇坪县",
                        value: "610927"
                    }, {
                        label: "旬阳县",
                        value: "610928"
                    }, {
                        label: "白河县",
                        value: "610929"
                    }]
                }, {
                    label: "商洛市",
                    value: "6110",
                    children: [{
                        label: "商州区",
                        value: "611002"
                    }, {
                        label: "洛南县",
                        value: "611021"
                    }, {
                        label: "丹凤县",
                        value: "611022"
                    }, {
                        label: "商南县",
                        value: "611023"
                    }, {
                        label: "山阳县",
                        value: "611024"
                    }, {
                        label: "镇安县",
                        value: "611025"
                    }, {
                        label: "柞水县",
                        value: "611026"
                    }]
                }]
            }, {
                label: "甘肃",
                value: "62",
                children: [{
                    label: "兰州市",
                    value: "6201",
                    children: [{
                        label: "城关区",
                        value: "620102"
                    }, {
                        label: "七里河区",
                        value: "620103"
                    }, {
                        label: "西固区",
                        value: "620104"
                    }, {
                        label: "安宁区",
                        value: "620105"
                    }, {
                        label: "红古区",
                        value: "620111"
                    }, {
                        label: "永登县",
                        value: "620121"
                    }, {
                        label: "皋兰县",
                        value: "620122"
                    }, {
                        label: "榆中县",
                        value: "620123"
                    }, {
                        label: "兰州新区",
                        value: "620171"
                    }]
                }, {
                    label: "嘉峪关市",
                    value: "6202",
                    children: [{
                        label: "市辖区",
                        value: "620201"
                    }]
                }, {
                    label: "金昌市",
                    value: "6203",
                    children: [{
                        label: "金川区",
                        value: "620302"
                    }, {
                        label: "永昌县",
                        value: "620321"
                    }]
                }, {
                    label: "白银市",
                    value: "6204",
                    children: [{
                        label: "白银区",
                        value: "620402"
                    }, {
                        label: "平川区",
                        value: "620403"
                    }, {
                        label: "靖远县",
                        value: "620421"
                    }, {
                        label: "会宁县",
                        value: "620422"
                    }, {
                        label: "景泰县",
                        value: "620423"
                    }]
                }, {
                    label: "天水市",
                    value: "6205",
                    children: [{
                        label: "秦州区",
                        value: "620502"
                    }, {
                        label: "麦积区",
                        value: "620503"
                    }, {
                        label: "清水县",
                        value: "620521"
                    }, {
                        label: "秦安县",
                        value: "620522"
                    }, {
                        label: "甘谷县",
                        value: "620523"
                    }, {
                        label: "武山县",
                        value: "620524"
                    }, {
                        label: "张家川回族自治县",
                        value: "620525"
                    }]
                }, {
                    label: "武威市",
                    value: "6206",
                    children: [{
                        label: "凉州区",
                        value: "620602"
                    }, {
                        label: "民勤县",
                        value: "620621"
                    }, {
                        label: "古浪县",
                        value: "620622"
                    }, {
                        label: "天祝藏族自治县",
                        value: "620623"
                    }]
                }, {
                    label: "张掖市",
                    value: "6207",
                    children: [{
                        label: "甘州区",
                        value: "620702"
                    }, {
                        label: "肃南裕固族自治县",
                        value: "620721"
                    }, {
                        label: "民乐县",
                        value: "620722"
                    }, {
                        label: "临泽县",
                        value: "620723"
                    }, {
                        label: "高台县",
                        value: "620724"
                    }, {
                        label: "山丹县",
                        value: "620725"
                    }]
                }, {
                    label: "平凉市",
                    value: "6208",
                    children: [{
                        label: "崆峒区",
                        value: "620802"
                    }, {
                        label: "泾川县",
                        value: "620821"
                    }, {
                        label: "灵台县",
                        value: "620822"
                    }, {
                        label: "崇信县",
                        value: "620823"
                    }, {
                        label: "华亭县",
                        value: "620824"
                    }, {
                        label: "庄浪县",
                        value: "620825"
                    }, {
                        label: "静宁县",
                        value: "620826"
                    }, {
                        label: "平凉工业园区",
                        value: "620871"
                    }]
                }, {
                    label: "酒泉市",
                    value: "6209",
                    children: [{
                        label: "肃州区",
                        value: "620902"
                    }, {
                        label: "金塔县",
                        value: "620921"
                    }, {
                        label: "瓜州县",
                        value: "620922"
                    }, {
                        label: "肃北蒙古族自治县",
                        value: "620923"
                    }, {
                        label: "阿克塞哈萨克族自治县",
                        value: "620924"
                    }, {
                        label: "玉门市",
                        value: "620981"
                    }, {
                        label: "敦煌市",
                        value: "620982"
                    }]
                }, {
                    label: "庆阳市",
                    value: "6210",
                    children: [{
                        label: "西峰区",
                        value: "621002"
                    }, {
                        label: "庆城县",
                        value: "621021"
                    }, {
                        label: "环县",
                        value: "621022"
                    }, {
                        label: "华池县",
                        value: "621023"
                    }, {
                        label: "合水县",
                        value: "621024"
                    }, {
                        label: "正宁县",
                        value: "621025"
                    }, {
                        label: "宁县",
                        value: "621026"
                    }, {
                        label: "镇原县",
                        value: "621027"
                    }]
                }, {
                    label: "定西市",
                    value: "6211",
                    children: [{
                        label: "安定区",
                        value: "621102"
                    }, {
                        label: "通渭县",
                        value: "621121"
                    }, {
                        label: "陇西县",
                        value: "621122"
                    }, {
                        label: "渭源县",
                        value: "621123"
                    }, {
                        label: "临洮县",
                        value: "621124"
                    }, {
                        label: "漳县",
                        value: "621125"
                    }, {
                        label: "岷县",
                        value: "621126"
                    }]
                }, {
                    label: "陇南市",
                    value: "6212",
                    children: [{
                        label: "武都区",
                        value: "621202"
                    }, {
                        label: "成县",
                        value: "621221"
                    }, {
                        label: "文县",
                        value: "621222"
                    }, {
                        label: "宕昌县",
                        value: "621223"
                    }, {
                        label: "康县",
                        value: "621224"
                    }, {
                        label: "西和县",
                        value: "621225"
                    }, {
                        label: "礼县",
                        value: "621226"
                    }, {
                        label: "徽县",
                        value: "621227"
                    }, {
                        label: "两当县",
                        value: "621228"
                    }]
                }, {
                    label: "临夏回族自治州",
                    value: "6229",
                    children: [{
                        label: "临夏市",
                        value: "622901"
                    }, {
                        label: "临夏县",
                        value: "622921"
                    }, {
                        label: "康乐县",
                        value: "622922"
                    }, {
                        label: "永靖县",
                        value: "622923"
                    }, {
                        label: "广河县",
                        value: "622924"
                    }, {
                        label: "和政县",
                        value: "622925"
                    }, {
                        label: "东乡族自治县",
                        value: "622926"
                    }, {
                        label: "积石山保安族东乡族撒拉族自治县",
                        value: "622927"
                    }]
                }, {
                    label: "甘南藏族自治州",
                    value: "6230",
                    children: [{
                        label: "合作市",
                        value: "623001"
                    }, {
                        label: "临潭县",
                        value: "623021"
                    }, {
                        label: "卓尼县",
                        value: "623022"
                    }, {
                        label: "舟曲县",
                        value: "623023"
                    }, {
                        label: "迭部县",
                        value: "623024"
                    }, {
                        label: "玛曲县",
                        value: "623025"
                    }, {
                        label: "碌曲县",
                        value: "623026"
                    }, {
                        label: "夏河县",
                        value: "623027"
                    }]
                }]
            }, {
                label: "青海",
                value: "63",
                children: [{
                    label: "西宁市",
                    value: "6301",
                    children: [{
                        label: "城东区",
                        value: "630102"
                    }, {
                        label: "城中区",
                        value: "630103"
                    }, {
                        label: "城西区",
                        value: "630104"
                    }, {
                        label: "城北区",
                        value: "630105"
                    }, {
                        label: "大通回族土族自治县",
                        value: "630121"
                    }, {
                        label: "湟中县",
                        value: "630122"
                    }, {
                        label: "湟源县",
                        value: "630123"
                    }]
                }, {
                    label: "海东市",
                    value: "6302",
                    children: [{
                        label: "乐都区",
                        value: "630202"
                    }, {
                        label: "平安区",
                        value: "630203"
                    }, {
                        label: "民和回族土族自治县",
                        value: "630222"
                    }, {
                        label: "互助土族自治县",
                        value: "630223"
                    }, {
                        label: "化隆回族自治县",
                        value: "630224"
                    }, {
                        label: "循化撒拉族自治县",
                        value: "630225"
                    }]
                }, {
                    label: "海北藏族自治州",
                    value: "6322",
                    children: [{
                        label: "门源回族自治县",
                        value: "632221"
                    }, {
                        label: "祁连县",
                        value: "632222"
                    }, {
                        label: "海晏县",
                        value: "632223"
                    }, {
                        label: "刚察县",
                        value: "632224"
                    }]
                }, {
                    label: "黄南藏族自治州",
                    value: "6323",
                    children: [{
                        label: "同仁县",
                        value: "632321"
                    }, {
                        label: "尖扎县",
                        value: "632322"
                    }, {
                        label: "泽库县",
                        value: "632323"
                    }, {
                        label: "河南蒙古族自治县",
                        value: "632324"
                    }]
                }, {
                    label: "海南藏族自治州",
                    value: "6325",
                    children: [{
                        label: "共和县",
                        value: "632521"
                    }, {
                        label: "同德县",
                        value: "632522"
                    }, {
                        label: "贵德县",
                        value: "632523"
                    }, {
                        label: "兴海县",
                        value: "632524"
                    }, {
                        label: "贵南县",
                        value: "632525"
                    }]
                }, {
                    label: "果洛藏族自治州",
                    value: "6326",
                    children: [{
                        label: "玛沁县",
                        value: "632621"
                    }, {
                        label: "班玛县",
                        value: "632622"
                    }, {
                        label: "甘德县",
                        value: "632623"
                    }, {
                        label: "达日县",
                        value: "632624"
                    }, {
                        label: "久治县",
                        value: "632625"
                    }, {
                        label: "玛多县",
                        value: "632626"
                    }]
                }, {
                    label: "玉树藏族自治州",
                    value: "6327",
                    children: [{
                        label: "玉树市",
                        value: "632701"
                    }, {
                        label: "杂多县",
                        value: "632722"
                    }, {
                        label: "称多县",
                        value: "632723"
                    }, {
                        label: "治多县",
                        value: "632724"
                    }, {
                        label: "囊谦县",
                        value: "632725"
                    }, {
                        label: "曲麻莱县",
                        value: "632726"
                    }]
                }, {
                    label: "海西蒙古族藏族自治州",
                    value: "6328",
                    children: [{
                        label: "格尔木市",
                        value: "632801"
                    }, {
                        label: "德令哈市",
                        value: "632802"
                    }, {
                        label: "乌兰县",
                        value: "632821"
                    }, {
                        label: "都兰县",
                        value: "632822"
                    }, {
                        label: "天峻县",
                        value: "632823"
                    }, {
                        label: "大柴旦行政委员会",
                        value: "632857"
                    }, {
                        label: "冷湖行政委员会",
                        value: "632858"
                    }, {
                        label: "茫崖行政委员会",
                        value: "632859"
                    }]
                }]
            }, {
                label: "宁夏",
                value: "64",
                children: [{
                    label: "银川市",
                    value: "6401",
                    children: [{
                        label: "兴庆区",
                        value: "640104"
                    }, {
                        label: "西夏区",
                        value: "640105"
                    }, {
                        label: "金凤区",
                        value: "640106"
                    }, {
                        label: "永宁县",
                        value: "640121"
                    }, {
                        label: "贺兰县",
                        value: "640122"
                    }, {
                        label: "灵武市",
                        value: "640181"
                    }]
                }, {
                    label: "石嘴山市",
                    value: "6402",
                    children: [{
                        label: "大武口区",
                        value: "640202"
                    }, {
                        label: "惠农区",
                        value: "640205"
                    }, {
                        label: "平罗县",
                        value: "640221"
                    }]
                }, {
                    label: "吴忠市",
                    value: "6403",
                    children: [{
                        label: "利通区",
                        value: "640302"
                    }, {
                        label: "红寺堡区",
                        value: "640303"
                    }, {
                        label: "盐池县",
                        value: "640323"
                    }, {
                        label: "同心县",
                        value: "640324"
                    }, {
                        label: "青铜峡市",
                        value: "640381"
                    }]
                }, {
                    label: "固原市",
                    value: "6404",
                    children: [{
                        label: "原州区",
                        value: "640402"
                    }, {
                        label: "西吉县",
                        value: "640422"
                    }, {
                        label: "隆德县",
                        value: "640423"
                    }, {
                        label: "泾源县",
                        value: "640424"
                    }, {
                        label: "彭阳县",
                        value: "640425"
                    }]
                }, {
                    label: "中卫市",
                    value: "6405",
                    children: [{
                        label: "沙坡头区",
                        value: "640502"
                    }, {
                        label: "中宁县",
                        value: "640521"
                    }, {
                        label: "海原县",
                        value: "640522"
                    }]
                }]
            }, {
                label: "新疆",
                value: "65",
                children: [{
                    label: "乌鲁木齐市",
                    value: "6501",
                    children: [{
                        label: "天山区",
                        value: "650102"
                    }, {
                        label: "沙依巴克区",
                        value: "650103"
                    }, {
                        label: "新市区",
                        value: "650104"
                    }, {
                        label: "水磨沟区",
                        value: "650105"
                    }, {
                        label: "头屯河区",
                        value: "650106"
                    }, {
                        label: "达坂城区",
                        value: "650107"
                    }, {
                        label: "米东区",
                        value: "650109"
                    }, {
                        label: "乌鲁木齐县",
                        value: "650121"
                    }, {
                        label: "乌鲁木齐经济技术开发区",
                        value: "650171"
                    }, {
                        label: "乌鲁木齐高新技术产业开发区",
                        value: "650172"
                    }]
                }, {
                    label: "克拉玛依市",
                    value: "6502",
                    children: [{
                        label: "独山子区",
                        value: "650202"
                    }, {
                        label: "克拉玛依区",
                        value: "650203"
                    }, {
                        label: "白碱滩区",
                        value: "650204"
                    }, {
                        label: "乌尔禾区",
                        value: "650205"
                    }]
                }, {
                    label: "吐鲁番市",
                    value: "6504",
                    children: [{
                        label: "高昌区",
                        value: "650402"
                    }, {
                        label: "鄯善县",
                        value: "650421"
                    }, {
                        label: "托克逊县",
                        value: "650422"
                    }]
                }, {
                    label: "哈密市",
                    value: "6505",
                    children: [{
                        label: "伊州区",
                        value: "650502"
                    }, {
                        label: "巴里坤哈萨克自治县",
                        value: "650521"
                    }, {
                        label: "伊吾县",
                        value: "650522"
                    }]
                }, {
                    label: "昌吉回族自治州",
                    value: "6523",
                    children: [{
                        label: "昌吉市",
                        value: "652301"
                    }, {
                        label: "阜康市",
                        value: "652302"
                    }, {
                        label: "呼图壁县",
                        value: "652323"
                    }, {
                        label: "玛纳斯县",
                        value: "652324"
                    }, {
                        label: "奇台县",
                        value: "652325"
                    }, {
                        label: "吉木萨尔县",
                        value: "652327"
                    }, {
                        label: "木垒哈萨克自治县",
                        value: "652328"
                    }]
                }, {
                    label: "博尔塔拉蒙古自治州",
                    value: "6527",
                    children: [{
                        label: "博乐市",
                        value: "652701"
                    }, {
                        label: "阿拉山口市",
                        value: "652702"
                    }, {
                        label: "精河县",
                        value: "652722"
                    }, {
                        label: "温泉县",
                        value: "652723"
                    }]
                }, {
                    label: "巴音郭楞蒙古自治州",
                    value: "6528",
                    children: [{
                        label: "库尔勒市",
                        value: "652801"
                    }, {
                        label: "轮台县",
                        value: "652822"
                    }, {
                        label: "尉犁县",
                        value: "652823"
                    }, {
                        label: "若羌县",
                        value: "652824"
                    }, {
                        label: "且末县",
                        value: "652825"
                    }, {
                        label: "焉耆回族自治县",
                        value: "652826"
                    }, {
                        label: "和静县",
                        value: "652827"
                    }, {
                        label: "和硕县",
                        value: "652828"
                    }, {
                        label: "博湖县",
                        value: "652829"
                    }, {
                        label: "库尔勒经济技术开发区",
                        value: "652871"
                    }]
                }, {
                    label: "阿克苏地区",
                    value: "6529",
                    children: [{
                        label: "阿克苏市",
                        value: "652901"
                    }, {
                        label: "温宿县",
                        value: "652922"
                    }, {
                        label: "库车县",
                        value: "652923"
                    }, {
                        label: "沙雅县",
                        value: "652924"
                    }, {
                        label: "新和县",
                        value: "652925"
                    }, {
                        label: "拜城县",
                        value: "652926"
                    }, {
                        label: "乌什县",
                        value: "652927"
                    }, {
                        label: "阿瓦提县",
                        value: "652928"
                    }, {
                        label: "柯坪县",
                        value: "652929"
                    }]
                }, {
                    label: "克孜勒苏柯尔克孜自治州",
                    value: "6530",
                    children: [{
                        label: "阿图什市",
                        value: "653001"
                    }, {
                        label: "阿克陶县",
                        value: "653022"
                    }, {
                        label: "阿合奇县",
                        value: "653023"
                    }, {
                        label: "乌恰县",
                        value: "653024"
                    }]
                }, {
                    label: "喀什地区",
                    value: "6531",
                    children: [{
                        label: "喀什市",
                        value: "653101"
                    }, {
                        label: "疏附县",
                        value: "653121"
                    }, {
                        label: "疏勒县",
                        value: "653122"
                    }, {
                        label: "英吉沙县",
                        value: "653123"
                    }, {
                        label: "泽普县",
                        value: "653124"
                    }, {
                        label: "莎车县",
                        value: "653125"
                    }, {
                        label: "叶城县",
                        value: "653126"
                    }, {
                        label: "麦盖提县",
                        value: "653127"
                    }, {
                        label: "岳普湖县",
                        value: "653128"
                    }, {
                        label: "伽师县",
                        value: "653129"
                    }, {
                        label: "巴楚县",
                        value: "653130"
                    }, {
                        label: "塔什库尔干塔吉克自治县",
                        value: "653131"
                    }]
                }, {
                    label: "和田地区",
                    value: "6532",
                    children: [{
                        label: "和田市",
                        value: "653201"
                    }, {
                        label: "和田县",
                        value: "653221"
                    }, {
                        label: "墨玉县",
                        value: "653222"
                    }, {
                        label: "皮山县",
                        value: "653223"
                    }, {
                        label: "洛浦县",
                        value: "653224"
                    }, {
                        label: "策勒县",
                        value: "653225"
                    }, {
                        label: "于田县",
                        value: "653226"
                    }, {
                        label: "民丰县",
                        value: "653227"
                    }]
                }, {
                    label: "伊犁哈萨克自治州",
                    value: "6540",
                    children: [{
                        label: "伊宁市",
                        value: "654002"
                    }, {
                        label: "奎屯市",
                        value: "654003"
                    }, {
                        label: "霍尔果斯市",
                        value: "654004"
                    }, {
                        label: "伊宁县",
                        value: "654021"
                    }, {
                        label: "察布查尔锡伯自治县",
                        value: "654022"
                    }, {
                        label: "霍城县",
                        value: "654023"
                    }, {
                        label: "巩留县",
                        value: "654024"
                    }, {
                        label: "新源县",
                        value: "654025"
                    }, {
                        label: "昭苏县",
                        value: "654026"
                    }, {
                        label: "特克斯县",
                        value: "654027"
                    }, {
                        label: "尼勒克县",
                        value: "654028"
                    }]
                }, {
                    label: "塔城地区",
                    value: "6542",
                    children: [{
                        label: "塔城市",
                        value: "654201"
                    }, {
                        label: "乌苏市",
                        value: "654202"
                    }, {
                        label: "额敏县",
                        value: "654221"
                    }, {
                        label: "沙湾县",
                        value: "654223"
                    }, {
                        label: "托里县",
                        value: "654224"
                    }, {
                        label: "裕民县",
                        value: "654225"
                    }, {
                        label: "和布克赛尔蒙古自治县",
                        value: "654226"
                    }]
                }, {
                    label: "阿勒泰地区",
                    value: "6543",
                    children: [{
                        label: "阿勒泰市",
                        value: "654301"
                    }, {
                        label: "布尔津县",
                        value: "654321"
                    }, {
                        label: "富蕴县",
                        value: "654322"
                    }, {
                        label: "福海县",
                        value: "654323"
                    }, {
                        label: "哈巴河县",
                        value: "654324"
                    }, {
                        label: "青河县",
                        value: "654325"
                    }, {
                        label: "吉木乃县",
                        value: "654326"
                    }]
                }, {
                    label: "自治区直辖县级行政区划",
                    value: "6590",
                    children: [{
                        label: "石河子市",
                        value: "659001"
                    }, {
                        label: "阿拉尔市",
                        value: "659002"
                    }, {
                        label: "图木舒克市",
                        value: "659003"
                    }, {
                        label: "五家渠市",
                        value: "659004"
                    }, {
                        label: "铁门关市",
                        value: "659006"
                    }]
                }]
            }, {
                label: "台湾",
                value: "71",
                children: [{
                    label: "台北市",
                    value: "7101",
                    children: [{
                        label: "中正区",
                        value: "710101"
                    }, {
                        label: "大同区",
                        value: "710102"
                    }, {
                        label: "中山区",
                        value: "710103"
                    }, {
                        label: "松山区",
                        value: "710104"
                    }, {
                        label: "大安区",
                        value: "710105"
                    }, {
                        label: "万华区",
                        value: "710106"
                    }, {
                        label: "信义区",
                        value: "710107"
                    }, {
                        label: "士林区",
                        value: "710108"
                    }, {
                        label: "北投区",
                        value: "710109"
                    }, {
                        label: "内湖区",
                        value: "710110"
                    }, {
                        label: "南港区",
                        value: "710111"
                    }, {
                        label: "文山区",
                        value: "710112"
                    }]
                }, {
                    label: "高雄市",
                    value: "7102",
                    children: [{
                        label: "新兴区",
                        value: "710201"
                    }, {
                        label: "前金区",
                        value: "710202"
                    }, {
                        label: "芩雅区",
                        value: "710203"
                    }, {
                        label: "盐埕区",
                        value: "710204"
                    }, {
                        label: "鼓山区",
                        value: "710205"
                    }, {
                        label: "旗津区",
                        value: "710206"
                    }, {
                        label: "前镇区",
                        value: "710207"
                    }, {
                        label: "三民区",
                        value: "710208"
                    }, {
                        label: "左营区",
                        value: "710209"
                    }, {
                        label: "楠梓区",
                        value: "710210"
                    }, {
                        label: "小港区",
                        value: "710211"
                    }]
                }, {
                    label: "基隆市",
                    value: "7103",
                    children: [{
                        label: "仁爱区",
                        value: "710301"
                    }, {
                        label: "信义区",
                        value: "710302"
                    }, {
                        label: "中正区",
                        value: "710303"
                    }, {
                        label: "中山区",
                        value: "710304"
                    }, {
                        label: "安乐区",
                        value: "710305"
                    }, {
                        label: "暖暖区",
                        value: "710306"
                    }, {
                        label: "七堵区",
                        value: "710307"
                    }]
                }, {
                    label: "台中市",
                    value: "7104",
                    children: [{
                        label: "中区",
                        value: "710401"
                    }, {
                        label: "东区",
                        value: "710402"
                    }, {
                        label: "南区",
                        value: "710403"
                    }, {
                        label: "西区",
                        value: "710404"
                    }, {
                        label: "北区",
                        value: "710405"
                    }, {
                        label: "北屯区",
                        value: "710406"
                    }, {
                        label: "西屯区",
                        value: "710407"
                    }, {
                        label: "南屯区",
                        value: "710408"
                    }]
                }, {
                    label: "台南市",
                    value: "7105",
                    children: [{
                        label: "中西区",
                        value: "710501"
                    }, {
                        label: "东区",
                        value: "710502"
                    }, {
                        label: "南区",
                        value: "710503"
                    }, {
                        label: "北区",
                        value: "710504"
                    }, {
                        label: "安平区",
                        value: "710505"
                    }, {
                        label: "安南区",
                        value: "710506"
                    }]
                }, {
                    label: "新竹市",
                    value: "7106",
                    children: [{
                        label: "东区",
                        value: "710601"
                    }, {
                        label: "北区",
                        value: "710602"
                    }, {
                        label: "香山区",
                        value: "710603"
                    }]
                }, {
                    label: "嘉义市",
                    value: "7107",
                    children: [{
                        label: "东区",
                        value: "710701"
                    }, {
                        label: "西区",
                        value: "710702"
                    }]
                }, {
                    label: "台北县（板桥市）",
                    value: "7108",
                    children: []
                }, {
                    label: "宜兰县（宜兰市）",
                    value: "7109",
                    children: []
                }, {
                    label: "新竹县（竹北市）",
                    value: "7110",
                    children: []
                }, {
                    label: "桃源县（桃园市）",
                    value: "7111",
                    children: []
                }, {
                    label: "苗栗县（苗栗市）",
                    value: "7112",
                    children: []
                }, {
                    label: "台中县（丰原市）",
                    value: "7113",
                    children: []
                }, {
                    label: "彰化县（彰化市）",
                    value: "7114",
                    children: []
                }, {
                    label: "南投县（南投市）",
                    value: "7115",
                    children: []
                }, {
                    label: "嘉义县（太保市）",
                    value: "7116",
                    children: []
                }, {
                    label: "云林县（斗六市）",
                    value: "7117",
                    children: []
                }, {
                    label: "台南县（新营市）",
                    value: "7118",
                    children: []
                }, {
                    label: "高雄县（凤山市）",
                    value: "7119",
                    children: []
                }, {
                    label: "屏东县（屏东市）",
                    value: "7120",
                    children: []
                }, {
                    label: "台东县（台东市）",
                    value: "7121",
                    children: []
                }, {
                    label: "花莲县（花莲市）",
                    value: "7122",
                    children: []
                }, {
                    label: "澎湖县（马公市）",
                    value: "7123",
                    children: []
                }]
            }, {
                label: "香港",
                value: "81",
                children: [{
                    label: "香港岛",
                    value: "8101",
                    children: [{
                        label: "中西区",
                        value: "810101"
                    }, {
                        label: "湾仔区",
                        value: "810102"
                    }, {
                        label: "东区",
                        value: "810103"
                    }, {
                        label: "南区",
                        value: "810104"
                    }]
                }, {
                    label: "九龙半岛",
                    value: "8102",
                    children: [{
                        label: "油尖旺区",
                        value: "810201"
                    }, {
                        label: "深水埗区",
                        value: "810202"
                    }, {
                        label: "九龙城区",
                        value: "810203"
                    }, {
                        label: "黄大仙区",
                        value: "810204"
                    }, {
                        label: "观塘区",
                        value: "810205"
                    }]
                }, {
                    label: "新界",
                    value: "8103",
                    children: [{
                        label: "北区",
                        value: "810301"
                    }, {
                        label: "大埔区",
                        value: "810302"
                    }, {
                        label: "沙田区",
                        value: "810303"
                    }, {
                        label: "西贡区",
                        value: "810304"
                    }, {
                        label: "荃湾区",
                        value: "810305"
                    }, {
                        label: "屯门区",
                        value: "810306"
                    }, {
                        label: "元朗区",
                        value: "810307"
                    }, {
                        label: "葵青区",
                        value: "810308"
                    }, {
                        label: "离岛区",
                        value: "810309"
                    }]
                }]
            }, {
                label: "澳门",
                value: "82",
                children: [{
                    label: "澳门半岛",
                    value: "8201",
                    children: [{
                        label: "花地玛堂区（北区）",
                        value: "820101"
                    }, {
                        label: "圣安多尼堂区（花王堂区）",
                        value: "820102"
                    }, {
                        label: "大堂区",
                        value: "820103"
                    }, {
                        label: "望德堂区",
                        value: "820104"
                    }, {
                        label: "风顺堂区（圣老愣佐堂区）",
                        value: "820105"
                    }]
                }, {
                    label: "离岛",
                    value: "8202",
                    children: [{
                        label: "嘉模堂区",
                        value: "820201"
                    }, {
                        label: "圣方济各堂区",
                        value: "820202"
                    }]
                }, {
                    label: "无堂区划分区域",
                    value: "8203",
                    children: [{
                        label: "路氹城",
                        value: "820301"
                    }]
                }]
            }]
        }
    },
    "./src/constants/actionTypes.js": function (e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.LOCAL_PROVINCE = l.RIGHTSAMESCORE = l.USERID = l.RECOMMENDDATA = l.SCHOOLHEATNUM = l.FLKSTITLE = l.SHOWCOL = l.TJADDATA = l.SCHOOLADDATA = l.ADDATA = l.ADPARAM = l.SCHOOLINFO = l.HOTSPECIALTY = l.HOTSCHOOL = l.LINESPECIALTY = l.LINESCHOOL = l.LINEPROVINCE = l.PROFESSION_FOR_SPECIALTY = l.SUBJECT_FOR_SPECIALTY = l.PROFESSION_FOR_SCHOOL = l.PROFESSION_DATA = l.SCHOOL_SEARCH = l.SELECT_SCHOOL = l.TOTAL_SEARCH_SCHOOL = l.SCORE_SEARCH_SCHOOL = l.IS_LOCATION = l.SCHOOL_COOKIE = l.IS_BACK = l.LIST_DEMOLIST = l.HISTORY_URL = l.GET_DATA1 = l.LIST_DATA_LV = l.LIST_DATA = l.REDIRECT_PAGE = l.GET_DEMO_FAIL = l.GET_DEMO_SUCCESS = l.GET_DEMO_SAGA = void 0;
        l.GET_DEMO_SAGA = "GET_DEMO_SAGA";
        l.GET_DEMO_SUCCESS = "GET_DEMO_SUCCESS";
        l.GET_DEMO_FAIL = "GET_DEMO_FAIL";
        l.REDIRECT_PAGE = "页面跳转";
        l.LIST_DATA = "LIST_DATA";
        l.LIST_DATA_LV = "LIST_DATA_LV";
        l.GET_DATA1 = "GET_DATA1";
        l.HISTORY_URL = "HISTORY_URL";
        l.LIST_DEMOLIST = "LIST_DEMOLIST";
        l.IS_BACK = "IS_BACK";
        l.SCHOOL_COOKIE = "SCHOOL_COOKIE";
        l.IS_LOCATION = "IS_LOCATION";
        l.SCORE_SEARCH_SCHOOL = "SCORE_SEARCH_SCHOOL";
        l.TOTAL_SEARCH_SCHOOL = "TOTAL_SEARCH_SCHOOL";
        l.SELECT_SCHOOL = "SELECT_SCHOOL";
        l.SCHOOL_SEARCH = "SCHOOL_SEARCH";
        l.PROFESSION_DATA = "PROFESSION_DATA";
        l.PROFESSION_FOR_SCHOOL = "PROFESSION_FOR_SCHOOL";
        l.SUBJECT_FOR_SPECIALTY = "SUBJECT_FOR_SPECIALTY";
        l.PROFESSION_FOR_SPECIALTY = "PROFESSION_FOR_SPECIALTY";
        l.LINEPROVINCE = "LINEPROVINCE";
        l.LINESCHOOL = "LINESCHOOL";
        l.LINESPECIALTY = "LINESPECIALTY";
        l.HOTSCHOOL = "HOTSCHOOL";
        l.HOTSPECIALTY = "HOTSPECIALTY";
        l.SCHOOLINFO = "SCHOOLINFO";
        l.ADPARAM = "ADPARAM";
        l.ADDATA = "ADDATA";
        l.SCHOOLADDATA = "SCHOOLADDATA";
        l.TJADDATA = "TJADDATA";
        l.SHOWCOL = "SHOWCOL";
        l.FLKSTITLE = "FLKSTITLE";
        l.SCHOOLHEATNUM = "SCHOOLHEATNUM";
        l.RECOMMENDDATA = "RECOMMENDDATA";
        l.USERID = "USERID";
        l.RIGHTSAMESCORE = "RIGHTSAMESCORE";
        l.LOCAL_PROVINCE = "LOCAL_PROVINCE"
    },
    "./src/constants/api.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        u(a("./src/constants/api.json.js"));
        var t = "cdn_release",
            n = "",
            r = "";
        var v = {
            URL: "https://api.eol.cn/gkcx/api/",
            IMG_URL: "https://static-data.eol.cn",
            APP_HTML: "https://static-data.eol.cn",
            APP_UPLOAD: "https://static-gkcx.eol.cn",
            APP_UPLOAD_IMG: "https://static-gkcx.eol.cn",
            LOAD_PATH: "/static",
            VOTE_DATA: (r = "apidata") + "/api/gk/school/voteData",
            SCHOOL_HEAT: r + "/api/gk/school/heat",
            SCHOOL_GET_HEAT: r + "/api/gk/school/getheat",
            MAP_CHINA: "/json/chinaData.json",
            LOGIN: (n = "apigkcx") + "/api/user/login",
            SENDCODE: n + "/api/user/sendcode",
            PROVINCE: r + "/api/data/config/province",
            CITY: r + "/api/data/config/city",
            TOWN: r + "/api/data/config/town",
            SCHOOL_LISTS: r + "/api/gk/school/lists",
            PERFECT: n + "/api/user/perfect",
            MODIFY: n + "/api/user/modify",
            USER_GET: n + "/api/user/get",
            SCOREPROVINCE: r + "/api/gk/score/proprovince",
            SCOREPROVINCE1: r + "/api/gk/score/province",
            QUEST: n + "/api/userschool/quest",
            SPECIAL: r + "/api/gk/score/special",
            GUFEN_LISTS: n + "/api/school/gufenlists",
            TOTAL_LISTS: n + "/api/school/totallists",
            PLAN_SPECIAL: r + "/api/gk/plan/special",
            UPUSERIMG: n + "/api/user/upuserimg",
            CARESCHOOL: n + "/api/userschool/careschool",
            ELECTIVE: r + "/api/gk/schoolSpecial/elective",
            HOTLISTS: n + "/api/school/hotlists",
            HOTSPECIALTY: r + "/api/gk/special/lists",
            SCORESORT: r + "/api/gk/score/province",
            LOGINOUT: n + "/api/user/loginout",
            SPECIAL_LISTS: r + "/api/gk/special/lists",
            SPECIAL_SCHOOL: r + "/api/gk/schoolSpecial/lists",
            SCORE_PROFESSION: r + "/api/gk/recomScore/special",
            AD_SCHOOL_LISTS: r + "/api/gk/schoolSpecial/lists",
            LIST_CARE_SPECIAL: n + "/api/userspecial/listcarespecial",
            LIST_CARE_SCHOOL: n + "/api/userschool/listcareschool",
            CARE_SPECIAL: n + "/api/userspecial/carespecial",
            CARE_SCHOOL: n + "/api/userschool/careschool",
            VIDEO_LISTS: n + "/api/video/lists",
            COLLECTION_LIST: n + "/api/video/listcarevideo",
            CARE_VIDEO: n + "/api/video/carevideo",
            PCCITY: n + "/api/data/config/city",
            ZYCP: n + "/api/evaluating/evalLogin",
            AQMZYCP: n + "/api/evaluating/secert_pc",
            SECERT: n + "/api/evaluating/secert",
            DEL_USEREVAL: n + "/api/evaluating/delUserEval",
            GETEVAL: n + "/api/evaluating/getEvaluating",
            RECOMMEND_SCHOOL: n + "/api/rank/rankList",
            SCHOOL_GET: r + "/api/gk/school/get",
            SPECIAL_HEAT: r + "/api/gk/special/heat",
            AD_URL: "https://misc.eol.cn/js/target/",
            SHOW_AD: !0,
            GKSJK_STRING: n,
            TOKEN: "https://api.eol.cn/api/access_token",
            FLKS: n + "/api/information/lists",
            FLKS_SCHOOL_LIST: n + "/api/school/listssingle",
            GZHXSJK_STRING: r,
            AD_URL_JSON: "https://misc.eol.cn/js/target/pc/gksjk/",
            API_TYPE: t,
            STAT_URL: "https://tongji.eol.cn/stat"
        };
        l.default = v
    },
    "./src/constants/api.json.js": function (e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        l.default = {
            GET_DEMO_URL: "/json/test.json",
            SCHOOL_985: "/json/985.json",
            INDEX_FIND: "/json/indexfind.json",
            TEST: "/jiaoyu/item/index"
        }
    },
    "./src/constants/constants.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = {
            provincePY: {
                11: "bj",
                12: "tj",
                13: "hb",
                14: "sx",
                15: "nm",
                21: "ln",
                22: "jl",
                23: "hlj",
                31: "sh",
                32: "js",
                33: "zj",
                34: "ah",
                35: "fj",
                36: "jx",
                37: "sd",
                41: "hen",
                42: "hub",
                43: "hun",
                44: "gd",
                45: "gx",
                46: "hn",
                50: "cq",
                51: "sc",
                52: "gz",
                53: "yn",
                54: "xz",
                61: "shanx",
                62: "gs",
                63: "qh",
                64: "nx",
                65: "xj"
            },
            provincePYZH: {
                bj: 11,
                tj: 12,
                hb: 13,
                sx: 14,
                nm: 15,
                ln: 21,
                jl: 22,
                hlj: 23,
                sh: 31,
                js: 32,
                zj: 33,
                ah: 34,
                fj: 35,
                jx: 36,
                sd: 37,
                hen: 41,
                hub: 42,
                hun: 43,
                gd: 44,
                gx: 45,
                hn: 46,
                cq: 50,
                sc: 51,
                gz: 52,
                yn: 53,
                xz: 54,
                shanx: 61,
                gs: 62,
                qh: 63,
                nx: 64,
                xj: 65
            },
            province: {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "香港",
                81: "澳门",
                82: "台湾",
                99: "其它",
                100: "不分省",
                0: "其它"
            },
            kelei: {
                93: "科类22",
                92: "字段3",
                91: "字段2",
                90: "字段",
                88: "无批次",
                87: "特殊类批",
                86: "本科提前批C段",
                85: "免费师范生批",
                84: "自主招生批",
                83: "专项计划本科二批（贫困专项、南疆单列、对口援疆计划本科二批次）",
                82: "专项计划本科一批（贫困专项、南疆单列、对口援疆计划本科一批次）",
                81: "高校专项批",
                79: "地方专项批",
                76: "提前专项批",
                74: "国家专项批",
                71: "地方农村专项计划本科批",
                70: "本科零批",
                69: "本科综合评价批",
                66: "本科乙批",
                65: "本科甲批",
                64: "地方专项计划本科二批",
                63: "地方专项计划本科一批",
                62: "国家专项计划本科二批",
                61: "国家专项计划本科一批",
                60: "精准脱贫专项计划（专科）",
                59: "精准脱贫专项计划（本科）",
                58: "本科第二批预科B",
                57: "本科第二批预科A",
                56: "本科第一批预科",
                55: "艺术本科第一批专项",
                54: "本科二批C段",
                53: "本科第一批专项",
                52: "本科一批B段",
                51: "本科一批A段",
                50: "单设本科批次",
                49: "专科批B段",
                48: "专科批A段",
                47: "本科批B段",
                46: "本科批A段",
                45: "本科二批B段",
                44: "本科二批A段",
                43: "专项批",
                42: "本科提前批自主招生",
                41: "本科提前一批",
                40: "本科提前二批",
                39: "提前批专项计划",
                38: "普通类平行录取段",
                37: "本科提前批B段",
                36: "本科提前批A段",
                35: "新增批次",
                34: "蒙授艺术",
                33: "蒙授理科",
                32: "蒙授文科",
                31: "蒙授体育",
                30: "民语言艺术类",
                29: "民语言理科",
                28: "民语言文科",
                27: "民语言体育类",
                26: "艺术理",
                25: "艺术文",
                24: "体育理",
                23: "体育文",
                20: "专科二批",
                19: "专科一批",
                18: "平行录取三段",
                17: "平行录取二段",
                16: "平行录取一段",
                15: "普通类提前批",
                14: "本科批",
                13: "地方专项计划本科批",
                12: "国家专项计划本科批",
                11: "专科提前批",
                10: "专科批",
                9: "本科三批",
                8: "本科二批",
                7: "本科一批",
                6: "本科提前批",
                5: "体育类",
                4: "艺术类",
                3: "综合",
                2: "文科",
                1: "理科"
            },
            provinceZH: (0, u(a("./node_modules/@babel/runtime/helpers/defineProperty.js")).default)({
                "北京": 11,
                "天津": 12,
                "河北": 13,
                "山西": 14,
                "内蒙古": 15,
                "辽宁": 21,
                "吉林": 22,
                "黑龙江": 23,
                "上海": 31,
                "江苏": 32,
                "浙江": 33,
                "安徽": 34,
                "福建": 35,
                "江西": 36,
                "山东": 37,
                "河南": 41,
                "湖北": 42,
                "湖南": 43,
                "广东": 44,
                "广西": 45,
                "海南": 46,
                "重庆": 50,
                "四川": 51,
                "贵州": 52,
                "云南": 53,
                "西藏": 54,
                "陕西": 61,
                "甘肃": 62,
                "青海": 63,
                "宁夏": 64,
                "新疆": 65,
                "香港": 71,
                "澳门": 81,
                "台湾": 82,
                "其它": 99,
                "不分省": 100
            }, "其它", 0),
            recom: {
                "全部": 0,
                "冲刺": 1,
                "稳妥": 2,
                "保底": 3
            },
            batch: {
                "全部": "",
                "本科提前批": 6,
                "本科一批": 7,
                "本科二批": 8,
                "本科三批": 9,
                "专科批": 10,
                "专科提前批": 11,
                "国家专项计划本科批": 12,
                "地方专项计划本科批": 13,
                "本科批": 14,
                "普通类提前批": 15,
                "平行录取一段": 16,
                "平行录取二段": 17,
                "平行录取三段": 18,
                "专科一批": 19,
                "专科二批": 20,
                "无批次": 88
            },
            school_type: {
                "普通本科": "6000",
                "专科（高职)": "6001",
                "独立学院": "6002",
                "中外合作办学": "6003",
                "其他": "6007"
            },
            yuanxiao: {
                "综合": 5e3,
                "理工": 5001,
                "农林": 5002,
                "医药": 5003,
                "师范": 5004,
                "语言": 5005,
                "财经": 5006,
                "政法": 5007,
                "体育": 5008,
                "艺术": 5009,
                "民族": 5010,
                "军事": 5011,
                "其他": 5012
            },
            zycc: {
                "本科": 1,
                "专科": 2,
                "专科（高职)": 2,
                "全部": ""
            },
            zylb: {
                "文学类": 7,
                "理学类": 9,
                "哲学类": 3,
                "教育学类": 6,
                "管理学类": 13,
                "经济学类": 4,
                "能源动力与材料大类": 17,
                "农学类": 11,
                "工学类": 10,
                "医学类": 12,
                "历史学类": 8,
                "法学类": 5,
                "艺术学类": 14,
                "文学": 7,
                "理学": 9,
                "哲学": 3,
                "教育学": 6,
                "管理学": 13,
                "经济学": 4,
                "能源动力与材料大": 17,
                "农学": 11,
                "工学": 10,
                "医学": 12,
                "历史学": 8,
                "法学": 5,
                "艺术学": 14,
                "交通运输大类": 24,
                "生物与化工大类": 21,
                "资源开发与测绘类": 1,
                "资源环境与安全大类": 16,
                "土木建筑大类": 18,
                "水利大类": 19,
                "装备制造大类": 20,
                "电子信息大类": 25,
                "环保、气象与安全类": 16,
                "财经商贸大类": 27,
                "医药卫生大类": 26,
                "旅游类": 28,
                "公共管理与服务大类": 33,
                "旅游大类": 28,
                "文化艺术大类": 29,
                "新闻传播大类": 30,
                "教育与体育大类": 31,
                "公安与司法大类": 32,
                "轻工纺织大类": 22,
                "农林牧渔类": 15,
                "农林牧渔大类": 15
            },
            stuleibie: {
                "理科": "1",
                "文科": "2",
                "综合": "3",
                "艺术类": "4",
                "体育类": "5",
                "本科提前批": "6",
                "本科一批": "7",
                "本科二批": "8",
                "本科三批": "9",
                "专科批": "10",
                "专科提前批": "11",
                "国家专项计划本科批": "12",
                "地方专项计划本科批": "13",
                "本科批": "14",
                "普通类提前批": "15",
                "平行录取一段": "16",
                "平行录取二段": "17",
                "平行录取三段": "18",
                "专科一批": "19",
                "专科二批": "20",
                "体育文": "23",
                "体育理": "24",
                "艺术文": "25",
                "艺术理": "26",
                "民语言体育类": "27",
                "民语言文科": "28",
                "民语言理科": "29",
                "民语言艺术类": "30",
                "蒙授体育": "31",
                "蒙授文科": "32",
                "蒙授理科": "33",
                "蒙授艺术": "34",
                "本科提前批A段": "36",
                "本科提前批B段": "37",
                "普通类平行录取段": "38",
                "提前批专项计划": "39",
                "本科提前二批": "40",
                "本科提前一批": "41",
                "本科提前批自主招生": "42",
                "专项批": "43",
                "本科二批A段": "44",
                "本科二批B段": "45",
                "本科批A段": "46",
                "本科批B段": "47",
                "专科批A段": "48",
                "专科批B段": "49",
                "单设本科批次": "50",
                "本科一批A段": "51",
                "本科一批B段": "52",
                "本科第一批专项": "53",
                "本科二批C段": "54",
                "艺术本科第一批专项": "55",
                "本科第一批预科": "56",
                "本科第二批预科A": "57",
                "本科第二批预科B": "58",
                "精准脱贫专项计划（本科）": "59",
                "精准脱贫专项计划（专科）": "60",
                "国家专项计划本科一批": "61",
                "国家专项计划本科二批": "62",
                "地方专项计划本科一批": "63",
                "地方专项计划本科二批": "64",
                "本科甲批": "65",
                "本科乙批": "66",
                "本科综合评价批": "69",
                "本科零批": "70",
                "地方农村专项计划本科批": "71",
                "国家专项批": "74",
                "提前专项批": "76",
                "地方专项批": "79",
                "高校专项批": "81",
                "专项计划本科一批（贫困专项、南疆单列、对口援疆计划本科一批次）": "82",
                "专项计划本科二批（贫困专项、南疆单列、对口援疆计划本科二批次）": "83",
                "自主招生批": "84",
                "免费师范生批": "85",
                "本科提前批C段": "86",
                "特殊类批": "87",
                "无批次": "88",
                "上海海关学院": "89",
                "特殊类型招生批": "90",
                "本一特殊类型招生批": "91",
                "地方专项计划批": "92",
                "本二特殊类型招生批": "93",
                "农村专项计划批": "94",
                "本科普通批A": "95",
                "本科普通批B": "96",
                "本科“专项生”批": "97",
                "本科一批A1段": "98",
                "国家专项计划批": "99",
                "本科三批A段": "100",
                "专项计划批": "101",
                "本科一批预科班": "102",
                "精准脱贫专项计划本科批": "103",
                "本科二批预科A类": "104",
                "本科二批预科B类": "105",
                "本科二批预科班": "106",
                "专科预科班": "107",
                "贫困专项、南疆单列、对口援疆计划本科一批": "108",
                "贫困专项、南疆单列、对口援疆计划本科二批": "109",
                "本科一批H段（特殊类型招生批）": "110",
                "本科一批I段": "111",
                "本科一批J段": "112",
                "本科二批K段": "113",
                "本科二批L段": "114",
                "本科三批M段": "115",
                "本科三批N段": "116",
                "高职（专科）批P段": "117",
                "高职（专科）批Q段": "118",
                "高职（专科）批R段": "119",
                "高职（专科）批S段": "120",
                "省内预科": "121",
                "本科二批及预科班": "122",
                "艺术A类（本科）": "123",
                "艺术B类（本科）": "124",
                "艺术类（高职专科）": "125",
                "体育类（本科）": "126",
                "体育类（高职专科）": "127",
                "艺术类（本科）": "128",
                "自招线": "129",
                "体育类（本科一批）": "130",
                "体育类（本科二批）": "131",
                "军校军检线": "132",
                "体育类（本、专科）": "133",
                "专科批（独立学院、民办）": "134",
                "体育类（平行录取一段）": "135",
                "体育类（平行录取二段）": "136",
                "汉授体育": "137",
                "汉授美术": "138",
                "蒙授美术": "139",
                "汉授音乐": "140",
                "蒙授音乐": "141",
                "汉授编导": "142",
                "其他艺术": "143",
                "蒙授其他艺术": "144",
                "高分优先投档线": "145",
                "艺术类（本科一批）": "146",
                "艺术类（本科二批）": "147",
                "贫困地区专项计划（本科一批）": "148",
                "贫困地区专项计划（本科二批）": "149",
                "省外院校民族班、民族预科（本科一批）": "150",
                "省外院校民族班、民族预科（本科二批）": "151",
                "省内专项（本科一批）": "152",
                "省内专项（本科二批）": "153",
                "省内院校本科民族预科": "154",
                "体育类（本科三批）": "155",
                "蒙授本科一批": "156",
                "蒙授本科二批": "157",
                "蒙授高职高专": "158",
                "重点本科批": "161",
                "普通本科批（少）": "160",
                "重点本科批（少）": "162",
                "普通本科批": "163",
                "专科批（汉）": "164",
                "专科批（少）": "165",
                "艺术类本科批（汉）": "166",
                "艺术类本科批（少）": "167",
                "艺术类（专科）": "168",
                "体育类本科批（汉）": "169",
                "体育类本科批（少）": "170",
                "体育类（专科）": "171",
                "体育类（本科提前批）": "172",
                "体育类（专科提前批）": "175",
                "艺术类（本科提前批）": "174",
                "艺术类（专科提前批）": "176",
                "本科一批（A+A）": "177",
                "本科一批（AA）": "178",
                "本科一批（AB）": "179",
                "本科一批（AB+）": "180",
                "本科一批（B+B）": "181",
                "本科一批（B+B+）": "182",
                "本科一批（BB）": "183",
                "本科一批（BC）": "184",
                "本科一批（历史A，另一门B）": "185",
                "本科一批（历史A，另一门B+）": "186",
                "本科一批（历史B+，另一门B）": "187",
                "本科一批（物理A，另一门B）": "188",
                "本科一批（物理A，另一门B+）": "189",
                "本科一批（物理B+，另一门B）": "190",
                "本科批（高分优先投档线）": "191",
                "地方专项计划本科批（高分优先投档线）": "192",
                "本科二批（B+B）": "193",
                "本科二批（B+B+）": "194",
                "本科二批（BB）": "195",
                "本科二批（BC）": "196",
                "本科二批（CC）": "197",
                "本科二批（历史B，另一门C）": "198",
                "本科二批（历史B+，另一门B）": "199",
                "本科二批（物理B，另一门C）": "200",
                "本科二批（物理B+，另一门B）": "201",
                "本科批（最低分数线）": "202",
                "本科一批B": "203",
                "专科批（CC）": "204",
                "专科批（DD）": "205",
                "专科批（CD）": "206"
            },
            year: {
                2019: 2019,
                2018: 2018,
                2017: 2017,
                2016: 2016,
                2015: 2015,
                2014: 2014,
                2013: 2013
            },
            school_typeZH: {
                6000: "普通本科",
                6001: "专科（高职)",
                6002: "独立学院",
                6003: "中外合作办学",
                6007: "其他"
            },
            fenlei_typeZH: {
                2001: "普通本科",
                2002: "专科（高职)"
            },
            batchZH: {
                6: "本科提前批",
                7: "本科一批",
                8: "本科二批",
                9: "本科三批",
                10: "专科批",
                11: "专科提前批",
                12: "国家专项计划本科批",
                13: "地方专项计划本科批",
                14: "本科批",
                15: "普通类提前批",
                16: "平行录取一段",
                17: "平行录取二段",
                18: "平行录取三段",
                19: "专科一批",
                20: "专科二批",
                88: "无批次"
            },
            stuleibieZH: {
                206: "专科批（CD）",
                205: "专科批（DD）",
                204: "专科批（CC）",
                203: "本科一批B",
                202: "本科批（最低分数线）",
                201: "本科二批（物理B+，另一门B）",
                200: "本科二批（物理B，另一门C）",
                199: "本科二批（历史B+，另一门B）",
                198: "本科二批（历史B，另一门C）",
                197: "本科二批（CC）",
                196: "本科二批（BC）",
                195: "本科二批（BB）",
                194: "本科二批（B+B+）",
                193: "本科二批（B+B）",
                192: "地方专项计划本科批（高分优先投档线）",
                191: "本科批（高分优先投档线）",
                190: "本科一批（物理B+，另一门B）",
                189: "本科一批（物理A，另一门B+）",
                188: "本科一批（物理A，另一门B）",
                187: "本科一批（历史B+，另一门B）",
                186: "本科一批（历史A，另一门B+）",
                185: "本科一批（历史A，另一门B）",
                184: "本科一批（BC）",
                183: "本科一批（BB）",
                182: "本科一批（B+B+）",
                181: "本科一批（B+B）",
                180: "本科一批（AB+）",
                179: "本科一批（AB）",
                178: "本科一批（AA）",
                177: "本科一批（A+A）",
                176: "艺术类（专科提前批）",
                175: "体育类（专科提前批）",
                174: "艺术类（本科提前批）",
                173: "体育类（专科提前批）",
                172: "体育类（本科提前批）",
                171: "体育类（专科）",
                170: "体育类本科批（少）",
                169: "体育类本科批（汉）",
                168: "艺术类（专科）",
                167: "艺术类本科批（少）",
                166: "艺术类本科批（汉）",
                165: "专科批（少）",
                164: "专科批（汉）",
                163: "普通本科批",
                162: "重点本科批（少）",
                161: "重点本科批",
                160: "普通本科批（少）",
                159: "重点本科批",
                158: "蒙授高职高专",
                157: "蒙授本科二批",
                156: "蒙授本科一批",
                155: "体育类（本科三批）",
                154: "省内院校本科民族预科",
                153: "省内专项（本科二批）",
                152: "省内专项（本科一批）",
                151: "省外院校民族班、民族预科（本科二批）",
                150: "省外院校民族班、民族预科（本科一批）",
                149: "贫困地区专项计划（本科二批）",
                148: "贫困地区专项计划（本科一批）",
                147: "艺术类（本科二批）",
                146: "艺术类（本科一批）",
                145: "高分优先投档线",
                144: "蒙授其他艺术",
                143: "其他艺术",
                142: "汉授编导",
                141: "蒙授音乐",
                140: "汉授音乐",
                139: "蒙授美术",
                138: "汉授美术",
                137: "汉授体育",
                136: "体育类（平行录取二段）",
                135: "体育类（平行录取一段）",
                134: "专科批（独立学院、民办）",
                133: "体育类（本、专科）",
                132: "军校军检线",
                131: "体育类（本科二批）",
                130: "体育类（本科一批）",
                129: "自招线",
                128: "艺术类（本科）",
                127: "体育类（高职专科）",
                126: "体育类（本科）",
                125: "艺术类（高职专科）",
                124: "艺术B类（本科）",
                123: "艺术A类（本科）",
                122: "本科二批及预科班",
                121: "省内预科",
                120: "高职（专科）批S段",
                119: "高职（专科）批R段",
                118: "高职（专科）批Q段",
                117: "高职（专科）批P段",
                116: "本科三批N段",
                115: "本科三批M段",
                114: "本科二批L段",
                113: "本科二批K段",
                112: "本科一批J段",
                111: "本科一批I段",
                110: "本科一批H段（特殊类型招生批）",
                109: "贫困专项、南疆单列、对口援疆计划本科二批",
                108: "贫困专项、南疆单列、对口援疆计划本科一批",
                107: "专科预科班",
                106: "本科二批预科班",
                105: "本科二批预科B类",
                104: "本科二批预科A类",
                103: "精准脱贫专项计划本科批",
                102: "本科一批预科班",
                101: "专项计划批",
                100: "本科三批A段",
                99: "国家专项计划批",
                98: "本科一批A1段",
                97: "本科“专项生”批",
                96: "本科普通批B",
                95: "本科普通批A",
                94: "农村专项计划批",
                93: "本二特殊类型招生批",
                92: "地方专项计划批",
                91: "本一特殊类型招生批",
                90: "特殊类型招生批",
                89: "上海海关学院",
                88: "无批次",
                87: "特殊类批",
                86: "本科提前批C段",
                85: "免费师范生批",
                84: "自主招生批",
                83: "专项计划本科二批（贫困专项、南疆单列、对口援疆计划本科二批次）",
                82: "专项计划本科一批（贫困专项、南疆单列、对口援疆计划本科一批次）",
                81: "高校专项批",
                79: "地方专项批",
                76: "提前专项批",
                74: "国家专项批",
                71: "地方农村专项计划本科批",
                70: "本科零批",
                69: "本科综合评价批",
                66: "本科乙批",
                65: "本科甲批",
                64: "地方专项计划本科二批",
                63: "地方专项计划本科一批",
                62: "国家专项计划本科二批",
                61: "国家专项计划本科一批",
                60: "精准脱贫专项计划（专科）",
                59: "精准脱贫专项计划（本科）",
                58: "本科第二批预科B",
                57: "本科第二批预科A",
                56: "本科第一批预科",
                55: "艺术本科第一批专项",
                54: "本科二批C段",
                53: "本科第一批专项",
                52: "本科一批B段",
                51: "本科一批A段",
                50: "单设本科批次",
                49: "专科批B段",
                48: "专科批A段",
                47: "本科批B段",
                46: "本科批A段",
                45: "本科二批B段",
                44: "本科二批A段",
                43: "专项批",
                42: "本科提前批自主招生",
                41: "本科提前一批",
                40: "本科提前二批",
                39: "提前批专项计划",
                38: "普通类平行录取段",
                37: "本科提前批B段",
                36: "本科提前批A段",
                34: "蒙授艺术",
                33: "蒙授理科",
                32: "蒙授文科",
                31: "蒙授体育",
                30: "民语言艺术类",
                29: "民语言理科",
                28: "民语言文科",
                27: "民语言体育类",
                26: "艺术理",
                25: "艺术文",
                24: "体育理",
                23: "体育文",
                20: "专科二批",
                19: "专科一批",
                18: "平行录取三段",
                17: "平行录取二段",
                16: "平行录取一段",
                15: "普通类提前批",
                14: "本科批",
                13: "地方专项计划本科批",
                12: "国家专项计划本科批",
                11: "专科提前批",
                10: "专科批",
                9: "本科三批",
                8: "本科二批",
                7: "本科一批",
                6: "本科提前批",
                5: "体育类",
                4: "艺术类",
                3: "综合",
                2: "文科",
                1: "理科",
                1069: "学考(体育)",
                1068: "学考(广播电视编导)",
                1067: "学考(美术)",
                1066: "学考(文科)",
                1065: "学考(理科)",
                1064: "3+证书(西藏新疆班)",
                1063: "3+证书(退役士兵)",
                1062: "3+证书(中职生)",
                1061: "3+证书(本科)",
                1097: "佛山顺德(中职生)",
                1089: "佛山顺德(退役士兵)",
                1086: "学考其他",
                1085: "学考理",
                1084: "学考文",
                1079: "3+证书",
                1078: "文科(学考)",
                1077: "理科(学考)",
                1071: "学考(音乐)",
                1070: "学考(舞蹈)"
            },
            colleges_level: {
                76001: "国家级示范",
                76002: "国家级骨干",
                76003: "省级示范",
                76004: "现代学徒制试点院校"
            },
            single: {
                75001: "高职单招",
                75002: "对口单招",
                75003: "自主招生",
                75004: "春季高考",
                75005: "分类考试",
                75006: "提前招生",
                75007: "高职招考",
                75008: "综合评价"
            },
            nature: {
                36000: "公办",
                36001: "民办"
            },
            informationType: {
                12001: "高职资讯",
                12002: "政策解读"
            },
            doublehigh: {
                77001: "高水平学校建设单位（A档）",
                77002: "高水平学校建设单位（B档）",
                77003: "高水平学校建设单位（C档）",
                77004: "高水平专业群建设单位（A档）",
                77005: "高水平专业群建设单位（B档）",
                77006: "高水平专业群建设单位（C档）"
            },
            bothFirstRate: {
                38001: "一流大学建设高校",
                38000: "一流学科建设高校",
                38003: ""
            },
            newsType: {
                68009: "招生计划",
                68000: "招生简章",
                68002: "招生章程",
                68001: "招生快讯",
                68003: "自主招生",
                68004: "特长生招生"
            }
        };
        l.default = t
    },
    "./src/index.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        a("./src/modules/env.js");
        var t, n = u(a("./node_modules/react/index.js")),
            r = u(a("./node_modules/react-dom/index.js")),
            v = (a("./node_modules/@loadable/component/dist/loadable.esm.js"), a("./node_modules/react-router-dom/es/index.js")),
            b = u(a("./src/App.jsx")),
            o = a("./node_modules/react-redux/es/index.js"),
            i = u(a("./src/redux/store/index.js")),
            c = u(a("./utils/history.js")),
            s = document.getElementById("root");
        t = b.default, r.default.render(n.default.createElement(o.Provider, {
            store: i.default
        }, n.default.createElement(v.Router, {
            history: c.default
        }, n.default.createElement(v.Route, {
            component: t
        }))), s)
    },
    "./src/modules/context.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.AppContext = void 0;
        var t = u(a("./node_modules/react/index.js")).default.createContext({
            userName: "jason"
        });
        l.AppContext = t
    },
    "./src/modules/env.js": function (e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var u = {
            DEV_MODE: !1,
            prefix: "/static/",
            appPrefix: "/",
            apiPrefix: "/gkcx/api",
            NODE_ENV: "production"
        };
        l.default = u
    },
    "./src/pages/routes_split.js": function (e, l, a) {
        "use strict";
        (function (e) {
            var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var t = u(a("./node_modules/react/index.js")),
                n = u(a("./node_modules/@loadable/component/dist/loadable.esm.js")),
                r = a("./src/redux/actions/global.js"),
                v = t.default.createElement("div", {
                    className: "loading_box"
                }, t.default.createElement("div", {
                    id: "loading2"
                }, t.default.createElement("div", {
                    className: "demo2"
                }), t.default.createElement("div", {
                    className: "demo2"
                }), t.default.createElement("div", {
                    className: "demo2"
                }), t.default.createElement("div", {
                    className: "demo2"
                }), t.default.createElement("div", {
                    className: "demo2"
                }))),
                b = (0, n.default)({
                    chunkName: function () {
                        return "1"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(6)]).then(a.t.bind(null, "./src/pages/Index/Index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Index/Index.js"
                    }
                }, {
                    fallback: v
                }),
                o = (0, n.default)({
                    chunkName: function () {
                        return "3"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(27)]).then(a.t.bind(null, "./src/pages/Vol/Volscore.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Vol/Volscore.js"
                    }
                }, {
                    fallback: v
                }),
                i = (0, n.default)({
                    chunkName: function () {
                        return "4"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(38)]).then(a.t.bind(null, "./src/pages/Vol/Volprece.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Vol/Volprece.js"
                    }
                }, {
                    fallback: v
                }),
                c = (0, n.default)({
                    chunkName: function () {
                        return "5"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(49)]).then(a.t.bind(null, "./src/pages/School/Searchschool.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/Searchschool.js"
                    }
                }, {
                    fallback: v
                }),
                s = (0, n.default)({
                    chunkName: function () {
                        return "6"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(57)]).then(a.t.bind(null, "./src/pages/Specialty/Allspecialty.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/Allspecialty.js"
                    }
                }, {
                    fallback: v
                }),
                d = (0, n.default)({
                    chunkName: function () {
                        return "7"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(59)]).then(a.t.bind(null, "./src/pages/Specialty/Searchspecialtyschool.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/Searchspecialtyschool.js"
                    }
                }, {
                    fallback: v
                }),
                f = (0, n.default)({
                    chunkName: function () {
                        return "8"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(60)]).then(a.t.bind(null, "./src/pages/Specialty/Searchspecialtyscore.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/Searchspecialtyscore.js"
                    }
                }, {
                    fallback: v
                }),
                h = (0, n.default)({
                    chunkName: function () {
                        return "9"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(61)]).then(a.t.bind(null, "./src/pages/Specialty/Volspecialty.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/Volspecialty.js"
                    }
                }, {
                    fallback: v
                }),
                p = (0, n.default)({
                    chunkName: function () {
                        return "10"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(7)]).then(a.t.bind(null, "./src/pages/Specialty/specialtyIntro.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/specialtyIntro.js"
                    }
                }, {
                    fallback: v
                }),
                m = (0, n.default)({
                    chunkName: function () {
                        return "11"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(8)]).then(a.t.bind(null, "./src/pages/Specialty/shipinList.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Specialty/shipinList.js"
                    }
                }, {
                    fallback: v
                }),
                g = (0, n.default)({
                    chunkName: function () {
                        return "21"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/jiuye/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/jiuye/index.js"
                    }
                }, {
                    fallback: v
                }),
                S = (0, n.default)({
                    chunkName: function () {
                        return "21"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/tijian/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/tijian/index.js"
                    }
                }, {
                    fallback: v
                }),
                y = (0, n.default)({
                    chunkName: function () {
                        return "12"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(9)]).then(a.t.bind(null, "./src/pages/Line/Lineprovince.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Line/Lineprovince.js"
                    }
                }, {
                    fallback: v
                }),
                _ = (0, n.default)({
                    chunkName: function () {
                        return "13"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(10)]).then(a.t.bind(null, "./src/pages/Line/Lineschool.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Line/Lineschool.js"
                    }
                }, {
                    fallback: v
                }),
                A = (0, n.default)({
                    chunkName: function () {
                        return "14"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(11)]).then(a.t.bind(null, "./src/pages/Line/Linespecialty.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Line/Linespecialty.js"
                    }
                }, {
                    fallback: v
                }),
                O = (0, n.default)({
                    chunkName: function () {
                        return "15"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(12)]).then(a.t.bind(null, "./src/pages/Hot/hotschool.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Hot/hotschool.js"
                    }
                }, {
                    fallback: v
                }),
                j = (0, n.default)({
                    chunkName: function () {
                        return "16"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(13)]).then(a.t.bind(null, "./src/pages/Hot/hotspecialty.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Hot/hotspecialty.js"
                    }
                }, {
                    fallback: v
                }),
                C = (0, n.default)({
                    chunkName: function () {
                        return "17"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(14)]).then(a.t.bind(null, "./src/pages/School/Contrastpage.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/Contrastpage.js"
                    }
                }, {
                    fallback: v
                }),
                E = (0, n.default)({
                    chunkName: function () {
                        return "18"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(15)]).then(a.t.bind(null, "./src/pages/Location/Location.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Location/Location.js"
                    }
                }, {
                    fallback: v
                }),
                x = (0, n.default)({
                    chunkName: function () {
                        return "190"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(16)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/schoolHome/schoolHome.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/schoolHome/schoolHome.js"
                    }
                }, {
                    fallback: v
                }),
                D = (0, n.default)({
                    chunkName: function () {
                        return "20"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(17)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/xueyuan/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/xueyuan/index.js"
                    }
                }, {
                    fallback: v
                }),
                I = (0, n.default)({
                    chunkName: function () {
                        return "21"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/xueke/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/xueke/index.js"
                    }
                }, {
                    fallback: v
                }),
                L = (0, n.default)({
                    chunkName: function () {
                        return "22"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(19)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/shiyan/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/shiyan/index.js"
                    }
                }, {
                    fallback: v
                }),
                k = (0, n.default)({
                    chunkName: function () {
                        return "23"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(20)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/zizhu/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/zizhu/index.js"
                    }
                }, {
                    fallback: v
                }),
                T = (0, n.default)({
                    chunkName: function () {
                        return "24"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(21)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/teshu/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/teshu/index.js"
                    }
                }, {
                    fallback: v
                }),
                R = (0, n.default)({
                    chunkName: function () {
                        return "25"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(22)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/zhuanxiang/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/zhuanxiang/index.js"
                    }
                }, {
                    fallback: v
                }),
                w = (0, n.default)({
                    chunkName: function () {
                        return "26"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(23)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/yishu/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/yishu/index.js"
                    }
                }, {
                    fallback: v
                }),
                P = (0, n.default)({
                    chunkName: function () {
                        return "27"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(24)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/zhongwai/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/zhongwai/index.js"
                    }
                }, {
                    fallback: v
                }),
                N = (0, n.default)({
                    chunkName: function () {
                        return "28"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(25)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/baosong/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/baosong/index.js"
                    }
                }, {
                    fallback: v
                }),
                H = (0, n.default)({
                    chunkName: function () {
                        return "29"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(26)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/techang/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/techang/index.js"
                    }
                }, {
                    fallback: v
                }),
                q = (0, n.default)({
                    chunkName: function () {
                        return "30"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(28)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/wenti/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/wenti/index.js"
                    }
                }, {
                    fallback: v
                }),
                B = (0, n.default)({
                    chunkName: function () {
                        return "31"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(29)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/shisu/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/shisu/index.js"
                    }
                }, {
                    fallback: v
                }),
                F = (0, n.default)({
                    chunkName: function () {
                        return "32"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(30)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/tuijian/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/tuijian/index.js"
                    }
                }, {
                    fallback: v
                }),
                M = (0, n.default)({
                    chunkName: function () {
                        return "33"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(31)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/schoolIntro/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/schoolIntro/index.js"
                    }
                }, {
                    fallback: v
                }),
                U = (0, n.default)({
                    chunkName: function () {
                        return "34"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(32)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/gaikuang/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/gaikuang/index.js"
                    }
                }, {
                    fallback: v
                }),
                Y = (0, n.default)({
                    chunkName: function () {
                        return "21"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/pay/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/pay/index.js"
                    }
                }, {
                    fallback: v
                }),
                V = (0, n.default)({
                    chunkName: function () {
                        return "35"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(33)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/shizi/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/shizi/index.js"
                    }
                }, {
                    fallback: v
                }),
                G = (0, n.default)({
                    chunkName: function () {
                        return "36"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(34)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/leader/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/leader/index.js"
                    }
                }, {
                    fallback: v
                }),
                z = (0, n.default)({
                    chunkName: function () {
                        return "37"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(35)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/shipin/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/shipin/index.js"
                    }
                }, {
                    fallback: v
                }),
                J = (0, n.default)({
                    chunkName: function () {
                        return "21"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(18)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/luqurule/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/luqurule/index.js"
                    }
                }, {
                    fallback: v
                }),
                K = (0, n.default)({
                    chunkName: function () {
                        return "38"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(36)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/professional/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/professional/index.js"
                    }
                }, {
                    fallback: v
                }),
                W = (0, n.default)({
                    chunkName: function () {
                        return "39"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(37)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/specialtyDetail/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/specialtyDetail/index.js"
                    }
                }, {
                    fallback: v
                }),
                Z = (0, n.default)({
                    chunkName: function () {
                        return "40"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(39)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/yuanxi/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/yuanxi/index.js"
                    }
                }, {
                    fallback: v
                }),
                Q = (0, n.default)({
                    chunkName: function () {
                        return "41"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(40)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/stuPlan/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/stuPlan/index.js"
                    }
                }, {
                    fallback: v
                }),
                $ = (0, n.default)({
                    chunkName: function () {
                        return "42"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(41)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/stuFlash/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/stuFlash/index.js"
                    }
                }, {
                    fallback: v
                }),
                X = (0, n.default)({
                    chunkName: function () {
                        return "43"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(42)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/stuRule/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/stuRule/index.js"
                    }
                }, {
                    fallback: v
                }),
                ee = (0, n.default)({
                    chunkName: function () {
                        return "43"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(42)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/newsdetail/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/newsdetail/index.js"
                    }
                }, {
                    fallback: v
                }),
                le = (0, n.default)({
                    chunkName: function () {
                        return "44"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(43)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/summary/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/summary/index.js"
                    }
                }, {
                    fallback: v
                }),
                ae = (0, n.default)({
                    chunkName: function () {
                        return "45"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(44)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/provinceLine/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/provinceLine/index.js"
                    }
                }, {
                    fallback: v
                }),
                ue = (0, n.default)({
                    chunkName: function () {
                        return "46"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(45)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/specialtyLine/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/specialtyLine/index.js"
                    }
                }, {
                    fallback: v
                }),
                te = (0, n.default)({
                    chunkName: function () {
                        return "47"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(46)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/schoolView/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/schoolView/index.js"
                    }
                }, {
                    fallback: v
                }),
                ne = (0, n.default)({
                    chunkName: function () {
                        return "48"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(47)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/job/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/job/index.js"
                    }
                }, {
                    fallback: v
                }),
                re = (0, n.default)({
                    chunkName: function () {
                        return "49"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(4), a.e(5), a.e(48)]).then(a.t.bind(null, "./src/pages/Measurement/MeasurementLogin.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Measurement/MeasurementLogin.js"
                    }
                }, {
                    fallback: v
                }),
                ve = (0, n.default)({
                    chunkName: function () {
                        return "50"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(4), a.e(5), a.e(50)]).then(a.t.bind(null, "./src/pages/Measurement/SpecialQuestion.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Measurement/SpecialQuestion.js"
                    }
                }, {
                    fallback: v
                }),
                be = (0, n.default)({
                    chunkName: function () {
                        return "51"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(51)]).then(a.t.bind(null, "./src/pages/Measurement/Previousreport.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Measurement/Previousreport.js"
                    }
                }, {
                    fallback: v
                }),
                oe = (0, n.default)({
                    chunkName: function () {
                        return "52"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return a.e(52).then(a.t.bind(null, "./src/pages/Measurement/ProfessionEval.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Measurement/ProfessionEval.js"
                    }
                }, {
                    fallback: v
                }),
                ie = (0, n.default)({
                    chunkName: function () {
                        return "53"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(53)]).then(a.t.bind(null, "./src/pages/Measurement/HistoryReport.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Measurement/HistoryReport.js"
                    }
                }, {
                    fallback: v
                }),
                ce = (0, n.default)({
                    chunkName: function () {
                        return "54"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(54)]).then(a.t.bind(null, "./src/pages/404.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/404.js"
                    }
                }, {
                    fallback: v
                }),
                se = (0, n.default)({
                    chunkName: function () {
                        return "54"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(54)]).then(a.t.bind(null, "./src/pages/Category/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Category/index.js"
                    }
                }, {
                    fallback: v
                }),
                de = (0, n.default)({
                    chunkName: function () {
                        return "54"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(54)]).then(a.t.bind(null, "./src/pages/Category/list.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Category/list.js"
                    }
                }, {
                    fallback: v
                }),
                fe = (0, n.default)({
                    chunkName: function () {
                        return "54"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(54)]).then(a.t.bind(null, "./src/pages/Category/newsList.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Category/newsList.js"
                    }
                }, {
                    fallback: v
                }),
                he = (0, n.default)({
                    chunkName: function () {
                        return "54"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(54)]).then(a.t.bind(null, "./src/pages/Category/detail.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/Category/detail.js"
                    }
                }, {
                    fallback: v
                }),
                pe = (0, n.default)({
                    chunkName: function () {
                        return "32"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(30)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/schoolIntro/introDetails/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/schoolIntro/introDetails/index.js"
                    }
                }, {
                    fallback: v
                }),
                me = (0, n.default)({
                    chunkName: function () {
                        return "32"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(30)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/independent/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/independent/index.js"
                    }
                }, {
                    fallback: v
                }),
                ge = (0, n.default)({
                    chunkName: function () {
                        return "32"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(30)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/independent/newslist/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/independent/newslist/index.js"
                    }
                }, {
                    fallback: v
                }),
                Se = (0, n.default)({
                    chunkName: function () {
                        return "32"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(30)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/independent/newsDetails/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/independent/newsDetails/index.js"
                    }
                }, {
                    fallback: v
                }),
                ye = (0, n.default)({
                    chunkName: function () {
                        return "59"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(56)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/comment/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/comment/index.js"
                    }
                }, {
                    fallback: v
                }),
                _e = (0, n.default)({
                    chunkName: function () {
                        return "56"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(55)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/login/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/login/index.js"
                    }
                }, {
                    fallback: v
                }),
                Ae = (0, n.default)({
                    chunkName: function () {
                        return "60"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(1), a.e(5), a.e(58)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/login/information/loginInfomation.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/login/information/loginInfomation.js"
                    }
                }, {
                    fallback: v
                }),
                Oe = (0, n.default)({
                    chunkName: function () {
                        return "56"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(55)]).then(a.t.bind(null, "./src/pages/School/schoolInfo/agreement/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/School/schoolInfo/agreement/index.js"
                    }
                }, {
                    fallback: v
                }),
                je = (0, n.default)({
                    chunkName: function () {
                        return "56"
                    },
                    isReady: function (e) {
                        return !!a.m[this.resolve(e)]
                    },
                    requireAsync: function () {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(55)]).then(a.t.bind(null, "./src/pages/headSearch/index.js", 7))
                    },
                    requireSync: function e(l) {
                        var u = this.resolve(l);
                        return a(u)
                    },
                    resolve: function () {
                        return "./src/pages/headSearch/index.js"
                    }
                }, {
                    fallback: v
                }),
                Ce = [{
                    path: "/",
                    exact: !0,
                    component: b,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/choose/school/code",
                    exact: !0,
                    component: o,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/choose/school/rank",
                    exact: !0,
                    component: i,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/search",
                    exact: !0,
                    component: c,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/search/:key",
                    exact: !0,
                    component: c,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/special",
                    exact: !0,
                    component: s,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/specials/school",
                    exact: !0,
                    component: d,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/category",
                    exact: !0,
                    component: se,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/category/:py",
                    exact: !0,
                    component: se,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/infolist/:id/:py",
                    exact: !0,
                    component: fe,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/categorylist/:py",
                    exact: !0,
                    component: de,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/infolist/:id",
                    exact: !0,
                    component: fe,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/detail/:id",
                    exact: !0,
                    component: he,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/categorylist",
                    exact: !0,
                    component: de,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/specials/school/:special_id",
                    exact: !0,
                    component: d,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/specials/code",
                    exact: !0,
                    component: f,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/special/:id",
                    exact: !0,
                    component: h,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/specialtyintro/:special_id",
                    exact: !0,
                    component: p,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/shipinlist",
                    exact: !0,
                    component: m,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/linepro",
                    exact: !0,
                    component: y,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/lineschool",
                    exact: !0,
                    component: _,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/linespecialty",
                    exact: !0,
                    component: A,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/hotschool",
                    exact: !0,
                    component: O,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/hotspecialty",
                    exact: !0,
                    component: j,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id",
                    exact: !0,
                    component: x,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/department",
                    exact: !0,
                    component: D,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/subject",
                    exact: !0,
                    component: I,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/employment",
                    exact: !0,
                    component: g,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/pay",
                    exact: !0,
                    component: Y,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/lab",
                    exact: !0,
                    component: L,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/autonomously",
                    exact: !0,
                    component: k,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/specialstu",
                    exact: !0,
                    component: T,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/specialproject",
                    exact: !0,
                    component: R,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/recommendedstu",
                    exact: !0,
                    component: N,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/art",
                    exact: !0,
                    component: w,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/admissionrule",
                    exact: !0,
                    component: J,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/chinaforeign",
                    exact: !0,
                    component: P,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/check",
                    exact: !0,
                    component: S,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/studentsin",
                    exact: !0,
                    component: H,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/problem",
                    exact: !0,
                    component: q,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/life",
                    exact: !0,
                    component: B,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/recommend/:push",
                    exact: !0,
                    component: F,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/introduce",
                    exact: !0,
                    component: M,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/schoolabout",
                    exact: !0,
                    component: U,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/teacher",
                    exact: !0,
                    component: V,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/leader",
                    exact: !0,
                    component: G,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/summary",
                    exact: !0,
                    component: le,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/schoolvideo",
                    exact: !0,
                    component: z,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/professional",
                    exact: !0,
                    component: K,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/specialtydetail/:special_id",
                    exact: !0,
                    component: W,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/department/:yuanxi_id",
                    exact: !0,
                    component: Z,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/stuplan",
                    exact: !0,
                    component: Q,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/stuflash",
                    exact: !0,
                    component: $,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/sturule",
                    exact: !0,
                    component: X,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/newsdetail/:type/:newid",
                    exact: !0,
                    component: ee,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/provinceline",
                    exact: !0,
                    component: ae,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/specialtyline",
                    exact: !0,
                    component: ue,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/job",
                    exact: !0,
                    component: ne,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/schoolview",
                    exact: !0,
                    component: te,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/contrastpage",
                    exact: !0,
                    component: C,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/location",
                    exact: !0,
                    component: E,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/measurementlogin",
                    exact: !0,
                    component: re,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/previousreport",
                    exact: !0,
                    component: be,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/specialquestion",
                    exact: !0,
                    component: ve,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/professioneval",
                    exact: !0,
                    component: oe,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/historyreport",
                    exact: !0,
                    component: ie,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/introDetails",
                    exact: !0,
                    component: pe,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/independent",
                    exact: !0,
                    component: me,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/independNewsList/:listId",
                    exact: !0,
                    component: ge,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/independNewsContent/:type/:newsid",
                    exact: !0,
                    component: Se,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/school/:id/comment",
                    exact: !0,
                    component: ye,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/login",
                    exact: !0,
                    component: _e,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/information",
                    exact: !0,
                    component: Ae,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/agreement",
                    exact: !0,
                    component: Oe,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    path: "/headSearch",
                    exact: !0,
                    component: je,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }, {
                    component: ce,
                    loadData: function () {
                        return (0, r.getData)()
                    }
                }];
            l.default = Ce
        }).call(this, "/")
    },
    "./src/redux/actions/demo.js": function (e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.addToCart = function (e, l, a) {
            return {
                type: u,
                payload: {
                    product: e,
                    quantity: l,
                    unitCost: a
                }
            }
        }, l.updateCart = function (e, l, a) {
            return {
                type: t,
                payload: {
                    product: e,
                    quantity: l,
                    unitCost: a
                }
            }
        }, l.deleteFromCart = function (e) {
            return {
                type: n,
                payload: {
                    product: e
                }
            }
        }, l.DELETE_FROM_CART = l.UPDATE_CART = l.ADD_TO_CART = void 0;
        var u = "ADD_TO_CART";
        l.ADD_TO_CART = u;
        var t = "UPDATE_CART";
        l.UPDATE_CART = t;
        var n = "DELETE_FROM_CART";
        l.DELETE_FROM_CART = n
    },
    "./src/redux/actions/global.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.redirect = function (e) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
            return function (a) {
                var u = s.default.getState().lists.select_school;
                u.page1 = 1, u.page2 = 1, u.page3 = 1, u.page4 = 1, u.page5 = 1, u.page6 = 1, u.page7 = 1, u.page8 = 1, u.page9 = 1, u.page10 = 1, u.page11 = 1;
                var t = {
                    direction: l,
                    url: "undefined" != typeof window ? window.location.href : ""
                };
                if (a({
                        type: o.REDIRECT_PAGE,
                        redirect: t
                    }), a({
                        type: o.HISTORY_URL,
                        redirect: t
                    }), a({
                        type: o.IS_BACK,
                        onReady: !1
                    }), a({
                        type: o.SELECT_SCHOOL,
                        select_school: u
                    }), r.default.push(e), l && "none" != l && l.publish_id) {
                    var n = localStorage.getItem("localprovinceid") || "11",
                        b = v.default.get("cityid") || "1101",
                        c = l.publish_id,
                        f = (new Fingerprint).get(),
                        h = d.default.STAT_URL;
                    (0, i.default)(h + "?province=".concat(n, "&city=").concat(b, "&uid=").concat(f, "&publish=").concat(c, "&click=1"), "get", "").then(function (e) {})
                }
            }
        }, l.getListData = function (e, l) {
            return function (e) {}
        }, l.redirectList = function (e, l, a) {
            return function (u) {
                var t = {
                    url: "undefined" != typeof window ? window.location.href : "",
                    data: a
                };
                u({
                    type: o.REDIRECT_PAGE,
                    redirect: t
                }), u({
                    type: o.LIST_DATA_LV,
                    offsetTop: l
                }), u({
                    type: o.HISTORY_URL,
                    redirect: t
                }), r.default.push(e)
            }
        }, l.goBack = function () {
            return function (e) {
                var l = {
                    direction: "right",
                    url: "undefined" != typeof window ? window.location.href : ""
                };
                e({
                    type: o.REDIRECT_PAGE,
                    redirect: l
                }), e({
                    type: o.HISTORY_URL,
                    redirect: l
                }), e({
                    type: o.IS_BACK,
                    onReady: !0
                }), r.default.goBack()
            }
        }, l.getData = function (e, l, a, u) {
            return (0, i.default)(e, l, a, u)
        }, l.demolist = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    1 === a.page ? t({
                        type: o.LIST_DEMOLIST,
                        demolist: {
                            data: e.data.items.concat(),
                            number: e.data.number
                        }
                    }) : t({
                        type: o.LIST_DEMOLIST,
                        demolist: {
                            data: e.data.items.concat(s.default.getState().lists.demolist.data),
                            number: e.data.number
                        }
                    })
                })
            }
        }, l.slidefloat = function (e) {
            return function (l) {
                l({
                    type: o.SCHOOL_COOKIE,
                    schoolcookie: e
                })
            }
        }, l.curcity = function (e) {
            return function (l) {
                l({
                    type: o.IS_LOCATION,
                    curlocation: e
                })
            }
        }, l.flksTitle = function (e) {
            var l = e;
            return function (e) {
                e({
                    type: o.FLKSTITLE,
                    str: l
                })
            }
        }, l.showCol = function (e, l, a, u) {
            if ("/categorylist" != localStorage.getItem("lasturl") && !location.pathname.includes("categorylist")) return function (e) {
                return e({
                    type: o.SHOWCOL,
                    showCol: {
                        zsjz: !0,
                        zszy: !0,
                        lnfs: !0,
                        kssj: !0,
                        lqmd: !0,
                        bmrk: !0,
                        cjcx: !0
                    },
                    colWidth: "10%"
                })
            };
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    if ("0000" === e.code) {
                        var l = localStorage.getItem("localprovinceid") || "11",
                            a = {},
                            u = "";
                        e.data.item.forEach(function (e) {
                            e.province_id == l && (e.types.forEach(function (e) {
                                a[e] = !0
                            }), u = 100 / (e.types.length + 3) + "%")
                        }), "" == u && (u = "33%"), t({
                            type: o.SHOWCOL,
                            showCol: a,
                            colWidth: u
                        })
                    } else t({
                        type: o.SHOWCOL,
                        showCol: {
                            zsjz: !0,
                            zszy: !0,
                            lnfs: !0,
                            kssj: !0,
                            lqmd: !0,
                            bmrk: !0,
                            cjcx: !0
                        },
                        colWidth: "10%"
                    })
                })
            }
        }, l.updateSchoolSelectParam = function (e, l) {
            return function (a) {
                var u = s.default.getState().lists.select_school;
                u[e] = l, a({
                    type: o.SELECT_SCHOOL,
                    select_school: u
                })
            }
        }, l.scoreSearch_school = function (e, l, a, u, t) {
            return function (n) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    if ("0000" === e.code && e.data.item) {
                        if (t && t.top_id.length) {
                            var l = function (l) {
                                e.data.item.forEach(function (a, u) {
                                    a.id === l && (e.data.item[u].publish_id = t.publish_id[l] || 0)
                                })
                            };
                            for (var a in t.publish_id) l(a)
                        }
                        e.data.numFound > 0 ? n({
                            type: o.SCORE_SEARCH_SCHOOL,
                            scoreSearch_school: {
                                data: e.data.item,
                                number: e.data.numFound,
                                year: e.data.year,
                                nodata: "none"
                            }
                        }) : n({
                            type: o.SCORE_SEARCH_SCHOOL,
                            scoreSearch_school: {
                                data: e.data.item,
                                number: e.data.numFound,
                                year: e.data.year,
                                nodata: "block"
                            }
                        })
                    } else {
                        var u = new Date,
                            r = u.getFullYear() - 1;
                        n({
                            type: o.SCORE_SEARCH_SCHOOL,
                            scoreSearch_school: {
                                data: [],
                                number: 0,
                                year: r,
                                nodata: "block"
                            }
                        })
                    }
                })
            }
        }, l.totalSearch_school = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    if ("0000" === e.code && e.data.item) e.data.numFound > 0 ? t({
                        type: o.TOTAL_SEARCH_SCHOOL,
                        totalSearch_school: {
                            data: e.data.item,
                            number: e.data.numFound,
                            year: e.data.year,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.TOTAL_SEARCH_SCHOOL,
                        totalSearch_school: {
                            data: e.data.item,
                            number: e.data.numFound,
                            year: e.data.year,
                            nodata: "block"
                        }
                    });
                    else {
                        var l = new Date,
                            a = l.getFullYear() - 1;
                        t({
                            type: o.TOTAL_SEARCH_SCHOOL,
                            totalSearch_school: {
                                data: [],
                                number: 0,
                                year: a,
                                nodata: "block"
                            }
                        })
                    }
                })
            }
        }, l.schoolSearch = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.SCHOOL_SEARCH,
                        school_search: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.SCHOOL_SEARCH,
                        school_search: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.SCHOOL_SEARCH,
                        school_search: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.professionData = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.PROFESSION_DATA,
                        professionData: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.PROFESSION_DATA,
                        professionData: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.PROFESSION_DATA,
                        professionData: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.professionForSchool = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? t({
                        type: o.PROFESSION_FOR_SCHOOL,
                        professionForSchool: {
                            data: e.data.item,
                            number: e.data.numFound
                        }
                    }) : t({
                        type: o.PROFESSION_FOR_SCHOOL,
                        professionForSchool: {
                            data: [],
                            number: 0,
                            nodata: "none"
                        }
                    })
                })
            }
        }, l.subject_for_specialty = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.SUBJECT_FOR_SPECIALTY,
                        subject_for_specialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.SUBJECT_FOR_SPECIALTY,
                        subject_for_specialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.SUBJECT_FOR_SPECIALTY,
                        subject_for_specialty: {
                            data: s.default.getState().lists.subject_for_specialty.data,
                            number: s.default.getState().lists.subject_for_specialty.number,
                            nodata: "none"
                        }
                    })
                })
            }
        }, l.professionForSpecialty = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.PROFESSION_FOR_SPECIALTY,
                        professionForSpecialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none",
                            year: e.data.year
                        }
                    }) : t({
                        type: o.PROFESSION_FOR_SPECIALTY,
                        professionForSpecialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block",
                            year: e.data.year
                        }
                    }) : t({
                        type: o.PROFESSION_FOR_SPECIALTY,
                        professionForSpecialty: {
                            data: [],
                            number: 0,
                            nodata: "block",
                            year: ""
                        }
                    })
                })
            }
        }, l.lineprovince = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.LINEPROVINCE,
                        lineprovince: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.LINEPROVINCE,
                        lineprovince: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.LINEPROVINCE,
                        lineprovince: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.lineschool = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.LINESCHOOL,
                        lineschool: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.LINESCHOOL,
                        lineschool: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.LINESCHOOL,
                        lineschool: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.linespecialty = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item ? e.data.numFound > 0 ? t({
                        type: o.LINESPECIALTY,
                        linespecialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.LINESPECIALTY,
                        linespecialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "block"
                        }
                    }) : t({
                        type: o.LINESPECIALTY,
                        linespecialty: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.hotschool = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item && e.data.numFound > 0 ? t({
                        type: o.HOTSCHOOL,
                        hotschool: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.HOTSCHOOL,
                        hotschool: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.hotspecialty = function (e, l, a, u) {
            return function (t) {
                return (0, i.default)(e, l, a, u).then(function (e) {
                    "0000" === e.code && e.data.item && e.data.numFound > 0 ? t({
                        type: o.HOTSPECIALTY,
                        hotspecialty: {
                            data: e.data.item,
                            number: e.data.numFound,
                            nodata: "none"
                        }
                    }) : t({
                        type: o.HOTSPECIALTY,
                        hotspecialty: {
                            data: [],
                            number: 0,
                            nodata: "block"
                        }
                    })
                })
            }
        }, l.schoolinfo = function (e) {
            return function (l) {
                l({
                    type: o.SCHOOLINFO,
                    schoolinfoparam: e
                })
            }
        }, l.clearschoolinfo = function () {
            return function (e) {
                e({
                    type: o.SCHOOLINFO,
                    schoolinfoparam: {}
                })
            }
        }, l.adparam = function (e) {
            return function (l) {
                l({
                    type: o.ADPARAM,
                    adinfoparam: e
                })
            }
        }, l.adgetdata = function (e) {
            return function (l) {
                return s.default.getState().lists.addata.b5data = [], s.default.getState().lists.addata.b4data = [], s.default.getState().lists.addata.topTittle = [], s.default.getState().lists.addata.b1data = [], s.default.getState().lists.addata.b2data = [], s.default.getState().lists.addata.b3data = [], new Promise(function (a, u) {
                    var r, v, b, i, f, h, p, m, g, S = "";
                    if (void 0 !== ("undefined" == typeof window ? "undefined" : (0, n.default)(window)))
                        if (localStorage.getItem("birthplace")) {
                            var y = JSON.parse(localStorage.getItem("birthplace"));
                            S = y.id
                        } else S = 11;
                    switch (e) {
                        case 593:
                            r = "6930", v = "6933", b = 6937, i = 6939, f = 6943, h = 6950, p = 6952, m = 6961, g = 6962;
                            break;
                        case 595:
                            r = 6987, v = 6988;
                            break;
                        case 596:
                            r = 6993, v = 6996;
                            break;
                        case 597:
                            r = 7e3, v = 7002;
                            break;
                        case 598:
                            r = 7011, v = 7012;
                            break;
                        case 599:
                            r = 7014, v = 7015;
                            break;
                        case 600:
                            r = 7016, v = 7017
                    }
                    if (d.default.SHOW_AD) {
                        var _ = [],
                            A = [];
                        s.default.getState().lists.addata.b4data.length > 0 && s.default.getState().lists.addata.b5data.length > 0 && "593" != e ? (_ = s.default.getState().lists.addata.b4data, A = s.default.getState().lists.addata.b4data, l({
                            type: o.ADDATA,
                            addata: (0, t.default)({}, s.default.getState().lists.addata, {
                                b4data: _,
                                b5data: A
                            })
                        })) : 0 == s.default.getState().lists.addata.b4data.length && 0 == s.default.getState().lists.addata.b5data.length && "593" != e && (0, c.loadAD)("593", S).then(function (e) {
                            for (var a in e) {
                                if (6961 == e[a].id) {
                                    var u = e[a].data;
                                    for (var n in u) "" == u[n].img && "" == u[n].href && "" == u[n].title || 1 == u[n].state && _.push({
                                        img_url: u[n].img,
                                        img_link: u[n].href,
                                        img_title: u[n].title
                                    })
                                }
                                if (6962 == e[a].id) {
                                    var r = e[a].data;
                                    for (var v in r) "" == r[v].img && "" == r[v].href && "" == r[v].title || 1 == r[v].state && A.push({
                                        img_url: r[v].img,
                                        img_link: r[v].href,
                                        img_title: r[v].title
                                    })
                                }
                            }
                            l({
                                type: o.ADDATA,
                                addata: (0, t.default)({}, s.default.getState().lists.addata, {
                                    b4data: _,
                                    b5data: A
                                })
                            })
                        }), (0, c.loadAD)(e, S).then(function (e) {
                            var a = [],
                                u = [],
                                t = [],
                                n = [],
                                c = [],
                                s = [],
                                d = [];
                            for (var S in e) {
                                if (e[S].id == r) {
                                    var y = e[S].data;
                                    for (var O in y) "" == y[O].img && "" == y[O].href && "" == y[O].title || a.push({
                                        img_url: y[O].img,
                                        img_link: y[O].href,
                                        img_title: y[O].title
                                    })
                                }
                                if (e[S].id == v) {
                                    var j = e[S].data;
                                    for (var C in j) "" == j[C].img && "" == j[C].href && "" == j[C].title || 1 == j[C].state && u.push({
                                        img_url: j[C].img,
                                        img_link: j[C].href,
                                        img_title: j[C].title
                                    })
                                }
                                if (e[S].id == b) {
                                    var E = e[S].data;
                                    for (var x in E) "" == E[x].img && "" == E[x].href && "" == E[x].title || 1 == E[x].state && t.push({
                                        img_url: E[x].img,
                                        img_link: E[x].href,
                                        img_title: E[x].title
                                    })
                                }
                                if (e[S].id == i) {
                                    var D = e[S].data;
                                    for (var I in D) "" == D[I].img && "" == D[I].href && "" == D[I].title || 1 == D[I].state && n.push({
                                        img_url: D[I].img,
                                        img_link: D[I].href,
                                        img_title: D[I].title
                                    })
                                }
                                if (e[S].id == f) {
                                    var L = e[S].data;
                                    for (var k in L) "" == L[k].img && "" == L[k].href && "" == L[k].title || 1 == L[k].state && c.push({
                                        img_url: L[k].img,
                                        img_link: L[k].href,
                                        img_title: L[k].title
                                    })
                                }
                                if (e[S].id == h) {
                                    var T = e[S].data;
                                    for (var R in T) "" == T[R].img && "" == T[R].href && "" == T[R].title || 1 == T[R].state && s.push({
                                        img_url: T[R].img,
                                        img_link: T[R].href,
                                        img_title: T[R].title
                                    })
                                }
                                if (e[S].id == p) {
                                    var w = e[S].data;
                                    for (var P in w) "" == w[P].img && "" == w[P].href && "" == w[P].title || 1 == w[P].state && d.push({
                                        img_url: w[P].img,
                                        img_link: w[P].href,
                                        img_title: w[P].title
                                    })
                                }
                                if (e[S].id == m) {
                                    var N = e[S].data;
                                    for (var H in N) "" == N[H].img && "" == N[H].href && "" == N[H].title || 1 == N[H].state && _.push({
                                        img_url: N[H].img,
                                        img_link: N[H].href,
                                        img_title: N[H].title
                                    })
                                }
                                if (e[S].id == g) {
                                    var q = e[S].data;
                                    for (var B in q) "" == q[B].img && "" == q[B].href && "" == q[B].title || 1 == q[B].state && A.push({
                                        img_url: q[B].img,
                                        img_link: q[B].href,
                                        img_title: q[B].title
                                    })
                                }
                            }
                            l({
                                type: o.ADDATA,
                                addata: {
                                    topTittle: a,
                                    a2data: u,
                                    b1data: t,
                                    b2data: n,
                                    b3data: c,
                                    c1data: s,
                                    c2data: d,
                                    b4data: _,
                                    b5data: A
                                }
                            })
                        })
                    } else l({
                        type: o.ADDATA,
                        addata: {
                            topTittle: [],
                            a2data: [],
                            b1data: [],
                            b2data: [],
                            b3data: [],
                            c1data: [],
                            c2data: [],
                            b4data: [],
                            b5data: []
                        }
                    })
                })
            }
        }, l.schooladdata = function (e) {
            return function (l) {
                if (d.default.SHOW_AD) {
                    var a, u, t, n, r, v, b;
                    1 == e ? (a = 6964, u = 6968, t = 6971, n = 6975, r = 6978, v = 6981, b = 6984) : 2 == e ? (a = 6966, u = 6969, t = 6972, n = 6976, r = 6979, v = 6982, b = 6985) : 3 == e && (a = 6967, u = 6970, t = 6973, n = 6977, r = 6980, v = 6983, b = 6986);
                    var i = "";
                    if ("undefined" != typeof window)
                        if (localStorage.getItem("birthplace")) {
                            var s = JSON.parse(localStorage.getItem("birthplace"));
                            i = s.id
                        } else i = 11;
                    (0, c.loadAD)("594", i).then(function (e) {
                        if (e) {
                            var i = [],
                                c = [],
                                s = [],
                                d = [],
                                f = [],
                                h = [],
                                p = [];
                            for (var m in e) {
                                if (e[m].id == a) {
                                    var g = e[m].data;
                                    for (var S in g) "" == g[S].img && "" == g[S].href && "" == g[S].title || i.push({
                                        img_url: g[S].img,
                                        img_link: g[S].href,
                                        img_title: g[S].title
                                    })
                                }
                                if (e[m].id == u) {
                                    var y = e[m].data;
                                    for (var _ in y) "" == y[_].img && "" == y[_].href && "" == y[_].title || c.push({
                                        img_url: y[_].img,
                                        img_link: y[_].href,
                                        img_title: y[_].title
                                    })
                                }
                                if (e[m].id == t) {
                                    var A = e[m].data;
                                    for (var O in A) "" == A[O].img && "" == A[O].href && "" == A[O].title || s.push({
                                        img_url: A[O].img,
                                        img_link: A[O].href,
                                        img_title: A[O].title
                                    })
                                }
                                if (e[m].id == n) {
                                    var j = e[m].data;
                                    for (var C in j) "" == j[C].img && "" == j[C].href && "" == j[C].title || d.push({
                                        img_url: j[C].img,
                                        img_link: j[C].href,
                                        img_title: j[C].title
                                    })
                                }
                                if (e[m].id == r) {
                                    var E = e[m].data,
                                        x = [];
                                    for (var D in E) E.length < 2 ? "" == E[D].img && "" == E[D].href && "" == E[D].title || (x.push({
                                        img_url: E[D].img,
                                        img_link: E[D].href,
                                        img_title: E[D].title,
                                        id: E[D].id
                                    }), f.push(x)) : D % 2 == 0 ? "" == E[D].img && "" == E[D].href && "" == E[D].title || x.push({
                                        img_url: E[D].img,
                                        img_link: E[D].href,
                                        img_title: E[D].title,
                                        id: E[D].id
                                    }) : "" == E[D].img && "" == E[D].href && "" == E[D].title || (x.push({
                                        img_url: E[D].img,
                                        img_link: E[D].href,
                                        img_title: E[D].title,
                                        id: E[D].id
                                    }), f.push(x), x = [])
                                }
                                if (e[m].id == v) {
                                    var I = e[m].data;
                                    for (var L in I) "" == I[L].img && "" == I[L].href && "" == I[L].title || 1 == I[L].state && h.push({
                                        img_url: I[L].img,
                                        img_link: I[L].href,
                                        img_title: I[L].title
                                    })
                                }
                                if (e[m].id == b) {
                                    var k = e[m].data;
                                    for (var T in k) "" == k[T].img && "" == k[T].href && "" == k[T].title || 1 == k[T].state && p.push({
                                        img_url: k[T].img,
                                        img_link: k[T].href,
                                        img_title: k[T].title
                                    })
                                }
                            }
                            l({
                                type: o.SCHOOLADDATA,
                                schooladdata: {
                                    topTittle: i,
                                    b1ad: c,
                                    b2ad: s,
                                    b3ad: d,
                                    b4ad: f,
                                    b5ad: h,
                                    b6ad: p
                                }
                            })
                        }
                    })
                }
            }
        }, l.hideYu = function (e) {
            return function (l) {
                l({
                    type: "CHANGE_YU",
                    val: e
                })
            }
        }, l.adtjdata = function (e) {
            var l = "";
            if ("undefined" != typeof window)
                if (localStorage.getItem("birthplace")) {
                    var a = JSON.parse(localStorage.getItem("birthplace"));
                    l = a.id
                } else l = 11;
            var u = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门"
            };
            return function (a) {
                (0, i.default)(d.default.URL, "post", {
                    uri: d.default.RECOMMEND_SCHOOL,
                    province: l,
                    page: e
                }).then(function (e) {
                    if (e)
                        if (e.data && e.data.length > 0) {
                            for (var l in e.data)
                                for (var t in e.data[l].school_id = e.data[l].id, e.data[l].school_id = e.data[l].id, u) e.data[l].province == t && (e.data[l].province_name = u[t]);
                            if (a({
                                    type: o.TJADDATA,
                                    tjgxdata: {
                                        data: e.data,
                                        number: e.data.length
                                    }
                                }), "undefined" != typeof document && "undefined" != typeof window) {
                                var n = 0;
                                if (document.getElementsByClassName("li-right")) {
                                    var r = document.getElementsByClassName("li-right")[0] && document.getElementsByClassName("li-right")[0].offsetHeight,
                                        v = document.getElementsByClassName("lin-searchnav")[0] && document.getElementsByClassName("lin-searchnav")[0].offsetHeight;
                                    n = r - v + 80
                                }
                                window.localStorage.setItem("contentHeight", n)
                            }
                        } else(0, i.default)(d.default.APP_HTML + "/www/index/school_heat.json", "get", {}).then(function (e) {
                            if (e && e.length > 0 && (a({
                                    type: o.TJADDATA,
                                    tjgxdata: {
                                        data: e,
                                        number: e.length
                                    }
                                }), "undefined" != typeof document && "undefined" != typeof window && document.getElementsByClassName("li-right")[0] && document.getElementsByClassName("lin-searchnav")[0])) {
                                var l = document.getElementsByClassName("li-right")[0].offsetHeight,
                                    u = document.getElementsByClassName("lin-searchnav")[0].offsetHeight,
                                    t = l - u + 80;
                                window.localStorage.setItem("contentHeight", t)
                            }
                        })
                })
            }
        }, l.dawdle = function (e, l) {
            var a = {
                code: v.default.get("code") || "0",
                rank: v.default.get("rank") || "0",
                specials: v.default.get("specials") || "0"
            };
            return v.default.set(e, l, {
                    expires: 99999,
                    path: "/"
                }), a[e] = l,
                function (e) {
                    e({
                        type: "DAWDLE",
                        info: a
                    })
                }
        }, l.schoolheatnumfn = function (e) {
            return function (l) {
                l({
                    type: o.SCHOOLHEATNUM,
                    schoolheatnum: e
                })
            }
        }, l.recommendSchool = function (e) {
            var l = "",
                a = [];
            if ("undefined" != typeof window)
                if (localStorage.getItem("birthplace")) {
                    var u = JSON.parse(localStorage.getItem("birthplace"));
                    l = u.id
                } else l = 11;
            var t = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门"
            };
            d.default.RECOMMEND_SCHOOL;
            return function (u) {
                b.default.get("".concat(d.default.APP_UPLOAD, "/www/2.0/json/rank/").concat(e, "/").concat(l, "/lists.json")).then(function (e) {
                    if (e && "0000" == e.data.code && e.data.data && e.data.data.length > 0) {
                        for (var l in e.data.data)
                            for (var n in e.data.data[l].school_id = e.data.data[l].id, e.data.data[l].school_id = e.data.data[l].id, t) e.data.data[l].province == n && (e.data.data[l].province_name = t[n]);
                        for (var r = JSON.parse(JSON.stringify(e.data.data)), v = 0; v < r.length; v++) r[v].type = "ad";
                        a = r
                    }
                    if (u({
                            type: o.RECOMMENDDATA,
                            recommendData: {
                                data: a,
                                number: a.length
                            }
                        }), "undefined" != typeof document && "undefined" != typeof window && document.getElementsByClassName("li-right")[0] && document.getElementsByClassName("lin-searchnav")[0]) {
                        var b = document.getElementsByClassName("li-right")[0].offsetHeight,
                            i = document.getElementsByClassName("lin-searchnav")[0].offsetHeight,
                            c = b - i + 80;
                        window.localStorage.setItem("contentHeight", c)
                    }
                }).catch(function (e) {})
            }
        }, l.userInfo = function (e) {
            return function (l) {
                l({
                    type: o.USERID,
                    data: e
                })
            }
        }, l.rightSameScore = function (e) {
            return function (l) {
                l({
                    type: o.RIGHTSAMESCORE,
                    data: (0, t.default)({}, e)
                })
            }
        }, l.changeLocalProvince = function (e) {
            return function (l) {
                l({
                    type: o.LOCAL_PROVINCE,
                    id: e
                })
            }
        };
        var t = u(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),
            n = u(a("./node_modules/@babel/runtime/helpers/typeof.js"));
        a("./node_modules/core-js/modules/es6.promise.js"), a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es7.array.includes.js"), a("./node_modules/core-js/modules/es6.string.includes.js");
        var r = u(a("./utils/history.js")),
            v = (u(a("./node_modules/react-dom/index.js")), u(a("./node_modules/js-cookie/src/js.cookie.js"))),
            b = u(a("./node_modules/axios/index.js")),
            o = a("./src/constants/actionTypes.js"),
            i = (u(a("./src/constants/constants.js")), u(a("./utils/fetch.js"))),
            c = a("./utils/ad.js"),
            s = u(a("./src/redux/store/index.js")),
            d = u(a("./src/constants/api.js"))
    },
    "./src/redux/reducers/demo.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                l = arguments.length > 1 ? arguments[1] : void 0;
            switch (l.type) {
                case r.ADD_TO_CART:
                    return (0, n.default)({}, e, {
                        cart: [].concat((0, t.default)(e.cart), [l.payload])
                    });
                case r.UPDATE_CART:
                    return (0, n.default)({}, e, {
                        cart: e.cart.map(function (e) {
                            return e.product === l.payload.product ? l.payload : e
                        })
                    });
                case r.DELETE_FROM_CART:
                    return (0, n.default)({}, e, {
                        cart: e.cart.filter(function (e) {
                            return e.product !== l.payload.product
                        })
                    });
                default:
                    return e
            }
        };
        var t = u(a("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),
            n = u(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),
            r = a("./src/redux/actions/demo.js"),
            v = {
                cart: [{
                    product: 1,
                    quantity: 2,
                    unitCost: 3
                }]
            }
    },
    "./src/redux/reducers/global.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, a("./node_modules/core-js/modules/es6.number.constructor.js");
        var t = u(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),
            n = a("./src/constants/actionTypes.js"),
            r = Number(window.localStorage.getItem("localprovinceid")),
            v = {
                redirect: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            direction: "left",
                            url: "/",
                            onReady: !1
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.REDIRECT_PAGE:
                            return (0, t.default)({}, e, {
                                direction: l.redirect.direction
                            });
                        case n.HISTORY_URL:
                            return (0, t.default)({}, e, {
                                url: l.redirect.url
                            });
                        case n.IS_BACK:
                            return (0, t.default)({}, e, {
                                onReady: l.onReady
                            });
                        default:
                            return e
                    }
                },
                lists: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            demolist: {
                                data: [],
                                number: 0
                            },
                            select_school: {
                                page1: 1,
                                page2: 1,
                                page3: 1,
                                page4: 1,
                                page5: 1,
                                page6: 1,
                                page7: 1,
                                page8: 1,
                                page9: 1,
                                page10: 1,
                                page11: 1,
                                sortkey: "view_month",
                                clientTop: 0,
                                lineproid: "",
                                linespeid: "",
                                lineproyear: "",
                                linespeyear: "",
                                sys_head: "",
                                sys_footer: "",
                                school_head: "",
                                school_footer: "",
                                spe_name: "",
                                dep_name: "",
                                sys_have: !1,
                                school_have: !1,
                                yuanxi_name: ""
                            },
                            scoreSearch_school: {
                                data: [],
                                year: "",
                                number: "",
                                nodata: "none"
                            },
                            totalSearch_school: {
                                data: [],
                                year: "",
                                number: "",
                                nodata: "none"
                            },
                            school_search: {
                                data: [],
                                number: "",
                                nodata: "none"
                            },
                            professionData: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            professionForSchool: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            professionForSpecialty: {
                                data: [],
                                number: 0,
                                nodata: "none",
                                year: ""
                            },
                            subject_for_specialty: {
                                data: [],
                                number: 0
                            },
                            lineprovince: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            lineschool: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            linespecialty: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            hotschool: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            hotspecialty: {
                                data: [],
                                number: 0,
                                nodata: "none"
                            },
                            addata: {
                                topTittle: [],
                                a2data: [],
                                b1data: [],
                                b2data: [],
                                b3data: [],
                                c1data: [],
                                c2data: [],
                                b4data: [],
                                b5data: []
                            },
                            schooladdata: {
                                topTittle: [],
                                b1ad: [],
                                b2ad: [],
                                b3ad: [],
                                b4ad: [],
                                b5ad: [],
                                b6ad: []
                            },
                            schoolinfoparam: {},
                            adinfoparam: {},
                            tjgxdata: {
                                data: [],
                                number: 0
                            },
                            info: {
                                code: 0,
                                rank: 0,
                                specials: 0
                            },
                            yuFlag: !1,
                            recommendData: {
                                daa: [],
                                number: 0
                            }
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.LIST_DEMOLIST:
                            return (0, t.default)({}, e, {
                                demolist: {
                                    data: l.demolist.data,
                                    number: l.demolist.number
                                }
                            });
                        case n.LIST_DATA_LV:
                            return (0, t.default)({}, e, {
                                offsetTop: l.offsetTop
                            });
                        case "CHANGE_YU":
                            return (0, t.default)({}, e, {
                                yuFlag: l.val
                            });
                        case n.SCORE_SEARCH_SCHOOL:
                            return (0, t.default)({}, e, {
                                scoreSearch_school: (0, t.default)({}, e.scoreSearch_school, {
                                    data: l.scoreSearch_school.data,
                                    number: l.scoreSearch_school.number,
                                    year: l.scoreSearch_school.year,
                                    nodata: l.scoreSearch_school.nodata
                                })
                            });
                        case n.TOTAL_SEARCH_SCHOOL:
                            return (0, t.default)({}, e, {
                                totalSearch_school: (0, t.default)({}, e.totalSearch_school, {
                                    data: l.totalSearch_school.data,
                                    number: l.totalSearch_school.number,
                                    year: l.totalSearch_school.year,
                                    nodata: l.totalSearch_school.nodata
                                })
                            });
                        case n.SCHOOL_SEARCH:
                            return (0, t.default)({}, e, {
                                school_search: (0, t.default)({}, e.school_search, {
                                    data: l.school_search.data,
                                    number: l.school_search.number,
                                    nodata: l.school_search.nodata
                                })
                            });
                        case n.SELECT_SCHOOL:
                            return (0, t.default)({}, e, {
                                select_school: (0, t.default)({}, e.select_school, l.select_school)
                            });
                        case n.PROFESSION_DATA:
                            return (0, t.default)({}, e, {
                                professionData: {
                                    data: l.professionData.data,
                                    number: l.professionData.number,
                                    nodata: l.professionData.nodata
                                }
                            });
                        case n.PROFESSION_FOR_SCHOOL:
                            return (0, t.default)({}, e, {
                                professionForSchool: {
                                    data: l.professionForSchool.data,
                                    number: l.professionForSchool.number,
                                    nodata: l.professionForSchool.nodata
                                }
                            });
                        case n.SUBJECT_FOR_SPECIALTY:
                            return (0, t.default)({}, e, {
                                subject_for_specialty: {
                                    data: l.subject_for_specialty.data,
                                    number: l.subject_for_specialty.number
                                }
                            });
                        case n.PROFESSION_FOR_SPECIALTY:
                            return (0, t.default)({}, e, {
                                professionForSpecialty: {
                                    data: l.professionForSpecialty.data,
                                    number: l.professionForSpecialty.number,
                                    nodata: l.professionForSpecialty.nodata,
                                    year: l.professionForSpecialty.year
                                }
                            });
                        case n.LINEPROVINCE:
                            return (0, t.default)({}, e, {
                                lineprovince: {
                                    data: l.lineprovince.data,
                                    number: l.lineprovince.number,
                                    nodata: l.lineprovince.nodata
                                }
                            });
                        case n.LINESCHOOL:
                            return (0, t.default)({}, e, {
                                lineschool: {
                                    data: l.lineschool.data,
                                    number: l.lineschool.number,
                                    nodata: l.lineschool.nodata
                                }
                            });
                        case n.LINESPECIALTY:
                            return (0, t.default)({}, e, {
                                linespecialty: {
                                    data: l.linespecialty.data,
                                    number: l.linespecialty.number,
                                    nodata: l.linespecialty.nodata
                                }
                            });
                        case n.HOTSCHOOL:
                            return (0, t.default)({}, e, {
                                hotschool: {
                                    data: l.hotschool.data,
                                    number: l.hotschool.number,
                                    nodata: l.hotschool.nodata
                                }
                            });
                        case n.HOTSPECIALTY:
                            return (0, t.default)({}, e, {
                                hotspecialty: {
                                    data: l.hotspecialty.data,
                                    number: l.hotspecialty.number,
                                    nodata: l.hotspecialty.nodata
                                }
                            });
                        case n.SCHOOLINFO:
                            return (0, t.default)({}, e, {
                                schoolinfoparam: l.schoolinfoparam
                            });
                        case n.ADPARAM:
                            return (0, t.default)({}, e, {
                                adinfoparam: l.adinfoparam
                            });
                        case n.ADDATA:
                            return (0, t.default)({}, e, {
                                addata: {
                                    topTittle: l.addata.topTittle,
                                    a2data: l.addata.a2data,
                                    b1data: l.addata.b1data,
                                    b2data: l.addata.b2data,
                                    b3data: l.addata.b3data,
                                    c1data: l.addata.c1data,
                                    c2data: l.addata.c2data,
                                    b4data: l.addata.b4data,
                                    b5data: l.addata.b5data
                                }
                            });
                        case n.SCHOOLADDATA:
                            return (0, t.default)({}, e, {
                                schooladdata: {
                                    topTittle: l.schooladdata.topTittle,
                                    b1ad: l.schooladdata.b1ad,
                                    b2ad: l.schooladdata.b2ad,
                                    b3ad: l.schooladdata.b3ad,
                                    b4ad: l.schooladdata.b4ad,
                                    b5ad: l.schooladdata.b5ad,
                                    b6ad: l.schooladdata.b6ad
                                }
                            });
                        case n.TJADDATA:
                            return (0, t.default)({}, e, {
                                tjgxdata: {
                                    data: l.tjgxdata.data,
                                    number: l.tjgxdata.number
                                }
                            });
                        case "DAWDLE":
                            return (0, t.default)({}, e, {
                                info: l.info
                            });
                        case n.SCHOOLHEATNUM:
                            return (0, t.default)({}, e, {
                                schoolheatnum: l.schoolheatnum
                            });
                        case n.RECOMMENDDATA:
                            return (0, t.default)({}, e, {
                                recommendData: {
                                    data: l.recommendData.data,
                                    number: l.recommendData.number
                                }
                            });
                        default:
                            return e
                    }
                },
                slider: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            data: []
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.SCHOOL_COOKIE:
                            return (0, t.default)({}, e, {
                                data: l.schoolcookie
                            });
                        default:
                            return e
                    }
                },
                curcity: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            str: "全国"
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.IS_LOCATION:
                            return (0, t.default)({}, e, {
                                str: l.curlocation
                            });
                        default:
                            return e
                    }
                },
                showCol: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            showCol: {
                                zsjz: !0,
                                zszy: !0,
                                lnfs: !0,
                                kssj: !0,
                                lqmd: !0,
                                bmrk: !0,
                                cjcx: !0
                            },
                            colWidth: "10%"
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.SHOWCOL:
                            return (0, t.default)({}, e, {
                                showCol: l.showCol,
                                colWidth: l.colWidth
                            });
                        default:
                            return e
                    }
                },
                flksTitle: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            str: ""
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.FLKSTITLE:
                            return (0, t.default)({}, e, {
                                str: l.str
                            });
                        default:
                            return e
                    }
                },
                getUserInfo: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            data: ""
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.USERID:
                            return (0, t.default)({}, e, {
                                data: l.data
                            });
                        default:
                            return e
                    }
                },
                rightSameScore: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            data: {}
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.RIGHTSAMESCORE:
                            return (0, t.default)({}, e, {
                                data: l.data
                            });
                        default:
                            return e
                    }
                },
                localProvince: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            id: r || 11
                        },
                        l = arguments.length > 1 ? arguments[1] : void 0;
                    switch (l.type) {
                        case n.LOCAL_PROVINCE:
                            return (0, t.default)({}, e, {
                                id: l.id
                            });
                        default:
                            return e
                    }
                }
            };
        l.default = v
    },
    "./src/redux/reducers/index.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, a("./node_modules/core-js/modules/es6.object.assign.js");
        var t = a("./node_modules/redux/es/redux.js"),
            n = u(a("./src/redux/reducers/global.js")),
            r = u(a("./src/redux/reducers/demo.js")),
            v = Object.assign({}, n.default, r.default),
            b = (0, t.combineReducers)(v);
        l.default = b
    },
    "./src/redux/store/index.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = a("./node_modules/redux/es/redux.js"),
            n = u(a("./node_modules/redux-thunk/es/index.js")),
            r = a("./node_modules/redux-devtools-extension/index.js"),
            v = u(a("./src/redux/reducers/index.js")),
            b = (0, t.createStore)(v.default, (0, r.composeWithDevTools)((0, t.applyMiddleware)(n.default)));
        l.default = b
    },
    "./utils/ad.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.adparams = function () {
            if (window && window.adstat) try {
                window.adstat()
            } catch (e) {}
        }, l.loadAD = function (e, l) {
            var a = "";
            a = l || "11";
            if ("undefined" != typeof window) var u = new Promise(function (l, u) {
                (0, r.loadScript)(n.default.AD_URL + e + "/" + a + ".js", function (e) {
                    l(window.json_ad)
                })
            });
            return u
        }, l.linkAD = function (e) {
            void 0 !== ("undefined" == typeof window ? "undefined" : (0, t.default)(window)) && (-1 != e.indexOf("http") ? window.open(e) : window.open("http://" + e))
        };
        var t = u(a("./node_modules/@babel/runtime/helpers/typeof.js"));
        a("./node_modules/core-js/modules/es6.promise.js");
        var n = u(a("./src/constants/api.js")),
            r = a("./utils/utils.js");
        u(a("./node_modules/swiper/dist/js/swiper.js"));
        a("./node_modules/swiper/dist/css/swiper.min.css");
        u(a("./utils/history.js"))
    },
    "./utils/fetch.js": function (e, l, a) {
        "use strict";
        var u = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = u(a("./node_modules/@babel/runtime/helpers/objectSpread.js"));
        a("./node_modules/core-js/modules/es7.array.includes.js"), a("./node_modules/core-js/modules/es6.string.includes.js"), a("./node_modules/core-js/modules/es6.regexp.constructor.js"), a("./node_modules/core-js/modules/es6.promise.js");
        var n = u(a("./node_modules/@babel/runtime/regenerator/index.js"));
        a("./node_modules/regenerator-runtime/runtime.js");
        var r = u(a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
        a("./node_modules/core-js/modules/es6.regexp.split.js"), a("./node_modules/core-js/modules/es6.regexp.replace.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.date.to-string.js");
        var v = u(a("./node_modules/axios/index.js")),
            b = (a("./utils/utils.js"), u(a("./src/constants/api.js"))),
            o = u(a("./node_modules/crypto-js/index.js")),
            i = u(a("./node_modules/crypto-js/enc-base64.js")),
            c = u(a("./node_modules/js-cookie/src/js.cookie.js")),
            s = u(a("./node_modules/js-md5/src/md5.js")),
            d = {
                isEncryption: !0,
                isAccessToken: !1,
                isPlanConfig: !0,
                isSpecialScoreConfig: !0,
                isProvinceScoreConfig: !0,
                filterCacheList: ["gk/school/heat"],
                eneryptionList: ["gk/recomScore/special", "gk/score/special"]
            };
        d = window.apiConfig ? window.apiConfig : d;
        var f = "MGNugxePDAjz4JEd",
            h = "HRWDCXgkEoOdwfN4Fc3v5YqjyZ2pSVQJ",
            p = "2.1",
            m = !0,
            g = "0000",
            S = {};

        function y(e) {
            var l = new Array,
                a = 0;
            for (var u in e) l[a] = u, a++;
            var t = l.sort(),
                n = {};
            for (var r in t) Array.isArray(e[t[r]]) ? n[t[r]] = e[t[r]].toString() : n[t[r]] = e[t[r]];
            return n
        }

        function _() {
            var e = "";
            if ("undefined" != typeof window) {
                window.localStorage.getItem("openid") ? e = window.localStorage.getItem("openid") : (e = Math.random().toString(12).substr(2), window.localStorage.setItem("openid", e));
                var l = e.substr(0, 6) + "=" + e.substr(6, 2) + "=" + e.substr(8) + "_" + function () {
                        var e;
                        c.default.get("timeStap") ? e = c.default.get("timeStap") : (e = Math.round((new Date).getTime() / 1e3).toString(), c.default.set("timeStap", e, {
                            expires: 1 / 24 / 60 * 5,
                            path: "/"
                        }));
                        return e
                    }(),
                    a = o.default.PBKDF2(f, "secret", {
                        keySize: 8,
                        iterations: 1e3,
                        hasher: o.default.algo.SHA256
                    }).toString(),
                    u = o.default.PBKDF2(h, "secret", {
                        keySize: 4,
                        iterations: 1e3,
                        hasher: o.default.algo.SHA256
                    }).toString();
                return o.default.AES.encrypt(o.default.enc.Utf8.parse(l), o.default.enc.Hex.parse(a), {
                    iv: o.default.enc.Hex.parse(u)
                }).toString()
            }
        }

        function A(e) {
            return e.replace(/[^\u0000-\u00FF]/g, function (e) {
                return escape(e).replace(/(%u)(\w{4})/gi, "\\u$2")
            })
        }

        function O(e) {
            var l = "";
            for (var a in e) {
                var u = void 0 !== e[a] ? e[a] : "";
                "elective" == a && (u = -1 == u.indexOf(",") ? u.split(" ") : u.split(",")), Array.isArray(u) ? l += "&" + a + "=" + A(JSON.stringify(u)).toLowerCase() : l += "&" + a + "=" + u
            }
            return l
        }

        function j() {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = (0, r.default)(n.default.mark(function e() {
                var l;
                return n.default.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return a = void 0, u = void 0, t = void 0, s = void 0, a = _(), u = Math.round((new Date).getTime() / 1e3).toString(), t = "client_id=" + f + "&redirect_uri=&response_type=token&state=" + p + "&timestamp=" + u + "&open_id=" + a, s = o.default.HmacSHA1(t, h), l = {
                                timestamp: u,
                                signature: i.default.stringify(s)
                            }, e.next = 3, new Promise(function () {
                                var e = (0, r.default)(n.default.mark(function e(a, u) {
                                    return n.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.default.post(b.default.TOKEN, {
                                                    client_id: f,
                                                    redirect_uri: "",
                                                    response_type: "token",
                                                    scope: "",
                                                    signature: l.signature,
                                                    state: p,
                                                    timestamp: l.timestamp,
                                                    open_id: _()
                                                }).then(function (e) {
                                                    e && e.data.code == g && (e && e.data.data.access_token && c.default.set("token", e.data.data.access_token, {
                                                        expires: 1 / 24 * 2,
                                                        path: "/"
                                                    }), a(e))
                                                }).catch(function (e) {
                                                    a()
                                                });
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (l, a) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                            return e.stop()
                    }
                    var a, u, t, s
                }, e)
            }))).apply(this, arguments)
        }

        function E(e, l, a, u) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = (0, r.default)(n.default.mark(function e(l, a, u, t) {
                var r;
                return n.default.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, v.default)({
                                method: a,
                                url: l,
                                timeout: u,
                                data: t
                            }).catch(function (e) {});
                        case 2:
                            return r = e.sent, d.filterCacheList.map(function (e) {
                                new RegExp(e).test(l) || (S[l] = r)
                            }), e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }))).apply(this, arguments)
        }
        v.default.interceptors.request.use(function () {
            var e = (0, r.default)(n.default.mark(function e(l) {
                return n.default.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (c.default.get("token") || !m) {
                                e.next = 8;
                                break
                            }
                            if (m = !1, !d.isAccessToken) {
                                e.next = 7;
                                break
                            }
                            return e.next = 5, j();
                        case 5:
                            e.next = 8;
                            break;
                        case 7:
                        case 8:
                            return e.abrupt("return", l);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function (l) {
                return e.apply(this, arguments)
            }
        }(), function (e) {
            return Promise.reject(e)
        });
        var D = (0, r.default)(n.default.mark(function e() {
            var l, a, u, r, v, i, f, h, p, m, _, j, C, x, D, I, L, k, T, R, w, P, N, H, q, B, F = arguments;
            return n.default.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (l = F.length > 0 && void 0 !== F[0] ? F[0] : "", a = F.length > 1 && void 0 !== F[1] ? F[1] : "get", u = F.length > 2 && void 0 !== F[2] ? F[2] : {}, r = F.length > 3 && void 0 !== F[3] ? F[3] : 5e3, v = c.default.get("token") || "", d.isEncryption && /\S+\/api\/(\S+)/.test(u.uri) && (h = RegExp.$1, d.eneryptionList.includes(h))) {
                            for (_ in i = y((0, t.default)({}, u)), p = "", /http:\/\//.test(b.default.URL) ? p = b.default.URL.replace("http://", "") : /https:\/\//.test(b.default.URL) && (p = b.default.URL.replace("https://", "")), m = "", "cdn_beta" == b.default.API_TYPE ? m = p.substr(0, p.indexOf("/")) + "/api/?" : "cdn_release" == b.default.API_TYPE && (m = p.substr(0, p.indexOf("/")) + "/gkcx/api/?"), i) m += _ + "=" + i[_] + "&";
                            /elective=(\S*)&f/gi.test(m) && (j = RegExp.$1, C = j.indexOf("&"), j = j.substr(0, C)), j && (x = -1 == j.indexOf(",") ? j.split(" ") : j.split(","), m = m.replace(new RegExp(j, "g"), A(JSON.stringify(x)).toLowerCase())), f = m.replace(/undefined/g, "").replace(/&$/gi, ""), f = o.default.HmacSHA1(o.default.enc.Utf8.parse(f), "D23ABC@#56"), f = o.default.enc.Base64.stringify(f).toString(), f = (0, s.default)(f)
                        }
                        for (k in /\.json/.test(l) || (l += (l.indexOf("?") < 0 ? "?" : "&") + O(y((0, t.default)({}, u, {
                                signsafe: f,
                                access_token: v
                            }))).substr(1)), l = (l = decodeURIComponent(l).replace(/"/g, "")).replace(/\[\]/, ""), D = {}, I = y((0, t.default)({}, u, {
                                access_token: v,
                                signsafe: f
                            })), L = {}, I) "elective" == k ? "" == I[k] ? L[k] = "" : L[k] = -1 == I[k].indexOf(",") ? I[k].split(" ") : I[k].split(",") : L[k] = "vote" == k ? -1 == I[k].indexOf(",") ? I[k].split(" ") : I[k].split(",") : I[k];
                        for (R in T = "get" == a ? JSON.stringify(y((0, t.default)({}, u, {
                                access_token: v,
                                signsafe: f
                            }))) : L, S) l == R && (D = S[R]);
                        if (!D || !D.data) {
                            e.next = 20;
                            break
                        }
                        e.next = 23;
                        break;
                    case 20:
                        return e.next = 22, E(l, a, r, T);
                    case 22:
                        D = e.sent;
                    case 23:
                        if (!(D && D.data && D.data.data && D.data.data.text)) {
                            e.next = 31;
                            break
                        }
                        return w = D.data && D.data.data && D.data.data.text, P = u.uri, N = o.default.PBKDF2("D23ABC@#56", "secret", {
                            keySize: 8,
                            iterations: 1e3,
                            hasher: o.default.algo.SHA256
                        }).toString(), H = o.default.PBKDF2(P, "secret", {
                            keySize: 4,
                            iterations: 1e3,
                            hasher: o.default.algo.SHA256
                        }).toString(), q = o.default.lib.CipherParams.create({
                            ciphertext: o.default.enc.Hex.parse(w)
                        }), B = o.default.AES.decrypt(q, o.default.enc.Hex.parse(N), {
                            iv: o.default.enc.Hex.parse(H)
                        }), e.abrupt("return", {
                            code: g,
                            data: JSON.parse(B.toString(o.default.enc.Utf8)),
                            message: g
                        });
                    case 31:
                        if (!Array.isArray(D)) {
                            e.next = 33;
                            break
                        }
                        return e.abrupt("return", D);
                    case 33:
                        return e.abrupt("return", D && D.data || {});
                    case 34:
                    case "end":
                        return e.stop()
                }
            }, e)
        }));
        l.default = D
    },
    "./utils/history.js": function (e, l, a) {
        "use strict";
        var u;
        (Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0, "undefined" != typeof document) && (u = (0, a("./node_modules/history/createBrowserHistory.js").default)());
        var t = u;
        l.default = t
    },
    "./utils/utils.js": function (module, exports, __webpack_require__) {
        "use strict";
        var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.loadScript = loadScript, exports.loadCNZZ = loadCNZZ, exports.loadHTML = loadHTML, exports.setCookie = setCookie, exports.getCookie = getCookie, exports.delCookie = delCookie, exports.getLog = getLog, exports.hasParameter = hasParameter, exports.asc = asc, exports.des = des, exports.ascZH = ascZH, exports.replaceParamVal = replaceParamVal, exports.SelectCol = SelectCol, exports.isPlaceholderSupport = isPlaceholderSupport, exports.animate = animate, exports.setLocalStorage = setLocalStorage, exports.getLocalStorage = getLocalStorage, __webpack_require__("./node_modules/core-js/modules/es6.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es6.regexp.replace.js"), __webpack_require__("./node_modules/core-js/modules/es6.number.constructor.js"), __webpack_require__("./node_modules/core-js/modules/es6.regexp.search.js"), __webpack_require__("./node_modules/core-js/modules/es6.regexp.match.js"), __webpack_require__("./node_modules/core-js/modules/es6.regexp.constructor.js");
        var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

        function loadScript(e, l) {
            if ("undefined" != typeof document) var a = document.createElement("script");
            a.type = "text/javascript", void 0 !== l && (a.readyState ? a.onreadystatechange = function () {
                "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, l())
            } : a.onload = function () {
                l()
            }), a.src = e, "undefined" != typeof document && document.body.appendChild(a)
        }

        function loadCNZZ(e, l) {
            if ("undefined" != typeof document) {
                var a = document.createElement("div"),
                    u = document.createElement("script");
                a.appendChild(u), a.setAttribute("display", "none")
            }
            u.type = "text/javascript", void 0 !== l && (u.readyState ? u.onreadystatechange = function () {
                "loaded" !== u.readyState && "complete" !== u.readyState || (u.onreadystatechange = null, l())
            } : u.onload = function () {
                l()
            }), u.src = e, "undefined" != typeof document && document.body.appendChild(a)
        }

        function loadHTML(e, l) {
            var a = "";
            "" != e ? (void 0 !== ("undefined" == typeof window ? "undefined" : (0, _typeof2.default)(window)) && window.XMLHttpRequest && (a = new XMLHttpRequest), a.onreadystatechange = function () {
                void 0 !== ("undefined" == typeof document ? "undefined" : (0, _typeof2.default)(document)) && 4 == a.readyState && (document.getElementById(l).innerHTML = a.responseText)
            }, a.open("GET", e, !0), a.send(null)) : alert("请输入网页地址。")
        }

        function setCookie(e, l) {
            var a = new Date;
            return a.setTime(a.getTime() + 6048e5), "undefined" != typeof document && (document.cookie = e + "=" + escape(l) + ";expires=" + a.toGMTString() + ";path=/"), !0
        }

        function getCookie(e) {
            var l, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            if ("undefined" != typeof document) return (l = document.cookie.match(a)) ? unescape(l[2]) : null
        }

        function delCookie(e) {
            var l = new Date;
            l.setTime(l.getTime() - 1);
            var a = getCookie(e);
            return null != a && "undefined" != typeof document && (document.cookie = e + "=" + a + ";expires=" + l.toGMTString() + ";path=/"), !0
        }

        function getLog() {}

        function hasParameter(e, l) {
            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                u = l.location.search.substr(1).match(a);
            return null != u ? decodeURI(u[2]) : ""
        }

        function asc(e) {
            return function (l, a) {
                return Number(l[e]) - Number(a[e])
            }
        }

        function des(e) {
            return function (l, a) {
                var u = Number(l[e]);
                return Number(a[e]) - u
            }
        }

        function ascZH(e) {
            return function (l, a) {
                return Number(l[e]) - Number(a[e])
            }
        }

        function replaceParamVal(oldUrl, paramName, replaceWith) {
            var re = eval("/(" + paramName + "=)([^&]*)/gi"),
                nUrl = oldUrl.replace(re, paramName + "=" + replaceWith);
            return nUrl
        }

        function SelectCol(e, l) {
            if ("undefined" != typeof window) {
                var a = window.location.href,
                    u = "";
                "schoolprop" == e && (l += "类"), "string" == typeof l && l.indexOf("全部") > -1 && (l = ""), u = -1 == a.indexOf(e) ? -1 != e.indexOf("&") ? -1 == a.indexOf("?") ? (a += "?") + e + "=" + l : a + e + "=" + l : -1 == a.indexOf("?") ? (a += "?") + e + "=" + l : a + "&" + e + "=" + l : replaceParamVal(a, e, l), window.history.replaceState && window.history.replaceState(null, "筛选条件", u)
            }
        }

        function isPlaceholderSupport() {
            return "placeholder" in document.createElement("input")
        }

        function getStyle(e, l) {
            return e.currentStyle ? e.currentStyle[l] : window.getComputedStyle(e, null)[l]
        }

        function animate(e, l, a, u) {
            clearInterval(e.timer), e.timer = setInterval(function () {
                var t = parseInt(getStyle(e, l)),
                    n = (a - t) / u;
                n = n > 0 ? Math.ceil(n) : Math.floor(n), e.style[l] = t + n + "px", t == a && clearInterval(e.timer)
            }, 30)
        }

        function setLocalStorage(e, l) {
            var a = (new Date).getTime(),
                u = JSON.stringify({
                    val: l,
                    timer: a
                });
            try {
                localStorage.setItem(e, u)
            } catch (e) {
                throw isQuotaExceeded(e) ? new Error("Error: 本地存储超过限制") : new Error("Error: 保存到本地存储失败")
            }
        }

        function isQuotaExceeded(e) {
            var l = !1;
            if (e)
                if (e.code) switch (e.code) {
                    case 22:
                        l = !0;
                        break;
                    case 1014:
                        "NS_ERROR_DOM_QUOTA_REACHED" === e.name && (l = !0)
                } else -2147024882 === e.number && (l = !0);
            return l
        }

        function getLocalStorage(e) {
            if (localStorage.getItem(e)) {
                var l = localStorage.getItem(e),
                    a = JSON.parse(l);
                return (new Date).getTime() - a.timer > 72e5 ? (localStorage.removeItem(e), null) : a.val
            }
            return null
        }
    },
    0: function (e, l, a) {
        a("./node_modules/babel-polyfill/lib/index.js"), e.exports = a("./src/index.js")
    }
});