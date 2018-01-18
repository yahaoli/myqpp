var express = require('express')
    , router = express.Router()
    ,validate_ctl=require('../controls/validate_ctl')
router
    //.all('*',common.validate)
    .post('/platform',validate_ctl.platform)
    .post('/platformAll', validate_ctl.platformAll)
    .post('/platform/add',validate_ctl.platform_add)
    .post('/platform/purchase',validate_ctl.platform_purchase)
    .post('/purchase/:handle',validate_ctl.platform_handle)
    .post('/platform/clear',validate_ctl.platform_clear)
    .post('/platform/submit',validate_ctl.platform_submit)
    .post('/storeAll',validate_ctl.storeAll)
    .post('/store',validate_ctl.store)
    .post('/storeSet/:handle',validate_ctl.store_handle)
    .post('/storageOutAll',validate_ctl.storageOutAll)
    .post('/storageOut',validate_ctl.storageOut)
    .post('/storageOut/add',validate_ctl.storageOut_add)
    .post('/storageOut/shop',validate_ctl.storageOut_shop)
    .post('/storageOutSet/:handle',validate_ctl.storageOut_handle)
    .post('/storageOut/clear',validate_ctl.storageOut_clear)
    .post('/storageOut/submit',validate_ctl.storageOut_submit)
    .post('/saleAll',validate_ctl.saleAll)
    .post('/saleList',validate_ctl.saleList)
    .post('/saleDetail',validate_ctl.saleDetail)
    .post('/saleSet/:handle',validate_ctl.sale_handle)
    .post('/buyAnalysis',validate_ctl.buy_analysis)
    .post('/sellAnalysis',validate_ctl.sell_analysis)
    .post('/sellAnalysisChart',validate_ctl.sell_analysisChart)
module.exports = router;