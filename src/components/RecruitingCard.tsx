import {
  Colors,
  TextStyles,
  Callout,
  Button,
  ButtonColor,
  Icon,
  IconButton,
  CalloutStatus
} from '@class101/ui';
import React, { useState } from 'react';
import styled from 'styled-components';

const RecruitingCard: React.FC = () => {
  const copyToClipboard = (val: string) => {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  };

  const [_, setCopied] = useState(false);

  const handleClickCopy = () => {
    copyToClipboard('c.henry.9209@gmail.com');
    setCopied(true);
  };

  return (
    <RecruitingCardWrapper title="지원방법" status={CalloutStatus.SUGGEST}>
      <Flex>
        <b>helloworld@class101.net</b>
        <IconButton
          color={ButtonColor.DEFAULT}
          icon={<Icon.Clip />}
          size="xs"
          onClick={handleClickCopy}
        ></IconButton>
      </Flex>
    </RecruitingCardWrapper>
  );
};

export default RecruitingCard;

const RecruitingCardWrapper = styled(Callout)`
  margin: 16px 0;
  padding: 16px;

  h5 {
    ${TextStyles.subtitle1};
    font-weight: 600;
    margin-bottom: 8px;
  }
  p {
    ${TextStyles.body2};
    margin-bottom: 8px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;
  align-items: center;

  b {
    ${TextStyles.body1};
    font-weight: 600;

    margin-right: 8px;
  }
`;
