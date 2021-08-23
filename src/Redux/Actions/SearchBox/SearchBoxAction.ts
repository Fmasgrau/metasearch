/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createAction } from '@reduxjs/toolkit'
import { SEARCHBOX_DISABLE_BUTTON, SEARCHBOX_ITEM_SELECTED, SEARCHBOX_TEXT } from '../../types'


export const isDisabled = createAction<boolean>(SEARCHBOX_DISABLE_BUTTON)

export const itemSelected = createAction<string>(SEARCHBOX_ITEM_SELECTED)

export const searchText = createAction<string>(SEARCHBOX_TEXT)





