import { DialogProps } from 'element-plus';
import { VNode } from 'vue';
import { ICommandDialogArrtsProviderConfig } from './Core';
export type IElementPlusConfig = {
    slots?: {
        [key: string]: () => VNode | VNode[];
    };
    attrs?: Partial<DialogProps & Record<string, any>>;
    title?: string;
    width?: string;
    onCancel?: (() => void) | boolean;
    onCancelBtnText?: string;
    onConfirm?: (() => void) | boolean;
    onConfirmBtnText?: string;
} & ICommandDialogArrtsProviderConfig & Record<string, any>;
export declare const createElementPlusDialog: () => (ContentVNode: VNode, config?: IElementPlusConfig) => import('./Core').IConsumer;
