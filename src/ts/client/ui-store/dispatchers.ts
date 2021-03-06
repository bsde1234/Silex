/**
 * @fileoverview helpers to dispatch common actions on the store
 * TODO: 1- remove all references to the store or dispatch => every function should take ElementState[] and return the changes to be made as an ElementState[]
 * TODO: 2- move this file to a cross platform package (e.g. in src/ts/helpers/)
 */

import { PageState } from '../page-store/types'
import { getUi, updateUi } from './index'
import { store } from '../store/index'

export const openPage = (item: PageState, ui = getUi(), dispatch = store.dispatch) => updateUi({
  ...ui,
  currentPageId: item.id,
}, dispatch)

export const openToolbox = (toolboxName: string, ui = getUi(), dispatch = store.dispatch) => updateUi({
  ...ui,
  currentToolbox: toolboxName,
}, dispatch)

