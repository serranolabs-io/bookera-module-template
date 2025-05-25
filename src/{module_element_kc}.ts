import { customElement } from 'lit/decorators.js';
import $moduleElementNameStyles from './{module_name_kc}.styles';
import baseCss from '@serranolabs.io/shared/base';
import {
  BookeraModuleElement,
  moduleElementStyles,
} from '@serranolabs.io/shared/module-element';
import { BookeraModule, type RenderMode } from '@serranolabs.io/shared/module';

@customElement('{module_element_kc}')
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
    '{module_element_kc}': $ModuleElementName;
  }
}
