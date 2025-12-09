module.exports = [
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>QuizPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-ssr] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Form.js [app-ssr] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Alert.js [app-ssr] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function QuizPreview() {
    const { cid, qid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.accountReducer);
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Redirect students away from preview
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentUser?.role === 'STUDENT') {
            router.push(`/Courses/${cid}/Quizzes/${qid}`);
        }
    }, [
        currentUser,
        cid,
        qid,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const quizData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findQuizById"](qid);
                const questionsData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Quizzes$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findQuestionsForQuiz"](qid);
                setQuiz(quizData);
                setQuestions(questionsData);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [
        qid
    ]);
    const handleSubmit = ()=>{
        let totalScore = 0;
        questions.forEach((q)=>{
            const answer = answers[q._id];
            let isCorrect = false;
            if (q.questionType === 'Multiple Choice') {
                isCorrect = q.choices[answer]?.isCorrect || false;
            } else if (q.questionType === 'True/False') {
                isCorrect = q.correctAnswer === answer;
            } else if (q.questionType === 'Fill in the Blank') {
                const studentAnswer = (answer || '').toLowerCase().trim();
                isCorrect = q.correctAnswers?.some((ca)=>ca.toLowerCase().trim() === studentAnswer);
            }
            if (isCorrect) totalScore += q.points || 0;
        });
        setScore(totalScore);
        setShowResults(true);
    };
    const getAnswerStatus = (questionId)=>{
        const question = questions.find((q)=>q._id === questionId);
        const answer = answers[questionId];
        if (answer === undefined) return null;
        let isCorrect = false;
        if (question.questionType === 'Multiple Choice') {
            isCorrect = question.choices[answer]?.isCorrect || false;
        } else if (question.questionType === 'True/False') {
            isCorrect = question.correctAnswer === answer;
        } else if (question.questionType === 'Fill in the Blank') {
            const studentAnswer = (answer || '').toLowerCase().trim();
            isCorrect = question.correctAnswers?.some((ca)=>ca.toLowerCase().trim() === studentAnswer);
        }
        return isCorrect;
    };
    const totalPoints = questions.reduce((sum, q)=>sum + (q.points || 0), 0);
    if (currentUser?.role === 'STUDENT') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                variant: "danger",
                children: "You do not have permission to preview quizzes."
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
            lineNumber: 102,
            columnNumber: 12
        }, this);
    }
    if (!quiz || questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                    variant: "warning",
                    children: "No questions in this quiz. Please add questions first."
                }, void 0, false, {
                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "secondary",
                    onClick: ()=>router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`),
                    children: "Go to Editor"
                }, void 0, false, {
                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    }
    const currentQuestion = questions[currentQuestionIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow-1 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        variant: "info",
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Quiz Preview"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            " - This is a preview of the published version of the quiz. Answers are NOT saved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: quiz.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: [
                            "Started: ",
                            new Date().toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    !showResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                                        className: "d-flex justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "Question ",
                                                        currentQuestionIndex + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    currentQuestion.points,
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "fw-bold",
                                                children: currentQuestion.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: currentQuestion.question
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            currentQuestion.questionType === 'Multiple Choice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: currentQuestion.choices?.map((choice, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        id: `choice-${currentQuestion._id}-${idx}`,
                                                        name: `question-${currentQuestion._id}`,
                                                        label: choice.text || `Option ${idx + 1}`,
                                                        checked: answers[currentQuestion._id] === idx,
                                                        onChange: ()=>setAnswers({
                                                                ...answers,
                                                                [currentQuestion._id]: idx
                                                            }),
                                                        className: "mb-2"
                                                    }, idx, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            currentQuestion.questionType === 'True/False' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        id: `true-${currentQuestion._id}`,
                                                        name: `question-${currentQuestion._id}`,
                                                        label: "True",
                                                        checked: answers[currentQuestion._id] === true,
                                                        onChange: ()=>setAnswers({
                                                                ...answers,
                                                                [currentQuestion._id]: true
                                                            }),
                                                        className: "mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                                        type: "radio",
                                                        id: `false-${currentQuestion._id}`,
                                                        name: `question-${currentQuestion._id}`,
                                                        label: "False",
                                                        checked: answers[currentQuestion._id] === false,
                                                        onChange: ()=>setAnswers({
                                                                ...answers,
                                                                [currentQuestion._id]: false
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            currentQuestion.questionType === 'Fill in the Blank' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                type: "text",
                                                placeholder: "Type your answer here...",
                                                value: answers[currentQuestion._id] || '',
                                                onChange: (e)=>setAnswers({
                                                        ...answers,
                                                        [currentQuestion._id]: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex justify-content-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "secondary",
                                        disabled: currentQuestionIndex === 0,
                                        onClick: ()=>setCurrentQuestionIndex(currentQuestionIndex - 1),
                                        children: "← Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    currentQuestionIndex === questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "danger",
                                        onClick: handleSubmit,
                                        children: "Submit Quiz"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "primary",
                                        onClick: ()=>setCurrentQuestionIndex(currentQuestionIndex + 1),
                                        children: "Next →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /* Results View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                variant: score >= totalPoints / 2 ? 'success' : 'warning',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Quiz Results"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-4 mb-0",
                                        children: [
                                            "Score: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: score
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 24
                                            }, this),
                                            " / ",
                                            totalPoints,
                                            " points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "mt-4",
                                children: "Review Answers:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            questions.map((q, idx)=>{
                                const isCorrect = getAnswerStatus(q._id);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    className: `mb-3 ${isCorrect ? 'border-success' : 'border-danger'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                                            className: `d-flex justify-content-between ${isCorrect ? 'bg-success text-white' : 'bg-danger text-white'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Question ",
                                                        idx + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isCorrect ? '✓ Correct' : '✗ Incorrect'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "fw-bold",
                                                    children: q.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: q.question
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Your Answer:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 23
                                                        }, this),
                                                        ' ',
                                                        q.questionType === 'Multiple Choice' ? q.choices[answers[q._id]]?.text || 'No answer' : q.questionType === 'True/False' ? answers[q._id] === true ? 'True' : answers[q._id] === false ? 'False' : 'No answer' : answers[q._id] || 'No answer'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this),
                                                !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-success",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Correct Answer:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this),
                                                        ' ',
                                                        q.questionType === 'Multiple Choice' ? q.choices.find((c)=>c.isCorrect)?.text : q.questionType === 'True/False' ? q.correctAnswer ? 'True' : 'False' : q.correctAnswers?.join(' or ')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, q._id, true, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "secondary",
                                onClick: ()=>{
                                    setShowResults(false);
                                    setAnswers({});
                                    setCurrentQuestionIndex(0);
                                },
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "mt-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outline-secondary",
                        onClick: ()=>router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`),
                        children: "✏️ Keep Editing This Quiz"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-start p-3 bg-light",
                style: {
                    width: '250px',
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: "Questions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
                        children: questions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"].Item, {
                                active: idx === currentQuestionIndex && !showResults,
                                onClick: ()=>!showResults && setCurrentQuestionIndex(idx),
                                style: {
                                    cursor: showResults ? 'default' : 'pointer'
                                },
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Question ",
                                            idx + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    answers[q._id] !== undefined && !showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-success",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this),
                                    showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: getAnswerStatus(q._id) ? 'text-success' : 'text-danger',
                                        children: getAnswerStatus(q._id) ? '✓' : '✗'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, q._id, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Quizzes/[qid]/Preview/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_cs4550_kanbas-next-js_app_%28Kambaz%29_Courses_%5Bcid%5D_Quizzes_ed0dca10._.js.map