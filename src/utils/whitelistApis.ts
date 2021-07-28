'use strict'
const CHECK = {
    ROLE: 'ROLE_CHECK',
}

// Valid Roles
const ROLE = {
    COMPENTENCY_REVIEWER: 'competencyReviewer',
    CONTENT_CREATOR: 'CONTENT_CREATOR',
    EDITOR: 'EDITOR',
    FRAC_ACCESS_COMPENTENCY: 'fracAccessCompetency',
    FRAC_ADMIN: 'fracAdmin',
    FRAC_REVIEWER_ONE: 'fracReviewerOne',
    FRAC_REVIEWER_TWO: 'fracReviewerTwo',
    IFU_MEMBER: 'IFUMember',
    MDO_ADMIN: 'MDO ADMIN',
    MEMBER: 'Member',
    PUBLIC: 'PUBLIC',
    PUBLISHER: 'PUBLISHER',
    REVIEWER: 'REVIEWER',
}

// All api list validations
export const API_LIST = {
    URL:
    {
        '/authApi/content/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/authApi/content/v3/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/details': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileDetails/test': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
              ROLE.MDO_ADMIN,
              ROLE.CONTENT_CREATOR,
            ],
        },
        // tslint:disable-next-line: object-literal-sort-keys
        '/protected/v8/resource/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/api/user/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/read/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/sunbirdigot/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/read/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/recent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/content-progres/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/v1/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/topic/:id/:slug': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/learner/course/v1/user/enrollment/list/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/hierarchy/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/read/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/forum/v2/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/forum/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/category/list': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/category/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/forum/tags': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/user/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/hierarchyUpdate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/hierarchy/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/create': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/upload/action/content/v3/upload/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/v1/content/retire': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/updateReviewStatus/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/review/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/publish/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/action/content/v3/update/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/orgTypeList': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/private/v1/assign/role': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/search': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/read': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/org/v1/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/block': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/user/v1/unblock': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/data/v1/system/settings/get/orgTypeConfig': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/proxies/v8/discussion/tags': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/recommended/userDepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/discussionHub/categories/:cid/:slug?/:tid?': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/discussionHub/topics/recent': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/:cohortType/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/content/like': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/telemetry': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/scrom/get/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/progress/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/rating/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/progress': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/history/continue': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/departmentType/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/department': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/deptAction/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/roles/getUsersV2': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/mdo/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileDetails/createUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/getUserRegistryByUser/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileRegistry/createUserRegistryV2': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/deptAction': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/historyByApplicationId/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/autocomplete/:query': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/deptAction/userrole': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/preference': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workflowhandler/applicationsSearch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getWorkOrders': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/add/workorder': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getWorkOrderById/:workOrderId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/user/autocomplete/:searchTerm': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/searchNodes': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/:type/:key': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/v2/add': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getWorkAllocationById/:workAllocationId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/update/workorder': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/getWOPdf/:workOrderId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/cbp/mydepartment': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/mandatoryContent/checkStatus': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/rating/content/average-ratingInfo/:do_id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/social/post/timeline': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/history/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/getAllNodes/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/getNodeById/:id/:type': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/listDeptNames': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/scroing/getTemplate/:templateId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/cbc/department': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/cbc/department/:deptId/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/spv/department/:deptId/': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/scroing/calculate': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/recommended': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/requests/received': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/established': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/established/:id': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/requested': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/add/connection': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/connections/connections/suggests': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/cohorts/user/autoenrollment/:courseId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/profanity/startPdfProfanity': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/profanity/getPdfProfanityForContent/:contentId': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/catalog': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/scroing/fetch': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/portal/mdo/deptAction/userrole': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/workallocation/v2/update': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/user/profileDetails/updateUser': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/protected/v8/frac/addDataNodeBulk': {
            checksNeeded: [CHECK.ROLE],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
        '/reset': {
            checksNeeded: [],
            // tslint:disable-next-line: object-literal-sort-keys
            ROLE_CHECK: [
                ROLE.PUBLIC,
            ],
        },
    },
    URL_PATTERN:
    [
        '/authApi/content/v3/create',
        '/authApi/content/v3/read/:do_id',
        '/proxies/v8/api/user/v2/read',
        '/proxies/v8/user/v1/read/:id',
        '/proxies/v8/sunbirdigot/read',
        '/proxies/v8/discussion/user/v1/create',
        '/proxies/v8/data/v1/system/settings/get/orgTypeList',
        '/proxies/v8/org/v1/search',
        '/proxies/v8/org/v1/update',
        '/proxies/v8/discussion/topic/:id/:slug',
        '/proxies/v8/learner/course/v1/user/enrollment/list/:id',
        '/proxies/v8/read/content-progres/:do_id',
        '/proxies/v8/content-progres/:do_id',
        '/proxies/v8/action/content/v3/hierarchy/:do_id',
        '/proxies/v8/action/content/v3/hierarchyUpdate',
        '/proxies/v8/action/content/v3/hierarchy/update',
        '/proxies/v8/action/content/v3/read/:do_id',
        '/proxies/v8/discussion/forum/v2/read',
        '/proxies/v8/discussion/category/list',
        '/proxies/v8/discussion/category/:id',
        '/proxies/v8/discussion/forum/tags',
        '/proxies/v8/action/content/v3/update/:do_id',
        '/proxies/v8/discussion/user/:id',
        '/proxies/v8/action/content/v3/create',
        '/proxies/v8/upload/action/content/v3/upload/:do_id',
        '/proxies/v8/v1/content/retire',
        '/proxies/v8/action/content/v3/updateReviewStatus/',
        '/proxies/v8/action/content/v3/review/:do_id',
        '/proxies/v8/discussion/recent',
        '/proxies/v8/action/content/v3/publish/',
        '/proxies/v8/user/private/v1/assign/role',
        '/proxies/v8/user/v1/search',
        '/proxies/v8/org/v1/read',
        '/proxies/v8/discussion/tags',
        '/proxies/v8/user/v1/block',
        '/proxies/v8/user/v1/unblock',
        '/proxies/v8/data/v1/system/settings/get/orgTypeConfig',
        '/protected/v8/user/profileDetails/test',
        '/protected/v8/resource/',
        '/protected/v8/user/details',
        '/protected/v8/connections/connections/recommended/userDepartment',
        '/protected/v8/discussionHub/categories/:cid/:slug?/:tid?',
        '/protected/v8/discussionHub/topics/recent',
        '/protected/v8/cohorts/:cohortType/:contentId',
        '/protected/v8/user/content/like',
        '/protected/v8/user/telemetry',
        '/protected/v8/scrom/get/:id',
        '/protected/v8/user/progress/:contentId',
        '/protected/v8/user/rating/:contentId',
        '/protected/v8/user/progress',
        '/protected/v8/user/history/continue',
        '/protected/v8/portal/departmentType/',
        '/protected/v8/portal/spv/department',
        '/protected/v8/portal/spv/deptAction/',
        '/protected/v8/user/roles/getUsersV2',
        '/protected/v8/portal/spv/mydepartment',
        '/protected/v8/portal/mdo/mydepartment',
        '/protected/v8/user/profileDetails/createUser',
        '/protected/v8/user/profileRegistry/getUserRegistryByUser/:id',
        '/protected/v8/user/profileRegistry/createUserRegistryV2',
        '/protected/v8/portal/deptAction',
        '/protected/v8/workflowhandler/historyByApplicationId/',
        '/protected/v8/user/autocomplete/:query',
        '/protected/v8/portal/spv/deptAction/userrole',
        '/protected/v8/user/preference',
        '/protected/v8/workflowhandler/applicationsSearch',
        '/protected/v8/workallocation/getWorkOrders',
        '/protected/v8/workallocation/add/workorder',
        '/protected/v8/workallocation/getWorkOrderById/:workOrderId',
        '/protected/v8/workallocation/user/autocomplete/:searchTerm',
        '/protected/v8/frac/searchNodes',
        '/protected/v8/frac/:type/:key',
        '/protected/v8/workallocation/v2/add',
        '/protected/v8/workallocation/getWorkAllocationById/:workAllocationId',
        '/protected/v8/workallocation/update/workorder',
        '/protected/v8/workallocation/v2/update',
        '/protected/v8/workallocation/getWOPdf/:workOrderId',
        '/protected/v8/portal/cbp/mydepartment',
        '/protected/v8/user/mandatoryContent/checkStatus',
        '/protected/v8/user/rating/content/average-ratingInfo/:do_id',
        '/protected/v8/social/post/timeline',
        '/protected/v8/user/history/:id',
        '/protected/v8/frac/getAllNodes/:type',
        '/protected/v8/frac/getNodeById/:id/:type',
        '/protected/v8/portal/listDeptNames',
        '/protected/v8/scroing/getTemplate/:templateId',
        '/protected/v8/portal/cbc/department',
        '/protected/v8/portal/cbc/department/:deptId/',
        '/protected/v8/portal/spv/department/:deptId/',
        '/protected/v8/scroing/calculate',
        '/protected/v8/connections/connections/recommended',
        '/protected/v8/connections/connections/requests/received',
        '/protected/v8/connections/connections/established',
        '/protected/v8/connections/connections/established/:id',
        '/protected/v8/connections/connections/requested',
        '/protected/v8/connections/add/connection',
        '/protected/v8/connections/connections/suggests',
        '/protected/v8/cohorts/user/autoenrollment/:courseId',
        '/protected/v8/profanity/startPdfProfanity',
        '/protected/v8/profanity/getPdfProfanityForContent/:contentId',
        '/protected/v8/catalog',
        '/protected/v8/scroing/fetch',
        '/protected/v8/portal/mdo/deptAction/userrole',
        '/protected/v8/user/profileDetails/updateUser',
        '/protected/v8/frac/addDataNodeBulk',
        '/reset',
    ],
}