import _ from 'lodash';

const TAG_TEXT: { [key: string]: string } = {
  recruiting: '',
  'open source': '',
};

export default (tag: string) => TAG_TEXT[tag] || _.startCase(tag);
