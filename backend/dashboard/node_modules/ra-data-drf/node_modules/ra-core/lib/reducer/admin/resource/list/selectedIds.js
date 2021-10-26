"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../../../../actions");
var dataFetchActions_1 = require("../../../../dataFetchActions");
var initialState = [];
var selectedIdsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === actions_1.SET_LIST_SELECTED_IDS) {
        return action.payload;
    }
    if (action.type === actions_1.TOGGLE_LIST_ITEM) {
        var index = previousState.indexOf(action.payload);
        if (index > -1) {
            return previousState.slice(0, index).concat(previousState.slice(index + 1));
        }
        else {
            return previousState.concat([action.payload]);
        }
    }
    if (action.type === actions_1.CRUD_DELETE_SUCCESS) {
        var index = previousState.indexOf(action.payload.data.id);
        if (index > -1) {
            return previousState.slice(0, index).concat(previousState.slice(index + 1));
        }
    }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === dataFetchActions_1.DELETE) {
            var index = previousState.indexOf(action.payload.id);
            if (index === -1) {
                return previousState;
            }
            return previousState.slice(0, index).concat(previousState.slice(index + 1));
        }
        if (action.meta.fetch === dataFetchActions_1.DELETE_MANY) {
            return previousState.filter(function (id) { return !action.payload.ids.includes(id); });
        }
    }
    return action.meta && action.meta.unselectAll
        ? initialState
        : previousState;
};
exports.default = selectedIdsReducer;
