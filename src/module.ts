import { BookeraModule, DEFAULT_VERSION } from '@serranolabs.io/shared/module';
import { $ModuleElementName, elementName } from './{module_element_kc}';
import { Tab } from '@serranolabs.io/shared/tab';
import { genShortID } from '@serranolabs.io/shared/util';

const description = '{description}';

export const $moduleElementNameModule = new BookeraModule(
  DEFAULT_VERSION,
  '{module_name_hr}',
  description,
  new Tab(
    '{module_name_hr}',
    '{tab.icon}',
    '',
    elementName,
    '{shouldShowLeftSide}'
  ).removeTab(),
  genShortID(10),
  [`{renderModes}`],
  $ModuleElementName
);
