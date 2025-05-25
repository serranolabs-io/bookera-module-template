import { customElement } from 'lit/decorators.js';
import $moduleElementNameStyles from './{module_element_kc}.styles';
import baseCss from '@serranolabs.io/shared/base';
import {
  BookeraModuleElement,
  moduleElementStyles,
} from '@serranolabs.io/shared/module-element';
import { BookeraModule, type RenderMode } from '@serranolabs.io/shared/module';
import { html, TemplateResult } from 'lit';

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

  protected renderInSettings(): TemplateResult {
    return html`hello from settings`;
  }
  protected renderInSidePanel(): TemplateResult {
    return html`hello from Side panel`;
  }
  protected renderInPanel(): TemplateResult {
    return html`hello from Panel`;
  }
  protected renderInModuleDaemon(): TemplateResult {
    return html`hello from module daemon`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [elementName]: $ModuleElementName;
  }
}
