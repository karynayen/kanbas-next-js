module.exports = [
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Modules/GreenCheckmark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GreenCheckmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
function GreenCheckmark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "me-1 position-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                style: {
                    top: "2px"
                },
                className: "text-success me-1 position-absolute fs-5"
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Modules/GreenCheckmark.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircle"], {
                className: "text-white me-1 fs-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Modules/GreenCheckmark.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Modules/GreenCheckmark.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "createAssignment",
    ()=>createAssignment,
    "deleteAssignment",
    ()=>deleteAssignment,
    "findAssignmentById",
    ()=>findAssignmentById,
    "findAssignmentsForCourse",
    ()=>findAssignmentsForCourse,
    "updateAssignment",
    ()=>updateAssignment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const findAssignmentsForCourse = async (courseId)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${COURSES_API}/${courseId}/assignments`);
    return data;
};
const findAssignmentById = async (assignmentId)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};
const createAssignment = async (courseId, assignment)=>{
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return data;
};
const updateAssignment = async (assignment)=>{
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};
const deleteAssignment = async (assignmentId)=>{
    const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};
}),
"[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>Assignments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-ssr] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-ssr] (ecmascript) <export default as ListGroupItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/InputGroup.js [app-ssr] (ecmascript) <export default as InputGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-bootstrap/esm/Form.js [app-ssr] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Modules/GreenCheckmark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/reducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cs4550/kanbas-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
;
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
};
function Assignments() {
    const { cid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.accountReducer);
    const isStudent = currentUser?.role === 'STUDENT';
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const fetchAssignments = async ()=>{
        const assignments = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAssignmentsForCourse"](cid);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAssignments"])(assignments));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAssignments();
    }, []);
    const onDeleteAssignment = async (assignmentId)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteAssignment"](assignmentId);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAssignments"])(assignments.filter((a)=>a._id !== assignmentId)));
    };
    const { assignments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.assignmentsReducer);
    const handleDelete = (assignmentId, assignmentTitle)=>{
        const confirmed = window.confirm(`Are you sure you want to remove the assignment "${assignmentTitle}"?`);
        if (confirmed) {
            onDeleteAssignment(assignmentId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-assignments",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 clearfix",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-50 float-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputGroup$3e$__["InputGroup"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "input-group-text bg-white border-end-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                                        className: "text-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                    id: "wd-search-assignment",
                                    placeholder: "Search...",
                                    className: "border-start-0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/Courses/${cid}/Assignments/new`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    id: "wd-add-assignment",
                                    variant: "danger",
                                    size: "lg",
                                    className: "float-end ms-2 text-nowrap border wd-header-action",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                            className: "me-2 position-relative",
                                            style: {
                                                bottom: '1px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        "Assignment"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                id: "wd-add-assignment-group",
                                variant: "secondary",
                                size: "lg",
                                className: "float-end text-nowrap border wd-header-action",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                                        className: "me-2 position-relative",
                                        style: {
                                            bottom: '1px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    "Group"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex align-items-center justify-content-between mt-4 mb-0 p-3 ps-2 wd-assignments-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        id: "wd-assignments-title",
                        className: "m-0 d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                className: "me-2 fs-5 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsCaretDownFill"], {
                                className: "me-2 text-secondary",
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            "ASSIGNMENTS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "light",
                                size: "sm",
                                className: "rounded-pill me-2 text-secondary wd-header-pill",
                                children: "40% of Total"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn p-1 bg-transparent border-0 text-secondary me-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn p-1 bg-transparent border-0 text-secondary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
                id: "wd-assignment-list",
                className: "rounded-0",
                children: assignments.map((assignment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                        className: "wd-assignment-list-item wd-assignment p-3 ps-2 d-flex align-items-center border-gray",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                className: "me-0 fs-3 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoNewspaperOutline"], {
                                className: "text-success me-3 fs-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-fill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/Courses/${cid}/Assignments/${assignment._id}`,
                                        className: "wd-assignment-link fw-bold text-decoration-none text-dark",
                                        children: assignment.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted small mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-danger",
                                                children: "Multiple Modules"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            " |",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Not available until"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            formatDate(assignment.availableFromDate),
                                            " |",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Due"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            formatDate(assignment.dueDate),
                                            " |",
                                            ' ',
                                            assignment.points,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ms-2 d-flex align-items-center",
                                children: [
                                    !isStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrash"], {
                                        className: "text-danger me-2",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>handleDelete(assignment._id, assignment.title)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cs4550$2f$kanbas$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {
                                        className: "ms-2 text-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, assignment._id, true, {
                        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/cs4550/kanbas-next-js/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_cs4550_kanbas-next-js_app_%28Kambaz%29_Courses_%5Bcid%5D_1acd295c._.js.map