import { BookeraModule, DEFAULT_VERSION } from '@serranolabs.io/shared/module';
import { $ModuleElementName } from './{module_element_kc}';

const description = '{description}';

export const $moduleElementNameModule = new BookeraModule(
  DEFAULT_VERSION,
  '{module_name_hr}',
  description,
  new Tab(
    '{module_name_hr}',
    'palette',
    '',
    '{module_element_kc}',
    'left'
  ).removeTab(),
  genShortID(10),
  true,
  $ModuleElementName
);
