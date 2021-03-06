/**
 * Action.ts
 *
 * Actions are simple payloads of information that send data from oni to the redux store.
 *
 * For information on Actions, check out this link:
 * http://redux.js.org/docs/basics/Actions.html
 */

import * as Config from "./../Config"
import { ILog } from "./Logs"
import { StatusBarAlignment } from "./State"
import { Rectangle } from "./Types"

export interface ISetCursorPositionAction {
    type: "SET_CURSOR_POSITION",
    payload: {
        pixelX: number,
        pixelY: number,
        fontPixelWidth: number,
        fontPixelHeight: number,
        cursorCharacter: string,
        cursorPixelWidth: number,
    }
}

export interface IStatusBarShowAction {
    type: "STATUSBAR_SHOW",
    payload: {
        id: string,
        contents: JSX.Element,
        alignment: StatusBarAlignment,
        priority: number,
    }
}

export interface IStatusBarHideAction {
    type: "STATUSBAR_HIDE",
    payload: {
        id: string,
    }
}

export interface ISetActiveWindowDimensions {
    type: "SET_ACTIVE_WINDOW_DIMENSIONS",
    payload: {
        dimensions: Rectangle,
    }
}

export interface ISetModeAction {
    type: "SET_MODE",
    payload: {
        mode: string,
    }
}

export interface ISetColorsAction {
    type: "SET_COLORS",
    payload: {
        foregroundColor: string,
        backgroundColor: string,
    }
}

export interface IShowSignatureHelpAction {
    type: "SHOW_SIGNATURE_HELP",
    payload: Oni.Plugin.SignatureHelpResult
}

export interface IHideSignatureHelpAction {
    type: "HIDE_SIGNATURE_HELP"
}

export interface IShowMenuAction {
    type: "SHOW_MENU",
    payload: {
        id: string
        options: Oni.Menu.MenuOption[],
    }
}

export interface IFilterMenuAction {
    type: "FILTER_MENU",
    payload: {
        filter: string,
    }
}

export interface IHideMenuAction {
    type: "HIDE_MENU"
}

export interface INextMenuAction {
    type: "NEXT_MENU"
}

export interface IPreviousMenuAction {
    type: "PREVIOUS_MENU"
}

export interface IShowQuickInfoAction {
    type: "SHOW_QUICK_INFO",
    payload: {
        title: string
        description: string,
    }
}

export interface IShowAutoCompletionAction {
    type: "SHOW_AUTO_COMPLETION",
    payload: {
        base: string
        entries: Oni.Plugin.CompletionInfo[],
    }
}

export interface ISetAutoCompletionDetails {
    type: "SET_AUTO_COMPLETION_DETAILS",
    payload: {
        detailedEntry: Oni.Plugin.CompletionInfo,
    }
}

export interface IHideAutoCompletionAction {
    type: "HIDE_AUTO_COMPLETION"
}

export interface INextAutoCompletionAction {
    type: "NEXT_AUTO_COMPLETION"
}

export interface IPreviousAutoCompletionAction {
    type: "PREVIOUS_AUTO_COMPLETION"
}

export interface IHideQuickInfoAction {
    type: "HIDE_QUICK_INFO"
}

export interface IShowCursorLineAction {
    type: "SHOW_CURSOR_LINE"
}

export interface IHideCurorLineAction {
    type: "HIDE_CURSOR_LINE"
}

export interface IShowCursorColumnAction {
    type: "SHOW_CURSOR_COLUMN"
}

export interface IHideCursorColumnAction {
    type: "HIDE_CURSOR_COLUMN"
}

export interface ISetConfigurationValue<K extends keyof Config.IConfigValues> {
    type: "SET_CONFIGURATION_VALUE"
    payload: {
        key: K,
        value: Config.IConfigValues[K],
    }
}
export interface IToggleLogFold {
    type: "TOGGLE_LOG_FOLD"
    payload: {
        index: number,
    }
}
export interface IChangeLogsVisibility {
    type: "CHANGE_LOGS_VISIBILITY",
    payload: {
        visibility: boolean,
    }
}
export interface IMakeLog {
    type: "MAKE_LOG",
    payload: {
        log: ILog,
    }
}

export type Action<K extends keyof Config.IConfigValues> =
    SimpleAction | ActionWithGeneric<K>

export type SimpleAction =
    ISetCursorPositionAction |
    IShowSignatureHelpAction |
    IHideSignatureHelpAction |
    IShowQuickInfoAction |
    IHideQuickInfoAction |
    IShowAutoCompletionAction |
    IHideAutoCompletionAction |
    INextAutoCompletionAction |
    IPreviousAutoCompletionAction |
    ISetAutoCompletionDetails |
    IShowMenuAction |
    IHideMenuAction |
    IPreviousMenuAction |
    INextMenuAction |
    IFilterMenuAction |
    ISetModeAction |
    ISetColorsAction |
    ISetActiveWindowDimensions |
    IStatusBarHideAction |
    IStatusBarShowAction |
    IHideCurorLineAction |
    IHideCursorColumnAction |
    IShowCursorLineAction |
    IShowCursorColumnAction |
    IToggleLogFold |
    IChangeLogsVisibility |
    IMakeLog

export type ActionWithGeneric<K extends keyof Config.IConfigValues> =
    ISetConfigurationValue<K>
