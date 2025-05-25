import { customElement } from 'lit/decorators.js';
import $moduleElementNameStyles from './{module_name_kc}.styles';
import baseCss from '@serranolabs.io/shared/base';
import {
  BookeraModuleElement,
  moduleElementStyles,
} from '@serranolabs.io/shared/module-element';
import { BookeraModule, type RenderMode } from '@serranolabs.io/shared/module';

export const elementName = '{module_element_kc}';

@customElement(elementName)
export class $ModuleElementName extends BookeraModuleElement {
  static styles = [$moduleElementNameStyles, baseCss, moduleElementStyles];

  constructor(
    renderMode: RenderMode,
    module: BookeraModule,
    _panelTabId?: string
  ) {
    super(renderMode, module, _panelTabId);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [elementName]: $ModuleElementName;
  }
}
