(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "createQuestion",
    ()=>createQuestion,
    "createQuiz",
    ()=>createQuiz,
    "deleteQuestion",
    ()=>deleteQuestion,
    "deleteQuiz",
    ()=>deleteQuiz,
    "findAttemptById",
    ()=>findAttemptById,
    "findAttemptsForQuiz",
    ()=>findAttemptsForQuiz,
    "findQuestionById",
    ()=>findQuestionById,
    "findQuestionsForQuiz",
    ()=>findQuestionsForQuiz,
    "findQuizById",
    ()=>findQuizById,
    "findQuizzesForCourse",
    ()=>findQuizzesForCourse,
    "publishQuiz",
    ()=>publishQuiz,
    "startQuizAttempt",
    ()=>startQuizAttempt,
    "submitAttempt",
    ()=>submitAttempt,
    "updateAttempt",
    ()=>updateAttempt,
    "updateQuestion",
    ()=>updateQuestion,
    "updateQuiz",
    ()=>updateQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;
const QUESTIONS_API = `${HTTP_SERVER}/api/questions`;
const ATTEMPTS_API = `${HTTP_SERVER}/api/attempts`;
const findQuizzesForCourse = async (courseId)=>{
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
    return data;
};
const findQuizById = async (quizId)=>{
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
    return data;
};
const createQuiz = async (courseId, quiz)=>{
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return data;
};
const updateQuiz = async (quiz)=>{
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};
const deleteQuiz = async (quizId)=>{
    const { data } = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
    return data;
};
const publishQuiz = async (quizId, published)=>{
    const { data } = await axiosWithCredentials.put(`${QUIZZES_API}/${quizId}/publish`, {
        published
    });
    return data;
};
const findQuestionsForQuiz = async (quizId)=>{
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/questions`);
    return data;
};
const findQuestionById = async (questionId)=>{
    const { data } = await axiosWithCredentials.get(`${QUESTIONS_API}/${questionId}`);
    return data;
};
const createQuestion = async (quizId, question)=>{
    const { data } = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/questions`, question);
    return data;
};
const updateQuestion = async (question)=>{
    const { data } = await axiosWithCredentials.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
};
const deleteQuestion = async (questionId)=>{
    const { data } = await axiosWithCredentials.delete(`${QUESTIONS_API}/${questionId}`);
    return data;
};
const startQuizAttempt = async (quizId)=>{
    const { data } = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/attempts`);
    return data;
};
const findAttemptsForQuiz = async (quizId)=>{
    const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts`);
    return data;
};
const findAttemptById = async (attemptId)=>{
    const { data } = await axiosWithCredentials.get(`${ATTEMPTS_API}/${attemptId}`);
    return data;
};
const updateAttempt = async (attempt)=>{
    const { data } = await axiosWithCredentials.put(`${ATTEMPTS_API}/${attempt._id}`, attempt);
    return data;
};
const submitAttempt = async (attemptId, answers)=>{
    const { data } = await axiosWithCredentials.post(`${ATTEMPTS_API}/${attemptId}/submit`, {
        answers
    });
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function QuizContextMenu({ quiz, cid, onDelete, onPublishToggle }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Toggle, {
                variant: "link",
                className: "text-secondary p-0 border-0",
                id: `quiz-menu-${quiz._id}`,
                style: {
                    boxShadow: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {}, void 0, false, {
                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Menu, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                        onClick: ()=>router.push(`/Courses/${cid}/Quizzes/${quiz._id}/Editor`),
                        children: "Edit"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                        onClick: ()=>onPublishToggle(quiz),
                        children: quiz.published ? 'Unpublish' : 'Publish'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Divider, {}, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                        onClick: ()=>onDelete(quiz._id, quiz.title),
                        className: "text-danger",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(QuizContextMenu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuizContextMenu;
var _c;
__turbopack_context__.k.register(_c, "QuizContextMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>Quizzes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$QuizContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/QuizContextMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const formatDate = (dateString)=>{
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
};
const getAvailabilityStatus = (quiz)=>{
    const now = new Date();
    const availableDate = quiz.availableDate ? new Date(quiz.availableDate) : null;
    const availableUntilDate = quiz.availableUntilDate ? new Date(quiz.availableUntilDate) : null;
    if (availableUntilDate && now > availableUntilDate) {
        return 'Closed';
    }
    if (availableDate && now < availableDate) {
        return `Not available until ${formatDate(quiz.availableDate)}`;
    }
    return 'Available';
};
function Quizzes() {
    _s();
    const { cid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Quizzes.useSelector": (state)=>state.accountReducer
    }["Quizzes.useSelector"]);
    const isStudent = currentUser?.role === 'STUDENT';
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { quizzes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Quizzes.useSelector": (state)=>state.quizzesReducer
    }["Quizzes.useSelector"]);
    const fetchQuizzes = async ()=>{
        const fetchedQuizzes = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findQuizzesForCourse"](cid);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])(fetchedQuizzes));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Quizzes.useEffect": ()=>{
            fetchQuizzes();
        }
    }["Quizzes.useEffect"], [
        cid
    ]);
    const handleAddQuiz = async ()=>{
        const newQuiz = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQuiz"](cid, {
            title: 'New Quiz',
            published: false
        });
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addQuiz"])(newQuiz));
        router.push(`/Courses/${cid}/Quizzes/${newQuiz._id}/Editor`);
    };
    const onDeleteQuiz = async (quizId)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteQuiz"](quizId);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])(quizzes.filter((q)=>q._id !== quizId)));
    };
    const handleDelete = (quizId, quizTitle)=>{
        const confirmed = window.confirm(`Are you sure you want to remove the quiz "${quizTitle}"?`);
        if (confirmed) {
            onDeleteQuiz(quizId);
        }
    };
    const handlePublishToggle = async (quiz)=>{
        const updatedQuiz = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishQuiz"](quiz._id, !quiz.published);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuizzes"])(quizzes.map((q)=>q._id === quiz._id ? updatedQuiz : q)));
    };
    const sortedQuizzes = [
        ...quizzes
    ].sort((a, b)=>{
        const dateA = a.availableDate ? new Date(a.availableDate).getTime() : 0;
        const dateB = b.availableDate ? new Date(b.availableDate).getTime() : 0;
        return dateA - dateB;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-quizzes",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 clearfix",
                children: !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    id: "wd-add-quiz",
                    variant: "danger",
                    size: "lg",
                    className: "float-end ms-2 text-nowrap border wd-header-action",
                    onClick: handleAddQuiz,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                            className: "me-2 position-relative",
                            style: {
                                bottom: '1px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        "Quiz"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            quizzes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-5 text-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoRocketOutline"], {
                        size: 48,
                        className: "mb-3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "fs-5",
                        children: "No quizzes yet."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: 'Click the "+ Quiz" button to add a new quiz.'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center justify-content-between mt-4 mb-0 p-3 ps-2 bg-secondary border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "m-0 d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                    className: "me-2 fs-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCaretDownFill"], {
                                    className: "me-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                "Assignment Quizzes"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
                        id: "wd-quiz-list",
                        className: "rounded-0",
                        children: sortedQuizzes.map((quiz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                                className: "wd-quiz-list-item p-3 ps-1 d-flex align-items-center",
                                style: {
                                    borderLeft: '4px solid #198754'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                        className: "me-2 fs-3 text-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoRocketOutline"], {
                                        className: "text-success me-3 fs-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-fill",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/Courses/${cid}/Quizzes/${quiz._id}`,
                                                className: "wd-quiz-link fw-bold text-decoration-none text-dark",
                                                children: quiz.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-muted small mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: getAvailabilityStatus(quiz) === 'Closed' ? 'text-danger' : getAvailabilityStatus(quiz) === 'Available' ? 'text-success' : '',
                                                        children: getAvailabilityStatus(quiz)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this),
                                                    ' ',
                                                    "| ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Due"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    formatDate(quiz.dueDate),
                                                    " |",
                                                    ' ',
                                                    quiz.points || 0,
                                                    " pts | ",
                                                    quiz.questionCount || 0,
                                                    " questions",
                                                    isStudent && quiz.latestScore !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            ' ',
                                                            "| ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Score:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            quiz.latestScore,
                                                            "/",
                                                            quiz.points
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ms-2 d-flex align-items-center",
                                        children: [
                                            !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    quiz.published ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                                        className: "text-success me-3 fs-5",
                                                        style: {
                                                            cursor: 'pointer'
                                                        },
                                                        onClick: ()=>handlePublishToggle(quiz),
                                                        title: "Click to unpublish"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBan"], {
                                                        className: "text-secondary me-3 fs-5",
                                                        style: {
                                                            cursor: 'pointer'
                                                        },
                                                        onClick: ()=>handlePublishToggle(quiz),
                                                        title: "Click to publish"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$QuizContextMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        quiz: quiz,
                                                        cid: cid,
                                                        onDelete: handleDelete,
                                                        onPublishToggle: handlePublishToggle
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            isStudent && quiz.published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                                className: "text-success me-3 fs-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, quiz._id, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(Quizzes, "QP+iuEgOwsWALqiGH+RL7UUXM9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Quizzes;
var _c;
__turbopack_context__.k.register(_c, "Quizzes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_cs4550_kanbas-next-js_app_%28Kambaz%29_Courses_%5Bcid%5D_Quizzes_254defa8._.js.map