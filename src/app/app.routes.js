"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var search_component_1 = require("./components/search/search.component");
var APP_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES, { useHash: true });
