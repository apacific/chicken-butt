module.exports = {

"[project]/lib/cn.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
const cn = (...classes)=>classes.filter(Boolean).join(' ');
}}),
"[project]/components/CardShell.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CardShell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
function CardShell({ children, className, style, bgImage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-sm shadow-xl', 'portrait:w-[92vw] portrait:aspect-[1/1.618] portrait:max-h-[92vh]', 'landscape:h-[92vh] landscape:aspect-[1.618/1] landscape:max-w-[92vw]', 'bg-cover bg-center bg-no-repeat', className),
            style: {
                // only set the image inline so the size/position can be overridden by classes
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                ...style
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
                }, void 0, false, {
                    fileName: "[project]/components/CardShell.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full overflow-hidden text-shadow-2xs text-shadow-black",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/CardShell.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CardShell.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CardShell.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/LogoBlock.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LogoBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
function LogoBlock({ src = '/images/logo-brush.png', alt = 'Restaurant Logo' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full grid place-items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            width: 384,
            height: 148,
            className: "h-auto",
            style: {
                width: '30vw',
                maxWidth: '420px',
                minWidth: '384px'
            },
            priority: true
        }, void 0, false, {
            fileName: "[project]/components/ui/LogoBlock.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/LogoBlock.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/NavPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function NavPanel({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full grid place-items-center mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[min(90%,600px)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: it.onClick,
                            className: "w-full py-2 text-white/95 text-xl sm:text-2xl font-chango   capitalize decoration-white/50 hover:text-white text-center text-shadow-2xs text-shadow-black",
                            children: it.label
                        }, void 0, false, {
                            fileName: "[project]/components/ui/NavPanel.tsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, this)
                    }, it.label, false, {
                        fileName: "[project]/components/ui/NavPanel.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ui/NavPanel.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/NavPanel.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/NavPanel.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/cards/HomeCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomeCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$NavPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/NavPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function HomeCard({ onFood, onBeverages }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-6 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/cards/HomeCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$NavPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                items: [
                    {
                        label: 'FOOD',
                        onClick: onFood
                    },
                    {
                        label: 'BEVERAGES',
                        onClick: onBeverages
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/cards/HomeCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/HomeCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/cards/SectionCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SectionCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$NavPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/NavPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SectionCard({ section, subsections, onBack, onPick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-6 relative flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "absolute left-6 top-6 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        "aria-label": "Back",
                        className: "rounded-lg text-2xl leading-none hover:opacity-90 font-chango mr-8 hover:text-white text-shadow-2xs text-shadow-white hover:text-shadow-black",
                        children: "↩"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/SectionCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white/90 text-xl sm:text-2xl font-chango uppercase tracking-wide text-shadow-2xs text-shadow-black",
                        children: section
                    }, void 0, false, {
                        fileName: "[project]/components/cards/SectionCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/SectionCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/cards/SectionCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$NavPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                items: subsections.map((s)=>({
                        label: s,
                        onClick: ()=>onPick(s)
                    }))
            }, void 0, false, {
                fileName: "[project]/components/cards/SectionCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/SectionCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/cards/SubsectionGallery.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SubsectionGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/OrderContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SubsectionGallery({ section, subsection, items, index, setIndex, onBack, onOpenOrder }) {
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrder"])();
    const current = items[index];
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const prev = (e)=>{
        e?.stopPropagation();
        setExpanded(false);
        setIndex((index - 1 + items.length) % items.length);
    };
    const next = (e)=>{
        e?.stopPropagation();
        setExpanded(false);
        setIndex((index + 1) % items.length);
    };
    const handleToggle = ()=>setExpanded((v)=>!v);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-6 relative flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "absolute left-6 top-6 flex items-center gap-3 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onBack();
                        },
                        "aria-label": "Back",
                        className: "rounded-lg text-2xl leading-none hover:opacity-90 font-chango mr-8 hover:text-white text-shadow-2xs text-shadow-white",
                        children: "↩"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/SubsectionGallery.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white/90 text-lg sm:text-xl uppercase tracking-wide font-chango",
                        children: [
                            section,
                            " · ",
                            subsection
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cards/SubsectionGallery.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/SubsectionGallery.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col justify-end cursor-pointer",
                onClick: handleToggle,
                children: current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 backdrop-blur-[1px] p-5 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-2xl sm:text-3xl font-chango",
                                    children: current.name
                                }, void 0, false, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-300 text-2xl font-chango",
                                    children: [
                                        "$",
                                        current.price.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cards/SubsectionGallery.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                current.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-white/90 text-3xl leading-relaxed font-engagement",
                                    children: current.description
                                }, void 0, false, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                addItem(current); // uses existing context; quantity/notes optional
                                            },
                                            className: "px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-none font-chango text-shadow-2xs text-shadow-black",
                                            children: "Add to Order"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onOpenOrder();
                                            },
                                            className: "px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-none font-chango text-shadow-2xs text-shadow-black",
                                            children: "View Order"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prev,
                                    className: "px-3 py-1.5 bg-white/15 text-white hover:bg-white/25 rounded-none font-chango",
                                    children: "‹ Prev"
                                }, void 0, false, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: next,
                                    className: "px-3 py-1.5 bg-white/15 text-white hover:bg-white/25 rounded-none font-chango",
                                    children: "Next ›"
                                }, void 0, false, {
                                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cards/SubsectionGallery.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cards/SubsectionGallery.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cards/SubsectionGallery.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/SubsectionGallery.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/cards/OrderCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OrderCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/OrderContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function OrderCard({ onBack, onCloseToMenu }) {
    const { orderItems, removeOne, removeAllOf, clearOrder, total } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrder"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-6 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        "aria-label": "Back",
                        className: "rounded-lg text-2xl leading-none hover:opacity-90 font-chango mr-8 hover:text-white text-shadow-2xs text-shadow-white hover:text-shadow-black",
                        children: "↩"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white/95 text-3xl font-chango text-shadow-2xs text-shadow-black",
                        children: "Your Order"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/OrderCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-3 overflow-auto pr-2 max-h-[65%]",
                children: orderItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/90 font-engagement text-2xl",
                    children: "No items yet."
                }, void 0, false, {
                    fileName: "[project]/components/cards/OrderCard.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this) : orderItems.map((l, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-white/15 rounded px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/95 text-shadow-2xs text-shadow-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-chango",
                                        children: [
                                            l.name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-80",
                                                children: [
                                                    "x",
                                                    l.quantity
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cards/OrderCard.tsx",
                                                lineNumber: 24,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cards/OrderCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    l.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm opacity-90 italic",
                                        children: [
                                            "“",
                                            l.note,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cards/OrderCard.tsx",
                                        lineNumber: 25,
                                        columnNumber: 28
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: [
                                            "$",
                                            (l.price * l.quantity).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cards/OrderCard.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeOne(l.id),
                                        className: "bg-white/80 text-black rounded px-2 py-1 font-chango text-shadow-2xs text-shadow-orange",
                                        children: "-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cards/OrderCard.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeAllOf(l.id),
                                        className: "bg-red-600 text-white rounded px-2 py-1 font-chango text-shadow-2xs text-shadow-black",
                                        children: "Remove"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cards/OrderCard.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${l.id}-${l.note ?? ''}-${idx}`, true, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/cards/OrderCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-white/95 text-2xl font-engagement",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "$",
                                    total.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 39,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>alert('Checkout: integrate payment or POST to backend'),
                                className: "font-chango bg-green-600 hover:bg-green-700 text-white text-shadow-sky px-4 py-2 rounded w-full",
                                children: "Checkout"
                            }, void 0, false, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCloseToMenu,
                                className: "font-chango bg-white/80 hover:bg-white text-black text-shadow-sky px-4 py-2 rounded w-full",
                                children: "Return to Menu"
                            }, void 0, false, {
                                fileName: "[project]/components/cards/OrderCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    orderItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearOrder,
                        className: "text-white/90 no-underline border-2 border-solid text-m p-4 font-chango text-shadow-2xs text-shadow-black hover:bg-black",
                        children: "Clear order"
                    }, void 0, false, {
                        fileName: "[project]/components/cards/OrderCard.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cards/OrderCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cards/OrderCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/menu.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MENU": (()=>MENU)
});
const MENU = [
    // FOOD — chicken
    {
        id: 1,
        section: 'food',
        subsection: 'chicken',
        name: 'Whole Chicken',
        price: 18.0,
        description: 'Fried whole chicken, herbed skin, juicy inside.',
        image: '/images/whole-chicken.webp'
    },
    {
        id: 2,
        section: 'food',
        subsection: 'chicken',
        name: 'Half Chicken',
        price: 10.0,
        description: 'Fried half chicken, crisp skin.',
        image: '/images/half-chicken.webp'
    },
    // FOOD — sides
    {
        id: 3,
        section: 'food',
        subsection: 'sides',
        name: 'Shoestring Fries',
        price: 3.5,
        description: 'Thin-cut Idaho potatoes, fried and salted to perfection.',
        image: '/images/shoestring-fries.webp'
    },
    {
        id: 4,
        section: 'food',
        subsection: 'sides',
        name: 'Curly Fries',
        price: 3.75,
        description: 'Spiral-cut potatoes, extra-seasoned and extra crispy.',
        image: '/images/curly-fries.webp'
    },
    {
        id: 5,
        section: 'food',
        subsection: 'sides',
        name: 'Onion Rings',
        price: 4.0,
        description: 'Battered rings, sweet onion.',
        image: '/images/onion-rings.webp'
    },
    {
        id: 6,
        section: 'food',
        subsection: 'sides',
        name: 'Mac and Cheese',
        price: 3.25,
        description: 'Oven-baked macaroni and four-cheese blend.',
        image: '/images/mac-and-cheese.webp'
    },
    {
        id: 7,
        section: 'food',
        subsection: 'sides',
        name: 'Corn on the Cob',
        price: 3.25,
        description: 'Buttered sweet corn, roasted.',
        image: '/images/corn-on-the-cob.webp'
    },
    {
        id: 8,
        section: 'food',
        subsection: 'sides',
        name: 'BBQ Beans',
        price: 3.25,
        description: 'Smoky-sweet beans with pork belly and spices.',
        image: '/images/bbq-beans.webp'
    },
    {
        id: 9,
        section: 'food',
        subsection: 'sides',
        name: 'Applesauce',
        price: 2.5,
        description: 'Chilled, lightly spiced.',
        image: '/images/applesauce.webp'
    },
    {
        id: 10,
        section: 'food',
        subsection: 'sides',
        name: 'Fruit Salad',
        price: 3.0,
        description: 'Seasonal mix, chilled.',
        image: '/images/fruit-salad.webp'
    },
    // FOOD — extras
    {
        id: 11,
        section: 'food',
        subsection: 'extras',
        name: 'Belgian Waffle',
        price: 5.5,
        description: 'Crispy edges, fluffy center, powdered sugar.',
        image: '/images/belgian-waffle.webp'
    },
    // FOOD — desserts
    {
        id: 12,
        section: 'food',
        subsection: 'desserts',
        name: 'Soft-Serve',
        price: 4.0,
        description: 'Vanilla, chocolate, or blackberry.',
        image: '/images/soft-serve.webp'
    },
    {
        id: 13,
        section: 'food',
        subsection: 'desserts',
        name: 'Chocolate Cake',
        price: 6.0,
        description: 'Rich layers, dark chocolate ganache.',
        image: '/images/chocolate-cake.webp'
    },
    // BEVERAGES — soft drinks
    {
        id: 14,
        section: 'beverages',
        subsection: 'soft drinks',
        name: 'Cola',
        price: 2.5,
        description: 'Chilled cola over ice.',
        image: '/images/cola.webp'
    },
    {
        id: 15,
        section: 'beverages',
        subsection: 'soft drinks',
        name: 'Diet Cola',
        price: 2.5,
        description: 'Zero sugar, classic taste.',
        image: '/images/diet-cola.webp'
    },
    // BEVERAGES — iced tea
    {
        id: 16,
        section: 'beverages',
        subsection: 'iced tea',
        name: 'Iced Tea',
        price: 3.0,
        description: 'Black tea over ice, lemon slice.',
        image: '/images/iced-tea.webp'
    },
    // BEVERAGES — iced coffee
    {
        id: 17,
        section: 'beverages',
        subsection: 'iced coffee',
        name: 'Iced Coffee',
        price: 4.0,
        description: 'Cold brew, naturally smooth.',
        image: '/images/iced-coffee.webp'
    },
    // BEVERAGES — bottled water
    {
        id: 18,
        section: 'beverages',
        subsection: 'bottled water',
        name: 'Bottled Water',
        price: 2.0,
        description: 'Still spring water, chilled.',
        image: '/images/bottled-water.webp'
    }
];
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/page.tsx
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CardShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$HomeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cards/HomeCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$SectionCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cards/SectionCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$SubsectionGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cards/SubsectionGallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$OrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cards/OrderCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Page() {
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: 'home'
    });
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {
            food: {},
            beverages: {}
        };
        for (const it of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MENU"])(map[it.section][it.subsection] ??= []).push(it);
        return map;
    }, []);
    const goHome = ()=>setView({
            name: 'home'
        });
    const goSection = (section)=>setView({
            name: 'section',
            section
        });
    const goSubsection = (section, subsection)=>setView({
            name: 'subsection',
            section,
            subsection,
            index: 0
        });
    const openOrder = ()=>setView((v)=>v.name === 'subsection' ? {
                name: 'order',
                from: {
                    section: v.section,
                    subsection: v.subsection,
                    index: v.index
                }
            } : {
                name: 'order'
            });
    const bgImage = view.name === 'subsection' ? grouped[view.section][view.subsection]?.[view.index]?.image : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        bgImage: bgImage,
        // ✅ shrink the home logo background; other views use the CardShell default (bg-cover)
        className: view.name === 'home' ? 'bg-contain bg-center bg-no-repeat' : undefined,
        children: [
            view.name === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$HomeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onFood: ()=>goSection('food'),
                onBeverages: ()=>goSection('beverages')
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            view.name === 'section' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$SectionCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                section: view.section,
                subsections: Object.keys(grouped[view.section]).sort(),
                onBack: goHome,
                onPick: (sub)=>goSubsection(view.section, sub)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            view.name === 'subsection' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$SubsectionGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                section: view.section,
                subsection: view.subsection,
                items: grouped[view.section][view.subsection] || [],
                index: view.index,
                setIndex: (i)=>setView({
                        ...view,
                        index: i
                    }),
                onBack: ()=>goSection(view.section),
                onOpenOrder: openOrder
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            view.name === 'order' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cards$2f$OrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onBack: ()=>{
                    if (view.from) setView({
                        name: 'subsection',
                        ...view.from
                    });
                    else goHome();
                },
                onCloseToMenu: ()=>{
                    if (view.from) setView({
                        name: 'subsection',
                        ...view.from
                    });
                    else goHome();
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_e16b7e3d._.js.map